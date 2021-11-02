<template>
  <div class="content">
    <div class="show-item bg-black">
      <p class="title">单指标数据</p>
      <div class="item-content">
        <div class="module indexData1">
          <indexData1
            :iconImg="indexData1.iconImg"
            :bgImg="indexData2.bgImg"
            :num="indexData1.num"
            :text="indexData1.text"
          />
        </div>
        <div class="module indexData2">
          <indexData2
            :iconImg="indexData2.iconImg"
            :bgImg="indexData2.bgImg"
            :num="indexData2.num"
            :text="indexData2.text"
          />
        </div>
        <div class="module indexData3">
          <indexData3
            :num="indexData3.num"
            :borderStyle="indexData3.borderStyle"
            :backgroundStyle="indexData3.backgroundStyle"
            :text="indexData3.text"
            :iconClass="indexData3.iconClass"
            :iconStyle="indexData3.iconStyle"
            :iconBgStyle="indexData3.iconBgStyle"
          />
        </div>
        <div class="module indexData4">
          <indexData4
            :bgImg="indexData4.bgImg"
            :num="indexData4.num"
            :text="indexData4.text"
            :iconClass="indexData4.iconClass"
            :iconStyle="indexData4.iconStyle"
          />
        </div>
        <div class="module indexData5">
          <indexData5
            :iconImg="indexData5.iconImg"
            :num="indexData5.num"
            :text="indexData5.text"
            :borderStyle="indexData5.borderStyle"
            :backgroundStyle="indexData5.backgroundStyle"
          />
        </div>
        <div class="module indexData6">
          <indexData6
            :iconImg="indexData6.iconImg"
            :num="indexData6.num"
            :text="indexData6.text"
            :borderStyle="indexData6.borderStyle"
            :backgroundStyle="indexData6.backgroundStyle"
          />
        </div>
        <div class="module indexData7">
          <indexData7
            :num="indexData7.num"
            :text="indexData7.text"
            :bgImg="indexData7.bgImg"
          />
        </div>
        <div class="module indexData8">
          <indexData8
            :num="indexData8.num"
            :text="indexData8.text"
            :iconTitle="indexData8.iconTitle"
            :iconBgStyle="indexData8.iconBgStyle"
            :borderStyle="indexData8.borderStyle"
            :backgroundStyle="indexData8.backgroundStyle"
          />
        </div>
        <div class="module indexData9">
          <indexData9
            :num="indexData9.num"
            :text="indexData9.text"
            :iconImg="indexData9.iconImg"
            :unit="indexData9.unit"
          />
        </div>
        <div class="module indexData10">
          <indexData10
            :icon="indexData10.icon"
            :buildTitle="indexData10.buildTitle"
            :timeText="indexData10.timeText"
            :num="indexData10.num"
            :boxStyle="indexData10.boxStyle"
          />
        </div>
        <div class="module indexData11">
          <indexData11
            :num="indexData11.num"
            :text="indexData11.text"
            :iconImg="indexData11.iconImg"
            :icon="indexData11.icon"
            :borderStyle="indexData11.borderStyle"
            :backgroundStyle="indexData11.backgroundStyle"
          />
        </div>
        <div class="module indexData12">
          <indexData12
            :num="indexData12.num"
            :text="indexData12.text"
            :unit="indexData12.unit"
            :iconImg="indexData12.iconImg"
            :borderStyle="indexData12.borderStyle"
            :backgroundStyle="indexData12.backgroundStyle"
            :progressBgStyle="indexData12.progressBgStyle"
            :progressValueStyle="indexData12.progressValueStyle"
          />
        </div>
        <div class="module indexData13">
          <indexData13
            :num="indexData13.num"
            :text="indexData13.text"
            :iconImg="indexData13.iconImg"
            :borderStyle="indexData13.borderStyle"
            :backgroundStyle="indexData13.backgroundStyle"
          />
        </div>
        <div class="module indexData14">
          <indexData14
            :num="indexData14.num"
            :text="indexData14.text"
            :bgImg="indexData14.bgImg"
            :btnImg="indexData14.btnImg"
            :icon="indexData14.icon"
            :btn="indexData14.btn"
          />
        </div>
        <div class="module indexData15">
          <indexData15
            :num="indexData15.num"
            :text="indexData15.text"
            :bgImg="indexData15.bgImg"
            :iconImg="indexData15.iconImg"
          />
        </div>
        <div class="module indexData16">
          <indexData16
            :num="indexData16.num"
            :text="indexData16.text"
            :bgImg="indexData16.bgImg"
          />
        </div>
        <div class="module indexData17">
          <indexData17
            :num="indexData17.num"
            :text="indexData17.text"
            :bgImg="indexData17.bgImg"
          />
        </div>
        <div class="module indexData18">
          <indexData18
            :text="indexData18.text"
            :bgImg="indexData18.bgImg"
            :icon="indexData18.icon"
          />
        </div>
        <div class="module indexData19">
          <indexData19
            :num="indexData19.num"
            :text="indexData19.text"
            :bottomBgImg="indexData19.bottomBgImg"
            :topBgImg="indexData19.topBgImg"
            :btnText="indexData19.btnText"
          />
        </div>
        <div class="module indexData20">
          <indexData20
            :num="indexData20.num"
            :unit="indexData20.unit"
            :text="indexData20.text"
            :bgImg="indexData20.bgImg"
            :icon="indexData20.icon"
          />
        </div>
        <div class="module indexData21">
          <indexData21
            :num="indexData21.num"
            :text="indexData21.text"
            :bgImg="indexData21.bgImg"
          />
        </div>
        <div class="module indexData22">
          <indexData22
            :num="indexData22.num"
            :text="indexData22.text"
            :bgImg="indexData22.bgImg"
          />
        </div>
      </div>
    </div>
    <div class="show-item bg-black">
      <p class="title">多指标数据</p>
      <div class="item-content">
        <div class="module">
          <div class="module indexData23">
            <indexData23
              :num="indexData23.num"
              :text="indexData23.text"
              :province="indexData23.province"
              :backgroundStyle="indexData23.backgroundStyle"
              :pieChartData="indexData23.pieChartData"
              :lineChartData="indexData23.lineChartData"
            />
          </div>
        </div>
        <div class="module indexData24">
          <indexData24
            :normal="indexData24.normal"
            :abnormal="indexData24.abnormal"
            :title="indexData24.title"
            :info1="indexData24.info1"
            :info2="indexData24.info2"
            :allNum="indexData24.allNum"
            :progress="indexData24.progress"
            :backgroundStyle="indexData24.backgroundStyle"
          />
        </div>
        <div class="module indexData25">
          <indexData25
            :title="indexData25.title"
            :info1="indexData25.info1"
            :info2="indexData25.info2"
            :info3="indexData25.info3"
            :info4="indexData25.info4"
            :bgImg="indexData25.bgImg"
          />
        </div>
        <div class="module indexData26">
          <indexData26
            :title="indexData26.title"
            :info1="indexData26.info1"
            :info2="indexData26.info2"
            :unit="indexData26.unit"
            :backgroundStyle="indexData26.backgroundStyle"
          />
        </div>
        <div class="module indexData27">
          <indexData27
            :title1="indexData27.title1"
            :title2="indexData27.title2"
            :iconImg="indexData27.iconImg"
            :progress1="indexData27.progress1"
            :progress2="indexData27.progress2"
            :backgroundStyle="indexData27.backgroundStyle"
          />
        </div>
        <div class="module indexData28">
          <indexData28
            :icon="indexData28.icon"
            :title="indexData28.title"
            :info="indexData28.info"
            :backgroundStyle="indexData28.backgroundStyle"
          />
        </div>
        <div class="module indexData29">
          <indexData29
            :title="indexData29.title"
            :iconImg="indexData29.iconImg"
            :icon="indexData29.icon"
            :backgroundStyle="indexData29.backgroundStyle"
            :info="indexData29.info"
          />
        </div>
        <div class="module indexData30">
          <indexData30
            :title="indexData30.title"
            :backgroundStyle="indexData30.backgroundStyle"
            :info="indexData30.info"
          />
        </div>
        <div class="module indexData31">
          <indexData31
            :title="indexData31.title"
            :iconImg="indexData31.iconImg"
            :icon="indexData31.icon"
            :backgroundStyle="indexData31.backgroundStyle"
            :info="indexData31.info"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import indexData1 from "../../cell/indexData/index-data-1";
