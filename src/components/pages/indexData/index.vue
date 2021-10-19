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
            :bgImg="indexData3.img"
            :dataNum="indexData3.num"
            :text="indexData3.text"
            :iconClass="indexData3.iconClass"
          />
        </div>
        <div class="module indexData4">
          <indexData4
            :bgImg="indexData4.img"
            :dataNum="indexData4.num"
            :text="indexData4.text"
          />
        </div>
        <div class="module indexData5">
          <indexData5
            :bgImg="indexData5.img"
            :dataNum="indexData5.num"
            :text="indexData5.text"
          />
        </div>
        <div class="module indexData6">
          <indexData6
            :bgImg="indexData6.img"
            :dataNum="indexData6.num"
            :text="indexData6.text"
          />
        </div>
        <div class="module indexData7">
          <indexData7 :dataNum="indexData7.num" :text="indexData7.text" />
        </div>
        <div class="module indexData8">
          <indexData8
            :dataNum="indexData8.num"
            :text="indexData8.text"
            :title="indexData8.title"
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

export default {
  components: {
    indexData1,
    indexData2,
    indexData3,
    indexData4,
    indexData5,
    indexData6,
    indexData7,
    indexData8
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
        img: require("../../cell/indexData/images/tooltip2.png"),
        num: 300,
        text: "调度调单数",
        iconClass: "iconfont icon-tiaodan"
      },
      indexData4: {
        img: require("../../cell/indexData/images/tooltip4.png"),
        num: "49504",
        text: "全国日诊断告警量"
      },
      indexData5: {
        img: require("../../cell/indexData/images/tooltip5.png"),
        num: "49504",
        text: "全国日诊断告警量"
      },
      indexData6: {
        img: require("../../cell/indexData/images/tooltip6.png"),
        num: "6972929",
        text: "上联带宽"
      },
      indexData7: {
        num: "390",
        text: "全国4G小区"
      },
      indexData8: {
        num: "390",
        text: "总数",
        title: "调用"
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
  }
}
</style>
