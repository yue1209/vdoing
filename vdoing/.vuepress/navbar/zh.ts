import {navbar} from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "面向简历编程",
        icon: "discover",
        prefix: "/interview/",
        children: [
            {
                text: "JAVA",
                icon: "creative",
                prefix: "JAVA/",
                children: [
                    {text: "JAVA基础", link: "java.md"},
                    {text: "JUC编程", link: "juc.md"},
                    {text: "JVM基础", link: "jvm.md"}],
            },
            {
                text: "数据库",
                icon: "creative",
                prefix: "DB/",
                children: [
                    {text: "MySQL", link: "MySQL.md"},
                    {text: "Redis", link: "Redis.md"},
                    {text: "MongoDB", link: "MongoDB.md"},
                    {text: "Elasticsearch", link: "Elasticsearch.md"}
                ],
            },
            {
                text: "框架",
                icon: "creative",
                prefix: "FRAMEWORK/",
                children: [
                    {text: "Spring", link: "Spring.md"},
                    {text: "SpringMVC", link: "SpringMVC.md"},
                    {text: "SpringBoot", link: "SpringBoot.md"},
                    {text: "SpringCloud", link: "SpringCloud.md"},
                    {text: "MyBatis", link: "MyBatis.md"},
                    {text: "Dubbo", link: "Dubbo.md"},
                ],
            },
            {
                text: "中间件",
                icon: "creative",
                prefix: "MIDDLEWARE/",
                children: [
                    {text: "消息队列基础", link: "MQ_BASE.md"},
                    {text: "RabbitMQ", link: "RabbitMQ.md"},
                    {text: "RocketMQ", link: "RocketMQ.md"},
                    {text: "Kafaka", link: "Kafaka.md"}
                ],
            },
            {
                text: "优化",
                icon: "creative",
                prefix: "OPTIMIZE/",
                children: [
                    {text: "SQL优化", link: "SQL_OPT.md"},
                    {text: "代码优化", link: "CODE_OPT.md"},
                    {text: "JVM优化", link: "JVM_OPT.md"},
                    {text: "TOMCAT优化", link: "TOMCAT_OPT.md"},
                    {text: "数据库优化", link: "DATABASE_OPT.md"},
                    {text: "接口性能优化", link: "INTERFACE_OPT.md"},
                ],
            },
        ],
    },
    {
        text: "数据库",
        icon: "creative",
        prefix: "/db/",
        children: [
            {
                text: "Bar",
                icon: "creative",
                prefix: "bar/",
                children: ["baz", {text: "...",  link: ""}],
            },
            {
                text: "Foo",
                icon: "config",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "more", link: ""}],
            },
        ],
    },
    {
        text: "分布式",
        icon: "creative",
        prefix: "/distributed/",
        children: [
            {
                text: "Bar",
                icon: "creative",
                prefix: "bar/",
                children: ["baz", {text: "...",  link: ""}],
            },
            {
                text: "Foo",
                icon: "config",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "more", link: ""}],
            },
        ],
    },
    {
        text: "源码解析",
        icon: "creative",
        prefix: "/sourcecode/",
        children: [
            {
                text: "Bar",
                icon: "creative",
                prefix: "bar/",
                children: ["baz", {text: "...",  link: ""}],
            },
            {
                text: "Foo",
                icon: "config",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "more", link: ""}],
            },
        ],
    },
    {
        text: "小技巧",
        icon: "creative",
        prefix: "/guide/",
        children: [
            {
                text: "Bar",
                icon: "creative",
                prefix: "bar/",
                children: ["baz", {text: "...", icon: "more", link: ""}],
            },
            {
                text: "Foo",
                icon: "config",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "more", link: ""}],
            },
        ],
    },
    {
        text: "收藏夹",
        icon: "creative",
        prefix: "/guide/",
        children: [
            {
                text: "Bar",
                icon: "creative",
                prefix: "bar/",
                children: ["baz", {text: "...", icon: "more", link: ""}],
            },
            {
                text: "Foo",
                icon: "config",
                prefix: "foo/",
                children: ["ray", {text: "...", icon: "more", link: ""}],
            },
        ],
    },
    //链接示例
    // {
    //   text: "V2 文档",
    //   icon: "note",
    //   link: "https://vuepress-theme-hope.github.io/v2/zh/",
    // },
]);
