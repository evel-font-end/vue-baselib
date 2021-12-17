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
import { isFunction, isArray } from '@/assets/lib/utils';
export const lineItemRecursion = (ydata, options, barTitleName, color) => {
  const { barTitle, colors } = options;
  const series = [];
  ydata.map((ydataItem, ydataIndex) => {
    if (isFunction(ydataItem)) {
      series.push({
        ...ydataItem
      })
    } else if (isArray(ydataItem) && (ydataItem.some(item => item instanceof Array))) {
      const obj = [ ...lineItemRecursion(ydataItem, options, barTitle[ydataIndex], colors[ydataIndex])];
      series.push(...obj)
    } else {
      series.push(...[{
        name: barTitleName || barTitle[ydataIndex],
        animation: false,
        type: "bar",
        // yAxisIndex: 1,
        showBackground: true,
        backgroundStyle: {
          color: "#3B9DE629",
          shadowBlur: 0,
          shadowColor: "#3B9DE629",
          shadowOffsetX: 6
        },
        showSymbol: false,
        hoverAnimation: false,
        data: ydataItem,
        barWidth: 4, //柱图宽度
        itemStyle: {
          //左面
          normal: {
            color: colors[ydataIndex].leftColor
          }
        }
      },
      {
        name: "a",
        animation: false,
        tooltip: {
          show: false
        },
        type: "bar",
        showBackground: true,
        backgroundStyle: {
          color: "#3B9DE629",
          shadowBlur: 0,
          shadowColor: "#3B9DE629",
          shadowOffsetX: -13
        },
        barWidth: 7,
        itemStyle: {
          //右面
          normal: {
            color: colors[ydataIndex].rightColor,
            barBorderRadius: [0, 0, 0, 0]
          }
        },
        data: ydataItem,
        barGap: 0
      },
      {
        name: "b",
        animation: false,
        tooltip: {
          show: false
        },
        type: "pictorialBar",
        itemStyle: {
          //顶部
          normal: {
            color: colors[ydataIndex].topColor,
            borderColor: "#2996e7",
            borderWidth: 0.01
          }
        },
        // symbolRotate: 41,
        // symbol: "image://" + require("./../image/barTop1.png"),
        symbolKeepAspect: false,
        symbolSize: ["15", "3"],
        symbolOffset: colors[ydataIndex].symbolOffset[0],
        symbolPosition: "end",
        data: ydataItem,
        z: 3
      },
      {
        name: "b",
        animation: false,
        tooltip: {
          show: false
        },
        type: "pictorialBar",
        itemStyle: {
          //顶部
          normal: {
            color: colors[ydataIndex].topColor,
            borderColor: "#2996e7",
            borderWidth: 0.01
          }
        },
        // symbolRotate: 41,
        // symbol: "image://" + require("./../image/barBottom1.png"),
        symbolKeepAspect: false,
        symbolSize: ["13", "2"],
        symbolOffset: colors[ydataIndex].symbolOffset[1],
        symbolPosition: "start",
        data: ydataItem,
        z: 3
      }])
    }
  });
  console.log('series', series);
  return series
}
export default {
  name: 'BarChart3',
  props: {
    chartId: {
      type: String,
      default: "chartId"
    },
    chartData: {
      type: Object,
      default: {}
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
      const { barTitle, xdata, ydata, colors } = this.chartData;
      const colorItems = colors || [{
        leftColor: "rgba(7,252,143,0.9)",
        rightColor: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: "#079a62" },
          { offset: 0.45, color: "#079a62" },
          { offset: 0.46, color: "rgba(7, 192, 112, 1)" },
          { offset: 0.55, color: "rgba(7, 192, 112, 1)" },
          { offset: 0.56, color: "#079a62" },
          { offset: 1, color: "#079a62" }
        ]),
        topColor: "rgba(7,252,143,0.9)",
        symbolOffset: [
          ["-30%", "-94%"],
          ["-40%", "80%"]
        ]
      }, {
        leftColor: "rgba(6,188,255,0.9)",
        rightColor: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
          { offset: 0, color: "rgba(5,128,174,0.8)" },
          { offset: 0.45, color: "rgba(5,128,174,0.8)" },
          { offset: 0.46, color: "rgba(5, 138, 189,1)" },
          { offset: 0.55, color: "rgba(5, 138, 189,1)" },
          { offset: 0.56, color: "rgba(5,128,174,0.8)" },
          { offset: 1, color: "rgba(5,128,174,0.8)" }
        ]),
        topColor: "rgba(6,188,255,1)",
        symbolOffset: [
          ["48%", "-94%"],
          ["40%", "80%"],
        ]
      }];
      const series = lineItemRecursion(ydata, {
        barTitle,
        colors: colorItems
      });
      const legend = barTitle.map(barTitleItem => {
        return {
          name: barTitleItem,
          icon: "stack",
          textStyle: {
            fontSize: 14,
            fontFamily: "PingFangSC",
            color: "#FFFFFF"
          }
        }
      })
      const option = {
        color: ["#06E484", "#05AAEA"],
        legend: {
          itemWidth: 10,
          itemHeight: 10,
          left: "right",
          data: legend
        },
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
        /* yAxis: [
          {
            type: "value",
            name: "",
            nameLocation: "end",
            nameTextStyle: {
              color: "#88D7FD",
              align: "right",
              height: 24
            },
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
              // symbol: ["none", "arrow"],
              symbolSize: [15, 17],
              lineStyle: {
                color: "#000000",
                width: 2 //  改变坐标线的颜色
              }
            }
          },
          {
            type: "value",
            name: "",
            nameLocation: "end",
            nameTextStyle: {
              color: "#88D7FD"
            },
            axisTick: {
              show: false
            },
            splitLine: {
              //刻度线
              show: false
            },
            axisLabel: {
              //调整y轴的lable
              textStyle: {
                color: "#88D7FD",
                fontSize: 14 // 字体
              },
              show: true
            }
          }
        ], */
        yAxis: {
          type: "value",
          name: "",
          splitLine: {
            //刻度线
            show: false,
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
        series: series
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
