webpackJsonpvue_baselib([11],{

/***/ "09jV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"content"},[_c('box-container',{staticClass:"bg-grey",attrs:{"title":"仪表盘2"},on:{"showOptionHandler":function($event){return _vm.showOption("board2")}}},[_c('board-style-2',{ref:"board2",attrs:{"sid":"board2","percentage":"80"}})],1),_vm._v(" "),_c('box-container',{staticClass:"bg-grey",attrs:{"title":"仪表盘3"},on:{"showOptionHandler":function($event){return _vm.showOption("board3")}}},[_c('board-style-3',{ref:"board3",attrs:{"sid":"board3","percentage":"80"}})],1)],1)}
var staticRenderFns = []


/***/ }),

/***/ "0Hgx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"board-container"},[_c('div',{staticClass:"com-chart"},[_c('svg',{staticClass:"circle-line",attrs:{"width":"300px","height":"210px","viewBox":"0 0 267 219","version":"1.1","xmlns":"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[_c('title',[_vm._v("路径")]),_vm._v(" "),_c('defs',[_c('linearGradient',{attrs:{"x1":"54.9676335%","y1":"89.3607194%","x2":"62.4135293%","y2":"16.6241132%","id":"linearGradient-1"}},[_c('stop',{attrs:{"stop-color":"#398BFF","stop-opacity":"0","offset":"0%"}}),_vm._v(" "),_c('stop',{attrs:{"stop-color":"#25EDA0","offset":"50.4955403%"}}),_vm._v(" "),_c('stop',{attrs:{"stop-color":"#39D6FF","offset":"100%"}})],1)],1),_vm._v(" "),_c('g',{attrs:{"id":"确定的效果","stroke":"none","stroke-width":"1","fill":"none","fill-rule":"evenodd"}},[_c('g',{attrs:{"id":"摄像头","transform":"translate(-113.000000, -215.000000)","fill":"url(#linearGradient-1)","fill-rule":"nonzero"}},[_c('g',{attrs:{"id":"编组-45","transform":"translate(40.000000, 210.000000)"}},[_c('g',{attrs:{"id":"今日事件数据","transform":"translate(73.000000, 0.000000)"}},[_c('g',{attrs:{"id":"编组-27","transform":"translate(0.000000, 0.502242)"}},[_c('path',{attrs:{"d":"M133.737778,5.09321173 C207.323506,5.09321173 266.975556,65.0303401 266.975556,138.965346 C266.975556,169.582391 256.714429,198.622894 238.17864,222.098745 L237.614419,222.808427 L236.833751,222.183481 C255.584626,198.760338 265.975556,169.662518 265.975556,138.965346 C265.975556,65.5815604 206.770151,6.09321173 133.737778,6.09321173 C60.7054048,6.09321173 1.5,65.5815604 1.5,138.965346 C1.5,168.920933 11.3936945,197.358133 29.31165,220.494177 L29.8570725,221.193643 L29.070522,221.811169 C10.6708788,198.375307 0.5,169.449352 0.5,138.965346 C0.5,65.0303401 60.15205,5.09321173 133.737778,5.09321173 Z","id":"路径"}})])])])])])]),_vm._v(" "),_c('div',{staticClass:"ball"}),_vm._v(" "),_c('div',{ref:"gauge",staticClass:"gauge-img"}),_vm._v(" "),_c('div',{staticClass:"todayEvents"},[_c('p',{staticClass:"num"},[_vm._v(_vm._s(_vm.percentage))]),_vm._v(" "),_c('p',{staticClass:"text"},[_vm._v("今日事件")])])])])}
var staticRenderFns = []


/***/ }),

/***/ "2M5E":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("UTlt")(false);
// imports


