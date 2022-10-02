import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/interview/": [
        {
            text: "Java",
            prefix: "java/",
            collapsable: true,
            children: [
                "java",
                "juc",
                "jvm",
            ],
        },
        {
            text: "数据库",
            prefix: "DB/",
            collapsable: true,
            children: [
                {text: "MySQL", link: "MySQL.md"},
                {text: "Redis", link: "Redis.md"},
                {text: "MongoDB", link: "MongoDB.md"},
                {text: "Elasticsearch", link: "Elasticsearch.md"}
            ],
        },
        {
            text: "框架",
            prefix: "FRAMEWORK/",
            collapsable: true,
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
            prefix: "MIDDLEWARE/",
            collapsable: true,
            children: [
                {text: "消息队列基础", link: "MQ_BASE.md"},
                {text: "RabbitMQ", link: "RabbitMQ.md"},
                {text: "RocketMQ", link: "RocketMQ.md"},
                {text: "Kafaka", link: "Kafaka.md"}
            ],
        },
        {
            text: "优化",
            prefix: "OPTIMIZE/",
            collapsable: true,
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
});
