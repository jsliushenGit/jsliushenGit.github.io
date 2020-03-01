(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{351:function(s,a,t){"use strict";t.r(a);var n=t(16),l=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("title: 数据结构javascript描述：栈\nauthor: jsliushen\ntags:")]),s._v(" "),t("ul",[t("li",[s._v("数据结构\ncategories:")]),s._v(" "),t("li",[s._v("technology\ndate: 2017-11-18 23:43:00")])]),s._v(" "),t("hr"),s._v(" "),t("h2",{attrs:{id:"栈是一种遵循-后进先出-原则的有序集合。大家可以用羽毛球筒类比一下，假设一个羽毛球筒里按顺序放了5个羽毛球，编号为1，2，3，4，5-1号羽毛球在最底下，5号羽毛球在最上面，很明显1号球是最先放进筒中的。现在我想拿出4号球，那么我只能先拿出5号球，再才能够拿到4号球，这就所谓的后进先出。5号球是最后进入球筒里的，同样，也是最先被拿出来的。javascript实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#栈是一种遵循-后进先出-原则的有序集合。大家可以用羽毛球筒类比一下，假设一个羽毛球筒里按顺序放了5个羽毛球，编号为1，2，3，4，5-1号羽毛球在最底下，5号羽毛球在最上面，很明显1号球是最先放进筒中的。现在我想拿出4号球，那么我只能先拿出5号球，再才能够拿到4号球，这就所谓的后进先出。5号球是最后进入球筒里的，同样，也是最先被拿出来的。javascript实现"}},[s._v("#")]),s._v(" 栈是一种遵循“后进先出”原则的有序集合。大家可以用羽毛球筒类比一下，假设一个羽毛球筒里按顺序放了5个羽毛球，编号为1，2，3，4，5,1号羽毛球在最底下，5号羽毛球在最上面，很明显1号球是最先放进筒中的。现在我想拿出4号球，那么我只能先拿出5号球，再才能够拿到4号球，这就所谓的后进先出。5号球是最后进入球筒里的，同样，也是最先被拿出来的。\njavascript实现")]),s._v(" "),t("p",[s._v("我们使用数组来模拟栈")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Stack")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" stack=[];\n}\n")])])]),t("p",[s._v("通常一个栈需要有以下方法：")]),s._v(" "),t("ul",[t("li",[s._v("push(): 添加元素到栈顶")]),s._v(" "),t("li",[s._v("pop(): 移除并返回栈顶元素")]),s._v(" "),t("li",[s._v("peek(): 返回栈顶元素")]),s._v(" "),t("li",[s._v("isEmpty: 检查栈是否为空，为空则返回true")]),s._v(" "),t("li",[s._v("clear: 移除栈中所有元素")]),s._v(" "),t("li",[s._v("size: 返回栈中元素个数。")]),s._v(" "),t("li",[s._v("print: 以字符串显示栈中所有内容")])]),s._v(" "),t("p",[s._v("一个一个实现")]),s._v(" "),t("h4",{attrs:{id:"push"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push"}},[s._v("#")]),s._v(" push")]),s._v(" "),t("p",[s._v("向栈顶添加元素，可以直接使用数组的push方法，每次添加的元素都在栈顶，也就是数组的最后一位。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Stack")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" stack=[];\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".push="),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"},[s._v("value")]),s._v(")")]),s._v("{\n    \tstack.push(value);\n    }\n}\n")])])]),t("h4",{attrs:{id:"pop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pop"}},[s._v("#")]),s._v(" pop")]),s._v(" "),t("p",[s._v("删除并返回栈顶的元素，也就是数组的最后一位元素，可以直接使用数组中的pop方法来模拟实现。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Stack")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" stack=[];\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".pop="),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n    \t"),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" stack.pop();\n    }\n}\n")])])]),t("h4",{attrs:{id:"peek"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#peek"}},[s._v("#")]),s._v(" peek")]),s._v(" "),t("p",[s._v("返回栈顶的元素，也就是数组的最后一位元素，可以使用数组下标直接获取，最后一位元素的下标是数组长度减1.")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Stack")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" stack=[];\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".peek="),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n    \t"),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" stack[stack.length"),t("span",{staticClass:"hljs-number"},[s._v("-1")]),s._v("];\n    }\n}\n")])])]),t("h4",{attrs:{id:"isempty"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#isempty"}},[s._v("#")]),s._v(" isEmpty")]),s._v(" "),t("p",[s._v("检查栈是否为空，可以用判断数组的长度是否为0来模拟")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Stack")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" stack=[];\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".isEmpty="),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n    \t"),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" stack.length==="),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n    }\n}\n")])])]),t("h4",{attrs:{id:"clear"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clear"}},[s._v("#")]),s._v(" clear")]),s._v(" "),t("p",[s._v("移除栈中的所有元素，模拟实现就是清空数组，可以直接将数组的长度赋值为0")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Stack")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" stack=[];\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".clear="),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n    \tstack.length="),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v("\n    }\n}\n")])])]),t("h4",{attrs:{id:"size"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#size"}},[s._v("#")]),s._v(" size")]),s._v(" "),t("p",[s._v("返回栈中元素的个数，也就是数组长度，可以使用数组的length属性模拟")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Stack")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" stack=[];\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".size="),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n    \t"),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" stack.length\n    }\n}\n")])])]),t("h4",{attrs:{id:"print"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#print"}},[s._v("#")]),s._v(" print")]),s._v(" "),t("p",[s._v("以字符串显示栈中所有内容,这个可以直接打印数组，字符串形式可以使用toString()方法来转化")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" "),t("span",{staticClass:"hljs-title"},[s._v("Stack")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n\t"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" stack=[];\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".print="),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n    \t"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(stack.toString())\n    }\n}\n")])])]),t("h2",{attrs:{id:"测试一下"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试一下"}},[s._v("#")]),s._v(" 测试一下")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[s._v("\t"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" mystack = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Stack();\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(mystack.isEmpty());  "),t("span",{staticClass:"hljs-comment"},[s._v("//true")]),s._v("\n    mystack.push("),t("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(");  "),t("span",{staticClass:"hljs-comment"},[s._v("//往栈中压入一个元素")]),s._v("\n    mystack.push("),t("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(");\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(mystack.pop());   "),t("span",{staticClass:"hljs-comment"},[s._v("//2,删除并返回栈中的最后一个元素")]),s._v("\n    mystack.print();  "),t("span",{staticClass:"hljs-comment"},[s._v("//1， 以字符串的形式打印栈")]),s._v("\n")])])]),t("h2",{attrs:{id:"实际应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#实际应用"}},[s._v("#")]),s._v(" 实际应用")]),s._v(" "),t("p",[s._v("判断一个数是不是回文数。"),t("br"),s._v("\n所谓回文数就是正着看和倒着看是一样的。我们使用上面模拟实现的栈来完成这个需求。"),t("br"),s._v("\n将该数字转化成字符串，然后一个一个的压入栈，假设原数字是1234，压入栈之后就是1234，然后一个一个的出栈(删除并返回最后一个元素)，拼接起来就是4321，在和1234比对，很明显不是一个回文数。")]),s._v(" "),t("div",{staticClass:"language-javascript extra-class"},[t("pre",[t("code",{staticClass:"language-javascript"},[s._v("\t"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" mystack = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Stack();\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" str = number.toString();  "),t("span",{staticClass:"hljs-comment"},[s._v("//将数字转化成字符串")]),s._v("\n    "),t("span",{staticClass:"hljs-comment"},[s._v("//入栈")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v("("),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" i="),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(",length=str.length;i<length;i++){\n    \tmystack.push(str[i]);\n    }\n    "),t("span",{staticClass:"hljs-comment"},[s._v("//出栈")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" newstr="),t("span",{staticClass:"hljs-string"},[s._v('""')]),s._v(";\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("while")]),s._v("(!mystack.isAmpty()){\n    \tnewstr+=mystack.pop();\n    }\n    "),t("span",{staticClass:"hljs-comment"},[s._v("//比较两个字符串是否相等")]),s._v("\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v("(str === newstr){\n    \t"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"该数字是一个回文数"')]),s._v(")\n    }\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("else")]),s._v("{\n    \t"),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"该数字不是一个回文数"')]),s._v(");\t\n    }\n")])])])])}),[],!1,null,null,null);a.default=l.exports}}]);