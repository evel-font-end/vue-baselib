<template>
  <!-- 混合图表 -->
  <div class="content">
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      :title="'折柱混合一'"
      @showOptionHandler="showOption('chartBar1')"
    >
      <bar-style-1
        :chartId="'chartBar1'"
        ref="chartBar1"
        :chartData="mixtureData1"
      />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      :title="'折柱混合二'"
      @showOptionHandler="showOption('chartBar2')"
    >
      <bar-style-2
        :chartId="'chartBar2'"
        ref="chartBar2"
        :chartData="mixtureData1"
      />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      :title="'面积图折线图混合'"
      @showOptionHandler="showOption('chartBar3')"
    >
      <bar-style-3
        :chartId="'chartBar3'"
        ref="chartBar3"
        :chartData="mixtureData2"
      />
    </box-container>
  </div>
</template>
<script>
import boxContainer from "../common/box-container";
import BarStyle1 from "~components/cell/bar/bar-style-1.vue";
import BarStyle2 from "~components/cell/bar/bar-style-2.vue";
import BarStyle3 from "~components/cell/bar/bar-pictorial-style-1.vue";

export default {
  components: {
    boxContainer,
    BarStyle1,
    BarStyle2,
    BarStyle3
  },
  data() {
    return {
      // 数据类型
      mixtureData1: {
        lineTitle: "指标一",
        barTitle: "指标二",
        xdata: ["北京", "天津", "上海", "重庆", "河北", "湖北", "山西", "辽宁"],
        barData: [1, 2, 3, 4, 5, 6, 7, 8],
        lineData: [1, 2, 3, 4, 5, 6, 7, 8]
      },
      mixtureData2: {
        lineTitle: ["指标一", "指标二"],
        xdata: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月"],
        ydata: [
          [134, 235, 312, 412, 512, 136, 457, 128],
          [421, 214, 343, 422, 535, 236, 527, 118]
        ]
      },
      spinShow1: false
    };
  },
  mounted() {},
  created() {},
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
@import "./bar.scss";
</style>
