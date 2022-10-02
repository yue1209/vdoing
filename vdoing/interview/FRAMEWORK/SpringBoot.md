---
title: springBoot
date: 2022-10-02 18:50:29
categories:
  - interview
tags:
  - 
---
# SpringBoot

## 1. SpringBoot基础

#### 1.1 什么是SpringBoot？

- 用来简化Spring应用的初始搭建以及开发过程，使用特定的方式来进行配置
- 创建独立的Spring引用程序main方法运行
- 嵌入的tomcat无需部署war文件
- 简化maven配置
- 自动配置Spring添加对应的功能starter自动化配置

> SpringBoot来简化Spring应用开发，约定大于配置，去繁化简

#### 1.2 SpringBoot有哪些优点？

- 独立运行
  Spring Boot 而且内嵌了各种 servlet 容器，Tomcat、Jetty 等，现在不再需要打成war 包部署到容器中，Spring Boot 只要打成一个可执行的 jar 包就能独立运行，所有的依赖包都在一个 jar 包内。
- 简化配置
  spring-boot-starter-web 启动器自动依赖其他组件，简少了 maven 的配置。
- 自动配置
  Spring Boot 能根据当前类路径下的类、jar 包来自动配置 bean，如添加一个 spring-boot-starter-web 启动器就能拥有 web 的功能，无需其他配置。
- 无代码生成和XML配置
  Spring Boot 配置过程中无代码生成，也无需 XML 配置文件就能完成所有配置工作，这一切都是借助于条件注解完成的，这也是 Spring4.x 的核心功能之一。
- 避免大量的Maven导入和各种版本冲突
- 应用监控
  Spring Boot 提供一系列端点可以监控服务及应用，做健康检测。

#### 1.3 SpringBoot的核心注解是什么？由那些注解组成？

启动类上@SpringBootApplication是 SpringBoot 的核心注解

```java
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
@Inherited
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(excludeFilters = {
      @Filter(type = FilterType.CUSTOM, classes = TypeExcludeFilter.class),
      @Filter(type = FilterType.CUSTOM, classes = AutoConfigurationExcludeFilter.class) })
public @interface SpringBootApplication {
    
}
```

主要组合包含了以下 3 个注解：

- @**SpringBootConfiguration**：
  组合了 @Configuration 注解，实现配置文件的功能。
- @**EnableAutoConfiguration**：
  打开自动配置的功能，也可以关闭某个自动配置的选项，如关闭数据源自动配置功能： @SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })。
- @**ComponentScan**：
  Spring组件扫描。

#### 1.4 SpringBoot、Spring MVC和Spring有什么区别？

- **Spring**
  Spring最重要的特征是依赖注入。所有Spring Modules不是依赖注入就是IOC控制反转。
  当我们恰当的使用DI或者是IOC的时候，可以开发松耦合应用。
- **Spring MVC**
  Spring MVC提供了一种分离式的方法来开发Web应用。通过运用像DispatcherServelet，MoudlAndView 和 ViewResolver 等一些简单的概念，开发 Web 应用将会变的非常简单。
- **SpringBoot**
  Spring和Spring MVC的问题在于需要配置大量的参数。
  SpringBoot通过一个自动配置和启动的项来解决这个问题。

#### 1.5 什么是JavaConfig？

Spring JavaConfig 是 Spring 社区的产品，它提供了配置 Spring IoC 容器的纯Java 方法。因此它有助于避免使用 XML 配置。使用 JavaConfig 的优点在于：

- **面向对象的配置**。
  由于配置被定义为 JavaConfig 中的类，因此用户可以充分利用 Java 中的面向对象功能。一个配置类可以继承另一个，重写它的@Bean 方法等。
- **减少或消除 XML 配置**。
  基于依赖注入原则的外化配置的好处已被证明。但是，许多开发人员不希望在 XML 和 Java 之间来回切换。JavaConfig 为开发人员提供了一种纯 Java 方法来配置与 XML 配置概念相似的 Spring 容器。从技术角度来讲，只使用 JavaConfig 配置类来配置容器是可行的，但实际上很多人认为将JavaConfig 与 XML 混合匹配是理想的。