// module
exports.push([module.i, "\n.show-item[data-v-273ba4a8] {\n  width: calc(33.3% - 13.3px);\n  height: 420px;\n  margin-right: 15px;\n  margin-bottom: 15px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  border-radius: 16px;\n  background-color: #132845;\n  padding: 20px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  overflow: hidden;\n}\n.show-item[data-v-273ba4a8]:nth-of-type(3n) {\n    margin-right: 0;\n}\n.show-item .title[data-v-273ba4a8] {\n    font-size: 16px;\n    font-family: PingFangSC, PingFangSC-Semibold;\n    font-weight: 600;\n    text-align: left;\n    color: #ffffff;\n    line-height: 22px;\n    margin-bottom: 35px;\n}\n.show-item .contentMain[data-v-273ba4a8] {\n    width: 100%;\n    height: calc(100% - 60px);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.show-item.bg-grey[data-v-273ba4a8] {\n    /* background-color: rgba(0, 0, 0, .6); */\n}\n.show-item .tools-cont[data-v-273ba4a8] {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 40px;\n    line-height: 40px;\n    padding: 0 15px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    text-align: right;\n    background-color: rgba(0, 0, 0, 0.4);\n    border-radius: 0 0 10px 10px;\n    -webkit-transform: translateY(100%);\n            transform: translateY(100%);\n    -webkit-transition: all 0.3s ease-in;\n    transition: all 0.3s ease-in;\n}\n.show-item .tools-cont.active[data-v-273ba4a8] {\n      -webkit-transform: translateY(0);\n              transform: translateY(0);\n}\n.tools-btn[data-v-273ba4a8] {\n  color: #fff;\n}\n.tools-btn[data-v-273ba4a8]:hover {\n    color: #57a3f3;\n}\n", ""]);

// exports


/***/ }),

/***/ "3cXf":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("VWiu"), __esModule: true };

/***/ }),

