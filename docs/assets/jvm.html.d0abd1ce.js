const e=JSON.parse('{"key":"v-5046cafe","path":"/interview/JAVA/jvm.html","title":"JVM\u57FA\u7840","lang":"zh-CN","frontmatter":{"title":"JVM\u57FA\u7840","date":"2022-10-02T18:50:29.000Z","categories":["interview","Java"],"tags":[null],"summary":"https://mp.weixin.qq.com/s/LhnaQk9eVYu4Q27SXrcDkA https://www.cnblogs.com/crazymakercircle/p/14365820.html 1.JVM\u7684\u5185\u5B58\u5E03\u5C40\uFF1F Java\u865A\u62DF\u673A\u4E3B\u8981\u5305\u542B\u51E0\u4E2A\u533A\u57DF\uFF1A\u5806\u3001\u6808\u3001\u5143\u6570\u636E\u3001\u672C\u5730\u65B9\u6CD5\u533A\u3001\u7A0B\u5E8F\u8BA1\u6570\u5668 \u5806\uFF1A\u5806Java\u865A\u62DF\u673A\u4E2D\u6700\u5927\u7684\u4E00\u5757\u5185\u5B58\uFF0C\u662F\u7EBF\u7A0B\u5171\u4EAB\u7684","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/vdoing/interview/JAVA/jvm.html"}],["meta",{"property":"og:site_name","content":"Magic.*"}],["meta",{"property":"og:title","content":"JVM\u57FA\u7840"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-10-02T11:11:09.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:published_time","content":"2022-10-02T18:50:29.000Z"}],["meta",{"property":"article:modified_time","content":"2022-10-02T11:11:09.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1.JVM\u7684\u5185\u5B58\u5E03\u5C40\uFF1F","slug":"_1-jvm\u7684\u5185\u5B58\u5E03\u5C40","link":"#_1-jvm\u7684\u5185\u5B58\u5E03\u5C40","children":[]},{"level":2,"title":"2.JVM\u7C7B\u52A0\u8F7D","slug":"_2-jvm\u7C7B\u52A0\u8F7D","link":"#_2-jvm\u7C7B\u52A0\u8F7D","children":[{"level":3,"title":"2.1\u7C7B\u52A0\u8F7D\u673A\u5236","slug":"_2-1\u7C7B\u52A0\u8F7D\u673A\u5236","link":"#_2-1\u7C7B\u52A0\u8F7D\u673A\u5236","children":[]},{"level":3,"title":"2.2\u7C7B\u52A0\u8F7D\u5668","slug":"_2-2\u7C7B\u52A0\u8F7D\u5668","link":"#_2-2\u7C7B\u52A0\u8F7D\u5668","children":[]},{"level":3,"title":"2.3 \u7C7B\u52A0\u8F7D\u6A21\u578B","slug":"_2-3-\u7C7B\u52A0\u8F7D\u6A21\u578B","link":"#_2-3-\u7C7B\u52A0\u8F7D\u6A21\u578B","children":[]}]},{"level":2,"title":"3.\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B","slug":"_3-\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B","link":"#_3-\u53CC\u4EB2\u59D4\u6D3E\u6A21\u578B","children":[{"level":3,"title":"3.1\u4ECB\u7ECD","slug":"_3-1\u4ECB\u7ECD","link":"#_3-1\u4ECB\u7ECD","children":[]},{"level":3,"title":"3.2 \u597D\u5904","slug":"_3-2-\u597D\u5904","link":"#_3-2-\u597D\u5904","children":[]}]},{"level":2,"title":"4. STW\u5168\u5C40\u505C\u987F","slug":"_4-stw\u5168\u5C40\u505C\u987F","link":"#_4-stw\u5168\u5C40\u505C\u987F","children":[]},{"level":2,"title":"5.\u5783\u573E\u56DE\u6536\u7B97\u6CD5","slug":"_5-\u5783\u573E\u56DE\u6536\u7B97\u6CD5","link":"#_5-\u5783\u573E\u56DE\u6536\u7B97\u6CD5","children":[{"level":3,"title":"5.1\u6807\u8BB0-\u6E05\u9664","slug":"_5-1\u6807\u8BB0-\u6E05\u9664","link":"#_5-1\u6807\u8BB0-\u6E05\u9664","children":[]},{"level":3,"title":"5.2\u590D\u5236\u7B97\u6CD5","slug":"_5-2\u590D\u5236\u7B97\u6CD5","link":"#_5-2\u590D\u5236\u7B97\u6CD5","children":[]},{"level":3,"title":"5.3\u6807\u8BB0-\u6574\u7406","slug":"_5-3\u6807\u8BB0-\u6574\u7406","link":"#_5-3\u6807\u8BB0-\u6574\u7406","children":[]},{"level":3,"title":"5.4 \u5206\u4EE3\u6536\u96C6\u7B97\u6CD5","slug":"_5-4-\u5206\u4EE3\u6536\u96C6\u7B97\u6CD5","link":"#_5-4-\u5206\u4EE3\u6536\u96C6\u7B97\u6CD5","children":[]}]},{"level":2,"title":"6.\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u53EF\u56DE\u6536(GC ROOT)","slug":"_6-\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u53EF\u56DE\u6536-gc-root","link":"#_6-\u5224\u65AD\u5BF9\u8C61\u662F\u5426\u53EF\u56DE\u6536-gc-root","children":[{"level":3,"title":"6.1\u5F15\u7528\u8BA1\u6570\u5668","slug":"_6-1\u5F15\u7528\u8BA1\u6570\u5668","link":"#_6-1\u5F15\u7528\u8BA1\u6570\u5668","children":[]},{"level":3,"title":"6.2\u53EF\u8FBE\u6027\u5206\u6790(JVM \u9ED8\u8BA4)","slug":"_6-2\u53EF\u8FBE\u6027\u5206\u6790-jvm-\u9ED8\u8BA4","link":"#_6-2\u53EF\u8FBE\u6027\u5206\u6790-jvm-\u9ED8\u8BA4","children":[]}]},{"level":2,"title":"7.\u5783\u573E\u56DE\u6536\u5668","slug":"_7-\u5783\u573E\u56DE\u6536\u5668","link":"#_7-\u5783\u573E\u56DE\u6536\u5668","children":[{"level":3,"title":"7.1\u56DE\u6536\u5668\u7B80\u8FF0","slug":"_7-1\u56DE\u6536\u5668\u7B80\u8FF0","link":"#_7-1\u56DE\u6536\u5668\u7B80\u8FF0","children":[]},{"level":3,"title":"7.2CMS\u56DE\u6536\u5668","slug":"_7-2cms\u56DE\u6536\u5668","link":"#_7-2cms\u56DE\u6536\u5668","children":[]},{"level":3,"title":"7.3 G1\u56DE\u6536\u5668","slug":"_7-3-g1\u56DE\u6536\u5668","link":"#_7-3-g1\u56DE\u6536\u5668","children":[]},{"level":3,"title":"7.3\u533A\u522B","slug":"_7-3\u533A\u522B","link":"#_7-3\u533A\u522B","children":[]}]},{"level":2,"title":"8.GC\u7684\u6D41\u7A0B\uFF0C\u5BF9\u8C61\u4EC0\u4E48\u65F6\u5019\u4F1A\u8FDB\u5165\u8001\u5E74\u4EE3\uFF1F","slug":"_8-gc\u7684\u6D41\u7A0B-\u5BF9\u8C61\u4EC0\u4E48\u65F6\u5019\u4F1A\u8FDB\u5165\u8001\u5E74\u4EE3","link":"#_8-gc\u7684\u6D41\u7A0B-\u5BF9\u8C61\u4EC0\u4E48\u65F6\u5019\u4F1A\u8FDB\u5165\u8001\u5E74\u4EE3","children":[]},{"level":2,"title":"\u9891\u7E41FullGC\u600E\u4E48\u6392\u67E5\uFF1F","slug":"\u9891\u7E41fullgc\u600E\u4E48\u6392\u67E5","link":"#\u9891\u7E41fullgc\u600E\u4E48\u6392\u67E5","children":[]},{"level":2,"title":"JVM\u8C03\u4F18\u6709\u4EC0\u4E48\u7ECF\u9A8C\u5417\uFF1F","slug":"jvm\u8C03\u4F18\u6709\u4EC0\u4E48\u7ECF\u9A8C\u5417","link":"#jvm\u8C03\u4F18\u6709\u4EC0\u4E48\u7ECF\u9A8C\u5417","children":[{"level":3,"title":"\u7B80\u5355\u7684\u53C2\u6570\u542B\u4E49","slug":"\u7B80\u5355\u7684\u53C2\u6570\u542B\u4E49","link":"#\u7B80\u5355\u7684\u53C2\u6570\u542B\u4E49","children":[]},{"level":3,"title":"\u8C03\u4F18","slug":"\u8C03\u4F18","link":"#\u8C03\u4F18","children":[]}]}],"git":{"createdTime":1664706962000,"updatedTime":1664709069000,"contributors":[{"name":"yue","email":"498420540@qq.com","commits":2}]},"readingTime":{"minutes":19.19,"words":5756},"filePathRelative":"interview/JAVA/jvm.md","localizedDate":"2022\u5E7410\u67083\u65E5"}');export{e as data};