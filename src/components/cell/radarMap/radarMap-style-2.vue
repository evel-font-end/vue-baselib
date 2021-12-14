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
      default: () => [{
        name: '当前男厕环境情况',
        value: [
          { name: '库水位', value: 100, max: 300 },
          { name: '内部位移', value: 100, max: 300 },
          { name: '内部位移', value: 100, max: 300 },
          { name: '浸润线', value: 100, max: 300 },
          { name: '干滩监测', value: 100, max: 300 },
        ]
      }],
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
        name: {
          textStyle: {
            color: '#F1FFFF',
            fontSize: 16,
          },
        }
      }
    }
  },
  watch: {
    source: {
      handler: function (newVal) {
        if (this.chart === null) {
          this.chart = this.initChart()
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
      const series = source.map(sourceItem => {
        return {
          name: sourceItem.name,
          type: 'radar',
          areaStyle: sourceItem.areaStyle ? sourceItem.areaStyle : {
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
          lineStyle: sourceItem.lineStyle ? sourceItem.lineStyle : {
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
          data: [
            {
              value: sourceItem.value.map(sourceSubItem => sourceSubItem.value),
            },
          ],
        }
      })
      const indicator = [];
      source.flat().map(sourceItem => {
        sourceItem.value.map(sourceSub => {
          indicator.push(sourceSub)
        });
      });
      const option = {
        title: {
          text: '',
        },
        tooltip: {},
        radar: {
          radius: '85%',
          center: ['50%', '55%'],
          // shape: 'circle',
          name: this.echartOptions.name,
          indicator: indicator,
        },
        series: series,
      };
      this.option = this.$deepMerge(option, this.echartOptions)
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
