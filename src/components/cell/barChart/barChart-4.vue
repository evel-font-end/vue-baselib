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
        tooltip: {
          trigger: "axis",
          backgroundColor: "transparent",
          padding: 0,
          formatter(params) {
            let text = "";
            for (let i = 0; i < params.length; i++) {
              const element = params[i];
              text += `<p style='display:flex;justify-conten:space-between'>
            <span style='text-align:left;width: 150px'>
            <span></span>
            ${element.seriesName}:</span> 
            <span style='text-align:right;flex:1;color: #51FEFFFF'>${element.value}</span></p>`;
            }
            text = `<div style='border: 1px solid #51feff;color: #ffffff;
            padding: 7px;
            border-radius: 5px;
            background: rgba(0,0,0,0.5);'>${text}</div>`;
            return text;
          }
        },
        grid: {
          left: "3%",
          right: "0%",
          bottom: "0%",
          containLabel: true
        },
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
            margin: 15,
            rotate: 30
          }
        },
        yAxis: [
          {
            type: "value",
            name: "",
            splitLine: {
              //刻度线
              show: false
            },
            axisLabel: {
              //调整y轴的lable
              textStyle: {
                color: "#88D7FD",
                fontSize: 14, // 字体
                align: "right"
              },
              margin: 30,
              show: true
            }
          },
          {
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
              show: true,
              formatter: "{value}%"
            },
            axisLine: {
              // symbol: ["none", "arrow"],
              symbolSize: [15, 17],
              lineStyle: {
                color: "#000000",
                width: 2 //  改变坐标线的颜色
              }
            }
          }
        ],
        series: [
          {
            name: barTitle1,
            type: "bar",
            yAxisIndex: 1,
            showSymbol: false,
            hoverAnimation: false,
            data: ydata1,
            barWidth: 12, //柱图宽度
            itemStyle: {
              //左面
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#00adff" },
                  { offset: 1, color: "rgba(0,173,255,0.25)" }
                ]),
                barBorderRadius: [0, 0, 0, 0]
              }
            }
          },
          {
            name: barTitle2,
            type: "bar",
            yAxisIndex: 1,
            showSymbol: false,
            hoverAnimation: false,
            data: ydata2,
            barWidth: 12, //柱图宽度
            itemStyle: {
              //左面
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#06e789" },
                  { offset: 1, color: "rgba(6,231,137,0.10)" }
                ]),
                barBorderRadius: [0, 0, 0, 0]
              }
            },
            barGap: "-100%"
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
