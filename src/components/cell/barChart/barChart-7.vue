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
      const { seriesData, xdata, tooltip, grid, axisLabel } = chartData;
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
          left: "right"
        },
        color: ["#5D56CE", "#5B8DF9", "#1EDFFF", "#84FFC9", "#DFFF84"],
        grid: {
          left: "3%",
          right: "0%",
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
        }
      };
      const series = seriesData.map(e => {
        return {
          name: e.name,
          type: "bar",
          stack: "Ad",
          emphasis: {
            focus: "series"
          },
          barWidth: 10,
          data: e.value,
          itemStyle: e.itemStyle,
        };
      });
      const legendData = seriesData.map(ele => {
        return {
          name: ele.name,
          icon: "stack",
          textStyle: {
            fontSize: 14,
            fontFamily: "PingFangSC",
            color: "#FFFFFF"
          }
        };
      });
      this.$set(option, "series", series);
      this.$set(option.legend, "data", legendData);
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
