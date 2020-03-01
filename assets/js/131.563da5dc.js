(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{328:function(s,a,t){"use strict";t.r(a);var n=t(16),l=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("当javascript引擎遇到可执行代码当时候，一个新的执行上下文就会被创建。一个执行上下文的生命周期可以分为两个阶段。\n创建阶段：创建阶段中，执行上下文会创建变量对象，建立作用域链，确定this的指向。\n执行阶段：在代码执行阶段中，会完成变量的赋值，函数的引用，执行代码。\n"),t("img",{attrs:{src:"/images/javascript-run-again4/1.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"变量对象（variable-object）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#变量对象（variable-object）"}},[s._v("#")]),s._v(" 变量对象（Variable Object）")]),s._v(" "),t("p",[s._v("变量对象中存储了在上下文中定义的变量和函数声明。\n对于全局上下文，变量对象就是全局对象，也就是javascript中的window对象。关于window对象就不多介绍了，很多同学都掌握的比较清楚。"),t("br"),s._v("\n对于函数上下文，变量对象的创建可以分为以下几步："),t("br")]),s._v(" "),t("ol",[t("li",[s._v("建立arguments对象，其中保存着实参和length属性（实参的个数）。检查函数的形参，形参作为变量对象的属性，实参作为对应的属性值，如果没有对应的实参，则属性值为undefined")]),s._v(" "),t("li",[s._v("检查当前上下文的函数声明。函数名作为变量对象的一个属性，函数对象作为对应的属性值。如果已经存在相同的属性名，则替换掉该属性值。")]),s._v(" "),t("li",[s._v("检查当前上下文的变量声明。变量名作为变量对象的一个属性，undefined作为对应的属性值。如果已经存在相同的属性名，则跳过。")])]),s._v(" "),t("p",[s._v("这里需要注意的点是，当有同名的函数时会进行替换，有同名的变量时会直接跳过,这样做是为了防止变量把同名的函数覆盖成undefined。来看个例子：")]),s._v(" "),t("div",{staticClass:"language-javaScript extra-class"},[t("pre",[t("code",{staticClass:"language-javaScript"},[s._v("\t"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("foo")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("a,b")]),s._v(")")]),s._v("{\n    \t"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(fun);    "),t("span",{staticClass:"hljs-comment"},[s._v("//fun1(){console.log(a)}")]),s._v("\n    \t"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" a = "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(";\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" fun = a;\n    \t"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("fun")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n    \t\t"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(a);\n    \t}\n    \t"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(fun);   "),t("span",{staticClass:"hljs-comment"},[s._v("//3")]),s._v("\n    }\n    foo("),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(");\n\t\n")])])]),t("p",[s._v("全局上下文就不分析了，我们直接看函数foo中的变量对象，假设变量对象\n"),t("code",[s._v("var VO = { }")]),s._v(",我们按照上面的步骤一步一步来完善这个变量对象。"),t("br"),s._v("\n1.建立arguments对象，其中保存着实参和length属性（实参的个数）。检查函数的形 参，形参作为变量对象的属性，实参作为对应的属性值，如果没有对应的实参，则属性值为 undefined")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[s._v("VO={\n\t"),t("span",{staticClass:"hljs-attr"},[s._v("arguments")]),s._v(":{\n       "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(":"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("，\n       "),t("span",{staticClass:"hljs-attr"},[s._v("length")]),s._v(":"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("a")]),s._v(":"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(",\n    "),t("span",{staticClass:"hljs-attr"},[s._v("b")]),s._v(":"),t("span",{staticClass:"hljs-literal"},[s._v("undefined")]),s._v("\n}\n")])])]),t("p",[s._v("第一步中，函数有两个形参，一个实参，所以变量对象是上面的样子。"),t("br"),s._v("\n2.检查当前上下文的函数声明。函数名作为变量对象的一个属性，函数对象作为对应的属性值。如果已经存在相同的属性名，则替换掉该属性值。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[s._v("VO={\n\t"),t("span",{staticClass:"hljs-attr"},[s._v("arguments")]),s._v(":{\n       "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(":"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("，\n       "),t("span",{staticClass:"hljs-attr"},[s._v("length")]),s._v(":"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("a")]),s._v(":"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(",\n    "),t("span",{staticClass:"hljs-attr"},[s._v("b")]),s._v(":"),t("span",{staticClass:"hljs-literal"},[s._v("undefined")]),s._v(",\n    "),t("span",{staticClass:"hljs-attr"},[s._v("fun")]),s._v(":"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(a)}\n}\n")])])]),t("p",[s._v("第二步中，当前上下文中声明了一个函数fun，于是新增一个属性，名称是fun，值是对应的函数引用 "),t("br"),s._v("\n3.检查当前上下文的变量声明。变量名作为变量对象的一个属性，undefined作为对应的属性值。如果已经存在相同的属性名，则跳过。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[s._v("VO={\n\t"),t("span",{staticClass:"hljs-attr"},[s._v("arguments")]),s._v(":{\n       "),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(":"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v("，\n       "),t("span",{staticClass:"hljs-attr"},[s._v("length")]),s._v(":"),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("\n    },\n    "),t("span",{staticClass:"hljs-attr"},[s._v("a")]),s._v(":"),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(",\n    "),t("span",{staticClass:"hljs-attr"},[s._v("b")]),s._v(":"),t("span",{staticClass:"hljs-literal"},[s._v("undefined")]),s._v(",\n    "),t("span",{staticClass:"hljs-attr"},[s._v("fun")]),s._v(":"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(a)}\n}\n")])])]),t("p",[s._v("第三步中，首先声明了一个变量a，但是这时候AO中已经有属性a了，于是跳过。又声明了一个变量fun，同样AO中已经有属性fun了，于是跳过。所以这时候第三步和第二部的AO看起来一样。此时的带代码可以看成下面的样子："),t("br")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[s._v("\t"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("foo")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("a,b")]),s._v(")")]),s._v("{\n    \t"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("fun")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n    \t\t"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(a);\n    \t}\n        "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" a;\n    \t"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(fun);    "),t("span",{staticClass:"hljs-comment"},[s._v("//fun1(){console.log(a)}")]),s._v("\n    \ta = "),t("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(";\n        fun = a;\n    \t"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(fun);   "),t("span",{staticClass:"hljs-comment"},[s._v("//3")]),s._v("\n    }\n    foo("),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(");\n")])])]),t("p",[s._v("以上都是变量对象的创建阶段，接下来我们看看代码执行阶段，在执行阶段，代码会依次执行。我们继续分析："),t("br"),s._v("\n首先是打印"),t("code",[s._v("console.log(fun)")]),s._v("，这时候VO中的的fun是"),t("code",[s._v("function(){console.log(a)}")]),s._v(",所以打印出来的是这个函数。下一句"),t("code",[s._v("a = 3")]),s._v("，这时VO中的a重新赋值为3。下一句"),t("code",[s._v("fun = a")]),s._v("，这时VO中的fun重新赋值为3。注意这个是代码执行阶段，并不像创建阶段那样会跳过。下一句"),t("code",[s._v("console.log(fun)")]),s._v(",这是的fun已经赋值为3了，所以打印出的是3。"),t("br")]),s._v(" "),t("h2",{attrs:{id:"活动对象（activation-object）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#活动对象（activation-object）"}},[s._v("#")]),s._v(" 活动对象（activation object）")]),s._v(" "),t("p",[s._v("活动对象和变量对象是同一个东西，当代码执行进入到一个执行上下文中时，这个执行上下文中的变量对象就会被激活，这个时候被激活的变量对象就被称为活动对象。只有活动对象上的各种属性才能被访问。"),t("br")]),s._v(" "),t("p",[s._v("下面我们来对变量对象做一个总结：")]),s._v(" "),t("ol",[t("li",[s._v("全局上下文的变量对象是全局对象")]),s._v(" "),t("li",[s._v("函数上下文的变量对象在激活时又叫活动对象")]),s._v(" "),t("li",[s._v("活动对象中包含arguments，形参，函数声明，变量声明等属性，属性值为初始值")]),s._v(" "),t("li",[s._v("在代码正式开始执行时，会修改活动对象中的值")])])])}),[],!1,null,null,null);a.default=l.exports}}]);