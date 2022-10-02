import {hopeTheme} from "vuepress-theme-hope";
import {enNavbar, zhNavbar} from "./navbar/index.js";
import {enSidebar, zhSidebar} from "./sidebar/index.js";

export default hopeTheme({
    hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

    author: {
        name: "Mr.yue",
        url: "https://mrhope.site",
    },
    themeColor: {
        blue: "#2196f3",
        red: "#f26d6d",
        green: "#3eaf7c",
        orange: "#fb9b5f",
    },
    navbarLayout: {
        left: ["Brand"],
        center: ["Links"],
        right: ["Language", "Repo", "Outlook", "Search"],
    },

    iconAssets: "iconfont",

    logo: "/logo.svg",

    // repo: "vuepress-theme-hope/vuepress-theme-hope",

    docsDir: "demo/theme-docs/src",

    pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

    locales: {
        "/": {
            // navbar
            navbar: zhNavbar,

            // sidebar
            sidebar: zhSidebar,

            footer: "Default footer",

            displayFooter: true,

            metaLocales: {
                editLink: "Edit this page on GitHub",
            },
        },
    },

    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
            "/zh/demo/encrypt.html": ["1234"],
        },
    },

    plugins: {
        photoSwipe: {},
    },
});
