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
      let { lineTitle, barTitle, xdata, ydata, ydata2 } = this.chartData;
      let option = {
        color:['#0FF1FC', '#07EE95'],
        legend: {
          itemWidth: 13,
          itemHeight: 4,
          left: "right",
          data: [
            {
              name: lineTitle,
              icon: "stack",
              textStyle: {
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
                color: "#FFFFFF"
              }
            },
            {
              name: barTitle,
              icon: "stack",
              itemWidth: 10,
              itemHeight: 10,
              textStyle: {
                fontSize: 12,
                fontFamily: "PingFangSC-Regular",
                color: "#FFFFFF"
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
              textStyle: {
                color: "#88D7FD",
                fontSize: 14 // 字体
              },
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
            data: ydata2,
            smooth: true,
            symbol: "none",
            lineStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 0,
                colorStops: [
                  {
                    offset: 0,
                    color: "rgba(15,241,252,0.08)" // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "rgba(15,241,252,1)" // 50% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "rgba(15,241,252,0.08)" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          },
          {
            name: barTitle,
            type: "bar",
            yAxisIndex: 1,
            showBackground: true,
            backgroundStyle: {
              color: "#3B9DE629",
              shadowBlur: 0,
              shadowColor: "#3B9DE629",
              shadowOffsetX: 6
            },
            showSymbol: false,
            hoverAnimation: false,
            data: ydata,
            barWidth: 11, //柱图宽度
            itemStyle: {
              //左面
              normal: {
                color: getLinearColor("#07F096", "#07F0E2"),
                barBorderRadius: [0, 0, 0, 0]
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