/***/ "5r/c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_index_vue__ = __webpack_require__("PtLG");
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_575d5666_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_index_vue__ = __webpack_require__("09jV");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("W5g0");
function injectStyle (context) {
  __webpack_require__("V49y")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-575d5666"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_575d5666_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_index_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_575d5666_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_index_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "8mLu":
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
  name: 'BoardStyle3',
  props: {
    sid: {
      type: String,
      default: function _default() {
        return 'board3';
      }
    },
    percentage: {
      type: String,
      default: function _default() {
        return '80';
      }
    }
  },
  data: function data() {
    return {
      chart: null,
      option: {}
    };
  },

  watch: {
    percentage: function percentage(newVal) {
      if (this.chart === null) {
        this.initChart();
      }
      this.updateChart(newVal);
    }
  },
  created: function created() {},
  mounted: function mounted() {
    this.chart = this.initChart();
    this.updateChart(this.percentage);
  },

  methods: {
    initChart: function initChart() {
      var el = document.getElementById(this.sid);
      var _chart = this.$echarts.init(el);
      window.addEventListener('resize', function () {
        _chart.resize();
      });
      return _chart;
    },
    updateChart: function updateChart(percentage) {
      var demoData = {
        name: '时钟',
        value: percentage,
        pos: ['100%', '60%']
      };
      this.option = {
        title: {
          text: percentage + '%',
          bottom: '6%',
          left: 'center',
          textStyle: {
            fontSize: 28,
            color: '#fff',
            fontFamily: 'DINAlternateBold'
          },
          subtext: '稽核准确率',
          subtextStyle: {
            color: '#99CBFC',
            fontSize: 14,
            top: 'center',
            fontFamily: 'DINAlternateBold'
          }
        },
        series: [
        // 外侧光线
        {
          name: demoData.name,
          type: 'gauge',
          center: demoData.pos,
          radius: '100%',
          startAngle: 225,
          endAngle: -45,
          min: 0,
          max: 100,
          axisLine: {
            show: true,
            lineStyle: {
              width: 2,
              color: [[0, '#25D9FF'], [1, '#00AEFF']]
            }
          },
          axisTick: {
            show: 0
          },
          splitLine: {
            show: 0
          },
          axisLabel: {
            show: 0
          },
          pointer: {
            show: 0
          },
          detail: {
            show: 0
          },
          data: [{
            value: demoData.value
          }]
        },
        // 圆环
        {
          name: '小圆形border',
          type: 'pie',
          hoverAnimation: false,
          legendHoverLink: false,
          radius: ['0%', '11%'],
          z: 0,
          center: demoData.pos,
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 10,
            itemStyle: {
              normal: {
                color: '#004C8E'
              }
            }
          }]
        },
        // {
        //   name: "小圆形透明层",
        //   type: "pie",
        //   hoverAnimation: false,
        //   legendHoverLink: false,
        //   radius: ["0%", "10%"],
        //   z: 0,
        //   center: demoData.pos,
        //   labelLine: {
        //     normal: {
        //       show: false
        //     }
        //   },
        //   data: [
        //     {
        //       value: 0
        //     },
        //     {
        //       value: 10,
        //       itemStyle: {
        //         normal: {
        //           color: "#fff5f5"
        //         }
        //       }
        //     }
        //   ]
        // },
        // 内侧指针、数值显示
        {
          name: demoData.name,
          type: 'gauge',
          center: demoData.pos,
          radius: '90%',
          startAngle: 226,
          endAngle: -46,
          min: 0,
          max: 100,
          axisLine: {
            show: true,
            lineStyle: {
              width: 16,
              color: [[1, new this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#25D9FF'
              }, {
                offset: 0.5,
                color: '#00AEFF'
              }, {
                offset: 1,
                color: '#25D9FF'
              }])]]
            }
          },
          axisTick: {
            show: 0
          },
          splitLine: {
            show: 0
          },
          axisLabel: {
            show: 0
          },
          title: {
            show: false,
            offsetCenter: [0, '65%'],
            color: 'white',
            fontSize: 20,
            // backgroundColor: "#D8d8d8",
            borderRadius: 30,
            padding: 5
          },
          detail: {
            show: false,
            offsetCenter: [0, 60],
            textStyle: {
              fontSize: 25,
              color: '#fff'
            },
            formatter: ['{value}'].join('\n'),

            rich: {
              name: {
                fontSize: 20,
                lineHeight: 10,
                color: '#ddd',
                padding: [30, 0, 0, 0]
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#00FFD6' //长条指针样式
            }
          },
          pointer: {
            show: true,
            length: '66%',
            width: 6
          },
          data: [{
            value: demoData.value,
            name: demoData.name
          }]
        },
        // 外围刻度
        {
          type: 'gauge',
          center: demoData.pos,
          radius: '79%',
          splitNumber: 10,
          min: 0,
          max: 100,
          startAngle: 225,
          endAngle: -45,
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: [[1, 'rgba(0,0,0,0)']]
            }
          }, //仪表盘轴线
          axisTick: { // 坐标轴小标记
            splitNumber: 10, // 每份split细分多少段
            length: 6, // 属性length控制线长
            lineStyle: { // 属性lineStyle控制线条样式
              color: '#129FF6',
              width: 1
            }
          },
          axisLabel: {
            color: '#129FF6',
            fontSize: 12
          }, //刻度节点文字颜色
          //刻度样式
          splitLine: {
            show: true,
            length: 12,
            lineStyle: {
              width: 1,
              color: '#129FF6'
            }
          },
          pointer: {
            show: 0
          },
          detail: {
            show: 0
          }
        }]
      };
      this.chart.setOption(this.option);
    }
  }
});

/***/ }),

/***/ "8o4f":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("L4zZ");
exports = module.exports = __webpack_require__("UTlt")(false);
// imports


