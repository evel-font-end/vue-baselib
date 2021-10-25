<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div class="tooltipBg">
        <div class="tooltipInfo">
          <p class="provinceName" :style="province.style">
            {{ province.value }}
          </p>
          <p class="tipTitle" :style="text.style">{{ text.value }}</p>
          <p class="tip1" :style="num.style">{{ num.value }}</p>
        </div>
        <div class="tooltipPieChart">
          <div id="pieChart" class="pieChart"></div>
        </div>
      </div>
      <div class="lineChartContainer"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pieChart: null
    };
  },
  props: {
    num: {
      type: Object,
      default: {}
    },
    text: {
      type: Object,
      default: {}
    },
    province: {
      type: Object,
      default: {}
    },
    pieChartData: {
      type: Array,
      default: []
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initPieChart();
    });
  },
  methods: {
    initPieChart() {
      this.pieChart = this.$echarts.init(
        document.getElementById("pieChart"),
        "chalk"
      );
      let option = {
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          icon: "circle",
          left: '50%',
          top: "center",
          fontsize: "12",
          // data: ["正常", "异常"],
          itemWidth: 8,
          /* formatter: (params) => {
            params =
              params === "正常"
                ? params + '    ' + this.row.normalNum
                : params + '    ' + this.row.anomalNum
            return params
          }, */
          textStyle: {
            color: "#9BCDFF",
          },
        },
        color: ["#36ECD6", "#FF8161"],
        series: [
          {
            type: "pie",
            radius: ["50%", "80%"],
            center: ["30%", "50%"],
            avoidLabelOverlap: false,
            hoverAnimation: false,
            label: {
              show: false
            },
            emphasis: {
              label: {
                show: false,
                fontSize: "12"
              }
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              normal: {
                borderWidth: 6, //设置border的宽度有多大
                borderColor: "#083F60"
              }
            },
            data: this.pieChartData
          }
        ]
      };
      this.pieChart.setOption(option);
      window.addEventListener("resize", () => this.pieChart.resize(), false);
    }
  }
};
</script>

<style lang="less" scoped>
.indexData {
  width: 100%;
  height: 100%;
  .tooltipBox {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(7, 58, 95, 0.63),
      rgba(0, 30, 52, 0.4) 97%
    );
    border: 2px solid;
    border-image: linear-gradient(
        360deg,
        rgba(14, 180, 212, 0.19) 39%,
        rgba(45, 180, 255, 0.69) 100%
      )
      2 2;
    box-shadow: 7px 5px 7px 0px rgba(10, 42, 59, 0.5);
    .tooltipBg {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 120px;
      background: linear-gradient(
        180deg,
        rgba(0, 62, 112, 0) 3%,
        rgba(0, 89, 129, 0.55)
      );
      .tooltipInfo {
        width: 40%;
        height: 100%;
        padding: 20px;
        .provinceName {
          font-size: 18px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          text-align: left;
          color: #ffffff;
          line-height: 16px;
        }
        .tipTitle {
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #9bcdff;
          margin-top: 16px;
          letter-spacing: 1px;
        }
        .tip1 {
          font-size: 24px;
          font-family: DINAlternate, DINAlternate-Bold;
          font-weight: 700;
          text-align: left;
          color: #ffffff;
          line-height: 28px;
          letter-spacing: 1px;
        }
      }
      .tooltipPieChart {
        width: calc(100% - 40%);
        height: 100%;
        .pieChart {
          width: 100%;
          height: 100%;
        }
      }
    }
    .lineChartContainer {
      width: 100%;
      height: calc(100% - 120px);
    }
  }
}
</style>
