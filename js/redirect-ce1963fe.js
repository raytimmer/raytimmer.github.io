import { n as normalizeComponent } from "./main-91de07e7.js";
const __vue2_script = {
  created() {
    const { params, query } = this.$route;
    const { path } = params;
    this.$router.replace({ path: "/" + path, query });
  },
  render: function(h) {
    return h("");
  }
};
let __vue2_render, __vue2_staticRenderFns;
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(
  __vue2_script,
  __vue2_render,
  __vue2_staticRenderFns,
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
const redirect = /* @__PURE__ */ function() {
  return __component__.exports;
}();
export {
  redirect as default
};
