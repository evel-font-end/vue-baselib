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
        data: ydataItem,
        type: "bar",
        yAxisIndex: 1,
        showSymbol: false,
        hoverAnimation: false,
        barWidth: 12, //柱图宽度
        itemStyle: {
          //左面
          normal: {
            color: color || colors[ydataIndex],
            barBorderRadius: [0, 0, 0, 0]
          }
        }
      })
    }
  });
  return series
}
export default {
  name: 'BarChart4',
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
      const colorItems = colors || [new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#00adff" },
        { offset: 1, color: "rgba(0,173,255,0.25)" }
      ]), new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: "#06e789" },
        { offset: 1, color: "rgba(6,231,137,0.10)" }
      ])]
      const series = lineItemRecursion(ydata, {
        barTitle,
        colors: colorItems
      });
      const option = {
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
