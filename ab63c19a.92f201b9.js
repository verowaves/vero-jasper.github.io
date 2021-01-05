(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return o}));var a=n(2),b=n(6),l=(n(0),n(162)),r={id:"webassembly",title:"\u521d\u63a2WebAssembly",author:"Vero",tags:["webassembly","web"]},c={permalink:"/blog/webassembly",source:"@site/blog/2020-10-17-webassembly.mdx",description:"WebAssembly\u662f\u4ec0\u4e48",date:"2020-10-17T00:00:00.000Z",tags:[{label:"webassembly",permalink:"/blog/tags/webassembly"},{label:"web",permalink:"/blog/tags/web"}],title:"\u521d\u63a2WebAssembly",readingTime:.845,truncated:!0,prevItem:{title:"Good tools are prerequisite to the successful execution of a job",permalink:"/blog/utilities-on-mac"},nextItem:{title:"\u89e3\u51b3git pack\u6587\u4ef6\u8fc7\u5927\u7684\u95ee\u9898",permalink:"/blog/git-remove-pack"}},i=[{value:"WebAssembly\u662f\u4ec0\u4e48",id:"webassembly\u662f\u4ec0\u4e48",children:[]},{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[{value:"asm.js\u548cWebAssembly\u5f02\u540c",id:"asmjs\u548cwebassembly\u5f02\u540c",children:[]}]},{value:"JS\u5f15\u64ce\u7684\u5de5\u4f5c\u539f\u7406",id:"js\u5f15\u64ce\u7684\u5de5\u4f5c\u539f\u7406",children:[]},{value:"WebAssembly\u5728\u5927\u578b\u9879\u76ee\u4e2d\u7684\u5e94\u7528",id:"webassembly\u5728\u5927\u578b\u9879\u76ee\u4e2d\u7684\u5e94\u7528",children:[]},{value:"WebAssembly\u7684\u610f\u4e49",id:"webassembly\u7684\u610f\u4e49",children:[]},{value:"Getting Started",id:"getting-started",children:[{value:"Emscripten",id:"emscripten",children:[]}]},{value:"\u53c2\u8003\u6587\u732e",id:"\u53c2\u8003\u6587\u732e",children:[]}],s={rightToc:i};function o(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"webassembly\u662f\u4ec0\u4e48"},"WebAssembly\u662f\u4ec0\u4e48"),Object(l.b)("p",null,"\u2003","\u2003","2019\u5e7412\u67085\u65e5\uff0cW3C WebAssembly \u5de5\u4f5c\u7ec4\u53d1\u5e03 WebAssembly \u6b63\u5f0f\u63a8\u8350\u6807\u51c6\uff08W3C Recommendation\uff09\uff0c\u4e3a Web \u5e26\u6765\u4e00\u79cd\u652f\u6301\u4ee3\u7801\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u7684\u65b0\u8bed\u8a00\u3002"),Object(l.b)("p",null,"\u2003","\u2003","WebAssembly\u662f\u4e00\u79cd\u65b0\u7684\u7f16\u7801\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5728\u73b0\u4ee3\u7684\u7f51\u7edc\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c \uff0d \u5b83\u662f\u4e00\u79cd\u4f4e\u7ea7\u7684\u7c7b\u6c47\u7f16\u8bed\u8a00\uff0c\u5177\u6709\u7d27\u51d1\u7684\u4e8c\u8fdb\u5236\u683c\u5f0f\uff0c\u53ef\u4ee5\u63a5\u8fd1\u539f\u751f\u7684\u6027\u80fd\u8fd0\u884c\uff0c\n\u5e76\u4e3a\u8bf8\u5982C/C++\u7b49\u8bed\u8a00\u63d0\u4f9b\u4e00\u4e2a\u7f16\u8bd1\u76ee\u6807\uff0c\u4ee5\u4fbf\u5b83\u4eec\u53ef\u4ee5\u5728Web\u4e0a\u8fd0\u884c\u3002\u5b83\u4e5f\u88ab\u8bbe\u8ba1\u4e3a\u53ef\u4ee5\u4e0eJavaScript\u5171\u5b58\uff0c\u5141\u8bb8\u4e24\u8005\u4e00\u8d77\u5de5\u4f5c\u3002"),Object(l.b)("p",null,"\u2003","\u2003","WebAssembly Core Specification \u5b9a\u4e49\u4e86\u4e00\u4e2a\u4f4e\u7ea7\u865a\u62df\u673a\uff0c\u6a21\u62df\u8fd0\u884c\u8be5\u865a\u62df\u673a\u7684\u8bb8\u591a\u5fae\u5904\u7406\u5668\u7684\u529f\u80fd\u3002 \u901a\u8fc7\u5373\u65f6\u7f16\u8bd1\u6216\u89e3\u6790\uff0cWebAssembly \u5f15\u64ce\u4f7f\u7f16\u5199\u7684\u4ee3\u7801\u53ef\u4ee5\u4ee5\u63a5\u8fd1\u672c\u5730\u5e73\u53f0\u7684\u901f\u5ea6\u8fd0\u884c\u3002\n.wasm \u8d44\u6e90\u7c7b\u4f3c\u4e8e Java .class \u6587\u4ef6\uff0c\u5b83\u5305\u542b\u9759\u6001\u6570\u636e\u548c\u5bf9\u8be5\u9759\u6001\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\u7684\u4ee3\u7801\u6bb5\u3002 \u4e0e Java \u4e0d\u540c\uff0cWebAssembly \u4e3a\u5176\u4ed6\u7f16\u7a0b\u8bed\u8a00\uff08\u5982C/C++ \u548c Rust\uff09\u63d0\u4f9b\u4e86\u4e00\u4e2a\u9ad8\u6548\u7684\u7f16\u8bd1\u76ee\u6807\u4ee5\u4fbf\u5b83\u4eec\u80fd\u591f\u5728\u7f51\u7edc\u4e0a\u8fd0\u884c\u3002"),Object(l.b)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u6027\u80fd\u74f6\u9888"),Object(l.b)("li",{parentName:"ul"},"\u9759\u6001\u53d8\u91cf\u7c7b\u578b"),Object(l.b)("li",{parentName:"ul"},"asm.js\u7684\u51fa\u73b0"))),Object(l.b)("h3",{id:"asmjs\u548cwebassembly\u5f02\u540c"},"asm.js\u548cWebAssembly\u5f02\u540c"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u4e8c\u8005\u529f\u80fd\u57fa\u672c\u4e00\u81f4\uff0c\u90fd\u662f\u5c06C/C++\u8f6c\u6210JS\u5f15\u64ce\u53ef\u4ee5\u8fd0\u884c\u7684\u4ee3\u7801"),Object(l.b)("li",{parentName:"ul"},"ASM.JS\u662f\u6587\u672c\uff0c\u800cWebAssembly\u662f\u4e8c\u8fdb\u5236\u5b57\u8282\u7801\uff0c\u56e0\u6b64\u8fd0\u884c\u901f\u5ea6\u5feb\u3001\u4f53\u79ef\u5c0f"))),Object(l.b)("h2",{id:"js\u5f15\u64ce\u7684\u5de5\u4f5c\u539f\u7406"},"JS\u5f15\u64ce\u7684\u5de5\u4f5c\u539f\u7406"),Object(l.b)("p",null,Object(l.b)("img",Object(a.a)({parentName:"p"},{src:"/img/js.png",alt:"avatar"}))),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"Parsing\u2014\u2014\u8868\u793a\u628a\u6e90\u4ee3\u7801\u53d8\u6210\u89e3\u91ca\u5668\u53ef\u4ee5\u8fd0\u884c\u7684\u4ee3\u7801\u6240\u82b1\u7684\u65f6\u95f4"),Object(l.b)("li",{parentName:"ul"},"Compiling + optimizing\u2014\u2014\u8868\u793a\u57fa\u7ebf\u7f16\u8bd1\u5668\u548c\u4f18\u5316\u7f16\u8bd1\u5668\u82b1\u7684\u65f6\u95f4\u3002\u4e00\u4e9b\u4f18\u5316\u7f16\u8bd1\u5668\u7684\u5de5\u4f5c\u5e76\u4e0d\u5728\u4e3b\u7ebf\u7a0b\u8fd0\u884c\uff0c\u4e0d\u5305\u542b\u5728\u8fd9\u91cc"),Object(l.b)("li",{parentName:"ul"},"Re-optimizing\u2014\u2014\u5f53 JIT \u53d1\u73b0\u4f18\u5316\u5047\u8bbe\u9519\u8bef\uff0c\u4e22\u5f03\u4f18\u5316\u4ee3\u7801\u6240\u82b1\u7684\u65f6\u95f4\u3002\u5305\u62ec\u91cd\u4f18\u5316\u7684\u65f6\u95f4\u3001\u629b\u5f03\u5e76\u8fd4\u56de\u5230\u57fa\u7ebf\u7f16\u8bd1\u5668\u7684\u65f6\u95f4"),Object(l.b)("li",{parentName:"ul"},"Execution\u2014\u2014\u6267\u884c\u4ee3\u7801\u7684\u65f6\u95f4"),Object(l.b)("li",{parentName:"ul"},"Garbage collection\u2014\u2014\u5783\u573e\u56de\u6536\uff0c\u6e05\u7406\u5185\u5b58\u7684\u65f6\u95f4"))),Object(l.b)("h2",{id:"webassembly\u5728\u5927\u578b\u9879\u76ee\u4e2d\u7684\u5e94\u7528"},"WebAssembly\u5728\u5927\u578b\u9879\u76ee\u4e2d\u7684\u5e94\u7528"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"AutoCAD"),Object(l.b)("li",{parentName:"ul"},"Google Earth"),Object(l.b)("li",{parentName:"ul"},"Unity\u548cUnreal\u6e38\u620f\u5f15\u64ce"))),Object(l.b)("h2",{id:"webassembly\u7684\u610f\u4e49"},"WebAssembly\u7684\u610f\u4e49"),Object(l.b)("blockquote",null,Object(l.b)("ul",{parentName:"blockquote"},Object(l.b)("li",{parentName:"ul"},"\u7ed9\u4e86Web\u66f4\u597d\u7684\u6027\u80fd"),Object(l.b)("li",{parentName:"ul"},"\u968f\u7740WebAssembly\u7684\u6280\u672f\u8d8a\u6765\u8d8a\u6210\u719f\uff0c\u52bf\u5fc5\u4f1a\u6709\u66f4\u591a\u7684\u5e94\u7528\uff0c\u4eceDesktop\u88ab\u642c\u5230Web\u4e0a\uff0c\u8fd9\u4f1a\u4f7f\u672c\u6765\u5df2\u7ecf\u5341\u5206\u5f3a\u5927\u7684Web\u66f4\u52a0\u4e30\u5bcc\u548c\u5f3a\u5927"))),Object(l.b)("h2",{id:"getting-started"},"Getting Started"),Object(l.b)("h3",{id:"emscripten"},"Emscripten"),Object(l.b)("h4",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/juj/emsdk.git\n$ cd emsdk\n$ ./emsdk install latest\n$ ./emsdk activate latest\n$ source ./emsdk_env.sh\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u6bcf\u6b21\u91cd\u65b0\u767b\u9646\u6216\u8005\u65b0\u5efaShell\u7a97\u53e3\uff0c\u90fd\u8981\u6267\u884c\u4e00\u6b21",Object(l.b)("inlineCode",{parentName:"p"},"source ./emsdk_env.sh"))),Object(l.b)("h4",{id:"\u5728node\u4e2d\u7684\u5e94\u7528"},"\u5728Node\u4e2d\u7684\u5e94\u7528"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),'// hello.c\n\n#include <stdio.h>\n\nint main() {\n  printf("hello, world!\\n");\n  return 0;\n}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ emcc hello.c # output: a.out.js and a.out.wasm\n$ node a.out.js # hello, world!\n")),Object(l.b)("h4",{id:"\u5728react\u4e2d\u7684\u5e94\u7528"},"\u5728React\u4e2d\u7684\u5e94\u7528"),Object(l.b)("h2",{id:"\u53c2\u8003\u6587\u732e"},"\u53c2\u8003\u6587\u732e"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://juejin.im/post/6844903709806182413#heading-3"}),"WebAssembly\u5b8c\u5168\u5165\u95e8\u2014\u2014\u4e86\u89e3wasm\u7684\u524d\u4e16\u4eca\u8eab")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"http://www.ruanyifeng.com/blog/2017/09/asmjs_emscripten.html"}),"asm.js \u548c Emscripten \u5165\u95e8\u6559\u7a0b")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/zh-CN/docs/WebAssembly/Concepts"}),"MDN"))))}o.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),b=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var s=b.a.createContext({}),o=function(e){var t=b.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=o(e.components);return b.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=o(n),p=a,j=m["".concat(r,".").concat(p)]||m[p]||u[p]||l;return n?b.a.createElement(j,c(c({ref:t},s),{},{components:n})):b.a.createElement(j,c({ref:t},s))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var s=2;s<l;s++)r[s]=n[s];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);