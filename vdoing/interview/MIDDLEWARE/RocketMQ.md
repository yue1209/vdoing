---
title: RocketMQ
date: 2021-10-20 09:32:18
permalink: /pages/bd51fb/
categories:
  - interview
  - MQ
tags:
  - 
---

### 1.1RocketMQ由哪些角色组成，每个角色作用和特点是什么？

| 角色       | 作用                                                         |
| ---------- | ------------------------------------------------------------ |
| Nameserver | 无状态，动态列表；这也是和zookeeper的重要区别之一。zookeeper是有状态的。 |
| Producer   | 消息生产者，负责发消息到Broker。                             |
| Broker     | 就是MQ本身，负责收发消息、持久化消息等。                     |
| Consumer   | 消息消费者，负责从Broker上拉取消息进行消费，消费完进行ack。  |

### 1.2RocketMQ中的Topic和JMS的queue有什么区别？

queue 就是来源于数据结构的 FIFO 队列。而 Topic 是个抽象的概念，每个 Topic 底层对应N个 queue，而数据也真实存在 queue 上的。

### 1.3RocketMQ Broker中的消息被消费后会立即删除吗？

**不会**，每条消息都会持久化到CommitLog中，每个Consumer连接到Broker后会维持消费进度信息，当有消息消费后只是当前Consumer的消费进度（CommitLog的offset）更新了。

4.6版本默认48小时后会删除不再使用的CommitLog文件

- 检查这个文件最后访问时间
- 判断是否大于过期时间
- 指定时间删除，默认凌晨4点

源码如下：

```java
/**
 * {@link org.apache.rocketmq.store.DefaultMessageStore.CleanCommitLogService#isTimeToDelete()}
 */
private boolean isTimeToDelete() {
    // when = "04";
    String when = DefaultMessageStore.this.getMessageStoreConfig().getDeleteWhen();
    // 是04点，就返回true
    if (UtilAll.isItTimeToDo(when)) {
        return true;
    }
 // 不是04点，返回false
    return false;
}
/**
 * {@link org.apache.rocketmq.store.DefaultMessageStore.CleanCommitLogService#deleteExpiredFiles()}
 */
private void deleteExpiredFiles() {
    // isTimeToDelete()这个方法是判断是不是凌晨四点，是的话就执行删除逻辑。
    if (isTimeToDelete()) {
        // 默认是72，但是broker配置文件默认改成了48，所以新版本都是48。
        long fileReservedTime = 48 * 60 * 60 * 1000;
        deleteCount = DefaultMessageStore.this.commitLog.deleteExpiredFile(72 * 60 * 60 * 1000, xx, xx, xx);
    }
}                                                                     
/**
 * {@link org.apache.rocketmq.store.CommitLog#deleteExpiredFile()}
 */
public int deleteExpiredFile(xxx) {
    // 这个方法的主逻辑就是遍历查找最后更改时间+过期时间，小于当前系统时间的话就删了（也就是小于48小时）。
    return this.mappedFileQueue.deleteExpiredFileByTime(72 * 60 * 60 * 1000, xx, xx, xx);
}
```

### 1.4RocketMQ消费模式有几种？

消费模型由 Consumer 决定，消费维度为 Topic。

- 集群消费
  - 一条消息只会被同Group中的一个Consumer消费
  - 多个Group同时消费一个Topic时，每个Group都会有一个Consumer消费到数据
- 广播消费
  消息将对一 个 Consumer Group 下的各个 Consumer 实例都消费一遍。即即使这些 Consumer 属于同一个 Consumer Group ，消息也会被 Consumer Group 中的每个 Consumer 都消费一次。

### 1.5RocketMQ消息是push还是pull？

RocketMQ没有真正意义的push，都是pull，虽然有push类，但实际底层实现采用的是**长轮询机制**，即拉取方式

> broker端属性 longPollingEnable 标记是否开启长轮询。默认开启

源码如下：

```java
// {@link org.apache.rocketmq.client.impl.consumer.DefaultMQPushConsumerImpl#pullMessage()}
// 看到没，这是一只披着羊皮的狼，名字叫PushConsumerImpl，实际干的确是pull的活。
// 拉取消息，结果放到pullCallback里
this.pullAPIWrapper.pullKernelImpl(pullCallback);
```

### 1.6为什么要主动拉取消息而不使用事件监听方式？

事件驱动方式是建立好长连接，由事件（发送数据）的方式来实时推送。

如果broker主动推送消息的话有可能push速度快，消费速度慢的情况，那么就会造成消息在 Consumer 端堆积过多，同时又不能被其他 Consumer 消费的情况。而 pull 的方式可以根据当前自身情况来 pull，不会造成过多的压力而造成瓶颈。所以采取了 pull 的方式。