// module
exports.push([module.i, "\n.board-container[data-v-21ac214a] {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n@-webkit-keyframes ball-data-v-21ac214a {\nfrom {\n    offset-distance: 0%;\n}\nto {\n    offset-distance: 100%;\n}\n}\n@keyframes ball-data-v-21ac214a {\nfrom {\n    offset-distance: 0%;\n}\nto {\n    offset-distance: 100%;\n}\n}\n.com-chart[data-v-21ac214a] {\n  width: 300px;\n  height: 210px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.com-chart .ball[data-v-21ac214a] {\n    position: absolute;\n    top: -2%;\n    left: 3%;\n    width: 30px;\n    height: 7px;\n    background: url(" + escape(__webpack_require__("eLaf")) + ") no-repeat;\n    background-size: 100% 100%;\n    offset-path: path(\"M133.737778,5.09321173 C207.323506,5.09321173 266.975556,65.0303401 266.975556,138.965346 C266.975556,169.582391 256.714429,198.622894 238.17864,222.098745 L237.614419,222.808427 L236.833751,222.183481 C255.584626,198.760338 265.975556,169.662518 265.975556,138.965346 C265.975556,65.5815604 206.770151,6.09321173 133.737778,6.09321173 C60.7054048,6.09321173 1.5,65.5815604 1.5,138.965346 C1.5,168.920933 11.3936945,197.358133 29.31165,220.494177 L29.8570725,221.193643 L29.070522,221.811169 C10.6708788,198.375307 0.5,169.449352 0.5,138.965346 C0.5,65.0303401 60.15205,5.09321173 133.737778,5.09321173 Z\");\n    offset-distance: 0%;\n    -webkit-animation: ball-data-v-21ac214a 8s linear 0s infinite;\n            animation: ball-data-v-21ac214a 8s linear 0s infinite;\n}\n.com-chart .circle-line[data-v-21ac214a] {\n    position: absolute;\n    width: 300px;\n    height: 210px;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n}\n.com-chart .gauge-img[data-v-21ac214a] {\n    width: 220px;\n    height: 180px;\n    background: url(" + escape(__webpack_require__("Pe8D")) + ") no-repeat;\n    background-size: 100% 100%;\n    margin: 0 auto;\n}\n.com-chart .todayEvents[data-v-21ac214a] {\n    position: absolute;\n    left: 50%;\n    bottom: 10%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n.com-chart .todayEvents .num[data-v-21ac214a] {\n      font-size: 48px;\n      font-family: PingFangSC, PingFangSC-Semibold;\n      font-weight: 600;\n      color: #ffffff;\n      line-height: 36px;\n      letter-spacing: 2px;\n      margin-bottom: 28px;\n      text-align: center;\n}\n.com-chart .todayEvents .text[data-v-21ac214a] {\n      font-size: 16px;\n      font-family: PingFangSC, PingFangSC-Regular;\n      font-weight: 400;\n      color: #ffffff;\n      line-height: 16px;\n      letter-spacing: 1px;\n}\n", ""]);

// exports


/***/ }),

/***/ "BdLF":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("p8un");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("gWR6").default
var update = add("29f3c77b", content, true, {});

/***/ }),

/***/ "Gl9J":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__ = __webpack_require__("a3Yh");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty__);

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
  props: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_defineProperty___default()({
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
    }
  }, 'title', {
    type: String,
    default: '组件'
  }),
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

/***/ "Pe8D":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/camera_gauge.a84a36a.png";

/***/ }),

/***/ "PtLG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("3cXf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_box_container__ = __webpack_require__("yc7N");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cell_board_board_style_1__ = __webpack_require__("fKfW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cell_board_board_style_3__ = __webpack_require__("WOVW");

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
  name: 'Board',
  components: {
    'box-container': __WEBPACK_IMPORTED_MODULE_1__common_box_container__["a" /* default */],
    'board-style-2': __WEBPACK_IMPORTED_MODULE_2__cell_board_board_style_1__["a" /* default */],
    'board-style-3': __WEBPACK_IMPORTED_MODULE_3__cell_board_board_style_3__["a" /* default */]
  },
  data: function data() {
    return {
      eventTypeFetchData: [],
      caringObjectFetchData: [],
      eventHandlingData: [],
      spinShow1: true,
      spinShow2: true,
      spinShow3: true,
      activeRef: ''
    };
  },
  created: function created() {},

  methods: {
    showOption: function showOption(ref) {
      console.log(JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.$refs[ref].option)));
    }
  }
});

