const e=JSON.parse('{"key":"v-0a501987","path":"/interview/JAVA/juc.html","title":"JUC\u7F16\u7A0B","lang":"zh-CN","frontmatter":{"title":"JUC\u7F16\u7A0B","date":"2022-10-02T18:50:29.000Z","categories":["interview","JUC\u7F16\u7A0B"],"tags":[null],"summary":"1. \u5E76\u53D1\u57FA\u7840 1.1 \u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u5E76\u53D1\u7F16\u7A0B\uFF1F\\r\u5145\u5206\u5229\u7528\u591A\u6838CPU\u7684\u8BA1\u7B97\u80FD\u529B; \u901A\u8FC7\u5E76\u53D1\u7F16\u7A0B\u7684\u5F62\u5F0F\u53EF\u4EE5\u5C06\u591A\u6838CPU\u7684\u8BA1\u7B97\u80FD\u529B\u53D1\u6325\u5230\u6781\u81F4\uFF0C\u6027\u80FD\u5F97\u5230\u63D0\u5347\\r\u65B9\u4FBF\u8FDB\u884C\u4E1A\u52A1\u62C6\u5206\uFF0C\u63D0\u5347\u7CFB\u7EDF\u5E76\u53D1\u80FD\u529B\u548C\u6027\u80FD; \u5728\u7279\u6B8A\u7684\u4E1A\u52A1\u573A\u666F\u4E0B\uFF0C\u5148\u5929\u7684\u5C31\u9002\u5408\u4E8E\u5E76\u53D1\u7F16\u7A0B\u3002\u73B0\u5728\u7684\u7CFB\u7EDF\u52A8\u4E0D\u52A8\u5C31\u8981\u6C42\u767E\u4E07\u7EA7\u751A\u81F3\u5343\u4E07\u7EA7\u7684\u5E76\u53D1\u91CF\uFF0C\u800C\u591A\u7EBF\u7A0B\u5E76\u53D1\u7F16\u7A0B\u6B63\u662F\u5F00\u53D1\u9AD8\u5E76\u53D1\u7CFB\u7EDF\u7684\u57FA\u7840\uFF0C\u5229\u7528\u597D\u591A\u7EBF\u7A0B\u673A\u5236\u53EF\u4EE5\u5927\u5927\u63D0\u9AD8\u7CFB\u7EDF","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vdoing/interview/JAVA/juc.html"}],["meta",{"property":"og:site_name","content":"Magic.*"}],["meta",{"property":"og:title","content":"JUC\u7F16\u7A0B"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-02T11:11:09.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-10-02T18:50:29.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-02T11:11:09.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"1. \u5E76\u53D1\u57FA\u7840","slug":"_1-\u5E76\u53D1\u57FA\u7840","link":"#_1-\u5E76\u53D1\u57FA\u7840","children":[]},{"level":3,"title":"2. Java \u7EBF\u7A0B","slug":"_2-java-\u7EBF\u7A0B","link":"#_2-java-\u7EBF\u7A0B","children":[]},{"level":3,"title":"3. Java \u7EBF\u7A0B\u8C03\u5EA6","slug":"_3-java-\u7EBF\u7A0B\u8C03\u5EA6","link":"#_3-java-\u7EBF\u7A0B\u8C03\u5EA6","children":[]},{"level":3,"title":"4. Java \u7EBF\u7A0B\u6C60","slug":"_4-java-\u7EBF\u7A0B\u6C60","link":"#_4-java-\u7EBF\u7A0B\u6C60","children":[]},{"level":3,"title":"5. \u7EBF\u7A0B\u5B89\u5168","slug":"_5-\u7EBF\u7A0B\u5B89\u5168","link":"#_5-\u7EBF\u7A0B\u5B89\u5168","children":[]},{"level":3,"title":"6. ThreadLocal","slug":"_6-threadlocal","link":"#_6-threadlocal","children":[]},{"level":3,"title":"7. synchronized","slug":"_7-synchronized","link":"#_7-synchronized","children":[]},{"level":3,"title":"8. volatile","slug":"_8-volatile","link":"#_8-volatile","children":[]},{"level":3,"title":"9. \u5E76\u53D1\u9501","slug":"_9-\u5E76\u53D1\u9501","link":"#_9-\u5E76\u53D1\u9501","children":[]},{"level":3,"title":"10. AQS","slug":"_10-aqs","link":"#_10-aqs","children":[]},{"level":3,"title":"11. \u5E76\u53D1\u5BB9\u5668","slug":"_11-\u5E76\u53D1\u5BB9\u5668","link":"#_11-\u5E76\u53D1\u5BB9\u5668","children":[]},{"level":3,"title":"12. \u5DE5\u5177\u3001\u5176\u4ED6","slug":"_12-\u5DE5\u5177\u3001\u5176\u4ED6","link":"#_12-\u5DE5\u5177\u3001\u5176\u4ED6","children":[]}],"git":{"createdTime":1664706962000,"updatedTime":1664709069000,"contributors":[{"name":"yue","email":"498420540@qq.com","commits":2}]},"readingTime":{"minutes":85.69,"words":25706},"filePathRelative":"interview/JAVA/juc.md","localizedDate":"2022\u5E7410\u67083\u65E5"}');export{e as data};