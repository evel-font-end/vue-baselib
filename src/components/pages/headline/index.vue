<template>
  <div class="headline-content">
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      title="一级标题"
      :width="'calc(50% - 40px)'"
      @showOptionHandler="showOption('headline1')">
      <headline-style-1 :title="title1" :headlineStyle="headlineStyle1" ref="headline1"></headline-style-1>
      <headline-style-2 :title="title2" ref="headline2"></headline-style-2>
      <headline3 :title="title3"></headline3>
      <headline4 :title="title4"></headline4>
      <headline5 :title="title5"></headline5>
      <headline6 :title="title6"></headline6>
    </box-container>
    <box-container
      class="bg-grey"
      :spinShow="spinShow2"
      title="二级标题"
      :width="'calc(50% - 40px)'"
      @showOptionHandler="showOption('headline7')">
      <headline-style-7 :title="title7" ref="headline7"></headline-style-7>
      <headline8 :title="title8"></headline8>
      <headline-9 :title="title9"></headline-9>
    </box-container>
    <box-container
      class="bg-grey flex-row"
      :spinShow="spinShow3"
      title="三级标题"
      :width="'calc(50% - 20px)'"
      @showOptionHandler="showOption('headline10')">
      <headline-style-10 :title="title10" ref="headline10"></headline-style-10>
      <headline-11 :title="title11"></headline-11>
    </box-container>
  </div>
</template>

<script>
import boxContainer from '../common/box-container-2';
import headline1 from '../../cell/headline/headline-style-1.vue';
import headline2 from '../../cell/headline/headline-style-2.vue';
import headline3 from '../../cell/headline/headline-style-3.vue';
import headline4 from '../../cell/headline/headline-style-4.vue';
import headline5 from '../../cell/headline/headline-style-5.vue';
import headline6 from '../../cell/headline/headline-style-6.vue';
import headline7 from '../../cell/headline/headline-style-7.vue';
import headline8 from '../../cell/headline/headline-style-8.vue';
import headline9 from '../../cell/headline/headline-style-9.vue';
import headline10 from '../../cell/headline/headline-style-10.vue';
import headline11 from '../../cell/headline/headline-style-11.vue';

export default {
  name: 'headline',
  data() {
    return {
      spinShow1: true,
      spinShow2: true,
      spinShow3: true,
      title1: '网络数据能力',
      title2: '设施详情',
      title3: '环境监测器本年度报警分析',
      title4: '摄像头今日事件类型统计',
      title5: '公厕七日客流',
      title6: '省分电路排名',
      title7: '22省集约化',
      title8: '近一年板卡入网情况',
      title9: '巡检排查',
      title10: 'AW异常情况汇总',
      title11: '设备实时概览',
      headlineStyle1: 'headline-style1'
    }
  },
  components: {
    boxContainer,
    'headline-style-1': headline1,
    headline2,
    headline3,
    headline4,
    headline5,
    headline6,
    'headline-style-7': headline7,
    headline8,
    headline9,
    'headline-style-10': headline10,
    headline11,
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
    // showOption2(ref) {
    //   console.log(JSON.parse(JSON.stringify(this.$refs[ref].option)));
    // },
    // showOption3(ref) {
    //   console.log(JSON.parse(JSON.stringify(this.$refs[ref].option)));
    // }
  }
}
</script>

<style lang="scss" scoped>
@import './headline.scss'
</style>