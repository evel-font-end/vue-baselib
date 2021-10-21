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
function getAreaColor(colorStart, colorEnd) {
  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    { offset: 0, color: colorStart },
    { offset: 1, color: colorEnd }
  ]);
}
export default {
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
      let { lineTitle1, lineTitle2, xdata, ydata1, ydata2 } = this.chartData;
      let option = {
        tooltip: {
          trigger: "axis"
        },
        color: ["#F08C24", "#ECE137"],
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
          show: false,
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
            yAxisIndex: 0,
            smooth: true,
            symbol: "none",
            areaStyle: {
              normal: {
                color: getAreaColor(
                  "rgba(231,220,46,0.39)",
                  "rgba(231,220,46,0)"
                ) //改变区域颜色
              }
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 4,
                  color: getLinearColor(
                    "rgba(245,143,36,0.08)",
                    "rgba(245,143,36,1)",
                    "rgba(245,143,36,0.08)"
                  ) //改变折线颜色
                }
              }
            },
            data: ydata1
          },
          {
            name: lineTitle2,
            type: "line",
            yAxisIndex: 0,
            smooth: true,
            symbol: "none",
            areaStyle: {
              normal: {
                color: getAreaColor(
                  "rgba(240,140,36,0.26)",
                  "rgba(240,140,36,0)"
                ) //改变区域颜色
              }
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  width: 4,
                  color: getLinearColor(
                    "rgba(239,228,56,0.08)",
                    "rgba(239,228,56,1)",
                    "rgba(239,228,56,0.08)"
                  ) //改变折线颜色
                }
              }
            },
            data: ydata2
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
