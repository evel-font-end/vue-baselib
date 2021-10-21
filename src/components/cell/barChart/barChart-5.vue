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
      let { barTitle1, barTitle2, xdata, ydata1, ydata2 } = this.chartData;
      let option = {
        // tooltip
        color: ["#07ED96", "#5C9CFC"],
        legend: {
          itemWidth: 10,
          itemHeight: 10,
          left: "right",
          data: [
            {
              name: barTitle1,
              icon: "stack",
              textStyle: {
                fontSize: 14,
                fontFamily: "PingFangSC",
                color: "#FFFFFF"
              }
            },
            {
              name: barTitle2,
              icon: "stack",
              textStyle: {
                fontSize: 14,
                fontFamily: "PingFangSC",
                color: "#FFFFFF"
              }
            }
          ]
        },
        grid: {
          left: "3%",
          right: "0%",
          bottom: "0%",
          containLabel: true
        },
        // xAxis
        xAxis: {
          type: "category",
          data: xdata,
          name: "",
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            // symbol: ["none", "arrow"],
            // symbolSize: [15, 17],
            lineStyle: {
              color: "#628aff4d",
              width: 1 //  改变坐标线的颜色
            }
          },
          axisLabel: {
            //调整x轴的lable
            textStyle: {
              fontSize: 14, // 字体
              color: "#88D7FDFF"
            },
            interval: 0,
            margin: 15
          }
        },
        // yAxis
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
        // series
        series: [
          {
            z: 1,
            name: "上部1",
            type: "pictorialBar",
            symbolPosition: "end",
            data: ydata1,
            symbol: "diamond",
            symbolOffset: ["-70%", "-50%"],
            symbolSize: [15, 10],
            itemStyle: {
              borderColor: "#07F096",
              color: "#07F096"
            }
          },
          {
            z: 1,
            type: "bar",
            name: barTitle1,
            barWidth: 15,
            barGap: "-50%",
            data: ydata1,
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                x2: 1,
                y: 0,
                y2: 0,
                colorStops: [
                  { offset: 0, color: "rgba(7,240,150, .7)" },
                  { offset: 0.5, color: "rgba(7,240,150, .7)" },
                  { offset: 0.5, color: "rgba(7,240,150, .3)" },
                  { offset: 1, color: "rgba(7,240,150, .3)" }
                ]
              }
            }
          },
          {
            z: 2,
            name: "上部1",
            type: "pictorialBar",
            symbolPosition: "end",
            data: ydata2,
            symbol: "diamond",
            symbolOffset: ["65%", "-50%"],
            symbolSize: [15, 10],
            itemStyle: {
              borderColor: "#5D9EFF",
              color: "#5D9EFF"
            }
          },
          {
            z: 2,
            type: "bar",
            name: barTitle2,
            barWidth: 15,
            barGap: "40%",
            data: ydata2,
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                x2: 1,
                y: 0,
                y2: 0,
                colorStops: [
                  { offset: 0, color: "rgba(93,158,255, .7)" },
                  { offset: 0.5, color: "rgba(93,158,255, .7)" },
                  { offset: 0.5, color: "rgba(93,158,255, .3)" },
                  { offset: 1, color: "rgba(93,158,255, .3)" }
                ]
              }
            }
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
