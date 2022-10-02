---
title: spring
date: 2021-10-15 13:42:48
permalink: /pages/8c0a0f/
categories:
  - interview
tags:
  - 
---
# Spring

### 1. Spring 基础

#### 1.1核心模块

![Spring主要模块](https://gitee.com/yueMagic/img-cloud/raw/imgtest/Spring主要模块.png)

- 1.**「Spring Core」**：Spring核心，它是框架最基础的部分，提供IOC和依赖注入DI特性
- 2.**「Spring Context」**：Spring上下文容器，它是 BeanFactory 功能加强的一个子接口
- 3.**「Spring Web」**：它提供Web应用开发的支持
- 4.**「Spring MVC」**：它针对Web应用中MVC思想的实现
- 5.**「Spring DAO」**：提供对JDBC抽象层，简化了JDBC编码，同时，编码更具有健壮性
- 6.**「Spring ORM」**：它支持用于流行的ORM框架的整合，比如：Spring + Hibernate、Spring + iBatis、Spring + JDO的整合等
- 7.**「Spring AOP」**：即面向切面编程，它提供了与AOP联盟兼容的编程实现

#### 1.2使用到的设计模式

![image-20211115224237849](https://gitee.com/yueMagic/img-cloud/raw/imgtest/image-20211115224237849.png)

- **「1.工厂设计模式」**: 比如通过 BeanFactory 和 ApplicationContext 来生产 Bean 对象
- **「2.代理设计模式」**:  AOP 的实现方式就是通过代理来实现，Spring主要是使用 JDK 动态代理和 CGLIB 代理
- **「3.单例设计模式」**: Spring 中的 Bean 默认都是单例的
- **「4.模板方法模式」**: Spring 中 jdbcTemplate 等以 Template 结尾的对数据库操作的类，都会使用到模板方法设计模式，一些通用的功能
- **「5.包装器设计模式」**: 我们的项目需要连接多个数据库，而且不同的客户在每次访问中根据需要会去访问不同的数据库。这种模式让我们可以根据客户的需求能够动态切换不同的数据源
- **「6.观察者模式」**: Spring 事件驱动模型观察者模式的
- **「7.适配器模式」**:Spring AOP 的增强或通知(Advice)使用到了适配器模式

### 2.IOC & AOP

#### 2.1IOC(控制反转)和DI(依赖注入)

首先 IOC 是一个**「容器」**，是用来装载对象的，它的核心思想就是**「控制反转」**。就是 **把创建对象的控制权进行转移**，以前创建对象的主动权和创建时机是由自

己把控的，而现在这种权力转移到第三方(spring)来管理。IOC在其他语言中也有应用，并非 Spring 特有。 

**IoC 容器是 Spring 用来实现 IoC 的载体， IoC 容器实际上就是个Map（key，value）,Map 中存放的是各种对象。**

spring 主要提供了**「两种 IOC 容器」**，一种是 **「BeanFactory」**，还有一种是 **「ApplicationContext」**

它们的区别就在于，BeanFactory **「只提供了最基本的实例化对象和拿对象的功能」**，而 ApplicationContext 是继承了 BeanFactory 所派生出来的产物，是其子类，它的作用更加的强大，比如支持注解注入、国际化等功能

将对象之间的相互依赖关系交给 IoC 容器来管理，并由 IoC 容器完成对象的注入。这样可以很大程度上简化应用的开发，把应用从复杂的依赖关系中解放出来。 **IoC 容器就像是一个工厂一样，当我们需要创建一个对象的时候，只需要配置好配置文件/注解即可，完全不用考虑对象是如何被创建出来的。** 在实际项目中一个 Service 类可能有几百甚至上千个类作为它的底层，假如我们需要实例化这个 Service，你可能要每次都要搞清这个 Service 所有底层类的构造函数，这可能会把人逼疯。如果利用 IoC 的话，你只需要配置好，然后在需要的地方引用就行了，这大大增加了项目的可维护性且降低了开发难度。

DI**(依赖注入)**其实就是IOC的另外一种说法，DI是由Martin Fowler 在2004年初的一篇论文中首次提出的。他总结：**控制的什么被反转了？就是：获得依赖对象的方式反转了。**

**Spring IoC的初始化过程：**

![Spring IoC的初始化过程](https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-7/SpringIOC初始化过程.png)

IoC源码阅读

- https://javadoop.com/post/spring-ioc

####  2.2AOP

AOP(Aspect-Oriented Programming:面向切面编程)能够将那些与业务无关，**却为业务模块所共同调用的逻辑或责任（例如事务处理、日志管理、权限控制等）封装起来**，便于**减少系统的重复代码**，**降低模块间的耦合度**，并**有利于未来的可拓展性和可维护性**。

**Spring AOP就是基于动态代理的**，如果要代理的对象，实现了某个接口，那么Spring AOP会使用**JDK Proxy**，去创建代理对象，而对于没有实现接口的对象，就无法使用 JDK Proxy 去进行代理了，这时候Spring AOP会使用**Cglib** ，这时候Spring AOP会使用 **Cglib** 生成一个被代理对象的子类来作为代理，如下图所示：

![SpringAOPProcess](https://my-blog-to-use.oss-cn-beijing.aliyuncs.com/2019-6/SpringAOPProcess.jpg)

当然你也可以使用 AspectJ ,Spring AOP 已经集成了AspectJ ，AspectJ 应该算的上是 Java 生态系统中最完整的 AOP 框架了。

使用 AOP 之后我们可以把一些通用功能抽象出来，在需要用到的地方直接使用即可，这样大大简化了代码量。我们需要增加新功能时也方便，这样也提高了系统扩展性。日志功能、事务管理等等场景都用到了 AOP 。

#### 2.3Spring AOP 和 AspectJ AOP

| 主要区别 |        Spring AOP        |             AspecjtJ AOP |
| :------- | :----------------------: | -----------------------: |
| 增强方式 |        运行时增强        |               编译时增强 |
| 实现方式 |         动态代理         |                 修改代码 |
| 编译器   |          javac           |         特殊的编译器 ajc |
| 效率     | 较低(运行时反射损耗性能) |                     较高 |
| 织入方式 |          运行时          | 编译时、编译后、类加载时 |

### 3.Spring bean

#### 3.1bean 生命周期?

![image-20211115225322491](https://gitee.com/yueMagic/img-cloud/raw/imgtest/image-20211115225322491.png)

- 1.**「实例化」**，实例化该 Bean 对象

- 2.**「填充属性」**，给该 Bean 赋值

- 3.**「初始化」**

- - 如果实现了 Aware 接口，会通过其接口获取容器资源
  - 如果实现了 BeanPostProcessor 接口，则会回调该接口的前置和后置处理增强
  - 如果配置了 init-method 方法，]会执行该方法

- 4.**「销毁」**

- - 如果实现了 DisposableBean 接口，则会回调该接口的 destroy 方法
  - 如果配置了 destroy-method 方法，则会执行 destroy-method 配置的方法

#### 3.2Spring 中的 bean 的作用域有哪些?

- singleton : 唯一 bean 实例，Spring 中的 bean 默认都是单例的。
- prototype : 每次请求都会创建一个新的 bean 实例。
- request : 每一次HTTP请求都会产生一个新的bean，该bean仅在当前HTTP request内有效。
- session : 每一次HTTP请求都会产生一个新的 bean，该bean仅在当前 HTTP session 内有效。
- global-session： 全局session作用域，仅仅在基于portlet的web应用中才有意义，Spring5已经没有了。Portlet是能够生成语义代码(例如：HTML)片段的小型Java Web插件。它们基于portlet容器，可以像servlet一样处理HTTP请求。但是，与 servlet 不同，每个 portlet 都有不同的会话

#### 3.3Spring 中的单例 bean 的线程安全问题了解吗？

大部分时候我们并没有在系统中使用多线程，所以很少有人会关注这个问题。单例 bean 存在线程问题，主要是因为当多个线程操作同一个对象的时候，对这个对象的非静态成员变量的写操作会存在线程安全问题。

常见的有两种解决办法：

1. 在Bean对象中尽量避免定义可变的成员变量（不太现实）。
2. 在类中定义一个ThreadLocal成员变量，将需要的可变成员变量保存在 ThreadLocal 中（推荐的一种方式）。

#### 3.4@Component 和 @Bean

1. 作用对象: `@Component` 注解作用于类，而`@Bean`注解作用于方法。
2. `@Component`通常是通过类路径扫描来自动侦测以及自动装配到Spring容器中（我们可以使用 `@ComponentScan` 注解定义要扫描的路径从中找出标识了需要装配的类自动装配到 Spring 的 bean 容器中）。`@Bean` 注解通常是我们在标有该注解的方法中定义产生这个 bean,`@Bean`告诉了Spring这是某个类的示例，当我需要用它的时候还给我。
3. `@Bean` 注解比 `Component` 注解的自定义性更强。而且很多地方我们只能通过 `@Bean` 注解来注册bean。比如当我们引用第三方库中的类需要装配到 `Spring`容器时，则只能通过 `@Bean`来实现。

`@Bean`注解使用示例：

```java
@Configuration
public class AppConfig {
    @Bean
    public TransferService transferService() {
        return new TransferServiceImpl();
    }

}
```

上面的代码相当于下面的 xml 配置

```xml
<beans>
    <bean id="transferService" class="com.acme.TransferServiceImpl"/>
</beans>
```

下面这个例子是通过 `@Component` 无法实现的。

```java
@Bean
public OneService getService(status) {
    case (status)  {
        when 1:
                return new serviceImpl1();
        when 2:
                return new serviceImpl2();
        when 3:
                return new serviceImpl3();
    }
}
```

#### 3.4将一个类声明为Spring的 bean 的注解有哪些?

我们一般使用 @Autowired 注解自动装配 bean，要想把类标识成可用于 @Autowired 注解自动装配的 bean 的类,采用以下注解可实现：

- **@Component** ：通用的注解，可标注任意类为 `Spring` 组件。如果一个Bean不知道属于哪个层，可以使用`@Component` 注解标注。
- **@Repository** : 对应持久层即 Dao 层，主要用于数据库相关操作。
- **@Service** : 对应服务层，主要涉及一些复杂的逻辑，需要用到 Dao层。
- **@Controller** : 对应 Spring MVC 控制层，主要用户接受用户请求并调用 Service 层返回数据给前端页面。

`@Autowired` 和`@Resource`

>@Autowired默认按byType自动装配，而@Resource默认byName自动装配。
>
>@autowired指定byname。@Qualifier指定名称、@Primary指定默认
>
>@Autowired只包含一个参数：required，表示是否开启自动准入，默认是true。而@Resource包含七个参数，其中最重要的两个参数是：name 和 type。
>@Autowired如果要使用byName，需要使用@Qualifier一起配合。而@Resource如果指定了name，则用byName自动装配，如果指定了type，则用byType自动装配。
>@Autowired能够用在：构造器、方法、参数、成员变量和注解上，而@Resource能用在：类、成员变量和方法上。
>@Autowired是spring定义的注解，而@Resource是JSR-250定义的注解。

#### 3.4循环依赖

##### **循环依赖**：

说白是一个或多个对象实例之间存在直接或间接的依赖关系，这种依赖关系构成了构成一个环形调用。

##### **前提**

1.出现循环依赖的Bean必须要是单例

2.依赖注入的方式不能全是构造器注入的方式（spring的注入有三种，接口、构造器、set）

##### 解决

spring 使用三级缓存去解决循环依赖的，其**「核心逻辑就是把实例化和初始化的步骤分开，然后放入缓存中」**，供另一个对象调用。

- **「第一级缓存singletonObjects」**：用来保存实例化、初始化都完成的对象（完整对象）
- **「第二级缓存earlySingletonObjects」**：用来保存实例化完成，但是未初始化完成的对象（早起曝光对象）
- **「第三级缓存singletonFactories」**：用来保存一个对象工厂，提供一个匿名内部类，用于创建二级缓存中的对象（早起曝光对象工厂）

当 A、B 两个类发生循环引用时 大致流程

- 1.A 完成实例化后，去**「创建一个对象工厂，并放入三级缓存」**当中

- - 如果 A 被 AOP 代理，那么通过这个工厂获取到的就是 A 代理后的对象
  - 如果 A 没有被 AOP 代理，那么这个工厂获取到的就是 A 实例化的对象

- 2.A 进行属性注入时，去**「创建 B」**

- 3.B 进行属性注入，需要 A ，则**「从三级缓存中去取 A 工厂代理对象」**并注入，然后删除三级缓存中的 A 工厂，将 A 对象放入二级缓存

- 4.B 完成后续属性注入，直到初始化结束，将 B 放入一级缓存

- 5.**「A 从一级缓存中取到 B 并且注入 B」**, 直到完成后续操作，将 A 从二级缓存删除并且放入一级缓存，循环依赖结束

#####  为什么要使用三级缓存呢？二级缓存能解决循环依赖吗？

​	如果要使用二级缓存解决循环依赖，意味着所有Bean在实例化后就要完成AOP代理，这样违背了Spring设计的原则，Spring在设计之初就是通过`AnnotationAwareAspectJAutoProxyCreator`这个后置处理器来在Bean生命周期的最后一步来完成AOP代理，而不是在实例化后就立马进行AOP代理。

### 4.Spring MVC

#### 4.1说说自己对于 Spring MVC 了解?

谈到这个问题，我们不得不提提之前 Model1 和 Model2 这两个没有 Spring MVC 的时代。

- **Model1 时代** : 很多学 Java 后端比较晚的朋友可能并没有接触过 Model1 模式下的 JavaWeb 应用开发。在 Model1 模式下，整个 Web 应用几乎全部用 JSP 页面组成，只用少量的 JavaBean 来处理数据库连接、访问等操作。这个模式下 JSP 即是控制层又是表现层。显而易见，这种模式存在很多问题。比如①将控制逻辑和表现逻辑混杂在一起，导致代码重用率极低；②前端和后端相互依赖，难以进行测试并且开发效率极低；
- **Model2 时代** ：学过 Servlet 并做过相关 Demo 的朋友应该了解“Java Bean(Model)+ JSP（View,）+Servlet（Controller） ”这种开发模式,这就是早期的 JavaWeb MVC 开发模式。Model:系统涉及的数据，也就是 dao 和 bean。View：展示模型中的数据，只是用来展示。Controller：处理用户请求都发送给 ，返回数据给 JSP 并展示给用户。

Model2 模式下还存在很多问题，Model2的抽象和封装程度还远远不够，使用Model2进行开发时不可避免地会重复造轮子，这就大大降低了程序的可维护性和复用性。于是很多JavaWeb开发相关的 MVC 框架应运而生比如Struts2，但是 Struts2 比较笨重。随着 Spring 轻量级开发框架的流行，Spring 生态圈出现了 Spring MVC 框架， Spring MVC 是当前最优秀的 MVC 框架。相比于 Struts2 ， Spring MVC 使用更加简单和方便，开发效率更高，并且 Spring MVC 运行速度更快。

MVC 是一种设计模式,Spring MVC 是一款很优秀的 MVC 框架。Spring MVC 可以帮助我们进行更简洁的Web层的开发，并且它天生与 Spring 框架集成。Spring MVC 下我们一般把后端项目分为 Service层（处理业务）、Dao层（数据库操作）、Entity层（实体类）、Controller层(控制层，返回数据给前台页面)。

**Spring MVC 的简单原理图如下：**

![img](http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-10-11/60679444.jpg)

#### 4.2SpringMVC 工作原理了解吗?

**原理如下图所示：** ![SpringMVC运行原理](http://my-blog-to-use.oss-cn-beijing.aliyuncs.com/18-10-11/49790288.jpg)

上图的一个笔误的小问题：Spring MVC 的入口函数也就是前端控制器 `DispatcherServlet` 的作用是接收请求，响应结果。

**流程说明（重要）：**

1. 客户端（浏览器）发送请求，直接请求到 `DispatcherServlet`。
2. `DispatcherServlet` 根据请求信息调用 `HandlerMapping`，解析请求对应的 `Handler`。
3. 解析到对应的 `Handler`（也就是我们平常说的 `Controller` 控制器）后，开始由 `HandlerAdapter` 适配器处理。
4. `HandlerAdapter` 会根据 `Handler `来调用真正的处理器开处理请求，并处理相应的业务逻辑。
5. 处理器处理完业务后，会返回一个 `ModelAndView` 对象，`Model` 是返回的数据对象，`View` 是个逻辑上的 `View`。
6. `ViewResolver` 会根据逻辑 `View` 查找实际的 `View`。
7. `DispaterServlet` 把返回的 `Model` 传给 `View`（视图渲染）。
8. 把 `View` 返回给请求者（浏览器）

### 5.Spring 事务

#### 5.1Spring 管理事务的方式有几种

1. 编程式事务，在代码中硬编码。(手动开启提交，不推荐使用)
2. 声明式事务，在配置文件中配置（推荐使用）

**声明式事务又分为两种：**

1. 基于XML的声明式事务
2. 基于注解的声明式事务

#### 5.2隔离级别

**TransactionDefinition 接口中定义了五个表示隔离级别的常量：**

isolation---隔离

- **ISOLATION_DEFAULT:** 使用后端数据库默认的隔离级别，Mysql 默认采用的 REPEATABLE_READ隔离级别 Oracle 默认采用的 READ_COMMITTED隔离级别.
- **ISOLATION_READ_UNCOMMITTED:** RU，读未提交。最低的隔离级别，允许读取尚未提交的数据变更，**可能会导致脏读、幻读或不可重复读**
- **ISOLATION_READ_COMMITTED:** RC,度已提交。允许读取并发事务已经提交的数据，**可以阻止脏读，但是幻读或不可重复读仍有可能发生**
- **ISOLATION_REPEATABLE_READ:** RR,可重复读。对同一字段的多次读取结果都是一致的，除非数据是被本身事务自己所修改，**可以阻止脏读和不可重复读，但幻读仍有可能发生。**
- **ISOLATION_SERIALIZABLE:** 串行化。最高的隔离级别，完全服从ACID的隔离级别。所有的事务依次逐个执行，这样事务之间就完全不可能产生干扰，也就是说，**该级别可以防止脏读、不可重复读以及幻读**。但是这将严重影响程序的性能。通常情况下也不会用到该级别。
- 脏读：读到了没提交的修改。
  
- 幻读：读到了添加或删除的数据。
  
- 不可重复读：一个事务内两次读的数据不一致，读到了其他事务的变更。

#### 5.3传播机制(特性)

**支持当前事务的情况：**

- **PROPAGATION_REQUIRED：** 如果当前存在事务，则加入该事务；如果当前没有事务，则创建一个新的事务。
- **PROPAGATION_SUPPORTS：** 如果当前存在事务，则加入该事务；如果当前没有事务，则以非事务的方式继续运行。
- **PROPAGATION_MANDATORY：** 如果当前存在事务，则加入该事务；如果当前没有事务，则抛出异常。（mandatory：强制性）

**不支持当前事务的情况：**

- **PROPAGATION_REQUIRES_NEW：** 创建一个新的事务，如果当前存在事务，则把当前事务挂起。
- **PROPAGATION_NOT_SUPPORTED：** 以非事务方式运行，如果当前存在事务，则把当前事务挂起。
- **PROPAGATION_NEVER：** 以非事务方式运行，如果当前存在事务，则抛出异常。

**其他情况：**

- **PROPAGATION_NESTED：** 如果当前存在事务，则创建一个事务作为当前事务的嵌套事务来运行；如果当前没有事务，则该取值等价于TransactionDefinition.PROPAGATION_REQUIRED。

#### 5.4@Transactional(rollbackFor = Exception.class)注解了解吗？

我们知道：Exception分为运行时异常RuntimeException和非运行时异常。事务管理对于企业应用来说是至关重要的，即使出现异常情况，它也可以保证数据的一致性。

当`@Transactional`注解作用于类上时，该类的所有 public 方法将都具有该类型的事务属性，同时，我们也可以在方法级别使用该标注来覆盖类级别的定义。如果类或者方法加了这个注解，那么这个类里面的方法抛出异常，就会回滚，数据库里面的数据也会回滚。

在`@Transactional`注解中如果不配置`rollbackFor`属性,那么事物只会在遇到`RuntimeException`的时候才会回滚,加上`rollbackFor=Exception.class`,可以让事物在遇到非运行时异常时也回滚。

常见的非运行时异常：

IOException，SQLException，FileNotFoundException,NoSuchFileException，NoSuchMethodException

关于 `@Transactional ` 注解推荐阅读的文章：

- [透彻的掌握 Spring 中@transactional 的使用](https://www.ibm.com/developerworks/cn/java/j-master-spring-transactional-use/index.html)

#### 5.5事务的实现原理

Spring事务的本质其实就是数据库对事务的支持，代码层面上利用AOP实现，没有数据库的事务支持，spring是无法提供事务功能的。原理是同一个事务内的多个操作使用同一个数据库连接。

#### 5.6事务失效的场景

1.不是public的方法

2.用final修饰

3.方法内部调用，调用自己的方法。事务是基于AOP实现的，只有使用代理对象才会生效，调用自己的话使用的是this对象不是代理对象。所以会失效。

解决：注入自己；再写一个service;通过AopContent获取代理对象；

4.未被spring管理，没加@service注解

5.多线程调用。开了新的线程

6.表不支持事务。mysql的innodb引擎才支持。myisam不支持事务。

7.没开启事物，springboot默认是开启的，mvc的话需要手动开启，指定事务处理器。

8.传播特性错误。

9.手动try catch了异常。

10.手动抛出了别的异常。

11.指定了异常回滚的情况。

12.被嵌套的事务回滚了。

### 6.JPA

#### 如何使用JPA在数据库中非持久化一个字段？

假如我们有有下面一个类：

```java
Entity(name="USER")
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "ID")
    private Long id;
    
    @Column(name="USER_NAME")
    private String userName;
    
    @Column(name="PASSWORD")
    private String password;
  
    private String secrect;
  
}Copy to clipboardErrorCopied
```

如果我们想让`secrect` 这个字段不被持久化，也就是不被数据库存储怎么办？我们可以采用下面几种方法：

```java
static String transient1; // not persistent because of static
final String transient2 = “Satish”; // not persistent because of final
transient String transient3; // not persistent because of transient
@Transient
String transient4; // not persistent because of @TransientCopy to clipboardErrorCopied
```

一般使用后面两种方式比较多，我个人使用注解的方式比较多。

参考：https://mp.weixin.qq.com/s/liWn2Dn91cmuiqHSxVO_fA

