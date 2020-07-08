(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var r=n(2),i=(n(0),n(149)),a=n(189);const l={id:"varystring",title:"\u53ef\u53d8\u5b57\u7b26\u4e32\u7c7b",author:"Vero",hide_title:!0},c={id:"notes/java/oop/core/varystring",title:"\u53ef\u53d8\u5b57\u7b26\u4e32\u7c7b",description:"\u53ef\u53d8\u5b57\u7b26\u4e32\u7c7b\u548c\u65e5\u671f\u76f8\u5173\u7c7b",source:"@site/docs/notes/java/oop/core/varyString.mdx",permalink:"/notes/java/oop/core/varystring",sidebar:"notes",previous:{title:"String\u7c7b\u7684\u6982\u8ff0\u548c\u4f7f\u7528",permalink:"/notes/java/oop/core/string"},next:{title:"Date\u76f8\u5173",permalink:"/notes/java/oop/core/date"}},o=[{value:"\u53ef\u53d8\u5b57\u7b26\u4e32\u7c7b\u548c\u65e5\u671f\u76f8\u5173\u7c7b",id:"\u53ef\u53d8\u5b57\u7b26\u4e32\u7c7b\u548c\u65e5\u671f\u76f8\u5173\u7c7b",children:[{value:"\u53ef\u53d8\u5b57\u7b26\u4e32\u7c7b\uff08\u91cd\u70b9\uff09",id:"\u53ef\u53d8\u5b57\u7b26\u4e32\u7c7b\uff08\u91cd\u70b9\uff09",children:[]}]}],b={rightToc:o};function u({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"\u53ef\u53d8\u5b57\u7b26\u4e32\u7c7b\u548c\u65e5\u671f\u76f8\u5173\u7c7b"},"\u53ef\u53d8\u5b57\u7b26\u4e32\u7c7b\u548c\u65e5\u671f\u76f8\u5173\u7c7b"),Object(i.b)("h3",{id:"\u53ef\u53d8\u5b57\u7b26\u4e32\u7c7b\uff08\u91cd\u70b9\uff09"},"\u53ef\u53d8\u5b57\u7b26\u4e32\u7c7b\uff08\u91cd\u70b9\uff09"),Object(i.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\u7531\u4e8eString\u4e0d\u53ef\u6539\u53d8\uff0c\u5f53\u9700\u8981\u5728java\u4ee3\u7801\u4e2d\u63cf\u8ff0\u5927\u91cf\u7c7b\u4f3c\u5b57\u7b26\u65f6\uff0c\u53ea\u80fd\u5355\u72ec\u7533\u8bf7\u548c\u5b58\u50a8\uff0c\u4f1a\u9020\u6210\u5185\u5b58\u7a7a\u95f4\u7684\u6d6a\u8d39"),Object(i.b)("li",{parentName:"ul"},"\u4e3a\u4e86\u89e3\u51b3\u4ee5\u4e0a\u95ee\u9898\uff0c\u53ef\u4ee5\u4f7f\u7528 ",Object(i.b)("inlineCode",{parentName:"li"},"java.lang.StringBuilder")," \u548c ",Object(i.b)("inlineCode",{parentName:"li"},"java.lang.StringBuffer")," \u6765\u63cf\u8ff0\u5b57\u7b26\u5e8f\u5217\u53ef\u4ee5\u6539\u53d8\u7684\u5b57\u7b26\u4e32"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringBuffer")," \u662f\u4ecejdk1.0\u5f00\u59cb\u5b58\u5728\uff0c\u5c5e\u4e8e",Object(i.b)(a.a,{color:"#25c2a0",mdxType:"Tag"},"\u7ebf\u7a0b\u5b89\u5168"),"\u7684\u7c7b\uff0c\u56e0\u6b64\u6548\u7387\u4f4e"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringBuilder")," \u4ecejdk1.5\u5f00\u59cb\u5b58\u5728\uff0c\u5c5e\u4e8e\u975e\u7ebf\u7a0b\u5b89\u5168\u7684\u7c7b\uff0c\u6548\u7387\u9ad8")),Object(i.b)("h4",{id:"stringbuilder\u7c7b\u5e38\u7528\u6784\u9020"},"StringBuilder\u7c7b\u5e38\u7528\u6784\u9020"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringBuilder()")," \u4f7f\u7528\u65e0\u53c2\u6784\u9020\uff0c\u5bb9\u91cf16"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringBuilder(int capacity)")," \u6839\u636e\u53c2\u6570\u6307\u5b9a\u7684\u5bb9\u91cf\u6784\u9020\uff0c\u5bb9\u91cf\u4e3a\u53c2\u6570\u5927\u5c0f"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringBuilder(String str)")," \u6839\u636e\u6307\u5b9a\u7684\u5b57\u7b26\u4e32\u6784\u9020\uff0c\u5bb9\u91cf\u4e3a ",Object(i.b)("inlineCode",{parentName:"li"},"16 + \u5b57\u7b26\u4e32\u957f\u5ea6"))),Object(i.b)("h4",{id:"stringbuilder\u5e38\u7528\u7684\u6210\u5458\u65b9\u6cd5"},"StringBuilder\u5e38\u7528\u7684\u6210\u5458\u65b9\u6cd5"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"int capacity()")," \u7528\u4e8e\u8fd4\u56de\u8c03\u7528\u5bf9\u8c61\u5bb9\u91cf"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"int length()")," \u7528\u4e8e\u8fd4\u56de\u5b57\u7b26\u4e32\u957f\u5ea6"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringBuilder insert(int offset, String str)")," \u63d2\u5165\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u5f15\u7528"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringBuilder append(String str)")," \u8ffd\u52a0\u5b57\u7b26\uff0c\u8fd4\u56de\u5f15\u7528"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringBuilder deleteCharAt(int index)")," \u5c06\u5f53\u524d\u5b57\u7b26\u4e32\u4e2d\u4e0b\u6807\u4e3aindex\u4f4d\u7f6e\u7684\u5355\u4e2a\u5b57\u7b26\u5220\u9664\uff0c\u8fd4\u56de\u5f15\u7528"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringBuilder delete(int start, int end)")," \u5220\u9664\u5b57\u7b26[start, end)\uff0c\u8fd4\u56de\u5f15\u7528"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringBuilder setCharAt(int index, String str)")," \u5c06\u4e0b\u6807\u4e3aindex\u7684\u5b57\u7b26\u5185\u5bb9\u4fee\u6539\u4e3astr"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringBuilder replace(int start, int end, String, str)")," \u66ff\u6362\u5b57\u7b26\uff0c\u8fd4\u56de\u5f15\u7528"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"StringBuilder reverse()")," \u5b57\u7b26\u4e32\u53cd\u8f6c")),Object(i.b)("h4",{id:"stringbuilder\u7c7b\u6269\u5bb9\u7b97\u6cd5\u6e90\u7801\u89e3\u6790"},"StringBuilder\u7c7b\u6269\u5bb9\u7b97\u6cd5\u6e90\u7801\u89e3\u6790"),Object(i.b)("p",null,"  \u5f53\u5b57\u7b26\u4e32\u957f\u5ea6\u8d85\u8fc7\u5b57\u7b26\u4e32\u5bf9\u8c61\u7684\u521d\u59cb\u5bb9\u91cf\u65f6\uff0c\u8be5\u5b57\u7b26\u4e32\u4f1a\u81ea\u52a8\u6269\u5bb9\u3002\n\u5e95\u5c42\u91c7\u7528 ",Object(i.b)("inlineCode",{parentName:"p"},"byte[]")," \u6765\u5b58\u653e\u6240\u6709\u7684\u5b57\u7b26\u5185\u5bb9\u3002"),Object(i.b)("h4",{id:"\u5b9e\u73b0stringbuilder\u548cstring\u7c7b\u578b\u7684\u8f6c\u6362"},"\u5b9e\u73b0StringBuilder\u548cString\u7c7b\u578b\u7684\u8f6c\u6362"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),'  StringBuilder str1 = new StringBuilder("abc");\n  String str2 = str1.toString();\n  StringBuilder str3 = new StringBuilder(str2);\n')),Object(i.b)("h4",{id:"string-stringbuilder-stringbuffer\u6548\u7387"},"String, StringBuilder, StringBuffer\u6548\u7387"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"  StringBuilder > StringBuffer > String\n")))}u.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b=i.a.createContext({}),u=function(e){var t=i.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=u(n),s=r,j=p["".concat(l,".").concat(s)]||p[s]||d[s]||a;return n?i.a.createElement(j,c(c({ref:t},b),{},{components:n})):i.a.createElement(j,c({ref:t},b))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=s;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var b=2;b<a;b++)l[b]=n[b];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),i=n.n(r);const a=({children:e,color:t,fontColor:n="#fff"})=>i.a.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:n,padding:"2px"}},e);a.isMDXComponent=!0}}]);