- **类型安全和重构友好**。
  JavaConfig 提供了一种类型安全的方法来配置 Spring容器。由于 Java 5.0 对泛型的支持，现在可以按类型而不是按名称检索 bean，不需要任何强制转换或基于字符串的查找。

#### 1.6 SpringBoot启动时都做了什么?

1. SpringBoot在启动的时候从类路径下的META-INF/spring.factories中获取EnableAutoConfiguration指定的值
2. 将这些值作为自动配置类导入容器 ， 自动配置类就生效 ， 帮我们进行自动配置工作；
3. 整个J2EE的整体解决方案和自动配置都在springboot-autoconfigure的jar包中；
4. 它会给容器中导入非常多的自动配置类 （xxxAutoConfiguration）, 就是给容器中导入这个场景需要的所有组件 ， 并配置好这些组件 ；
5. 有了自动配置类 ， 免去了我们手动编写配置注入功能组件等的工作；

#### 1.7 SpringBoot自动配置原理是什么？

SpringBoot 的 自动配置得益于 SpringFramework 强大的支撑，框架早已有很多工具和注解可以自动装配 Bean 。SpringBoot只是做了一个封装。

核心是基于**@Conditional**相关的注解，例如**@ConditionalOnClass**，根据不同的情况把对应的xxxAutoConfiguration类实列化，把配置文件里的内容映射到xxxxProperties类里。

@Configuration  标明是一个配置类
@EnableConfigurationProperties(HttpEncodingProperties.class)  
@ConditionalOnWebApplication
@ConditionalOnClass(CharacterEncodingFilter.class)
@ConditionalOnProperty(prefix = "spring.http.encoding", value = "enabled", matchIfMissing = true) 

#### 1.8 你如何理解SpringBoot配置加载顺序？

```java
1、开发者工具 `Devtools` 全局配置参数;

2、单元测试上的 `@TestPropertySource` 注解指定的参数;

3、单元测试上的 `@SpringBootTest` 注解指定的参数;

4、命令行指定的参数，如 `java -jar springboot.jar --name="码霸霸"`;

5、命令行中的 `SPRING_APPLICATION_JSONJSON` 指定参数, 如 `java -Dspring.application.json='{"name":"码霸霸"}' -jar springboot.jar`;

6、`ServletConfig` 初始化参数;

7、`ServletContext` 初始化参数;

8、JNDI参数（如 `java:comp/env/spring.application.json`）;

9、Java系统参数（来源：`System.getProperties()`）;

10、操作系统环境变量参数;

11、`RandomValuePropertySource` 随机数，仅匹配：`ramdom.*`;

12、JAR包外面的配置文件参数（`application-{profile}.properties（YAML）`）;

13、JAR包里面的配置文件参数（`application-{profile}.properties（YAML）`）;

14、JAR包外面的配置文件参数（`application.properties（YAML）`）;

15、JAR包里面的配置文件参数（`application.properties（YAML）`）;

16、`@Configuration`配置文件上 `@PropertySource` 注解加载的参数;

17、默认参数（通过 `SpringApplication.setDefaultProperties` 指定）;
```

#### 1.9 运行 SpringBoot 有哪几种方式？

1. 打包用命令或者放到容器中运行
2. 用 Maven/ Gradle 插件运行
3. 直接执行 main 方法运行

#### 1.10 SpringBoot 需要独立的容器运行吗？

可以不需要，内置了 Tomcat/ Jetty 等容器。

#### 1.11 开启SpringBoot 特性有哪几种方式？

1. 继承spring-boot-starter-parent项目
2. 导入spring-boot-dependencies项目依赖

##  2. SpringBoot配置

#### 2.1 什么是YAML？

YAML 是一种人类可读的数据序列化语言。它通常用于配置文件。与属性文件相比，如果我们想要在配置文件中添加复杂的属性，YAML 文件就更加结构化，而且更少混淆。可以看出 YAML 具有分层配置数据。

#### 2.2 YAML 配置的优势在哪里 ?

