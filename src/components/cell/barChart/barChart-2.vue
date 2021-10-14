<template>
  <div class="bar">
    <div :id="chartId" class="chart-wrap" />
  </div>
</template>
<script>
const echarts = require("echarts");
function getLinearColor(colorStart, colorEnd) {
  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: colorStart },
    { offset: 1, color: colorEnd }
  ]);
}
export default {
  props: {
    chartId: {
      type: String,
      default: "chartId"
    },
    chartData: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {},
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(
        document.getElementById(this.chartId),
        "chalk"
      );
      let { barTitle, xdata, ydata } = this.chartData;
      let option = {
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "0%",
          bottom: "0%",
          containLabel: true
        },
        xAxis: {
          type: "category",
          boundaryGap: true,
          data: xdata,
          name: "",
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#628aff4d",
              width: 1 //  改变坐标线的颜色
            }
          },
          // offset: 10,
          axisLabel: {
            //调整x轴的lable
            textStyle: {
              fontSize: 14, // 字体
              color: "#88D7FDFF"
            },
            margin: 15,
            padding: [0, 0, 0, 0]
          }
        },
        yAxis: {
          type: "value",
          name: "",
          splitLine: {
            //刻度线
            show: true,
            lineStyle: {
              color: ["rgba(41,153,234,0.2)"]
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            //调整y轴的lable
            textStyle: {
              color: "#88D7FD",
              fontSize: 14 // 字体
            },
            show: true
          },
          axisLine: {
            show: false,
            // symbol: ["none", "arrow"],
            symbolSize: [15, 17],
            lineStyle: {
              color: "#000000",
              width: 2 //  改变坐标线的颜色
            }
          }
        },
        series: [
          {
            // For shadow
            type: "bar",
            itemStyle: {
              color: getLinearColor("rgba(255,255,255,0.28)", "rgba(255,255,255,0)"),
              barBorderRadius: 10
            },
            barGap: "-87%",
            barCategoryGap: "40%",
            barWidth: 24,
            data: ydata,
            tooltip: {
              show: false
            },
            z: 1
          },
          {
            type: "bar",
            barWidth: 18,
            itemStyle: {
              normal: {
                color: getLinearColor("rgba(0,239,255,1)", "rgba(0,161,255,0)"),
                barBorderRadius: 7,
                borderColor: "#001a3a",
                borderWidth: 4
              }
            },
            data: ydata,
            tooltip: {
              trigger: "item",
              backgroundColor: "transparent",
              padding: 0,
              formatter(params) {
                let text = "";
                text += `<p style='display:flex;justify-conten:space-between;'>
                <span style='text-align:left;width: 100px;'>
                <span></span>
                ${params.name}:</span> 
                <span style='text-align:right;flex:1;color: #51FEFFFF'>${params.value}</span></p>`;
                text = `<div style='border: 1px solid #51feff;color: #ffffff;
            padding: 7px;
            border-radius: 5px;
            background: rgba(0,0,0,0.5);'>${text}</div>`;
                return text;
              }
            },
            z: 2
          }
        ]
      };
      this.chart.setOption(option);
      window.addEventListener("resize", () => this.chart.resize(), false);
    }
  }
};
</script>
<style lang="scss" scoped>
.bar {
  width: 100%;
  height: 100%;
  position: relative;
  .chart-wrap {
    width: 100%;
    height: 100%;
  }
}
</style>
