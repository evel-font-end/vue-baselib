<template>
  <div :id='sid' class='board-container' />
</template>
<script>
export default {
  name: 'BoardStyle2',
  props: {
    sid: {
      type: String,
      default: () => 'board2',
    },
    source: {
      type: String,
      default() {
        return '80';
      },
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
      timer: null,
      chart: null,
      option: {},
      echartOptions: {
        subtext: '稽核准确率',
        subtextStyle: {
          color: '#99CBFC',
          fontSize: 14,
          top: 'center',
          fontFamily: 'DINAlternateBold',
        },
        centerColor: '#004C8E',
        pointerColor: '#00FFD6',
        splitColor: '#129FF6'
      }
    }
  },
  watch: {
    source(newVal) {
      if (this.chart === null) {
        this.initChart()
      }
      this.updateChart(newVal)
    },
  },
  created() {
  },
  mounted() {
    this.chart = this.initChart()
    this.echartOptions = Object.assign(this.echartOptions, this.options)
    this.updateChart(this.source)
  },
  destroyed() {
    this.timer && clearInterval(this.timer)
  },
  methods: {
    initChart() {
      const el = document.getElementById(this.sid)
      const _chart = this.$echarts.init(el)
      window.addEventListener('resize', () => {
        _chart.resize();
      })
      return _chart
    },
    updateChart(percentage) {
      this.angle = 0;//角度，用来做简单的动画效果的
      const value = 30;
      this.option = {
        backgroundColor: "transparent",
        title: {
          text: `{a|${value}}{c|%}`,
          x: 'center',
          y: '60%',
          textStyle: {
            rich: {
              a: {
                fontSize: 48,
                color: '#29EEF3'
              },

              c: {
                fontSize: 20,
                color: '#ffffff',
                // padding: [5,0]
              }
            }
          }
        },
        legend: {
          type: "plain",
          orient: "vertical",
          right: 0,
          top: "10%",
          align: "auto",
          data: [{
            name: '涨价后没吃过',
            icon: "circle"
          }, {
            name: '天天吃',
            icon: "circle"
          }, {
            name: '三五天吃一次',
            icon: "circle"
          }, {
            name: '半个月吃一次',
            icon: "circle"
          }],
          textStyle: {
            color: "white",
            fontSize: 16,
            padding: [10, 1, 10, 0]
          },
          selectedMode: false
        },
        series: [
          {
            type: "gauge",
            radius: "135%", // 位置
            center: ["50%", "80%"],
            min: 0,
            max: 100,
            startAngle: 180,
            endAngle: 0,
            axisLine: {
              show: true,
              lineStyle: {
                // 轴线样式
                width: 4, // 宽度
                color: [
                  [1, "rgba(229,229,229,0.3)"]
                ] // 颜色
              }
            },
            axisTick: {
              // 刻度
              show: false
            },
            splitLine: {
              // 分割线
              show: false
            },
            axisLabel: {
              // 刻度标签
              show: false
            },
            pointer: {
              // 仪表盘指针
              show: false
            },
            detail: {
              // 仪表盘详情
              show: false
            }
          }, {
            name: '吃猪肉频率',
            type: 'pie',
            radius: ['120%', '90%'],
            center: ['50%', '80%'],
            min: 0, //最小刻度
            max: 100, //最大刻度
            startAngle: 180,
            endAngle: 100,
            z: 0,
            zlevel: 0,
            label: {
              normal: {
                position: "center",

              }
            },
            data: [{
              value: value,
              name: "",
              itemStyle: {
                normal: {
                  color: { // 完成的圆环的颜色
                    colorStops: [{
                      offset: 0,
                      color: '#4FADFD' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#28E8FA' // 100% 处的颜色
                    }]
                  },
                }
              }
            },
            {
              value: 100 - 50 - value,
              name: "",
              label: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  color: "#093B5F"
                }
              }
            },
            {
              value: 50,
              name: "",
              label: {
                normal: {
                  show: false
                }
              },
              itemStyle: {
                normal: {
                  color: "transparent"
                }
              }
            }
            ]
          },

          {
            name: "",
            type: "gauge",
            radius: "120%",
            center: ['50%', '80%'],
            min: 0, //最小刻度
            max: 100, //最大刻度
            startAngle: 180,
            endAngle: 0,
            splitNumber: 8,
            hoverAnimation: true,
            axisTick: {
              show: false
            },
            splitLine: {
              length: 60,
              lineStyle: {
                width: 5,
                color: "#132845"
              }
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: false
            },
            axisLine: {
              lineStyle: {
                opacity: 0
              }
            },
            detail: {
              show: false
            },
            data: [{
              value: 0,
              name: ""
            }]
          },

        ]
      };
      this.timer = setInterval(() => {
        //用setInterval做动画感觉有问题
        this.draw()
      }, 100);
    },
    draw() {
      this.angle = this.angle + 3
      this.chart.setOption(this.option)
    },
  },
}
</script>
<style lang='scss' scoped>
.board-container{
  width: 100%;
  height: 100%;
}
</style>
