<template>
  <div :id='sid' class='radarMap-container' />
</template>
<script>
export default {
  name: 'RadarMapStyle2',
  props: {
    sid: {
      type: String,
      default: () => 'radarMap2',
    },
    source: {
      type: [Array, Object],
      default: () => [
        { text: '库水位', value: 100, max: 300 },
        { text: '内部位移', value: 100, max: 300 },
        { text: '内部位移', value: 100, max: 300 },
        { text: '浸润线', value: 100, max: 300 },
        { text: '干滩监测', value: 100, max: 300 },
      ],
    },
  },
  data() {
    return {
      chart: null,
      option: {},
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
    updateChart(source) {
      this.option = {
        title: {
          text: '',
        },
        tooltip: {},
        radar: {
          radius: '85%',
          center: ['50%', '55%'],
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#F1FFFF',
              fontSize: 16,
            },
          },
          indicator: source,
        },
        series: [
          {
            name: '当前男厕环境情况',
            type: 'radar',
            areaStyle: {
              normal: {
                color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                  {
                    offset: 1,
                    color: '#FFED58',
                  },
                  {
                    offset: 0,
                    color: '#FF5B2C',
                  },
                ]),
              },
            },
            lineStyle: {
              width: 3,
              color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 1,
                  color: '#FFED58',
                },
                {
                  offset: 0,
                  color: '#FF5B2C',
                },
              ]),
            },
            // areaStyle: {normal: {}},
            data: [
              {
                value: source.map(sourceItem => sourceItem.value),
              },
            ],
          },
        ],
      };
      this.chart.setOption(this.option)
    },
  },
}
</script>
<style lang='scss' scoped>
.radarMap-container{
  width: 100%;
  height: 100%;
}
</style>