YAML 现在可以算是非常流行的一种配置文件格式了，无论是前端还是后端，都可以见到 YAML 配置。那么 YAML 配置和传统的 properties 配置相比到底有哪些优势呢？

1. 配置有序，在一些特殊的场景下，配置有序很关键
2. 支持数组，数组中的元素可以是基本数据类型也可以是对象
3. 简洁

相比 properties 配置文件，YAML 还有一个缺点，就是不支持 @PropertySource 注解导入自定义的 YAML 配置。

#### 2.3 如何在自定义端口上运行SpringBoot应用程序？

SpringBoot默认监听的是8080端口；为了在自定义端口上运行 SpringBoot 应用程序，您可以在application.properties 中通过

```java
server.port = 8888
1
```

指定端口；这样就可以将监听的端口修改为8888。

#### 2.4 SpringBoot 是否可以使用 XML 配置 ?

Spring Boot 推荐使用 Java 配置而非 XML 配置，但是 Spring Boot 中也可以使用 XML 配置，通过 @ImportResource 注解可以引入一个 XML 配置。

#### 2.5 SpringBoot核心配置文件是什么？

bootstrap.properties和application.properties

#### 2.6 bootstrap.properties和application.properties 有何区别 ?

SpringBoot两个核心的配置文件：

- **bootstrap**(.yml 或者 .properties)：boostrap 由父 ApplicationContext 加载的，比applicaton优先加载，配置在应用程序上下文的引导阶段生效。一般来说我们在 SpringCloud Config 或者Nacos中会用到它。且boostrap里面的属性不能被覆盖；
- **application** (.yml或者.properties)：由ApplicatonContext 加载，用于 SpringBoot项目的自动化配置。

#### 2.7 什么是Spring Profiles？

主要用来**区分环境**；
Spring Profiles 允许用户根据配置文件（dev，test，prod 等）来注册 bean。因此，当应用程序在开发中运行时，只有某些 bean 可以加载，而在 PRODUCTION中，某些其他 bean 可以加载。假设我们的要求是 Swagger 文档仅适用于 QA 环境，并且禁用所有其他文档。这可以使用配置文件来完成。Spring Boot 使得使用配置文件非常简单。

##  3. SpringBoot安全性

#### 3.1 如何实现SpringBoot应用程序的安全性？

为了实现SpringBoot的安全性，我们使用spring-boot-starter-security依赖项，并且必须添加安全配置。它只需要很少的代码。配置类将必须扩展WebSecurityConfigurerAdapter并覆盖其方法。

#### 3.2 比较一下Spring Security 和Shiro各自的优缺点 ?

由于SpringBoot官方提供了大量的非常方便的开箱即用的Starter，包括Spring Security的Starter ，使得在 SpringBoot中使用Spring Security变得更加容易，甚至只需要添加一个依赖就可以保护所有的接口，所以，如果是SpringBoot 项目，一般选择 Spring Security 。当然这只是一个建议的组合，单纯从技术上来说，无论怎么组合，都是没有问题的。Shiro和Spring Security相比，主要有如下一些特点：

1. Spring Security 是一个重量级的安全管理框架；Shiro 则是一个轻量级的安全管理框架
2. Spring Security 概念复杂，配置繁琐；Shiro 概念简单、配置简单
3. Spring Security 功能强大；Shiro 功能简单

#### 3.3 什么是 CSRF 攻击？

CSRF 代表跨站请求伪造。这是一种攻击，迫使最终用户在当前通过身份验证的Web 应用程序上执行不需要的操作。CSRF 攻击专门针对状态改变请求，而不是数据窃取，因为攻击者无法查看对伪造请求的响应。

#### 3.4 SpringBoot中如何解决跨域问题 ?

