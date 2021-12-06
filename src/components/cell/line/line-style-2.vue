<template>
  <div class="bar">
    <div :id="chartId" class="chart-wrap" />
  </div>
</template>
<script>
const echarts = require("echarts");
function getLinearColor(colorStart, colorMiddle, colorEnd) {
  return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
    { offset: 0, color: colorStart },
    { offset: 0.5, color: colorMiddle },
    { offset: 1, color: colorEnd }
  ]);
}
export default {
  name: "lineStyle2",
  props: {
    chartId: {
      type: String,
      default: ""
    },
    chartData: {
      type: Object,
      default: function() {
        return {};
      }
    },
    legendColor: {
      type: Array,
      default: function() {
        return ["#21B791", "#FFBA1E"]
      }
    },
    line1LegendStyle: {
      type: Object,
      default: function() {
        return {
          fontSize: 14,
          fontFamily: "PingFangSC",
          color: "#ffff"
        };
      }
    },
    options: {
      type: Object,
      default() {
        return {
        }
      }
    },
  },
  data() {
    return {
      option: {},
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
      const { lineTitle1, lineTitle2, xdata, ydata1, ydata2 } = this.chartData;
      const option = {
        tooltip: {
          trigger: "axis"
        },
        color: this.legendColor,
        legend: {
          itemWidth: 10,
          itemHeight: 4,
          left: "right",
          data: [
            {
              name: lineTitle1,
              icon: "stack",
              textStyle: {
                fontSize: 14,
                fontFamily: "PingFangSC",
                color: "#ffff"
              }
            },
            {
              name: lineTitle2,
              icon: "stack",
              textStyle: {
                fontSize: 14,
                fontFamily: "PingFangSC",
                color: "#ffff"
              }
            }
          ]
        },
        tooltip: {
          trigger: "axis",
          backgroundColor: "transparent",
          padding: 0,
          formatter(params) {
            let text = "";
            for (let i = 0; i < params.length; i++) {
              const element = params[i];
              text += `<p style='display:flex;justify-conten:space-between;'>
            <span style='text-align:left;width: 100px;margin-bottom: 8px'>
            <span></span>
            ${element.seriesName}:</span> 
            <span style='text-align:right;flex:1;color: #51FEFFFF'>${Number(
              element.value
            )}</span></p>`;
            }
            text = `<div style='border: 1px solid #51feff;color: #ffffff;padding: 15px 15px 7px;border-radius: 5px;background: rgba(0,0,0,0.5);'>${text}</div>`;
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
          axisLine: {
            lineStyle: {
              type: "solid",
              color: "rgba(41,153,234,0.2)", //坐标轴的颜色
              width: "1" //坐标轴的宽度
            }
          },
          axisLabel: {
            textStyle: {
              color: "#88D7FD",
              fontSize: 14,
              fontFamily: "PingFangSC"
            }
          },
          data: xdata
        },
        yAxis: [
          {
            type: "value",
            axisLine: {
              show: false //不显示坐标轴轴线
            },
            axisTick: {
              //y轴刻度线
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "rgba(41,153,234,0.2)",
                width: 1,
                type: "solid"
              }
            },
            axisLabel: {
              textStyle: {
                color: "#88D7FD",
                fontSize: 14,
                fontFamily: "PingFangSC"
              }
            }
          }
        ],
        series: [
          {
            name: lineTitle1,
            type: "line",
            symbol: "circle", //拐点设置为实心
            symbolSize: 6,
            yAxisIndex: 0,
            smooth: false,
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2,
                  color: "#21B791" //改变折线颜色
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#21B791", //拐点颜色
                borderColor: "#FFFFFF", //拐点边框颜色
                borderWidth: 2 //拐点边框大小
              }
            },
            data: ydata1
          },
          {
            name: lineTitle2,
            type: "line",
            symbol: "circle", //拐点设置为实心
            symbolSize: 6,
            yAxisIndex: 0,
            smooth: false,
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 2,
                  color: "#FFBA1E" //改变折线颜色
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#FFBA1E", //拐点颜色
                borderColor: "#FFFFFF", //拐点边框颜色
                borderWidth: 2 //拐点边框大小
              }
            },
            data: ydata2
          }
        ]
      };
      this.option = this.$deepMerge(option, this.options)
      this.chart.setOption(this.option);
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
