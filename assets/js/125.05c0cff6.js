(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{345:function(s,n,a){"use strict";a.r(n);var t=a(16),l=Object(t.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("最近看到一个网友分享的百度秋招面试经历，其中有一道基础题让我对于JavaScript隐式类型转换有了新的认识。现在将题目，答案和延伸分析分享给大家，如有不足之处，欢迎指正。\n题目是这样的：\n写一个对象A，要求A==”1”，也就是console.log(A==”1”)会打印true.\n题目答案如下:")]),s._v(" "),a("p",[s._v("答案1:")]),s._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",[a("code",{staticClass:"language-javascript"},[a("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" A={\n\t\t"),a("span",{staticClass:"hljs-attr"},[s._v("toString")]),s._v(":"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v("=>")]),s._v("”"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("”\n}"),a("span",{staticClass:"hljs-string"},[s._v("``")]),a("span",{staticClass:"hljs-string"},[s._v("`\n\n答案2:\n\n`")]),a("span",{staticClass:"hljs-string"},[s._v("``")]),s._v("javascript\nVar A={\n\t\t"),a("span",{staticClass:"hljs-attr"},[s._v("valueOf")]),s._v(":"),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v("=>")]),s._v("”"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("”\n}"),a("span",{staticClass:"hljs-string"},[s._v("``")]),a("span",{staticClass:"hljs-string"},[s._v("`\n\n下面是分析:\n首先从JavaScript的数据类型说起，JavaScript的数据类型有六种(不算es6新增的Symbol类型),分别是string,number,boolean, null,undefined,object。其中object是引用类型，其它的五种是基本类型或者是原始类型。我们可以用typeof方法打印来查看某个数据是属于哪个类型的。\n大家都知道JavaScript是一种弱类型语言，变量的数据类型不固定。但是在运算的过程中，两种不同类型的变量必须先转换成相同类型的变量才能进行运算，这个转换的过程就被成为类型转换。类型转换分为两种，一种叫显示类型转换，比如利用Number()强制将某个变量转为number类型，这个我们今天不谈。另一种叫隐式类型转换，也就是不需要我们干预，引擎自动帮我们转换。\n隐式类型转换通常发生在运算的时候，比如加减乘除，比较大小等等。既然是引擎自动帮我们转换，那肯定不会乱转，要遵从一定的规则。接下来详细的说一下在比较是否相等过程中的隐式类型转换。大家请看下面一张图:\n\n![](/images/pasted-0.png)\n \n这个图可以表示出两个变量比较是否相等时的规则(画图技术有限，大家配合上脑补)，按照箭头的方向，高级别的自动向低级别的转换。详细描述是这样的:\n(1)\t对象和字符串比较是否相等\n对象先转换成字符串，然后再和字符串比较\n\n`")]),s._v("["),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("]==”"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("”  "),a("span",{staticClass:"hljs-comment"},[s._v("//[1]转化成字符串”1”,然后和右边的”1”比较，结果为rue`")]),s._v("\n\n("),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(")\t对象和数字比较是否相等\n对象先转换成字符串，然后再转换成数字，再和数字进行比较\n\n"),a("span",{staticClass:"hljs-string"},[s._v("`[1]==1  //[1]转化成字符串”1”,然后转换成数字1,然后和右边的1比较，结果为rue`")]),s._v("\n\n("),a("span",{staticClass:"hljs-number"},[s._v("3")]),s._v(")\t对象和布尔值比较是否相等\n对象先转换成字符串，然后再转换成数字。布尔转换成数字，然后两个数字进行比较\n\n"),a("span",{staticClass:"hljs-string"},[s._v("`[1]==true  //[1]转化成字符串”1”,然后转换成数字1。True转换成数字1，然后两个数字1比较，结果为true(这里有个捷径，其实对象转bool永远是true,后面会介绍)`")]),s._v("\n\n("),a("span",{staticClass:"hljs-number"},[s._v("4")]),s._v(")\t字符串和数字比较是否相等\n字符串先转换成数字，然后再和数字进行比较\n\n“"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("”=="),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("  "),a("span",{staticClass:"hljs-comment"},[s._v("// ”1”转化成数字1,然后和右边的1比较，结果为true")]),s._v("\n\n("),a("span",{staticClass:"hljs-number"},[s._v("5")]),s._v(")\t布尔值和数字比较是否相等\n布尔值先转换成数字，然后再和数字进行比较\n"),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("=="),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("  "),a("span",{staticClass:"hljs-comment"},[s._v("// true转换成数字1，然后和右边的1比较，结果为true")]),s._v("\n\n("),a("span",{staticClass:"hljs-number"},[s._v("6")]),s._v(")\t字符串和布尔值比较是否相等\n字符串转换成数字，布尔值转换成数字，然后两个数字比较是否相等\n\n"),a("span",{staticClass:"hljs-string"},[s._v("`“1”==true // “1”转换成数字1，true转换成数字1，两个1比较，结果为true`")]),s._v("\n\n(总感觉数字类型好惨……)\n\n然后是两个怪胎,"),a("span",{staticClass:"hljs-literal"},[s._v("undefined")]),s._v("和"),a("span",{staticClass:"hljs-literal"},[s._v("null")]),s._v("需要大家记住\n"),a("span",{staticClass:"hljs-string"},[s._v("`undefined==null`")]),s._v(",结果为"),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("，除此之外，这两者和其他值比较结果都为"),a("span",{staticClass:"hljs-literal"},[s._v("false")]),s._v("\n\n基本类型间的比较相对简单。引用类型和基本类型的比较就相对复杂一些，先要把引用类型转成基本类型，再按上述的方法比较。引用类型转布尔全是"),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("。比如空数组，只要是对象就是引用类型，所以[]为"),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("。\n\n**引用类型转数字或者字符串就要用valueOf()或者toString();对象本身就继承了valueOf()和toString(),还可以自定义valueOf()和toString()。**\n\n上面的 这句话是我们今天的重点（给大家一分钟做个笔记）,\n接下来看一段代码:\n\n"),a("span",{staticClass:"hljs-string"},[s._v("``")]),a("span",{staticClass:"hljs-string"},[s._v("`javascript\nvar A=new Object();\nconsole.log(A);`")]),a("span",{staticClass:"hljs-string"},[s._v("``")]),s._v("\n\n打印结果在这\n\n![]("),a("span",{staticClass:"hljs-regexp"},[s._v("/images/")]),s._v("pasted"),a("span",{staticClass:"hljs-number"},[s._v("-1.")]),s._v("png)\n\n \n很明显对象A本身是空的，没有toString()和valueOf(),但是可以通过原型链访问到它的原型中的toString()和valueOf().\n然后我们在A中自己添加一个toString()方法，然后让它和一个字符串比较是否相等\n\n"),a("span",{staticClass:"hljs-string"},[s._v("``")]),a("span",{staticClass:"hljs-string"},[s._v('`javascript\nvar A = new Object();\n\tA.toString=function(){\n\tconsole.log("触发了toString");\n}\nconsole.log(A==”1”);`')]),a("span",{staticClass:"hljs-string"},[s._v("``")]),s._v("\n\n结果如下:\n \n \n![]("),a("span",{staticClass:"hljs-regexp"},[s._v("/images/")]),s._v("pasted"),a("span",{staticClass:"hljs-number"},[s._v("-2.")]),s._v("png)\n \n说明对象转换成字符串时，会调用toString方法.\n继续给A加一个valueOf()\n\n"),a("span",{staticClass:"hljs-string"},[s._v("``")]),a("span",{staticClass:"hljs-string"},[s._v('`javascript\nvar A = new Object();\nA.toString=function(){\n\tconsole.log("触发了toString");\n}\nA.valueOf=function(){\n\tconsole.log("触发了valueOf");\n}\nconsole.log(A==”1”);`')]),a("span",{staticClass:"hljs-string"},[s._v("``")]),s._v("\n打印结果如下:\n \n![]("),a("span",{staticClass:"hljs-regexp"},[s._v("/images/")]),s._v("pasted"),a("span",{staticClass:"hljs-number"},[s._v("-3.")]),s._v("png)\n \n这说明对象在转换成字符串时，会先调用valueOf方法，如果没有valueOf,再调用toString。(备胎啊)\n\n以上结果，在对象转换成数字时同样适用，大家可以自行尝试。毕竟对象转数字时，是先转成字符串，再转成数字的。\n\n讲到这里，再回头看那个题，如何才能让对象A==”"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("”结果为"),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(".\n现在我们已经知道了对象在转换成字符串时,会触发valueOf或者toString,那么我们可以在对象A中自定义valueOf或者toString，让其返回字符串“"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("”，代码如下\n"),a("span",{staticClass:"hljs-string"},[s._v("``")]),a("span",{staticClass:"hljs-string"},[s._v('`javascript\nvar A = new Object();\nA.valueOf=function(){\n\tconsole.log("触发了valueOf");\n\treturn "1"\n}\nconsole.log(A=="1");`')]),a("span",{staticClass:"hljs-string"},[s._v("``")]),s._v("\n打印结果如下\n \n \n![]("),a("span",{staticClass:"hljs-regexp"},[s._v("/images/")]),s._v("pasted"),a("span",{staticClass:"hljs-number"},[s._v("-4.")]),s._v("png)\n\n以上代码很好理解，对象A一旦隐式转换成字符串，就会触发调用valueOf方法，然后返回字符串“"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("”，此时两个“"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v("”比较是否相等，结果当然为"),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v("\n\n同样大家也可以将valueOf换成toString，结果一样，原理上面已经分析过了。\n然后将代码整理一下，使用es6的箭头函数书写，就可以得到文章开头的答案：\n答案"),a("span",{staticClass:"hljs-number"},[s._v("1")]),s._v(":\n\n"),a("span",{staticClass:"hljs-string"},[s._v("``")]),a("span",{staticClass:"hljs-string"},[s._v("`javascript\nvar A={\n\t\ttoString:()=>”1”\n}`")]),a("span",{staticClass:"hljs-string"},[s._v("``")]),s._v("\n\n答案"),a("span",{staticClass:"hljs-number"},[s._v("2")]),s._v(":\n\n"),a("span",{staticClass:"hljs-string"},[s._v("``")]),a("span",{staticClass:"hljs-string"},[s._v("`javascript\nVar A={\n\tvalueOf:()=>”1”\n}`")]),a("span",{staticClass:"hljs-string"},[s._v("``")]),s._v("\n\n至此，关于比较是否相等时发生的隐式转换规则已经底层调用的方法已经介绍完毕。然后我们再简单看一下其他形式的隐式转换：\n\n"),a("span",{staticClass:"hljs-number"},[s._v("1.")]),s._v("字符串加数字,数字就会转成字符串。\n \n"),a("span",{staticClass:"hljs-number"},[s._v("2.")]),s._v("数字减字符串，字符串转成数字。如果字符串不是纯数字就会转成"),a("span",{staticClass:"hljs-literal"},[s._v("NaN")]),s._v("。字符串减数字也一样。两个字符串相减也先转成数字。\n \n"),a("span",{staticClass:"hljs-number"},[s._v("3.")]),s._v("乘，除，大于，小于跟减的转换也是一样。\n \n"),a("span",{staticClass:"hljs-string"},[s._v("``")]),a("span",{staticClass:"hljs-string"},[s._v("`javascript\n//隐式转换 + - * == / \n// + \n10 + '20'    //2010\n// -\n10 - '20'    //-10\n10 - 'one'   //NaN\n10 - '100a'  //NaN\n// *\n10*'20'      //200\n'10'*'20'    //200\n// /\n20/'10'      //2\n'20'/'10'    //2\n'20'/'one'　 //NaN\n")])])])]),a("p",[s._v("以上简单列举了一下在加减乘除运算中的隐式转换规则，这些规则需要记忆，量也不大。")]),s._v(" "),a("p",[s._v("好了，大家有什么问题或者建议，欢迎留言讨论。")])])}),[],!1,null,null,null);n.default=l.exports}}]);