跨域可以在前端通过 JSONP 来解决，但是 JSONP 只可以发送 GET 请求，无法发送其他类型的请求，在 RESTful 风格的应用中，就显得非常鸡肋，因此我们推荐在后端通过 （CORS，Cross-origin resource sharing） 来解决跨域问题。这种解决方案并非 Spring Boot 特有的，在传统的 SSM 框架中，就可以通过 CORS 来解决跨域问题，只不过之前我们是在 XML 文件中配置 CORS ，现在可以通过实现WebMvcConfigurer接口然后重写addCorsMappings方法解决跨域问题。

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*")
                .allowCredentials(true)
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .maxAge(3600);
    }
}
```

项目中前后端分离部署，所以需要解决跨域的问题。
我们使用cookie存放用户登录的信息，在spring拦截器进行权限控制，当权限不符合时，直接返回给用户固定的json结果。
当用户登录以后，正常使用；当用户退出登录状态时或者token过期时，由于拦截器和跨域的顺序有问题，出现了跨域的现象。
我们知道一个http请求，先走filter，到达servlet后才进行拦截器的处理，如果我们把cors放在filter里，就可以优先于权限拦截器执行。

```java
@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.addAllowedOrigin("*");
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource = new UrlBasedCorsConfigurationSource();
        urlBasedCorsConfigurationSource.registerCorsConfiguration("/**", corsConfiguration);
        return new CorsFilter(urlBasedCorsConfigurationSource);
    }
}
```

#### 3.5 SpringBoot 中的监视器是什么

Spring boot actuator是spring启动框架中的重要功能之一。Spring boot监视器可帮助您访问生产环境中正在运行的应用程序的当前状态。有几个指标必须在生产环境中进行检查和监控。即使一些外部应用程序可能正在使用这些服务来向相关人员触发警报消息。监视器模块公开了一组可直接作为HTTPURL访问的REST端点来检查状态。

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-actuator</artifactId>
    <version>2.0.4.RELEASE</version>
</dependency>
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
</dependency>

server.tomcat.uri-encoding=UTF-8
# 程序运行端口
server.port=8888
# 监视程序运行端口
management.server.port=8090
# 激活所有的内置Endpoints
management.endpoints.web.exposure.include=*
# 开启shutdown这个endpoint
management.endpoint.shutdown.enabled=true
```

#### 3.6 如何在SpringBoot中禁用Actuator端点安全性？

默认情况下，所有敏感的HTTP端点都是安全的，只有具有ACTUATOR角色的用户才能访问它们。安全性是使用标准的
`HttpServletRequest.isUserlnRole` 方法实施的。我们可以使用`management.security.enabled=false`来禁用安全性。只有在执行机构端点在防火墙后访问时，才建议禁用安全性。

#### 3.7 如何监视所有SpringBoot微服务？

SpringBoot提供监视器端点以监控各个微服务的度量。这些端点对于获取有关应用程序的信息（如它们是否已启动）以及它们的组件（如数据库等）是否正常运行很有帮助。但是，使用监视器的一个主要缺点或困难是，我们必须单独打开应用程序的知识点以了解其状态或健康状况。想象一下涉及 50 个应用程序的微服务，管理员将不得不击中所有 50 个应用程序的执行终端。为了帮助我们处理这种情况，我们将使用位于的开源项目。 它建立在 Spring Boot Actuator 之上，它提供了一个 Web UI，使我们能够可视化多个应用程序的度量。

##  4. SpringBoot进阶

#### 4.1 什么是 WebSockets？

WebSocket是一种计算机通信协议，通过单个TCP连接提供全双工通信信道。
1、WebSocket是双向的 -使用 WebSocket 客户端或服务器可以发起消息发送。
2、WebSocket是全双工的 -客户端和服务器通信是相互独立的。
3、单个TCP连接 -初始连接使用 HTTP，然后将此连接升级到基于套接字的连接。然后这个单一连接用于所有未来的通信
4、Light与http相比，WebSocket消息数据交换要轻得多。

#### 4.2 什么是 Spring Data?

Spring Data 是 Spring 的一个子项目。用于简化数据库访问，支持NoSQL 和 关系数据存储。其主要目标是使数据库的访问变得方便快捷。Spring Data 具有如下特点：

SpringData 项目支持 NoSQL 存储：

1. MongoDB （文档数据库）
2. Neo4j（图形数据库）
3. Redis（键/值存储）
4. Hbase（列族数据库）

