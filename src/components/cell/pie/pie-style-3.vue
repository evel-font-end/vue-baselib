<template>
  <div class="pie-container" :id="sid" />
</template>
<script>
function getMaxIndex(data, value) {
  return data.findIndex(
    item =>
      item[value] ===
      Math.max.apply(
        Math,
        data.map(item => {
          return item[value];
        })
      )
  );
}
export default {
  name: "PieStyle3",
  props: {
    sid: {
      type: String,
      default: () => "pie3"
    },
    color: {
      type: [Array, Object],
      default: () => [
        "#2CF0FF",
        "#84FFC9",
        "#E5795C",
        "#D869FF",
        "#8768FF",
        "#1B7FF5"
      ]
    },
    isShowLabelLine: {
      type: Boolean,
      default: true
    },
    legendStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    labelStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    data: {
      type: Array,
      default: () => []
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
      option: {}
    };
  },
  watch: {},
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    });
  },
  methods: {
    initChart() {
      let that = this;
      this.chart = this.$echarts.init(
        document.getElementById(this.sid),
        "chalk"
      );
      // let { lineTitle1, lineTitle2, xdata, ydata1, ydata2 } = this.chartData;
      const data = this.data;
      const maxIndex = getMaxIndex(data, "value");
      let legendStyle = Object.assign({}, this.legendStyle);
      let labelStyle = Object.assign({}, this.labelStyle);
      let option = {
        backgroundColor: "transparent",
        tooltip: {
          show: true,
          trigger: "axis",
          formatter: "{a} <br/>{b} :{d}%" // formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "horizontal",
          icon: "rect",
          itemWidth: 10,
          itemHeight: 7,
          textStyle: {
            color: "#FFFFFF",
            fontSize: 14,
            fontFamily: "PingFangSC",
            fontWeight: 400
          },
          bottom: "6%",
          left: "center"
        },
        color: this.color,
        grid: {
          bottom: "8%",
          right: 0,
          left: 0
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "56%",
            center: ["50%", "50%"],
            // roseType: "radius",
            itemStyle: {
              normal: {
                shadowColor: "rgba(166,185,200,0.42)",
                shadowBlur: 8
              }
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "#63AEE5" // 改变标示线的颜色
                }
              }
            },
            label: {
              show: this.isShowLabelLine,
              formatter: "{d}%",
              textStyle: {
                color: "#FFFFFF",
                fontFamily: "PingFangSC",
                fontWeight: 600,
                fontSize: 14
              }
            },
            data: data
          }
        ]
      };
      if (Object.keys(legendStyle).length != 0) {
        for (const key in legendStyle) {
          this.$set(option.legend.textStyle, key, legendStyle[key]);
        }
      }
      if (Object.keys(labelStyle).length != 0) {
        for (const key in labelStyle) {
          this.$set(option.series[0].label.textStyle, key, labelStyle[key]);
        }
      }
      this.option = this.$deepMerge(option, this.options)
      this.chart.setOption(this.option);
      window.addEventListener("resize", () => this.chart.resize(), false);
      this.chart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: maxIndex
      });
      let index = maxIndex;
      this.chart.on("mouseover", e => {
        this.chart.dispatchAction({
          type: "downplay",
          seriesIndex: 0,
          dataIndex: index
        });
        if (e.dataIndex != index) {
          this.chart.dispatchAction({
            type: "downplay",
            seriesIndex: 0,
            dataIndex: index
          });
        }
        if (e.dataIndex == index) {
          this.chart.dispatchAction({
            type: "highlight",
            seriesIndex: 0,
            dataIndex: e.dataIndex
          });
        }
      });
      this.chart.on("mouseout", e => {
        index = e.dataIndex;
        this.chart.dispatchAction({
          type: "highlight",
          seriesIndex: 0,
          dataIndex: e.dataIndex
        });
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.pie-container {
  width: 100%;
  height: 100%;
  position: relative;
  .chart-container {
    width: 100%;
    height: 100%;
  }
  .label-container {
    width: 100%;
    height: 30px;
    bottom: 15%;
    position: absolute;
    display: flex;
    & > span {
      flex: 1;
      text-align: center;
      font-size: 14px;
      color: #00deff;
    }
  }
}
</style>
