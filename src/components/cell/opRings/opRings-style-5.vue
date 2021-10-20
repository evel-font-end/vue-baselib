<template>
  <div :id='sid' class='opRings-container' />
</template>
<script>
import layer from './images/circle_bg.png';
export default {
  name: 'OpRingsStyle5',
  props: {
    sid: {
      type: String,
      default: 'opRings5',
    },
    subText: {
      type: String,
      default: '端口占有率',
    },
    value: {
      type: [Array, Object],
      default: () => [
        { value: 100, name: '空间资源' },
        { value: 100, name: '管线资源' },
        { value: 100, name: '数据资源' },
        { value: 100, name: '接入资源' },
        { value: 100, name: '核心资源' },
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
      window.addEventListener('resize', () => {
        _chart.resize();
      })
      return _chart
    },
    updateChart(value) {
      const lineGradient = [
        {
          offset: 0,
          color: '#0dadee',
        },
        {
          offset: 1,
          color: '#05edfc',
        },
      ]
      this.option = {
        tooltip: {
          trigger: 'item',
          show: true, //显示提示框
          formatter: function (e) {
            const text = `${e.name}：${e.value}</br> 占比：${e.percent}%`
            return text
          },
        },
        graphic: {
          elements: [
            {
              type: 'image',
              z: 3,
              style: {
                image: layer,
                width: 102,
                height: 91,
              },
              left: 'center',
              top: '28%',
            },
          ],
        },
        legend: {
          bottom: '1%',
          left: 'center',
          // type: "scroll", //分页类型
          orient: 'horizontal', //横向
          icon: 'circle',
          itemWidth: 8, // 设置宽度
          itemHeight: 8, // 设置高度
          itemGap: 12, // 设置间距
          formatter: ['{a|{name}}'].join('\n'),
          textStyle: {
            fontSize: 12,
            color: '#4A8BBB',
            fontFamily: 'PingFangSC',
            fontWeight: 400,
            lineHeight: 12,
            rich: {
              //这里定义a的样式
              a: {
                width: 60,
                color: '#4a8bbb',
              },
            },
          },
          // 修改翻页的样式
          // pageIconColor: "#fff", // 翻页下一页的三角按钮颜色
          // pageIconInactiveColor: "#B9B9B9", // 翻页（即翻页到头时）
          // pageIconSize: 8, // 翻页按钮大小
          // pageTextStyle: {
          //   color: "#fff"
          // }
        },
        color: [
          '#5647C9',
          '#5D51FF',
          '#5B8DF9',
          '#46BDFF',
          '#1EDFFF',
          '#84FFC9',
          '#ABEA7C',
          '#DFFF84',
          '#FFDE84',
          '#FF9584',
          '#CB84FF',
        ],
        series: [
          {
            name: '饼图',
            type: 'pie',
            radius: ['50%', '65%'],
            center: ['50%', '40%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center',
            },
            emphasis: {
              label: {
                show: false,
                fontSize: '40',
                fontWeight: 'bold',
              },
            },
            labelLine: {
              show: true,
            },
            data: value,
          },
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
