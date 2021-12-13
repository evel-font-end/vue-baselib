<template>
  <div class="content">
    <box-container
      class="bg-grey"
      :spinShow="false"
      :title="'平滑折线图'"
      @showOptionHandler="showOption('line1')"
    >
      <lineStyle1 :chartId="'line1'" ref="line1" :chartData="lineData3" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="false"
      :title="'基础折线图'"
      @showOptionHandler="showOption('line2')"
    >
      <lineStyle2
        :chartId="'line2'"
        ref="line2"
        :chartData="lineData1"
        :options="{
        }"
      />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="false"
      :title="'渐变堆叠面积图'"
      @showOptionHandler="showOption('line3')"
    >
      <lineStyle3 :chartId="'line3'" ref="line3" :chartData="lineData3" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="false"
      :title="'基础面积图'"
      @showOptionHandler="showOption('line4')"
    >
      <lineStyle4 :chartId="'line4'" ref="line4" :chartData="lineData2" />
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
        lineTitle: ["指标一", "指标二"],
        xdata: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        ydata: [
          [
            [134, 235, 312, 412, 512, 136, 457, 128],
            [21, 14, 343, 422, 535, 236, 127, 118]
          ],
          [421, 214, 343, 422, 535, 236, 527, 118],
          [421, 114, 343, 422, 535, 236, 527, 118],
        ]
      },
      lineData2: {
        lineTitle1: "",
        xdata: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        ydata1: [134, 235, 312, 412, 512, 136, 457, 128]
      },
      lineData3: {
        lineTitle1: "指标一",
        lineTitle2: "指标二",
        xdata: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        ydata1: [134, 235, 312, 412, 512, 136, 457, 128],
        ydata2: [421, 214, 343, 422, 535, 236, 527, 118]
      },
    };
  },
  mounted() {},
  methods: {
    showOption(ref) {
      console.log(this.$refs[ref].$options._componentTag);
      this.$store.commit(
        "UPDATE_DIALOG_SHOW",
        this.$refs[ref].$options._componentTag
      );
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./line.scss";
</style>
