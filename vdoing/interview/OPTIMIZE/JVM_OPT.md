---
title: JVM
date: 2022-10-02 18:50:29
categories:
  - interview
tags:
  - 
---
## 监控工具
jconsole：用于对 JVM 中的内存、线程和类等进行监控；

jvisualvm：JDK 自带的全能分析工具，可以分析：内存快照、线程快照、程序死锁、监控内存的变
化、gc 变化等。

jmc：

jmap

arth：阿里开源工具

JDK 自带了很多监控工具，都位于 JDK 的 bin 目录下，其中最常用的是 jconsole 和 jvisualvm 这视
图监控工具。

## 常用的 JVM 调优的参数都有哪些？

> -XX:MetaspaceSize=128m （元空间默认大小）
> -XX:MaxMetaspaceSize=128m （元空间最大大小）
> -Xms1024m （堆最大大小）
> -Xmx1024m （堆默认大小）
> -Xmn256m （新生代大小）
> -Xss256k （棧最大深度大小）
> -XX:SurvivorRatio=8 （新生代分区比例 8:2）
> -XX:+UseConcMarkSweepGC （指定使用的垃圾收集器，这里使用CMS收集器）
> -XX:+PrintGCDetails （打印详细的GC日志）

> JDK8以后把-XX:PermSize 和 -XX:MaxPermGen移除了，取而代之的是
> -XX:MetaspaceSize=128m （元空间默认大小）
> -XX:MaxMetaspaceSize=128m （元空间最大大小）
> JDK 8开始把类的元数据放到本地化的堆内存(native heap)中，这一块区域就叫Metaspace，中文名叫元空间。
> 使用本地化的内存有什么好处呢？最直接的表现就是java.lang.OutOfMemoryError: PermGen 空间问题将不复存在，由于默认的类的元数据分配只受本地内存大小的限制，也就是说本地内存剩余多少，理论上Metaspace就能够有多大（貌似容量还与操做系统的虚拟内存有关？这里不太清楚），这解决了空间不足的问题。不过，让Metaspace变得无限大显然是不现实的，所以咱们也要限制Metaspace的大小：使用-XX:MaxMetaspaceSize参数来指定Metaspace区域的大小。JVM默认在运行时根据须要动态地设置MaxMetaspaceSize的大小。
