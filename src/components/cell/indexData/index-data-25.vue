<template>
  <div class="indexData">
    <div class="tooltipBox" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
      <p class="tooltipTitle" :style="title.style">{{ title.value }}</p>
      <div class="infoData">
        <p class="flex name">
          <span :style="info1.name.style">{{ info1.name.value }}</span>
          <span :style="info1.num.style">{{ info1.num.value }}</span>
        </p>
        <p class="flex num">
          <span :style="info2.name.style">{{ info2.name.value }}</span>
          <span :style="info2.num.style">{{ info2.num.value }}</span>
        </p>
        <p class="flex num">
          <span :style="info3.name.style">{{ info3.name.value }}</span>
          <span :style="info3.num.style">{{ info3.num.value }}</span>
        </p>
        <p class="flex num">
          <span :style="info4.name.style">{{ info4.name.value }}</span>
          <span :style="info4.num.style">{{ info4.num.value }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "indexData25",
  data() {
    return {
      pieChart: null,
      lineChart: null
    };
  },
  props: {
    title: {
      type: Object,
      default: {}
    },
    bgImg: {
      type: String,
      default: ""
    },
    info1: {
      type: Object,
      default: {}
    },
    info2: {
      type: Object,
      default: {}
    },
    info3: {
      type: Object,
      default: {}
    },
    info4: {
      type: Object,
      default: {}
    }
  },
  mounted() {},
  methods: {},
  watch: {}
};
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.indexData {
  width: 100%;
  height: 100%;
  .tooltipBox {
    width: 100%;
    height: 100%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .tooltipTitle {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: center;
      color: #b7e9ff;
      width: 100%;
      height: 36px;
      border-bottom: 1px solid;
      border-image: linear-gradient(
          270deg,
          rgba(138, 225, 255, 0),
          #52bfff 54%,
          rgba(82, 191, 255, 0)
        )
        1 1;
      margin-bottom: 4px;
    }
    .infoData {
      width: 100%;
      height: calc(100% - 36px);
      padding: 0 16px 0 11px;
      p > span {
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        color: #ffffff;
        line-height: 28px;
      }
    }
  }
}
</style>
