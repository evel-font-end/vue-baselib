<template>
  <div class="bar">
    <div :id="chartId" class="chart-wrap" />
  </div>
</template>
<script>
const echarts = require("echarts");
function setAreaColor(colors) {
  if (colors.length == 1) {
    return colors[0];
  } else if (colors.length == 2) {
    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: colors[0] },
      { offset: 1, color: colors[1] }
    ]);
  } else if (colors.length == 3) {
    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: colors[0] },
      { offset: 0.5, color: colors[1] },
      { offset: 1, color: colors[2] }
    ]);
  }
}
function setLinearColor(colors) {
  if (colors.length == 1) {
    return colors[0];
  } else if (colors.length == 2) {
    return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      { offset: 0, color: colors[0] },
      { offset: 1, color: colors[1] }
    ]);
  } else if (colors.length == 3) {
    return new echarts.graphic.LinearGradient(0, 0, 1, 0, [
      { offset: 0, color: colors[0] },
      { offset: 0.5, color: colors[1] },
      { offset: 1, color: colors[2] }
    ]);
  }
}
export default {
  name: "BarStyle3",
  props: {
    chartId: {
      type: String,
      default: "chartId"
    },
    chartData: {
      type: Object,
      default: function() {
        return {};
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
    line2LegendStyle: {
      type: Object,
      default: function() {
        return {
          fontSize: 14,
          fontFamily: "PingFangSC",
          color: "#ffff"
        };
      }
    },
    legendColor: {
      // legend图例颜色
      type: Array,
      default: function() {
        return ["#FFBA1E", "#21B791"];
      }
    },
    xAxisLabel: {
      type: Object,
      default: function() {
        return {
          color: "#88D7FD",
          fontSize: 14,
          fontFamily: "PingFangSC"
        };
      }
    },
    yAxisLabel: {
      type: Object,
      default: function() {
        return {
          color: "#88D7FD",
          fontSize: 14,
          fontFamily: "PingFangSC"
        };
      }
    },
    xAxisLineStyle: {
      type: Object,
      default: function() {
        return {
          type: "solid",
          color: "#325F76", //坐标轴的颜色
          width: "1" //坐标轴的宽度
        };
      }
    },
    yAxisSplitLineStyle: {
      type: Object,
      default: function() {
        return {
          color: "#325F76",
          width: 1,
          type: "solid"
        };
      }
    },
    line1Color: {
      type: Array,
      default: function() {
        return ["#FFBA1E"];
      }
    },
    line2Color: {
      type: Array,
      default: function() {
        return ["#21B791"];
      }
    },
    line2Area: {
      type: Array,
      default: function() {
        return ["rgba(18,186,149,0.38)", "rgba(18,186,149,0)"];
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
        color: this.legendColor,
        legend: {
          itemWidth: 13,
          itemHeight: 4,
          left: "right",
          data: [
            {
              name: lineTitle1,
              icon: "stack",
              textStyle: this.line1LegendStyle
            },
            {
              name: lineTitle2,
              icon: "stack",
              textStyle: this.line2LegendStyle
            }
          ]
        },
        tooltip: {
          show: false,
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
            lineStyle: this.xAxisLineStyle
          },
          axisLabel: {
            textStyle: this.xAxisLabel
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
              lineStyle: this.yAxisSplitLineStyle
            },
            axisLabel: {
              textStyle: this.yAxisLabel
            }
          }
        ],
        series: [
          {
            name: lineTitle1,
            type: "line",
            yAxisIndex: 0,
            smooth: false,
            symbol: "none",
            itemStyle: {
              normal: {
                lineStyle: {
                  color: setLinearColor(this.line1Color) //改变折线颜色
                }
              }
            },
            data: ydata1
          },
          {
            name: lineTitle2,
            type: "line",
            yAxisIndex: 0,
            smooth: false,
            symbol: "none",
            areaStyle: {
              normal: {
                color: setAreaColor(this.line2Area) //改变区域颜色
              }
            },
            itemStyle: {
              normal: {
                lineStyle: {
                  color: setLinearColor(this.line2Color) //改变折线颜色
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