/***/ }),

/***/ "V49y":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("YLln");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("gWR6").default
var update = add("5e8a2cd8", content, true, {});

/***/ }),

/***/ "V8LK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'BoardStyle1',
  props: {
    sid: {
      type: String,
      default: function _default() {
        return 'board1';
      }
    },
    percentage: {
      type: String,
      default: function _default() {
        return '80';
      }
    }
  },
  data: function data() {
    return {
      chart: null,
      option: {}
    };
  },

  watch: {
    percentage: function percentage(newVal) {
      if (this.chart === null) {
        this.initChart();
      }
      this.updateChart(newVal);
    }
  },
  created: function created() {},
  mounted: function mounted() {
    this.chart = this.initChart();
    this.updateChart(this.percentage);
  },

  methods: {
    initChart: function initChart() {
      var el = document.getElementById(this.sid);
      var _chart = this.$echarts.init(el);
      window.addEventListener('resize', function () {
        _chart.resize();
      });
      return _chart;
    },
    updateChart: function updateChart(percentage) {
      var demoData = {
        name: '时钟',
        value: percentage,
        pos: ['50%', '60%']
      };
      this.option = {
        title: {
          text: percentage + '%',
          bottom: '6%',
          left: 'center',
          textStyle: {
            fontSize: 28,
            color: '#fff',
            fontFamily: 'DINAlternateBold'
          },
          subtext: '稽核准确率',
          subtextStyle: {
            color: '#99CBFC',
            fontSize: 14,
            top: 'center',
            fontFamily: 'DINAlternateBold'
          }
        },
        series: [
        // 外侧光线
        {
          name: demoData.name,
          type: 'gauge',
          center: demoData.pos,
          radius: '100%',
          startAngle: 225,
          endAngle: -45,
          min: 0,
          max: 100,
          axisLine: {
            show: true,
            lineStyle: {
              width: 2,
              color: [[0, '#25D9FF'], [1, '#00AEFF']]
            }
          },
          axisTick: {
            show: 0
          },
          splitLine: {
            show: 0
          },
          axisLabel: {
            show: 0
          },
          pointer: {
            show: 0
          },
          detail: {
            show: 0
          },
          data: [{
            value: demoData.value
          }]
        },
        // 圆环
        {
          name: '小圆形border',
          type: 'pie',
          hoverAnimation: false,
          legendHoverLink: false,
          radius: ['0%', '21%'],
          z: 0,
          center: demoData.pos,
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 10,
            itemStyle: {
              normal: {
                color: '#004C8E'
              }
            }
          }]
        },
        // {
        //   name: "小圆形透明层",
        //   type: "pie",
        //   hoverAnimation: false,
        //   legendHoverLink: false,
        //   radius: ["0%", "10%"],
        //   z: 0,
        //   center: demoData.pos,
        //   labelLine: {
        //     normal: {
        //       show: false
        //     }
        //   },
        //   data: [
        //     {
        //       value: 0
        //     },
        //     {
        //       value: 10,
        //       itemStyle: {
        //         normal: {
        //           color: "#fff5f5"
        //         }
        //       }
        //     }
        //   ]
        // },
        // 内侧指针、数值显示
        {
          name: demoData.name,
          type: 'gauge',
          center: demoData.pos,
          radius: '80%',
          startAngle: 226,
          endAngle: -46,
          min: 0,
          max: 100,
          axisLine: {
            show: true,
            lineStyle: {
              width: 16,
              color: [[1, this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                offset: 0,
                color: '#25D9FF'
              }, {
                offset: 0.5,
                color: '#00AEFF'
              }, {
                offset: 1,
                color: '#25D9FF'
              }])]]
            }
          },
          axisTick: {
            show: 0
          },
          splitLine: {
            show: 0
          },
          axisLabel: {
            show: 0
          },
          title: {
            show: false,
            offsetCenter: [0, '65%'],
            color: 'white',
            fontSize: 20,
            // backgroundColor: "#D8d8d8",
            borderRadius: 30,
            padding: 5
          },
          detail: {
            show: false,
            offsetCenter: [0, 60],
            textStyle: {
              fontSize: 25,
              color: '#fff'
            },
            formatter: ['{value}'].join('\n'),

            rich: {
              name: {
                fontSize: 20,
                lineHeight: 10,
                color: '#ddd',
                padding: [30, 0, 0, 0]
              }
            }
          },
          itemStyle: {
            normal: {
              color: '#00FFD6' //长条指针样式
            }
          },
          pointer: {
            show: true,
            length: '66%',
            width: 6
          },
          data: [{
            value: demoData.value,
            name: demoData.name
          }]
        },
        // 外围刻度
        {
          type: 'gauge',
          center: demoData.pos,
          radius: '90%',
          splitNumber: 10,
          min: 0,
          max: 100,
          startAngle: 225,
          endAngle: -45,
          axisLine: {
            show: true,
            lineStyle: {
              width: 1,
              color: [[1, 'rgba(0,0,0,0)']]
            }
          }, //仪表盘轴线
          axisTick: { // 坐标轴小标记
            splitNumber: 10, // 每份split细分多少段
            length: 6, // 属性length控制线长
            lineStyle: { // 属性lineStyle控制线条样式
              color: '#129FF6',
              width: 1
            }
          },
          axisLabel: {
            color: '#129FF6',
            fontSize: 12
          }, //刻度节点文字颜色
          //刻度样式
          splitLine: {
            show: true,
            length: 12,
            lineStyle: {
              width: 1,
              color: '#129FF6'
            }
          },
          pointer: {
            show: 0
          },
          detail: {
            show: 0
          }
        }]
      };
      this.chart.setOption(this.option);
    }
  }
});

