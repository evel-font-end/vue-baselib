<template>
  <div :id='sid' class='opRings-container' />
</template>
<script>
export default {
  name: 'OpRingsStyle3',
  props: {
    sid: {
      type: String,
      default: 'opRings3',
    },
    value: {
      type: Number,
      default: 30,
    },
  },
  data() {
    return {
      chart: null,
      option: {},
    }
  },
  watch: {
    value(newVal) {
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
    this.updateChart(this.value)
  },
  methods: {
    initChart() {
      const el = document.getElementById(this.sid)
      const _chart = this.$echarts.init(el)
      return _chart
    },
    updateChart(value) {
      const that = this;
      const echartData = [
        { name: '空闲', value: 333 },
        { name: '部分占用', value: 444 },
        { name: '置满', value: 222 },
        { name: '占用', value: 555 },
        { name: '预留', value: 111 },
        { name: '损坏', value: 666 },
      ];
      const color = [
        [
          ['#20FBAA', '#09EFF5'],
          ['#57B4FF', '#00B0FF'],
          ['#FB7320', '#FF726C'],
          ['#F0FF48', '#FFB151'],
          ['#EEFAFF', '#EEFAFF'],
          ['#5385FE', '#AD99FF'],
        ],
      ];
      const lineColor = ['#20EFFB', '#099EF5'];
      const pointColor = ['#45FFFA', '#45C3FF'];
      this.option = {
        backgroundColor: 'transparent',
        title: {
          text: 849083,
          textStyle: {
            color: '#ABDBFF',
            fontSize: 28,
          },
          subtext: '机架总数',
          subtextStyle: {
            color: '#fff',
            fontSize: 14,
          },
          itemGap: 15, // 主副标题距离
          left: 'center',
          top: '42%',
        },
        legend: {
          data: [
            '空闲',
            '部分占用',
            '',
            '置满',
            '占用',
            '',
            '预留',
            '损坏',
          ],
          itemHeight: 10,
          itemWidth: 10,
          icon: 'roundRect',
          orient: 'horizontal',
          bottom: 20,
          right: 20,
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
                  [1, '#09EFF5'],
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
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() * 0.5,
                  r:
                                        (Math.min(
                                          api.getWidth(),
                                          api.getHeight()
                                        ) /
                                            2) *
                                        0.7,
                  startAngle:
                                        ((0 + value) * Math.PI) / 180,
                  endAngle:
                                        ((90 + value) * Math.PI) / 180,
                },
                style: {
                  stroke: lineColor[0],
                  fill: 'transparent',
                  lineWidth: 1,
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
                  cx: api.getWidth() / 2,
                  cy: api.getHeight() * 0.5,
                  r:
                                        (Math.min(
                                          api.getWidth(),
                                          api.getHeight()
                                        ) /
                                            2) *
                                        0.7,
                  startAngle:
                                        ((180 + value) * Math.PI) / 180,
                  endAngle:
                                        ((270 + value) * Math.PI) / 180,
                },
                style: {
                  stroke: lineColor[0],
                  fill: 'transparent',
                  lineWidth: 1,
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
              const x0 = api.getWidth() / 2;
              const y0 = api.getHeight() * 0.5;
              const r = (Math.min(api.getWidth(), api.getHeight()) /
                                    2) *
                                0.7;
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
                  stroke: pointColor[0],
                  fill: pointColor[0],
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
              const x0 = api.getWidth() / 2;
              const y0 = api.getHeight() * 0.5;
              const r =
                                (Math.min(api.getWidth(), api.getHeight()) /
                                    2) *
                                0.7;
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
                  stroke: pointColor[0],
                  fill: pointColor[0],
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
              const x0 = api.getWidth() / 2;
              const y0 = api.getHeight() * 0.5;
              const r =
                                (Math.min(api.getWidth(), api.getHeight()) /
                                    2) *
                                0.7;
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
                  stroke: pointColor[0],
                  fill: pointColor[0],
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
              const x0 = api.getWidth() / 2;
              const y0 = api.getHeight() * 0.5;
              const r =
                                (Math.min(api.getWidth(), api.getHeight()) /
                                    2) *
                                0.7;
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
                  stroke: pointColor[0],
                  fill: pointColor[0],
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
            data: echartData,
            startAngle: -45,
            hoverAnimation: false,
            labelLine: {
              normal: {
                length: 20,
                length2: 20,
                lineStyle: {
                  color: '#DCDCDC',
                },
              },
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
                        color:
                                                    color[0][
                                                      params.dataIndex
                                                    ][0],
                      },
                      {
                        offset: 1,
                        color:
                                                    color[0][
                                                      params.dataIndex
                                                    ][1],
                      },
                    ]
                  );
                },
              },
            },
          },
        ],
      };
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
