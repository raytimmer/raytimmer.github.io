(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1206:function(e,t,a){"use strict";a.r(t);var n={data:function(){return{pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},value1:"",value2:""}}},i=(a(955),a(1)),s=Object(i.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo"},[a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[e._v("默认")]),e._v(" "),a("px-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),a("div",{staticClass:"block"},[a("span",{staticClass:"demonstration"},[e._v("带快捷选项")]),e._v(" "),a("px-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)])}),[],!1,null,"5b100952",null);t.default=s.exports},793:function(e,t,a){},955:function(e,t,a){"use strict";var n=a(793);a.n(n).a}}]);