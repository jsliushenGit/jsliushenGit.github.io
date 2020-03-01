(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{392:function(a,s,t){"use strict";t.r(s);var v=t(16),l=Object(v.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"先有鸡-赋值-还是先有蛋-声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#先有鸡-赋值-还是先有蛋-声明"}},[a._v("#")]),a._v(" 先有鸡(赋值)还是先有蛋(声明)")]),a._v(" "),t("p",[a._v("考虑第一段代码")]),a._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",[t("code",{staticClass:"language-JavaScript"},[a._v("a = "),t("span",{staticClass:"hljs-number"},[a._v("2")]),a._v(";\n"),t("span",{staticClass:"hljs-keyword"},[a._v("var")]),a._v(" a; \n"),t("span",{staticClass:"hljs-built_in"},[a._v("console")]),a._v(".log( a );\n")])])]),t("p",[a._v("代码输出结果是2,而不是undefined")]),a._v(" "),t("p",[a._v("考虑第二段代码")]),a._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",[t("code",{staticClass:"language-JavaScript"},[t("span",{staticClass:"hljs-built_in"},[a._v("console")]),a._v(".log( a ); \n"),t("span",{staticClass:"hljs-keyword"},[a._v("var")]),a._v(" a = "),t("span",{staticClass:"hljs-number"},[a._v("2")]),a._v(";\n")])])]),t("p",[a._v("输出结果是undefined,而不是ReferenceError")]),a._v(" "),t("p",[a._v("考虑完以上代码,你应该会考虑这个问题.到底是声明(蛋)在前，还是赋值(鸡)在前?")]),a._v(" "),t("h2",{attrs:{id:"编译器再度来袭"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译器再度来袭"}},[a._v("#")]),a._v(" 编译器再度来袭")]),a._v(" "),t("p",[a._v("编译器的内容,回忆一下，引擎会在解释 JavaScript 代码之前首先对其进行编译。编译阶段中的一部分工作就是找到所有的声明，并用合适的作用域将它们关联起来。 之后引擎会询问作用域,对声明进行赋值操作.")]),a._v(" "),t("p",[a._v("那么,在编译阶段找到所有的声明后,编译器又做了什么?答案就是提升")]),a._v(" "),t("p",[a._v("以上节的第一段代码为例,当你看到 var a = 2; 时，可能会认为这是一个声明。但 JavaScript 实际上会将其看成两个声明:var a;和a = 2;。 第一个定义声明是在编译阶段进行的。第二个赋值声明会被留在原地等待执行阶段。在第一个声明在编译阶段时,编译器会对var a;声明进行提升(即把var a;置于所在作用域的最上面).而a = 2;则会保持所在位置不动.此时代码会变成")]),a._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",[t("code",{staticClass:"language-JavaScript"},[t("span",{staticClass:"hljs-keyword"},[a._v("var")]),a._v(" a; \na = "),t("span",{staticClass:"hljs-number"},[a._v("2")]),a._v(";\n"),t("span",{staticClass:"hljs-built_in"},[a._v("console")]),a._v(".log( a );\n")])])]),t("p",[a._v("由此可知,在编译阶段,编译器会对声明进行提升.即先有蛋(声明)后有鸡(赋值)。\n哪些声明会被进行提升?")]),a._v(" "),t("ul",[t("li",[a._v("变量声明:例如上例中的var a;.不包括后面的a = 2;即不包含有赋值操作的声明.")]),a._v(" "),t("li",[a._v("函数声明:注意是函数声明,而不是函数表达式!(不清楚可以看前面的3.3节,我有详细说明).函数声明提升,是将整个函数进行提升,而不是仅仅函数名的提升.")])]),a._v(" "),t("h2",{attrs:{id:"函数优先"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数优先"}},[a._v("#")]),a._v(" 函数优先")]),a._v(" "),t("p",[a._v("函数声明和变量声明都会被提升。但是一个值得注意的细节(这个细节可以出现在有多个“重复”声明的代码中)是函数会首先被提升，然后才是变量。")]),a._v(" "),t("p",[a._v("考虑以下代码:")]),a._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",[t("code",{staticClass:"language-JavaScript"},[a._v("foo(); "),t("span",{staticClass:"hljs-comment"},[a._v("// 1")]),a._v("\n"),t("span",{staticClass:"hljs-keyword"},[a._v("var")]),a._v(" foo;\n"),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[a._v("function")]),a._v(" "),t("span",{staticClass:"hljs-title"},[a._v("foo")]),a._v("("),t("span",{staticClass:"hljs-params"}),a._v(") ")]),a._v("{ \n  "),t("span",{staticClass:"hljs-built_in"},[a._v("console")]),a._v(".log( "),t("span",{staticClass:"hljs-number"},[a._v("1")]),a._v(" );\n}\nfoo = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[a._v("function")]),a._v("("),t("span",{staticClass:"hljs-params"}),a._v(") ")]),a._v("{ \n  "),t("span",{staticClass:"hljs-built_in"},[a._v("console")]),a._v(".log( "),t("span",{staticClass:"hljs-number"},[a._v("2")]),a._v(" );\n};\n")])])]),t("p",[a._v("会输出 1 而不是 2 !这个代码片段会被引擎理解为如下形式:")]),a._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",[t("code",{staticClass:"language-JavaScript"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[a._v("function")]),a._v(" "),t("span",{staticClass:"hljs-title"},[a._v("foo")]),a._v("("),t("span",{staticClass:"hljs-params"}),a._v(") ")]),a._v("{ \n  "),t("span",{staticClass:"hljs-built_in"},[a._v("console")]),a._v(".log( "),t("span",{staticClass:"hljs-number"},[a._v("1")]),a._v(" );\n}\nfoo(); "),t("span",{staticClass:"hljs-comment"},[a._v("// 1")]),a._v("\nfoo = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[a._v("function")]),a._v("("),t("span",{staticClass:"hljs-params"}),a._v(") ")]),a._v("{ \n  "),t("span",{staticClass:"hljs-built_in"},[a._v("console")]),a._v(".log( "),t("span",{staticClass:"hljs-number"},[a._v("2")]),a._v(" );\n};\n")])])]),t("p",[a._v("注意: var foo 尽管出现在 function foo()... 的声明之前，但它是重复的声明(因此被忽略了)，因为函数声明会被提升到普通变量之前。")]),a._v(" "),t("p",[a._v("注意: js会忽略前面已经声明的声明(不管是变量声明还是函数声明,只要其名称相同,则后续不会再进行重复声明).但是对该变量新的赋值,会覆盖之前的值.\n一句话概括:函数声明的优先级高于变量声明,会排在它前面.")]),a._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[a._v("#")]),a._v(" 小结")]),a._v(" "),t("ul",[t("li",[a._v("对于var a = 2  JavaScript引擎会将var a和 a = 2当作两个单独的声明，第一个是编译阶段的任务，而第二个则是执行阶段的任务。")]),a._v(" "),t("li",[a._v("论作用域中的声明出现在什么地方，都将在代码本身被执行前首先进行处理。 可以将这个过程形象地想象成所有的声明(变量和函数)都会被“移动”到各自作用域的最顶端，这个过程被称为提升。")]),a._v(" "),t("li",[a._v("声明本身会被提升，而包括函数表达式的赋值在内的赋值操作并不会提升(即赋值操作都不会提升)。")]),a._v(" "),t("li",[a._v("注意: 当普通的 var 声明和函数声明混合在一起的时候，并且声明相同时(var的变量名和函数名相同时,会引发js对重复声明的忽略)!一定要注意避免重复声明!")])])])}),[],!1,null,null,null);s.default=l.exports}}]);