<template>
  <div class="content">
    <box-container class="bg-grey" :spinShow="spinShow1" :title="'柱状图1'">
      <bar1 :chartId="'bar1'" :chartData="barData1" />
    </box-container>
    <box-container class="bg-grey" :spinShow="spinShow2" :title="'柱状图2'">
      <bar2 :chartId="'bar2'" :chartData="barData1" />
    </box-container>
    <box-container class="bg-grey" :spinShow="spinShow3" :title="'柱状图3'">
      <bar3 :chartId="'bar3'" :chartData="barData2" />
    </box-container>
    <box-container class="bg-grey" :spinShow="spinShow3" :title="'柱状图4'">
      <bar4 :chartId="'bar4'" :chartData="barData2" />
    </box-container>
    <box-container class="bg-grey" :spinShow="spinShow3" :title="'柱状图5'">
      <bar5 :chartId="'bar5'" :chartData="barData2" />
    </box-container>
    <box-container class="bg-grey" :spinShow="spinShow3" :title="'柱状图6'">
      <bar6 :chartId="'bar6'" :chartData="mixtureData2" />
    </box-container>
    <box-container class="bg-grey" :spinShow="spinShow3" :title="'堆叠柱状图'">
      <bar7 :chartId="'bar7'" :chartData="barData3" />
    </box-container>
    <box-container class="bg-grey" :spinShow="spinShow3" :title="'柱状图8'">
      <bar8 :chartId="'bar8'" :chartData="barData1" />
    </box-container>
  </div>
</template>
<script>
import boxContainer from "../common/box-container";
import bar1 from "~components/cell/barChart/barChart-1.vue";
import bar2 from "~components/cell/barChart/barChart-2.vue";
import bar3 from "~components/cell/barChart/barChart-3.vue";
import bar4 from "~components/cell/barChart/barChart-4.vue";
import bar5 from "~components/cell/barChart/barChart-5.vue";
import bar6 from "~components/cell/barChart/barChart-6.vue";
import bar7 from "~components/cell/barChart/barChart-7.vue";
import bar8 from "~components/cell/barChart/barChart-8.vue";

export default {
  components: {
    boxContainer,
    bar1,
    bar2,
    bar3,
    bar4,
    bar5,
    bar6,
    bar7,
    bar8
  },
  data() {
    return {
      // 数据结构
      barData1: {
        barTitle: "",
        xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
        ydata: [1, 2, 3, 4, 5, 6, 7, 8]
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
        xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
        seriesData: [
          { name: "指标一", value: [131, 534, 341, 244, 541, 763, 422, 321] },
          { name: "指标二", value: [652, 455, 464, 244, 657, 866, 442, 214] },
          { name: "指标三", value: [654, 124, 541, 579, 390, 489, 653, 124] }
        ]
      },
      spinShow1: true,
      spinShow2: true,
      spinShow3: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.spinShow1 = false;
      this.spinShow2 = false;
      this.spinShow3 = false;
    }, 1000);
  },
  created() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "./bar.scss";
</style>
