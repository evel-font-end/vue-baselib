webpackJsonpvue_baselib([13],{

/***/ "+txY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_box_container_2__ = __webpack_require__("lCot");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cell_crumbs_crumbs_style_1__ = __webpack_require__("D+m7");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cell_crumbs_crumbs_style_2__ = __webpack_require__("y+8t");

//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
    name: 'Crumbs',
    components: {
        'box-container': __WEBPACK_IMPORTED_MODULE_1__common_box_container_2__["a" /* default */],
        'crumbs-style-1': __WEBPACK_IMPORTED_MODULE_2__cell_crumbs_crumbs_style_1__["a" /* default */],
        'crumbs-style-2': __WEBPACK_IMPORTED_MODULE_3__cell_crumbs_crumbs_style_2__["a" /* default */]
    },
    data: function data() {
        return {
            getCrumb1Data: [],
            getCrumb2Data: [],
            crumbShow1: false,
            crumbShow2: false
        };
    },
    created: function created() {
        // const _this = this
        // pie-style-1 fetch data
        // this.$http.get('/pie/eventTypeSource')
        //   .then(res => {
        //     if (res.state && res.data) {
        //       this.eventTypeFetchData = res.data
        //       this.spinShow1 = false
        //     }
        //   })
        //   .catch(err => {
        //     console.log(err)
        //     this.$fetchMock('/static/mock/pie/eventTypeSource.json')
        //       .then(res => {
        //         this.eventTypeFetchData = res
        //         this.spinShow1 = false
        //       })
        //   })
    },

    methods: {
        showOption: function showOption(ref) {
            console.log(JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.$refs[ref].option)));
        }
    }
});

/***/ }),

/***/ "/Uau":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.crumbs-container[data-v-1bd6e2b9] {\n  width: 100%;\n  height: 100%;\n}\n.crumbs-container[data-v-1bd6e2b9] .breadcumb-item .el-breadcrumb .el-breadcrumb__item .el-breadcrumb__inner {\n    font-size: 14px;\n    font-weight: 400;\n    color: #9bcdff;\n    line-height: 20px;\n}\n.crumbs-container[data-v-1bd6e2b9] .breadcumb-item .el-breadcrumb .el-breadcrumb__item:last-child .el-breadcrumb__inner {\n    font-size: 14px;\n    font-weight: 400;\n    color: #36B7FD;\n    line-height: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "2HvS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"crumbs2-container"},[_c('div',{staticClass:"breadcumb-item"},[_c('el-breadcrumb',{attrs:{"separator-class":"el-icon-arrow-right"}},_vm._l((_vm.breadcrumbList1),function(item,index){return _c('el-breadcrumb-item',{key:index,attrs:{"to":item.path}},[_vm._v("\n                "+_vm._s(item.title)+"\n            ")])}),1)],1)])}
var staticRenderFns = []


/***/ }),

/***/ "47Om":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("EuQX");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("65aafac5", content, true, {});

/***/ }),

/***/ "4YNJ":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("i43R");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("7191fb66", content, true, {});

/***/ }),

/***/ "8GO+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('box-container',{staticClass:"bg-grey",attrs:{"title":'面包屑1',"spinShow":_vm.crumbShow1,"width":'calc(32.3% - 13.3px)'},on:{"showOptionHandler":function($event){return _vm.showOption("board2")}}},[_c('crumbs-style-1')],1),_vm._v(" "),_c('box-container',{staticClass:"bg-grey",attrs:{"title":'面包屑2',"spinShow":_vm.crumbShow2,"width":'40%'},on:{"showOptionHandler":function($event){return _vm.showOption("board3")}}},[_c('crumbs-style-2')],1)],1)}
var staticRenderFns = []


/***/ }),