import indexData2 from "../../cell/indexData/index-data-2";
import indexData3 from "../../cell/indexData/index-data-3";
import indexData4 from "../../cell/indexData/index-data-4";
import indexData5 from "../../cell/indexData/index-data-5";
import indexData6 from "../../cell/indexData/index-data-6";
import indexData7 from "../../cell/indexData/index-data-7";
import indexData8 from "../../cell/indexData/index-data-8";
import indexData9 from "../../cell/indexData/index-data-9";
import indexData10 from "../../cell/indexData/index-data-10";
import indexData11 from "../../cell/indexData/index-data-11";
import indexData12 from "../../cell/indexData/index-data-12";
import indexData13 from "../../cell/indexData/index-data-13";
import indexData14 from "../../cell/indexData/index-data-14";
import indexData15 from "../../cell/indexData/index-data-15";
import indexData16 from "../../cell/indexData/index-data-16";
import indexData17 from "../../cell/indexData/index-data-17";
import indexData18 from "../../cell/indexData/index-data-18";
import indexData19 from "../../cell/indexData/index-data-19";
import indexData20 from "../../cell/indexData/index-data-20";
import indexData21 from "../../cell/indexData/index-data-21";
import indexData22 from "../../cell/indexData/index-data-22";
import indexData23 from "../../cell/indexData/index-data-23";
import indexData24 from "../../cell/indexData/index-data-24";
import indexData25 from "../../cell/indexData/index-data-25";
import indexData26 from "../../cell/indexData/index-data-26";
import indexData27 from "../../cell/indexData/index-data-27";
import indexData28 from "../../cell/indexData/index-data-28";
import indexData29 from "../../cell/indexData/index-data-29";
import indexData30 from "../../cell/indexData/index-data-30";
import indexData31 from "../../cell/indexData/index-data-31";