/***/ }),

/***/ "VWiu":
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__("DH3n");
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),

/***/ "WOVW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_board_style_3_vue__ = __webpack_require__("8mLu");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_21ac214a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_board_style_3_vue__ = __webpack_require__("0Hgx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("W5g0");
function injectStyle (context) {
  __webpack_require__("eDxW")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-21ac214a"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_board_style_3_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_21ac214a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_board_style_3_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_21ac214a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_board_style_3_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "YLln":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("UTlt")(false);
// imports


// module
exports.push([module.i, "\n.content[data-v-575d5666] {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n", ""]);

// exports


/***/ }),

/***/ "YSfY":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("2M5E");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("gWR6").default
var update = add("3eda62fd", content, true, {});

/***/ }),

/***/ "eDxW":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("8o4f");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("gWR6").default
var update = add("522f3bd3", content, true, {});

/***/ }),

/***/ "eLaf":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAOCAYAAAB3u6/pAAADo0lEQVRIS+WVsW/kRBSHvzfzxt5db7Kbi6A4RaAUV53E1SBBT0F5afgvEA0VoaOhoaOnOkoaSv6AkxBNhAQ6mnTouLvE2fXu2h70xnayAZ0ERAgiLK3sncw473vfb2aF/+klt5I7RuXZk4K2nhKrKaoTPAUuFrhmilCQyRjHBOIYJAdOofwSeWtpzP8ueIzCtycFwe8yyncJmxmxmRF0F2nnaDsHmeHiHI1zvMyROMclyICi6e4I6e5RvH2XbtwTILorufID7LyJHD7/Z8G/fjxhfGeHVZyRM0NkD8UKnxObfVT2cORoVGgzvGgqVtqAiiJ98S524waVxnowAzb4NGZ/6+dYA2zM3nENPLXgM+TBhzcH/+JxYPrKlBB2oJklI/bRZg8nY7Q3MBRmxfimM8SWKSdWfA9uIAO8zWk7q6kZ/XMyftmAbl2ynBKglymQP6T6G+TBu38N/PMfcyajgsZP8fUuGmeoFKnI6ALBut52MVPXmZGms5SAzaYVNhRtUWzMWj93O64Gkgx2EAZEDASDbXu79s7heWiwNWaIv5n/Pbh8irzx0cvBj48dr3+csXwxpi4LcjcltjkYoL28VbwL0AaC64pJ/3ArigZpHyvWGjBYSXuwN5jWWPHDvN7wduyHSA9A3RboLbfXo28NGqJu92vnmHwP43eQe2fXwR9Fz+lpxlmdMylG+E0g84rUnRnxAe80gUeL4tZBkkz04JeGe/AE5bp958ywv2qUxT2ttff35od9niDMam87pSbtZYePaxwrNFYIayRu0LjCs8LLKn13rEEqiBW0P0PxFXJvtXWqR+H4JMCeMhoFqiowWwfaoDgNCVydkjWdYYO3iFn0zLrF2+5mzual+X0TzO5wSBlgWtNHMe3p2ABLVBa4eIGXC3xrzwugJJOStlngpSR3Jaus5PCwuunPcGfcflY+OQkU+4EmU7QK+HUg21HWdQeeW1Sdnb4BfCBrNO3j2B9E24fNcPKKCFlc0NYLMneBupJNVRJG57Src16tz7h/f31TiL+zvgO3/fz0/cBrO8rFMjDNFR8Csgk4s2dx913cDV4N3szbvjb7jRW/xLULci1xdYkbnfPeXbP2n7x68Oh4+lNgfx3grpKZ8U0gV+3Ax/3pXHuyZgNUyHhBeLEg++6CoyOL6626rsDvEPj1l8AsKMsefHcirJqarFpTuYoPDiqQeKsIX1JsB/7wkefth5rAizbiNy0HB2uO5NaZ/LNSfgNpE1AeqeOHRgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "fKfW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_board_style_1_vue__ = __webpack_require__("V8LK");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_b3e74c6e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_board_style_1_vue__ = __webpack_require__("w7iK");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("W5g0");
function injectStyle (context) {
  __webpack_require__("BdLF")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b3e74c6e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_board_style_1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_b3e74c6e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_board_style_1_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_b3e74c6e_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_board_style_1_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "p8un":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("UTlt")(false);
// imports


// module
exports.push([module.i, "\n.board-container[data-v-b3e74c6e] {\n  width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "srzQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"show-item",on:{"mouseenter":function($event){_vm.isActive = true},"mouseleave":function($event){_vm.isActive = false}}},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"contentMain"},[_vm._t("default")],2),_vm._v(" "),(_vm.spinShow)?_c('Spin',{attrs:{"size":"large","fix":""}}):_vm._e(),_vm._v(" "),(_vm.toolsShow)?_c('div',{class:["tools-cont", _vm.isActive ? "active" : ""]},[_c('Button',{staticClass:"tools-btn",attrs:{"type":"ghost","icon":"code-working","size":"small"},on:{"click":_vm.clickHandler}},[_vm._v("查看option")])],1):_vm._e()],1)}
var staticRenderFns = []


/***/ }),

/***/ "w7iK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"board-container",attrs:{"id":_vm.sid}})}
var staticRenderFns = []


/***/ }),

/***/ "yc7N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_box_container_vue__ = __webpack_require__("Gl9J");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_273ba4a8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_box_container_vue__ = __webpack_require__("srzQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__("W5g0");
function injectStyle (context) {
  __webpack_require__("YSfY")
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-273ba4a8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_4_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_script_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_box_container_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_273ba4a8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_box_container_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_4_vue_loader_lib_template_compiler_index_id_data_v_273ba4a8_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_4_vue_loader_lib_selector_type_template_index_0_node_modules_iview_loader_1_3_0_iview_loader_index_js_ref_0_1_box_container_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ })

});