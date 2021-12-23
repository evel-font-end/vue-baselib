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
        name: barTitleName || barTitle[ydataIndex],
        type: "bar",
        stack: "Ad",
        emphasis: {
          focus: "series"
        },
        barWidth: 10,
        data: ydataItem,
        itemStyle: (color || colors[ydataIndex]).itemStyle || {},
      })
    }
  });
  return series
}
export default {
  name: 'BarChart7',
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
  watch: {
    chartData(newVal) {
      if (this.chart === null) {
        this.chart = this.initChart()
      }
      this.updateChart(newVal)
    }
  },
  mounted() {
    this.$nextTick(async () => {
      this.chart = await this.initChart()
      this.updateChart(this.chartData)
    });
  },
  methods: {
    initChart() {
      const el = document.getElementById(this.chartId)
      const _chart = this.$echarts.init(el)
      window.addEventListener('resize', () => {
        _chart.resize();
      })
      return _chart;
    },
    updateChart(chartData) {
      const { ydata, xdata, barTitle, tooltip, grid, axisLabel, colors } = chartData;
      const colorItems = colors || [{
        itemStyle: {}
      }, {
        itemStyle: {}
      }]
      const series = lineItemRecursion(ydata, {
        barTitle,
        colors: colorItems
      });
      const legendData = barTitle.map(barTitleItem => {
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
      // console.log(this.chartData, '413131')
      const option = {
        tooltip: {
          show: false,
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          ...tooltip
        },
        legend: {
          itemWidth: 10,
          itemHeight: 10,
          left: "right",
          data: legendData
        },
        color: ["#5D56CE", "#5B8DF9", "#1EDFFF", "#84FFC9", "#DFFF84"],
        grid: {
          left: "3%",
          right: "3%",
          bottom: "0%",
          containLabel: true,
          ...grid
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
            margin: 15,
            rotate: 30,
            ...axisLabel
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
        series
      };
      this.option = this.$deepMerge(option, this.options)
      this.chart.setOption(this.option);
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
