<template>
  <div class="content">
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      :title="'立体饼图1'"
      @showOptionHandler="showOption('pie1')"
    >
      <pie-style-1 :sid="'pie1'" ref="pie1" :data="pie1.data" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      :title="'立体饼图2'"
      @showOptionHandler="showOption('pie2')"
    >
      <pie-style-2 :sid="'pie2'" ref="pie2" :data="pie2.data" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      :title="'基础饼图'"
      @showOptionHandler="showOption('pie3')"
    >
      <pie-style-3 :sid="'pie3'" ref="pie3" :data="pie3.data" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      :title="'南丁格尔玫瑰图'"
      @showOptionHandler="showOption('pie4')"
    >
      <pie-style-4 :sid="'pie4'" ref="pie4" :data="pie4.data" :iconImg="pie4.iconImg" />
    </box-container>
  </div>
</template>
<script>
import boxContainer from "../common/box-container";
import PieStyle1 from "../../cell/pie/pie-style-1";
import pieStyle2 from "../../cell/pie/pie-style-2";
import pieStyle3 from "../../cell/pie/pie-style-3";
import pieStyle4 from "../../cell/pie/pie-style-4";
export default {
  components: {
    "box-container": boxContainer,
    PieStyle1,
    pieStyle2,
    pieStyle3,
    pieStyle4
  },
  data() {
    return {
      pie1: {
        id: "pie1",
        data: [
          {
            name: "空间资源",
            y: 330,
            sliced: false,
            selected: false
          },
          {
            name: "管线资源",
            y: 340,
            sliced: false,
            selected: false
          },
          {
            name: "数据资源",
            y: 350,
            sliced: false,
            selected: false
          },
          {
            name: "无线资源",
            y: 360,
            sliced: false,
            selected: false
          },
          {
            name: "传输资源",
            y: 370,
            sliced: false,
            selected: false
          },
          {
            name: "接入资源",
            y: 380,
            sliced: false,
            selected: false
          }
        ],
        tooltipStyle: {}
      },
      pie2: {
        id: "pie2",
        data: [
          {
            name: "空间资源",
            y: 330,
            sliced: false,
            selected: false
          },
          {
            name: "管线资源",
            y: 340,
            sliced: false,
            selected: false
          },
          {
            name: "数据资源",
            y: 350,
            sliced: false,
            selected: false
          },
          {
            name: "无线资源",
            y: 360,
            sliced: false,
            selected: false
          },
          {
            name: "传输资源",
            y: 370,
            sliced: false,
            selected: false
          },
          {
            name: "接入资源",
            y: 380,
            sliced: false,
            selected: false
          }
        ]
      },
      pie3: {
        id: "pie3",
        data: [
          {
            name: "空间资源",
            value: 330
          },
          {
            name: "管线资源",
            value: 340
          },
          {
            name: "数据资源",
            value: 350
          },
          {
            name: "无线资源",
            value: 360
          },
          {
            name: "传输资源",
            value: 370
          },
          {
            name: "接入资源",
            value: 380
          }
        ]
      },
      pie4: {
        id: "pie4",
        iconImg: require("../../cell/pie/images/circle.png"),
        data: [
          {
            name: "空间资源",
            value: 330
          },
          {
            name: "管线资源",
            value: 340
          },
          {
            name: "数据资源",
            value: 350
          },
          {
            name: "无线资源",
            value: 360
          },
          {
            name: "传输资源",
            value: 370
          },
          {
            name: "接入资源",
            value: 80
          }
        ]
      },
      spinShow1: true
    };
  },
  created() {
    this.spinShow1 = false;
  },
  methods: {
    showOption(ref) {
      console.log(this.$refs[ref]);
      this.$store.commit(
        "UPDATE_DIALOG_SHOW",
        this.$refs[ref].$options._componentTag
      );
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./pie.scss";
</style>