SpringData 项目所支持的关系数据存储技术：

1. JDBC
2. JPA

Spring Data Jpa 致力于减少数据访问层 (DAO) 的开发量. 开发者唯一要做的，就是声明持久层的接口，其他都交给 Spring Data JPA 来帮你完成！Spring Data JPA 通过规范方法的名字，根据符合规范的名字来确定方法需要实现什么样的逻辑。

#### 4.3 什么是 Spring Batch？

Spring Boot Batch 提供可重用的函数，这些函数在处理大量记录时非常重要，包括日志/跟踪，事务管理，作业处理统计信息，作业重新启动，跳过和资源管理。它还提供了更先进的技术服务和功能，通过优化和分区技术，可以实现极高批量和高性能批处理作业。简单以及复杂的大批量批处理作业可以高度可扩展的方式利用框架处理重要大量的信息。

#### 4.4 什么是 FreeMarker 模板？

FreeMarker 是一个基于 Java 的模板引擎，最初专注于使用 MVC 软件架构进行动态网页生成。使用 Freemarker 的主要优点是表示层和业务层的完全分离。程序员可以处理应用程序代码，而设计人员可以处理 html 页面设计。最后使用freemarker 可以将这些结合起来，给出最终的输出页面。

#### 4.5 如何集成 SpringBoot和ActiveMQ？

对于集成 Spring Boot 和 ActiveMQ，我们使用依赖关系。 它只需要很少的配置，并且不需要样板代码。

#### 4.6 前后端分离，如何维护接口文档 ?

前后端分离开发日益流行，大部分情况下，我们都是通过 Spring Boot 做前后端分离开发，前后端分离一定会有接口文档，不然会前后端会深深陷入到扯皮中。一个比较笨的方法就是使用 word 或者 md 来维护接口文档，但是效率太低，接口一变，所有人手上的文档都得变。在 Spring Boot 中，这个问题常见的解决方案是 Swagger ，使用 Swagger 我们可以快速生成一个接口文档网站，接口一旦发生变化，文档就会自动更新，所有开发工程师访问这一个在线网站就可以获取到最新的接口文档，非常方便。

#### 4.7 Swagger用过麽？他用来做什么？

Swagger广泛用于可视化API，使用SwaggerUl**为前端开发人员提供在线沙箱**。Swagger 是用于生成RESTful Web服务的可视化表示的工具，规范和完整框架实现。它**使文档能够以与服务器相同的速度更新**。当通过Swagger 正确定义时，消费者可以使用最少量的实现逻辑来理解远程服务并与其进行交互。因此，Swagger 消除了调用服务时的猜测。

```xml
<!--https://mvnrepository.com/artifact/io.springfox/springfox-swagger2-->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger2</artifactId>
    <version>2.9.2</version>
</dependency>
<!--https://mvnrepository.com/artifact/io.springfox/springfox-swagger-ui-->
<dependency>
    <groupId>io.springfox</groupId>
    <artifactId>springfox-swagger-ui</artifactId>
    <version>2.9.2</version>
</dependency>
123456789101112
```

#### 4.8 SpringBoot项目如何热部署？

