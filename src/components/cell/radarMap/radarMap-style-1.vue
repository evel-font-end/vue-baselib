<template>
    <div :id='sid' class='radarMap-container' />
</template>
<script>
export default {
  name: 'RadarMapStyle1',
  props: {
    sid: {
      type: String,
      default: () => 'radarMap1',
    },
    source: {
      type: [Array, Object],
      default: () => [{
        name: '安全系数',
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
          color: '#fff',
          fontSize: 16,
          fontWeight: 400,
          fontFamily: 'PingFangSC-Regular,PingFang SC',
          fontStyle: 'normal',
          formatter: function (name) {
            return name;
          },
        },
        splitArea: {
          // 坐标轴在 grid 区域中的分隔区域，默认不显示。
          show: true,
          areaStyle: {
            // 分隔区域的样式设置。
            color: 'rgba(255,0,0,0)', // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
          },
        },
        axisLine: {
          // 指向外圈文本的分隔线样式
          lineStyle: {
            color: 'rgba(255,255,255,0.18)',
          },
        },
        splitLine: {
          lineStyle: {
            type: 'solid',
            color: 'rgba(153, 209, 246, 0.2)', // 分隔线颜色
            width: 1, // 分隔线线宽
          },
        }
      }
    }
  },
  watch: {
    source(newVal) {
      if (this.chart === null) {
        this.chart = this.initChart()
      }
      this.updateChart(newVal)
    },
  },
  created() {
  },
  mounted() {
    this.$nextTick(async () => {
      this.chart = this.initChart()
      this.echartOptions = Object.assign(this.echartOptions, this.options)
      this.updateChart(this.source)
    });
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
      const series = source.map(sourceItem => {
        return {
          name: sourceItem.name,
          type: 'radar',
          data: [
            {
              value: sourceItem.value.map(sourceSubItem => sourceSubItem.value),
              symbol: 'none',
              areaStyle: sourceItem.areaStyle ? sourceItem.areaStyle : {
                normal: {
                  color: 'rgba(58,187,247,0.43)',
                },
              },
              itemStyle: sourceItem.itemStyle ? sourceItem.itemStyle : {
                color: 'rgba(255,255,255,1)',
              },
              lineStyle: sourceItem.lineStyle ? sourceItem.lineStyle : {
                width: 3,
                color: 'rgba(24,217,255,1)',
              },
            },
          ]
        }
      })
      const indicator = [];
      source.flat().map(sourceItem => {
        sourceItem.value.map(sourceSub => {
          indicator.push(sourceSub)
        });
      });
      this.option = {
        backgroundColor: 'transparent',
        tooltip: {
          show: true, // 弹层数据去掉
        },
        radar: {
          // shape: 'circle',
          radius: '85%',
          center: ['50%', '55%'],
          name: this.echartOptions.name,
          indicator: indicator,
          splitArea: this.echartOptions.splitArea,
          axisLine: this.echartOptions.axisLine,
          splitLine: this.echartOptions.splitLine,
        },
        series: series,
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