/***/ "D+m7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_crumbs_style_1_vue__ = __webpack_require__("YIbH");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bd6e2b9_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_crumbs_style_1_vue__ = __webpack_require__("dSI/");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
function injectStyle (context) {
  __webpack_require__("bX5A")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1bd6e2b9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_crumbs_style_1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bd6e2b9_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_crumbs_style_1_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1bd6e2b9_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_crumbs_style_1_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "EuQX":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.crumbs2-container[data-v-5d6f8924] {\n  width: 100%;\n  height: 100%;\n}\n.crumbs2-container .breadcumb-item[data-v-5d6f8924] .el-breadcrumb {\n    width: auto;\n}\n.crumbs2-container .breadcumb-item[data-v-5d6f8924] .el-breadcrumb .el-breadcrumb__item .el-breadcrumb__inner {\n      font-size: 14px;\n      font-weight: 400;\n      color: #9bcdff;\n      line-height: 20px;\n}\n.crumbs2-container .breadcumb-item[data-v-5d6f8924] .el-breadcrumb .el-breadcrumb__item:last-child .el-breadcrumb__inner {\n      font-size: 14px;\n      font-weight: 400;\n      color: #36B7FD;\n      line-height: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "YIbH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: "CrumbsStyle1",
    props: {
        // 测试数据
        breadcrumbList1: {
            type: Array,
            default: function _default() {
                return [{ path: '/bar', title: '混合图表' }, { path: '/line', title: '折线图' }, { path: '/pie', title: '饼状图' }, { path: '/board', title: '仪表盘' }, { path: '/crumbs', title: '面包屑' }];
            }
        }
    },
    data: function data() {
        return {
            breadcrumbList: []
        };
    },

    watch: {
        $route: {
            handler: function handler(val, oldval) {
                this.breadcrumbList = this.getBreadcrumbList(val);
            },

            deep: true,
            immediate: true
        }
    },
    mounted: function mounted() {},

    methods: {
        // watchBreadcrumb(matchedRoutes) {
        //     console.log('matchedRoutes', matchedRoutes)
        //     let matched = [];
        //     if (matchedRoutes.length) {
        //         matched = matchedRoutes.filter((item) => {
        //             item.meta && item.meta.title && item.meta.breadcrumb !== false
        //         })
        //     }
        //     return matched;
        // },
        getBreadcrumbList: function getBreadcrumbList(routerInformation) {
            var crumbsList = [];
            var matchedRoutes = routerInformation.matched;
            if (matchedRoutes.length) {
                matchedRoutes.map(function (item) {
                    console.log(item);
                    crumbsList.push({
                        path: item.path,
                        title: item.meta.title
                    });
                });
            }
            return crumbsList;
        }
    }
});

/***/ }),

/***/ "a6Dj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    spinShow: {
      require: true,
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    title: {
      type: String,
      default: ''
    },
    toolsShow: {
      type: Boolean,
      default: function _default() {
        return true;
      }
    },
    width: {
      type: String,
      default: '48%'
    },
    height: {
      type: String,
      default: 'auto'
      /* showOptionHandler: {
        type: Function,
        default: () => {
          console.log("当前组件无配置项");
        }
      } */
    } },
  data: function data() {
    return {
      isActive: false
    };
  },

  methods: {
    clickHandler: function clickHandler() {
      console.log('5555');
      this.$emit("showOptionHandler");
    }
  }
});

/***/ }),

/***/ "bX5A":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("/Uau");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("007f26b0", content, true, {});

/***/ }),

/***/ "dSI/":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"crumbs-container"},[_c('div',{staticClass:"breadcumb-item"},[_c('el-breadcrumb',{attrs:{"separator":"/"}},_vm._l((_vm.breadcrumbList1),function(item,index){return _c('el-breadcrumb-item',{key:index,attrs:{"to":item.path}},[_vm._v("\n                "+_vm._s(item.title)+"\n            ")])}),1)],1)])}
var staticRenderFns = []


/***/ }),

/***/ "f9L8":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.show-item[data-v-ce6f9a8e] {\n  margin: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border-radius: 16px;\n  background-color: #132845;\n  padding: 20px;\n  padding-bottom: 60px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n}\n.show-item .title[data-v-ce6f9a8e] {\n    font-size: 16px;\n    font-family: PingFangSC, PingFangSC-Semibold;\n    font-weight: 600;\n    text-align: left;\n    color: #ffffff;\n    line-height: 22px;\n    margin-bottom: 30px;\n}\n.show-item .content[data-v-ce6f9a8e] {\n    width: 100%;\n}\n.show-item.bg-grey[data-v-ce6f9a8e] {\n    /* background-color: rgba(0, 0, 0, .6); */\n}\n.show-item .tools-cont[data-v-ce6f9a8e] {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 40px;\n    line-height: 40px;\n    padding: 0 15px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    text-align: right;\n    background-color: rgba(0, 0, 0, 0.4);\n    border-radius: 0 0 10px 10px;\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n    -webkit-transition: all 0.3s ease-in;\n    transition: all 0.3s ease-in;\n}\n.show-item .tools-cont.active[data-v-ce6f9a8e] {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n}\n.tools-btn[data-v-ce6f9a8e] {\n  color: #fff;\n}\n.tools-btn[data-v-ce6f9a8e]:hover {\n    color: #57a3f3;\n}\n", ""]);

// exports


/***/ }),