这可以使用 DEV 工具来实现。通过这种依赖关系，您可以节省任何更改，嵌入式tomcat 将重新启动。Spring Boot 有一个开发工具（DevTools）模块，它有助于提高开发人员的生产力。Java 开发人员面临的一个主要挑战是将文件更改自动部署到服务器并自动重启服务器。开发人员可以重新加载 Spring Boot 上的更改，而无需重新启动服务器。这将消除每次手动部署更改的需要。Spring Boot 在发布它的第一个版本时没有这个功能。这是开发人员最需要的功能。DevTools 模块完全满足开发人员的需求。该模块将在生产环境中被禁用。它还提供 H2 数据库控制台以更好地测试应用程序。

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-devtools</artifactId>
</dependency>
```

#### 4.9 SpringBoot 中的starter到底是什么 ?

首先，这个 Starter 并非什么新的技术点，基本上还是基于 Spring 已有功能来实现的。首先它提供了一个自动化配置类，一般命名为 `XXXAutoConfiguration` ，在这个配置类中通过条件注解来决定一个配置是否生效（条件注解就是 Spring 中原本就有的），然后它还会提供一系列的默认配置，也允许开发者根据实际情况自定义相关配置，然后通过类型安全的属性注入将这些配置属性注入进来，新注入的属性会代替掉默认属性。正因为如此，很多第三方框架，我们只需要引入依赖就可以直接使用了。当然，开发者也可以自定义 Starter

#### 4.10 spring-boot-starter-parent 有什么用?

新创建一个 SpringBoot 项目，默认都是有 parent 的，这个 parent 就是 spring-boot-starter-parent ，spring-boot-starter-parent 主要有如下作用：

1. 定义了 Java 编译版本为 1.8 。
2. 使用 UTF-8 格式编码。
3. 继承自 spring-boot-dependencies，这个里边定义了依赖的版本，也正是因为继承了这个依赖，所以我们在写依赖时才不需要写版本号。
4. 执行打包操作的配置。
5. 自动化的资源过滤。
6. 自动化的插件配置。
7. 针对 application.properties 和 application.yml 的资源过滤，包括通过 profile 定义的不同环境的配置文件，例如 application-dev.properties 和 application-dev.yml。

#### 4.11 SpringBoot 打成的jar和普通的jar有什么区别 ?

Spring oot 项目最终打包成的 jar 是可执行 jar ，这种 jar 可以直接通过 `java -jar xxx.jar` 命令来运行，这种 jar 不可以作为普通的 jar 被其他项目依赖，即使依赖了也无法使用其中的类。

SpringBoot 的 jar 无法被其他项目依赖，主要还是他和普通 jar 的结构不同。普通的 jar 包，解压后直接就是包名，包里就是我们的代码，而 Spring Boot 打包成的可执行 jar 解压后，在 `\BOOT-INF\classes` 目录下才是我们的代码，因此无法被直接引用。如果非要引用，可以在 pom.xml 文件中增加配置，将 Spring Boot 项目打包成两个 jar ，一个可执行，一个可引用。

#### 4.12 如何使用SpringBoot实现异常处理？

Spring 提供了一种使用 ControllerAdvice 处理异常的非常有用的方法。 我们通过实现一个 ControlerAdvice 类，来处理控制器类抛出的所有异常。

#### 4.13 如何使用SpringBoot实现分页和排序？

使用Spring Boot实现分页非常简单。使用Spring Data-JPA可以实现将可分页的`org.springframework.data.domain.Pageable`传递给存储库方法。

```java
public Page<User> find(Integer page, Integer size) {
    if (null == page) {
        page = 0;
    }
    if (CheckUtils.isEmpty(size)) {
        size = 10;
    }
date: 2022-10-02 18:50:29
    Page<User> users = userRepository.findAll(pageable);
    return users;
}
```

#### 4.14 微服务中如何实现 session 共享?

在微服务中，一个完整的项目被拆分成多个不相同的独立的服务，各个服务独立部署在不同的服务器上，各自的 session 被从物理空间上隔离开了，但是经常，我们需要在不同微服务之间共享 session ，常见的方案就是 Spring Session + Redis 来实现 session 共享。将所有微服务的 session 统一保存在 Redis 上，当各个微服务对 session 有相关的读写操作时，都去操作 Redis 上的 session 。这样就实现了 session 共享，Spring Session 基于 Spring 中的代理过滤器实现，使得 session 的同步操作对开发人员而言是透明的，非常简便。

#### 4.15 SpringBoot 中如何实现定时任务?

定时任务也是一个常见的需求，SpringBoot 中对于定时任务的支持主要还是来自 Spring 框架。

在 SpringBoot 中使用定时任务主要有两种不同的方式，一个就是使用 Spring 中的 @Scheduled 注解，另一个则是使用第三方框架 Quartz。

- 使用Spring中的 @Scheduled的方式主要通过@Scheduled注解来实现。
- 使用Quartz，则按照Quartz的方式，定义Job和Trigger即可。
