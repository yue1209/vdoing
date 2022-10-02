import {sidebar} from "vuepress-theme-hope";

export const zhSidebar = sidebar({
    "/interview/": [
        {
            text: "Java学习路线",
            prefix: "java/",
            collapsable: true,
            children: [
                "yitiaolong",
                "thread",
                "jvm",
            ],
        },
        "c",
        "ccc",
        "python",
        "go",
        "os",
        "qianduan",
        "algorithm",
        "lanqiaobei",
        "bigdata",
        "android",
    ],
});
