<template>
    <div class='board-container'>
    <div class='com-chart'>
      <svg
        width='300px'
        height='210px'
        class='circle-line'
        viewBox='0 0 267 219'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlns:xlink='http://www.w3.org/1999/xlink'>
        <title>路径</title>
        <defs>
          <linearGradient
            x1='54.9676335%'
            y1='89.3607194%'
            x2='62.4135293%'
            y2='16.6241132%'
            id='linearGradient-1'>
            <stop stop-color='#398BFF' stop-opacity='0' offset='0%' />
            <stop stop-color='#25EDA0' offset='50.4955403%' />
            <stop stop-color='#39D6FF' offset='100%' />
          </linearGradient>
        </defs>
        <g
          id='确定的效果'
          stroke='none'
          stroke-width='1'
          fill='none'
          fill-rule='evenodd'>
          <g
            id='摄像头'
            transform='translate(-113.000000, -215.000000)'
            fill='url(#linearGradient-1)'
            fill-rule='nonzero'>
            <g id='编组-45' transform='translate(40.000000, 210.000000)'>
              <g id='今日事件数据' transform='translate(73.000000, 0.000000)'>
                <g id='编组-27' transform='translate(0.000000, 0.502242)'>
                  <path
                    d='M133.737778,5.09321173 C207.323506,5.09321173 266.975556,65.0303401 266.975556,138.965346 C266.975556,169.582391 256.714429,198.622894 238.17864,222.098745 L237.614419,222.808427 L236.833751,222.183481 C255.584626,198.760338 265.975556,169.662518 265.975556,138.965346 C265.975556,65.5815604 206.770151,6.09321173 133.737778,6.09321173 C60.7054048,6.09321173 1.5,65.5815604 1.5,138.965346 C1.5,168.920933 11.3936945,197.358133 29.31165,220.494177 L29.8570725,221.193643 L29.070522,221.811169 C10.6708788,198.375307 0.5,169.449352 0.5,138.965346 C0.5,65.0303401 60.15205,5.09321173 133.737778,5.09321173 Z'
                    id='路径' />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div class='ball' />
      <div class='gauge-img' ref='gauge' />
      <div class='todayEvents'>
        <p class='num'>{{percentage}}</p>
        <p class='text'>今日事件</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'BoardStyle3',
  props: {
    sid: {
      type: String,
      default: () => 'board3',
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
            radius: '96%',
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
            radius: ['0%', '11%'],
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
            radius: '90%',
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
            radius: '79%',
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
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes ball {
  from {
    offset-distance: 0%;
  }
  to {
    offset-distance: 100%;
  }
}
.com-chart {
  width: 300px;
  height: 210px;
  position: relative;
  display: flex;
  align-items: center;
  .ball {
    position: absolute;
    top: -2%;
    left: 3%;
    width: 30px;
    height: 7px;
    background: url("./images/line.png") no-repeat;
    background-size: 100% 100%;
    offset-path: path(
      "M133.737778,5.09321173 C207.323506,5.09321173 266.975556,65.0303401 266.975556,138.965346 C266.975556,169.582391 256.714429,198.622894 238.17864,222.098745 L237.614419,222.808427 L236.833751,222.183481 C255.584626,198.760338 265.975556,169.662518 265.975556,138.965346 C265.975556,65.5815604 206.770151,6.09321173 133.737778,6.09321173 C60.7054048,6.09321173 1.5,65.5815604 1.5,138.965346 C1.5,168.920933 11.3936945,197.358133 29.31165,220.494177 L29.8570725,221.193643 L29.070522,221.811169 C10.6708788,198.375307 0.5,169.449352 0.5,138.965346 C0.5,65.0303401 60.15205,5.09321173 133.737778,5.09321173 Z"
    );
    offset-distance: 0%;
    animation: ball 8s linear 0s infinite;
  }
  .circle-line {
    position: absolute;
    width: 300px;
    height: 210px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .gauge-img {
    width: 220px;
    height: 180px;
    background: url("./images/camera_gauge.png") no-repeat;
    background-size: 100% 100%;
    margin: 0 auto;
  }
  .todayEvents {
    position: absolute;
    left: 50%;
    bottom: 10%;
    transform: translateX(-50%);
    .num {
      font-size: 48px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #ffffff;
      line-height: 36px;
      letter-spacing: 2px;
      margin-bottom: 28px;
      text-align: center;
    }
    .text {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      color: #ffffff;
      line-height: 16px;
      letter-spacing: 1px;
    }
  }
}
</style>
