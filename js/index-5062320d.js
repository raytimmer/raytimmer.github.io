import { n as normalizeComponent } from "./main-91de07e7.js";
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", {
    staticClass: "app-container"
  }, [_c("el-row", {
    attrs: {
      "gutter": 20
    }
  }, [_c("el-col", {
    attrs: {
      "span": 6,
      "xs": 24
    }
  }, [_c("el-card", {
    staticClass: "box-card"
  }, [_c("div", {
    staticClass: "clearfix",
    attrs: {
      "slot": "header"
    },
    slot: "header"
  }, [_c("span", [_vm._v("个人信息")])])])], 1)], 1)], 1);
};
var staticRenderFns = [];
const __vue2_script = {
  name: "Profile",
  // components: { userAvatar, userInfo, resetPwd },
  data() {
    return {
      user: {},
      roleGroup: {},
      postGroup: {},
      activeTab: "userinfo"
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
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
  null,
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
