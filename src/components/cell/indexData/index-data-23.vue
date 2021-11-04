<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div class="tooltipBg" :style="backgroundStyle">
        <div class="tooltipInfo">
          <p class="provinceName" :style="province.style">
            {{ province.value }}
          </p>
          <p class="tipTitle" :style="text.style">{{ text.value }}</p>
          <p class="tip1" :style="num.style">{{ num.value }}</p>
        </div>
        <div class="tooltipPieChart">
          <div id="pieChart" class="pieChart"></div>
        </div>
      </div>
      <div class="lineChartContainer">
        <div id="lineChart" class="lineChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  name: "indexData23",
  data() {
    return {
      pieChart: null,
      lineChart: null
    };
  },
  props: {
    num: {
      type: Object,
      default: {}
    },
    text: {
      type: Object,
      default: {}
    },
    province: {
      type: Object,
      default: {}
    },
    /**
     * @description: 饼图数据
     * @param {pieChartData}
     * @return {*}
     */
    pieChartData: {
      type: Object,
      default: {}
    },
    /**
     * @description: 折线图参数
     * @param {lineChartData}
     * @return {*}
     */
    lineChartData: {
      type: Object,
      default: {}
    },
    backgroundStyle: {
      type: Object,
      default: {}
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initPieChart();
      this.initLineChart();
    });
  },
  methods: {
    initPieChart() {
      this.pieChart = this.$echarts.init(
        document.getElementById("pieChart"),
        "chalk"
      );
      let { data, color, legend, series } = this.pieChartData;
      let pieOption = {
        /* tooltip: {
          trigger: "item"
        }, */
        legend,
        color,
        series
      };
      /**
       * @description: 饼图legend的formatter函数
       * @param {*} params
       * @return {*}
       */
      function formatterPieLegend(params) {
        data.map(e => {
          if (e.name == params) {
            params = params + "    " + e.value;
          }
        });
        return params;
      }
      this.$set(legend, "formatter", formatterPieLegend);
      this.$set(series, "data", data);
      this.pieChart.setOption(pieOption);
      window.addEventListener("resize", () => this.pieChart.resize(), false);
    },
    initLineChart() {
      this.lineChart = this.$echarts.init(
        document.getElementById("lineChart"),
        "chalk"
      );
      let {
        xData,
        xAxisLabel,
        ySplitLine,
        yAxisLabel,
        yData,
        lineStyle,
        areaStyle,
        title
      } = this.lineChartData;
      let lineChartOption = {
        title,
        grid: {
          top: 40,
          left: 55,
          bottom: 30,
          right: 30,
          shadowColr: "rgba(0, 0, 0, 0.5)",
          shadowBlur: 10
        },
        xAxis: {
          type: "category",
          data: xData,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: xAxisLabel
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: ySplitLine,
          axisLabel: yAxisLabel
        },
        series: {
          data: yData,
          type: "line",
          smooth: true,
          symbol: "none",
          lineStyle: lineStyle,
          areaStyle: {
            //区域填充样式
            normal: {
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                areaStyle,
                false
              )
            }
          }
        }
      };
      this.lineChart.setOption(lineChartOption);
      window.addEventListener("resize", () => this.lineChart.resize(), false);
    }
  }
};
</script>

<style lang="less" scoped>
.indexData {
  width: 100%;
  height: 100%;
  .tooltipBox {
    width: 100%;
    height: 100%;
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
    .tooltipBg {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 120px;
      background: linear-gradient(
        180deg,
        rgba(0, 62, 112, 0) 3%,
        rgba(0, 89, 129, 0.55)
      );
      .tooltipInfo {
        width: 40%;
        height: 100%;
        padding: 20px;
        .provinceName {
          font-size: 18px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          text-align: left;
          color: #ffffff;
          line-height: 16px;
        }
        .tipTitle {
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #9bcdff;
          margin-top: 16px;
          letter-spacing: 1px;
        }
        .tip1 {
          font-size: 24px;
          font-family: DINAlternate, DINAlternate-Bold;
          font-weight: 700;
          text-align: left;
          color: #ffffff;
          line-height: 28px;
          letter-spacing: 1px;
        }
      }
      .tooltipPieChart {
        width: calc(100% - 40%);
        height: 100%;
        .pieChart {
          width: 100%;
          height: 100%;
        }
      }
    }
    .lineChartContainer {
      width: 100%;
      height: calc(100% - 120px);
      .lineChart {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
