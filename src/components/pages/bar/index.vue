<template>
  <div class="content">
    <box-container class="bg-grey" :spinShow="spinShow1" :title="'折柱混合一'">
      <base-Bar :chartId="'chartBar1'" :chartData="mixtureData1" />
    </box-container>
    <box-container class="bg-grey" :spinShow="spinShow2" :title="'折柱混合二'">
      <bar-style-two :chartId="'chartBar2'" :chartData="mixtureData1" />
    </box-container>
    <box-container class='bg-grey' :spinShow='spinShow3' :title="'面积图折线图混合'">
      <pictorialBar :chartId="'chartBar3'" :chartData="mixtureData2" />
    </box-container>
  </div>
</template>
<script>
import boxContainer from "../common/box-container";
import baseBar from "~components/cell/bar/bar-style-1.vue";
import barStyleTwo from "~components/cell/bar/bar-style-2.vue";
import pictorialBar from "~components/cell/bar/bar-pictorial-style-1.vue";

export default {
  components: {
    boxContainer,
    baseBar,
    barStyleTwo,
    pictorialBar
  },
  data() {
    return {
      // 数据类型
      mixtureData1: {
        lineTitle: "指标一",
        barTitle: "指标二",
        xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
        ydata: [1, 2, 3, 4, 5, 6, 7, 8],
        ydata2: [1, 2, 3, 4, 5, 6, 7, 8]
      },
      mixtureData2: {
        lineTitle1: '指标一',
        lineTitle2: '指标二',
        xdata: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        ydata1: [134, 235, 312, 412, 512, 136, 457, 128],
        ydata2: [421, 214, 343, 422, 535, 236, 527, 118],
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
