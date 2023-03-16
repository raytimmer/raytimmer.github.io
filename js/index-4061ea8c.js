import { n as normalizeComponent } from "./main-91de07e7.js";
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "app-container home"
  }, [_c("el-row", {
    attrs: {
      "gutter": 20
    }
  }, [_c("el-col", {
    staticStyle: {
      "padding-left": "20px"
    },
    attrs: {
      "sm": 24,
      "lg": 12
    }
  }, [_c("h2", [_vm._v("后台管理框架")]), _c("p", [_vm._v(" 一直想做一款后台管理系统，看了很多优秀的开源项目但是发现没有合适自己的。于是利用空闲休息时间开始自己写一套后台系统。如此有了管理系统，她可以用于所有的Web应用程序，如网站管理后台，网站会员中心，CMS，CRM，OA等等，当然，您也可以对她进行深度定制，以做出更强系统。所有前端后台代码封装过后十分精简易上手，出错概率低。同时支持移动客户端访问。系统会陆续更新一些实用功能。 ")]), _c("p", [_c("b", [_vm._v("当前版本:")]), _vm._v(" "), _c("span", [_vm._v("v" + _vm._s(_vm.version))])])]), _c("el-col", {
    staticStyle: {
      "padding-left": "50px"
    },
    attrs: {
      "sm": 24,
      "lg": 12
    }
  }, [_c("el-row", [_c("el-col", {
    attrs: {
      "span": 12
    }
  }, [_c("h2", [_vm._v("技术选型")])])], 1), _c("el-row", [_c("el-col", {
    attrs: {
      "span": 6
    }
  }, [_c("h4", [_vm._v("后端技术")]), _c("ul", [_c("li", [_vm._v("SpringBoot")]), _c("li", [_vm._v("Spring Security")]), _c("li", [_vm._v("JWT")]), _c("li", [_vm._v("MyBatis")]), _c("li", [_vm._v("Druid")]), _c("li", [_vm._v("Fastjson")]), _c("li", [_vm._v("...")])])]), _c("el-col", {
    attrs: {
      "span": 6
    }
  }, [_c("h4", [_vm._v("前端技术")]), _c("ul", [_c("li", [_vm._v("Vue")]), _c("li", [_vm._v("Vuex")]), _c("li", [_vm._v("Element-ui")]), _c("li", [_vm._v("Axios")]), _c("li", [_vm._v("Sass")]), _c("li", [_vm._v("Quill")]), _c("li", [_vm._v("...")])])])], 1)], 1)], 1), _c("el-divider"), _c("el-row", {
    attrs: {
      "gutter": 20
    }
  }, [_c("el-col", {
    attrs: {
      "xs": 24,
      "sm": 24,
      "md": 12,
      "lg": 8
    }
  }, [_c("el-card", {
    staticClass: "update-log"
  }, [_c("div", {
    staticClass: "clearfix",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c("span", [_vm._v("联系信息")])]), _c("div", {
    staticClass: "body"
  })])], 1), _c("el-col", {
    attrs: {
      "xs": 24,
      "sm": 24,
      "md": 12,
      "lg": 8
    }
  }, [_c("el-card", {
    staticClass: "update-log"
  }, [_c("div", {
    staticClass: "clearfix",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c("span", [_vm._v("更新日志")])]), _c("el-collapse", {
    attrs: {
      "accordion": ""
    }
  }, [_c("el-collapse-item", {
    attrs: {
      "title": "v1.0.0 - 2023-03-15"
    }
  }, [_c("ol", [_c("li", [_vm._v("前后端分离系统开发")])])])], 1)], 1)], 1), _c("el-col", {
    attrs: {
      "xs": 24,
      "sm": 24,
      "md": 12,
      "lg": 8
    }
  }, [_c("el-card", {
    staticClass: "update-log"
  }, [_c("div", {
    staticClass: "clearfix",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c("span", [_vm._v("捐赠支持")])]), _c("div", {
    staticClass: "body"
  }, [_c("span", {
    staticStyle: {
      "display": "inline-block",
      "height": "30px",
      "line-height": "30px"
    }
  }, [_vm._v("你可以请作者喝杯咖啡表示鼓励")])])])], 1)], 1)], 1);
};
var staticRenderFns = [];
const index_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script = {
  name: "Index",
  data() {
    return {
      // 版本号
      version: "1.0.0"
    };
  },
  methods: {
    goTarget(href) {
      window.open(href, "_blank");
    }
  }
};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  __vue2_script,
  render,
  staticRenderFns,
  false,
  __vue2_injectStyles,
  "7fe63516",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const index = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  index as default
};
