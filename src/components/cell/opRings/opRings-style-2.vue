<template>
  <div :id='sid' class='opRings-container' />
</template>
<script>
export default {
  name: 'OpRingsStyle2',
  props: {
    sid: {
      type: String,
      default: 'opRings2',
    },
    source: {
      type: Number,
      default: 30,
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
        textStyle: {
          fontSize: 42,
          fontWeight: '700',
          color: '#fff',
          textAlign: 'center',
        },
        subtext: '端口占有率',
        subtextStyle: {
          color: '#fff',
          fontSize: 18,
          fontFamily: 'PingFangSC, PingFangSC-Regular',
        },
        lineGradient: [
          {
            offset: 0,
            color: '#05F4FE',
          },
          {
            offset: 1,
            color: '#0DAEEE',
          },
        ]
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
  methods: {
    initChart() {
      const el = document.getElementById(this.sid)
      const _chart = this.$echarts.init(el)
      window.addEventListener('resize', () => {
        _chart.resize();
      })
      return _chart
    },
    updateChart(value) {
      this.option = {
        title: [{
          left: '50%',
          top: '38%',
          text: `${value}%`,
          itemGap: 4,
          textAlign: 'center',
          textStyle: this.echartOptions.textStyle,
        }, {
          left: '50%',
          top: '56%',
          text: this.echartOptions.subtext,
          textAlign: 'center',
          textStyle: this.echartOptions.subtextStyle,
        }],
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
        series: [
          {
            name: '',
            type: 'bar',
            roundCap: true,
            barWidth: 20,
            showBackground: true,
            backgroundStyle: {
              color: '#003A4E',
            },
            data: [value],
            coordinateSystem: 'polar',
            itemStyle: {
              normal: {
                color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, this.echartOptions.lineGradient),
              },
            },
          },
          // label: {
          //   show: true,
          //   formatter: (params) => {
          //     console.log(params)
          //   }
          // },
        ],
      }
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
