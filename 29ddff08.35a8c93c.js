(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var a=n(2),l=n(6),i=(n(0),n(162)),r={id:"reflect",title:"\u53cd\u5c04\u673a\u5236",author:"Vero",hide_title:!0},c={id:"notes/java/oop/core/reflect",title:"\u53cd\u5c04\u673a\u5236",description:"\u53cd\u5c04\u673a\u5236",source:"@site/docs/notes/java/oop/core/reflect.mdx",permalink:"/notes/java/oop/core/reflect",sidebar:"notes",previous:{title:"\u7f51\u7edc\u7f16\u7a0b",permalink:"/notes/java/oop/core/network"},next:{title:"\u8bbe\u8ba1\u539f\u5219\u548c\u8bbe\u8ba1\u6a21\u5f0f",permalink:"/notes/java/project/design"}},b=[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",children:[]},{value:"Class\u7c7b",id:"class\u7c7b",children:[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5-1",children:[]},{value:"\u83b7\u53d6Class\u5bf9\u8c61\u7684\u65b9\u5f0f",id:"\u83b7\u53d6class\u5bf9\u8c61\u7684\u65b9\u5f0f",children:[]},{value:"\u5e38\u7528\u65b9\u6cd5\uff08\u638c\u63e1\uff09",id:"\u5e38\u7528\u65b9\u6cd5\uff08\u638c\u63e1\uff09",children:[]}]},{value:"Constructor\u7c7b",id:"constructor\u7c7b",children:[{value:"Class\u7c7b\u5e38\u7528\u65b9\u6cd5",id:"class\u7c7b\u5e38\u7528\u65b9\u6cd5",children:[]},{value:"Constructor\u7c7b\u5e38\u7528\u65b9\u6cd5",id:"constructor\u7c7b\u5e38\u7528\u65b9\u6cd5",children:[]}]},{value:"Field\u7c7b",id:"field\u7c7b",children:[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5-2",children:[]},{value:"Class\u5e38\u7528\u65b9\u6cd5",id:"class\u5e38\u7528\u65b9\u6cd5",children:[]},{value:"Field\u7c7b\u5e38\u7528\u65b9\u6cd5",id:"field\u7c7b\u5e38\u7528\u65b9\u6cd5",children:[]}]},{value:"Method\u7c7b",id:"method\u7c7b",children:[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5-3",children:[]},{value:"Class\u5e38\u7528\u65b9\u6cd5",id:"class\u5e38\u7528\u65b9\u6cd5-1",children:[]},{value:"Method\u5e38\u7528\u65b9\u6cd5",id:"method\u5e38\u7528\u65b9\u6cd5",children:[]}]},{value:"\u83b7\u53d6\u5176\u5b83\u7ed3\u6784\u4fe1\u606f",id:"\u83b7\u53d6\u5176\u5b83\u7ed3\u6784\u4fe1\u606f",children:[]}],o={rightToc:b};function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"\u53cd\u5c04\u673a\u5236"},"\u53cd\u5c04\u673a\u5236"),Object(i.b)("h2",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u901a\u5e38\u60c5\u51b5\u4e0b\u7f16\u5199\u4ee3\u7801\u90fd\u662f\u56fa\u5b9a\u7684\uff0c\u65e0\u8bba\u8fd0\u884c\u591a\u5c11\u6b21\u6267\u884c\u7684\u7ed3\u679c\u4e5f\u662f\u56fa\u5b9a\u7684\uff0c\u5728\u67d0\u4e9b\u7279\u6b8a\u573a\u5408\u4e2d\u7f16\u5199\n\u4ee3\u7801\u65f6\u4e0d\u786e\u5b9a\u8981\u521b\u5efa\u4ec0\u4e48\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u4e5f\u4e0d\u786e\u5b9a\u8981\u8c03\u7528\u4ec0\u4e48\u6837\u7684\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u90fd\u5e0c\u671b\u901a\u8fc7\u8fd0\u884c\u65f6\u4f20\u9012\u7684\u53c2\u6570\u6765\u51b3\u5b9a\uff0c\n\u8be5\u673a\u5236\u53eb\u505a\u52a8\u6001\u7f16\u7a0b\u6280\u672f\uff0c\u4e5f\u5c31\u662f\u53cd\u5c04\u673a\u5236"),Object(i.b)("li",{parentName:"ul"},"\u53cd\u5c04\u673a\u5236\u5c31\u662f\u7528\u4e8e\u52a8\u6001\u521b\u5efa\u5bf9\u8c61\u5e76\u4e14\u52a8\u6001\u8c03\u7528\u65b9\u6cd5\u7684\u673a\u5236")),Object(i.b)("h2",{id:"class\u7c7b"},"Class\u7c7b"),Object(i.b)("h3",{id:"\u57fa\u672c\u6982\u5ff5-1"},"\u57fa\u672c\u6982\u5ff5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"java.lang.Class"),"\u7c7b\u7684\u5b9e\u4f8b\u53ef\u4ee5\u7528\u4e8e\u63cf\u8ff0java\u5e94\u7528\u7a0b\u5e8f\u4e2d\u7684\u7c7b\u548c\u63a5\u53e3\uff0c\u4e5f\u5c31\u662f\u4e00\u79cd\u6570\u636e\u7c7b\u578b"),Object(i.b)("li",{parentName:"ul"},"\u8be5\u7c7b\u6ca1\u6709\u516c\u5171\u6784\u9020\u65b9\u6cd5\uff0c\u8be5\u7c7b\u7684\u5b9e\u4f8b\u7531java\u865a\u62df\u673a\u548c\u7c7b\u52a0\u8f7d\u5668\u5b57\u6bb5\u6784\u9020\u5b8c\u6210\uff0c\u672c\u8d28\u662f\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\u7684\u8fd0\u884c\u65f6\u7c7b")),Object(i.b)("h3",{id:"\u83b7\u53d6class\u5bf9\u8c61\u7684\u65b9\u5f0f"},"\u83b7\u53d6Class\u5bf9\u8c61\u7684\u65b9\u5f0f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528\u6570\u636e\u7c7b\u578b",Object(i.b)("inlineCode",{parentName:"li"},".class"),"\u7684\u65b9\u5f0f\u53ef\u4ee5\u83b7\u53d6\u5bf9\u5e94\u7c7b\u578b\u7684Class\u5bf9\u8c61\uff08\u638c\u63e1\uff09"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"li"},"\u5f15\u7528/\u5bf9\u8c61.getClass()"),"\u7684\u65b9\u5f0f\u53ef\u4ee5\u83b7\u53d6\u5bf9\u5e94\u7c7b\u578b\u7684Class\u5bf9\u8c61"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"li"},"\u5305\u88c5\u7c7b.TYPE"),"\u7684\u65b9\u5f0f\u53ef\u4ee5\u83b7\u53d6\u5bf9\u5e94\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684Class\u5bf9\u8c61"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528",Object(i.b)("inlineCode",{parentName:"li"},"Class.forName()"),"\u7684\u65b9\u5f0f\u53ef\u4ee5\u6765\u83b7\u53d6\u53c2\u6570\u6307\u5b9a\u7c7b\u578b\u7684Class\u5bf9\u8c61\uff08\u638c\u63e1\uff09"),Object(i.b)("li",{parentName:"ul"},"\u4f7f\u7528\u7c7b\u52a0\u8f7d\u5668",Object(i.b)("inlineCode",{parentName:"li"},"ClassLoader"),"\u7684\u65b9\u5f0f\u53ef\u4ee5\u6765\u83b7\u53d6\u6307\u5b9a\u7c7b\u578b\u7684Class\u5bf9\u8c61")),Object(i.b)("h3",{id:"\u5e38\u7528\u65b9\u6cd5\uff08\u638c\u63e1\uff09"},"\u5e38\u7528\u65b9\u6cd5\uff08\u638c\u63e1\uff09"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"static Class<?> forName(String className)")," \u7528\u4e8e\u83b7\u53d6\u53c2\u6570\u6307\u5b9a\u7c7b\u578b\u5bf9\u5e94\u7684Class\u5bf9\u8c61\u5e76\u8fd4\u56de"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"T newInstance()")," \u7528\u4e8e\u521b\u5efa\u8be5Class\u5bf9\u8c61\u6240\u8868\u793a\u7684\u65b0\u5b9e\u4f8b")),Object(i.b)("h2",{id:"constructor\u7c7b"},"Constructor\u7c7b"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"java.lang.reflect.Constructor"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u83b7\u53d6\u5230\u7684\u6784\u9020\u65b9\u6cd5\u4fe1\u606f")),Object(i.b)("h3",{id:"class\u7c7b\u5e38\u7528\u65b9\u6cd5"},"Class\u7c7b\u5e38\u7528\u65b9\u6cd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Constructor<T> getConstructor(Class<?> ...parameterTypes)")," \u83b7\u53d6\u6b64Class\u5bf9\u8c61\u6240\u8868\u793a\u7c7b\u578b\u4e2d\u53c2\u6570\u6307\u5b9a\u7684\u516c\u5171\u6784\u9020\u65b9\u6cd5"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Constructor<?>[] getConstructors()")," \u7528\u4e8e\u83b7\u53d6\u6b64Class\u5bf9\u8c61\u6240\u8868\u793a\u7c7b\u578b\u4e2d\u6240\u6709\u516c\u5171\u6784\u9020\u65b9\u6cd5")),Object(i.b)("h3",{id:"constructor\u7c7b\u5e38\u7528\u65b9\u6cd5"},"Constructor\u7c7b\u5e38\u7528\u65b9\u6cd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"T newInstance(Object initargs)")," \u4f7f\u7528\u6b64Constructor\u5bf9\u8c61\u63cf\u8ff0\u7684\u6784\u9020\u65b9\u6cd5\u6765\u6784\u9020Class\u5bf9\u8c61\u4ee3\u8868\u7c7b\u578b\u7684\u65b0\u5b9e\u4f8b"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"int getModifiers()")," \u83b7\u53d6\u65b9\u6cd5\u7684\u8bbf\u95ee\u4fee\u9970\u7b26"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"String getName()")," \u83b7\u53d6\u65b9\u6cd5\u540d"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Class<?>[] getParameterTypes()")," \u83b7\u53d6\u65b9\u6cd5\u6240\u6709\u53c2\u6570\u7684\u7c7b\u578b")),Object(i.b)("h2",{id:"field\u7c7b"},"Field\u7c7b"),Object(i.b)("h3",{id:"\u57fa\u672c\u6982\u5ff5-2"},"\u57fa\u672c\u6982\u5ff5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"java.lang.reflect.Field"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u63cf\u8ff0\u83b7\u53d6\u5230\u7684\u5355\u4e2a\u6210\u5458\u53d8\u91cf\u4fe1\u606f")),Object(i.b)("h3",{id:"class\u5e38\u7528\u65b9\u6cd5"},"Class\u5e38\u7528\u65b9\u6cd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Field getDeclaredField(String name)")," \u7528\u4e8e\u83b7\u53d6\u6b64Class\u5bf9\u8c61\u6240\u8868\u793a\u7c7b\u4e2d\u53c2\u6570\u6307\u5b9a\u7684\u5355\u4e2a\u6210\u5458\u53d8\u91cf\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Field[] getDecalredFields()")," \u7528\u4e8e\u83b7\u53d6Class\u5bf9\u8c61\u6240\u8868\u793a\u7c7b\u4e2d\u6240\u6709\u6210\u5458\u53d8\u91cf\u4fe1\u606f")),Object(i.b)("h3",{id:"field\u7c7b\u5e38\u7528\u65b9\u6cd5"},"Field\u7c7b\u5e38\u7528\u65b9\u6cd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Object get(Object obj)")," \u83b7\u53d6\u53c2\u6570\u5bf9\u8c61obj\u4e2d\u6b64Field\u5bf9\u8c61\u6240\u8868\u793a\u7684\u6210\u5458\u53d8\u91cf\u7684\u6570\u503c"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"void set(Object obj, Object value)")," \u5c06\u5e26\u53c2\u6570\u5bf9\u8c61obj\u4e2d\u6b64Field\u5bf9\u8c61\u8868\u793a\u6210\u5458\u53d8\u91cf\u7684\u6570\u503c\u4fee\u6539\u4e3a\u53c2\u6570value\u7684\u6570\u503c"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"void setAccessible(boolean flag)")," \u5f53\u5b9e\u53c2\u4f20\u9012true\u65f6\uff0c\u5219\u53cd\u5c04\u5bf9\u8c61\u5728\u4f7f\u7528\u65f6\u5e94\u8be5\u53d6\u6d88java\u8bed\u8a00\u8bbf\u95ee\u51cf\u9664"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"int getModifiers()")," \u83b7\u53d6\u6210\u5458\u53d8\u91cf\u7684\u8bbf\u95ee\u4fee\u9970\u7b26"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Class<?> getType()")," \u83b7\u53d6\u6210\u5458\u53d8\u91cf\u7684\u6570\u636e\u7c7b\u578b"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"String getName()")," \u83b7\u53d6\u6210\u5458\u53d8\u91cf\u7684\u540d\u79f0")),Object(i.b)("h2",{id:"method\u7c7b"},"Method\u7c7b"),Object(i.b)("h3",{id:"\u57fa\u672c\u6982\u5ff5-3"},"\u57fa\u672c\u6982\u5ff5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"java.lang.reflect.Method"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u63cf\u8ff0\u83b7\u53d6\u5230\u7684\u5355\u4e2a\u6210\u5458\u65b9\u6cd5\u4fe1\u606f")),Object(i.b)("h3",{id:"class\u5e38\u7528\u65b9\u6cd5-1"},"Class\u5e38\u7528\u65b9\u6cd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Method getMethod(String name, Class<?> ...parameterTypes)")," \u7528\u4e8e\u83b7\u53d6\u8be5Class\u5bf9\u8c61\u8868\u793a\u7c7b\u4e2d\u540d\u5b57\u4e3aname\u53c2\u6570\u4e3aparameterTypes\u7684\u6307\u5b9a\u516c\u5171\u6210\u5458\u65b9\u6cd5"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Method[] getMethods()")," \u7528\u4e8e\u83b7\u53d6\u8be5Class\u5bf9\u8c61\u6240\u8868\u7c7b\u4e2d\u6240\u6709\u516c\u5171\u6210\u5458\u65b9\u6cd5")),Object(i.b)("h3",{id:"method\u5e38\u7528\u65b9\u6cd5"},"Method\u5e38\u7528\u65b9\u6cd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Object invoke(Object obj, Object ...args)")," \u4f7f\u7528\u5bf9\u8c61obj\u6765\u8c03\u7528\u6b64Method\u5bf9\u8c61\u6240\u8868\u793a\u7684\u6210\u5458\u65b9\u6cd5\uff0c\u5b9e\u53c2\u4f20\u9012args\n\u2014 ",Object(i.b)("inlineCode",{parentName:"li"},"int getModifiers()")," \u83b7\u53d6\u8bbf\u95ee\u4fee\u9970\u7b26"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Class<?> getReturnType")," \u83b7\u53d6\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u7c7b\u578b"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"String getName()")," \u83b7\u53d6\u540d\u79f0"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Class<?>[] getParameterTypes()")," \u83b7\u53d6\u65b9\u6cd5\u6240\u6709\u53c2\u6570\u7684\u7c7b\u578b"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Class<?>[] getExceptionTypes()")," \u83b7\u53d6\u65b9\u6cd5\u7684\u5f02\u5e38\u4fe1\u606f")),Object(i.b)("h2",{id:"\u83b7\u53d6\u5176\u5b83\u7ed3\u6784\u4fe1\u606f"},"\u83b7\u53d6\u5176\u5b83\u7ed3\u6784\u4fe1\u606f"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Package getPackage()")," \u83b7\u53d6\u6240\u5728\u5305\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Class<? super T> getSuperClass()")," \u83b7\u53d6\u7ee7\u627f\u7684\u7236\u7c7b\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Class<?>[] getInterface()")," \u83b7\u53d6\u5b9e\u73b0\u7684\u6240\u6709\u63a5\u53e3"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Annotation[] getAnnotations()")," \u83b7\u53d6\u6ce8\u89e3\u4fe1\u606f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Type[] getGenericInterfaces()")," \u83b7\u53d6\u6cdb\u578b\u4fe1\u606f")))}s.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),s=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},p=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,j=u["".concat(r,".").concat(p)]||u[p]||d[p]||i;return n?l.a.createElement(j,c(c({ref:t},o),{},{components:n})):l.a.createElement(j,c({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var o=2;o<i;o++)r[o]=n[o];return l.a.createElement.apply(null,r)}return l.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);