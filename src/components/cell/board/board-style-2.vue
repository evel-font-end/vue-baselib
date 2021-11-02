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
    percentage: {
      type: String,
      default() {
        return '80';
      },
    },
  },
  data() {
    return {
      chart: null,
      option: {},
    }
  },
  watch: {
    percentage(newVal) {
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
    this.updateChart(this.percentage)
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
      const demoData = {
        name: '时钟',
        value: percentage,
        pos: ['50%', '60%'],
      };
      this.option = {
        title: {
          text: `${percentage}%`,
          bottom: '6%',
          left: 'center',
          textStyle: {
            fontSize: 28,
            color: '#fff',
            fontFamily: 'DINAlternateBold',
          },
          subtext: '稽核准确率',
          subtextStyle: {
            color: '#99CBFC',
            fontSize: 14,
            top: 'center',
            fontFamily: 'DINAlternateBold',
          },
        },
        series: [
          // 外侧光线
          {
            name: demoData.name,
            type: 'gauge',
            center: demoData.pos,
            radius: '100%',
            startAngle: 225,
            endAngle: -45,
            min: 0,
            max: 100,
            axisLine: {
              show: true,
              lineStyle: {
                width: 2,
                color: [
                  [0, '#25D9FF'],
                  [1, '#00AEFF'],
                ],
              },
            },
            axisTick: {
              show: 0,
            },
            splitLine: {
              show: 0,
            },
            axisLabel: {
              show: 0,
            },
            pointer: {
              show: 0,
            },
            detail: {
              show: 0,
            },
            data: [
              {
                value: demoData.value,
              },
            ],
          },
          // 圆环
          {
            name: '小圆形border',
            type: 'pie',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: ['0%', '21%'],
            z: 0,
            center: demoData.pos,
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 10,
                itemStyle: {
                  normal: {
                    color: '#004C8E',
                  },
                },
              },
            ],
          },
          // {
          //   name: "小圆形透明层",
          //   type: "pie",
          //   hoverAnimation: false,
          //   legendHoverLink: false,
          //   radius: ["0%", "10%"],
          //   z: 0,
          //   center: demoData.pos,
          //   labelLine: {
          //     normal: {
          //       show: false
          //     }
          //   },
          //   data: [
          //     {
          //       value: 0
          //     },
          //     {
          //       value: 10,
          //       itemStyle: {
          //         normal: {
          //           color: "#fff5f5"
          //         }
          //       }
          //     }
          //   ]
          // },
          // 内侧指针、数值显示
          {
            name: demoData.name,
            type: 'gauge',
            center: demoData.pos,
            radius: '80%',
            startAngle: 226,
            endAngle: -46,
            min: 0,
            max: 100,
            axisLine: {
              show: true,
              lineStyle: {
                width: 16,
                color: [
                  [
                    1,
                    this.$echarts.graphic.LinearGradient(0, 0, 1, 0, [
                      {
                        offset: 0,
                        color: '#25D9FF',
                      },
                      {
                        offset: 0.5,
                        color: '#00AEFF',
                      },
                      {
                        offset: 1,
                        color: '#25D9FF',
                      },
                    ]),
                  ],
                ],
              },
            },
            axisTick: {
              show: 0,
            },
            splitLine: {
              show: 0,
            },
            axisLabel: {
              show: 0,
            },
            title: {
              show: false,
              offsetCenter: [0, '65%'],
              color: 'white',
              fontSize: 20,
              // backgroundColor: "#D8d8d8",
              borderRadius: 30,
              padding: 5,
            },
            detail: {
              show: false,
              offsetCenter: [0, 60],
              textStyle: {
                fontSize: 25,
                color: '#fff',
              },
              formatter: ['{value}'].join('\n'),

              rich: {
                name: {
                  fontSize: 20,
                  lineHeight: 10,
                  color: '#ddd',
                  padding: [30, 0, 0, 0],
                },
              },
            },
            itemStyle: {
              normal: {
                color: '#00FFD6', //长条指针样式
              },
            },
            pointer: {
              show: true,
              length: '66%',
              width: 6,
            },
            data: [
              {
                value: demoData.value,
                name: demoData.name,
              },
            ],
          },
          // 外围刻度
          {
            type: 'gauge',
            center: demoData.pos,
            radius: '90%',
            splitNumber: 10,
            min: 0,
            max: 100,
            startAngle: 225,
            endAngle: -45,
            axisLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: [[1, 'rgba(0,0,0,0)']],
              },
            }, //仪表盘轴线
            axisTick: { // 坐标轴小标记
              splitNumber: 10, // 每份split细分多少段
              length: 6, // 属性length控制线长
              lineStyle: { // 属性lineStyle控制线条样式
                color: '#129FF6',
                width: 1,
              },
            },
            axisLabel: {
              color: '#129FF6',
              fontSize: 12,
            }, //刻度节点文字颜色
            //刻度样式
            splitLine: {
              show: true,
              length: 12,
              lineStyle: {
                width: 1,
                color: '#129FF6',
              },
            },
            pointer: {
              show: 0,
            },
            detail: {
              show: 0,
            },
          },
        ],
      }
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
