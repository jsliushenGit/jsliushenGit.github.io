(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{394:function(a,s,t){"use strict";t.r(s);var r=t(16),v=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"编译原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#编译原理"}},[a._v("#")]),a._v(" 编译原理")]),a._v(" "),t("p",[a._v("传统编译的三个步骤")]),a._v(" "),t("ol",[t("li",[a._v("分词/词法分析(Tokenizing/Lexing) : 这个过程会将由字符组成的字符串分解成(对编程语言来说)有意义的代码块，这些代码块被称为词法单元(token)。例如，考虑程序var a = 2;。这段程序通常会被分解成 为下面这些词法单元:var、a、=、2、;。空格是否会被当作词法单元，取决于空格在 这门语言中是否具有意义。")]),a._v(" "),t("li",[a._v("解析/语法分析(Parsing): 这个过程是将词法单元流(数组)转换成一个由元素逐级嵌套所组成的代表了程序语法结构的树。这个树被称为“抽象语法树”(Abstract Syntax Tree，AST)。var a = 2; 的抽象语法树中可能会有一个叫作 VariableDeclaration 的顶级节点，接下来是一个叫作Identifier(它的值是a)的子节点，以及一个叫作 AssignmentExpression 的子节点。AssignmentExpression 节点有一个叫作 NumericLiteral(它的值是 2)的子节点。")]),a._v(" "),t("li",[a._v("代码生成: 将 AST 转换为可执行代码的过程称被称为代码生成。这个过程与语言、目标平台等息息相关。抛开具体细节，简单来说就是有某种方法可以将 var a = 2; 的 AST 转化为一组机器指令，用来创建一个叫作 a 的变量(包括分配内存等)，并将一个值储存在 a 中。")])]),a._v(" "),t("p",[a._v("JavaScript与传统编译的不同点:")]),a._v(" "),t("ol",[t("li",[a._v("JavaScript 引擎不会有大量的(像其他语言编译器那么多的)时间用来进行优化.")]),a._v(" "),t("li",[a._v("JavaScript与传统的编译语言不同，它不是在构建之前提前编译的，大部分情况下,它是在代码执行前的几微秒(甚至更短)进行编译.")]),a._v(" "),t("li",[a._v("JavaScript 引擎用尽了各种办法(比如 JIT，可以延 迟编译甚至实施重编译)来保证性能最佳。")]),a._v(" "),t("li",[a._v("JavaScript的编译结果不能在分布式系统中进行移植。")])]),a._v(" "),t("h2",{attrs:{id:"理解作用域"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#理解作用域"}},[a._v("#")]),a._v(" 理解作用域")]),a._v(" "),t("h3",{attrs:{id:"演员表-代码编译到执行的参与者"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#演员表-代码编译到执行的参与者"}},[a._v("#")]),a._v(" 演员表(代码编译到执行的参与者)")]),a._v(" "),t("p",[a._v("首先介绍将要参与到对程序 var a = 2; 进行处理的过程中的演员们，这样才能理解接下来将要听到的对话。")]),a._v(" "),t("ul",[t("li",[a._v("引擎\n从头到尾负责整个 JavaScript 程序的编译及执行过程。")]),a._v(" "),t("li",[a._v("编译器\n引擎的好朋友之一，负责语法分析及代码生成等脏活累活(详见前一节的内容)。")]),a._v(" "),t("li",[a._v("作用域\n引擎的另一位好朋友，负责收集并维护由所有声明的标识符(变量)组成的一系列查询，并实施一套非常严格的规则，确定当前执行的代码对这些标识符的访问权限。")])]),a._v(" "),t("h3",{attrs:{id:"作用域的lhs查询和rhs查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域的lhs查询和rhs查询"}},[a._v("#")]),a._v(" 作用域的LHS查询和RHS查询")]),a._v(" "),t("p",[a._v("引擎在获得编译器给的代码后,还会对作用域进行询问变量。\n现在将例子改为var a = b;此时引擎会对变量a和变量b都向作用域进行查询.查询分为两种:LHS和RHS.其中L代表左.R代表右.即对变量a进行LHS查询.对变量b进行RHS查询.\n单单从表象上看.LHS就是作用域对=左边变量的查询.RHS就是作用域对=右边变量的查询.但实际上并不是这么简单,首先LHS和RHS都是对变量进行查询,这也是我为什么要将例子从var a=2;改为var a=b;两者的区别是两者最终要查询到的东西并不一致.LHS是要查询到变量的声明(而不是变量的值),从而后面可以为其赋值.RHS是要查询到变量最终的值.还有一点,LHS 和 RHS 的含义是“赋值操作的左侧或右侧”并不一定意味着就是“= 赋值操作符的左侧或右侧”。赋值操作还有其他几种形式，因此在概念上最 好将其理解为“赋值操作的目标是谁(LHS)”以及“谁是赋值操作的源头(RHS)”.或者这样理解如果这段代码需要得到该变量的'源值',则会进行RHS查询.")]),a._v(" "),t("h3",{attrs:{id:"引擎和作用域的对话"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引擎和作用域的对话"}},[a._v("#")]),a._v(" 引擎和作用域的对话")]),a._v(" "),t("p",[a._v("这部分比较简单就是通过拟人方式比喻引擎和作用域的合作过程.一句话概括就是,引擎进行LHS和RHS查询时都会找作用域要。")]),a._v(" "),t("div",{staticClass:"language-javaScript extra-class"},[t("pre",[t("code",{staticClass:"language-javaScript"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[a._v("function")]),a._v(" "),t("span",{staticClass:"hljs-title"},[a._v("foo")]),a._v("("),t("span",{staticClass:"hljs-params"},[a._v("a")]),a._v(") ")]),a._v("{ \n  "),t("span",{staticClass:"hljs-built_in"},[a._v("console")]),a._v(".log( a ); "),t("span",{staticClass:"hljs-comment"},[a._v("// 2")]),a._v("\n}\nfoo( "),t("span",{staticClass:"hljs-number"},[a._v("2")]),a._v(" );\n")])])]),t("p",[a._v("让我们把上面这段代码的处理过程想象成一段对话，这段对话可能是下面这样的。")]),a._v(" "),t("p",[a._v("引擎:我说作用域，我需要为 foo 进行 RHS 引用。你见过它吗?"),t("br"),a._v("\n作用域:别说，我还真见过，编译器那小子刚刚声明了它。它是一个函数，给你。"),t("br"),a._v("\n引擎:哥们太够意思了!好吧，我来执行一下 foo。"),t("br"),a._v("\n引擎:作用域，还有个事儿。我需要为 a 进行 LHS 引用，这个你见过吗?"),t("br"),a._v("\n作用域:这个也见过，编译器最近把它声名为 foo 的一个形式参数了，拿去吧。"),t("br"),a._v("\n引擎:大恩不言谢，你总是这么棒。现在我要把 2 赋值给 a。 \t"),t("br"),a._v("\n引擎:哥们，不好意思又来打扰你。我要为 console 进行 RHS 引用，你见过它吗?"),t("br"),a._v("\n作用域:咱俩谁跟谁啊，再说我就是干这个。这个我也有，console 是个内置对象。 给你。"),t("br"),a._v("\n引擎:么么哒。我得看看这里面是不是有 log(..)。太好了，找到了，是一个函数。"),t("br"),a._v("\n引擎:哥们，能帮我再找一下对 a 的 RHS 引用吗?虽然我记得它，但想再确认一次。"),t("br"),a._v("\n作用域:放心吧，这个变量没有变动过，拿走，不谢。\t"),t("br"),a._v("\n引擎:真棒。我来把 a 的值，也就是 2，传递进 log(..)。")]),a._v(" "),t("h2",{attrs:{id:"作用域嵌套"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#作用域嵌套"}},[a._v("#")]),a._v(" 作用域嵌套")]),a._v(" "),t("p",[a._v("当一个块或函数嵌套在另一个块或函数中时，就发生了作用域的嵌套。进而形成了一条作用域链.因此，在当前作用 域中无法找到某个变量时，引擎就会在外层嵌套的作用域中继续查找，直到找到该变量， 或抵达最外层的作用域(也就是全局作用域)为止。\n当引擎需要对作用域进行查询时.引擎会从当前的执行作用域开始查找变量，如果找不到， 就向上一级继续查找。当抵达最外层的全局作用域时，无论找到还是没找到，查找过程都 会停止。")]),a._v(" "),t("h2",{attrs:{id:"异常"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[a._v("#")]),a._v(" 异常")]),a._v(" "),t("p",[a._v("例子:")]),a._v(" "),t("div",{staticClass:"language-JavaSCript extra-class"},[t("pre",[t("code",{staticClass:"language-JavaSCript"},[t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[a._v("function")]),a._v(" "),t("span",{staticClass:"hljs-title"},[a._v("foo")]),a._v("("),t("span",{staticClass:"hljs-params"},[a._v("a")]),a._v(") ")]),a._v("{ \n  "),t("span",{staticClass:"hljs-built_in"},[a._v("console")]),a._v(".log( a + b ); \n  b = a;\n}\nfoo( "),t("span",{staticClass:"hljs-number"},[a._v("2")]),a._v(" );\n")])])]),t("p",[a._v("如果 RHS 查询在所有嵌套的作用域中遍寻不到所需的变量，引擎就会抛出 ReferenceError 异常。例如上面例子中console.log(a+b)由于RHS此时是找不到b的值.故会抛出ReferenceError.\n如果 RHS 查询找到了一个变量，但是你尝试对这个变量的值进行不合理的操作， 比如试图对一个非函数类型的值进行函数调用，或着引用 null 或 undefined 类型的值中的 属性，那么引擎会抛出另外一种类型的异常，叫作 TypeError。\n当引擎执行 LHS 查询时，如果在顶层(全局作用域)中也无法找到目标变量，全局作用域中就会创建一个具有该名称的变量，并将其返还给引擎，前提是程序运行在非 “严格模式”下。例如上面例子中的b=a;.\n在严格模式中 LHS 查询失败时，并不会创建并返回一个全局变量，引擎会抛出同 RHS 查询 失败时类似的 ReferenceError 异常。")]),a._v(" "),t("h2",{attrs:{id:"lhs与rhs小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lhs与rhs小结"}},[a._v("#")]),a._v(" LHS与RHS小结")]),a._v(" "),t("p",[a._v("LHS和RHS查询都是引擎对作用域的查询"),t("br"),a._v("\nLHS和RHS查询都是只对变量进行查询"),t("br"),a._v("\nLHS和RHS都会沿着作用域链进行查询,直到最上层的全局作用域.如果没找到的话,在非严格模式下,LHS则会在全局创建一个相同名称的变量.RHS则会抛出ReferenceError的异常."),t("br"),a._v("\n如果查找的目的是对变量进行赋值，那么就会使用 LHS 查询;如果目的是获取变量的值，就会使用 RHS 查询。"),t("br"),a._v("\nLHS只是找到变量的容器而已,方便进行赋值"),t("br"),a._v("\n=操作符或调用函数时传入参数的操作都会导致关联作用域的赋值操作。此时都会进行LHS查询"),t("br"),a._v("\nRHS查询则需要找到变量的值")])])}),[],!1,null,null,null);s.default=v.exports}}]);