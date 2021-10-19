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
      </div>
    </div>
    <div class="show-item bg-black"></div>
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
    indexData10
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
          value: '6日通',
          style: {}
        },
        num: {
          value: "750",
          style: {}
        },
        boxStyle: {}  //椭圆框
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
  }
}
</style>
