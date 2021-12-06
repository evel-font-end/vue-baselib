<template>
  <div class="bar">
    <div :id="chartId" class="chart-wrap" />
  </div>
</template>
<script>
const echarts = require("echarts");
function setBarLinearColor(colors) {
  if (colors.length == 1) {
    return colors[0];
  } else if (colors.length == 2) {
    return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      { offset: 0, color: colors[0] },
      { offset: 1, color: colors[1] }
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
  name: "BarStyle2",
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
    legendColor: {
      // legend图例颜色
      type: Array,
      default: function() {
        return ["#0FF1FC", "#07EE95"];
      }
    },
    barBackgroundStyle: {
      type: Object,
      default: function() {
        return {
          color: "#3B9DE629",
          shadowBlur: 0,
          shadowColor: "#3B9DE629",
          shadowOffsetX: 6
        };
      }
    },
    xAxisLabel: {
      type: Object,
      default: function() {
        return {
          fontSize: 14, // 字体
          color: "#88D7FDFF"
        };
      }
    },
    yAxisLabel: {
      type: Object,
      default: function() {
        return {
          fontSize: 14, // 字体
          color: "#88D7FDFF"
        };
      }
    },
    lineLegendStyle: {
      type: Object,
      default: function() {
        return {
          fontSize: 12,
          fontFamily: "PingFangSC-Regular",
          color: "#FFFFFF"
        };
      }
    },
    barLegendStyle: {
      type: Object,
      default: function() {
        return {
          fontSize: 12,
          fontFamily: "PingFangSC-Regular",
          color: "#FFFFFF"
        };
      }
    },
    barColor: {
      type: Array,
      default: function() {
        return ["#07F096", "#07F0E2"];
      }
    },
    lineColor: {
      type: Array,
      default: function() {
        return [
          "rgba(15,241,252,0.08)",
          "rgba(15,241,252,1)",
          "rgba(15,241,252,0.08)"
        ];
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
      const { lineTitle, barTitle, xdata, barData, lineData } = this.chartData;
      const option = {
        color: this.legendColor,
        legend: {
          itemWidth: 13,
          itemHeight: 4,
          left: "right",
          data: [
            {
              name: lineTitle,
              icon: "stack",
              textStyle: this.lineLegendStyle
            },
            {
              name: barTitle,
              icon: "stack",
              itemWidth: 10,
              itemHeight: 10,
              textStyle: this.barLegendStyle
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
            textStyle: this.xAxisLabel,
            interval: 0,
            margin: 15
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
            axisTick: {
              show: false
            },
            axisLabel: {
              //调整y轴的lable
              textStyle: this.yAxisLabel,
              show: true
            },
            axisLine: {
              show: false
            }
          },
          {
            type: "value",
            name: "",
            splitLine: {
              //刻度线
              show: false
            },
            axisTick: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisLabel: {
              //调整y轴的lable
              textStyle: {
                color: "#88D7FD",
                fontSize: 14 // 字体
              },
              show: false
            }
          }
        ],
        series: [
          {
            name: lineTitle,
            type: "line",
            // yAxisIndex: 1,
            data: lineData,
            smooth: true,
            symbol: "none",
            lineStyle: {
              color: setLinearColor(this.lineColor)
            }
          },
          {
            name: barTitle,
            type: "bar",
            yAxisIndex: 1,
            showBackground: true,
            backgroundStyle: this.barBackgroundStyle,
            showSymbol: false,
            hoverAnimation: false,
            data: barData,
            barWidth: 11, //柱图宽度
            itemStyle: {
              //左面
              normal: {
                color: setBarLinearColor(this.barColor),
                barBorderRadius: [0, 0, 0, 0]
              }
            }
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
