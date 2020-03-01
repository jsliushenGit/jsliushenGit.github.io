(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{406:function(s,a,t){"use strict";t.r(a);var l=t(16),n=Object(l.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("p",[s._v("组合模式将对象组合成树形结构，以表示“部分-整体”的层次结构。组合模式还可以通过对象的多态性表现，使得用户对单个对象和组合对象的使用具有一致性。")])]),s._v(" "),t("h2",{attrs:{id:"案例：扫描文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#案例：扫描文件夹"}},[s._v("#")]),s._v(" 案例：扫描文件夹")]),s._v(" "),t("p",[s._v("文件夹和文件之间的关系，非常适合用组合模式来描述。文件夹里既可以包含文件，又可以包含其他文件夹，最终可能组合成一棵树。")]),s._v(" "),t("div",{staticClass:"language-JavaScript extra-class"},[t("pre",[t("code",{staticClass:"language-JavaScript"},[t("span",{staticClass:"hljs-comment"},[s._v("//文件夹")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" Folders = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("name")]),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name = name;\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".list = [];\n}\n        \nFolders.prototype.add = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("file")]),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".list.push(file);\n}\n        \nFolders.prototype.scan = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"开始浏览文件夹："')]),s._v(" + "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name);\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("for")]),s._v(" ("),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" i="),t("span",{staticClass:"hljs-number"},[s._v("0")]),s._v(", file; file = "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".list[i++];) {\n    file.scan();\n  }\n}\n        \n"),t("span",{staticClass:"hljs-comment"},[s._v("//文件")]),s._v("\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" Files = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"},[s._v("name")]),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name = name;\n}\n        \nFiles.prototype.add = "),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-keyword"},[s._v("throw")]),s._v(" "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),t("span",{staticClass:"hljs-built_in"},[s._v("Error")]),s._v("("),t("span",{staticClass:"hljs-string"},[s._v('"文件不支持添加操作"')]),s._v(");\n}\n\nFiles.prototype.scan="),t("span",{staticClass:"hljs-function"},[t("span",{staticClass:"hljs-keyword"},[s._v("function")]),s._v(" ("),t("span",{staticClass:"hljs-params"}),s._v(") ")]),s._v("{\n  "),t("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),t("span",{staticClass:"hljs-string"},[s._v('"开始浏览文件："')]),s._v(" + "),t("span",{staticClass:"hljs-keyword"},[s._v("this")]),s._v(".name)\n}\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" folder = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Folders("),t("span",{staticClass:"hljs-string"},[s._v('"学习资料"')]),s._v(");\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" folder1 = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Folders("),t("span",{staticClass:"hljs-string"},[s._v('"JavaScript"')]),s._v(");\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" folder2 = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Folders("),t("span",{staticClass:"hljs-string"},[s._v('"JQuery"')]),s._v(");\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" file1 = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Files("),t("span",{staticClass:"hljs-string"},[s._v('"JavaScript设计模式与开发实践"')]),s._v(");\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" file2 = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Files("),t("span",{staticClass:"hljs-string"},[s._v('"精通JQuery"')]),s._v(");\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" file3 = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Files("),t("span",{staticClass:"hljs-string"},[s._v('"重构与模式"')]),s._v(");\n\nfolder1.add(file1);\nfolder2.add(file2);\n\nfolder.add(folder1);\nfolder.add(folder2);\nfolder.add(file3);\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" folder3 = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" Folder("),t("span",{staticClass:"hljs-string"},[s._v("'nodeJs'")]),s._v(")\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" file4 = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" File("),t("span",{staticClass:"hljs-string"},[s._v("'深入浅出Node.js'")]),s._v(")\nfolder3.add(file4)\n\n"),t("span",{staticClass:"hljs-keyword"},[s._v("var")]),s._v(" file5 = "),t("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" File("),t("span",{staticClass:"hljs-string"},[s._v("'JavaScript语言精粹与编程实践'")]),s._v(")\n\nfolder.add(folder3)\nfolder.add(file5)\n\nfolder.scan()\n")])])]),t("h2",{attrs:{id:"组合模式注意点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组合模式注意点"}},[s._v("#")]),s._v(" 组合模式注意点")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("组合模式不是父子关系\n组合对象包含一组叶对象，但Leaf并不是Composite的子类。组合对象把请求委托给它所包含的所有叶对象，它们能够合作的关键是拥有相同的接口。")])]),s._v(" "),t("li",[t("p",[s._v("对叶对象操作的一致性\n组合模式除了要求组合对象和叶对象拥有相同的接口之外，还有一个必要条件，就是对一组叶对象的操作必须具有一致性。")])]),s._v(" "),t("li",[t("p",[s._v("双向映射关系")])]),s._v(" "),t("li",[t("p",[s._v("用职责链模式提高组合模式性能")])])]),s._v(" "),t("h2",{attrs:{id:"何时使用组合模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#何时使用组合模式"}},[s._v("#")]),s._v(" 何时使用组合模式")]),s._v(" "),t("ul",[t("li",[s._v("表示对象的整体-部分层次结构")]),s._v(" "),t("li",[s._v("客户希望统一对待树中的所有对象")])])])}),[],!1,null,null,null);a.default=n.exports}}]);