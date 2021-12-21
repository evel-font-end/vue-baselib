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
        z: 1,
        name: barTitleName || barTitle[ydataIndex],
        type: "pictorialBar",
        symbolPosition: "end",
        data: ydataItem,
        symbol: "diamond",
        symbolOffset: (color || colors[ydataIndex]).symbolOffset,
        symbolSize: [15, 10],
        itemStyle: (color || colors[ydataIndex]).itemStyle
      },
      {
        z: 1,
        type: "bar",
        name: barTitleName || barTitle[ydataIndex],
        barWidth: 15,
        barGap: (color || colors[ydataIndex]).barGap,
        data: ydataItem,
        itemStyle: {
          color: (color || colors[ydataIndex]).color
        }
      }])
    }
  });
  return series
}
export default {
  name: 'BarChart5',
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
      const { barTitle, colors, xdata, ydata } = this.chartData;
      const colorItems = colors || [{
        symbolOffset: ["-70%", "-50%"],
        itemStyle: {
          borderColor: "#07F096",
          color: "#07F096"
        },
        barGap: "-50%",
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
      }, {
        symbolOffset: ["65%", "-50%"],
        itemStyle: {
          borderColor: "#5D9EFF",
          color: "#5D9EFF"
        },
        barGap: "40%",
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
      }]
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
        // tooltip
        color: ["#07ED96", "#5C9CFC"],
        legend: {
          itemWidth: 10,
          itemHeight: 10,
          left: "right",
          data: legend
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
        series: series
      };
      this.option = this.$deepMerge(option, this.options)
      this.chart.setOption(this.option);
      this.chart.on('legendselectchanged', (e) => {
        if (e.selected['指标一'] == false) {
          option.series[2].symbolOffset = ['0', '-50%']
        } else {
          option.series[2].symbolOffset = ["65%", "-50%"]
        }
        if (e.selected['指标二'] == false) {
          option.series[0].symbolOffset = ['0', '-50%']
        } else {
          option.series[0].symbolOffset = ["-70%", "-50%"]
        }
        this.chart.setOption(option);
      })
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
