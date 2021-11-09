<template>
  <div class="pie-container" :id="sid" />
</template>
<script>
import HighCharts from "highcharts";
export default {
  name: "PieStyle2",
  props: {
    sid: {
      type: String,
      default: () => "pie2"
    },
    data: {
      type: [Array, Object],
      default: () => []
    },
    color: {
      type: Array,
      default: () => {
        return [
          "#2CF0FF",
          "#84FFC9",
          "#E5795C",
          "#D869FF",
          "#8768FF",
          "#1B7FF5"
        ];
      }
    },
    legendStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    tooltipStyle: {
      //tooltip样式
      type: Object,
      default: () => {
        return {};
      }
    },
    isShowTooltip: {
      //是否显示Tooltip
      type: Boolean,
      default: false
    },
    tooltipBackgroundColor: {
      //Tooltip背景色
      type: String,
      default: "rgba(49,101,129,0.45)"
    },
    tooltipBorderColor: {
      //Tooltip边框色
      type: String,
      default: "rgba(49,101,129,0.45)"
    },
    isShowLabel: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      chart: null,
      option: {}
    };
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  methods: {
    initChart() {
      let legendStyle = Object.assign({}, this.legendStyle);
      let tooltipStyle = Object.assign({}, this.tooltipStyle);
      const option = {
        credits: {
          enabled: false
        },
        title: {
          text: ""
        },
        colors: this.color,
        legend: {
          padding: 10,
          itemStyle: {
            color: "#fff",
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "PingFangSC"
          },
          itemHoverStyle: {
            color: "#fff"
          },
          symbolWidth: 10,
          symbolHeight: 7,
          symbolRadius: 0,
          symbolPadding: 6
        },
        chart: {
          backgroundColor: "transparent",
          type: "pie",
          animation: false,
          events: {
            load: function() {
              var each = HighCharts.each,
                points = this.series[0].points;
              each(points, function(p, i) {
                p.graphic.attr({
                  translateY: -p.shapeArgs.ran
                });
                p.graphic.side1.attr({
                  translateY: -p.shapeArgs.ran
                });
                p.graphic.side2.attr({
                  translateY: -p.shapeArgs.ran
                });
              });
            }
          },
          options3d: {
            enabled: true,
            alpha: 55,
            beta: 0
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            depth: 40,
            dataLabels: {
              enabled: this.isShowLabel,
              // format: "{point.h}%",
              formatter: function(params) {
                return `<span>${this.percentage.toFixed(1)}%</span>`;
              },
              style: {
                textOutline: "none", //去掉文字白边
                color: "#FFFFFF",
                fontSize: 14,
                fontFamily: "PingFangSC",
                fontWeight: 600
              }
            },
            showInLegend: true,
            borderColor: "#000000"
          }
        },
        tooltip: {
          enabled: this.isShowTooltip,
          style: {
            fontSize: 16,
            color: "#fff"
          },
          backgroundColor: this.tooltipBackgroundColor,
          borderColor: this.tooltipBorderColor,
          userHTML: false,
          formatter: function(params) {
            return `${
              this.key
            }:<span style="font-size: 20px;font-weight: 600">${this.percentage.toFixed(
              1
            )}%</span>`;
          }
        },
        series: [
          {
            type: "pie",
            name: "占比",
            data: this.data
          }
        ]
      };
      if (Object.keys(legendStyle).length != 0) {
        for (const key in legendStyle) {
          this.$set(option.legend.itemStyle, key, legendStyle[key]);
        }
      }
      if (Object.keys(tooltipStyle).length != 0) {
        for (const key in tooltipStyle) {
          this.$set(option.tooltip.style, key, tooltipStyle[key]);
        }
      }
      this.option = option;
      this.chart = HighCharts.chart(this.sid, option);
      // this.pieActive(option);
    },
    // 饼状图实现循环高亮
    pieActive(option) {
      const data = option.series[0].data;
      let setIndex = 0;
      this.timer = setInterval(() => {
        data[setIndex].sliced = false;
        data[setIndex].selected = false;
        setIndex = setIndex === data.length - 1 ? 0 : setIndex + 1;
        data[setIndex].sliced = true;
        data[setIndex].selected = true;
        this.echart.series[0].setData(data);
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.pie-container {
  width: 100%;
  height: 100%;
}
</style>