export default {
  components: {
    indexData1,
    indexData2,
    indexData3,
    indexData4,
    indexData5,
    indexData6,
    indexData7,
    indexData8,
    indexData9,
    indexData10,
    indexData11,
    indexData12,
    indexData13,
    indexData14,
    indexData15,
    indexData16,
    indexData17,
    indexData18,
    indexData19,
    indexData20,
    indexData21,
    indexData22,
    indexData23,
    indexData24,
    indexData25,
    indexData26,
    indexData27,
    indexData28,
    indexData29,
    indexData30,
    indexData31
  },
  data() {
    return {
      indexData1: {
        iconImg: require("../../cell/indexData/images/tooltip.png"),
        bgImg: "",
        num: {
          value: 200,
          style: {}
        },
        text: {
          value: "使用中",
          style: {}
        }
      },
      indexData2: {
        iconImg: require("../../cell/indexData/images/tooltip2.png"),
        bgImg: "",
        num: {
          value: "200%",
          style: {
            color: "red"
          }
        },
        text: {
          value: "一干成端熔接率",
          style: {}
        }
      },
      indexData3: {
        num: {
          //数字值以及样式
          value: 300,
          style: {}
        },
        text: {
          //文字值以及样式
          value: "调度调单数",
          style: {}
        },
        iconClass: "iconfont icon-tiaodan", //字体图标iconfont
        borderStyle: "", //背景边框样式
        backgroundStyle: "", //背景色样式
        iconStyle: {}, //字体图标样式
        iconBgStyle: {} //字体图标外围圆圈样式
        /* iconStyle: {
          color: 'red',
          fontSize: '20px'
        } */
        // borderStyle: "1px solid red",
        // backgroundStyle: "#08EBF2",
      },
      indexData4: {
        bgImg: "",
        iconClass: "iconfont icon-zhenduan", //字体图标iconfont
        iconStyle: {},
        num: {
          value: "49504",
          style: {}
        },
        text: {
          value: "全国日诊断告警量",
          style: {}
        }
      },
      indexData5: {
        iconImg: require("../../cell/indexData/images/tooltip5.png"),
        borderStyle: "", //背景边框样式
        backgroundStyle: "", //背景色样式
        num: {
          value: "49504",
          style: {}
        },
        text: {
          value: "全国日诊断告警量",
          style: {}
        }
      },
      indexData6: {
        iconImg: require("../../cell/indexData/images/tooltip6.png"),
        borderStyle: "", //背景边框样式
        backgroundStyle: "", //背景色样式
        num: {
          value: "6972929",
          style: {}
        },
        text: {
          value: "上联带宽",
          style: {}
        }
      },
      indexData7: {
        bgImg: "",
        num: {
          value: "390",
          style: {}
        },
        text: {
          value: "全国4G小区",
          style: {}
        }
      },
      indexData8: {
        num: {
          value: "390",
          style: {}
        },
        text: {
          value: "总数",
          style: {}
        },
        iconTitle: {
          value: "调用",
          style: {}
        },
        iconBgStyle: {},
        borderStyle: "", //背景边框样式
        backgroundStyle: "" //背景色样式
      },
      indexData9: {
        num: {
          value: "65",
          style: {}
        },
        text: {
          value: "广播器总数",
          style: {}
        },
        unit: {
          value: "个",
          style: {}
        },
        iconImg: require("../../cell/indexData/images/tooltip9.png")
      },
      indexData10: {
        icon: {
          class: "iconfont icon-Clei",
          style: {}
        },
        buildTitle: {
          value: "C类楼宇",
          style: {}
        },
        timeText: {
          value: "6日通",
          style: {}
        },
        num: {
          value: "750",
          style: {}
        },
        boxStyle: {} //椭圆框
      },
      indexData11: {
        num: {
          value: "65",
          style: {}
        },
        text: {
          value: "基站机房",
          style: {}
        },
        icon: {
          class: "iconfont icon-jifang",
          style: {}
        },
        iconImg: require("../../cell/indexData/images/tooltip11.png"),
        borderStyle: {}, //背景边框样式
        backgroundStyle: {} //背景色样式
      },
      indexData12: {
        num: {
          value: "65",
          style: {}
        },
        text: {
          value: "接入",
          style: {}
        },
        icon: {
          class: "iconfont icon-jifang",
          style: {}
        },
        unit: {
          value: "%",
          style: {}
        },
        progressBgStyle: {
          //进度条底色样式
          startColor: "rgba(15,121,163,0.36)",
          endColor: "rgba(15,121,163,0.36)"
        },
        progressValueStyle: {
          //进度条刻度值
          startColor: "rgba(0,209,255,1)",
          endColor: "rgba(0,209,255,0.15)"
        },
        iconImg: require("../../cell/indexData/images/tooltip12.png"),
        borderStyle: {}, //背景边框样式
        backgroundStyle: {} //背景色样式
      },
      indexData13: {
        num: {
          value: "65",
          style: {}
        },
        text: {
          value: "耗电量总计",
          style: {}
        },
        iconImg: require("../../cell/indexData/images/tooltip13.png"),
        borderStyle: {}, //背景边框样式
        backgroundStyle: {} //背景色样式
      },
      indexData14: {
        bgImg: require("../../cell/indexData/images/indexdata14.png"),
        btnImg: require("../../cell/indexData/images/tooltip14.png"),
        num: {
          value: "390",
          style: {}
        },
        icon: {
          class: "iconfont icon-banka",
          style: {}
        },
        text: {
          value: "板卡",
          style: {}
        },
        btn: {
          value: "查看",
          style: {}
        }
      },
      indexData15: {
        bgImg: require("../../cell/indexData/images/indexdata15.png"),
        num: {
          value: "390",
          style: {}
        },
        iconImg: require("../../cell/indexData/images/tooltip15.png"),
        text: {
          value: "政企电路数",
          style: {}
        }
      },
      indexData16: {
        bgImg: require("../../cell/indexData/images/indexdata16.png"),
        num: {
          value: "9.75min",
          style: {}
        },
        text: {
          value: "执行时长",
          style: {}
        }
      },
      indexData17: {
        bgImg: require("../../cell/indexData/images/indexdata17.png"),
        num: {
          value: "84990",
          style: {}
        },
        text: {
          value: "169骨干网",
          style: {}
        }
      },
      indexData18: {
        bgImg: require("../../cell/indexData/images/indexdata18.png"),
        text: {
          value: "4G",
          style: {}
        },
        icon: {
          class: "iconfont icon-wangluo",
          style: {}
        }
      },
      indexData19: {
        topBgImg: require("../../cell/indexData/images/indexdata19_top.png"),
        bottomBgImg: require("../../cell/indexData/images/indexdata19_bottom.png"),
        num: {
          value: "378885",
          style: {}
        },
        text: {
          value: "传输网",
          style: {}
        },
        btnText: {
          value: "查看",
          style: {}
        }
      },
      indexData20: {
        bgImg: require("../../cell/indexData/images/indexdata20.png"),
        icon: {
          class: "iconfont icon-rili",
          style: {}
        },
        num: {
          value: "778",
          style: {}
        },
        text: {
          value: "月用电量",
          style: {}
        },
        unit: {
          value: "度",
          style: {}
        }
      },
      indexData21: {
        bgImg: require("../../cell/indexData/images/indexdata21.png"),
        num: {
          value: "4G",
          style: {}
        },
        text: {
          value: "月用电量",
          style: {}
        }
      },
      indexData22: {
        bgImg: require("../../cell/indexData/images/indexdata22.png"),
        num: {
          value: "23676",
          style: {}
        },
        text: {
          value: "不达标资源",
          style: {}
        }
      },
      indexData23: {
        province: {
          value: "山东省",
          style: {}
        },
        pieChartData: {
          //饼图配置参数
          data: [
            //饼图数据
            { value: 1048, name: "正常" },
            { value: 735, name: "异常" }
          ],
          color: ["#36ECD6", "#FF8161"], //饼图各圆环颜色
          legend: {
            //饼图图例样式
            orient: "vertical",
            icon: "circle",
            left: "50%",
            top: "center",
            fontsize: "12",
            itemWidth: 8,
            textStyle: {
              color: "#9BCDFF"
            }
          },
          series: {
            //饼图series系列参数
            type: "pie",
            radius: ["50%", "80%"],
            center: ["30%", "50%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "12"
              }
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              normal: {
                borderWidth: 6, //设置border的宽度有多大
                borderColor: "#083F60"
              }
            }
          }
        },
        lineChartData: {
          //折线图配置参数
          xData: [
            //X轴数据
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12"
          ],
          xAxisLabel: {
            //X轴刻度值样式
            textStyle: {
              color: "#63aee5"
            }
          },
          ySplitLine: {
            //横向网格线样式
            show: true,
            lineStyle: {
              color: "rgba(255,255,255,0.18)",
              width: 1,
              opacity: 0.7
            }
          },
          yAxisLabel: {
            //Y轴刻度值样式
            textStyle: {
              color: "#63aee5"
            }
          },
          yData: [
            //Y轴数据
            2432,
            465,
            8686,
            131,
            3455,
            2425,
            654,
            321,
            675,
            321,
            5423,
            1245
          ],
          lineStyle: {
            //折线样式
            normal: {
              width: 2,
              color: {
                type: "linear",
                colorStops: [
                  {
                    offset: 0,
                    color: "#00EBFF"
                  },
                  {
                    offset: 1,
                    color: "#00EBFF"
                  }
                ],
                globalCoord: false
              }
            }
          },
          areaStyle: [
            //折线区域面积颜色
            {
              offset: 0,
              color: "rgba(49,251,217,0.38)"
            },

            {
              offset: 1,
              color: "rgba(49,251,217,0)"
            }
          ],
          title: {
            //折线标题文字样式
            text: "近三天资源入库趋势",
            left: "left",
            top: "10",
            textStyle: {
              fontSize: "12",
              color: "#9BCDFF"
            }
          }
        },
        num: {
          value: "877499",
          style: {}
        },
        text: {
          value: "总资源数",
          style: {}
        },
        backgroundStyle: {} //上方背景颜色
      },
      indexData24: {
        title: {
          value: "管线",
          style: {}
        },
        info1: {
          name: {
            value: "总资源表",
            style: {}
          },
          num: {
            value: "23490",
            style: {}
          }
        },
        info2: {
          name: {
            value: "空资源表",
            style: {}
          },
          num: {
            value: "2903",
            style: {}
          }
        },
        allNum: {
          name: {
            value: "总数据",
            style: {}
          },
          num: {
            value: "109923",
            style: {}
          }
        },
        normal: {
          text: {
            value: "正常",
            style: {}
          },
          num: {
            value: "29940",
            style: {}
          }
        },
        abnormal: {
          text: {
            value: "异常",
            style: {}
          },
          num: {
            value: "29940",
            style: {}
          }
        },
        progress: {
          value: "80",
          innerColor: "#00DEFF", //外层背景色
          outerColor: "#358CFF" //底层背景色
        },
        backgroundStyle: {} //上方背景颜色
      },
      indexData25: {
        title: {
          value: "3G基站",
          style: {}
        },
        info1: {
          name: {
            value: "基站数",
            style: {}
          },
          num: {
            value: "23490",
            style: {}
          }
        },
        info2: {
          name: {
            value: "小区数",
            style: {}
          },
          num: {
            value: "2903",
            style: {}
          }
        },
        info3: {
          name: {
            value: "RU",
            style: {}
          },
          num: {
            value: "394",
            style: {}
          }
        },
        info4: {
          name: {
            value: "BBU",
            style: {}
          },
          num: {
            value: "234",
            style: {}
          }
        },
        bgImg: require("../../cell/indexData/images/indexdata25.png")
      },
      indexData26: {
        title: {
          value: "光交接箱统计",
          style: {}
        },
        info1: {
          name: {
            value: "数量",
            style: {}
          },
          num: {
            value: "389904",
            style: {}
          }
        },
        info2: {
          name: {
            value: "标准地址覆盖率",
            style: {}
          },
          num: {
            value: "56.32",
            style: {}
          }
        },
        unit: {
          value: "%",
          style: {}
        },
        backgroundStyle: {}
      },
      indexData27: {
        title1: {
          value: "二干光缆资源",
          style: {}
        },
        title2: {
          value: "清查录入进度",
          style: {}
        },
        progress1: {
          name: {
            value: "光缆覆盖率",
            style: {}
          },
          value: "34",
          innerBackground: "#2262a0",
          outterBackground: "linear-gradient(270deg,#3ff5f8 0%, #50bbff 99%)"
        },
        progress2: {
          name: {
            value: "成端熔接率",
            style: {}
          },
          value: "55",
          innerBackground: "#2262a0",
          outterBackground: "linear-gradient(270deg,#ffb84f 0%, #ed586d 99%)"
        },
        iconImg: require("../../cell/indexData/images/tooltip27.png"),
        backgroundStyle: {}
      },
      indexData28: {
        backgroundStyle: {},
        icon: {
          class: "iconfont icon-shebei",
          style: {}
        },
        title: {
          value: "富力盈通大厦(无业务)",
          style: {}
        },
        info: [
          { value: "2M-空闲67个", style: {} },
          { value: "100M-空闲7个", style: {} },
          { value: "622M-空闲1个", style: {} }
          // {value: '155M-空闲7个', style: {}},
        ]
      },
      indexData29: {
        title: {
          value: "3G基站",
          style: {}
        },
        iconImg: require("../../cell/indexData/images/tooltip29.png"),
        icon: {
          class: 'iconfont icon-jizhan',
          style: {}
        },
        info: [
          {
            name: {
              value: '基站数',
              style: {}
            },
            num: {
              value: '20',
              style: {}
            }
          },
          {
            name: {
              value: '小区数',
              style: {}
            },
            num: {
              value: '5869',
              style: {}
            }
          }
        ],
        backgroundStyle: {}
      },
      indexData30: {
        title: {
          index: {
            value: '1',
            style: {}
          },
          text: {
            value: '审计厅省信息中心琼山区审计监督局FE03FE03',
            style: {}
          }
        },
        info: [
          {
            name: {
              value: '数字电路',
              style: {}
            }
          },
          {
            name: {
              value: '8M',
              style: {}
            }
          },
        ],
        backgroundStyle: {}
      },
      indexData31: {
        title: {
          value: "3G基站",
          style: {}
        },
        iconImg: require("../../cell/indexData/images/tooltip29.png"),
        icon: {
          class: 'iconfont icon-jizhan',
          style: {}
        },
        info: [
          {
            name: {
              value: '基站数',
              style: {}
            },
            num: {
              value: '20',
              style: {}
            }
          },
          {
            name: {
              value: '小区数',
              style: {}
            },
            num: {
              value: '5869',
              style: {}
            }
          }
        ],
        backgroundStyle: {}
      }
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
$showBoxWidth: 100%;
// $showBoxHeight: 300px;
@function scaleHeight($realWidth, $realHeight) {
  @return $showBoxWidth * $realHeight / $realWidth;
}
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.show-item {
  width: $showBoxWidth;
  // height: $showBoxHeight;
  margin: 15px;
  border-radius: 16px;
  background-color: #fff;
  padding: 15px;
  box-sizing: border-box;
  position: relative;

  &.bg-black {
    background-color: #132845;
    color: rgba(255, 255, 255, 0.8);
  }
  .title {
    font-size: 16px;
    font-family: PingFangSC;
    font-weight: 600;
    text-align: left;
    color: #ffffff;
  }
  .item-content {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    .module {
      margin-right: 30px;
      margin-bottom: 40px;
      &:nth-child(6) {
        margin-right: none;
      }
    }
    .indexData1 {
      width: 300px;
      height: 130px;
    }
    .indexData2 {
      width: 310px;
      height: 110px;
    }
    .indexData3 {
      width: 193px;
      height: 80px;
    }
    .indexData4 {
      width: 230px;
      height: 60px;
    }
    .indexData5 {
      width: 214px;
      height: 60px;
    }
    .indexData6 {
      width: 128px;
      height: 50px;
    }
    .indexData7 {
      width: 168px;
      height: 90px;
    }
    .indexData8 {
      width: 132px;
      height: 50px;
    }
    .indexData9 {
      width: 190px;
      height: 80px;
    }
    .indexData10 {
      width: 205px;
      height: 60px;
    }
    .indexData11 {
      width: 240px;
      height: 60px;
    }
    .indexData12 {
      width: 100px;
      height: 46px;
    }
    .indexData13 {
      width: 230px;
      height: 37px;
    }
    .indexData14 {
      width: 275px;
      height: 225px;
    }
    .indexData15 {
      width: 172px;
      height: 180px;
    }
    .indexData16 {
      width: 200px;
      height: 175px;
    }
    .indexData17 {
      width: 130px;
      height: 98px;
    }
    .indexData18 {
      width: 100px;
      height: 152px;
    }
    .indexData19 {
      width: 120px;
      height: 142px;
    }
    .indexData20 {
      width: 80px;
      height: 150px;
    }
    .indexData21 {
      width: 110px;
      height: 110px;
    }
    .indexData22 {
      width: 140px;
      height: 80px;
    }
    .indexData23 {
      width: 400px;
      height: 290px;
    }
    .indexData24 {
      width: 220px;
      height: 166px;
    }
    .indexData25 {
      width: 125px;
      height: 160px;
    }
    .indexData26 {
      width: 126px;
      height: 140px;
    }
    .indexData27 {
      width: 320px;
      height: 66px;
    }
    .indexData28 {
      width: 280px;
      height: 72px;
    }
    .indexData29 {
      width: 205px;
      height: 36px;
    }
    .indexData30 {
      width: 370px;
      height: 88px;
    }
    .indexData31 {
      width: 397px;
      height: 62px;
    }
  }
}
</style>
