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
    source: {
      type: Array,
      default: () => {
        return [
          { name: "淳化", value1: 250 },
          { name: "横溪", value1: 350 },
          { name: "湖熟", value1: 550 },
          { name: "江宁", value1: 450 },
          { name: "东山", value1: 650 },
          { name: "禄口", value1: 350 },
          { name: "汤山", value1: 750 },
          { name: "麒麟", value1: 850 },
          { name: "谷里", value1: 350 },
          { name: "秣陵", value1: 650 }
        ];
      }
    }
  },
  data() {
    return {
      chart: null
    };
  },
  watch: {
    /* source: function (newSource) {
      this.updateCharts(newSource)
    }, */
  },
  mounted() {
    // this.charts = this.initCharts();
    // this.updateCharts(this.source);
    this.initChart();
  },
  methods: {
    initChart() {
      this.chart = this.$echarts.init(
        document.getElementById(this.chartId),
        "chalk"
      );
      const ydata2 = [1, 2, 3, 4, 5, 6, 7, 8],
        ydata = [1, 2, 3, 4, 5, 6, 7, 8],
        xdata = ["af", "feew", "few", "eew", "dfe", "egrreg", "egerg", "jty"],
        average = 2,
        standard = 1;
      let option = {
        tooltip: {
          trigger: "axis",
          backgroundColor: "transparent",
          padding: 0,
          formatter(params) {
            let text = "";
            params = params.concat([
              {
                seriesName: "光缆覆盖率达标线",
                value: standard * 100
              },
              {
                seriesName: "光缆覆盖率平均线",
                value: average * 100
              }
            ]);
            params.forEach(element => {
              if (element.seriesName === "光缆皮长") {
                element.unit = "km";
              } else {
                element.unit = "%";
              }
            });
            for (let i = 0; i < params.length; i++) {
              const element = params[i];
              text += `<p style='display:flex;justify-conten:space-between;'>
            <span style='text-align:left;width: 100px;margin-bottom: 8px'>
            <span></span>
            ${element.seriesName}:</span> 
            <span style='text-align:right;flex:1;color: #51FEFFFF'>${Number(
              element.value
            ).toFixed(2)}${element.unit}</span></p>`;
            }
            text = `<div style='border: 1px solid #51feff;color: #ffffff;padding: 15px 15px 7px;border-radius: 5px;background: rgba(0,0,0,0.5);'>${text}</div>`;
            return text;
          }
        },
        grid: {
          top: "5%",
          left: "1%",
          right: "1%",
          bottom: "4%",
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
                fontSize: 14 // 字体
              },
              show: true,
              formatter: "{value} %"
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
          }
        ],
        series: [
          {
            name: "光缆覆盖率",
            type: "line",
            // yAxisIndex: 1,
            data: ydata2.map(item => {
              return item * 100;
            }),
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
                    color: "#F49C491C" // 0% 处的颜色
                  },
                  {
                    offset: 0.5,
                    color: "#F49C49FF" // 50% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#F49C491A" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            },
            markLine: {
              symbol: "none",
              animation: false,
              label: {
                show: false
                // position: 'start',
                // formatter: '平均值'
              },
              data: [
                {
                  lineStyle: {
                    color: "#FFB93FFF"
                  },
                  name: "光缆覆盖率平均线",
                  yAxis: average * 100
                },
                {
                  lineStyle: {
                    color: "#5BE7B4FF"
                  },
                  name: "光缆覆盖率达标线",
                  yAxis: standard * 100
                }
              ]
            }
          },
          {
            name: "光缆皮长",
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
            barWidth: 8, //柱图宽度
            itemStyle: {
              //左面
              normal: {
                color: getLinearColor("#10DAFF", "#015BCC"),
                barBorderRadius: [0, 0, 0, 0]
              }
            }
          },
          {
            name: "a",
            tooltip: {
              show: false
            },
            type: "bar",
            yAxisIndex: 1,
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
                color: getLinearColor("#2B89FC", "#023E8A"),
                barBorderRadius: [0, 0, 0, 0]
              }
            },
            data: ydata,
            barGap: 0
          },
          {
            name: "b",
            tooltip: {
              show: false
            },
            yAxisIndex: 1,
            type: "pictorialBar",
            itemStyle: {
              //顶部
              normal: {
                color: "#39FCF7",
                borderColor: "#2996e7",
                borderWidth: 0.01
              }
            },
            // symbolRotate: 9,
            symbol: "diamond",
            symbolSize: ["16", "3"],
            symbolOffset: [0, "-38%"],
            symbolPosition: "end",
            data: ydata,
            z: 3
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
