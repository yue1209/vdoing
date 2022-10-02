import {defineUserConfig} from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
    //github
    base: "/vdoing/",
    dest: "./docs",
    //gitee
    // base: "/",
    // dest: "./dist",


    locales: {
        "/": {
            lang: "zh-CN",
            title: "Magic.*",
            description: "vuepress-theme-hope 的文档演示",
        },
    },

    theme,

    shouldPrefetch: false,
});
