(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{449:function(s,a,t){"use strict";t.r(a);var n=t(16),l=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("call方法是javascript中很常用的一个方法，其定义是：")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("call方法调用一个函数，其具有一个指定的this值和分别地提供的参数")])]),s._v(" "),t("p",[s._v("简单来说，call方法可以在指定函数this的情况下调用这个函数，其余的参数和返回值部分不受影响。举个栗子：")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" a = "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(";\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" obj = {\n  "),t("span",{staticClass:"hljs-attr"},[s._v("a")]),s._v(": "),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("\n}\n"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("fun")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("name, age")]),s._v(")")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".a);\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n    "),t("span",{staticClass:"hljs-attr"},[s._v("name")]),s._v(": name,\n    "),t("span",{staticClass:"hljs-attr"},[s._v("age")]),s._v(": age\n  }\n}\nfun("),t("span",{staticClass:"hljs-string"},[s._v('"zhangsan"')]),s._v(","),t("span",{staticClass:"hljs-number"},[s._v("18")]),s._v(");  "),t("span",{staticClass:"hljs-comment"},[s._v('//打印1，返回 {name:"zhangsan", age:18}')]),s._v("\nfun.call(obj, "),t("span",{staticClass:"hljs-string"},[s._v('"zhangsan"')]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("18")]),s._v("); "),t("span",{staticClass:"hljs-comment"},[s._v('//打印2，返回 {name:"zhangsan", age:18}')]),s._v("\n")])])]),t("p",[s._v("总结一下：")]),s._v(" "),t("ul",[t("li",[s._v("函数执行了")]),s._v(" "),t("li",[s._v("this指向第一个参数")]),s._v(" "),t("li",[s._v("其他的参数照常传递")]),s._v(" "),t("li",[s._v("能有返回值")]),s._v(" "),t("li",[s._v("补充一点，第一个参数为null时，this默认执行window")])]),s._v(" "),t("p",[s._v("下面我们就根据上面的特点，一步一步来模拟实现call")]),s._v(" "),t("p",[s._v("还是以上面的函数 "),t("code",[s._v("fun")]),s._v(" 和对象 "),t("code",[s._v("obj")]),s._v(" 为例")]),s._v(" "),t("h2",{attrs:{id:"第一版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一版"}},[s._v("#")]),s._v(" 第一版")]),s._v(" "),t("p",[s._v("先来实现前两个功能，想指定函数的this，我们可以通过对象调用的方式，也就是"),t("code",[s._v("obj.fun()")]),s._v(",这时候fun中的this就指向obj了，我们来实现第一版代码：")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".prototype.myCall = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("context")]),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-comment"},[s._v("//首先获取函数fun，这里可以通过this来获取,obj也就是参数context啦")]),s._v("\n  context.fn = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(";\n  "),t("span",{staticClass:"hljs-comment"},[s._v("//将fn设为obj的一个方法")]),s._v("\n  context.fn();\n  "),t("span",{staticClass:"hljs-comment"},[s._v("//莫名其妙给obj添加了一个方法总归是不好的，调用完成之后记得删掉这个方法")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("delete")]),s._v(" context.fn;\n}\n")])])]),t("p",[s._v("想通过obj.fun()的方式调用，把fun设置为obj的一个方法就好啦，记得调用之后删除。下面我们来测试一下")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[s._v("fun.myCall(context);  "),t("span",{staticClass:"hljs-comment"},[s._v("//打印2")]),s._v("\n")])])]),t("p",[s._v("看到打印出2的时候还是很高兴的，终于走出第一步了，但是别高兴的太早了，下面还有好几步。")]),s._v(" "),t("h2",{attrs:{id:"第二版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二版"}},[s._v("#")]),s._v(" 第二版")]),s._v(" "),t("p",[s._v("再来解决传参数和返回值的问题，参数是不固定的，但是我们有"),t("code",[s._v("arguments")]),s._v("对象，可以通过"),t("code",[s._v("arguments")]),s._v("获取参数，然后依次传给fun,来看代码")]),s._v(" "),t("blockquote",[t("p",[s._v("对"),t("code",[s._v("arguments")]),s._v("对象不熟悉的可以另外查资料学习，这里就不展开啦。")])]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".prototype.myCall="),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("context")]),s._v(")")]),s._v("{\n  context.fn = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(";\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" args = [];  "),t("span",{staticClass:"hljs-comment"},[s._v("//用来存储参数")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v("("),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" i = "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(",length = "),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(".length;i < length;i++){\n    args.push("),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v("[i]);\n  }\n  "),t("span",{staticClass:"hljs-comment"},[s._v("//注意arguments的第一个参数是指定this的对象，从第二个参数开始才是传给fun的函数，所以从1开始循环")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" result = context.fn(...args); "),t("span",{staticClass:"hljs-comment"},[s._v("//接收返回值")]),s._v("\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("delete")]),s._v(" context.fn;\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" result;\n}\n")])])]),t("p",[s._v("调用试试：")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" result = fun.myCall(obj, "),t("span",{staticClass:"hljs-string"},[s._v('"zhangsan"')]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("18")]),s._v(");  "),t("span",{staticClass:"hljs-comment"},[s._v("//打印2")]),s._v("\n"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(result);  "),t("span",{staticClass:"hljs-comment"},[s._v('//打印{name:"zhangsan", age:18}')]),s._v("\n")])])]),t("p",[s._v("又实现了，但是这里有个问题，在myCall中调用fn的时候，我们给函数穿参数的方式使用的是es6的展开运算符... ，这里考虑到兼容性，我们尽量使用老一点的方式，这里推荐使用eval函数，此时代码是这样的")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".prototype.myCall = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("context")]),s._v(") ")]),s._v("{\n  context.fn = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(";\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" args = [];\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v("("),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" i = "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(",length = "),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(".length;i < length;i++){\n    args.push("),t("span",{staticClass:"hljs-string"},[s._v("'arguments['")]),s._v(" + i + "),t("span",{staticClass:"hljs-string"},[s._v("']'")]),s._v(");\n  }\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" result = "),t("span",{staticClass:"hljs-built_in"},[s._v("eval")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'context.fn('")]),s._v("+args+"),t("span",{staticClass:"hljs-string"},[s._v("')'")]),s._v(");\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("delete")]),s._v(" context.fn;\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" result;\n}\n")])])]),t("h2",{attrs:{id:"最终版"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#最终版"}},[s._v("#")]),s._v(" 最终版")]),s._v(" "),t("p",[s._v("还剩最后一个个功能，第一个参数为null时，this默认指向window，这个就很好实现啦，只需要判断一下context的值，为null时，让它默认为window，来看代码")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".prototype.myCall = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("context")]),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" context = context || "),t("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v("; \n  context.fn = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(";\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" args = [];\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v("("),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" i = "),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(",length = "),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v(".length;i < length;i++){\n    args.push("),t("span",{staticClass:"hljs-built_in"},[s._v("arguments")]),s._v("[i]);\n  }\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" result = context.fn(...args);\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("delete")]),s._v(" context.fn;\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" result;\n}\n")])])]),t("p",[s._v("调用一下：")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" result = fun.myCall(context,"),t("span",{staticClass:"hljs-string"},[s._v('"zhangsan"')]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("18")]),s._v(");  "),t("span",{staticClass:"hljs-comment"},[s._v("//打印2")]),s._v("\n"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(result);  "),t("span",{staticClass:"hljs-comment"},[s._v('//打印{name:"zhangsan",age:18}')]),s._v("\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" result = fun.myCall("),t("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v(","),t("span",{staticClass:"hljs-string"},[s._v('"zhangsan"')]),s._v(", "),t("span",{staticClass:"hljs-number"},[s._v("18")]),s._v(");  "),t("span",{staticClass:"hljs-comment"},[s._v("//打印1")]),s._v("\n"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(result);  "),t("span",{staticClass:"hljs-comment"},[s._v('//打印{name:"zhangsan",age:18}')]),s._v("\n")])])]),t("p",[s._v("搞定！")]),s._v(" "),t("h2",{attrs:{id:"apply"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apply"}},[s._v("#")]),s._v(" apply")]),s._v(" "),t("p",[s._v("apply和call功能一样，只是call传给函数的参数使用的是列表的形式，使用逗号隔开。而apply的第二个参数是参数数组，直接把参数放在数组里。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-comment"},[s._v("//call")]),s._v("\nfun.call(obj,arg1,arg2,arg3......)\n"),t("span",{staticClass:"hljs-comment"},[s._v("//apply")]),s._v("\nfun.apply(obj,[arg1,arg2,arg3......])\n")])])]),t("p",[s._v("模拟实现apply的思路和call一样，这里就不再分析一遍了，大家可以仿照思路自己试试实现，我直接贴出代码")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-built_in"},[s._v("Function")]),s._v(".prototype.apply = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("context, arr")]),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" context = context || "),t("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(";\n  context.fn = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(";\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" args = [];\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" i = "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", len = arr.length; i < len; i++) {\n    args.push("),t("span",{staticClass:"hljs-string"},[s._v("'arr['")]),s._v(" + i + "),t("span",{staticClass:"hljs-string"},[s._v("']'")]),s._v(");\n  }\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" result = "),t("span",{staticClass:"hljs-built_in"},[s._v("eval")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v("'context.fn('")]),s._v(" + args + "),t("span",{staticClass:"hljs-string"},[s._v("')'")]),s._v(")\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("delete")]),s._v(" context.fn\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" result;\n}\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);