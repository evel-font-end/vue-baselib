<template>
  <div class="content">
    <box-container class="bg-grey" :spinShow="spinShow1" :title="'平滑折线图'">
      <lineStyle1 :chartId="'line1'" :chartData="lineData1" />
    </box-container>
    <box-container class="bg-grey" :spinShow="spinShow2" :title="'基础折线图'">
      <lineStyle2 :chartId="'line2'" :chartData="lineData1" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      :title="'渐变堆叠面积图'"
    >
      <lineStyle3 :chartId="'line3'" :chartData="lineData1" />
    </box-container>
    <box-container class="bg-grey" :spinShow="spinShow4" :title="'基础面积图'">
      <lineStyle4 :chartId="'line4'" :chartData="lineData2" />
    </box-container>
  </div>
</template>
<script>
import boxContainer from "../common/box-container";
import lineStyle1 from "../../cell/line/line-style-1";
import lineStyle2 from "../../cell/line/line-style-2";
import lineStyle3 from "../../cell/line/line-style-3";
import lineStyle4 from "../../cell/line/line-style-4";
export default {
  name: "LinePage",
  components: {
    "box-container": boxContainer,
    lineStyle1,
    lineStyle2,
    lineStyle3,
    lineStyle4
  },
  data() {
    return {
      // 数据类型
      lineData1: {
        lineTitle1: "指标一",
        lineTitle2: "指标二",
        xdata: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        ydata1: [134, 235, 312, 412, 512, 136, 457, 128],
        ydata2: [421, 214, 343, 422, 535, 236, 527, 118]
      },
      lineData2: {
        lineTitle1: "",
        xdata: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        ydata1: [134, 235, 312, 412, 512, 136, 457, 128]
      },
      spinShow1: true,
      spinShow2: true,
      spinShow3: true,
      spinShow4: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.spinShow1 = false;
      this.spinShow2 = false;
      this.spinShow3 = false;
      this.spinShow4 = false;
    }, 1000);
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
@import "./line.scss";
</style>
