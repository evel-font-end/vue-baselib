<template>
  <div class="indexData">
    <div class="tooltipBox" :style="backgroundStyle">
      <p class="tooltipTitle" :style="title.style">{{ title.value }}</p>
      <div class="infoData">
        <p class="flex name">
          <span :style="info1.name.style">{{ info1.name.value }}</span>
          <span :style="info2.name.style">{{ info2.name.value }}</span>
        </p>
        <p class="flex num">
          <span :style="info1.num.style">{{ info1.num.value }}</span>
          <span :style="info2.num.style">{{ info2.num.value }}</span>
        </p>
      </div>
      <p class="flex allNum">
        <span :style="allNum.name.style">{{ allNum.name.value }}</span>
        <span :style="allNum.num.style">{{ allNum.num.value }}</span>
      </p>
      <div class="progress">
        <el-progress
          :stroke-width="4"
          :color="progress.innerColor"
          :percentage="Number(progress.value)"
          :show-text="false"
        ></el-progress>
      </div>
      <div class="isNormal">
        <p>
          <span :style="normal.text.style">{{ normal.text.value }}</span>
          <span :style="normal.num.style">{{ normal.num.value }}</span>
        </p>
        <p>
          <span :style="abnormal.text.style">{{ abnormal.text.value }}</span>
          <span :style="abnormal.num.style">{{ abnormal.num.value }}</span>
        </p>
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
    allNum: {
      type: Object,
      default: {}
    },
    normal: {
      type: Object,
      default: {}
    },
    abnormal: {
      type: Object,
      default: {}
    },
    progress: {
      type: Object,
      default: {}
    }
  },
  mounted() {},
  methods: {},
  watch: {
    progress: {
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          document.getElementsByClassName(
            "el-progress-bar__outer"
          )[0].style = `background-color:${newVal.outerColor}`;
        });
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style lang="less" scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/deep/.el-progress-bar__outer {
  background-color: aquamarine;
}
.indexData {
  width: 100%;
  height: 100%;
  .tooltipBox {
    width: 100%;
    height: 100%;
    padding: 20px;
    background: linear-gradient(
      180deg,
      rgba(7, 58, 95, 0.63),
      rgba(0, 30, 52, 0.4) 97%
    );
    border: 2px solid;
    border-image: linear-gradient(
        360deg,
        rgba(14, 180, 212, 0.19) 39%,
        rgba(45, 180, 255, 0.69) 100%
      )
      2 2;
    box-shadow: 7px 5px 7px 0px rgba(10, 42, 59, 0.5);
    .tooltipTitle {
      font-size: 18px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #ffffff;
      line-height: 16px;
      margin-bottom: 16px;
    }
    .infoData {
      width: 100%;
      .name {
        span {
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 12px;
        }
      }
      .num {
        span {
          font-size: 14px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: left;
          color: #1edfff;
          line-height: 34px;
        }
      }
    }
    .allNum {
      & span:first-child {
        font-size: 12px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #9bcdff;
        line-height: 12px;
      }
      & span:last-child {
        font-size: 13px;
        font-family: PingFangSC;
        font-weight: 700;
        text-align: left;
        color: #ffffff;
        line-height: 12px;
      }
    }
    .progress {
      margin: 6px 0;
    }
    .isNormal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        span:first-child {
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #9bcdff;
          line-height: 12px;
          margin-right: 4px;
        }
        span:last-child {
          font-size: 12px;
          font-family: PingFangSC;
          font-weight: 700;
          text-align: left;
          color: #ffffff;
          line-height: 14px;
        }
      }
    }
  }
}
</style>
