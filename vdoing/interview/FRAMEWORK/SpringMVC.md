---
title: springMVC
date: 2022-10-02 18:50:29
categories:
  - interview
  - 框架
tags:
  - 
---


# SpringMVC

## 1. Spring MVC基础

#### 1.1 MVC是什么？

MVC是一种设计模式：

- 模型（model）
- 视图（view）
- 控制器（controller）

三层架构的设计模式。用于实现前端页面的展现与后端业务数据处理的分离。

#### 1.2 MVC设计模式的好处有哪些？

1. 分层设计，实现了业务系统各个组件之间的解耦，有利于业务系统的可扩展性，可维护性。
2. 有利于系统的并行开发，提升开发效率。

#### 1.3 什么是Spring MVC？

Spring MVC是一个基于Java的实现了MVC设计模式的请求驱动类型的轻量级Web框架，通过把模型-视图-控制器分离，将web层进行职责解耦，把复杂的web应用分成逻辑清晰的几部分，简化开发，减少出错，方便组内开发人员之间的配合。

#### 1.4 Spring MVC的优点有那些？

1. 可以支持各种视图技术,而不仅仅局限于JSP；
2. 与Spring框架集成（如IoC容器、AOP等）；
3. 清晰的角色分配：
   - 前端控制器(dispatcherServlet) ；
   - 请求到处理器映射（handlerMapping)；
   - 处理器适配器（HandlerAdapter)；
   - 视图解析器（ViewResolver）。
4. 支持各种请求资源的映射策略。

#### 1.5 Spring MVC的主要组件？

1. DispatcherServlet：
   中央控制器，把请求给转发到具体的控制类
   
2. Controller：
   具体处理请求的控制器
   
3. HandlerMapping：
   映射处理器，负责映射中央处理器转发给controller时的映射策略
   
4. ModelAndView：
   服务层返回的数据和视图层的封装类
   
5. ViewResolver：
   视图解析器，解析具体的视图
   
6. Interceptors ：
   拦截器，负责拦截我们定义的请求然后做处理工作
   
   优先级顺序：
   
   拦截器-->过滤器-->AOP

#### 1.6 什么是DispatcherServlet?

Spring的MVC框架是围绕DispatcherServlet来设计的，它用来处理所有的HTTP请求和响应。

#### 1.7 简述一下DispatcherServlet 的工作流程

1. 用户发送请求至前端控制器DispatcherServlet；
2. DispatcherServlet收到请求后，调用HandlerMapping处理器映射器，请求获取Handle；
3. 处理器映射器根据请求url找到具体的处理器，生成处理器对象及处理器拦截器(如果有则生成)一并返回给DispatcherServlet；
4. DispatcherServlet 调用 HandlerAdapter处理器适配器；
5. HandlerAdapter 经过适配调用 具体处理器(Handler，也叫后端控制器)；
6. Handler执行完成返回ModelAndView；
7. HandlerAdapter将Handler执行结果ModelAndView返回给DispatcherServlet；
8. DispatcherServlet将ModelAndView传给ViewResolver视图解析器进行解析；
9. ViewResolver解析后返回具体View；
10. DispatcherServlet对View进行渲染视图（即将模型数据填充至视图中）
11. DispatcherServlet响应用户。

