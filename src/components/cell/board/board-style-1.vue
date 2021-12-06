<template>
  <div class="main">
    <div :id='sid' class='board-container' />
    <slot />
    <div class="btn">
      {{btnText}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'BoardStyle1',
  props: {
    sid: {
      type: String,
      default: () => 'board1',
    },
    source: {
      type: Number,
      default() {
        return 80;
      },
    },
    btnText: {
      type: String,
      default() {
        return '楼层';
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
        subtext: '覆盖率',
        subtextStyle: {
          color: '#3B8DD5',
          fontSize: 14,
          top: 'center',
        }
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
      const value = percentage;
      const option = {
        backgroundColor: "transparent",
        title: {
          text: `{a|${value}%}`,
          x: 'center',
          y: '40%',
          textStyle: {
            rich: {
              a: {
                fontSize: 42,
                color: '#FFFFFF'
              }
            }
          },
          subtext: this.echartOptions.subtext,
          subtextStyle: this.echartOptions.subtextStyle,
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
            radius: "100%", // 位置
            center: ["50%", "50%"],
            min: 0,
            max: 100,
            startAngle: 210,
            endAngle: -30,
            axisLine: {
              show: true,
              lineStyle: {
                // 轴线样式
                width: 2, // 宽度
                color: [
                  [1, new this.$echarts.graphic.LinearGradient(
                    0, 1, 0, 0, [{
                      offset: 0,
                      color: 'rgba(58,167,255,0)',
                    }, {
                      offset: 0.5,
                      color: 'rgba(58,167,255,0.5)',
                    },
                    {
                      offset: 1,
                      color: 'rgba(244,248,255,1)',
                    }
                    ]
                  )],
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
            radius: ['90%', '70%'],
            center: ['50%', '50%'],
            min: 0, //最小刻度
            max: 100, //最大刻度
            startAngle: 210,
            endAngle: -30,
            z: 0,
            zlevel: 0,
            label: {
              normal: {
                position: "center",

              }
            },
            data: [{
              value: (value + 40),
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
              value: 140 - (value + 40),
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
              value: 70,
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
            ],
            animation: false
          },
          {
            name: "",
            type: "gauge",
            radius: "90%",
            center: ['50%', '50%'],
            min: 0, //最小刻度
            max: 100, //最大刻度
            startAngle: 210,
            endAngle: -30,
            splitNumber: 6,
            hoverAnimation: false,
            axisTick: {
              show: false
            },
            splitLine: {
              length: 30,
              lineStyle: {
                width: 6,
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
          {
            type: 'pie',
            radius: ['0', '55%'],
            center: ['50%', '50%'],
            z: 0,
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'rgba(27,110,255,0.75)'
                },
                {
                  offset: 0.5,
                  color: 'rgba(27,110,255,0.3)'
                },
                {
                  offset: 1,
                  color: 'rgba(27,110,255,0)'
                }
                ]),
                // borderWidth: 2,
                // borderColor: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //   offset: 0,
                //   color: 'rgba(123,174,255,1)'
                // },
                // {
                //   offset: 0.5,
                //   color: 'rgba(123,174,255,0.5)'
                // },
                // {
                //   offset: 1,
                //   color: 'rgba(123,174,255,1)'
                // }
                // ]),
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              },
            },
            label: {
              normal: {
                position: "center",

              }
            },
            data: [100],
            animation: false
          },
          {
            // name: "白色圈刻度",
            type: "gauge",
            radius: "64%",
            startAngle: 225, //刻度起始
            endAngle: -134.8, //刻度结束
            z: 4,
            axisTick: {
              show: true,
              lineStyle: {
                width: 2,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(37,121,255,1)" },
                  { offset: 1, color: "rgba(76,177,255,0)" }
                ]),
              }
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              color: 'rgba(255,255,255,0)',
              fontSize: 12,
            }, //刻度节点文字颜色
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
      this.option = this.$deepMerge(option, this.echartOptions)
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
.main{
  width: 100%;
  height: 100%;
  position: relative;
  .board-container{
    width: 100%;
    height: 100%;
  }
  .btn{
    position: absolute;
    width: 116px;
    height: 47px;
    background: url('./images/btn.png') no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    line-height: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 116%);
  }
}

</style>