/***/ "i43R":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("FZ+f")(false);
// imports


// module
exports.push([module.i, "\n.content[data-v-8a2459da] {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "jxb5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__ = __webpack_require__("+txY");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8a2459da_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__ = __webpack_require__("8GO+");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
function injectStyle (context) {
  __webpack_require__("4YNJ")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8a2459da"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8a2459da_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8a2459da_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_index_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "lCot":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_box_container_2_vue__ = __webpack_require__("a6Dj");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ce6f9a8e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_box_container_2_vue__ = __webpack_require__("qYnB");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
function injectStyle (context) {
  __webpack_require__("p5PS")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ce6f9a8e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_box_container_2_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ce6f9a8e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_box_container_2_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ce6f9a8e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_box_container_2_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "mvHQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("qkKv"), __esModule: true };

/***/ }),

/***/ "p5PS":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("f9L8");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("rjj0").default
var update = add("395acbe9", content, true, {});

/***/ }),

/***/ "qYnB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"show-item",style:('height:'+ _vm.height +';'+'width:'+ _vm.width +';'),on:{"mouseenter":function($event){_vm.isActive = true},"mouseleave":function($event){_vm.isActive = false}}},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"content"},[_vm._t("default")],2),_vm._v(" "),(_vm.spinShow)?_c('Spin',{attrs:{"size":"large","fix":""}}):_vm._e(),_vm._v(" "),(_vm.toolsShow)?_c('div',{class:["tools-cont", _vm.isActive ? "active" : ""]},[_c('Button',{staticClass:"tools-btn",attrs:{"type":"ghost","icon":"code-working","size":"small"},on:{"click":_vm.clickHandler}},[_vm._v("查看option")])],1):_vm._e()],1)}
var staticRenderFns = []


/***/ }),

/***/ "qkKv":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("FeBl");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "y+8t":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_crumbs_style_2_vue__ = __webpack_require__("yEei");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d6f8924_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_crumbs_style_2_vue__ = __webpack_require__("2HvS");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("XyMi");
function injectStyle (context) {
  __webpack_require__("47Om")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5d6f8924"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_index_js_ref_0_1_crumbs_style_2_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d6f8924_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_crumbs_style_2_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5d6f8924_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_index_js_ref_0_1_crumbs_style_2_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "yEei":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    name: "CrumbsStyle2",
    props: {
        // 测试数据
        breadcrumbList1: {
            type: Array,
            default: function _default() {
                return [{ path: '/bar', title: '混合图表' }, { path: '/line', title: '折线图' }, { path: '/crumbs', title: '面包屑' }];
            }
        }
    },
    data: function data() {
        return {
            breadcrumbList: []
        };
    },

    watch: {
        $route: {
            handler: function handler(val, oldval) {
                this.breadcrumbList = this.getBreadcrumbList(val);
            },

            deep: true,
            immediate: true
        }
    },
    mounted: function mounted() {},

    methods: {
        // watchBreadcrumb(matchedRoutes) {
        //     console.log('matchedRoutes', matchedRoutes)
        //     let matched = [];
        //     if (matchedRoutes.length) {
        //         matched = matchedRoutes.filter((item) => {
        //             item.meta && item.meta.title && item.meta.breadcrumb !== false
        //         })
        //     }
        //     return matched;
        // },
        getBreadcrumbList: function getBreadcrumbList(routerInformation) {
            var crumbsList = [];
            var matchedRoutes = routerInformation.matched;
            if (matchedRoutes.length) {
                matchedRoutes.map(function (item) {
                    console.log(item);
                    crumbsList.push({
                        path: item.path,
                        title: item.meta.title
                    });
                });
            }
            return crumbsList;
        }
    }
});

/***/ })

});