(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{410:function(s,a,t){"use strict";t.r(a);var n=t(16),l=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("定义")]),s._v(" "),t("p",[s._v("代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问")])]),s._v(" "),t("h2",{attrs:{id:"案例：小明给女神送花"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例：小明给女神送花"}},[s._v("#")]),s._v(" 案例：小明给女神送花")]),s._v(" "),t("p",[s._v("小明遇到了女神A，决定给她送花表白。小明和A有一个共同的朋友B，于是内向的小明让B来代替自己送花。\n假设当A在心情好的时候收到花，小明表白成功的几率有60%，而当A在心情差的时候收到花，小明表白的成功率无限趋近于0。\n小明跟A刚刚认识两天，还无法辨别A什么时候心情好。如果不合时宜地把花送给A，花被直接扔掉的可能性很大，这束花可是小明吃了7天泡面换来的。\n但是A的朋友B却很了解A，所以小明只管把花交给B，B会监听A的心情变化，然后选择A心情好的时候把花转交给A。")]),s._v(" "),t("p",[s._v("代码如下:")]),s._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",[t("code",{staticClass:"language-JavaScript"},[t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" Flower = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{}\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" xiaoming = {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("sendFlower")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("target")]),s._v(") ")]),s._v("{\n    target.receiveFlower(); \n  }\n}\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" B = {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("receiveFlower")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n    A.listenGoodMood("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ \n      "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" flower = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Flower(); \n      A.receiveFlower(flower);\n    }); \n  }\n}\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" A = {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("receiveFlower")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("flower")]),s._v(")")]),s._v("{\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log( "),t("span",{staticClass:"hljs-string"},[s._v("'收到花 '")]),s._v(" + flower ); \n\t},\n\t\n  "),t("span",{staticClass:"hljs-attr"},[s._v("listenGoodMood")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("fn")]),s._v(")")]),s._v("{\n    setTimeout("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{ "),t("span",{staticClass:"hljs-comment"},[s._v("// 假设 10 秒之后 A 的心情变好")]),s._v("\n      fn(); \n    }, "),t("span",{staticClass:"hljs-number"},[s._v("10000")]),s._v(" );\n  } \n}\n\nxiaoming.sendFlower( B );\n")])])]),t("h3",{attrs:{id:"保护代理和虚拟代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#保护代理和虚拟代理"}},[s._v("#")]),s._v(" 保护代理和虚拟代理")]),s._v(" "),t("p",[s._v("上面的例子可以引出两种代理模式:")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("保护代理")]),s._v(" "),t("p",[s._v("代理B可以帮助A过滤掉一些请求，比如送花的人中年龄太大的或者没有宝马的，这种请求就可以直接在代理B处被拒绝掉。")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("虚拟代理")]),s._v(" "),t("p",[s._v("假设现实中的花价格不菲，导致在程序世界里，"),t("code",[s._v("new Flower")]),s._v(" 也是一个代价昂贵的操作，那么我们可以把 "),t("code",[s._v("new Flower")]),s._v(" 的操作交给代理 B 去执行，代理 B 会选择在 A 心情好时再执行 "),t("code",[s._v("new Flower")])])]),s._v(" "),t("h2",{attrs:{id:"案例：虚拟代理实现图片预加载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例：虚拟代理实现图片预加载"}},[s._v("#")]),s._v(" 案例：虚拟代理实现图片预加载")]),s._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",[t("code",{staticClass:"language-JavaScript"},[t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" myImage = ("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" imgNode = "),t("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".createElement("),t("span",{staticClass:"hljs-string"},[s._v("'img'")]),s._v(");     \n  "),t("span",{staticClass:"hljs-built_in"},[s._v("document")]),s._v(".body.appendChild(imgNode);\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("setSrc")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v(" src ")]),s._v(")")]),s._v("{\n      imgNode.src = src; \n    }\n  } \n})();\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" proxyImage = ("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ \n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" img = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Image(); \n  img.onload = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n    myImage.setSrc("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".src); \n  }\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n\t\t"),t("span",{staticClass:"hljs-attr"},[s._v("setSrc")]),s._v(": "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("src")]),s._v(")")]),s._v("{\n\t\t\tmyImage.setSrc("),t("span",{staticClass:"hljs-string"},[s._v("'file:// /C:/Users/svenzeng/Desktop/loading.gif'")]),s._v(");\n\t\t\timg.src = src;  \n\t\t}\n  } \n})();\nproxyImage.setSrc("),t("span",{staticClass:"hljs-string"},[s._v("'http://imgcache.qq.com/music/photo/k/000GGDys0yA0Nk.jpg'")]),s._v(");\n")])])]),t("p",[s._v("通过proxyImage间接的访问MyImage，proxyImage控制了客户对MyImage的访问，并且在此过程中加入了一些额外的操作，图片被真正加载好之前，页面中会出现占位的loading图，提示用户图片正在加载。")]),s._v(" "),t("h2",{attrs:{id:"代理和本体接口接口的一致性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代理和本体接口接口的一致性"}},[s._v("#")]),s._v(" 代理和本体接口接口的一致性")]),s._v(" "),t("ul",[t("li",[s._v("用户可以放心地请求代理，他只关心是否能得到想要的结果")]),s._v(" "),t("li",[s._v("在任何使用本体的地方都可以替换成使用代理")])]),s._v(" "),t("h2",{attrs:{id:"缓存代理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存代理"}},[s._v("#")]),s._v(" 缓存代理")]),s._v(" "),t("p",[s._v("计算乘积案例")]),s._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",[t("code",{staticClass:"language-JavaScript"},[t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" mult = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"开始计算。。。"')]),s._v(");\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" a = "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(";\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" i = "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", l = "),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(".length; i < l; i++) {\n    a *= "),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v("[i];\n  }\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" a;\n}\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" proxyMult = ("),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" cache = {};\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" args = "),t("span",{staticClass:"hljs-built_in"},[s._v("Array")]),s._v(".prototype.join.call("),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(", "),t("span",{staticClass:"hljs-string"},[s._v('","')]),s._v(");\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (!cache[args]) {\n      cache[args] = mult.apply("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(", "),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(");\n    }\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" cache[args];\n  }\n})();\n\n"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(proxyMult("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("));\n"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(proxyMult("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("4")]),s._v("));\n")])])]),t("p",[s._v("当我们第二次调用"),t("code",[s._v("proxyMult(1, 2, 3, 4)")]),s._v("的时候，本地mult函数并没有被计算，proxyMult直接返回了之前缓存好的计算结果。"),t("br"),s._v("\n通过增加缓存代理的方式，mult函数可以继续专注于自身的职责--计算乘积，缓存的功能是由代理对象实现的。")]),s._v(" "),t("h2",{attrs:{id:"其他代理模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其他代理模式"}},[s._v("#")]),s._v(" 其他代理模式")]),s._v(" "),t("ul",[t("li",[s._v("防火墙代理：控制网络资源的访问，保护主题不让“坏人”接近。")]),s._v(" "),t("li",[s._v("远程代理：为一个对象在不同的地址空间提供局部代表")]),s._v(" "),t("li",[s._v("保护代理：用于对象应该有不同访问权限的情况")]),s._v(" "),t("li",[s._v("智能引用代理：取代了简单的指针，它在访问对象时执行一些附加操作，比如计算一个对象被引用的次数。")]),s._v(" "),t("li",[s._v("写时复制代理：通常用于复制一个庞大对象的情况。写时复制代理延迟了复制的过程，当对象被真正修改时，才对它进行复制操作。")])]),s._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("代理模式包括许多小分类，在JavaScript开发中最常用的是虚拟代理和缓存代理。")]),s._v(" "),t("h2",{attrs:{id:"心得体会"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#心得体会"}},[s._v("#")]),s._v(" 心得体会")]),s._v(" "),t("p",[s._v("代理其实就是为对象添加新的行为，这些新的行为存在于代理对象中。被代理的对象只需要关注自身的职责。"),t("br"),s._v("\n这种模式可以让代理更好的实践“单一职责原则”")])])}),[],!1,null,null,null);a.default=l.exports}}]);