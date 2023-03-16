import { n as normalizeComponent, g as getToken } from "./main-91de07e7.js";
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
      "span": 4,
      "xs": 24
    }
  }, [_c("div", {
    staticClass: "head-container"
  }, [_c("el-input", {
    staticStyle: {
      "margin-bottom": "20px"
    },
    attrs: {
      "placeholder": "请输入部门名称",
      "clearable": "",
      "size": "small",
      "prefix-icon": "el-icon-search"
    },
    model: {
      value: _vm.deptName,
      callback: function($$v) {
        _vm.deptName = $$v;
      },
      expression: "deptName"
    }
  })], 1), _c("div", {
    staticClass: "head-container"
  })]), _c("el-col", {
    attrs: {
      "span": 20,
      "xs": 24
    }
  })], 1)], 1);
};
var staticRenderFns = [];
const __vue2_script = {
  name: "User",
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 用户表格数据
      userList: null,
      // 弹出层标题
      title: "",
      // 部门树选项
      deptOptions: void 0,
      // 是否显示弹出层
      open: false,
      // 部门名称
      deptName: void 0,
      // 默认密码
      initPassword: void 0,
      // 日期范围
      dateRange: [],
      // 岗位选项
      postOptions: [],
      // 角色选项
      roleOptions: [],
      // 表单参数
      form: {},
      defaultProps: {
        children: "children",
        label: "label"
      },
      // 用户导入参数
      upload: {
        // 是否显示弹出层（用户导入）
        open: false,
        // 弹出层标题（用户导入）
        title: "",
        // 是否禁用上传
        isUploading: false,
        // 是否更新已经存在的用户数据
        updateSupport: 0,
        // 设置上传的请求头部
        headers: { Authorization: "Bearer " + getToken() },
        // 上传的地址
        url: {}.VUE_APP_BASE_API + "/system/user/importData"
      },
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        userName: void 0,
        phonenumber: void 0,
        status: void 0,
        deptId: void 0
      },
      // 列信息
      columns: [
        { key: 0, label: `用户编号`, visible: true },
        { key: 1, label: `用户名称`, visible: true },
        { key: 2, label: `用户昵称`, visible: true },
        { key: 3, label: `部门`, visible: true },
        { key: 4, label: `手机号码`, visible: true },
        { key: 5, label: `状态`, visible: true },
        { key: 6, label: `创建时间`, visible: true }
      ],
      // 表单校验
      rules: {
        userName: [
          { required: true, message: "用户名称不能为空", trigger: "blur" },
          { min: 2, max: 20, message: "用户名称长度必须介于 2 和 20 之间", trigger: "blur" }
        ],
        nickName: [
          { required: true, message: "用户昵称不能为空", trigger: "blur" }
        ],
        password: [
          { required: true, message: "用户密码不能为空", trigger: "blur" },
          { min: 5, max: 20, message: "用户密码长度必须介于 5 和 20 之间", trigger: "blur" }
        ],
        email: [
          {
            type: "email",
            message: "请输入正确的邮箱地址",
            trigger: ["blur", "change"]
          }
        ],
        phonenumber: [
          {
            pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
            message: "请输入正确的手机号码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  watch: {},
  created() {
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
