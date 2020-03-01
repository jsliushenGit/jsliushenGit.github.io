(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{335:function(s,a,t){"use strict";t.r(a);var n=t(16),l=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("模板方式模式由两部分结构组成，第一部分是抽象父类，第二部分是具体的实现子类。通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法以及封装子类中所有方法的执行顺序。子类通过继承这个抽象类，也继承了整个算法结构，并且可以选择重写父类的方法。")])]),s._v(" "),t("h2",{attrs:{id:"案例：咖啡与茶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例：咖啡与茶"}},[s._v("#")]),s._v(" 案例：咖啡与茶")]),s._v(" "),t("p",[s._v("泡一杯咖啡的步骤通常如下:\n(1) 把水煮沸\n(2) 用沸水冲泡咖啡\n(3) 把咖啡倒进杯子\n(4) 加糖和牛奶")]),s._v(" "),t("p",[s._v("泡一杯茶的步骤相差不大:\n(1) 把水煮沸\n(2) 用沸水浸泡茶叶\n(3) 把茶水倒进杯子\n(4) 加柠檬")]),s._v(" "),t("p",[s._v("观察泡咖啡和泡茶的步骤，可以找到他们的相同点和不同点。经过抽象之后，不管泡咖啡还是泡茶，都可以整理为以下四步：\n(1) 把水煮沸\n(2) 用沸水冲泡饮料\n(3) 把饮料倒进杯子\n(4) 加调料")]),s._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",[t("code",{staticClass:"language-JavaScript"},[t("span",{staticClass:"hljs-comment"},[s._v("//抽象饮料类")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" Beverage = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ };\n\nBeverage.prototype.boilWater = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"把水煮沸"')]),s._v(");\n}\n\nBeverage.prototype.brew = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ }; "),t("span",{staticClass:"hljs-comment"},[s._v("//空方法，由子类重写(用开水冲泡饮料)")]),s._v("\n\nBeverage.prototype.pourInCup = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ } "),t("span",{staticClass:"hljs-comment"},[s._v("//空方法，由子类重写 (把饮料倒进杯子里)")]),s._v("\n\nBeverage.prototype.addCondiments = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ } "),t("span",{staticClass:"hljs-comment"},[s._v("//空方法，由子类重写（加调料）")]),s._v("\n\nBeverage.prototype.init = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".boilWater();\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".brew();\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".pourInCup();\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".addCondiments();\n}\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("//咖啡类")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" Coffee = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ };\n\nCoffee.prototype = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Beverage();\n\nCoffee.prototype.brew = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"用水冲咖啡"')]),s._v(")\n}\n\nCoffee.prototype.pourInCup = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"把咖啡倒进杯子里"')]),s._v(")\n}\n        \nCoffee.prototype.addCondiments = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"加糖"')]),s._v(");\n}\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" coffee = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Coffee();\ncoffee.init();\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 茶类")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" Tea = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{ };\n\nTea.prototype = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Beverage();\n\nTea.prototype.brew = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"用水泡茶"')]),s._v(");\n}\n        \nTea.prototype.pourInCup = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"把茶倒进杯子里"')]),s._v(");\n}\n\nTea.prototype.addCondiments = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"加柠檬"')]),s._v(");\n}\n      \n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" tea = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Tea();\ntea.init();\n")])])]),t("h2",{attrs:{id:"模版方法模式的使用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模版方法模式的使用场景"}},[s._v("#")]),s._v(" 模版方法模式的使用场景")]),s._v(" "),t("p",[s._v("模板方法模式通常被架构师用于搭建项目的框架，架构师定好了框架的骨架，程序员继承框架的结构之后，负责往里面填空。")]),s._v(" "),t("h2",{attrs:{id:"钩子方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#钩子方法"}},[s._v("#")]),s._v(" 钩子方法")]),s._v(" "),t("p",[s._v("上年的饮料抽象类已经规定好了冲泡饮料的4个步骤，但是有的人可能不喜欢加调料（第4步），如果想让子类不受这个约束，我们可以实用化钩子方法(hook)来解决这个问题。"),t("br"),s._v("\n放置钩子是隔离变化的一种常见手段。在父类中容易变化的地方放置钩子，钩子可以有一个默认的实现，究竟要不要“挂钩”，这由子类自行决定。钩子方法的返回结果决定了模板方法后面部分的执行步骤，也就是程序接下来的走向，这样一来，程序就拥有了变化的可能。")]),s._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",[t("code",{staticClass:"language-JavaScript"},[t("span",{staticClass:"hljs-comment"},[s._v("//抽象饮料类")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" Beverage = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{};\n\nBeverage.prototype.boilWater = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"把水烧开"')]),s._v(");\n}\n        \n"),t("span",{staticClass:"hljs-comment"},[s._v("// 空方法，由子类重写(用开水冲泡饮料)")]),s._v("\nBeverage.prototype.brew = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("throw")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Error")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v('"子类必须重写父类的brew方法"')]),s._v(");\n};\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("// 空方法，由子类重写 (把饮料倒进杯子里)")]),s._v("\nBeverage.prototype.pourInCup = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("throw")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Error")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v('"子类必须重写父类的pourInCup方法"')]),s._v(");\n} \n\n"),t("span",{staticClass:"hljs-comment"},[s._v("//空方法，由子类重写（加调料）")]),s._v("\nBeverage.prototype.addCondiments = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("throw")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Error")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v('"子类必须重写父类的addCondiments方法"')]),s._v(");\n}\n      \nBeverage.prototype.customerWantsCondiments = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(";\n}\n\nBeverage.prototype.init = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".boilWater();\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".brew();\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".pourInCup();\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".customerWantsCondiments()) {\n    "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".addCondiments();\n  }\n}\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("//咖啡类")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" Coffee = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{};\n\nCoffee.prototype = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Beverage();\n        \nCoffee.prototype.brew = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"用水冲咖啡"')]),s._v(")\n}\n        \nCoffee.prototype.pourInCup = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"把咖啡倒进杯子里"')]),s._v(")\n}\n\nCoffee.prototype.customerWantsCondiments = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v("("),t("span",{staticClass:"hljs-params"}),s._v(")")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".confirm("),t("span",{staticClass:"hljs-string"},[s._v('"是否加糖"')]),s._v(");\n}\n\nCoffee.prototype.addCondiments = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"加糖"')]),s._v(");\n}\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" coffee = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Coffee();\n\ncoffee.init();\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" Tea = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{};\n\nTea.prototype = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Beverage();\n\nTea.prototype.brew = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"用水泡茶"')]),s._v(");\n}\n\nTea.prototype.pourInCup = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"把茶倒进杯子里"')]),s._v(");\n}\n\nTea.prototype.addCondiments = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n    "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"加柠檬"')]),s._v(");\n}\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" tea = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Tea();\n\ntea.init();\n")])])]),t("h2",{attrs:{id:"好莱坞原则"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#好莱坞原则"}},[s._v("#")]),s._v(" 好莱坞原则")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("别调用我们，我们会调用你")])]),s._v(" "),t("p",[s._v("模板方式模式是好莱坞原则的一个典型使用场景，它与好莱坞原来的联系非常明显，当我们用模板方法模式编写一个程序时，就意味着子类放弃了对自己的控制权，而是改为父类通知子类，哪些方法应该在什么时候调用。作为子类，只负责提供一些设计上的细节。")]),s._v(" "),t("h3",{attrs:{id:"好莱坞原则的其他应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#好莱坞原则的其他应用"}},[s._v("#")]),s._v(" 好莱坞原则的其他应用")]),s._v(" "),t("ul",[t("li",[s._v("发布-订阅模式")]),s._v(" "),t("li",[s._v("回调函数")])]),s._v(" "),t("h2",{attrs:{id:"真的需要-继承-吗"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#真的需要-继承-吗"}},[s._v("#")]),s._v(" 真的需要“继承”吗")]),s._v(" "),t("p",[s._v("模板方法模式是基于继承的设计模式，但JavaScript语言实际上没有提供真正的类式继承，继承是通过对象与对象之间的委托来实现的。"),t("br"),s._v("\n下面是非继承实现的模板方法模式")]),s._v(" "),t("div",{staticClass:"language-JavaSCript extra-class"},[t("pre",[t("code",{staticClass:"language-JavaSCript"},[t("span",{staticClass:"hljs-comment"},[s._v("//抽象饮料类")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" Beverage = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("param")]),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" boilWater = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"把水烧开"')]),s._v(");\n  }\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" brew = param.brew || "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("throw")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Error")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v('"子类必须重写父类的brew方法"')]),s._v(");\n  }\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" pourInCup = param.pourInCup || "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("throw")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Error")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v('"子类必须重写父类的pourInCup方法"')]),s._v(");\n  }\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" addCondiments = param.addCondiments || "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("throw")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Error")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v('"子类必须重写父类的addCondiments方法"')]),s._v(");\n  }\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" customerWantsCondiments = param.customerWantsCondiments || "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(";\n  }\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" F = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{};\n  F.prototype.init = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n      boilWater();\n      brew();\n      pourInCup();\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("if")]),s._v(" (customerWantsCondiments()) {\n          addCondiments();\n      }\n  }\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" F;\n};\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("//咖啡类")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" Coffee = Beverage({\n  brew() {\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"用水冲咖啡"')]),s._v(")\n  },\n  pourInCup() {\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"把咖啡倒进杯子里"')]),s._v(");\n  },\n  addCondiments() {\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"加糖"')]),s._v(");\n  },\n  customerWantsCondiments() {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".confirm("),t("span",{staticClass:"hljs-string"},[s._v('"是否加糖"')]),s._v(");\n  }\n})\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" coffee = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Coffee();\n\ncoffee.init();\n\n"),t("span",{staticClass:"hljs-comment"},[s._v("//茶类")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" Tea = Beverage({\n  brew() {\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"用水冲茶叶"')]),s._v(")\n  },\n  pourInCup() {\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"把茶倒进杯子里"')]),s._v(");\n  },\n  addCondiments() {\n      "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"加柠檬"')]),s._v(");\n  },\n  customerWantsCondiments() {\n      "),t("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("window")]),s._v(".confirm("),t("span",{staticClass:"hljs-string"},[s._v('"是否加柠檬"')]),s._v(");\n  }\n})\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" tea = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Tea();\n\ntea.init();\n")])])]),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[s._v("模板方法模式是一种典型的通过封装变化来提高系统扩展性的设计模式。"),t("br"),s._v("\n在JavaScript中，我们可以使用高阶函数很方便的实现模板方法模式。")])])}),[],!1,null,null,null);a.default=l.exports}}]);