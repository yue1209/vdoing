import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as e,f as s}from"./app.0cea91aa.js";const t={},i=s(`<h1 id="springmvc" tabindex="-1"><a class="header-anchor" href="#springmvc" aria-hidden="true">#</a> SpringMVC</h1><h2 id="_1-spring-mvc\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#_1-spring-mvc\u57FA\u7840" aria-hidden="true">#</a> 1. Spring MVC\u57FA\u7840</h2><h4 id="_1-1-mvc\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_1-1-mvc\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 1.1 MVC\u662F\u4EC0\u4E48\uFF1F</h4><p>MVC\u662F\u4E00\u79CD\u8BBE\u8BA1\u6A21\u5F0F\uFF1A</p><ul><li>\u6A21\u578B\uFF08model\uFF09</li><li>\u89C6\u56FE\uFF08view\uFF09</li><li>\u63A7\u5236\u5668\uFF08controller\uFF09</li></ul><p>\u4E09\u5C42\u67B6\u6784\u7684\u8BBE\u8BA1\u6A21\u5F0F\u3002\u7528\u4E8E\u5B9E\u73B0\u524D\u7AEF\u9875\u9762\u7684\u5C55\u73B0\u4E0E\u540E\u7AEF\u4E1A\u52A1\u6570\u636E\u5904\u7406\u7684\u5206\u79BB\u3002</p><h4 id="_1-2-mvc\u8BBE\u8BA1\u6A21\u5F0F\u7684\u597D\u5904\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#_1-2-mvc\u8BBE\u8BA1\u6A21\u5F0F\u7684\u597D\u5904\u6709\u54EA\u4E9B" aria-hidden="true">#</a> 1.2 MVC\u8BBE\u8BA1\u6A21\u5F0F\u7684\u597D\u5904\u6709\u54EA\u4E9B\uFF1F</h4><ol><li>\u5206\u5C42\u8BBE\u8BA1\uFF0C\u5B9E\u73B0\u4E86\u4E1A\u52A1\u7CFB\u7EDF\u5404\u4E2A\u7EC4\u4EF6\u4E4B\u95F4\u7684\u89E3\u8026\uFF0C\u6709\u5229\u4E8E\u4E1A\u52A1\u7CFB\u7EDF\u7684\u53EF\u6269\u5C55\u6027\uFF0C\u53EF\u7EF4\u62A4\u6027\u3002</li><li>\u6709\u5229\u4E8E\u7CFB\u7EDF\u7684\u5E76\u884C\u5F00\u53D1\uFF0C\u63D0\u5347\u5F00\u53D1\u6548\u7387\u3002</li></ol><h4 id="_1-3-\u4EC0\u4E48\u662Fspring-mvc" tabindex="-1"><a class="header-anchor" href="#_1-3-\u4EC0\u4E48\u662Fspring-mvc" aria-hidden="true">#</a> 1.3 \u4EC0\u4E48\u662FSpring MVC\uFF1F</h4><p>Spring MVC\u662F\u4E00\u4E2A\u57FA\u4E8EJava\u7684\u5B9E\u73B0\u4E86MVC\u8BBE\u8BA1\u6A21\u5F0F\u7684\u8BF7\u6C42\u9A71\u52A8\u7C7B\u578B\u7684\u8F7B\u91CF\u7EA7Web\u6846\u67B6\uFF0C\u901A\u8FC7\u628A\u6A21\u578B-\u89C6\u56FE-\u63A7\u5236\u5668\u5206\u79BB\uFF0C\u5C06web\u5C42\u8FDB\u884C\u804C\u8D23\u89E3\u8026\uFF0C\u628A\u590D\u6742\u7684web\u5E94\u7528\u5206\u6210\u903B\u8F91\u6E05\u6670\u7684\u51E0\u90E8\u5206\uFF0C\u7B80\u5316\u5F00\u53D1\uFF0C\u51CF\u5C11\u51FA\u9519\uFF0C\u65B9\u4FBF\u7EC4\u5185\u5F00\u53D1\u4EBA\u5458\u4E4B\u95F4\u7684\u914D\u5408\u3002</p><h4 id="_1-4-spring-mvc\u7684\u4F18\u70B9\u6709\u90A3\u4E9B" tabindex="-1"><a class="header-anchor" href="#_1-4-spring-mvc\u7684\u4F18\u70B9\u6709\u90A3\u4E9B" aria-hidden="true">#</a> 1.4 Spring MVC\u7684\u4F18\u70B9\u6709\u90A3\u4E9B\uFF1F</h4><ol><li>\u53EF\u4EE5\u652F\u6301\u5404\u79CD\u89C6\u56FE\u6280\u672F,\u800C\u4E0D\u4EC5\u4EC5\u5C40\u9650\u4E8EJSP\uFF1B</li><li>\u4E0ESpring\u6846\u67B6\u96C6\u6210\uFF08\u5982IoC\u5BB9\u5668\u3001AOP\u7B49\uFF09\uFF1B</li><li>\u6E05\u6670\u7684\u89D2\u8272\u5206\u914D\uFF1A <ul><li>\u524D\u7AEF\u63A7\u5236\u5668(dispatcherServlet) \uFF1B</li><li>\u8BF7\u6C42\u5230\u5904\u7406\u5668\u6620\u5C04\uFF08handlerMapping)\uFF1B</li><li>\u5904\u7406\u5668\u9002\u914D\u5668\uFF08HandlerAdapter)\uFF1B</li><li>\u89C6\u56FE\u89E3\u6790\u5668\uFF08ViewResolver\uFF09\u3002</li></ul></li><li>\u652F\u6301\u5404\u79CD\u8BF7\u6C42\u8D44\u6E90\u7684\u6620\u5C04\u7B56\u7565\u3002</li></ol><h4 id="_1-5-spring-mvc\u7684\u4E3B\u8981\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#_1-5-spring-mvc\u7684\u4E3B\u8981\u7EC4\u4EF6" aria-hidden="true">#</a> 1.5 Spring MVC\u7684\u4E3B\u8981\u7EC4\u4EF6\uFF1F</h4><ol><li><p>DispatcherServlet\uFF1A \u4E2D\u592E\u63A7\u5236\u5668\uFF0C\u628A\u8BF7\u6C42\u7ED9\u8F6C\u53D1\u5230\u5177\u4F53\u7684\u63A7\u5236\u7C7B</p></li><li><p>Controller\uFF1A \u5177\u4F53\u5904\u7406\u8BF7\u6C42\u7684\u63A7\u5236\u5668</p></li><li><p>HandlerMapping\uFF1A \u6620\u5C04\u5904\u7406\u5668\uFF0C\u8D1F\u8D23\u6620\u5C04\u4E2D\u592E\u5904\u7406\u5668\u8F6C\u53D1\u7ED9controller\u65F6\u7684\u6620\u5C04\u7B56\u7565</p></li><li><p>ModelAndView\uFF1A \u670D\u52A1\u5C42\u8FD4\u56DE\u7684\u6570\u636E\u548C\u89C6\u56FE\u5C42\u7684\u5C01\u88C5\u7C7B</p></li><li><p>ViewResolver\uFF1A \u89C6\u56FE\u89E3\u6790\u5668\uFF0C\u89E3\u6790\u5177\u4F53\u7684\u89C6\u56FE</p></li><li><p>Interceptors \uFF1A \u62E6\u622A\u5668\uFF0C\u8D1F\u8D23\u62E6\u622A\u6211\u4EEC\u5B9A\u4E49\u7684\u8BF7\u6C42\u7136\u540E\u505A\u5904\u7406\u5DE5\u4F5C</p><p>\u4F18\u5148\u7EA7\u987A\u5E8F\uFF1A</p><p>\u62E6\u622A\u5668--&gt;\u8FC7\u6EE4\u5668--&gt;AOP</p></li></ol><h4 id="_1-6-\u4EC0\u4E48\u662Fdispatcherservlet" tabindex="-1"><a class="header-anchor" href="#_1-6-\u4EC0\u4E48\u662Fdispatcherservlet" aria-hidden="true">#</a> 1.6 \u4EC0\u4E48\u662FDispatcherServlet?</h4><p>Spring\u7684MVC\u6846\u67B6\u662F\u56F4\u7ED5DispatcherServlet\u6765\u8BBE\u8BA1\u7684\uFF0C\u5B83\u7528\u6765\u5904\u7406\u6240\u6709\u7684HTTP\u8BF7\u6C42\u548C\u54CD\u5E94\u3002</p><h4 id="_1-7-\u7B80\u8FF0\u4E00\u4E0Bdispatcherservlet-\u7684\u5DE5\u4F5C\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#_1-7-\u7B80\u8FF0\u4E00\u4E0Bdispatcherservlet-\u7684\u5DE5\u4F5C\u6D41\u7A0B" aria-hidden="true">#</a> 1.7 \u7B80\u8FF0\u4E00\u4E0BDispatcherServlet \u7684\u5DE5\u4F5C\u6D41\u7A0B</h4><ol><li>\u7528\u6237\u53D1\u9001\u8BF7\u6C42\u81F3\u524D\u7AEF\u63A7\u5236\u5668DispatcherServlet\uFF1B</li><li>DispatcherServlet\u6536\u5230\u8BF7\u6C42\u540E\uFF0C\u8C03\u7528HandlerMapping\u5904\u7406\u5668\u6620\u5C04\u5668\uFF0C\u8BF7\u6C42\u83B7\u53D6Handle\uFF1B</li><li>\u5904\u7406\u5668\u6620\u5C04\u5668\u6839\u636E\u8BF7\u6C42url\u627E\u5230\u5177\u4F53\u7684\u5904\u7406\u5668\uFF0C\u751F\u6210\u5904\u7406\u5668\u5BF9\u8C61\u53CA\u5904\u7406\u5668\u62E6\u622A\u5668(\u5982\u679C\u6709\u5219\u751F\u6210)\u4E00\u5E76\u8FD4\u56DE\u7ED9DispatcherServlet\uFF1B</li><li>DispatcherServlet \u8C03\u7528 HandlerAdapter\u5904\u7406\u5668\u9002\u914D\u5668\uFF1B</li><li>HandlerAdapter \u7ECF\u8FC7\u9002\u914D\u8C03\u7528 \u5177\u4F53\u5904\u7406\u5668(Handler\uFF0C\u4E5F\u53EB\u540E\u7AEF\u63A7\u5236\u5668)\uFF1B</li><li>Handler\u6267\u884C\u5B8C\u6210\u8FD4\u56DEModelAndView\uFF1B</li><li>HandlerAdapter\u5C06Handler\u6267\u884C\u7ED3\u679CModelAndView\u8FD4\u56DE\u7ED9DispatcherServlet\uFF1B</li><li>DispatcherServlet\u5C06ModelAndView\u4F20\u7ED9ViewResolver\u89C6\u56FE\u89E3\u6790\u5668\u8FDB\u884C\u89E3\u6790\uFF1B</li><li>ViewResolver\u89E3\u6790\u540E\u8FD4\u56DE\u5177\u4F53View\uFF1B</li><li>DispatcherServlet\u5BF9View\u8FDB\u884C\u6E32\u67D3\u89C6\u56FE\uFF08\u5373\u5C06\u6A21\u578B\u6570\u636E\u586B\u5145\u81F3\u89C6\u56FE\u4E2D\uFF09</li><li>DispatcherServlet\u54CD\u5E94\u7528\u6237\u3002</li></ol><p><img src="https://gitee.com/yueMagic/img-cloud/raw/master/1649e9bc38cfa7ece6ae2d3904ccf675.png" alt="img"></p><h4 id="_1-8-\u4EC0\u4E48\u662Fspring-mvc\u6846\u67B6\u7684\u63A7\u5236\u5668" tabindex="-1"><a class="header-anchor" href="#_1-8-\u4EC0\u4E48\u662Fspring-mvc\u6846\u67B6\u7684\u63A7\u5236\u5668" aria-hidden="true">#</a> 1.8 \u4EC0\u4E48\u662FSpring MVC\u6846\u67B6\u7684\u63A7\u5236\u5668\uFF1F</h4><p>\u63A7\u5236\u5668\u63D0\u4F9B\u4E00\u4E2A\u8BBF\u95EE\u5E94\u7528\u7A0B\u5E8F\u7684\u884C\u4E3A\uFF0C\u6B64\u884C\u4E3A\u901A\u5E38\u901A\u8FC7\u670D\u52A1\u63A5\u53E3\u5B9E\u73B0\u3002\u63A7\u5236\u5668\u89E3\u6790\u7528\u6237\u8F93\u5165\u5E76\u5C06\u5176\u8F6C\u6362\u4E3A\u4E00\u4E2A\u7531\u89C6\u56FE\u5448\u73B0\u7ED9\u7528\u6237\u7684\u6A21\u578B\u3002Spring\u7528\u4E00\u4E2A\u975E\u5E38\u62BD\u8C61\u7684\u65B9\u5F0F\u5B9E\u73B0\u4E86\u4E00\u4E2A\u63A7\u5236\u5C42\uFF0C\u5141\u8BB8\u7528\u6237\u521B\u5EFA\u591A\u79CD\u7528\u9014\u7684\u63A7\u5236\u5668\u3002</p><h4 id="_1-9-spring-mvc\u7684\u63A7\u5236\u5668\u662F\u5355\u4F8B\u7684\u5417" tabindex="-1"><a class="header-anchor" href="#_1-9-spring-mvc\u7684\u63A7\u5236\u5668\u662F\u5355\u4F8B\u7684\u5417" aria-hidden="true">#</a> 1.9 Spring MVC\u7684\u63A7\u5236\u5668\u662F\u5355\u4F8B\u7684\u5417\uFF1F</h4><p>\u662F\u5355\u4F8B\u7684\u3002</p><h4 id="_1-10-spring-mvc\u7684\u5355\u4F8B\u63A7\u5236\u5668\u4F1A\u5E26\u6765\u4EC0\u4E48\u95EE\u9898-\u5982\u4F55\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_1-10-spring-mvc\u7684\u5355\u4F8B\u63A7\u5236\u5668\u4F1A\u5E26\u6765\u4EC0\u4E48\u95EE\u9898-\u5982\u4F55\u5904\u7406" aria-hidden="true">#</a> 1.10 Spring MVC\u7684\u5355\u4F8B\u63A7\u5236\u5668\u4F1A\u5E26\u6765\u4EC0\u4E48\u95EE\u9898\uFF1F\u5982\u4F55\u5904\u7406\uFF1F</h4><ul><li>\u95EE\u9898 \u591A\u7EBF\u7A0B\u8BBF\u95EE\u7684\u65F6\u5019\u6709\u7EBF\u7A0B\u5B89\u5168\u95EE\u9898\uFF1B</li><li>\u89E3\u51B3\u65B9\u6848 \u5728\u63A7\u5236\u5668\u91CC\u9762\u4E0D\u80FD\u5199\u5B57\u6BB5\u3002</li></ul><h4 id="_1-11-spring-mvc\u4E0Estruts2\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_1-11-spring-mvc\u4E0Estruts2\u533A\u522B" aria-hidden="true">#</a> 1.11 Spring MVC\u4E0EStruts2\u533A\u522B\uFF1F</h4><ul><li><p>\u76F8\u540C\u70B9</p><p>\u90FD\u662F\u57FA\u4E8Emvc\u7684\u8868\u73B0\u5C42\u6846\u67B6\uFF0C\u90FD\u7528\u4E8Eweb\u9879\u76EE\u7684\u5F00\u53D1\u3002</p></li><li><p>\u4E0D\u540C\u70B9</p><ol><li>\u524D\u7AEF\u63A7\u5236\u5668\u4E0D\u4E00\u6837\u3002Spring MVC\u7684\u524D\u7AEF\u63A7\u5236\u5668\u662Fservlet\uFF1ADispatcherServlet\u3002struts2\u7684\u524D\u7AEF\u63A7\u5236\u5668\u662Ffilter\uFF1AStrutsPreparedAndExcutorFilter\u3002</li><li>\u8BF7\u6C42\u53C2\u6570\u7684\u63A5\u6536\u65B9\u5F0F\u4E0D\u4E00\u6837\u3002Spring MVC\u662F\u4F7F\u7528\u65B9\u6CD5\u7684\u5F62\u53C2\u63A5\u6536\u8BF7\u6C42\u7684\u53C2\u6570\uFF0C\u57FA\u4E8E\u65B9\u6CD5\u7684\u5F00\u53D1\uFF0C\u7EBF\u7A0B\u5B89\u5168\uFF0C\u53EF\u4EE5\u8BBE\u8BA1\u4E3A\u5355\u4F8B\u6216\u8005\u591A\u4F8B\u7684\u5F00\u53D1\uFF0C\u63A8\u8350\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F\u7684\u5F00\u53D1\uFF08\u6267\u884C\u6548\u7387\u66F4\u9AD8\uFF09\uFF0C\u9ED8\u8BA4\u5C31\u662F\u5355\u4F8B\u5F00\u53D1\u6A21\u5F0F\u3002struts2\u662F\u901A\u8FC7\u7C7B\u7684\u6210\u5458\u53D8\u91CF\u63A5\u6536\u8BF7\u6C42\u7684\u53C2\u6570\uFF0C\u662F\u57FA\u4E8E\u7C7B\u7684\u5F00\u53D1\uFF0C\u7EBF\u7A0B\u4E0D\u5B89\u5168\uFF0C\u53EA\u80FD\u8BBE\u8BA1\u4E3A\u591A\u4F8B\u7684\u5F00\u53D1\u3002</li><li>Struts\u91C7\u7528\u503C\u6808\u5B58\u50A8\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u6570\u636E\uFF0C\u901A\u8FC7OGNL\u5B58\u53D6\u6570\u636E\uFF0CSpring MVC\u901A\u8FC7\u53C2\u6570\u89E3\u6790\u5668\u662F\u5C06request\u8BF7\u6C42\u5185\u5BB9\u89E3\u6790\uFF0C\u5E76\u7ED9\u65B9\u6CD5\u5F62\u53C2\u8D4B\u503C\uFF0C\u5C06\u6570\u636E\u548C\u89C6\u56FE\u5C01\u88C5\u6210ModelAndView\u5BF9\u8C61\uFF0C\u6700\u540E\u53C8\u5C06ModelAndView\u4E2D\u7684\u6A21\u578B\u6570\u636E\u901A\u8FC7reques\u57DF\u4F20\u8F93\u5230\u9875\u9762\u3002Jsp\u89C6\u56FE\u89E3\u6790\u5668\u9ED8\u8BA4\u4F7F\u7528jstl\u3002</li><li>\u4E0Espring\u6574\u5408\u4E0D\u4E00\u6837\u3002Spring MVC\u662Fspring\u6846\u67B6\u7684\u4E00\u90E8\u5206\uFF0C\u4E0D\u9700\u8981\u6574\u5408\u3002\u5728\u4F01\u4E1A\u9879\u76EE\u4E2D\uFF0CSpring MVC\u4F7F\u7528\u66F4\u591A\u4E00\u4E9B\u3002</li></ol></li></ul><h4 id="_1-12-webapplicationcontext\u6709\u4EC0\u4E48\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_1-12-webapplicationcontext\u6709\u4EC0\u4E48\u4F5C\u7528" aria-hidden="true">#</a> 1.12 WebApplicationContext\u6709\u4EC0\u4E48\u4F5C\u7528\uFF1F</h4><p>WebApplicationContext \u7EE7\u627F\u4E86ApplicationContext \u5E76\u589E\u52A0\u4E86\u4E00\u4E9BWEB\u5E94\u7528\u5FC5\u5907\u7684\u7279\u6709\u529F\u80FD\uFF0C\u5B83\u4E0D\u540C\u4E8E\u4E00\u822C\u7684ApplicationContext \uFF0C\u56E0\u4E3A\u5B83\u80FD\u5904\u7406\u4E3B\u9898\uFF0C\u5E76\u627E\u5230\u88AB\u5173\u8054\u7684servlet\u3002</p><h2 id="_2-spring-mvc\u6CE8\u89E3" tabindex="-1"><a class="header-anchor" href="#_2-spring-mvc\u6CE8\u89E3" aria-hidden="true">#</a> 2. Spring MVC\u6CE8\u89E3</h2><h4 id="_2-1-\u6CE8\u89E3\u539F\u7406\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_2-1-\u6CE8\u89E3\u539F\u7406\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 2.1 \u6CE8\u89E3\u539F\u7406\u662F\u4EC0\u4E48\uFF1F</h4><p>\u6CE8\u89E3\u672C\u8D28\u662F\u4E00\u4E2A\u7EE7\u627F\u4E86Annotation\u7684\u7279\u6B8A\u63A5\u53E3\uFF0C\u5176\u5177\u4F53\u5B9E\u73B0\u7C7B\u662FJava\u8FD0\u884C\u65F6\u751F\u6210\u7684\u52A8\u6001\u4EE3\u7406\u7C7B\u3002\u6211\u4EEC\u901A\u8FC7\u53CD\u5C04\u83B7\u53D6\u6CE8\u89E3\u65F6\uFF0C\u8FD4\u56DE\u7684\u662FJava\u8FD0\u884C\u65F6\u751F\u6210\u7684\u52A8\u6001\u4EE3\u7406\u5BF9\u8C61\u3002\u901A\u8FC7\u4EE3\u7406\u5BF9\u8C61\u8C03\u7528\u81EA\u5B9A\u4E49\u6CE8\u89E3\u7684\u65B9\u6CD5\uFF0C\u4F1A\u6700\u7EC8\u8C03\u7528AnnotationInvocationHandler\u7684invoke\u65B9\u6CD5\u3002\u8BE5\u65B9\u6CD5\u4F1A\u4ECEmemberValues\u8FD9\u4E2AMap\u4E2D\u7D22\u5F15\u51FA\u5BF9\u5E94\u7684\u503C\u3002\u800CmemberValues\u7684\u6765\u6E90\u662FJava\u5E38\u91CF\u6C60\u3002</p><h4 id="_2-2-spring-mvc\u5E38\u7528\u7684\u6CE8\u89E3\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#_2-2-spring-mvc\u5E38\u7528\u7684\u6CE8\u89E3\u6709\u54EA\u4E9B" aria-hidden="true">#</a> 2.2 Spring MVC\u5E38\u7528\u7684\u6CE8\u89E3\u6709\u54EA\u4E9B\uFF1F</h4><ul><li><strong>@RequestMapping</strong>\uFF1A \u7528\u4E8E\u5904\u7406\u8BF7\u6C42 url \u6620\u5C04\u7684\u6CE8\u89E3\uFF0C\u53EF\u7528\u4E8E\u7C7B\u6216\u65B9\u6CD5\u4E0A\u3002\u7528\u4E8E\u7C7B\u4E0A\uFF0C\u5219\u8868\u793A\u7C7B\u4E2D\u7684\u6240\u6709\u54CD\u5E94\u8BF7\u6C42\u7684\u65B9\u6CD5\u90FD\u662F\u4EE5\u8BE5\u5730\u5740\u4F5C\u4E3A\u7236\u8DEF\u5F84\u3002</li><li><strong>@RequestBody</strong>\uFF1A \u6CE8\u89E3\u5B9E\u73B0\u63A5\u6536http\u8BF7\u6C42\u7684json\u6570\u636E\uFF0C\u5C06json\u8F6C\u6362\u4E3Ajava\u5BF9\u8C61\u3002</li><li><strong>@ResponseBody</strong>\uFF1A \u6CE8\u89E3\u5B9E\u73B0\u5C06conreoller\u65B9\u6CD5\u8FD4\u56DE\u5BF9\u8C61\u8F6C\u5316\u4E3Ajson\u5BF9\u8C61\u54CD\u5E94\u7ED9\u5BA2\u6237\u3002</li></ul><h4 id="_2-3-sping-mvc\u4E2D\u7684\u63A7\u5236\u5668\u6CE8\u89E3\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_2-3-sping-mvc\u4E2D\u7684\u63A7\u5236\u5668\u6CE8\u89E3\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 2.3 Sping MVC\u4E2D\u7684\u63A7\u5236\u5668\u6CE8\u89E3\u662F\u4EC0\u4E48\uFF1F</h4><p>\u4E00\u822C\u7528@<strong>Controller</strong>\u6CE8\u89E3; \u4E5F\u53EF\u4EE5\u4F7F\u7528@RestController</p><blockquote><p>@RestController\u6CE8\u89E3\u76F8\u5F53\u4E8E@ResponseBody \uFF0B @Controller</p></blockquote><h4 id="_2-4-controller\u6CE8\u89E3\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_2-4-controller\u6CE8\u89E3\u7684\u4F5C\u7528" aria-hidden="true">#</a> 2.4 @Controller\u6CE8\u89E3\u7684\u4F5C\u7528</h4><p>\u5728Spring MVC \u4E2D\uFF0C\u63A7\u5236\u5668Controller \u8D1F\u8D23\u5904\u7406\u7531DispatcherServlet \u5206\u53D1\u7684\u8BF7\u6C42\uFF0C\u5B83\u628A\u7528\u6237\u8BF7\u6C42\u7684\u6570\u636E\u7ECF\u8FC7\u4E1A\u52A1\u5904\u7406\u5C42\u5904\u7406\u4E4B\u540E\u5C01\u88C5\u6210\u4E00\u4E2AModel \uFF0C\u7136\u540E\u518D\u628A\u8BE5Model \u8FD4\u56DE\u7ED9\u5BF9\u5E94\u7684View \u8FDB\u884C\u5C55\u793A\u3002\u5728Spring MVC \u4E2D\u63D0\u4F9B\u4E86\u4E00\u4E2A\u975E\u5E38\u7B80\u4FBF\u7684\u5B9A\u4E49Controller \u7684\u65B9\u6CD5\uFF0C\u4F60\u65E0\u9700\u7EE7\u627F\u7279\u5B9A\u7684\u7C7B\u6216\u5B9E\u73B0\u7279\u5B9A\u7684\u63A5\u53E3\uFF0C\u53EA\u9700\u4F7F\u7528@Controller \u6807\u8BB0\u4E00\u4E2A\u7C7B\u662FController \uFF0C\u7136\u540E\u4F7F\u7528@RequestMapping \u548C@RequestParam \u7B49\u4E00\u4E9B\u6CE8\u89E3\u7528\u4EE5\u5B9A\u4E49URL \u8BF7\u6C42\u548CController \u65B9\u6CD5\u4E4B\u95F4\u7684\u6620\u5C04\uFF0C\u8FD9\u6837\u7684Controller \u5C31\u80FD\u88AB\u5916\u754C\u8BBF\u95EE\u5230\u3002\u6B64\u5916Controller \u4E0D\u4F1A\u76F4\u63A5\u4F9D\u8D56\u4E8EHttpServletRequest \u548CHttpServletResponse \u7B49HttpServlet \u5BF9\u8C61\uFF0C\u5B83\u4EEC\u53EF\u4EE5\u901A\u8FC7Controller \u7684\u65B9\u6CD5\u53C2\u6570\u7075\u6D3B\u7684\u83B7\u53D6\u5230\u3002</p><p>@Controller \u7528\u4E8E\u6807\u8BB0\u5728\u4E00\u4E2A\u7C7B\u4E0A\uFF0C\u4F7F\u7528\u5B83\u6807\u8BB0\u7684\u7C7B\u5C31\u662F\u4E00\u4E2ASpring MVC Controller \u5BF9\u8C61\u3002\u5206\u53D1\u5904\u7406\u5668\u5C06\u4F1A\u626B\u63CF\u4F7F\u7528\u4E86\u8BE5\u6CE8\u89E3\u7684\u7C7B\u7684\u65B9\u6CD5\uFF0C\u5E76\u68C0\u6D4B\u8BE5\u65B9\u6CD5\u662F\u5426\u4F7F\u7528\u4E86@RequestMapping \u6CE8\u89E3\u3002@Controller \u53EA\u662F\u5B9A\u4E49\u4E86\u4E00\u4E2A\u63A7\u5236\u5668\u7C7B\uFF0C\u800C\u4F7F\u7528@RequestMapping \u6CE8\u89E3\u7684\u65B9\u6CD5\u624D\u662F\u771F\u6B63\u5904\u7406\u8BF7\u6C42\u7684\u5904\u7406\u5668\u3002\u5355\u5355\u4F7F\u7528@Controller \u6807\u8BB0\u5728\u4E00\u4E2A\u7C7B\u4E0A\u8FD8\u4E0D\u80FD\u771F\u6B63\u610F\u4E49\u4E0A\u7684\u8BF4\u5B83\u5C31\u662FSpring MVC \u7684\u4E00\u4E2A\u63A7\u5236\u5668\u7C7B\uFF0C\u56E0\u4E3A\u8FD9\u4E2A\u65F6\u5019Spring \u8FD8\u4E0D\u8BA4\u8BC6\u5B83\u3002\u90A3\u4E48\u8981\u5982\u4F55\u505ASpring \u624D\u80FD\u8BA4\u8BC6\u5B83\u5462\uFF1F\u8FD9\u4E2A\u65F6\u5019\u5C31\u9700\u8981\u6211\u4EEC\u628A\u8FD9\u4E2A\u63A7\u5236\u5668\u7C7B\u4EA4\u7ED9Spring \u6765\u7BA1\u7406\u3002\u6709\u4E24\u79CD\u65B9\u5F0F\uFF1A</p><ul><li>\u5728Spring MVC \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u5B9A\u4E49MyController \u7684bean \u5BF9\u8C61\u3002</li><li>\u5728Spring MVC \u7684\u914D\u7F6E\u6587\u4EF6\u4E2D\u544A\u8BC9Spring \u8BE5\u5230\u54EA\u91CC\u53BB\u627E\u6807\u8BB0\u4E3A@Controller \u7684Controller \u63A7\u5236\u5668\u3002</li></ul><h4 id="_2-5-requestmapping\u6CE8\u89E3\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#_2-5-requestmapping\u6CE8\u89E3\u7684\u4F5C\u7528" aria-hidden="true">#</a> 2.5 @RequestMapping\u6CE8\u89E3\u7684\u4F5C\u7528?</h4><p>RequestMapping\u662F\u4E00\u4E2A\u7528\u6765\u5904\u7406\u8BF7\u6C42\u5730\u5740\u6620\u5C04\u7684\u6CE8\u89E3\uFF0C\u53EF\u7528\u4E8E\u7C7B\u6216\u65B9\u6CD5\u4E0A\u3002\u7528\u4E8E\u7C7B\u4E0A\uFF0C\u8868\u793A\u7C7B\u4E2D\u7684\u6240\u6709\u54CD\u5E94\u8BF7\u6C42\u7684\u65B9\u6CD5\u90FD\u662F\u4EE5\u8BE5\u5730\u5740\u4F5C\u4E3A\u7236\u8DEF\u5F84\u3002</p><p>RequestMapping\u6CE8\u89E3\u6709\u516D\u4E2A\u5C5E\u6027</p><ul><li><strong>value</strong>\uFF1A \u6307\u5B9A\u8BF7\u6C42\u7684\u5B9E\u9645\u5730\u5740\uFF0C\u6307\u5B9A\u7684\u5730\u5740\u53EF\u4EE5\u662FURI Template \u6A21\u5F0F\uFF08\u540E\u9762\u5C06\u4F1A\u8BF4\u660E\uFF09\uFF1B</li><li><strong>method</strong>\uFF1A \u6307\u5B9A\u8BF7\u6C42\u7684method\u7C7B\u578B\uFF0C GET\u3001POST\u3001PUT\u3001DELETE\u7B49\uFF1B</li><li><strong>consumes</strong>\uFF1A \u6307\u5B9A\u5904\u7406\u8BF7\u6C42\u7684\u63D0\u4EA4\u5185\u5BB9\u7C7B\u578B\uFF08Content-Type\uFF09\uFF0C\u4F8B\u5982application/json, text/html;</li><li><strong>produces</strong>: \u6307\u5B9A\u8FD4\u56DE\u7684\u5185\u5BB9\u7C7B\u578B\uFF0C\u4EC5\u5F53request\u8BF7\u6C42\u5934\u4E2D\u7684(Accept)\u7C7B\u578B\u4E2D\u5305\u542B\u8BE5\u6307\u5B9A\u7C7B\u578B\u624D\u8FD4\u56DE\uFF1B</li><li><strong>params</strong>\uFF1A \u6307\u5B9Arequest\u4E2D\u5FC5\u987B\u5305\u542B\u67D0\u4E9B\u53C2\u6570\u503C\u662F\uFF0C\u624D\u8BA9\u8BE5\u65B9\u6CD5\u5904\u7406\u3002</li><li><strong>headers</strong>\uFF1A \u6307\u5B9Arequest\u4E2D\u5FC5\u987B\u5305\u542B\u67D0\u4E9B\u6307\u5B9A\u7684header\u503C\uFF0C\u624D\u80FD\u8BA9\u8BE5\u65B9\u6CD5\u5904\u7406\u8BF7\u6C42\u3002</li></ul><h4 id="_2-6-responsebody\u6CE8\u89E3\u7684\u4F5C\u7528\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_2-6-responsebody\u6CE8\u89E3\u7684\u4F5C\u7528\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 2.6 @ResponseBody\u6CE8\u89E3\u7684\u4F5C\u7528\u662F\u4EC0\u4E48\uFF1F</h4><ul><li><strong>\u4F5C\u7528</strong>\uFF1A \u8BE5\u6CE8\u89E3\u7528\u4E8E\u5C06Controller\u7684\u65B9\u6CD5\u8FD4\u56DE\u7684\u5BF9\u8C61\uFF0C\u901A\u8FC7\u9002\u5F53\u7684HttpMessageConverter\u8F6C\u6362\u4E3A\u6307\u5B9A\u683C\u5F0F\u540E\uFF0C\u5199\u5165\u5230Response\u5BF9\u8C61\u7684body\u6570\u636E\u533A\u3002</li><li><strong>\u4F7F\u7528\u65F6\u673A</strong>\uFF1A \u8FD4\u56DE\u7684\u6570\u636E\u4E0D\u662Fhtml\u6807\u7B7E\u7684\u9875\u9762\uFF0C\u800C\u662F\u5176\u4ED6\u67D0\u79CD\u683C\u5F0F\u7684\u6570\u636E\u65F6\uFF08\u5982json\u3001xml\u7B49\uFF09\u4F7F\u7528\uFF1B</li></ul><h4 id="_2-7-pathvariable\u548C-requestparam\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_2-7-pathvariable\u548C-requestparam\u7684\u533A\u522B" aria-hidden="true">#</a> 2.7 @PathVariable\u548C@RequestParam\u7684\u533A\u522B?</h4><ul><li><p><strong>@PathVariable</strong>\uFF1A \u53EF\u4EE5\u7528\u6765\u83B7\u53D6\u8BF7\u6C42\u8DEF\u7EBF\u4E0A\u9762\u7684\u53D8\u91CF\uFF1B \u5982\u8BF7\u6C42\u8DEF\u5F84\uFF1Ahttp://127.0.0.1/user/1 \u53EF\u4EE5\u901A\u8FC7@PathVariable</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@RequestMapping</span><span class="token punctuation">(</span>value <span class="token operator">=</span> <span class="token string">&quot;/user/{id}&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token class-name">RequestMethod</span><span class="token punctuation">.</span><span class="token constant">GET</span><span class="token punctuation">)</span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6765\u83B7\u53D6\u8DEF\u5F84\u5728\u7684\u53D8\u91CFid</p></li><li><p><strong>@RequestParam</strong>\uFF1A \u7528\u6765\u83B7\u5F97\u9759\u6001\u7684URL\u8BF7\u6C42\u5165\u53C2 spring\u6CE8\u89E3\u65F6action\u91CC\u7528\u5230\u3002</p></li></ul><h2 id="_3-spring-mvc\u8FD0\u7528" tabindex="-1"><a class="header-anchor" href="#_3-spring-mvc\u8FD0\u7528" aria-hidden="true">#</a> 3. Spring MVC\u8FD0\u7528</h2><h4 id="_3-1-spring-mvc\u5982\u4F55\u62E6\u622Aget\u8BF7\u6C42" tabindex="-1"><a class="header-anchor" href="#_3-1-spring-mvc\u5982\u4F55\u62E6\u622Aget\u8BF7\u6C42" aria-hidden="true">#</a> 3.1 Spring MVC\u5982\u4F55\u62E6\u622AGET\u8BF7\u6C42\uFF1F</h4><p>\u53EF\u4EE5\u5728@RequestMapping\u6CE8\u89E3\u91CC\u9762\u52A0\u4E0Amethod=RequestMethod.GET\u3002</p><h4 id="_3-2-spring-mvc\u5982\u4F55\u83B7\u53D6\u8BF7\u6C42\u4F20\u53C2" tabindex="-1"><a class="header-anchor" href="#_3-2-spring-mvc\u5982\u4F55\u83B7\u53D6\u8BF7\u6C42\u4F20\u53C2" aria-hidden="true">#</a> 3.2 Spring MVC\u5982\u4F55\u83B7\u53D6\u8BF7\u6C42\u4F20\u53C2\uFF1F</h4><p>\u76F4\u63A5\u5728\u65B9\u6CD5\u7684\u5F62\u53C2\u91CC\u9762\u58F0\u660E\u8FD9\u4E2A\u53C2\u6570\u5C31\u53EF\u4EE5</p><blockquote><p>\u540D\u5B57\u548C\u4F20\u8FC7\u6765\u7684\u53C2\u6570\u4E00\u6837\u3002</p></blockquote><h4 id="_3-3-springmvc\u591A\u4E2A\u53C2\u6570\u5982\u4F55\u4F18\u96C5\u63A5\u6536" tabindex="-1"><a class="header-anchor" href="#_3-3-springmvc\u591A\u4E2A\u53C2\u6570\u5982\u4F55\u4F18\u96C5\u63A5\u6536" aria-hidden="true">#</a> 3.3 SpringMVC\u591A\u4E2A\u53C2\u6570\u5982\u4F55\u4F18\u96C5\u63A5\u6536\uFF1F</h4><p>\u76F4\u63A5\u5728\u65B9\u6CD5\u4E2D\u58F0\u660E\u8FD9\u4E2A\u5BF9\u8C61,Spring MVC\u5C31\u81EA\u52A8\u4F1A\u628A\u5C5E\u6027\u8D4B\u503C\u5230\u8FD9\u4E2A\u5BF9\u8C61\u91CC\u9762\u3002</p><h4 id="_3-4-\u5982\u4F55\u5728\u65B9\u6CD5\u91CC\u9762\u5F97\u5230request-\u6216\u8005session" tabindex="-1"><a class="header-anchor" href="#_3-4-\u5982\u4F55\u5728\u65B9\u6CD5\u91CC\u9762\u5F97\u5230request-\u6216\u8005session" aria-hidden="true">#</a> 3.4 \u5982\u4F55\u5728\u65B9\u6CD5\u91CC\u9762\u5F97\u5230Request,\u6216\u8005Session\uFF1F</h4><p>\u76F4\u63A5\u5728\u65B9\u6CD5\u7684\u5F62\u53C2\u4E2D\u58F0\u660Erequest,Spring MVC\u5C31\u81EA\u52A8\u628Arequest\u5BF9\u8C61\u4F20\u5165\u3002</p><h4 id="_3-5-spring-mvc\u600E\u4E48\u6837\u8BBE\u5B9A\u91CD\u5B9A\u5411\u548C\u8F6C\u53D1\u7684" tabindex="-1"><a class="header-anchor" href="#_3-5-spring-mvc\u600E\u4E48\u6837\u8BBE\u5B9A\u91CD\u5B9A\u5411\u548C\u8F6C\u53D1\u7684" aria-hidden="true">#</a> 3.5 Spring MVC\u600E\u4E48\u6837\u8BBE\u5B9A\u91CD\u5B9A\u5411\u548C\u8F6C\u53D1\u7684\uFF1F</h4><ul><li><strong>\u8F6C\u53D1</strong>\uFF1A \u5728\u8FD4\u56DE\u503C\u524D\u9762\u52A0&quot;<strong>forward:</strong>&quot; \u5982\uFF1A\u201Cforward:user.do?name=method4\u201D</li><li><strong>\u91CD\u5B9A\u5411</strong>\uFF1A \u5728\u8FD4\u56DE\u503C\u524D\u9762\u52A0&quot;<strong>redirect:</strong>&quot;\uFF0C \u5982\uFF1A\u201Credirect:http://www.baidu.com\u201D</li></ul><h4 id="_3-6-spring-mvc\u600E\u4E48\u548Cajax\u76F8\u4E92\u8C03\u7528\u7684" tabindex="-1"><a class="header-anchor" href="#_3-6-spring-mvc\u600E\u4E48\u548Cajax\u76F8\u4E92\u8C03\u7528\u7684" aria-hidden="true">#</a> 3.6 Spring MVC\u600E\u4E48\u548CAJAX\u76F8\u4E92\u8C03\u7528\u7684\uFF1F</h4><p>\u901A\u8FC7Jackson\u6846\u67B6\u5C31\u53EF\u4EE5\u628AJava\u91CC\u9762\u7684\u5BF9\u8C61\u76F4\u63A5\u8F6C\u5316\u6210Js\u53EF\u4EE5\u8BC6\u522B\u7684Json\u5BF9\u8C61\u3002\u5177\u4F53\u6B65\u9AA4\u5982\u4E0B \uFF1A</p><ol><li>\u52A0\u5165Jackson.jar</li><li>\u5728\u914D\u7F6E\u6587\u4EF6\u4E2D\u914D\u7F6Ejson\u7684\u6620\u5C04</li><li>\u5728\u63A5\u53D7Ajax\u65B9\u6CD5\u91CC\u9762\u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DEObject,List\u7B49,\u4F46\u65B9\u6CD5\u524D\u9762\u8981\u52A0\u4E0A@ResponseBody\u6CE8\u89E3\u3002</li></ol><h4 id="_3-7-spring-mvc\u5982\u4F55\u89E3\u51B3get\u3001post\u8BF7\u6C42\u4E2D\u6587\u4E71\u7801\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_3-7-spring-mvc\u5982\u4F55\u89E3\u51B3get\u3001post\u8BF7\u6C42\u4E2D\u6587\u4E71\u7801\u95EE\u9898" aria-hidden="true">#</a> 3.7 Spring MVC\u5982\u4F55\u89E3\u51B3GET\u3001POST\u8BF7\u6C42\u4E2D\u6587\u4E71\u7801\u95EE\u9898\uFF1F</h4><ul><li><p>GET\u4E71\u7801\uFF1A</p><ul><li><p>\u65B9\u5F0F\u4E00\uFF1A \u4FEE\u6539tomcat\u914D\u7F6E\u6587\u4EF6\u6DFB\u52A0\u7F16\u7801\u4E0E\u5DE5\u7A0B\u7F16\u7801\u4E00\u81F4\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code>&lt;ConnectorURIEncoding=&quot;utf-8&quot; connectionTimeout=&quot;20000&quot; port=&quot;8080&quot; protocol=&quot;HTTP/1.1&quot; redirectPort=&quot;8443&quot;/&gt;
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u65B9\u5F0F\u4E8C\uFF1A \u53C2\u6570\u8FDB\u884C\u91CD\u65B0\u7F16\u7801\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>String userName = new String(request.getParamter(\u201CuserName\u201D).getBytes(\u201CISO8859-1\u201D),\u201Cutf-8\u201D)
1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>ISO8859-1\u662Ftomcat\u9ED8\u8BA4\u7F16\u7801\uFF0C\u9700\u8981\u5C06tomcat\u7F16\u7801\u540E\u7684\u5185\u5BB9\u6309utf-8\u7F16\u7801\u3002</p></li></ul></li><li><p>POST\u8BF7\u6C42\u4E71\u7801\u95EE\u9898\uFF1A \u5728web.xml\u4E2D\u914D\u7F6E\u4E00\u4E2ACharacterEncodingFilter\u8FC7\u6EE4\u5668\uFF0C\u8BBE\u7F6E\u6210utf-8\uFF1B</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>CharacterEncodingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-class</span><span class="token punctuation">&gt;</span></span>org.springframework.web.filter.CharacterEncodingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-class</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>init-param</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-name</span><span class="token punctuation">&gt;</span></span>encoding<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-name</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param-value</span><span class="token punctuation">&gt;</span></span>utf-8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>param-value</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>init-param</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>filter-name</span><span class="token punctuation">&gt;</span></span>CharacterEncodingFilter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-name</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>url-pattern</span><span class="token punctuation">&gt;</span></span>/*<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>url-pattern</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>filter-mapping</span><span class="token punctuation">&gt;</span></span>
123456789101112
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="_3-8-spring-mvc\u5982\u4F55\u5904\u7406\u5F02\u5E38" tabindex="-1"><a class="header-anchor" href="#_3-8-spring-mvc\u5982\u4F55\u5904\u7406\u5F02\u5E38" aria-hidden="true">#</a> 3.8 Spring MVC\u5982\u4F55\u5904\u7406\u5F02\u5E38\uFF1F</h4><p>\u53EF\u4EE5\u5C06\u5F02\u5E38\u629B\u7ED9Spring\u6846\u67B6\uFF0C\u7531Spring\u6846\u67B6\u6765\u5904\u7406\uFF1B\u6211\u4EEC\u53EA\u9700\u8981\u914D\u7F6E\u7B80\u5355\u7684\u5F02\u5E38\u5904\u7406\u5668\uFF0C\u5728\u5F02\u5E38\u5904\u7406\u5668\u4E2D\u6DFB\u89C6\u56FE\u9875\u9762\u5373\u53EF</p><h4 id="_3-9-spring-mvc\u4E2D\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#_3-9-spring-mvc\u4E2D\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F\u4EC0\u4E48" aria-hidden="true">#</a> 3.9 Spring MVC\u4E2D\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F\u4EC0\u4E48\uFF1F</h4><p>\u8FD4\u56DE\u503C\u53EF\u4EE5\u6709\u5F88\u591A\u7C7B\u578B,\u6709String, ModelAndView\u3002ModelAndView\u7C7B\u628A\u89C6\u56FE\u548C\u6570\u636E\u90FD\u5408\u5E76\u7684\u4E00\u8D77\u7684\uFF0C\u4F46\u4E00\u822C\u7528String\u6BD4\u8F83\u597D\u3002</p><h4 id="_3-10-spring-mvc\u7528\u4EC0\u4E48\u5BF9\u8C61\u4ECE\u540E\u53F0\u5411\u524D\u53F0\u4F20\u9012\u6570\u636E\u7684" tabindex="-1"><a class="header-anchor" href="#_3-10-spring-mvc\u7528\u4EC0\u4E48\u5BF9\u8C61\u4ECE\u540E\u53F0\u5411\u524D\u53F0\u4F20\u9012\u6570\u636E\u7684" aria-hidden="true">#</a> 3.10 Spring MVC\u7528\u4EC0\u4E48\u5BF9\u8C61\u4ECE\u540E\u53F0\u5411\u524D\u53F0\u4F20\u9012\u6570\u636E\u7684\uFF1F</h4><p>\u901A\u8FC7ModelMap\u5BF9\u8C61,\u53EF\u4EE5\u5728\u8FD9\u4E2A\u5BF9\u8C61\u91CC\u9762\u8C03\u7528put\u65B9\u6CD5,\u628A\u5BF9\u8C61\u52A0\u5230\u91CC\u9762,\u524D\u53F0\u5C31\u53EF\u4EE5\u901A\u8FC7el\u8868\u8FBE\u5F0F\u62FF\u5230\u3002</p><h4 id="_3-11-\u600E\u4E48\u628Amodelmap\u91CC\u9762\u7684\u6570\u636E\u653E\u5165session\u91CC\u9762" tabindex="-1"><a class="header-anchor" href="#_3-11-\u600E\u4E48\u628Amodelmap\u91CC\u9762\u7684\u6570\u636E\u653E\u5165session\u91CC\u9762" aria-hidden="true">#</a> 3.11 \u600E\u4E48\u628AModelMap\u91CC\u9762\u7684\u6570\u636E\u653E\u5165Session\u91CC\u9762\uFF1F</h4><p>\u53EF\u4EE5\u5728\u7C7B\u4E0A\u9762\u52A0\u4E0A@SessionAttributes\u6CE8\u89E3,\u91CC\u9762\u5305\u542B\u7684\u5B57\u7B26\u4E32\u5C31\u662F\u8981\u653E\u5165session\u91CC\u9762\u7684key\u3002</p><h4 id="_3-12-spring-mvc\u62E6\u622A\u5668\u5982\u4F55\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-12-spring-mvc\u62E6\u622A\u5668\u5982\u4F55\u4F7F\u7528" aria-hidden="true">#</a> 3.12 Spring MVC\u62E6\u622A\u5668\u5982\u4F55\u4F7F\u7528\uFF1F</h4><ul><li><strong>\u5B9A\u4E49\u62E6\u622A\u5668</strong>\uFF0C\u5B9E\u73B0HandlerInterceptor\u63A5\u53E3\uFF1B\u63A5\u53E3\u4E2D\u63D0\u4F9B\u4E09\u4E2A\u65B9\u6CD5\u3002 <ul><li><strong>preHandle</strong> \uFF1A \u8FDB\u5165 Handler\u65B9\u6CD5\u4E4B\u524D\u6267\u884C\uFF0C\u7528\u4E8E\u8EAB\u4EFD\u8BA4\u8BC1\u3001\u8EAB\u4EFD\u6388\u6743\uFF0C\u6BD4\u5982\u8EAB\u4EFD\u8BA4\u8BC1\uFF0C\u5982\u679C\u8BA4\u8BC1\u901A\u8FC7\u8868\u793A\u5F53\u524D\u7528\u6237\u6CA1\u6709\u767B\u9646\uFF0C\u9700\u8981\u6B64\u65B9\u6CD5\u62E6\u622A\u4E0D\u518D\u5411\u4E0B\u6267\u884C</li><li><strong>postHandle</strong>\uFF1A \u8FDB\u5165Handler\u65B9\u6CD5\u4E4B\u540E\uFF0C\u8FD4\u56DEmodelAndView\u4E4B\u524D\u6267\u884C\uFF0C\u5E94\u7528\u573A\u666F\u4ECEmodelAndView\u51FA\u53D1\uFF1A\u5C06\u516C\u7528\u7684\u6A21\u578B\u6570\u636E(\u6BD4\u5982\u83DC\u5355\u5BFC\u822A)\u5728\u8FD9\u91CC\u4F20\u5230\u89C6\u56FE\uFF0C\u4E5F\u53EF\u4EE5\u5728\u8FD9\u91CC\u7EDF\u4E00\u6307\u5B9A\u89C6\u56FE</li><li><strong>afterCompletion</strong>\uFF1A \u6267\u884CHandler\u5B8C\u6210\u6267\u884C\u6B64\u65B9\u6CD5\uFF0C\u5E94\u7528\u573A\u666F\uFF1A\u7EDF\u4E00\u5F02\u5E38\u5904\u7406\uFF0C\u7EDF\u4E00\u65E5\u5FD7\u5904\u7406</li></ul></li><li><strong>\u62E6\u622A\u5668\u914D\u7F6E</strong><ul><li><strong>\u9488\u5BF9HandlerMapping\u914D\u7F6E</strong>(\u4E0D\u63A8\u8350)\uFF1A SpringMVC\u62E6\u622A\u5668\u9488\u5BF9HandlerMapping\u8FDB\u884C\u62E6\u622A\u8BBE\u7F6E\uFF0C\u5982\u679C\u5728\u67D0\u4E2AHandlerMapping\u4E2D\u914D\u7F6E\u62E6\u622A\uFF0C\u7ECF\u8FC7\u8BE5 HandlerMapping\u6620\u5C04\u6210\u529F\u7684handler\u6700\u7EC8\u4F7F\u7528\u8BE5 \u62E6\u622A\u5668\u3002(\u4E00\u822C\u4E0D\u63A8\u8350\u4F7F\u7528)</li><li><strong>\u7C7B\u4F3C\u5168\u5C40\u7684\u62E6\u622A\u5668</strong>\uFF1A SpringMVC\u914D\u7F6E\u7C7B\u4F3C\u5168\u5C40\u7684\u62E6\u622A\u5668\uFF0CSpringMVC\u6846\u67B6\u5C06\u914D\u7F6E\u7684\u7C7B\u4F3C\u5168\u5C40\u7684\u62E6\u622A\u5668\u6CE8\u5165\u5230\u6BCF\u4E2AHandlerMapping\u4E2D</li></ul></li></ul><h2 id="_4-\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#_4-\u5176\u4ED6" aria-hidden="true">#</a> 4. \u5176\u4ED6</h2><h4 id="_4-1-springmvc-\u4E2D\u7CFB\u7EDF\u5982\u4F55\u5206\u5C42" tabindex="-1"><a class="header-anchor" href="#_4-1-springmvc-\u4E2D\u7CFB\u7EDF\u5982\u4F55\u5206\u5C42" aria-hidden="true">#</a> 4.1 SpringMVC \u4E2D\u7CFB\u7EDF\u5982\u4F55\u5206\u5C42 \uFF1F</h4><ul><li>\u7CFB\u7EDF\u5206\u4E3A\u8868\u73B0\u5C42\uFF08UI\uFF09\uFF1A \u6570\u636E\u7684\u5C55\u73B0\uFF0C\u64CD\u4F5C\u9875\u9762\uFF0C\u8BF7\u6C42\u8F6C\u53D1\u3002</li><li>\u4E1A\u52A1\u5C42\uFF08\u670D\u52A1\u5C42\uFF09\uFF1A \u5C01\u88C5\u4E1A\u52A1\u5904\u7406\u903B\u8F91</li><li>\u6301\u4E45\u5C42\uFF08\u6570\u636E\u8BBF\u95EE\u5C42\uFF09\uFF1A \u5C01\u88C5\u6570\u636E\u8BBF\u95EE\u903B\u8F91</li></ul><p>\u5404\u5C42\u4E4B\u95F4\u7684\u5173\u7CFB\uFF1A \u8868\u793A\u5C42\u901A\u8FC7\u63A5\u53E3\u8C03\u7528\u4E1A\u52A1\u5C42\uFF0C\u4E1A\u52A1\u5C42\u901A\u8FC7\u63A5\u53E3\u8C03\u7528\u6301\u4E45\u5C42\uFF0C\u8FD9\u6837\uFF0C\u5F53\u4E0B\u4E00\u5C42\u53D1\u751F\u53D8\u5316\u6539\u53D8\uFF0C\u4E0D\u5F71\u54CD\u4E0A\u4E00\u5C42\u7684\u6570\u636E\u3002 MVC\u662F\u4E00\u79CD\u8868\u73B0\u5C42\u7684\u67B6\u6784 <img src="https://gitee.com/yueMagic/img-cloud/raw/master/2ad4f0401f9017c698c93b24b4b27928.png" alt="img"></p>`,80),r=[i];function l(p,o){return n(),e("div",null,r)}const u=a(t,[["render",l],["__file","SpringMVC.html.vue"]]);export{u as default};