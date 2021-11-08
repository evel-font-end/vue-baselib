<template>
  <div class="pie">
    <div class="pie-container" :id="sid"></div>
    <div class="iconImg">
      <img :src="iconImg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: "PieStyle4",
  props: {
    sid: {
      type: String,
      default: () => "pie4"
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
    data: {
      type: Array,
      default: () => []
    },
    legendStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    iconImg: {
      type: String,
      default: ""
    },
    labelStyle: {
      type: Object,
      default: () => {
        return {};
      }
    }
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
      let legendStyle = Object.assign({}, this.legendStyle);
      let labelStyle = Object.assign({}, this.labelStyle);
      let option = {
        legend: {
          // orient: "horizontal",
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
        series: [
          {
            name: "Area Mode",
            type: "pie",
            radius: [20, 120],
            center: ["50%", "40%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 10
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: "#63AEE5" // 改变标示线的颜色
                }
              }
            },
            label: {
              show: true,
              formatter: "{d}%",
              textStyle: {
                color: "#FFFFFF",
                fontFamily: "PingFangSC",
                fontWeight: 600,
                fontSize: 14
              }
            },
            data: this.data
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
      this.chart.setOption(option);
      window.addEventListener("resize", () => this.chart.resize(), false);
    }
  }
};
</script>
<style lang="scss" scoped>
@keyframes turn {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.pie {
  position: relative;
  width: 100%;
  height: 100%;
  .pie-container {
    width: 100%;
    height: 100%;
  }
  .iconImg {
    position: absolute;
    top: 113px;
    left: 231px;
    width: 30px;
    height: 30px;
    animation: turn 6s linear infinite;
    img {
      max-width: 100%;
    }
  }
}
</style>
