(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return b}));var r=n(2),a=(n(0),n(149));const c={id:"git-remove-pack",title:"\u89e3\u51b3git pack\u6587\u4ef6\u8fc7\u5927\u7684\u95ee\u9898",author:"Vero",tags:["git"]},i={permalink:"/blog/git-remove-pack",source:"@site/blog/2020-06-08-git-pack.mdx",description:"\u89e3\u51b3git\u4e2d\u7684pack\u6587\u4ef6\u8fc7\u5927\u7684\u95ee\u9898",date:"2020-06-08T00:00:00.000Z",tags:[{label:"git",permalink:"/blog/tags/git"}],title:"\u89e3\u51b3git pack\u6587\u4ef6\u8fc7\u5927\u7684\u95ee\u9898",readingTime:.635,truncated:!0,nextItem:{title:"\u3010\u7ffb\u8bd1\u3011\u4eceNode\u5230Deno",permalink:"/blog/from-node-to-deno"}},o=[{value:"\u89e3\u51b3git\u4e2d\u7684pack\u6587\u4ef6\u8fc7\u5927\u7684\u95ee\u9898",id:"\u89e3\u51b3git\u4e2d\u7684pack\u6587\u4ef6\u8fc7\u5927\u7684\u95ee\u9898",children:[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[]},{value:"\u5c1d\u8bd5\u89e3\u51b3\u95ee\u9898",id:"\u5c1d\u8bd5\u89e3\u51b3\u95ee\u9898",children:[]}]}],p={rightToc:o};function b({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u89e3\u51b3git\u4e2d\u7684pack\u6587\u4ef6\u8fc7\u5927\u7684\u95ee\u9898"},"\u89e3\u51b3git\u4e2d\u7684pack\u6587\u4ef6\u8fc7\u5927\u7684\u95ee\u9898"),Object(a.b)("h3",{id:"\u80cc\u666f"},"\u80cc\u666f"),Object(a.b)("p",null,"\u4eca\u5929\u63a5\u624b\u4e86\u4e00\u4e2a\u9879\u76ee\uff0c\u5728clone\u7684\u65f6\u5019\u53d1\u73b0\u6709146M\uff0c\u7b2c\u4e00\u53cd\u5e94\u662f.gitignore\u4e2d\u6ca1\u6709\u5c06",Object(a.b)("inlineCode",{parentName:"p"},"node_modules"),"\u5199\u5165\u3002\nclone\u5b8c\u67e5\u770b",Object(a.b)("inlineCode",{parentName:"p"},".gitignore"),"\u540e\u53d1\u73b0\u6211\u9519\u4e86\uff0c\u518d\u4ed4\u7ec6\u67e5\u770b\u540e\uff0c\u627e\u5230\u539f\u56e0\uff1a",Object(a.b)("inlineCode",{parentName:"p"},".git/objects/pack"),"\u4e2d\u7684pack\u6587\u4ef6\u8fc7\u5927\u3002"),Object(a.b)("h3",{id:"\u5c1d\u8bd5\u89e3\u51b3\u95ee\u9898"},"\u5c1d\u8bd5\u89e3\u51b3\u95ee\u9898"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"\u67e5\u770bpack\u4e2d\u6700\u5927\u7684\u4e09\u4e2a\u6587\u4ef6"),Object(a.b)("p",{parentName:"li"},"  ",Object(a.b)("inlineCode",{parentName:"p"},"git verify-pack -v .git/objects/pack/{pack\u540d}.idx | sort -k 3 -n | tail -3"),"\n",Object(a.b)("inlineCode",{parentName:"p"},"git verify-pack -v .git/objects/pack/pack-1e730055ae389609f150b63c7b6e1821bf3ed6ef.idx")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-git"}),"b44d9e81b8a617cdc0aceb6cd138490f543b23db blob   574946 129817 10920\nd9b52ba8e32e7c342e6458dc71cd102a12538846 blob   79130210 71157504 75551109\ne15d067755f42ef5037bce042e1c6b6c3cdc1471 blob   81564206 74970605 564257\n")),Object(a.b)("p",{parentName:"li"},"2.\u67e5\u8be2\u5927\u6587\u4ef6\u7684\u6587\u4ef6\u540d\n\u9009\u4e86\u4e2a\u6700\u5927\u7684\uff0c\u53d1\u73b0\u662f\u67d0\u6b21\u63d0\u4ea4\u6709\u4eba\u5c06node_modules\u6253\u5305\u6210zip\u63d0\u4ea4\u4e86"),Object(a.b)("p",{parentName:"li"},"  ",Object(a.b)("inlineCode",{parentName:"p"},"git rev-list --objects --all | grep d9b52ba8e32e7c342e6458dc71cd102a12538846")),Object(a.b)("pre",{parentName:"li"},Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-git"}),"d9b52ba8e32e7c342e6458dc71cd102a12538846 node_modules.zip\n")))),Object(a.b)("p",null,"3.\u5c06\u8be5\u6587\u4ef6\u4ece\u5386\u53f2\u8bb0\u5f55\u6240\u6709\u7684tree\u4e2d\u5220\u9664"),Object(a.b)("p",null,"  ",Object(a.b)("inlineCode",{parentName:"p"},"git filter-branch --force --index-filter 'git rm -rf --cached --ignore-unmatch node_modules.zip'")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-git"}),"Rewrite 5028ea02fdc9b8e7f29b9c0240933044349f0dbc (31/34) (2 seconds passed, remaining 0 predicted)    \nWARNING: Ref 'refs/heads/dev' is unchanged\n")),Object(a.b)("p",null,"  ",Object(a.b)("inlineCode",{parentName:"p"},"git filter-branch --force --index-filter 'git rm -rf --cached --ignore-unmatch ./node_modules.zip' --prune-empty --tag-name-filter cat -- --all")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-git"}),"git for-each-ref --format='delete %(refname)' refs/original | git update-ref --stdin\n\ngit reflog expire --expire=now --all\n\ngit gc --prune=now\n\ngit push origin --force --all\n")),Object(a.b)("p",null,"[\u53c2\u8003\u6587\u732e]"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.cnblogs.com/shines77/p/3460274.html"}),"https://www.cnblogs.com/shines77/p/3460274.html"),"\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository"}),"https://help.github.com/en/github/authenticating-to-github/removing-sensitive-data-from-a-repository"))))}b.isMDXComponent=!0},149:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),l=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),d=l(n),g=r,m=d["".concat(i,".").concat(g)]||d[g]||u[g]||c;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"}}]);