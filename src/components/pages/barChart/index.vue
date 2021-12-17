<template>
  <div class="content">
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      :title="'柱状图1'"
      @showOptionHandler='showOption("barChart1")'>
      <barChart-1 :chartId="'barChart1'" ref="barChart1" :chartData="barData1" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow2"
      :title="'柱状图2'"
      @showOptionHandler='showOption("barChart2")'>
      <barChart-2 :chartId="'barChart2'" ref="barChart2" :chartData="barData1" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      :title="'柱状图3'"
      @showOptionHandler='showOption("barChart3")'>
      <barChart-3 :chartId="'barChart3'" ref="barChart3" :chartData="barData22" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      :title="'柱状图4'"
      @showOptionHandler='showOption("barChart4")'>
      <barChart-4 :chartId="'barChart4'" ref="barChart4" :chartData="barData2" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      :title="'柱状图5'"
      @showOptionHandler='showOption("barChart5")'>
      <barChart-5 :chartId="'barChart5'" ref="barChart5" :chartData="barData2" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      :title="'柱状图6'"
      @showOptionHandler='showOption("barChart6")'>
      <barChart-6 :chartId="'barChart6'" ref="barChart6" :chartData="mixtureData2" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      :title="'堆叠柱状图'"
      @showOptionHandler='showOption("barChart7")'>
      <barChart-7 :chartId="'barChart7'" ref="barChart7" :chartData="barData3" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      :title="'柱状图8'"
      @showOptionHandler='showOption("barChart8")'>
      <barChart-8 :chartId="'barChart8'" ref="barChart8" :chartData="barData1" />
    </box-container>
  </div>
</template>
<script>
import boxContainer from "../common/box-container";
import barChart1 from "~components/cell/barChart/barChart-1.vue";
import barChart2 from "~components/cell/barChart/barChart-2.vue";
import barChart3 from "~components/cell/barChart/barChart-3.vue";
import barChart4 from "~components/cell/barChart/barChart-4.vue";
import barChart5 from "~components/cell/barChart/barChart-5.vue";
import barChart6 from "~components/cell/barChart/barChart-6.vue";
import barChart7 from "~components/cell/barChart/barChart-7.vue";
import barChart8 from "~components/cell/barChart/barChart-8.vue";

export default {
  name: 'BarChart',
  components: {
    boxContainer,
    barChart1,
    barChart2,
    barChart3,
    barChart4,
    barChart5,
    barChart6,
    barChart7,
    barChart8
  },
  data() {
    return {
      // 数据结构
      barData1: {
        barTitle: "",
        xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
        ydata: [1, 2, 3, 4, 5, 6, 7, 8]
      },
      barData22: {
        barTitle: ["指标一", "指标二"],
        xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
        ydata: [
          [124, 214, 253, 344, 125, 316, 417, 538],
          [141, 142, 453, 544, 575, 136, 247, 548]
        ]
      },
      barData2: {
        barTitle1: "指标一",
        barTitle2: "指标二",
        xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
        ydata1: [124, 214, 253, 344, 125, 316, 417, 538],
        ydata2: [141, 142, 453, 544, 575, 136, 247, 548]
      },
      mixtureData2: {
        barTitle1: "指标一",
        barTitle2: "指标二",
        xdata: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        ydata1: [134, 235, 312, 412, 512, 136, 457, 128],
        ydata2: [421, 214, 343, 422, 535, 236, 527, 118]
      },
      barData3: {
        xdata: [],
        seriesData: [
          { name: "指标一", value: [] },
          { name: "指标二", value: [] },
          { name: "指标三", value: [] }
        ],
        tooltip: {
          show: true,
          formatter: (parames) => {
            return 'tooltip'
          }
        },
        grid: {
          top: '10%',
        }
      },
      spinShow1: true,
      spinShow2: true,
      spinShow3: true,
      chart: null
    };
  },
  mounted() {
    setTimeout(() => {
      this.spinShow1 = false;
      this.spinShow2 = false;
      this.spinShow3 = false;
    }, 1000);
    this.chart = this.$echarts.init(
      document.getElementById('barChart7'),
      "chalk"
    );
    this.chart.on("click", (e) => {
      console.log('点击barChart7');
    });
    setTimeout(() => {
      this.barData3 = {
        xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
        seriesData: [
          { name: "指标一", value: [131, 534, 341, 244, 541, 763, 422, 321] },
          { name: "指标二", value: [652, 455, 464, 244, 657, 866, 442, 214] },
          { name: "指标三", value: [654, 124, 541, 579, 390, 489, 653, 124] }
        ],
        tooltip: {
          show: true,
          formatter: (parames) => {
            return 'tooltip'
          }
        },
        grid: {
          top: '10%',
        }
      }
    }, 5000)
  },
  created() {},
  methods: {
    showOption(ref) {
      console.log(this.$refs[ref].$options)
      this.$store.commit('UPDATE_DIALOG_SHOW', this.$refs[ref].$options._componentTag);
    },
  }
};
</script>
<style lang="scss" scoped>
@import "./bar.scss";
</style>
