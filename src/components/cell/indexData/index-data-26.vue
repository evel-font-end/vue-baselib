<template>
  <div class="indexData">
    <div class="tooltipBox" :style="backgroundStyle">
      <p class="tooltipTitle" :style="title.style">{{ title.value }}</p>
      <p class="name mt13" :style="info1.name.style">{{ info1.name.value }}</p>
      <p class="num" :style="info1.num.style">{{ info1.num.value }}</p>
      <div class="bt">
        <p class="name" :style="info2.name.style">
          {{ info2.name.value }}
        </p>
        <p class="num" :style="info2.num.style">{{ info2.num.value }} <span :style="unit.style">{{unit.value}}</span></p>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
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
    backgroundStyle: {
      type: Object,
      default: {}
    },
    info1: {
      type: Object,
      default: {}
    },
    info2: {
      type: Object,
      default: {}
    },
    unit: {
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
.mt13 {
  margin-top: 13px;
}
.name {
  font-size: 14px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  text-align: center;
  color: #b7e9ff;
  line-height: 20px;
}
.num {
  font-size: 14px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
  line-height: 20px;
}
.indexData {
  width: 100%;
  height: 100%;
  .tooltipBox {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(13, 188, 254, 0.26) 1%,
      rgba(135, 233, 255, 0.09) 52%,
      rgba(13, 188, 254, 0.26) 99%
    );
    border: 1px solid;
    border-image: linear-gradient(
        270deg,
        rgba(88, 229, 255, 0.27),
        rgba(88, 229, 255, 0.38)
      )
      1 1;
    border-radius: 5px;
    padding: 4px;
    .tooltipTitle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: auto;
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: center;
      color: #ffffff;
      line-height: 22px;
      background: rgba(96, 204, 250, 0.2);
      border-radius: 3px;
    }
    .bt {
      padding-top: 4px;
      margin-top: 5px;
      border-top: 1px solid;
      border-image: linear-gradient(
          270deg,
          rgba(163, 243, 255, 0),
          #69e3ff 53%,
          rgba(105, 227, 255, 0)
        )
        1 1;
    }
  }
}
</style>