### 1.7Broker如何处理拉取请求的？

Consumer首次请求Broker
Broker中是否有符合条件的消息

- 有
  - 响应 Consumer
  - 等待下次 Consumer 的请求
- 没有
  - DefaultMessageStore#ReputMessageService#run方法
  - PullRequestHoldService 来 Hold 连接，每个 5s 执行一次检查 pullRequestTable 有没有消息，有的话立即推送
  - 每隔 1ms 检查 commitLog 中是否有新消息，有的话写入到 pullRequestTable
  - 当有新消息的时候返回请求
  - 挂起 consumer 的请求，即不断开连接，也不返回数据
  - 使用 consumer 的 offset，

### 1.8RocketMQ如何做负载均衡？

通过Topic在多Broker中分布式存储实现。

### **1.9producer端**

发送端指定 message queue发送消息到相应的 broker，来达到写入时的负载均衡

- 提升写入吞吐量，当多个producer同时向一个 broker 写入数据的时候，性能会下降
- 消息分布在多 broker 中，为负载消费做准备

默认策略是随机选择：

- producer 维护一个 index
- 每次取节点会自增
- index 向所有 broker 个数取余
- 自带容错策略

其他实现：

- SelectMessageQueueByHash
- hash的是传入的args
- SelectMessageQueueByRandom
- SelectMessageQueueByMachineRoom 没有实现

也可以自定义实现**MessageQueueSelector**接口中的select方法

```java
MessageQueue select(final List<MessageQueue> mqs, final Message msg, final Object arg);
1
```

### **1.10consumer端**

采用的是平均分配算法来进行负载均衡。

**其他负载均衡算法**

- 平均分配策略(**默认**)(AllocateMessageQueueAveragely)
- 环形分配策略(AllocateMessageQueueAveragelyByCircle)
- 手动配置分配策略(AllocateMessageQueueByConfig)
- 机房分配策略(AllocateMessageQueueByMachineRoom)
- 一致性哈希分配策略(AllocateMessageQueueConsistentHash)
- 靠近机房策略(AllocateMachineRoomNearby)

### 1.11当消费负载均衡consumer和queue不对等的时候会发生什么？

Consumer 和 queue 会优先平均分配，如果 Consumer 少于 queue 的个数，则会存在部分 Consumer 消费多个 queue 的情况，如果 Consumer 等于 queue 的个数，那就是一个 Consumer 消费一个 queue，如果 Consumer 个数大于 queue 的个数，那么会有部分 Consumer 空余出来，白白的浪费了。

### 1.12消息重复消费如何解决？

影响消息正常发送和消费的**重要原因是网络的不确定性。**

- **引起重复消费的原因**

  - **ACK**
    正常情况下在consumer真正消费完消息后应该发送ack，通知broker该消息已正常消费，从queue中剔除

    当ack因为网络原因无法发送到broker，broker会认为词条消息没有被消费，此后会开启消息重投机制把消息再次投递到consumer

  - **消费模式**
    在CLUSTERING模式下，消息在broker中会保证相同group的consumer消费一次，但是针对不同group的consumer会推送多次

- **解决方案**

  - **数据库表**

    处理消息前，使用消息主键在表中带有约束的字段中insert

  - **Map**

    单机时可以使用map *ConcurrentHashMap* -> putIfAbsent guava cache

  - **Redis**

    分布式锁搞起来。

### 1.13如何让 RocketMQ 保证消息的顺序消费？

首先多个 queue 只能保证单个 queue 里的顺序，queue 是典型的 FIFO，天然顺序。多个 queue 同时消费是无法绝对保证消息的有序性的。所以总结如下：

同一 topic，同一个 QUEUE，发消息的时候一个线程去发送消息，消费的时候 一个线程去消费一个 queue 里的消息。

### 1.14怎么保证消息发到同一个queue？

Rocket MQ给我们提供了MessageQueueSelector接口，可以自己重写里面的接口，实现自己的算法，举个最简单的例子：判断`i % 2 == 0`，那就都放到queue1里，否则放到queue2里。

```java
for (int i = 0; i < 5; i++) {
    Message message = new Message("orderTopic", ("hello!" + i).getBytes());
    producer.send(
        // 要发的那条消息
        message,
        // queue 选择器 ，向 topic中的哪个queue去写消息
        new MessageQueueSelector() {
            // 手动 选择一个queue
            @Override
            public MessageQueue select(
                // 当前topic 里面包含的所有queue
                List<MessageQueue> mqs,
                // 具体要发的那条消息
                Message msg,
                // 对应到 send（） 里的 args，也就是2000前面的那个0
                Object arg) {
                // 向固定的一个queue里写消息，比如这里就是向第一个queue里写消息
                if (Integer.parseInt(arg.toString()) % 2 == 0) {
                    return mqs.get(0);
                } else {
                    return mqs.get(1);
                }
            }
        },
        // 自定义参数：0
        // 2000代表2000毫秒超时时间
        i, 2000);
}
```

