(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{128:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(136)),c={id:"firstProgram",title:"\u7f16\u5199\u7b2c\u4e00\u4e2aJava\u7a0b\u5e8f",author:"Vero",hide_title:!0},l={id:"java/base/firstProgram",title:"\u7f16\u5199\u7b2c\u4e00\u4e2aJava\u7a0b\u5e8f",description:"\u7f16\u5199\u7b2c\u4e00\u4e2aJava\u7a0b\u5e8f",source:"@site/docs/java/base/2.\u7b2c\u4e00\u4e2aJava\u7a0b\u5e8f.mdx",permalink:"/notes/java/base/firstProgram",sidebar:"notes",previous:{title:"Java\u7b80\u4ecb",permalink:"/notes/java/base/intro"},next:{title:"\u8de8\u5e73\u53f0\u539f\u7406",permalink:"/notes/java/base/crossPlatform"}},i=[{value:"\u7f16\u5199\u7b2c\u4e00\u4e2aJava\u7a0b\u5e8f",id:"\u7f16\u5199\u7b2c\u4e00\u4e2ajava\u7a0b\u5e8f",children:[]}],u={rightToc:i};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u7f16\u5199\u7b2c\u4e00\u4e2ajava\u7a0b\u5e8f"},"\u7f16\u5199\u7b2c\u4e00\u4e2aJava\u7a0b\u5e8f"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u6253\u5f00\u7f16\u8f91\u5668\uff0c\u65b0\u5efa\u6587\u4ef6\u5e76\u8f93\u5165\u5982\u4e0b\u4ee3\u7801")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'public class HelloWorld/** \u7c7b\u540d */ {\n    /** \u7c7b\u4f53 */\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u4fdd\u5b58\u6587\u4ef6\u4e3a ",Object(o.b)("inlineCode",{parentName:"p"},"HelloWorld.java"),"\uff0c\u6587\u4ef6\u540d\u9700\u4e0e\u7c7b\u540d\u4e00\u81f4")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"\u7f16\u8bd1java\u6587\u4ef6"))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"javac HelloWorld.java // source code\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u8fd0\u884c")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),"java HelloWorld.class // byte code\n")))}p.isMDXComponent=!0},136:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},b=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=p(r),f=n,m=b["".concat(c,".").concat(f)]||b[f]||s[f]||o;return r?a.a.createElement(m,l(l({ref:t},u),{},{components:r})):a.a.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);