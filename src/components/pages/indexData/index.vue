<template>
  <div class="content">
    <div class="show-item bg-black">
      <p class="title">单指标数据</p>
      <div class="item-content">
        <div class="indexData1">
          <indexData1
            :bgImg="indexData1.img"
            :dataNum="indexData1.num"
            :text="indexData1.text"
          />
        </div>
        <div class="indexData2">
          <indexData2
            :bgImg="indexData2.img"
            :dataNum="indexData2.num"
            :text="indexData2.text"
          />
        </div>
        <div class="indexData3">
          <indexData3
            :bgImg="indexData3.img"
            :dataNum="indexData3.num"
            :text="indexData3.text"
            :iconClass="indexData3.iconClass"
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

export default {
  components: {
    indexData1,
    indexData2,
    indexData3
  },
  data() {
    return {
      indexData1: {
        img: require("../../cell/indexData/images/tooltip.png"),
        num: 200,
        text: "使用中"
      },
      indexData2: {
        img: require("../../cell/indexData/images/tooltip2.png"),
        num: "200%",
        text: "一干成端熔接率"
      },
      indexData3: {
        img: require("../../cell/indexData/images/tooltip2.png"),
        num: 300,
        text: "调度调单数",
        iconClass: "iconfont icon-tiaodan"
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
    justify-content: space-between;
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
  }
}
</style>
