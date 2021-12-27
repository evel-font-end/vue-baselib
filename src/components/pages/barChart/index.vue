<template>
  <div class="content">
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      :title="'柱状图1'"
      @showOptionHandler='showOption("barchart1")'>
      <barchart-1 :chartId="'barchart1'" ref="barchart1" :chartData="barData1" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow2"
      :title="'柱状图2'"
      @showOptionHandler='showOption("barchart2")'>
      <barchart-2 :chartId="'barchart2'" ref="barchart2" :chartData="barData1" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      :title="'柱状图3'"
      @showOptionHandler='showOption("barchart3")'>
      <barchart-3 :chartId="'barchart3'" ref="barchart3" :chartData="barData2" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      :title="'柱状图4'"
      @showOptionHandler='showOption("barchart4")'>
      <barchart-4 :chartId="'barchart4'" ref="barchart4" :chartData="barData2" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      :title="'柱状图5'"
      @showOptionHandler='showOption("barchart5")'>
      <barchart-5 :chartId="'barchart5'" ref="barchart5" :chartData="barData2" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      :title="'柱状图6'"
      @showOptionHandler='showOption("barchart6")'>
      <barchart-6 :chartId="'barchart6'" ref="barchart6" :chartData="barData2" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      :title="'堆叠柱状图'"
      @showOptionHandler='showOption("barchart7")'>
      <barchart-7 :chartId="'barchart7'" ref="barchart7" :chartData="barData2" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      :title="'柱状图8'"
      @showOptionHandler='showOption("barchart8")'>
      <barchart-8 :chartId="'barchart8'" ref="barchart8" :chartData="barData1" />
    </box-container>
  </div>
</template>
<script>
import boxContainer from "../common/box-container";
import barchart1 from "~components/cell/barchart/barchart-1.vue";
import barchart2 from "~components/cell/barchart/barchart-2.vue";
import barchart3 from "~components/cell/barchart/barchart-3.vue";
import barchart4 from "~components/cell/barchart/barchart-4.vue";
import barchart5 from "~components/cell/barchart/barchart-5.vue";
import barchart6 from "~components/cell/barchart/barchart-6.vue";
import barchart7 from "~components/cell/barchart/barchart-7.vue";
import barchart8 from "~components/cell/barchart/barchart-8.vue";

export default {
  name: 'Barchart',
  components: {
    boxContainer,
    barchart1,
    barchart2,
    barchart3,
    barchart4,
    barchart5,
    barchart6,
    barchart7,
    barchart8
  },
  data() {
    return {
      // 数据结构
      barData1: {
        barTitle: ["指标一"],
        xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
        ydata: [
          [1, 2, 3, 4, 5, 6, 7, 8]
        ]
      },
      barData2: {
        barTitle: ["指标一", "指标二"],
        xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
        ydata: [
          [124, 214, 253, 344, 125, 316, 417, 538],
          [141, 142, 453, 544, 575, 136, 247, 548]
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
      document.getElementById('barchart7'),
      "chalk"
    );
    this.chart.on("click", (e) => {
      console.log('点击barchart7');
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
