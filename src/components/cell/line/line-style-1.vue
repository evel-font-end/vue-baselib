<template>
  <div class="bar">
    <div :id="chartId" class="chart-wrap" />
  </div>
</template>
<script>
import { isFunction, isArray } from '@/assets/lib/utils';

export const lineItemRecursion = (ydata, options, lineTitleName, color) => {
  const { lineTitle, colors } = options;
  const series = [];
  ydata.map((ydataItem, ydataIndex) => {
    if (isFunction(ydataItem)) {
      series.push({
        ...ydataItem
      })
    } else if (isArray(ydataItem) && (ydataItem.some(item => item instanceof Array))) {
      const obj = [ ...lineItemRecursion(ydataItem, options, lineTitle[ydataIndex], colors[ydataIndex])];
      series.push(...obj)
    } else {
      series.push({
        name: lineTitleName || lineTitle[ydataIndex],
        type: "line",
        symbol: "circle", //拐点设置为实心
        showSymbol: false,
        symbolSize: 3,
        yAxisIndex: 0,
        yAxisIndex: 0,
        smooth: true,
        emphasis: {
          color: color || colors[ydataIndex] 
        },
        itemStyle: {
          normal: {
            lineStyle: {
              width: 4,
              color: color || colors[ydataIndex] //改变折线颜色
            }
          }
        },
        itemStyle: {
          normal: {
            color: color || colors[ydataIndex], //拐点颜色
            borderColor: "#FFFFFF", //拐点边框颜色
            borderWidth: 2 //拐点边框大小
          }
        },
        data: ydataItem
      })
    }
  });
  return series
}
export default {
  name: "lineStyle1",
  props: {
    chartId: {
      type: String,
      default: ""
    },
    chartData: {
      type: Object,
      default: function () {
        return {};
      }
    },
    legendColor: {
       // legend图例颜色
      type: Array,
      default: function () {
        return ["#38DFEF", "#27DDA8"]
      }
    },
    lineLegendStyle: {//图例文字样式
      type: Object,
      default: function() {
        return {
          fontSize: 14,
          fontFamily: "PingFangSC",
          color: "#ffff"
        };
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
          color: "rgba(41,153,234,0.2)", //坐标轴的颜色
          width: "1" //坐标轴的宽度
        };
      }
    },
    yAxisSplitLineStyle: {
      type: Object,
      default: function() {
        return {
          color: "rgba(41,153,234,0.2)",
          width: 1,
          type: "solid"
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
  watch: {
    options(val) {
      if (this.chart === null) {
        this.initChart()
      }
      this.updateChart()
      
    },
    chartData(val) {
      if (this.chart === null) {
        this.initChart()
      }
      this.updateChart()
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart();
      this.updateChart()
    });
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(
        document.getElementById(this.chartId),
        "chalk"
      );
    },
    updateChart() {
      const { colors, lineTitle, xdata, ydata } = this.chartData;
      const colorItems = colors || ['#21B791', '#FFBA1E']
      const series = lineItemRecursion(ydata, {
        lineTitle,
        colors: colorItems
      });
      const legend = lineTitle.map((lineTitleItem, lineTitleIndex) => {
        return {
          name: lineTitleItem,
          icon: "stack",
          textStyle: this.lineLegendStyle
          // {
          //   fontSize: 14,
          //   fontFamily: "PingFangSC",
          //   color: "#ffff"
          // }
        }
      })
      const option = {
        tooltip: {
          trigger: "axis"
        },
        color: this.legendColor,
        legend: {
          itemWidth: 10,
          itemHeight: 4,
          left: "right",
          data: legend,
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
            lineStyle: this.xAxisLineStyle,
            normal: {
              color: this.legendColor
            }
            // {
            //   type: "solid",
            //   color: "rgba(41,153,234,0.2)", //坐标轴的颜色
            //   width: "1" //坐标轴的宽度
            // }
          },
          axisLabel: {
            textStyle: this.xAxisLabel
            // {
            //   color: "#88D7FD",
            //   fontSize: 14,
            //   fontFamily: "PingFangSC"
            // }
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
              // {
              //   color: "rgba(41,153,234,0.2)",
              //   width: 1,
              //   type: "solid"
              // }
            },
            axisLabel: {
              textStyle: this.yAxisLabel
              // {
              //   color: "#88D7FD",
              //   fontSize: 14,
              //   fontFamily: "PingFangSC"
              // }
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
