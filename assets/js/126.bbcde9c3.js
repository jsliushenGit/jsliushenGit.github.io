(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{344:function(a,s,t){"use strict";t.r(s);var e=t(16),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("终于我还是变成了一个螺丝钉，变成曾经最讨厌的样子。  \n不想做api调用师、事件绑定师，我走上自我救赎之路。  \n")])])]),t("p",[a._v("前端部门使用的框架是vue，关于react也一值只是了解，虽然框架这种东西并不是多多益善，但是掌握多种框架可以对比学习，总结思想，总之无害。本篇文章为系统学习react的学习笔记，加上语法层面和vue的对比以及思考。文章不会面面俱到，以快速入手做项目为目的，适合和我一样熟悉vue了解react的同学阅读。")]),a._v(" "),t("h1",{attrs:{id:"开发环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开发环境"}},[a._v("#")]),a._v(" 开发环境")]),a._v(" "),t("p",[a._v("前端开发环境的搭建基本就是webpack那一套，各框架也都推出了自己的脚手架，比如vue的@vue/cli。react官方推荐的脚手架是"),t("code",[a._v("react-create-app")]),a._v(",跟着文档玩起来。")]),a._v(" "),t("h2",{attrs:{id:"安装脚手架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装脚手架"}},[a._v("#")]),a._v(" 安装脚手架")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("npm i react-create-app -g\n")])])]),t("h2",{attrs:{id:"初始化react程序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化react程序"}},[a._v("#")]),a._v(" 初始化react程序")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("react-create-app react-app\n")])])]),t("p",[a._v("生成的文档目录结构如下")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/pasted-6.png",alt:"upload successful"}}),a._v("\n直观上这个目录比@vue/cli生成的vue程序项目结构更简洁，毕竟react脚手架不友好早有耳闻。"),t("br"),a._v("\n安装依赖跑起来")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("npm i\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("npm run start\n")])])]),t("p",[t("img",{attrs:{src:"/images/pasted-7.png",alt:"upload successful"}}),a._v("\n果然简洁...")]),a._v(" "),t("h1",{attrs:{id:"组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件"}},[a._v("#")]),a._v(" 组件")]),a._v(" "),t("p",[a._v("终于开始撸码了，直入主题，跟着官方文档和一堆教程，写个组件")]),a._v(" "),t("h2",{attrs:{id:"单个组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#单个组件"}},[a._v("#")]),a._v(" 单个组件")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/pasted-11.png",alt:"upload successful"}})]),a._v(" "),t("h2",{attrs:{id:"使用组件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用组件"}},[a._v("#")]),a._v(" 使用组件")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/pasted-9.png",alt:"upload successful"}})]),a._v(" "),t("p",[a._v("效果展示：\n"),t("img",{attrs:{src:"/images/pasted-10.png",alt:"upload successful"}})]),a._v(" "),t("p",[a._v("写惯了.vue单文件组件，初次上手jsx语法还是有点不习惯的，虽然心里骂着这什么鬼，但我知道最终肯定逃脱不了真香警告。"),t("br"),a._v("\n组件状态的使用还是和vue比较相似的，上手难度不大。\n组件引入和使用也和vue一样,webComponents风格。")]),a._v(" "),t("h2",{attrs:{id:"组件通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#组件通信"}},[a._v("#")]),a._v(" 组件通信")]),a._v(" "),t("p",[a._v("组件通信是组件化开发一个无法避免的话题，撸一遍代码再说")]),a._v(" "),t("h3",{attrs:{id:"父组件和子组件通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#父组件和子组件通信"}},[a._v("#")]),a._v(" 父组件和子组件通信")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/pasted-12.png",alt:"upload successful"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/pasted-13.png",alt:"upload successful"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/pasted-16.png",alt:"upload successful"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/pasted-15.png",alt:"upload successful"}})]),a._v(" "),t("p",[a._v("父组件使用props向子组件传递状态，子组件中使用this.props来接收。嗯... 何其熟悉")]),a._v(" "),t("h3",{attrs:{id:"子组件和父组件通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子组件和父组件通信"}},[a._v("#")]),a._v(" 子组件和父组件通信")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/pasted-17.png",alt:"upload successful"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/pasted-19.png",alt:"upload successful"}})]),a._v(" "),t("p",[a._v("子组件和父组件的通信采用事件的方式，用参数来通信。嗯... 还是很熟悉")]),a._v(" "),t("h3",{attrs:{id:"兄弟组件通信"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#兄弟组件通信"}},[a._v("#")]),a._v(" 兄弟组件通信")]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/pasted-21.png",alt:"upload successful"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/pasted-22.png",alt:"upload successful"}})]),a._v(" "),t("p",[t("img",{attrs:{src:"/images/pasted-20.png",alt:"upload successful"}}),a._v("\n兄弟组件的通信通过它们的父组件中转，A子组件将状态传递给父组件，父组件再将状态传递给B子组件。")]),a._v(" "),t("h2",{attrs:{id:"state和setstate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#state和setstate"}},[a._v("#")]),a._v(" state和setState")]),a._v(" "),t("p",[a._v("再上图中，组件内部的代码发生了一些改变，加入了constructor，state,setState几个新标识符，下面来解释一下以上变化的原因")]),a._v(" "),t("ul",[t("li",[a._v("在react中，要想视图关联状态变化，该状态需要放到state对象里")]),a._v(" "),t("li",[a._v("要想改变state对象，需要借助setState方法")])]),a._v(" "),t("p",[a._v("初次接触这种新的组件写法，心中感受只有纯粹二字，react真的将纯粹的js做到了极致！真香！")]),a._v(" "),t("p",[a._v("篇幅原因，react的第一篇就到这里，就像react的纯粹js，我的目的也非常纯粹，从写hello world开始，逐渐掌握react，拓宽自己的技术栈。关于react更高级的语法和技术细节，我们再慢慢完善。")]),a._v(" "),t("p",[a._v("加油，螺丝钉。")])])}),[],!1,null,null,null);s.default=r.exports}}]);