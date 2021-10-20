<template>
  <div class='base-station-pie' ref='baseStationPie' />
</template>

<script>
export default {
  name: 'BaseStationPie',
  props: {
    text: {
      type: String,
      default: '已开通',
    },
    subText: {
      type: String,
      default: 'NAS基站',
    },
    lineGradient: {
      type: Array,
      default: () => [
        {
          offset: 0,
          color: '#ffb057',
        },
        {
          offset: 1,
          color: '#ff8056',
        },
      ],
    },
    info: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      barChart: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initBar()
    })
  },
  methods: {
    initBar() {
      const chartDom = this.$refs.baseStationPie
      this.barChart = this.$echarts.init(chartDom);
      window.addEventListener('resize', () => {
        this.barChart.resize();
      });
      const infoValueList = this.info.map(infoItem => infoItem.value)
      const offset = infoValueList[1] * 100 > 25 ? [-2, -30] : [-2, -10]
      const options = {
        title: {
          text: this.text,
          subtext: this.subText,
          subtextStyle: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 600,
            fontFamily: 'PingFangSC, PingFangSC-Regular',
          },
          left: '50%',
          top: '35%',
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
          radius: ['50%', '70%'],
          center: ['50%', '40%'],
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
          textStyle: {
            fontSize: 14,
            color: '#FFF',
            fontFamily: 'PingFangSC',
            fontWeight: 400,
            lineHeight: 15
          },
        },
        angleAxis: {
          max: 1,
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
            type: 'bar',
            name: this.info[0].name,
            startAngle: 100,
            distance: 30,
            data: [{
              name: this.info[0].name,
              value: this.info[0].value,
              itemStyle: this.info[0].itemStyle,
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 6.5,
            barGap: '-46%',
            z: 20,
            showBackground: true,
            label: {
              show: true,
              color: '#5ac9fe',
              fontWeight: 600,
              fontSize: 14,
              position: 'right',
              distance: 20,
              offset: [0, -8],
              formatter: (params) => {
                return `${(params.value * 100).toFixed(2)}%`
              },
            },
            color: this.info[0].itemStyle.color,
            labelLine: {
              show: true,
              lineStyle: {
                color: '#5ac9fe',
              },
            },
          },
          {
            type: 'bar',
            data: [{
              value: 100,
              itemStyle: {
                color: 'transparent',
              },
            }],
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 8,
            barGap: '10%',
            z: 1,
            backgroundStyle: {
              color: 'transparent',
            },
          },
          {
            type: 'bar',
            startAngle: 1,
            distance: 15,
            data: [{
              name: this.info[1].name,
              value: this.info[1].value,
              itemStyle: this.info[1].itemStyle,
            }],
            name: this.info[1].name,
            coordinateSystem: 'polar',
            roundCap: true,
            barWidth: 15,
            barGap: '-10%',
            z: 20,
            showBackground: true,
            color: this.info[1].itemStyle.color,
            label: {
              show: true,
              color: '#5ac9fe',
              fontWeight: 600,
              fontSize: 14,
              position: 'right',
              distance: 10,
              offset: offset,
              formatter: (params) => {
                return `${(params.value * 100).toFixed(2)}%`
              },
            },
            labelLine: {
              show: true,
              lineStyle: {
                color: '#5ac9fe',
              },
            },


          },
          {
            name: '',
            z: -1,
            type: 'pie',
            cursor: 'default',
            hoverAnimation: false,
            legendHoverLink: false,
            radius: '55%',
            center: ['50%', '40%'],
            labelLine: {
              normal: {
                show: false,
              },
            },
            data: [{
              value: 100,
              itemStyle: {
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: 'rgba(0,172,227,0)' },
                  { offset: 1, color: 'rgba(0,171,188,0.49)' },
                ]),
              },
            }],
          },
        ],
      }
      options && this.barChart.setOption(options);
    },
  },
}
</script>

<style scoped lang="less">
  .base-station-pie {
    width: 100%;
    height: 100%;
  }
</style>
