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
      series.push({
        z: 1,
        name: barTitleName || barTitle[ydataIndex],
        type: "bar",
        data: ydataItem,
        barWidth: "6px",
        itemStyle: {
          normal: {
            color: color || colors[ydataIndex]
          }
        }
      })
    }
  });
  return series
}
export default {
  name: 'BarChart6',
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
      const colorItems = colors || [new echarts.graphic.LinearGradient(
        0,
        0,
        0,
        1,
        [
          {
            offset: 0,
            color: "rgba(15,221,255,1)" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "rgba(15,221,255,0)" // 100% 处的颜色
          }
        ],
        false
      ), new echarts.graphic.LinearGradient(
        0,
        0,
        0,
        1,
        [
          {
            offset: 0,
            color: "rgba(132,255,201,1)" // 0% 处的颜色
          },
          {
            offset: 1,
            color: "rgba(132,255,201,0)" // 100% 处的颜色
          }
        ],
        false
      )]
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
        tooltip: {
          show: false
        },
        color: ["#0FDDFF", "#84FFC9"],
        grid: {
          left: "3%",
          right: "0%",
          bottom: "0%",
          containLabel: true
        },
        legend: {
          itemWidth: 10,
          itemHeight: 10,
          left: "right",
          data: legend
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
