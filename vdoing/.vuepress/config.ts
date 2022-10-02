import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  // dest: "./dist",
  dest: "./docs",

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
