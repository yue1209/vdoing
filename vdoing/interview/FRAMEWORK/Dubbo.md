---
title: Duboo
date: 2022-10-02 18:50:29
categories:
  - interview
  - 框架
tags:
  - 
---
# Duboo

## 1. RPC基础

#### 什么是RPC？

**RPC**（Remote Procedure Call Protocol）**远程过程调用协议**，它是一种通过网络从远程计算机程序上请求服务，而不需要了解底层网络技术的协议。简言之，RPC使得程序能够像访问本地系统资源一样，去访问远端系统资源。比较关键的一些方面包括：`通讯协议`、`序列化`、`资源（接口）描述`、`服务框架`、`性能`、`语言支持`等。
![img](https://gitee.com/yueMagic/img-cloud/raw/master/7ebbab27e72ac754bbc1f444b2ac522f.png)

简单的说，RPC就是从一台机器(客户端)上通过参数传递的方式调用另一台机器(服务器)上的一个函数或方法(可以统称为服务)并得到返回的结果

#### RPC和SOA、SOAP、REST的区别是什么？

- **REST**
  可以看着是 HTTP 协议的一种直接应用，默认基于 JSON 作为传输格式,使用简单,学习成本低效率高,但是安全性较低。

- **SOAP**
  SOAP 是一种数据交换协议规范,是一种`轻量的`、`简单的`、`基于XML的`协议的规范。而SOAP可以看着是一个重量级的协议，基于XML、SOAP 在安全方面是通过使用 XML-Security 和 XML-Signature 两个规范组成了 WS-Security 来实现安全控制的,当前已经得到了各个厂商的支持 。

  它有什么优点？简单总结为：`易用`、`灵活`、`跨语言`、`跨平台`。

- **SOA**
  **面向服务架构**，它可以根据需求通过网络对松散耦合的粗粒度应用组件进行分布式部署、组合和使用。服务层是SOA的基础，可以直接被应用调用，从而有效控制系统中与软件代理交互的人为依赖性。

  SOA是一种粗粒度、松耦合服务架构，服务之间通过简单、精确定义接口进行通讯，不涉及底层编程接口和通讯模型。SOA可以看作是B/S模型、XML（标准通用标记语言的子集）/Web Service技术之后的自然延伸。

- **REST 和 SOAP、RPC 有何区别呢？**
  没什么太大区别，他们的本质都是提供可支持分布式的基础服务，最大的区别在于他们各自的的特点所带来的不同应用场景 。

#### RPC框架需要解决的问题？

1. 如何确定客户端和服务端之间的通信协议？
2. 如何更高效地进行网络通信？
3. 服务端提供的服务如何暴露给客户端？
4. 客户端如何发现这些暴露的服务？
5. 如何更高效地对请求对象和响应结果进行序列化和反序列化操作？

#### RPC的实现基础？

1. 需要有非常高效的网络通信，比如一般选择Netty作为网络通信框架；
2. 需要有比较高效的序列化框架，比如谷歌的Protobuf序列化框架；
3. 可靠的寻址方式（主要是提供服务的发现），比如可以使用Zookeeper来注册服务等等；
4. 如果是带会话（状态）的RPC调用，还需要有会话和状态保持的功能；

#### RPC使用了哪些关键技术？

- **动态代理**;
  生成Client Stub（客户端存根）和Server Stub（服务端存根）的时候需要用到Java动态代理技术，可以使用JDK提供的原生的动态代理机制，也可以使用开源的：CGLib代理，Javassist字节码生成技术。

- **序列化和反序列化**
  在网络中，所有的数据都将会被转化为字节进行传送，所以为了能够使参数对象在网络中进行传输，需要对这些参数进行序列化和反序列化操作。

  - **序列化**：
    把对象转换为字节序列的过程称为对象的序列化，也就是编码的过程。
  - **反序列化**：
    把字节序列恢复为对象的过程称为对象的反序列化，也就是解码的过程。

  目前比较高效的开源序列化框架：如Kryo、FastJson和Protobuf等。

- **NIO通信**
  出于并发性能的考虑，传统的阻塞式 IO 显然不太合适，因此我们需要异步的 IO，即 NIO。Java 提供了 NIO 的解决方案，Java 7 也提供了更优秀的 NIO.2 支持。可以选择Netty或者MINA来解决NIO数据传输的问题。

- **服务注册中心**
  可选：Nacos、Redis、Zookeeper、Consul 、Etcd。一般使用ZooKeeper提供服务注册与发现功能，解决单点故障以及分布式部署的问题(注册中心)。

#### 主流RPC框架有哪些？

- **RMI**
  利用java.rmi包实现，基于Java远程方法协议(Java Remote Method Protocol) 和java的原生序列化。

- **Hessian**
  是一个轻量级的remoting onhttp工具，使用简单的方法提供了RMI的功能。基于HTTP协议，采用二进制编解码。

- **protobuf-rpc-pro**
  是一个Java类库，提供了基于 Google 的 Protocol Buffers 协议的远程方法调用的框架。基于 Netty 底层的 NIO 技术。支持 TCP 重用/ keep-alive、SSL加密、RPC 调用取消操作、嵌入式日志等功能。

- **Thrift**
  是一种可伸缩的跨语言服务的软件框架。它拥有功能强大的代码生成引擎，无缝地支持C + +，C#，Java，Python和PHP和Ruby。thrift允许你定义一个描述文件，描述数据类型和服务接口。依据该文件，编译器方便地生成RPC客户端和服务器通信代码。

  最初由facebook开发用做系统内个语言之间的RPC通信，2007年由facebook贡献到apache基金 ，现在是apache下的opensource之一 。支持多种语言之间的RPC方式的通信：php语言client可以构造一个对象，调用相应的服务方法来调用java语言的服务，跨越语言的C/S RPC调用。底层通讯基于SOCKET。

- **Avro**
  出自Hadoop之父Doug Cutting, 在Thrift已经相当流行的情况下推出Avro的目标不仅是提供一套类似Thrift的通讯中间件,更是要建立一个新的，标准性的云计算的数据交换和存储的Protocol。支持HTTP，TCP两种协议。

- **Dubbo**
  Dubbo是 阿里巴巴公司开源的一个高性能优秀的服务框架，使得应用可通过高性能的 RPC 实现服务的输出和输入功能，可以和 Spring框架无缝集成。

## 2. Dubbo基础

#### Dubbo是什么？

Dubbo 是阿里巴巴开源的基于 Java 的高性能 RPC 分布式服务框架，现已成为 Apache 基金会孵化项目。

#### 为什么要用Dubbo？

首先Dubbo是阿里开源项目，不仅阿里在使用，国内很多互联网公司都在使用，已经经过很多线上考验。内部使用了 Netty、Zookeeper，保证了高性能高可用性。

使用 Dubbo 可以将核心业务抽取出来，作为独立的服务，逐渐形成稳定的服务中心，可用于提高业务复用灵活扩展，使前端应用能更快速的响应多变的市场需求。

下面这张图可以很清楚的诠释，最重要的一点是，分布式架构可以承受更大规模的并发流量。

![image.png](https://gitee.com/yueMagic/img-cloud/raw/master/d3f9430db01110b53055c5e9ba5d13fd.png)

下面是 Dubbo 的服务治理图。

![image](https://gitee.com/yueMagic/img-cloud/raw/master/20cc0b55c58e8bcc2460da5521fc5492.png)

#### Dubbo的组织架构图

![image.png](https://gitee.com/yueMagic/img-cloud/raw/master/19d1520d1fb2f4008b4b2a304d708172.png)

详细介绍

1. **Registry**：服务注册与发现中心，作为服务提供者和消费者注册与发现的中心。
2. **Provider**：服务提供者，在注册中心注册作为服务提供的一方，发布服务到服务注册中心。
3. **Consumer**：服务消费者，通过注册中心协调，订阅可用的已注册的服务。
4. **Container**：服务运行容器，独立的容器类似于tomcat/jboss的作用，作为服务运行的容器。
5. **Monitor**：dubbo的监控中心，用来显示接口暴露、注册情况，也可以看接口的调用明细，调用时间等。

#### Dubbo的整体架构设计有哪些分层?

- **接口服务层（Service）**：该层与业务逻辑相关，根据 provider 和 consumer 的 业务设计对应的接口和实现
- **配置层（Config）**：对外配置接口，以 ServiceConfig 和 ReferenceConfig 为中心
- **服务代理层（Proxy）**：服务接口透明代理，生成服务的客户端 Stub 和 服务端 的 Skeleton，以 ServiceProxy 为中心，扩展接口为 ProxyFactory
- **服务注册层（Registry）**：封装服务地址的注册和发现，以服务 URL 为中心， 扩展接口为 RegistryFactory、Registry、RegistryService
- **路由层（Cluster）**：封装多个提供者的路由和负载均衡，并桥接注册中心，以 Invoker 为中心，扩展接口为 Cluster、Directory、Router 和 LoadBlancce
- **监控层（Monitor）**：RPC 调用次数和调用时间监控，以 Statistics 为中心，扩 展接口为 MonitorFactory、Monitor 和 MonitorService
- **远程调用层（Protocal）**：封装 RPC 调用，以 Invocation 和 Result 为中心， 扩展接口为 Protocal、Invoker 和 Exporter
- **信息交换层（Exchange）**：封装请求响应模式，同步转异步。以 Request 和 Response 为中心，扩展接口为 Exchanger、ExchangeChannel、 ExchangeClient 和 ExchangeServer
- **网络传输层（Transport）**：抽象 mina 和 netty 为统一接口，以 Message 为 中心，扩展接口为 Channel、Transporter、Client、Server 和 Codec
- **数据序列化层（Serialize）**：可复用的一些工具，扩展接口为 Serialization、 ObjectInput、ObjectOutput 和 ThreadPool

#### Dubbo默认使用的是什么通信框架，还有别的选择吗?

默认也推荐使用 netty 框架，还有 mina。

#### Dubbo都支持什么协议，推荐用哪种？

- dubbo://（推荐）
- rmi://
- hessian://
- http://
- webservice://
- thrift://
- memcached://
- redis://
- rest://

#### Dubbo支持那些序列化协议？

推荐使用 Hessian 序列化，还有 Duddo、FastJson、Java 自带序列化。

#### Dubbo支持服务多协议吗？

Dubbo 允许配置多协议，在不同服务上支持不同协议或者同一服务上同时支持多种协议。

#### Dubbo需要 Web 容器吗？

不需要

#### Dubbo必须依赖的包有哪些？

Dubbo 必须依赖 JDK，其他为可选。

#### Dubbo内置了哪几种服务容器？

- Spring Container
- Jetty Container
- Log4j Container

Dubbo 的服务容器只是一个简单的 Main 方法，并加载一个简单的 Spring 容器，用于暴露服务。

#### Dubbo 和 Spring Cloud 有什么区别？

- 服务调用方式

  - Dubbo是RPC
  - SpringCloud采用Rest Api

- 注册中心

  - Dubbo 是nacos、zookeeper
  - SpringCloud是eureka，也可以是nacos、zookeeper

- 服务网关

  - Dubbo本身没有实现，只能通过其他第三方技术整合，
  - SpringCloud有Zuul路由网关，作为路由服务器，进行消费者的请求分发,SpringCloud支持断路器，与git完美集成配置文件支持版本控制，事物总线实现配置文件的更新与服务自动装配等等一系列的微服务架构要素。

- 组成部分不同

  | 功能名称     | Dubbo     | Spring Cloud                 |
  | ------------ | --------- | ---------------------------- |
  | 服务注册中心 | ZooKeeper | Spring Cloud Netflix Eureka  |
  | 服务调用方式 | RPC       | REST API                     |
  | 服务网关     | 无        | Spring Cloud Netflix Zuul    |
  | 断路器       | 不完善    | Spring Cloud Netflix Hystrix |
  | 分布式配置   | 无        | Spring Cloud Config          |
  | 服务跟踪     | 无        | Spring Cloud Sleuth          |
  | 消息总线     | 无        | Spring Cloud Bus             |
  | 数据流       | 无        | Spring Cloud Stream          |
  | 批量任务     | 无        | Spring Cloud Task            |

#### Dubbo注册中心有哪些？

推荐使用 Zookeeper 作为注册中心，也可以使用Nacos；还有 Redis、Multicast、Simple 注册中心，但不推荐。

#### 同一个服务多个注册的情况下可以直连某一个服务吗？

可以点对点直连，修改配置即可，也可以通过 telnet 直接某个服务。

#### Dubbo有哪几种配置方式？

1. Spring 配置方式
2. Java API 配置方式

#### Dubbo核心的配置有哪些？

| 配置              | 配置说明     |
| ----------------- | ------------ |
| dubbo:service     | 服务配置     |
| dubbo:reference   | 引用配置     |
| dubbo:protocol    | 协议配置     |
| dubbo:application | 应用配置     |
| dubbo:module      | 模块配置     |
| dubbo:registry    | 注册中心配置 |
| dubbo:monitor     | 监控中心配置 |
| dubbo:provider    | 提供方配置   |
| dubbo:consumer    | 消费方配置   |
| dubbo:method      | 方法配置     |
| dubbo:argument    | 参数配置     |

配置之间的关系
​![https://b3logfile.com/file/2021/03/image-42f9a38f.png](https://gitee.com/yueMagic/img-cloud/raw/master/392c0ac459f0f69c4bdda99c73eb703e.png)

#### Dubbo服务调用是阻塞的吗？

**默认是同步等待结果阻塞的**，*支持异步调用*。

Dubbo 是基于 NIO 的非阻塞实现并行调用，客户端不需要启动多线程即可完成并行调用多个远程服务，相对多线程开销较小，异步调用会返回一个 Future 对象。

异步调用流程图如下。
![img](https://gitee.com/yueMagic/img-cloud/raw/master/504ae639deac1e69f00dfa8c225247f0.png)

#### Dubbo 服务降级，失败重试怎么做？

可以通过 dubbo:reference 中设置 mock=“return null”。mock 的值也可以修 改为 true，然后再跟接口同一个路径下实现一个 Mock 类，命名规则是 “接口 名称+Mock” 后缀。然后在 Mock 类里实现自己的降级逻辑

#### Dubbo服务失效、下线踢出是基于什么原理？

服务失效踢出基于 zookeeper 的临时节点原理。当服务于 zookeeper 之间的连接中断，zookeeper 会自动删除对应的临时节点信息。

#### 如何不影响旧版本的情况下实现版本迭代？

采用多版本开发，不影响旧版本。

#### 服务上线怎么兼容旧版本？

可以用版本号（version）过渡，多个不同版本的服务注册到注册中心，版本号不同的服务相互间不引用。这个和服务分组的概念有一点类似。

#### Dubbo的管理控制台能做什么？

管理控制台主要包含：`路由规则`，`动态配置`，`服务降级`，`访问控制`，`权重调整`，`负载均衡`，等管理功能。

## 3. Dubbo进阶

#### Dubbo有哪几种负载均衡策略，默认是哪种？

**4中负载均衡策略**，详细如下：

| 模式              |                            | 说明                                                         |
| ----------------- | -------------------------- | ------------------------------------------------------------ |
| 随机模式 （默认） | Random LoadBalance         | 按权重设置随机概率。在一个截面上碰撞的概率较高，但调用越大分布越均匀 |
| 轮询模式          | RoundRobin LoadBalance     | 按公约后的权重设置轮询比例。但存在响应慢的服务提供者会累积请求 |
| 最少活跃调用数    | LeastActive LoadBalance    | 最少活跃调用数。响应快的提供者接受越多请求，响应慢的接受越少请求 |
| 一致hash          | ConsistentHash LoadBalance | 根据服务提供者ip设置hash环，携带相同的参数总是发送的同一个服务提供者，若服务挂了，则会基于虚拟节点平摊到其他提供者上 |

- 调用方单独配置：

  ```java
  @Controller
  @RequestMapping("user")
  public class UserController {
      @Reference(loadbalance="roundrobin")
      private IUserService userService;
      @RequestMapping("hello")
      @ResponseBody
      public String hello(){
          return userService.hello();
      }
  }
  1234567891011
  ```

- 统一配置

  - 方式一

    ```yml
    dubbo：
      provider:
        loadbalance: roundrobin
    123
    ```

  - 方式二

    ```xml
    <dubbo:referenceinterface="..."loadbalance="roundrobin" />
    1
    ```

#### Dubbo SPI 和 Java SPI 区别？

- JDK SPI
  JDK 标准的 SPI 会一次性加载所有的扩展实现，如果有的扩展吃实话很耗时，但也没用上，很浪费资源。
  所以只希望加载某个的实现，就不现实了
- DUBBO SPI
  - 对 Dubbo 进行扩展，不需要改动 Dubbo 的源码；
  - 延迟加载，可以一次只加载自己想要加载的扩展实现；
  - 增加了对扩展点 IOC 和 AOP 的支持，一个扩展点可以直接 setter 注入其它扩展点；
  - Dubbo 的扩展机制能很好的支持第三方 IoC 容器，默认支持 Spring Bean。

#### Dubbo 能集成 Spring Boot 吗？

**可以的；**
示例项目地址如下：

> https://github.com/apache/incubator-dubbo-spring-boot-project

#### Dubbo 配置文件是如何加载到Spring中的？

Spring 容器在启动的时候，会读取到 Spring 默认的一些 schema 以及 Dubbo 自定义的 schema，每个 schema 都会对应一个自己的 NamespaceHandler，NamespaceHandler 里面通过 BeanDefinitionParser 来解析配置信息并转化为需要加载的 bean 对象！

#### Dubbo 可以对结果进行缓存吗？

可以；
为了提高数据访问的速度。Dubbo 提供了声明式缓存，以减少用户加缓存的工作量

```xml
<dubbo:reference cache="true" />
1
```

其实比普通的配置文件就多了一个标签 cache=“true”

#### Dobbo如何进行链路追踪？

Dubbo 可以使用 Pinpoint 和 Apache Skywalking(Incubator) 实现分布式服务追踪，也可以结合 zipkin 来实现；
当然还有其他很多方案。

#### Dubbo Monitor 实现原理？

Consumer 端在发起调用之前会先走 filter 链；provider 端在接收到请求时也是 先走 filter 链，然后才进行真正的业务逻辑处理。默认情况下，在 consumer 和 provider 的 filter 链中都会有 Monitorfilter。

- MonitorFilter 向 DubboMonitor 发送数据
- DubboMonitor 将数据进行聚合后（默认聚合 1min 中的统计数据）暂存到 ConcurrentMap<Statistics, AtomicReference> statisticsMap，然后使用一个 含有 3 个线程（线程名字：DubboMonitorSendTimer）的线程池每隔 1min 钟， 调用 SimpleMonitorService 遍历发送 statisticsMap 中的统计数据，每发送完毕 一个，就重置当前的 Statistics 的 AtomicReference
- SimpleMonitorService 将这些聚合数据塞入 BlockingQueue queue 中（队 列大写为 100000）
- SimpleMonitorService 使用一个后台线程（线程名为： DubboMonitorAsyncWriteLogThread）将 queue 中的数据写入文件（该线程以 死循环的形式来写）
- SimpleMonitorService 还会使用一个含有 1 个线程（线程名字： DubboMonitorTimer）的线程池每隔 5min 钟，将文件中的统计数据画成图表

#### Dubbo 用到哪些设计模式？

Dubbo 框架在初始化和通信过程中使用了多种设计模式，可灵活控制类加载、权限控制等功能。

- **工厂模式**：
  Provider在 export服务时，会调用 ServiceConfig的 export方法。ServiceConfig 中有个字段：

  ```java
  private static final Protocol protocol = ExtensionLoader.getExtensionLoader(Protocol.class).getAdaptiveExtensi on();
  1
  ```

  Dubbo 里有很多这种代码。这也是一种工厂模式，只是实现类的获取采用了 JDK SPI 的机制。这么实现的优点是可扩展性强，想要扩展实现，只需要在 classpath 下增加个文件就可以了，代码零侵入。另外，像上面的 Adaptive 实现，可以做到调用时动态决定调用哪个实现，但是由于这种实现采用了动态代理，会造成代码调试比较麻烦，需要分析出实际调用的实现类。

- **装饰器模式**：
  Dubbo 在启动和调用阶段都大量使用了装饰器模式。以 Provider 提供的调用链为 例，具体的调用链代码是在 ProtocolFilterWrapper 的 buildInvokerChain 完成 的，具体是将注解中含有 group=provider 的 Filter 实现，按照 order 排序，最后的调用顺序是：

  ```java
  EchoFilter -> ClassLoaderFilter -> GenericFilter -> ContextFilter -> ExecuteLimitFilter -> TraceFilter -> TimeoutFilter -> MonitorFilter -> ExceptionFilter
  1
  ```

  更确切地说，这里是装饰器和责任链模式的混合使用。例如，EchoFilter 的作用是判断是否是回声测试请求，是的话直接返回内容，这是一种责任链的体现。而像 ClassLoaderFilter 则只是在主功能上添加了功能，更改当前线程的 ClassLoader，这是典型的装饰器模式。

- **观察者模式**：
  Dubbo 的 Provider 启动时，需要与注册中心交互，先注册自己的服务，再订阅自己的服务，订阅时，采用了观察者模式，开启一个 listener。注册中心会每 5 秒定时检查是否有服务更新，如果有更新，向该服务的提供者发送一个 notify 消息，provider 接受到 notify 消息后，即运行 NotifyListener 的 notify 方法，执行监 听器方法。

- **动态代理模式**：
  Dubbo 扩展 JDK SPI 的类 ExtensionLoader 的 Adaptive 实现是典型的动态代理 实现。Dubbo 需要灵活地控制实现类，即在调用阶段动态地根据参数决定调用哪个实现类，所以采用先生成代理类的方法，能够做到灵活的调用。生成代理类的代码是 ExtensionLoader 的 createAdaptiveExtensionClassCode 方法。代理类的主要逻辑是，获取 URL 参数中指定参数的值作为获取实现类的 key。

#### Dubbo 支持分布式事务吗？

目前暂时不支持，后续可能采用基于 JTA/XA 规范实现，如以图所示。
![img](https://gitee.com/yueMagic/img-cloud/raw/master/d1a693967bebe009497a5ee9d6510f78.png)

------

也可以通过 TCC-Transaction 框架实现

- **TCC-Transaction**

  - TCC-Transaction 是开源的 TCC 补偿性分布式事务框架

    > Git 地址：https://github.com/changmingxie/tcc-transaction

  - TCC-Transaction 通过 Dubbo 隐式传参的功能，避免自己对业务代码的入侵。

#### Dubbo telnet 命令能做什么？

dubbo 服务发布之后，我们可以利用 telnet 命令进行调试、管理。 Dubbo2.0.5 以上版本服务提供端口支持 telnet 命令

- 连接服务 ：

  ```shell
  telnet localhost 20880 //键入回车进入 Dubbo 命令模式。
  1
  ```

- 查看服务列表

  > dubbo>ls com.test.TestService
  > dubbo>ls com.test.TestService
  > create
  > delete
  > query

- ls (list services and methods)

  - ls : 显示服务列表。
  - ls -l : 显示服务详细信息列表。
  - ls XxxService：显示服务的方法列表。
  - ls -l XxxService：显示服务的方法详细信息列表。

#### Dubbo 如何优雅停机？

Dubbo 是通过 JDK 的 ShutdownHook 来完成优雅停机的，所以如果使用 kill -9 PID 等强制关闭指令，是不会执行优雅停机的，只有通过 kill PID 时，才会执行。

#### Dubbo 和 Dubbox 之间的区别？

Dubbox 是继 Dubbo 停止维护后，当当网基于 Dubbo 做的一个扩展项目，如加了服务可 Restful 调用，更新了开源组件等。

#### 当一个服务接口有多种实现时怎么做？

当一个接口有多种实现时，可以用 group 属性来分组，服务提供方和消费方都指定同一个 group 即可。

#### 服务读写推荐的容错策略是怎样的？

读操作建议使用 Failover 失败自动切换，默认重试两次其他服务器。

写操作建议使用 Failfast 快速失败，发一次调用失败就立即报错。

#### 说说 Dubbo 服务暴露的过程?

Dubbo 会在 Spring 实例化完 bean 之后，在刷新容器最后一步发布 ContextRefreshEvent 事件的时候，通知实现了 ApplicationListener 的 ServiceBean 类进行回调 onApplicationEvent 事件方法，Dubbo 会在这个方法中调用 ServiceBean 父类 ServiceConfig 的 export 方法，而该方法真正实现了服务的（异步或者非异步）发布。
