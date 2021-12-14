<template>
  <div :id='sid' class='opRings-container' />
</template>
<script>
import BaseStationPie from "./components/BaseStationPie";
export default {
  name: 'OpRingsStyle6',
  components: {
    BaseStationPie,
  },
  props: {
    sid: {
      type: String,
      default: 'opRings6',
    },
    source: {
      type: [Array, Object],
      default: () => [
        {
          name: '自动核配数',
          value: 10,
          color: '#F58F24',
        },
        {
          name: '互联网专线总数',
          value: 20,
          color: '#3FF5F8',
        }
      ],
    },
    options: {
      type: Object,
      default() {
        return {
        }
      }
    },
    formatter: {
      type: Function,
      default: (params) => `${params.name} <br/> ${params.value}%`
    }
  },
  data() {
    return {
      chart: null,
      option: {},
      echartOptions: {
        text: '已开通',
        subtext: 'SA基站',
        subtextStyle: {
          color: '#fff',
          fontSize: 16,
          fontWeight: 600,
          fontFamily: 'PingFangSC, PingFangSC-Regular',
        },
        liquidFillBgStyle: {
          borderWidth: 1,
          color: '#103b59'
        },
        liquidFillLabel: {
          show: false
        },
        legendTextStyle: {
          fontSize: 14,
          color: '#FFF',
          fontFamily: 'PingFangSC',
          fontWeight: 400,
          lineHeight: 15
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
    updateChart(source) {
      const infoValueList = source.map(infoItem => infoItem.value)
      const offset = infoValueList[1] * 100 > 25 ? [-2, -30] : [-2, -10];
      const series = source.map(sourceItem => {
        return {
          name: sourceItem.name,
          type: 'bar',
          roundCap: true,
          z: 2,
          showBackground: true,
          backgroundStyle: {
            color: '#062334',
          },
          data: [{
            name: sourceItem.name,
            value: sourceItem.value
          }],
          coordinateSystem: 'polar',
          label: {
            show: true,
            color: '#5ac9fe',
            fontWeight: 600,
            fontSize: 14,
            position: 'right',
            distance: 20,
            offset: offset,
            formatter: (params) => {
              return `${(params.value * 100).toFixed(2)}%`
            },
          },
          color: sourceItem.color,
          itemStyle: {
            normal: {
              color: sourceItem.color,
            },
          },
          labelLine: {
            show: true,
            lineStyle: {
              color: '#5ac9fe',
            },
          },
          barCategoryGap: '20',
          barWidth: Math.ceil(40 / source.length),
          barMaxWidth: 16,
          barMinWidth: 8,
        }
      })
      const option = {
        title: {
          text: this.echartOptions.text,
          subtext: this.echartOptions.subtext,
          subtextStyle: this.echartOptions.subtextStyle,
          left: '50%',
          top: '40%',
          // x: '42.5%',
          // y: '34%',
          itemGap: 5,
          textAlign: 'center',
          textStyle: {
            fontSize: 16,
            color: '#fff',
            textAlign: 'center',
            fontWeight: 600,
            fontFamily: 'PingFangSC, PingFangSC-Regular',
          },
        },
        polar: {
          radius: ['80%', '50%'],
          center: ['50%', '50%'],
        },
        legend: {
          type: 'plain',
          bottom: '1%',
          left: 'center',
          orient: 'horizontal', //横向
          itemWidth: 10, // 设置宽度
          itemHeight: 10, // 设置高度
          itemGap: 12, // 设置间距
          formatter: ['{name}'].join('\n'),
          textStyle: this.echartOptions.legendTextStyle,
        },
        tooltip: {
          show: true,
          formatter: (params) => this.formatter(params)
        },
        angleAxis: {
          max: Math.max(...infoValueList),
          show: false,
          // startAngle: 90,
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
            type: 'liquidFill',
            data: [0.3],
            color: ['#1179a6'],
            coordinateSystem: 'polar',
            backgroundStyle: this.echartOptions.liquidFillBgStyle,
            label: this.echartOptions.liquidFillLabel,
            outline: {
              show: true,
              itemStyle: {
                borderWidth: 0,
              },
              borderDistance: 0,
            },
          },
          ...series,
          {
            name: '',
            z: -1,
            type: 'pie',
            cursor: 'default',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: '80%',
            center: ['50%', '50%'],
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [{
              value: 100,
              itemStyle: {
                color: 'transparent',
              },
            }],
          },
        ],
      }
      this.option = this.$deepMerge(option, this.echartOptions)
      this.chart.setOption(this.option)
    }
  },
}
</script>
<style lang='scss' scoped>
.opRings-container{
  width: 100%;
  height: 100%;
}
</style>
