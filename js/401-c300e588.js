import { n as normalizeComponent } from "./main-91de07e7.js";
const errGif = "" + new URL("../gif/401-a61ddb94.gif", import.meta.url).href;
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "errPage-container"
  }, [_c("el-button", {
    staticClass: "pan-back-btn",
    attrs: {
      "icon": "arrow-left"
    },
    on: {
      "click": _vm.back
    }
  }, [_vm._v(" 返回 ")]), _c("el-row", [_c("el-col", {
    attrs: {
      "span": 12
    }
  }, [_c("h1", {
    staticClass: "text-jumbo text-ginormous"
  }, [_vm._v(" 401错误! ")]), _c("h2", [_vm._v("您没有访问权限！")]), _c("h6", [_vm._v("对不起，您没有访问权限，请不要进行非法操作！您可以返回主页面")]), _c("ul", {
    staticClass: "list-unstyled"
  }, [_c("li", {
    staticClass: "link-type"
  }, [_c("router-link", {
    attrs: {
      "to": "/"
    }
  }, [_vm._v(" 回首页 ")])], 1)])]), _c("el-col", {
    attrs: {
      "span": 12
    }
  }, [_c("img", {
    attrs: {
      "src": _vm.errGif,
      "width": "313",
      "height": "428",
      "alt": "Girl has dropped her ice cream."
    }
  })])], 1)], 1);
};
var staticRenderFns = [];
const _401_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script = {
  name: "Page401",
  data() {
    return {
      errGif: errGif + "?" + +new Date()
    };
  },
  methods: {
    back() {
      if (this.$route.query.noGoBack) {
        this.$router.push({ path: "/" });
      } else {
        this.$router.go(-1);
      }
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
  "ff8f3742",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const _401 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  _401 as default
};
