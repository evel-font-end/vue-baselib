<template>
  <div class="pie-container" :id="sid" />
</template>
<script>
import HighCharts from "highcharts";
export default {
  name: "PieStyle1",
  props: {
    sid: {
      type: String,
      default: () => "pie1"
    },
    source: {
      type: [Array, Object],
      default: () => []
    },
    radiusDic: {
      type: Object,
      default: () => {
        return {
          outside: ["25%", "70%"],
          center: ["25%", "35%"],
          inner: ["0%", "26%"]
        };
      }
    },
    colorDic: {
      type: Object,
      default: () => {
        return {
          fillColor: [
            "#a51650",
            "#a8208b",
            "#772cbc",
            "#2650b7",
            "#1574b3",
            "#158f85",
            "#b33355"
          ]
        };
      }
    }
  },
  data() {
    return {
      chart: null,
      option: {}
    };
  },
  watch: {
    source(newVal) {
      if (this.chart === null) {
        this.initChart();
      }
      this.updateChart(newVal);
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.initChart();
    })
  },
  methods: {
    initChart() {
      const option = {
        credits: {
          enabled: false
        },
        title: {
          text: ""
        },
        colors: [
          "rgba(255,142,107,0.9)",
          "rgba(251,178,58,0.9)",
          "rgba(59,125,240,0.9)",
          "rgba(170,250,84,0.9)",
          "rgba(187,134,255,0.9)",
          "rgba(83,247,255,0.9)"
        ],
        legend: {
          padding: 10,
          itemStyle: {
            color: "#fff",
            fontSize: 14,
            fontWeight: 400
          },
          itemHoverStyle: {
            color: "#fff"
          },
          symbolWidth: 10,
          symbolHeight: 10,
          symbolRadius: 0,
          symbolPadding: 7
          // itemMarginTop: 5
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
            depth: 45,
            dataLabels: {
              enabled: true,
              format: "{point.y}%"
            },
            showInLegend: true,
            borderColor: "#000000"
          }
        },
        tooltip: {
          style: {
            fontSize: 16,
            color: "#fff"
          },
          backgroundColor: "rgba(49,101,129,0.45)",
          borderColor: "rgba(49,101,129,0.45)",
          userHTML: true,
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

            data: this.source
          }
        ]
      };
      this.chart = HighCharts.chart(this.sid, option);
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
