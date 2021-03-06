<template>
  <div :id='sid' class='opRings-container' />
</template>
<script>
import { sum } from '@/assets/lib/utils';
export default {
  name: 'OpRingsStyle3',
  props: {
    sid: {
      type: String,
      default: 'opRings3',
    },
    source: {
      type: [Array, Object],
      default: () => {
        return [
          { name: '空闲', value: 333, color: ['#20FBAA', '#09EFF5'] },
          { name: '部分占用', value: 444, color: ['#57B4FF', '#00B0FF'] },
          { name: '置满', value: 222, color: ['#FB7320', '#FF726C'] },
          { name: '占用', value: 555, color: ['#F0FF48', '#FFB151'] },
          { name: '预留', value: 111, color: ['#EEFAFF', '#EEFAFF'] },
          { name: '损坏', value: 666, color: ['#5385FE', '#AD99FF'] },
        ]
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
        text: null,
        textStyle: {
          color: '#ABDBFF',
          fontSize: 28,
        },
        subtext: '机架总数',
        subtextStyle: {
          color: '#fff',
          fontSize: 14,
        },
        splitColor: '#09EFF5',
        line: {
          cx: (api) => api.getWidth() / 2,
          cy: (api) => api.getHeight() * 0.5,
          r: (api) => (Math.min(api.getWidth(), api.getHeight()) / 2) * 0.7,
        },
        lineColor: ['#FF8161', '#36ECD6'],
        lineWidth: 1,
        pointColor: ['#FF8161', '#36ECD6'],
        label: {},
        labelLine: {},
        labelLineColor: '#DCDCDC',
        title: {},
        gauge: {},
        tooltip: {},
        pie: {
          radius: ['50%', '60%'],
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
    this.chart = this.initChart();
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
    updateChart(sourceValue) {
      const that = this;
      const value = 30;
      const option = {
        backgroundColor: 'transparent',
        title: {
          text: this.echartOptions.text ? this.echartOptions.text : sum(sourceValue.map(sourceItem => sourceItem.value)),
          textStyle: this.echartOptions.textStyle,
          subtext: this.echartOptions.subtext,
          subtextStyle: this.echartOptions.subtextStyle,
          itemGap: 15, // 主副标题距离
          left: 'center',
          top: '42%',
          ...this.echartOptions.title
        },
        tooltip: {
          show: true,
          ...this.echartOptions.tooltip
        },
        legend: {
          data: sourceValue.map(sourceItem => sourceItem.name),
          itemHeight: 10,
          itemWidth: 10,
          icon: 'roundRect',
          orient: 'horizontal',
          bottom: '1%',
          right: 'auto',
          textStyle: {
            color: '#fff',
          },
        },
        series: [
          // 刻度
          {
            name: '',
            type: 'gauge',
            splitNumber: 100, //刻度数量
            min: 0,
            max: 140,
            radius: '42%', //图表尺寸
            center: ['50%', '50%'],
            startAngle: 90,
            endAngle: -269.9999,
            axisLine: {
              show: false,
              lineStyle: {
                width: 0,
                shadowBlur: 0,
                color: [
                  [0, '#20FBAA'],
                  [1, this.echartOptions.splitColor],
                ],
              },
            },
            axisTick: {
              show: false,
              lineStyle: {
                color: 'auto',
                width: 3,
              },
              length: 20,
              splitNumber: 5,
            },
            splitLine: {
              show: true,
              length: 12,
              lineStyle: {
                color: 'auto',
              },
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              //仪表盘指针
              show: 0,
            },
            detail: {
              show: 0,
            },
            ...this.echartOptions.gauge
          },
          // 做动画的线
          {
            name: '',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              return {
                type: 'arc',
                shape: {
                  cx: that.echartOptions.line.cx(api),
                  cy: that.echartOptions.line.cy(api),
                  r: that.echartOptions.line.r(api),
                  startAngle: ((0 + value) * Math.PI) / 180,
                  endAngle: ((90 + value) * Math.PI) / 180,
                },
                style: {
                  stroke: that.echartOptions.lineColor[0],
                  fill: 'transparent',
                  lineWidth: that.echartOptions.lineWidth,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: '',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              return {
                type: 'arc',
                shape: {
                  cx: that.echartOptions.line.cx(api),
                  cy: that.echartOptions.line.cy(api),
                  r: that.echartOptions.line.r(api),
                  startAngle: ((180 + value) * Math.PI) / 180,
                  endAngle: ((270 + value) * Math.PI) / 180,
                },
                style: {
                  stroke: that.echartOptions.lineColor[1],
                  fill: 'transparent',
                  lineWidth: that.echartOptions.lineWidth,
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: '',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              const x0 = that.echartOptions.line.cx(api);
              const y0 = that.echartOptions.line.cy(api);
              const r = that.echartOptions.line.r(api);
              const point = that.getCirlPoint(
                x0,
                y0,
                r,
                0 + value
              );
              return {
                type: 'circle',
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 2,
                },
                style: {
                  stroke: that.echartOptions.pointColor[0],
                  fill: that.echartOptions.pointColor[0],
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: '',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              const x0 = that.echartOptions.line.cx(api);
              const y0 = that.echartOptions.line.cy(api);
              const r = that.echartOptions.line.r(api);
              const point = that.getCirlPoint(
                x0,
                y0,
                r,
                180 + value
              );
              return {
                type: 'circle',
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 2,
                },
                style: {
                  stroke: that.echartOptions.pointColor[1],
                  fill: that.echartOptions.pointColor[1],
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: '',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              const x0 = that.echartOptions.line.cx(api);
              const y0 = that.echartOptions.line.cy(api);
              const r = that.echartOptions.line.r(api);
              const point = that.getCirlPoint(
                x0,
                y0,
                r,
                90 + value
              );
              return {
                type: 'circle',
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 2,
                },
                style: {
                  stroke: that.echartOptions.pointColor[0],
                  fill: that.echartOptions.pointColor[0],
                },
                silent: true,
              };
            },
            data: [0],
          },
          {
            name: '',
            type: 'custom',
            coordinateSystem: 'none',
            renderItem: function (params, api) {
              const x0 = that.echartOptions.line.cx(api);
              const y0 = that.echartOptions.line.cy(api);
              const r = that.echartOptions.line.r(api);
              const point = that.getCirlPoint(
                x0,
                y0,
                r,
                270 + value
              );
              return {
                type: 'circle',
                shape: {
                  cx: point.x,
                  cy: point.y,
                  r: 2,
                },
                style: {
                  stroke: that.echartOptions.pointColor[1],
                  fill: that.echartOptions.pointColor[1],
                },
                silent: true,
              };
            },
            data: [0],
          },
          // 饼图内容
          {
            name: '饼图内容区',
            type: 'pie',
            clockWise: false,
            center: ['50%', '50%'],
            radius: ['50%', '60%'],
            data: sourceValue,
            startAngle: -45,
            hoverAnimation: false,
            labelLine: {
              normal: {
                length: 20,
                length2: 20,
                lineStyle: {
                  color: this.echartOptions.labelLineColor,
                },
              },
              ...this.echartOptions.labelLine
            },
            label: {
              show: true,
              formatter: '{c}',
              color: '#fff',
              fontSize: 12,
              fontFamily: 'sans-serif',
              padding: [6, 12],
              backgroundColor: '#4D9EFF',
              borderRadius: 4,
              borderWidth: 1,
              borderColor: '#36B4FF',
              ...this.echartOptions.label
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
              normal: {
                color: function (params) {
                  return new that.$echarts.graphic.LinearGradient(
                    1,
                    0,
                    0,
                    0,
                    [
                      {
                        //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        offset: 0,
                        color: params.data.color[0],
                      },
                      {
                        offset: 1,
                        color: params.data.color[1],
                      },
                    ]
                  );
                },
              },
            },
            ...this.echartOptions.pie
          },
        ],
      };
      this.option = this.$deepMerge(option, this.echartOptions)
      this.chart.setOption(this.option)
    },
    getCirlPoint(x0, y0, r, angle) {
      const x1 = x0 + r * Math.cos((angle * Math.PI) / 180);
      const y1 = y0 + r * Math.sin((angle * Math.PI) / 180);
      return {
        x: x1,
        y: y1,
      };
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
