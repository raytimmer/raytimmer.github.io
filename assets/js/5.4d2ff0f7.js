(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1049:function(e,t,n){"use strict";var i=n(2),a=n(54).findIndex,r=n(168),d=n(28),l=!0,o=d("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){l=!1})),i({target:"Array",proto:!0,forced:l||!o},{findIndex:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),r("findIndex")},1050:function(e,t,n){"use strict";var i=n(884);n.n(i).a},1066:function(e,t,n){"use strict";n.r(t);n(1049),n(745);var i=1e3,a={data:function(){var e,t,n,i=[{id:1,label:"一级 1",children:[{id:4,label:"二级 1-1",children:[{id:9,label:"三级 1-1-1"},{id:10,label:"三级 1-1-2"}]}]},{id:2,label:"一级 2",children:[{id:5,label:"二级 2-1"},{id:6,label:"二级 2-2"}]},{id:3,label:"一级 3",children:[{id:7,label:"二级 3-1"},{id:8,label:"二级 3-2"}]}];return e={data:JSON.parse(JSON.stringify(i))},t="data",n=JSON.parse(JSON.stringify(i)),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},methods:{append:function(e){var t={id:i++,label:"testtest",children:[]};e.children||this.$set(e,"children",[]),e.children.push(t)},remove:function(e,t){var n=e.parent,i=n.data.children||n.data,a=i.findIndex((function(e){return e.id===t.id}));i.splice(a,1)},renderContent:function(e,t){var n=this,i=t.node,a=t.data;t.store;return e("span",{class:"custom-tree-node"},[e("span",[i.label]),e("span",[e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return n.append(a)}}},["Append"]),e("el-button",{attrs:{size:"mini",type:"text"},on:{click:function(){return n.remove(i,a)}}},["Delete"])])])}}},r=(n(1050),n(1)),d=Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo"},[n("div",{staticClass:"custom-tree-container"},[n("div",{staticClass:"block"},[n("p",[e._v("使用 render-content")]),e._v(" "),n("el-tree",{attrs:{data:e.data,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1,"render-content":e.renderContent}})],1),e._v(" "),n("div",{staticClass:"block"},[n("p",[e._v("使用 scoped slot")]),e._v(" "),n("el-tree",{attrs:{data:e.data,"show-checkbox":"","node-key":"id","default-expand-all":"","expand-on-click-node":!1},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.node,a=t.data;return n("span",{staticClass:"custom-tree-node"},[n("span",[e._v(e._s(i.label))]),e._v(" "),n("span",[n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.append(a)}}},[e._v("\n          Append\n        ")]),e._v(" "),n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(){return e.remove(i,a)}}},[e._v("\n          Delete\n        ")])],1)])}}])})],1)])])}),[],!1,null,"3ba1b61a",null);t.default=d.exports},745:function(e,t,n){"use strict";var i=n(2),a=n(166),r=n(79),d=n(19),l=n(20),o=n(167),c=n(81),s=n(80),u=n(28),f=s("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,h=Math.min;i({target:"Array",proto:!0,forced:!f||!p},{splice:function(e,t){var n,i,s,u,f,p,v=l(this),x=d(v.length),m=a(e,x),k=arguments.length;if(0===k?n=i=0:1===k?(n=0,i=x-m):(n=k-2,i=h(b(r(t),0),x-m)),x+n-i>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(s=o(v,i),u=0;u<i;u++)(f=m+u)in v&&c(s,u,v[f]);if(s.length=i,n<i){for(u=m;u<x-i;u++)p=u+n,(f=u+i)in v?v[p]=v[f]:delete v[p];for(u=x;u>x-i+n;u--)delete v[u-1]}else if(n>i)for(u=x-i;u>m;u--)p=u+n-1,(f=u+i-1)in v?v[p]=v[f]:delete v[p];for(u=0;u<n;u++)v[u+m]=arguments[u+2];return v.length=x-i+n,s}})},884:function(e,t,n){}}]);