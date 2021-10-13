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
        { text: '库水位', color: '#3ABBF7', max: 100 },
        { text: '内部位移', color: '#3ABBF7', max: 100 },
        { text: '内部位移', color: '#3ABBF7', max: 100 },
        { text: '浸润线', color: '#3ABBF7', max: 100 },
        { text: '干滩监测', color: '#3ABBF7', max: 100 },
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
      return _chart
    },
    updateChart(source) {
      this.option = {
        title: {
          text: '',
        },
        tooltip: {},
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#F1FFFF',
              fontSize: 16,
            },
          },
          indicator: [
            { name: '硫化氢' },
            { name: '氨气' },
            { name: '温度' },
            { name: '湿度' },
          ],
        },
        series: [
          {
            name: '当前男厕环境情况',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
              {
                value: [10, 10, 20, 30, 40],
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
