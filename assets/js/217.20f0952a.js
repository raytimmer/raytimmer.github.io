(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{1090:function(e,t,d){"use strict";d.r(t);var l={methods:{getCheckedNodes:function(){console.log(this.$refs.tree.getCheckedNodes())},getCheckedKeys:function(){console.log(this.$refs.tree.getCheckedKeys())},setCheckedNodes:function(){this.$refs.tree.setCheckedNodes([{id:5,label:"二级 2-1"},{id:9,label:"三级 1-1-1"}])},setCheckedKeys:function(){this.$refs.tree.setCheckedKeys([3])},resetChecked:function(){this.$refs.tree.setCheckedKeys([])}},data:function(){return{data:[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}],defaultProps:{children:"children",label:"label"}}}},s=d(1),c=Object(s.a)(l,(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",{staticClass:"demo"},[d("px-tree",{ref:"tree",attrs:{data:e.data,"show-checkbox":"","default-expand-all":"","node-key":"id","highlight-current":"",props:e.defaultProps}}),e._v(" "),d("div",{staticClass:"buttons"},[d("px-button",{on:{click:e.getCheckedNodes}},[e._v("通过 node 获取")]),e._v(" "),d("px-button",{on:{click:e.getCheckedKeys}},[e._v("通过 key 获取")]),e._v(" "),d("px-button",{on:{click:e.setCheckedNodes}},[e._v("通过 node 设置")]),e._v(" "),d("px-button",{on:{click:e.setCheckedKeys}},[e._v("通过 key 设置")]),e._v(" "),d("px-button",{on:{click:e.resetChecked}},[e._v("清空")])],1)],1)}),[],!1,null,"7bef4026",null);t.default=c.exports}}]);