<template>
  <div :id='sid' class='opRings-container' />
</template>
<script>
export default {
  name: 'OpRingsStyle1',
  props: {
    sid: {
      type: String,
      default: () => 'opRings1',
    },
    source: {
      type: [Array, Object],
      default() {
        return [
          { name: '自动核配数', value: 84 },
          { name: '互联网专线总数', value: 16 },
        ];
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
      chart: null,
      option: {},
      echartOptions: {
        liquidFillBgStyle: {
          borderWidth: 1,
          color: 'rgb(255,0,255,0.1)'
        },
        liquidFillLabel: {
          show: false
        }
      }
    }
  },
  watch: {
    source: {
      handler: function (newVal) {
        if (this.chart === null) {
          this.initChart()
        }
        this.updateChart(newVal)
      },
      deep: true
    }
  },
  created() {
  },
  mounted() {
    this.chart = this.initChart()
    this.echartOptions = Object.assign(this.echartOptions, this.options)
    this.updateChart(this.source)
  },
  methods: {
    initChart() {
      const el = document.getElementById(this.sid)
      const _chart = this.$echarts.init(el)
      window.addEventListener('resize', () => {
        _chart.resize();
      })
      this.chart = _chart;
      return _chart
    },
    async updateChart(source) {
      const colors = [[
        {
          offset: 0,
          color: '#2CECFF',
        },
        {
          offset: 1,
          color: '#12F0A0',
        },
      ], [
        {
          offset: 0,
          color: '#637EFF',
        },
        {
          offset: 1,
          color: '#5489FF',
        },
      ]];
      const data = source.map((sourceItem, sourceIndex) => {
        const LinearGradient = sourceItem.LinearGradient ? sourceItem.LinearGradient : colors[sourceIndex >= colors.length ? (sourceIndex % colors.length) : sourceIndex]
        return {
          "value": sourceItem.value,
          "name": sourceItem.name,
          "itemStyle": {
            "normal": {
              color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, LinearGradient),
            }
          }
        }
      });
      const option = {
        legend: {
          type: 'plain',
          bottom: '1%',
          left: 'center',
          orient: 'horizontal', //横向
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          itemGap: 12, // 设置间距
          formatter: ['{name}'].join('\n'),
          textStyle: {
            fontSize: 14,
            color: '#FFF',
            fontFamily: 'PingFangSC',
            fontWeight: 400,
            lineHeight: 15
          },
        },
        polar: {
          radius: ['100%', '80%'],
          center: ['50%', '50%'],
        },
        angleAxis: {
          max: 100,
          show: false,
          startAngle: 90,
        },
        radiusAxis: {
          type: 'category',
          // 隐藏刻度线
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
        series: [{
          type: 'liquidFill',
          radius: '80%',
          center: ['50%', '45%'],
          data: [0.3, 0.4, 0.3], // data个数代表波浪数
          backgroundStyle: this.echartOptions.liquidFillBgStyle,
          label: this.echartOptions.liquidFillLabel,
          outline: {
            show: false,
          }
        },
        {
          type: 'pie', // 饼图
          clockWise: false,
          "center": ["50%", "45%"],
          "radius": ["80%", "67%"],
          hoverAnimation: false,
          itemStyle: {
            borderRadius: 0,
            normal: {
              label: {
                position: 'outside',
                formatter: function (params) {
                  if (params.name !== '') {
                    return `{value|${params.value}%}`;
                  } else {
                    return '';
                  }
                },
                align: 'left',
                rich: {
                  value: {
                    fontSize: 14,
                    fontFamily: 'D-DIN',
                    fontWeight: 400,
                    color: '#fff'
                  }
                },
              },
              labelLine: {
                width: 4,
                show: true,
                length: 20,
                length2: 30,
                lineStyle: {
                  color: '#63AEE5'
                }
              },
            }
          },
          roundCap: 1,
          tooltip: {
            show: true
          },
          data: data
        }
        ]
      }
      this.option = this.$deepMerge(option, this.echartOptions)
      this.chart.setOption(this.option)
    },
  },
}
</script>
<style lang='scss' scoped>
.opRings-container{
  width: 100%;
  height: 100%;
}
</style>
