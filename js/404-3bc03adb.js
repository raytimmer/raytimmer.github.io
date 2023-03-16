import { n as normalizeComponent } from "./main-91de07e7.js";
const __$_require_0b9a4e4e__ = "" + new URL("../png/404-538aa4d7.png", import.meta.url).href;
const __$_require_923f04d0__ = "" + new URL("../png/404_cloud-98e7ac66.png", import.meta.url).href;
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "wscn-http404-container"
  }, [_c("div", {
    staticClass: "wscn-http404"
  }, [_vm._m(0), _c("div", {
    staticClass: "bullshit"
  }, [_c("div", {
    staticClass: "bullshit__oops"
  }, [_vm._v(" 404错误! ")]), _c("div", {
    staticClass: "bullshit__headline"
  }, [_vm._v(" " + _vm._s(_vm.message) + " ")]), _c("div", {
    staticClass: "bullshit__info"
  }, [_vm._v(" 对不起，您正在寻找的页面不存在。尝试检查URL的错误，然后按浏览器上的刷新按钮或尝试在我们的应用程序中找到其他内容。 ")]), _c("router-link", {
    staticClass: "bullshit__return-home",
    attrs: {
      "to": "/"
    }
  }, [_vm._v(" 返回首页 ")])], 1)])]);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "pic-404"
  }, [_c("img", {
    staticClass: "pic-404__parent",
    attrs: {
      "src": __$_require_0b9a4e4e__,
      "alt": "404"
    }
  }), _c("img", {
    staticClass: "pic-404__child left",
    attrs: {
      "src": __$_require_923f04d0__,
      "alt": "404"
    }
  }), _c("img", {
    staticClass: "pic-404__child mid",
    attrs: {
      "src": __$_require_923f04d0__,
      "alt": "404"
    }
  }), _c("img", {
    staticClass: "pic-404__child right",
    attrs: {
      "src": __$_require_923f04d0__,
      "alt": "404"
    }
  })]);
}];
const _404_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script = {
  name: "Page404",
  computed: {
    message() {
      return "找不到网页！";
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
  "5ba29122",
  null,
  null
);
function __vue2_injectStyles(context) {
  for (let o in __cssModules) {
    this[o] = __cssModules[o];
  }
}
const _404 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  _404 as default
};