### 1.15RocketMQ如何保证消息不丢失？

首先在如下三个部分都可能会出现丢失消息的情况：

- Producer端
- Broker端
- Consumer端

### 1.16Producer端如何保证消息不丢失

- 采取send()**同步发消息**，发送结果是同步感知的。

- 发送失败后可以**重试**，设置重试次数。默认3次。

  > producer.setRetryTimesWhenSendFailed(10);

- **集群部署**，比如发送失败了的原因可能是当前Broker宕机了，重试的时候会发送到其他Broker上。

### 1.17Broker端如何保证消息不丢失

- 修改刷盘策略为同步刷盘。默认情况下是异步刷盘的。

  > flushDiskType = SYNC_FLUSH

- 集群部署，主从模式，高可用。

### 1.18Consumer端如何保证消息不丢失

- 完全消费正常后在进行手动ack确认。

### 1.19RocketMQ的消息堆积如何处理？

首先要找到是什么原因导致的消息堆积，是 Producer 太多了，Consumer 太少了导致的还是说其他情况，总之先定位问题。

然后看下消息消费速度是否正常，正常的话，可以通过上线更多 Consumer 临时解决消息堆积问题

### 1.20如果Consumer和Queue不对等，上线了多台也在短时间内无法消费完堆积的消息怎么办？

- 准备一个临时的 topic
- queue 的数量是堆积的几倍
- queue 分布到多 Broker 中
- 上线一台 Consumer 做消息的搬运工，把原来 Topic 中的消息挪到新的 Topic里，不做业务逻辑处理，只是挪过去
- 上线 N 台 Consumer 同时消费临时 Topic 中的数据
- 改 bug
- 恢复原来的 Consumer，继续消费之前的 Topic

### 1.21堆积消息会超时删除吗？

**不会**；RocketMQ 中的消息只会在 commitLog 被删除的时候才会消失。也就是说未被消费的消息不会存在超时删除这情况。

### 1.22堆积的消息会不会进死信队列？

**不会**，消息在消费失败后会进入重试队列（%RETRY%+ConsumerGroup），18次才会进入死信队列（%DLQ%+ConsumerGroup）。

源码如下：

```java
public class MessageStoreConfig {
    // 每隔如下时间会进行重试，到最后一次时间重试失败的话就进入死信队列了。
 private String messageDelayLevel = "1s 5s 10s 30s 1m 2m 3m 4m 5m 6m 7m 8m 9m 10m 20m 30m 1h 2h";
}
1234
```

### 1.23RocketMQ 在分布式事务支持这块机制的底层原理?

分布式系统中的事务可以使用**TCC**（Try、Confirm、Cancel）、**2pc**来解决分布式系统中的消息原子性

RocketMQ 4.3+ 提供分布事务功能，通过 RocketMQ 事务消息能达到分布式事务的最终一致

**RocketMQ实现方式：**

- **Half Message**：
  预处理消息，当broker收到此类消息后，会存储到RMQ_SYS_TRANS_HALF_TOPIC的消息消费队列中
- **检查事务状态**：
  Broker会开启一个定时任务，消费RMQ_SYS_TRANS_HALF_TOPIC队列中的消息，每次执行任务会向消息发送者确认事务执行状态（提交、回滚、未知），如果是未知，Broker会定时去回调在重新检查。
- **超时**：
  如果超过回查次数，默认回滚消息。

也就是他并未真正进入Topic的queue，而是用了临时queue来放所谓的half message，等提交事务后才会真正的将half message转移到topic下的queue。

### 1.24高吞吐量下如何优化生产者和消费者的性能?

- 开发
  - 同一group下，多机部署，并行消费
  - 单个Consumer提高消费线程个数
  - 批量消费
    - 消息批量拉取
    - 业务逻辑批量处理
- 运维
  - 网卡调优
  - jvm调优
  - 多线程与cpu调优
  - Page Cache

### 1.25RocketMQ 是如何保证数据的高容错性的?

- 在不开启容错的情况下，轮询队列进行发送，如果失败了，重试的时候过滤失败的Broker
- 如果开启了容错策略，会通过RocketMQ的预测机制来预测一个Broker是否可用
- 如果上次失败的Broker可用那么还是会选择该Broker的队列
- 如果上述情况失败，则随机选择一个进行发送
- 在发送消息的时候会记录一下调用的时间与是否报错，根据该时间去预测broker的可用时间

其实就是send消息的时候queue的选择。源码在如下：

