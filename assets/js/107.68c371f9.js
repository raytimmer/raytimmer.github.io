(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1030:function(t,a,n){"use strict";var o=n(865);n.n(o).a},1170:function(t,a,n){"use strict";n.r(a);var o={data:function(){return{tableData:[{id:"12987122",name:"王小虎",amount1:"234",amount2:"3.2",amount3:10},{id:"12987123",name:"王小虎",amount1:"165",amount2:"4.43",amount3:12},{id:"12987124",name:"王小虎",amount1:"324",amount2:"1.9",amount3:9},{id:"12987125",name:"王小虎",amount1:"621",amount2:"2.2",amount3:17},{id:"12987126",name:"王小虎",amount1:"539",amount2:"4.1",amount3:15}]}},methods:{arraySpanMethod:function(t){t.row,t.column;var a=t.rowIndex,n=t.columnIndex;if(a%2==0){if(0===n)return[1,2];if(1===n)return[0,0]}},objectSpanMethod:function(t){t.row,t.column;var a=t.rowIndex;if(0===t.columnIndex)return a%2==0?{rowspan:2,colspan:1}:{rowspan:0,colspan:0}}}},e=(n(1030),n(1)),l=Object(e.a)(o,(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"demo"},[n("px-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,"span-method":t.arraySpanMethod,border:""}},[n("px-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),t._v(" "),n("px-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),n("px-table-column",{attrs:{prop:"amount1",sortable:"",label:"数值 1"}}),t._v(" "),n("px-table-column",{attrs:{prop:"amount2",sortable:"",label:"数值 2"}}),t._v(" "),n("px-table-column",{attrs:{prop:"amount3",sortable:"",label:"数值 3"}})],1),t._v(" "),n("px-table",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{data:t.tableData,"span-method":t.objectSpanMethod,border:""}},[n("px-table-column",{attrs:{prop:"id",label:"ID",width:"180"}}),t._v(" "),n("px-table-column",{attrs:{prop:"name",label:"姓名"}}),t._v(" "),n("px-table-column",{attrs:{prop:"amount1",label:"数值 1（元）"}}),t._v(" "),n("px-table-column",{attrs:{prop:"amount2",label:"数值 2（元）"}}),t._v(" "),n("px-table-column",{attrs:{prop:"amount3",label:"数值 3（元）"}})],1)],1)}),[],!1,null,null,null);a.default=l.exports},865:function(t,a,n){}}]);