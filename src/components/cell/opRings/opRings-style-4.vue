<template>
  <div :id='sid' class='opRings-container' />
</template>
<script>
import layer from './images/Layer_4.png';
export default {
  name: 'OpRingsStyle4',
  props: {
    sid: {
      type: String,
      default: 'opRings4',
    },
    source: {
      type: [Array, Object],
      default: () => {
        return [
          { name: '高', value: 333, color: ['#FFF2C9', '#FF4038'] },
          { name: '中', value: 333, color: ['#69B5FF', '#38DDFF'] },
          { name: '低', value: 333, color: ['#69FFFE', '#10AA7F'] },
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
        layerStyle: {
          image: layer,
          width: 46,
          height: 105,
        },
        legendStyle: {},
        outlineColor: ['rgba(105,233,255,0.29)', 'rgba(56,207,255,0)'],
        insideColor: ['rgba(105,233,255,0.29)', 'rgba(56,207,255,0)']
      },
      allData: [],
    }
  },
  watch: {
    source(newVal) {
      if (this.chart === null) {
        this.initChart()
      }
      this.updateChart(this.source)
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
      const _chart = this.$echarts.init(el, 'chalk')
      window.addEventListener('resize', () => {
        _chart.resize();
      })
      return _chart
    },
    updateChart(source) {
      for (let i = 0; i < source.length; i++) {
        this.allData.push(
          {
            value: source[i].value,
            name: source[i].name,
            itemStyle: {
              normal: {
                borderWidth: 10,
                borderRadius: '50%',
                borderColor: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: source[i].color[0], // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: source[i].color[1], // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
                // shadowColor: color[i],
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: source[i].color[0], // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: source[i].color[1], // 100% 处的颜色
                    },
                  ],
                  global: false, // 缺省为 false
                },
              },
            },
          },
          {
            value: 2,
            name: '',
            itemStyle: {
              normal: {
                label: {
                  show: false,
                },
                labelLine: {
                  show: false,
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0,
              },
            },
          }
        );
      }
      const option = {
        backgroundColor: 'transparent',
        grid: {
          bottom: '10%',
        },
        graphic: {
          elements: [
            {
              type: 'image',
              z: 3,
              style: this.echartOptions.layerStyle,
              left: 'center',
              top: 'center',
              position: [100, 100],
            },
          ],
        },
        legend: {
          icon: 'path://M6,0 C9.3137085,0 12,2.6862915 12,6 C12,9.3137085 9.3137085,12 6,12 C2.6862915,12 0,9.3137085 0,6 C0,2.6862915 2.6862915,0 6,0 Z M6,3 C4.34314575,3 3,4.34314575 3,6 C3,7.65685425 4.34314575,9 6,9 C7.65685425,9 9,7.65685425 9,6 C9,4.34314575 7.65685425,3 6,3 Z',
          orient: 'horizontal',
          // x: 'left',
          data: source.map(sourceItem => sourceItem.name),
          bottom: '0',
          align: 'left',
          formatter: function (name) {
            return (
              `{title|${
                name
              }}\n{value|${
                source.find((item) => {
                  return item.name == name;
                }).value
              }}{value|%}`
            );
          },
          textStyle: {
            lineHeight: 30,
            rich: {
              title: {
                fontSize: 14,
                color: '#fff',
              },
              value: {
                fontSize: 22,
                fontWeight: 'bold',
                color: '#fff',
                lineHeight: 22,
              },
            },
            ...this.echartOptions.legendStyle
          },
          itemGap: 60,
        },
        toolbox: {
          show: false,
        },
        series: [
          {
            name: '',
            type: 'pie',
            clockWise: false,
            radius: [75, 78],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: false,
                  position: 'outside',
                  color: '#ddd',
                  formatter: function (params) {
                    let percent = 0;
                    let total = 0;
                    for (let i = 0; i < source.length; i++) {
                      total += source[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if (params.name !== '') {
                      return `${params.name}：${percent}%`;
                    } else {
                      return '';
                    }
                  },
                },
                labelLine: {
                  length: 30,
                  length2: 50,
                  show: true,
                  color: '#00ffff',
                },
              },
            },
            data: this.allData,
            roundCap: true,
          },
          // 边框的设置
          {
            name: '外边框',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['60%', '60%'],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 5,
                name: '',
                itemStyle: {
                  normal: {
                    borderWidth: 1,
                    borderColor: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: this.echartOptions.insideColor[0], // 0% 处的颜色
                        },
                        {
                          offset: 0.7,
                          color: this.echartOptions.insideColor[1], // 100% 处的颜色
                        },
                      ],
                      global: false, // 缺省为 false
                    },
                  },
                },
              },
            ],
          },
          {
            name: '外边框',
            type: 'pie',
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ['50%', '50%'],
            radius: ['65%', '65%'],
            label: {
              normal: {
                show: false,
              },
            },
            data: [
              {
                value: 5,
                name: '',
                itemStyle: {
                  normal: {
                    borderWidth: 1,
                    borderColor: {
                      type: 'linear',
                      x: 0,
                      y: 0,
                      x2: 0,
                      y2: 1,
                      colorStops: [
                        {
                          offset: 0,
                          color: this.echartOptions.outlineColor[0], // 0% 处的颜色
                        },
                        {
                          offset: 0.5,
                          color: this.echartOptions.outlineColor[1], // 100% 处的颜色
                        },
                      ],
                      global: false, // 缺省为 false
                    },
                  },
                },
              },
            ],
          },
        ],
      }
      this.option = this.$deepMerge(option, this.echartOptions)
      this.chart.setOption(this.option);
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
