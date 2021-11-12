<template>
  <div class="content">
    <box-container 
      class="bg-grey"
      :title="'年月日'"
      :spinShow="spinShow1"
      :width="'calc(33% - 40px)'"
      @showOptionHandler='showOption("dateStyle1")'>
      <date-style-1 ref="dateStyle1" v-model="date1" :isShowTitle="isShowTitle" :format="format"></date-style-1>
    </box-container>
    <box-container
      class="bg-grey"
      :title="'年月'"
      :spinShow="spinShow2"
      :width="'calc(33% - 40px)'"
      @showOptionHandler='showOption("dateStyle2")'>
      <date-style-2  ref="dateStyle2" v-model="month" :isShowTitle="isShowTitle2" :format="format2"></date-style-2>
    </box-container>
    <box-container
      class="bg-grey"
      :title="'年'"
      :spinShow="spinShow3"
       :width="'calc(33% - 40px)'"
      @showOptionHandler='showOption("dateStyle3")'>
      <date-style-3  ref="dateStyle3" v-model="year" :format="format3" :tip="tip3"></date-style-3>
    </box-container>
  </div>
</template>
<script>
import boxContainer from '../common/box-container-2';
import dateStyle1 from '../../cell/date/date-style-1.vue';
import dateStyle2 from '../../cell/date/date-style-2.vue';
import dateStyle3 from '../../cell/date/date-style-3.vue';

export default {
  name: "LinePage",
  data() {
    return {
      spinShow1: true,
      spinShow2: true,
      spinShow3: true,
      date: '',
      date1: '2022-12-12',
      format: 'yyyy年MM月dd日',
      isShowTitle: true,
      month: '2021-12',
      year: '2025',
      isShowTitle2: false,
      format2: 'yyyy/MM',
      format3: 'yyyy年',
      tip3: '请选择年份'
    };
  },
  watch: {
    date1(val) {
      console.log('父组件 watch date1', val);
    },
    month(val) {
      console.log('month', val)
    }
  },
  created() {
    this.spinShow1 = false;
    this.spinShow2 = false;
    this.spinShow3 = false;
  },
  methods: {
    showOption(ref) {
       this.$store.commit('UPDATE_DIALOG_SHOW', this.$refs[ref].$options._componentTag);
    },
  },
  components: {
    boxContainer,
    'date-style-1': dateStyle1,
    'date-style-2': dateStyle2,
    'date-style-3': dateStyle3,
  }
};
</script>
<style lang="scss" scoped>
@import "./date.scss";
</style>
