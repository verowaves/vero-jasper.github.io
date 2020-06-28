(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{128:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return O})),a.d(t,"rightToc",(function(){return j})),a.d(t,"default",(function(){return p}));var b=a(2),n=a(6),l=(a(0),a(147)),i=a(187),r=a(161),c={id:"io",title:"IO\u6d41",author:"Vero",hide_title:!0},O={id:"java/oop/core/io",title:"IO\u6d41",description:"IO\u6d41",source:"@site/docs/java/oop/core/io.mdx",permalink:"/notes/java/oop/core/io",sidebar:"notes",previous:{title:"File\u7c7b",permalink:"/notes/java/oop/core/file"},next:{title:"\u591a\u7ebf\u7a0b",permalink:"/notes/java/oop/core/multiple-thread"}},j=[{value:"IO\u6d41",id:"io\u6d41",children:[{value:"\u57fa\u672c\u6982\u5ff5",id:"\u57fa\u672c\u6982\u5ff5",children:[]},{value:"\u57fa\u672c\u5206\u7c7b",id:"\u57fa\u672c\u5206\u7c7b",children:[]},{value:"\u4f53\u7cfb\u7ed3\u6784",id:"\u4f53\u7cfb\u7ed3\u6784",children:[]},{value:"FileWriter\u7c7b\uff08\u91cd\u70b9\uff09",id:"filewriter\u7c7b\uff08\u91cd\u70b9\uff09",children:[]},{value:"FileReader\u7c7b\uff08\u91cd\u70b9\uff09",id:"filereader\u7c7b\uff08\u91cd\u70b9\uff09",children:[]},{value:"FileOutputStream\u7c7b\uff08\u91cd\u70b9\uff09",id:"fileoutputstream\u7c7b\uff08\u91cd\u70b9\uff09",children:[]},{value:"FileInputStream\u7c7b\uff08\u91cd\u70b9\uff09",id:"fileinputstream\u7c7b\uff08\u91cd\u70b9\uff09",children:[]},{value:"BufferedOutputStream\u7c7b\uff08\u91cd\u70b9\uff09",id:"bufferedoutputstream\u7c7b\uff08\u91cd\u70b9\uff09",children:[]},{value:"BufferedInputStream\u7c7b\uff08\u91cd\u70b9\uff09",id:"bufferedinputstream\u7c7b\uff08\u91cd\u70b9\uff09",children:[]},{value:"BufferedWriter\u7c7b\uff08\u91cd\u70b9\uff09",id:"bufferedwriter\u7c7b\uff08\u91cd\u70b9\uff09",children:[]},{value:"BufferedReader\u7c7b\uff08\u91cd\u70b9\uff09",id:"bufferedreader\u7c7b\uff08\u91cd\u70b9\uff09",children:[]},{value:"PrintStream\u7c7b",id:"printstream\u7c7b",children:[]},{value:"PrintWriter\u7c7b",id:"printwriter\u7c7b",children:[]},{value:"OutputStreamWriter\u7c7b",id:"outputstreamwriter\u7c7b",children:[]},{value:"InputStreamReader\u7c7b",id:"inputstreamreader\u7c7b",children:[]},{value:"\u5b57\u7b26\u7f16\u7801",id:"\u5b57\u7b26\u7f16\u7801",children:[]},{value:"DataOutputStream\u7c7b\uff08\u4e86\u89e3\uff09",id:"dataoutputstream\u7c7b\uff08\u4e86\u89e3\uff09",children:[]},{value:"DataInputStream\u7c7b\uff08\u4e86\u89e3\uff09",id:"datainputstream\u7c7b\uff08\u4e86\u89e3\uff09",children:[]},{value:"ObjectOutputStream\u7c7b",id:"objectoutputstream\u7c7b",children:[]},{value:"ObjectInputStream\u7c7b",id:"objectinputstream\u7c7b",children:[]},{value:"RandomAccessFile\u7c7b",id:"randomaccessfile\u7c7b",children:[]}]}],u={rightToc:j};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(b.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"io\u6d41"},"IO\u6d41"),Object(l.b)("h3",{id:"\u57fa\u672c\u6982\u5ff5"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"IO"),"\u662f\u8f93\u5165\u548c\u8f93\u51fa\u7684\u542b\u4e49"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"IO\u6d41"),"\u6307\u8bfb\u5199\u6570\u636e\u65f6\u50cf\u6d41\u6c34\u4e00\u6837\u4ece\u4e00\u7aef\u6d41\u5230\u53e6\u4e00\u7aef")),Object(l.b)("h3",{id:"\u57fa\u672c\u5206\u7c7b"},"\u57fa\u672c\u5206\u7c7b"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6309\u7167\u8bfb\u5199\u6570\u636e\u7684\u57fa\u672c\u5355\u4f4d\u4e0d\u540c\uff0c\u5206\u4e3a\u5b57\u8282\u6d41\u548c\u5b57\u7b26\u6d41"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u5b57\u8282\u662f\u4ee5\u5b57\u8282\u4e3a\u5355\u4f4d\u8fdb\u884c\u6570\u636e\u8bfb\u5199\u7684\u6d41\uff0c\u53ef\u4ee5\u8bfb\u5199\u4efb\u610f\u7c7b\u578b\u6587\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u5b57\u7b26\u6d41\u662f\u4ee5\u5b57\u7b26(2\u4e2a\u5b57\u8282)\u4e3a\u5355\u4f4d\u8fdb\u884c\u6570\u636e\u8bfb\u5199\u7684\u6d41\uff0c\u53ea\u80fd\u8bfb\u5199\u6587\u672c\u6587\u4ef6"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6309\u7167\u8bfb\u5199\u6570\u636e\u7684\u65b9\u5411\u4e0d\u540c\uff0c\u5206\u4e3a\u8f93\u5165\u6d41\u548c\u8f93\u51fa\u6d41\uff08\u7ad9\u5728\u7a0b\u5e8f\u89d2\u5ea6\uff09"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8f93\u5165\u6d41\u4e3b\u8981\u6307\u4ece\u6587\u4ef6\u4e2d\u8bfb\u53d6\u7684\u6570\u636e\u5185\u5bb9\u8f93\u5165\u5230\u7a0b\u5e8f\u4e2d\uff0c\u5373\u8bfb\u6587\u4ef6"),Object(l.b)("li",{parentName:"ul"},"\u5176\u4e2d\u8f93\u51fa\u6d41\u4e3b\u8981\u6307\u5c06\u7a0b\u5e8f\u4e2d\u7684\u6570\u636e\u5185\u5bb9\u8f93\u51fa\u5230\u6587\u4ef6\u4e2d\uff0c\u5373\u5199\u6587\u4ef6"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"\u6309\u7167\u6d41\u7684\u89d2\u8272\u4e0d\u540c\u5206\u4e3a\u8282\u70b9\u6d41\u548c\u5904\u7406\u6d41"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"\u8282\u70b9\u6d41\u4e3b\u8981\u6307\u76f4\u63a5\u548c\u8f93\u5165\u8f93\u51fa\u6e90\u5bf9\u63a5\u7684\u6d41"),Object(l.b)("li",{parentName:"ul"},"\u5904\u7406\u6d41\u4e3b\u8981\u6307\u9700\u8981\u5efa\u7acb\u5728\u8282\u70b9\u6d41\u7684\u57fa\u7840\u4e4b\u4e0a\u7684\u6d41")))),Object(l.b)("h3",{id:"\u4f53\u7cfb\u7ed3\u6784"},"\u4f53\u7cfb\u7ed3\u6784"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5206\u7c7b"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5b57\u8282\u8f93\u5165\u6d41"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5b57\u8282\u8f93\u51fa\u6d41"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5b57\u7b26\u8f93\u5165\u6d41"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5b57\u7b26\u8f93\u51fa\u6d41"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u62bd\u8c61\u57fa\u7c7b"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"InputStream")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"OutStream")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"Reader")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"Writer"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u8bbf\u95ee\u6587\u4ef6"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"FileInputStream")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"FileOutputStream")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"FileReader")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"FileWriter"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u8bbf\u95ee\u6570\u7ec4"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u8bbf\u95ee\u7ba1\u9053"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u8bbf\u95ee\u5b57\u7b26\u4e32"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"--"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"--"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u7f13\u51b2\u6d41"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"BufferedInputStream")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"BufferedOutputStream")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"BufferedReader")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"BufferedWriter"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u8f6c\u6362\u6d41"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"--"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"--"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"InputStreamReader")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"OutputStreamWriter"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5bf9\u8c61\u6d41"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"ObjectInputStream")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),Object(l.b)(i.a,{fontColor:"red",mdxType:"Tag"},"ObjectOutputStream")),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"--"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"--")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u6253\u5370\u6d41"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"--"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"--"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u63a8\u56de\u8f93\u5165\u6d41"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"--"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"--")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u7279\u6b8a\u6d41"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"--"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"--")))),Object(l.b)(r.a,{chart:"\n    graph LR\n      title([IO\u6d41]) --\x3e left([\u5b57\u8282\u6d41]) & right([\u5b57\u7b26\u6d41])\n      left --\x3e input([InputStream]) & output([OutputStream])\n      right --\x3e reader([Reader]) & writer([Writer])\n      input --\x3e in1([FileInputStream]) & in2([ BufferedInputStream]) & in3([DataInputStream]) & in4([ObjectInputStream])\n      output --\x3e ou1([FileOutputStream]) & ou2([BufferedOutputStream]) & ou3([DataOutputStream]) & ou4([ObjectOutputStream]) & ou5([PrintStream])\n      reader --\x3e re1([FileReader]) & re2([BufferedReader]) & re3([InputStreamReader])\n      writer --\x3e wr1([FileWriter]) & wr2([BufferedWriter]) & wr3([OutputStreamWriter]) & wr4([PrintWriter])\n      classDef in width:150px\n      classDef cell fill:#303846,color:#fff,stroke-width:0px\n      classDef child fill:#303846,color:#fff,stroke-width:0px\n  ",mdxType:"Mermaid"}),Object(l.b)("h3",{id:"filewriter\u7c7b\uff08\u91cd\u70b9\uff09"},"FileWriter\u7c7b\uff08\u91cd\u70b9\uff09"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-1"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.FileWriter"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u5c06\u6587\u672c\u5185\u5bb9\u5199\u5165\u5230\u6587\u672c\u6587\u4ef6")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"FileWriter(String fileName)")," \u6839\u636e\u53c2\u6570\u6307\u5b9a\u6587\u4ef6\u540d\u6784\u9020\u5bf9\u8c61\uff08\u6587\u4ef6\u4e0d\u5b58\u5728\u5219\u521b\u5efa\uff0c\u6709\u5219\u6e05\u7a7a\u540e\u5199\u5165\uff09")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"FileWriter(String fileName, boolean append)")," \u4ee5\u8ffd\u52a0\u7684\u65b9\u5f0f\u6839\u636e\u53c2\u6570\u6307\u5b9a\u7684\u6587\u4ef6\u540d\u6784\u9020\uff08\u6587\u4ef6\u4e0d\u5b58\u5728\u5219\u521b\u5efa\uff0c\u6709\u8d23\u8ffd\u52a0\u6587\u4ef6\uff09"),Object(l.b)("blockquote",{parentName:"li"},Object(l.b)("p",{parentName:"blockquote"},"\u6bcf\u5f53\u5199\u5165\u4e00\u4e2a\u5b57\u7b26\u540e\uff0c\u6587\u4ef6\u4e2d\u7684\u8bfb\u5199\u4f4d\u7f6e\u5f80\u540e\u79fb\u52a8\u4e00\u4f4d"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"void write(int c)")," \u5199\u5165\u5355\u4e2a\u5b57\u7b26")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"void write(char[] cbuf, int off, int len)")," \u5c06\u6307\u5b9a\u5b57\u7b26\u6570\u7ec4\u4e2d\u4ece\u504f\u79fb\u91cfoff\u5f00\u59cb\u7684len\u4e2a\u5b57\u7b26\u5199\u5165\u6b64\u6587\u4ef6\u8f93\u51fa\u6d41")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"void write(char[] cbuf)")," \u5c06cbuf.length\u4e2a\u5b57\u7b26\u4ece\u6307\u5b9a\u5b57\u7b26\u6570\u7ec4\u5199\u5165\u6b64\u6587\u4ef6\u7684\u8f93\u51fa\u6d41")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"void flush()")," \u5237\u65b0\u6d41")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("inlineCode",{parentName:"p"},"void close()")," \u5173\u95ed\u6d41\u5bf9\u8c61\u5e76\u91ca\u653e\u6709\u5173\u7684\u8d44\u6e90"))),Object(l.b)("h3",{id:"filereader\u7c7b\uff08\u91cd\u70b9\uff09"},"FileReader\u7c7b\uff08\u91cd\u70b9\uff09"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-2"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.FileReader"),"\u7c7b\u7528\u4e8e\u4ece\u6587\u672c\u6587\u4ef6\u4e2d\u8bfb\u53d6\u6587\u672c\u6570\u636e\u5185\u5bb9")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-1"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"FileReader(String fileName)")," \u6839\u636e\u53c2\u6570\u6307\u5b9a\u7684\u6587\u4ef6\u540d\u6784\u9020"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int read()")," \u8bfb\u53d6\u5355\u4e2a\u5b57\u7b26\u7684\u6570\u636e\u5e76\u8fd4\u56de\uff0c\u8fd4\u56de-1\u8868\u793a\u8bfb\u53d6\u5230\u672b\u5c3e"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int read(char[] cbuf, int offset, int length)")," \u4ece\u8f93\u5165\u6d41\u4e2d\u5c06\u6700\u591alen\u4e2a\u5b57\u7b26\u7684\u6570\u636e\u8bfb\u5165\u4e00\u4e2a\u5b57\u7b26\u6570\u7ec4\u4e2d\uff0c\u8fd4\u56de\u8bfb\u53d6\u5230\u7684\u5b57\u7b26\u4e2a\u6570\uff0c\u8fd4\u56de-1\u5219\u8bfb\u5230\u672b\u5c3e"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int read(char[] cbuf)")," \u4ece\u6b64\u8f93\u5165\u6d41\u4e2d\u5c06\u6700\u591a",Object(l.b)("inlineCode",{parentName:"li"},"cbuf.length"),"\u4e2a\u5b57\u7b26\u7684\u6570\u636e\u8bfb\u5165\u5b57\u7b26\u6570\u7ec4\u4e2d\uff0c\u8fd4\u56de\u8bfb\u53d6\u5230\u7684\u5b57\u7b26\u4e2a\u6570\uff0c\u8fd4\u56de\u5219\u8bfb\u5230\u672b\u5c3e")),Object(l.b)("h3",{id:"fileoutputstream\u7c7b\uff08\u91cd\u70b9\uff09"},"FileOutputStream\u7c7b\uff08\u91cd\u70b9\uff09"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-3"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.FileOutputStream"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u5c06\u56fe\u50cf\u6570\u636e\u4e4b\u7c7b\u7684\u539f\u59cb\u5b57\u8282\u6d41\u5199\u5165\u5230\u8f93\u51fa\u6d41\u4e2d")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-2"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"FileOutputStream(String name)")," \u6839\u636e\u53c2\u6570\u6307\u5b9a\u7684\u6587\u4ef6\u540d\u6784\u9020"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"FileOutputStream(String name, boolean append)")," \u4ee5\u8ffd\u52a0\u7684\u65b9\u5f0f"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void write(int b)")," \u5c06\u6307\u5b9a\u7684\u5b57\u8282\u6d41\u5199\u5165\u6b64\u6587\u4ef6\u8f93\u51fa\u6d41"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void write(byte[] b, int off, int len)")," \u5c06\u6307\u5b9a\u5b57\u8282\u6570\u7ec4\u4e2d\u4ece\u504f\u79fb\u91cfoff\u5f00\u59cb\u7684len\u4e2a\u5b57\u5199\u5165\u6b64\u6587\u4ef6\u8f93\u51fa\u6d41"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void write(byte[] b)")," \u5c06b.length\u4e2a\u5b57\u8282\u4ece\u6307\u5b9a\u5b57\u8282\u6570\u7ec4\u5199\u5165\u6b64\u6587\u4ef6\u8f93\u51fa\u6d41"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void flush()")," \u5237\u65b0\u6b64\u8f93\u51fa\u6d41\u5e76\u5f3a\u5236\u5199\u51fa\u4efb\u4f55\u7f13\u51b2\u7684\u8f93\u51fa\u5b57\u8282"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void close()")," \u5173\u95ed\u6d41\u5bf9\u8c61\u5e76\u91ca\u653e\u6709\u5173\u8d44\u6e90")),Object(l.b)("h3",{id:"fileinputstream\u7c7b\uff08\u91cd\u70b9\uff09"},"FileInputStream\u7c7b\uff08\u91cd\u70b9\uff09"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-4"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.FileInputStream"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u4ece\u8f93\u5165\u6d41\u4e2d\u4ee5\u5b57\u8282\u6d41\u7684\u65b9\u5f0f\u8bfb\u53d6\u56fe\u50cf\u6570\u636e\u7b49")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-3"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"FileInputStream(String name)")," \u6839\u636e\u53c2\u6570\u6307\u5b9a\u7684\u6587\u4ef6\u8def\u5f84\u540d\u6784\u9020"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int read()")," \u4ece\u8f93\u5165\u6d41\u4e2d\u8bfb\u53d6\u5355\u4e2a\u5b57\u7b26\u7684\u6570\u636e\u5e76\u8fd4\u56de\uff0c\u8fd4\u56de-1\u8868\u793a\u8bfb\u5230\u672b\u5c3e"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int read(byte[] b, int off, int len)")," \u4ece\u6b64\u8f93\u5165\u6d41\u4e2d\u5c06\u6700\u591alen\u4e2a\u5b57\u8282\u7684\u6570\u636e\u8bfb\u5165\u5b57\u8282\u6570\u7ec4\u4e2d\uff0c\u8fd4\u56de\u8bfb\u53d6\u5230\u7684\u5b57\u8282\u4e2a\u6570\uff0c\u8fd4\u56de-1\u8868\u793a\u8bfb\u5230\u672b\u5c3e"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int read(byte[] b)")," \u4ece\u6b64\u8f93\u5165\u6d41\u4e2d\u5c06\u6700\u591ab.length\u4e2a\u5b57\u8282\u6570\u636e\u8bfb\u5165\u5b57\u8282\u6570\u7ec4\u4e2d\uff0c\u8fd4\u56de\u8bfb\u53d6\u5230\u5b57\u8282\u7684\u4e2a\u6570\uff0c\u8fd4\u56de-1\u8868\u793a\u8bfb\u5230\u672b\u5c3e"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void close()")," \u5173\u95ed\u6d41\u5bf9\u8c61\u5e76\u91ca\u653e\u6709\u5173\u7684\u8d44\u6e90"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int available()")," \u83b7\u53d6\u8f93\u5165\u6d41\u6240\u5173\u8054\u6587\u4ef6\u7684\u5927\u5c0f")),Object(l.b)("h3",{id:"bufferedoutputstream\u7c7b\uff08\u91cd\u70b9\uff09"},"BufferedOutputStream\u7c7b\uff08\u91cd\u70b9\uff09"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-5"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"javao.io.BufferedOutputStream"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u63cf\u8ff0\u7f13\u51b2\u8f93\u51fa\u6d41\uff0c\u6b64\u65f6\u4e0d\u7528\u4e3a\u5199\u5165\u7684\u6bcf\u4e2a\u5b57\u8282\u8c03\u7528\u5e95\u5c42\u7cfb\u7edf")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-4"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"BufferedOutputStream(OutputStream out)")," \u6839\u636e\u53c2\u6570\u6307\u5b9a\u7684\u5f15\u7528\u6784\u9020"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"BufferedOutputStream(OutputStream out, int size)")," \u6839\u636e\u53c2\u6570\u6307\u5b9a\u7684\u5f15\u7528\u548c\u5927\u5c0f\u6784\u9020"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void write(int b)")," \u5199\u5165\u5355\u4e2a\u5b57\u8282"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void write(byte[] b, int off, int len)")," \u5199\u5165\u5b57\u8282\u6570\u7ec4\u4e2d\u7684\u4e00\u90e8\u5206\u6570\u636e"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void write(byte[])")," \u5199\u5165\u53c2\u6570\u6307\u5b9a\u7684\u6574\u4e2a\u5b57\u8282\u6570\u7ec4"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void flush()")," \u5237\u65b0\u6d41"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void close()")," \u5173\u95ed\u6d41\u5bf9\u8c61\u5e76\u91ca\u653e\u6709\u5173\u7684\u8d44\u6e90")),Object(l.b)("h3",{id:"bufferedinputstream\u7c7b\uff08\u91cd\u70b9\uff09"},"BufferedInputStream\u7c7b\uff08\u91cd\u70b9\uff09"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-6"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.BufferedInputStream"),"\u7c7b\u63cf\u8ff0\u7f13\u51b2\u8f93\u5165\u6d41")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-5"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"BufferedInputStream(InputStream in)")," \u6839\u636e\u53c2\u6570\u6307\u5b9a\u7684\u5f15\u7528\u6784\u9020"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"BufferedInputStream(IntputStream in, int size)")," \u6839\u636e\u53c2\u6570\u6307\u5b9a\u7684\u5f15\u7528\u548c\u5927\u5c0f\u6784\u9020"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int read()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int read(byte[] b, int off, int len)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int read(byte[] b)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void close()"))),Object(l.b)("h3",{id:"bufferedwriter\u7c7b\uff08\u91cd\u70b9\uff09"},"BufferedWriter\u7c7b\uff08\u91cd\u70b9\uff09"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-7"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.BufferedWriter"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u5199\u5165\u5355\u4e2a\u5b57\u7b26\u3001\u5b57\u7b26\u6570\u7ec4\u4ee5\u53ca\u5b57\u7b26\u4e32")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-6"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("h3",{id:"bufferedreader\u7c7b\uff08\u91cd\u70b9\uff09"},"BufferedReader\u7c7b\uff08\u91cd\u70b9\uff09"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-8"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.BufferedReader")," \u7c7b\u7528\u4e8e\u4ece\u8f93\u5165\u6d41\u4e2d\u8bfb\u53d6\u5355\u4e2a\u5b57\u7b26\u3001\u5b57\u7b26\u6570\u7ec4\u3001\u5b57\u7b26\u4e32")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-7"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("h3",{id:"printstream\u7c7b"},"PrintStream\u7c7b"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-9"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.PrintStream"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u66f4\u52a0\u65b9\u4fbf\u5730\u6253\u5370\u5404\u79cd\u6570\u636e\u5185\u5bb9")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-8"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("h3",{id:"printwriter\u7c7b"},"PrintWriter\u7c7b"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-10"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.PrintWriter"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u5c06\u5bf9\u8c61\u7684\u683c\u5f0f\u5316\u5f62\u5f0f\u6253\u5370\u5230\u6587\u672c\u8f93\u51fa\u6d41")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-9"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("h3",{id:"outputstreamwriter\u7c7b"},"OutputStreamWriter\u7c7b"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.OutputStreamWriter"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u5b9e\u73b0\u4ece\u5b57\u7b26\u6d41\u5230\u5b57\u8282\u6d41\u7684\u8f6c\u6362")),Object(l.b)("h3",{id:"inputstreamreader\u7c7b"},"InputStreamReader\u7c7b"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.InputStreamReader"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u5b9e\u73b0\u4ece\u5b57\u8282\u6d41\u5230\u5b57\u7b26\u6d41\u7684\u8f6c\u6362")),Object(l.b)("h3",{id:"\u5b57\u7b26\u7f16\u7801"},"\u5b57\u7b26\u7f16\u7801"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"\u7f16\u7801\u8868\u7684\u7531\u6765")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u8ba1\u7b97\u673a\u667a\u80fd\u8bc6\u522b\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u65e9\u671f\u5c31\u662f\u7535\u4fe1\u53f7\uff0c\u4e3a\u4e86\u65b9\u4fbf\u8ba1\u7b97\u673a\u53ef\u4ee5\u8bc6\u522b\u5404\u4e2a\u56fd\u5bb6\u7684\u6587\u5b57\uff0c\u5c31\u9700\u8981\u5c06\u5404\u4e2a\u56fd\u5bb6\u7684\u6587\u5b57\n\u91c7\u7528\u6570\u5b57\u7f16\u53f7\u7684\u65b9\u5f0f\u8fdb\u884c\u63cf\u8ff0\u5e76\u5efa\u7acb\u5bf9\u5e94\u7684\u5173\u7cfb\uff0c\u8be5\u8868\u5c31\u53eb\u505a\u7f16\u7801\u8868")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"\u5e38\u89c1\u7684\u7f16\u7801\u8868")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"ASCII: \u7f8e\u56fd\u6807\u51c6\u4fe1\u606f\u4ea4\u6362\u5417\uff0c\u4f7f\u7528\u4e00\u4e2a\u5b57\u8282\u7684\u4f4e7\u4f4d\u4e8c\u8fdb\u5236\u8fdb\u884c\u8868\u793a"),Object(l.b)("li",{parentName:"ul"},"ISO8859-1: \u62c9\u4e01\u7801\u8868\uff0c\u6b27\u6d32\u7801\u8868\uff0c\u4f7f\u7528\u4e00\u4e2a\u5b57\u8282\u76848\u4f4d\u4e8c\u8fdb\u5236\u8fdb\u884c\u8868\u793a"),Object(l.b)("li",{parentName:"ul"},"GB2312: \u4e2d\u56fd\u7684\u6587\u5b57\u7f16\u7801\u8868\uff0c\u6700\u591a\u4f7f\u7528\u4e24\u4e2a\u5b57\u828216\u4f4d\u4e8c\u8fdb\u5236\u8fdb\u884c\u8868\u793a"),Object(l.b)("li",{parentName:"ul"},"GBK: \u4e2d\u56fd\u7684\u4e2d\u6587\u7f16\u7801\u8868\u5347\u7ea7\uff0c\u878d\u5408\u4e86\u66f4\u591a\u7684\u4e2d\u6587\u6587\u5b57\u7b26\u53f7\uff0c\u6700\u591a\u4f7f\u7528\u4e24\u4e2a\u5b57\u828216\u4f4d\u4e8c\u8fdb\u5236\u8868\u793a"),Object(l.b)("li",{parentName:"ul"},"Unicode: \u56fd\u9645\u6807\u51c6\u7801\uff0c\u878d\u5408\u4e86\u76ee\u524d\u4eba\u7c7b\u4f7f\u7528\u7684\u6240\u6709\u5b57\u7b26\uff0c\u4e3a\u6bcf\u4e2a\u5b57\u7b26\u5206\u914d\u552f\u4e00\u7684\u5b57\u7b26\u7801\uff0c\u6240\u6709\u6587\u5b57\u90fd\u7528\u4e24\u4e2a\u5b57\u828216\u4f4d\u4e8c\u8fdb\u5236\u6765\u8868\u793a")),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"\u7f16\u7801\u7684\u53d1\u5c55")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u9762\u5411\u4f20\u8f93\u7684\u4f17\u591aUTF(UCS Transfer Format)\u6807\u51c6\u51fa\u73b0\uff0cutf-8\u5c31\u662f\u6bcf\u6b218\u4e2a\u4f4d\u4f20\u8f93\u6570\u636e\uff0c\n\u800cutf-16\u5c31\u662f\u6bcf\u6b2116\u4e2a\u4f4d\uff0c\u8fd9\u662f\u4e3a\u4f20\u8f93\u800c\u8bbe\u8ba1\u7684\u7f16\u7801\u5e76\u4f7f\u7f16\u7801\u65e0\u56fd\u754c\uff0c\u8fd9\u6837\u53ef\u4ee5\u663e\u793a\u5168\u4e16\u754c\u6240\u6709\u6587\u5316\u7684\u5b57\u7b26"),Object(l.b)("li",{parentName:"ul"},"Unicode \u53ea\u662f\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5e9e\u5927\u7684\u3001\u5168\u7403\u901a\u7528\u7684\u5b57\u7b26\u96c6\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u5b57\u7b26\u89c4\u5b9a\u4e86\u552f\u4e00\u7f3a\u7684\u7684\u7f16\u7801\uff0c\u5177\u4f53\u5b58\u50a8\u6210\u4ec0\u4e48\u6837\u7684\u5b57\u8282\u6d41\uff0c\n\u53d6\u51b3\u4e8e\u5b57\u7b26\u7f16\u7801\u65b9\u6848\uff0c\u63a8\u8350\u7684Unicode\u7f16\u7801\u662futf-8\u548cutf-16"),Object(l.b)("li",{parentName:"ul"},"utf-8: \u53d8\u957f\u7684\u7f16\u7801\u65b9\u5f0f\uff0c\u53ef\u75281~4\u4e2a\u5b57\u8282\u6765\u8868\u793a\u4e00\u4e2a\u5b57\u7b26")),Object(l.b)("h3",{id:"dataoutputstream\u7c7b\uff08\u4e86\u89e3\uff09"},"DataOutputStream\u7c7b\uff08\u4e86\u89e3\uff09"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-11"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.DataOutputStream"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u4ee5\u9002\u5f53\u7684\u65b9\u5f0f\u5c06\u57fa\u672c\u6570\u636e\u7c7b\u578b\u5199\u5165\u8f93\u51fa\u6d41\u4e2d")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-10"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DataOutputStream(OutputStream out)")," \u6839\u636e\u53c2\u6570\u6307\u5b9a\u7684\u5f15\u7528\u6784\u9020\uff0cOutputStream\u662f\u62bd\u8c61\u7c7b\uff0c\u5b9e\u53c2\u9700\u8981\u4f20\u9012\u5b50\u7c7b\u5bf9\u8c61"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void writeInt(int v)")," \u5c06\u53c2\u6570\u6307\u5b9a\u7684\u6574\u6570\u4e00\u6b21\u6027\u5199\u5165\u8f93\u51fa\u6d41\uff0c\u4f18\u5148\u5199\u5165\u9ad8\u5b57\u8282"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void close()"))),Object(l.b)("h3",{id:"datainputstream\u7c7b\uff08\u4e86\u89e3\uff09"},"DataInputStream\u7c7b\uff08\u4e86\u89e3\uff09"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-12"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.DataInputStream"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u4ece\u8f93\u5165\u6d41\u4e2d\u8bfb\u53d6\u57fa\u672c\u6570\u636e\u7c7b\u578b\u7684\u6570\u636e")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-11"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"DataInputStream()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int readInt()")," \u4ece\u8f93\u5165\u6d41\u4e2d\u4e00\u6b21\u6027\u8bfb\u53d6\u4e00\u4e2a\u6574\u6570\u6570\u636e\u5e76\u8fd4\u56de"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void close()"))),Object(l.b)("h3",{id:"objectoutputstream\u7c7b"},"ObjectOutputStream\u7c7b"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-13"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.ObjectOutputStream"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u5c06\u4e00\u4e2a\u5bf9\u8c61\u7684\u6240\u6709\u5185\u5bb9\u6574\u4f53\u5199\u5165\u5230\u8f93\u51fa\u6d41\u4e2d"),Object(l.b)("li",{parentName:"ul"},"\u53ea\u80fd\u5c06\u652f\u6301",Object(l.b)("inlineCode",{parentName:"li"},"java.io.Serializable"),"\u63a5\u53e3\u7684\u5bf9\u8c61\u5199\u5165\u6d41\u4e2d"),Object(l.b)("li",{parentName:"ul"},"\u7c7b\u901a\u8fc7\u5b9e\u73b0",Object(l.b)("inlineCode",{parentName:"li"},"java.io.Serializable"),"\u63a5\u53e3\u4ee5\u542f\u7528\u5176\u5e8f\u5217\u5316\u529f\u80fd"),Object(l.b)("li",{parentName:"ul"},"\u6240\u8c13\u5e8f\u5217\u5316\u4e3b\u8981\u6307\u5c06\u4e00\u4e2a\u5bf9\u8c61\u9700\u8981\u5b58\u50a8\u7684\u76f8\u5173\u4fe1\u606f\u6709\u6548\u7ec4\u7ec7\u6210\u5b57\u8282\u5e8f\u5217\u7684\u8f6c\u5316\u8fc7\u7a0b")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-12"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ObjectOutputStream(OutputStream out)")," \u6839\u636e\u53c2\u6570\u6307\u5b9a\u7684\u5f15\u7528\u6765\u6784\u9020"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void writeObject(Object obj)")," \u5c06\u53c2\u6570\u6307\u5b9a\u7684\u5bf9\u8c61\u6574\u4f53\u5199\u5165\u5230\u8f93\u51fa\u6d41"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void close()"))),Object(l.b)("h3",{id:"objectinputstream\u7c7b"},"ObjectInputStream\u7c7b"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-14"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.ObjectInputStream"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u4ece\u8f93\u5165\u6d41\u4e2d\u4e00\u6b21\u6027\u5c06\u5bf9\u8c61\u6574\u4f53\u8bfb\u53d6\u51fa\u6765"),Object(l.b)("li",{parentName:"ul"},"\u6240\u8c13\u53cd\u5e8f\u5217\u5316\u4e3b\u8981\u6307\u5c06\u6709\u6548\u7ec4\u7ec7\u7684\u5b57\u8282\u5e8f\u5217\u6062\u590d\u4e3a\u4e00\u4e2a\u5bf9\u8c61\u53ca\u76f8\u5173\u4fe1\u606f\u7684\u8f6c\u5316\u8fc7\u7a0b")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-13"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"ObjectInputStream(InputStream in)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"Object readObject()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void close()"))),Object(l.b)("h4",{id:"\u5e8f\u5217\u5316\u7248\u672c\u53f7"},"\u5e8f\u5217\u5316\u7248\u672c\u53f7"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u5e8f\u5217\u5316\u673a\u5236\u662f\u901a\u8fc7\u5728\u8fd0\u884c\u65f6\u5224\u65ad\u7c7b\u7684serialVersionUID\u6765\u9a8c\u8bc1\u7248\u672c\u4e00\u81f4\u6027\u7684\u3002\u5728\u8fdb\u884c\u53cd\u5e8f\u5217\u5316\u65f6\uff0cJVM\u4f1a\u628a\u4f20\u6765\u7684\n\u5b57\u8282\u6d41\u4e2d\u7684serialVersionUID\u4e0e\u672c\u5730\u76f8\u5e94\u5b9e\u4f53\u7c7b\u7684UID\u8fdb\u884c\u6bd4\u8f83\uff0c\u5982\u679c\u76f8\u540c\u5219\u8ba4\u4e3a\u662f\u4e00\u81f4\u7684\uff0c\u53ef\u4ee5\u8fdb\u884c\u53cd\u5e8f\u5217\u5316\uff0c\n\u5426\u5219\u5c31\u4f1a\u51fa\u73b0\u5e8f\u5217\u5316\u7248\u672c\u4e0d\u4e00\u81f4\u7684\u5f02\u5e38",Object(l.b)("inlineCode",{parentName:"li"},"InvalidCastException"))),Object(l.b)("h4",{id:"transient\u5173\u952e\u5b57"},"transient\u5173\u952e\u5b57"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"transient"),"\u662fjava\u8bed\u8a00\u7684\u5173\u952e\u5b57\uff0c\u7528\u6765\u8868\u793a\u4e00\u4e2a\u57df\u4e0d\u662f\u8be5\u5bf9\u8c61\u4e32\u884c\u5316\u7684\u4e00\u90e8\u5206\uff0c\u5f53\u4e00\u4e2a\u5bf9\u8c61\u88ab\u4e32\u884c\u5316\u7684\u65f6\u5019\uff0c\n",Object(l.b)("inlineCode",{parentName:"li"},"transient"),"\u578b\u53d8\u91cf\u7684\u503c\u4e0d\u5305\u62ec\u5728\u4e32\u884c\u5316\u7684\u8868\u793a\u4e2d\uff0c\u7136\u800c\u975e",Object(l.b)("inlineCode",{parentName:"li"},"transient"),"\u578b\u7684\u53d8\u91cf\u662f\u88ab\u5305\u62ec\u8fdb\u53bb\u7684\u3002")),Object(l.b)("h3",{id:"randomaccessfile\u7c7b"},"RandomAccessFile\u7c7b"),Object(l.b)("h4",{id:"\u57fa\u672c\u6982\u5ff5-15"},"\u57fa\u672c\u6982\u5ff5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"java.io.RandomAccessFile"),"\u7c7b\u4e3b\u8981\u7528\u4e8e\u5bf9\u968f\u673a\u8bbf\u95ee\u6587\u4ef6\u7684\u8bfb\u5199\u64cd\u4f5c")),Object(l.b)("h4",{id:"\u5e38\u7528\u65b9\u6cd5-14"},"\u5e38\u7528\u65b9\u6cd5"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"RandomAccessFile(String name, String mode)")," \u6839\u636e\u53c2\u6570\u6307\u5b9a\u7684\u540d\u79f0\u548c\u6a21\u5f0f\u6784\u9020\u5bf9\u8c61",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"r: \u53ea\u8bfb"),Object(l.b)("li",{parentName:"ul"},"rw: \u6253\u5f00\u4ee5\u4fbf\u8bfb\u5199"),Object(l.b)("li",{parentName:"ul"},"rwd: \u6253\u5f00\u4ee5\u4fbf\u8bfb\u5199\uff0c\u540c\u6b65\u6587\u4ef6\u5185\u5bb9\u7684\u66f4\u65b0"),Object(l.b)("li",{parentName:"ul"},"rws: \u6253\u5f00\u4ee5\u4fbf\u8bfb\u5199\uff0c\u540c\u6b65\u6587\u4ef6\u5185\u5bb9\u548c\u5143\u6570\u636e\u7684\u66f4\u65b0"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"int read()")," \u8bfb\u53d6\u5355\u4e2a\u5b57\u8282\u7684\u6570\u636e"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void seek(long pos)")," \u7528\u4e8e\u8bbe\u7f6e\u6b64\u6587\u4ef6\u5f00\u5934\u6d4b\u91cf\u7684\u6587\u4ef6\u6307\u9488\u504f\u79fb\u91cf"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"void close()"))))}p.isMDXComponent=!0},161:function(e,t,a){"use strict";a(180);var b=a(0),n=a.n(b),l=a(181),i=a.n(l);i.a.initialize({startOnLoad:!0});t.a=function(e){var t=e.chart,a=e.style,l=void 0===a?{}:a;return Object(b.useEffect)((function(){i.a.contentLoaded()}),[]),n.a.createElement("div",{className:"mermaid",style:Object.assign({},l)},t)}},186:function(e,t,a){var b={"./locale":160,"./locale.js":160};function n(e){var t=l(e);return a(t)}function l(e){if(!a.o(b,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return b[e]}n.keys=function(){return Object.keys(b)},n.resolve=l,e.exports=n,n.id=186},187:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var b=a(0),n=a.n(b);const l=({children:e,color:t,fontColor:a="#fff"})=>n.a.createElement("span",{style:{backgroundColor:t,borderRadius:"2px",color:a,padding:"2px"}},e);l.isMDXComponent=!0}}]);