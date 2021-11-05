<template>
  <div class="content">
    <box-container class="bg-grey" :title="'年月日'" @showOptionHandler='showOption("date1")'>
      <dateStyle1 ref="date1"></dateStyle1>
    </box-container>
    <box-container class="bg-grey" :title="'年月'" @showOptionHandler='showOption("date2")'>
      <dateStyle2  ref="date2"></dateStyle2>
    </box-container>
    <box-container class="bg-grey" :title="'年'" @showOptionHandler='showOption("date3")'>
      <dateStyle3  ref="date3"></dateStyle3>
    </box-container>
  </div>
</template>
<script>
import boxContainer from "../common/box-container";
import dateStyle1 from '../../cell/date/date-style-1.vue';
import dateStyle2 from '../../cell/date/date-style-2.vue';
import dateStyle3 from '../../cell/date/date-style-3.vue';

export default {
  name: "LinePage",
  components: {
    "box-container": boxContainer,
  },
  data() {
    return {
      spinShow1: true,
    };
  },
  methods: {
    showOption(ref) {
      console.log(JSON.parse(JSON.stringify(this.$refs[ref].option)))
    },
  },
  components: {
    boxContainer,
    dateStyle1,
    dateStyle2,
    dateStyle3,
  }
};
</script>
<style lang="scss" scoped>
@import "./date.scss";
</style>