```java
org.apache.rocketmq.client.latency.MQFaultStrategy#selectOneMessageQueue()
1
```

### 1.26任何一台Broker突然宕机了怎么办？

Broker主从架构以及多副本策略。Master 收到消息后会同步给 Slave，这样一条消息就不止一份了，Master 宕机了还有 slave 中的消息可用，保证了MQ的可靠性和高可用性。而且 Rocket MQ4.5.0 开始就支持了 Dlegder 模式，基于 raft的，做到了真正意义的 HA。

### 1.27Broker把自己的信息注册到哪个NameServer上？

每个Broker向所有的NameServer上注册自己的信息，即每个NameServer上有所有的Broker信息

### 1.28RocketMQ如何分布式存储海量消息的？

RocketMQ 进程一般称为 Broker，集群部署的各个 Broker收到不同的消息，然后存储在自己本地的磁盘文件中。

### 1.29任何一台 Broker 突然宕机了怎么办？还能使用吗？消息会不会丢？

RocketMQ的解决思路是Broker主从架构以及多副本策略。

Master收到消息后会同步给Slave，这样一条消息就不止一份了，Master宕机了还有slave中的消息可用，保证了MQ的可靠性和高可用新。

### 1.30怎么知道有哪些 Broker ？如何知道要连那个Broker？

有个NameServer的概念，是独立部署在几台机器上的，然后所有的Broker都会把自己注册到NameServer上去，NameServer就知道集群里有哪些Broker了!

发送消息到 Broker，会找 NameServer 去获取路由信息
系统要从 Broker 获取消息，也会找 NameServer 获取路由信息，去找到对应的 Broker 获取消息。

### 1.31NameServer到底可以部署几台机器？为什么要集群化部署？

部署多台，保证高可用性。

集群化部署是为了高可用性，NameServer 是集群里非常关键的一个角色,如果部署一台 NameServer，宕机会导致 RocketMQ 集群出现故障，所以 NameServer 一定会多机器部署，实现一个集群，起到高可用的效果。

### 1.32系统如何从NameServer获取Broker信息？

系统主动去NameServer上拉取Broker信息及其他相关信息。

### 1.33如果Broker宕了，NameServer是怎么感知到的？

Broker会定时（30s）向NameServer发送心跳
然后 NameServer会定时（10s）运行一个任务，去检查一下各个Broker的最近一次心跳时间，如果某个Broker超过120s都没发送心跳了，那么就认为这个Broker已经挂掉了。

### 1.34Broker挂了，系统是怎么感知到的？

主要是通过拉取NameServer上Broker的信息。
但是，因为Broker心跳、NameServer定时任务、生产者和消费者拉取Broker信息，这些操作都是周期性的，所以不会实时感知，所以存在发送消息和消费消息失败的情况，现在 我们先知道，对于生产者而言，他是有 一套容错机制的。

### 1.35Master Broker 是如何将消息同步给 Slave Broker 的？

RocketMQ 自身的 Master-Slave 模式采取的是 Pull 模式拉取消息。

### 1.36消费消息时是从Master获取还是Slave获取？

可能从Master Broker获取消息，也有可能从Slave Broker获取消息

1. 消费者的系统在获取消息的时候会先发送请求到Master Broker上去，请求获取一批消息，此时Master Broker是会返回一批消息给消费者系统的
2. Master Broker在返回消息给消费者系统的时候，会根据当时Master Broker的 负载情况和Slave Broker的 同步情况，向消费者系统建议下一次拉取消息的时候是从Master Broker拉取还是从Slave Broker拉取。

### 1.37如果 Slave Broker 挂掉了，会对整个系统有影响吗？

有一点影响，但是影响不太大，因为消息写入全部是发送到Master Broker的，获取消息也可以Master获取，少了Slave Broker，会导致所有读写压力都集中在Master Broker

### 1.38Master Broker 突然挂了，这样会怎么样？

**RocketMQ 4.5 版本之前**，用 Slave Broker 同步数据，尽量保证数据不丢失，但是一旦 Master 故障了，Slave 是没法自动切换成 Master 的。
所以在这种情况下，如果 Master Broker 宕机了，这时就得手动做一些运维操作，把 Slave Broker 重新修改一些配置，重启机器给调整为Master Broker，这是有点麻烦的，而且会导致中间一段时间不可用。

**RocketMQ 4.5之后**支持了一种叫做 Dledger 机制，基于 Raft 协议实现的一个机制。
我们可以让一个 Master Broker 对应多个 Slave Broker， 一旦 Master Broker 宕机了，在多个 Slave 中通过 Dledger 技术 将一个 Slave Broker 选为新的 Master Broker 对外提供服务。
在生产环境中可以是用 Dledger 机制实现自动故障切换，只要10秒或者几十秒的时间就可以完成
