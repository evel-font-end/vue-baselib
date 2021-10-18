<template>
  <div class="content">
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      @showOptionHandler="showOption('pie1')"
    >
      <pie1
        sid="pie1"
        :source="eventTypeFetchData"
        :radiusDic="pieRadius1"
        ref="pie1"
      />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow2"
      @showOptionHandler="showOption('pie2')"
    >
      <pie2 sid="pie2" :source="caringObjectFetchData" ref="pie2" />
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow3"
      @showOptionHandler="showOption('pie3')"
    >
      <pie3 sid="pie3" :source="eventHandlingData" ref="pie3" />
    </box-container>
  </div>
</template>
<script>
import boxContainer from "../common/box-container";
import pie1 from "../../cell/pie/pie-style-1";
import pie2 from "../../cell/pie/pie-style-2";
import pie3 from "../../cell/pie/pie-style-3";
export default {
  components: {
    "box-container": boxContainer,
    pie1,
    pie2,
    pie3
  },
  data() {
    return {
      pieRadius1: {
        outside: ["25%", "45%"],
        center: ["15%", "25%"],
        inner: ["0%", "16%"]
      },
      eventTypeFetchData: [
        {
          name: "支持五种业务类型",
          y: 330,
          h: 30,
          sliced: false,
          selected: false
        },
        {
          name: "支持四种业务类型",
          y: 340,
          h: 40,
          sliced: false,
          selected: false
        },
        {
          name: "支持三种业务类型",
          y: 350,
          h: 50,
          sliced: false,
          selected: false
        },
        {
          name: "支持二种业务类型",
          y: 360,
          h: 60,
          sliced: false,
          selected: false
        },
        {
          name: "支持一种业务类型",
          y: 370,
          h: 70,
          sliced: false,
          selected: false
        },
        {
          name: "不支持",
          y: 380,
          h: 80,
          sliced: false,
          selected: false
        }
      ],
      caringObjectFetchData: [],
      eventHandlingData: [],
      spinShow1: true,
      spinShow2: true,
      spinShow3: true,
      activeRef: ""
    };
  },
  created() {
    this.spinShow1 = false;
    this.spinShow2 = false;
    this.spinShow3 = false;
  },
  methods: {
    showOption(ref) {
      console.log(JSON.parse(JSON.stringify(this.$refs[ref].option)));
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./pie.scss";
</style>