![img](https://gitee.com/yueMagic/img-cloud/raw/master/1649e9bc38cfa7ece6ae2d3904ccf675.png)

#### 1.8 什么是Spring MVC框架的控制器？

控制器提供一个访问应用程序的行为，此行为通常通过服务接口实现。控制器解析用户输入并将其转换为一个由视图呈现给用户的模型。Spring用一个非常抽象的方式实现了一个控制层，允许用户创建多种用途的控制器。

#### 1.9 Spring MVC的控制器是单例的吗？

是单例的。

#### 1.10 Spring MVC的单例控制器会带来什么问题？如何处理？

- 问题
  多线程访问的时候有线程安全问题；
- 解决方案
  在控制器里面不能写字段。

#### 1.11 Spring MVC与Struts2区别？

- 相同点

  都是基于mvc的表现层框架，都用于web项目的开发。

- 不同点

  1. 前端控制器不一样。Spring MVC的前端控制器是servlet：DispatcherServlet。struts2的前端控制器是filter：StrutsPreparedAndExcutorFilter。
  2. 请求参数的接收方式不一样。Spring MVC是使用方法的形参接收请求的参数，基于方法的开发，线程安全，可以设计为单例或者多例的开发，推荐使用单例模式的开发（执行效率更高），默认就是单例开发模式。struts2是通过类的成员变量接收请求的参数，是基于类的开发，线程不安全，只能设计为多例的开发。
  3. Struts采用值栈存储请求和响应的数据，通过OGNL存取数据，Spring MVC通过参数解析器是将request请求内容解析，并给方法形参赋值，将数据和视图封装成ModelAndView对象，最后又将ModelAndView中的模型数据通过reques域传输到页面。Jsp视图解析器默认使用jstl。
  4. 与spring整合不一样。Spring MVC是spring框架的一部分，不需要整合。在企业项目中，Spring MVC使用更多一些。

#### 1.12 WebApplicationContext有什么作用？

WebApplicationContext 继承了ApplicationContext 并增加了一些WEB应用必备的特有功能，它不同于一般的ApplicationContext ，因为它能处理主题，并找到被关联的servlet。

## 2. Spring MVC注解

#### 2.1 注解原理是什么？

注解本质是一个继承了Annotation的特殊接口，其具体实现类是Java运行时生成的动态代理类。我们通过反射获取注解时，返回的是Java运行时生成的动态代理对象。通过代理对象调用自定义注解的方法，会最终调用AnnotationInvocationHandler的invoke方法。该方法会从memberValues这个Map中索引出对应的值。而memberValues的来源是Java常量池。

#### 2.2 Spring MVC常用的注解有哪些？

- **@RequestMapping**：
  用于处理请求 url 映射的注解，可用于类或方法上。用于类上，则表示类中的所有响应请求的方法都是以该地址作为父路径。
- **@RequestBody**：
  注解实现接收http请求的json数据，将json转换为java对象。
- **@ResponseBody**：
  注解实现将conreoller方法返回对象转化为json对象响应给客户。

#### 2.3 Sping MVC中的控制器注解是什么？

一般用@**Controller**注解;
也可以使用@RestController

> @RestController注解相当于@ResponseBody ＋ @Controller

#### 2.4 @Controller注解的作用

在Spring MVC 中，控制器Controller 负责处理由DispatcherServlet 分发的请求，它把用户请求的数据经过业务处理层处理之后封装成一个Model ，然后再把该Model 返回给对应的View 进行展示。在Spring MVC 中提供了一个非常简便的定义Controller 的方法，你无需继承特定的类或实现特定的接口，只需使用@Controller 标记一个类是Controller ，然后使用@RequestMapping 和@RequestParam 等一些注解用以定义URL 请求和Controller 方法之间的映射，这样的Controller 就能被外界访问到。此外Controller 不会直接依赖于HttpServletRequest 和HttpServletResponse 等HttpServlet 对象，它们可以通过Controller 的方法参数灵活的获取到。

@Controller 用于标记在一个类上，使用它标记的类就是一个Spring MVC Controller 对象。分发处理器将会扫描使用了该注解的类的方法，并检测该方法是否使用了@RequestMapping 注解。@Controller 只是定义了一个控制器类，而使用@RequestMapping 注解的方法才是真正处理请求的处理器。单单使用@Controller 标记在一个类上还不能真正意义上的说它就是Spring MVC 的一个控制器类，因为这个时候Spring 还不认识它。那么要如何做Spring 才能认识它呢？这个时候就需要我们把这个控制器类交给Spring 来管理。有两种方式：

- 在Spring MVC 的配置文件中定义MyController 的bean 对象。
- 在Spring MVC 的配置文件中告诉Spring 该到哪里去找标记为@Controller 的Controller 控制器。

#### 2.5 @RequestMapping注解的作用?

RequestMapping是一个用来处理请求地址映射的注解，可用于类或方法上。用于类上，表示类中的所有响应请求的方法都是以该地址作为父路径。

RequestMapping注解有六个属性

- **value**：
  指定请求的实际地址，指定的地址可以是URI Template 模式（后面将会说明）；
- **method**：
  指定请求的method类型， GET、POST、PUT、DELETE等；
- **consumes**：
  指定处理请求的提交内容类型（Content-Type），例如application/json, text/html;
- **produces**:
  指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回；
- **params**：
  指定request中必须包含某些参数值是，才让该方法处理。
- **headers**：
  指定request中必须包含某些指定的header值，才能让该方法处理请求。

#### 2.6 @ResponseBody注解的作用是什么？

- **作用**：
  该注解用于将Controller的方法返回的对象，通过适当的HttpMessageConverter转换为指定格式后，写入到Response对象的body数据区。
- **使用时机**：
  返回的数据不是html标签的页面，而是其他某种格式的数据时（如json、xml等）使用；

#### 2.7 @PathVariable和@RequestParam的区别?

- **@PathVariable**：
  可以用来获取请求路线上面的变量；
  如请求路径：http://127.0.0.1/user/1
  可以通过@PathVariable

  ```java
  @RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
  1
  ```

  来获取路径在的变量id

- **@RequestParam**：
  用来获得静态的URL请求入参 spring注解时action里用到。

## 3. Spring MVC运用

#### 3.1 Spring MVC如何拦截GET请求？

可以在@RequestMapping注解里面加上method=RequestMethod.GET。

#### 3.2 Spring MVC如何获取请求传参？

直接在方法的形参里面声明这个参数就可以

> 名字和传过来的参数一样。

#### 3.3 SpringMVC多个参数如何优雅接收？

直接在方法中声明这个对象,Spring MVC就自动会把属性赋值到这个对象里面。

#### 3.4 如何在方法里面得到Request,或者Session？

直接在方法的形参中声明request,Spring MVC就自动把request对象传入。

#### 3.5 Spring MVC怎么样设定重定向和转发的？

- **转发**：
  在返回值前面加"**forward:**"
  如：“forward:user.do?name=method4”
- **重定向**：
  在返回值前面加"**redirect:**"，
  如：“redirect:http://www.baidu.com”

#### 3.6 Spring MVC怎么和AJAX相互调用的？

通过Jackson框架就可以把Java里面的对象直接转化成Js可以识别的Json对象。具体步骤如下 ：

1. 加入Jackson.jar
2. 在配置文件中配置json的映射
3. 在接受Ajax方法里面可以直接返回Object,List等,但方法前面要加上@ResponseBody注解。

#### 3.7 Spring MVC如何解决GET、POST请求中文乱码问题？

- GET乱码：

  - 方式一：
    修改tomcat配置文件添加编码与工程编码一致，如下：

    ```xml
    <ConnectorURIEncoding="utf-8" connectionTimeout="20000" port="8080" protocol="HTTP/1.1" redirectPort="8443"/>
    1
    ```

  - 方式二：
    参数进行重新编码：

    ```
    String userName = new String(request.getParamter(“userName”).getBytes(“ISO8859-1”),“utf-8”)
    1
    ```

    ISO8859-1是tomcat默认编码，需要将tomcat编码后的内容按utf-8编码。

- POST请求乱码问题：
  在web.xml中配置一个CharacterEncodingFilter过滤器，设置成utf-8；

  ```xml
  <filter>
      <filter-name>CharacterEncodingFilter</filter-name>
      <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
      <init-param>
          <param-name>encoding</param-name>
          <param-value>utf-8</param-value>
      </init-param>
  </filter>
  <filter-mapping>
      <filter-name>CharacterEncodingFilter</filter-name>
      <url-pattern>/*</url-pattern>
  </filter-mapping>
  123456789101112
  ```

#### 3.8 Spring MVC如何处理异常？

可以将异常抛给Spring框架，由Spring框架来处理；我们只需要配置简单的异常处理器，在异常处理器中添视图页面即可

#### 3.9 Spring MVC中函数的返回值是什么？

返回值可以有很多类型,有String, ModelAndView。ModelAndView类把视图和数据都合并的一起的，但一般用String比较好。

#### 3.10 Spring MVC用什么对象从后台向前台传递数据的？

通过ModelMap对象,可以在这个对象里面调用put方法,把对象加到里面,前台就可以通过el表达式拿到。

#### 3.11 怎么把ModelMap里面的数据放入Session里面？

可以在类上面加上@SessionAttributes注解,里面包含的字符串就是要放入session里面的key。

#### 3.12 Spring MVC拦截器如何使用？

- **定义拦截器**，实现HandlerInterceptor接口；接口中提供三个方法。
  - **preHandle** ：
    进入 Handler方法之前执行，用于身份认证、身份授权，比如身份认证，如果认证通过表示当前用户没有登陆，需要此方法拦截不再向下执行
  - **postHandle**：
    进入Handler方法之后，返回modelAndView之前执行，应用场景从modelAndView出发：将公用的模型数据(比如菜单导航)在这里传到视图，也可以在这里统一指定视图
  - **afterCompletion**：
    执行Handler完成执行此方法，应用场景：统一异常处理，统一日志处理
- **拦截器配置**
  - **针对HandlerMapping配置**(不推荐)：
    SpringMVC拦截器针对HandlerMapping进行拦截设置，如果在某个HandlerMapping中配置拦截，经过该 HandlerMapping映射成功的handler最终使用该 拦截器。(一般不推荐使用)
  - **类似全局的拦截器**：
    SpringMVC配置类似全局的拦截器，SpringMVC框架将配置的类似全局的拦截器注入到每个HandlerMapping中

## 4. 其他

#### 4.1 SpringMVC 中系统如何分层 ？

- 系统分为表现层（UI）：
  数据的展现，操作页面，请求转发。
- 业务层（服务层）：
  封装业务处理逻辑
- 持久层（数据访问层）：
  封装数据访问逻辑

各层之间的关系： 表示层通过接口调用业务层，业务层通过接口调用持久层，这样，当下一层发生变化改变，不影响上一层的数据。 MVC是一种表现层的架构
![img](https://gitee.com/yueMagic/img-cloud/raw/master/2ad4f0401f9017c698c93b24b4b27928.png)
