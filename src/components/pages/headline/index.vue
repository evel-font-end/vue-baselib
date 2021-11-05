<template>
  <div class="content">
    <div class="show-item  bg-black">
      <p class="title">一级标题</p>
      <div class="item-content">
        <headline1 :title="title1"></headline1>
      </div>
      <div class="item-content">
        <headline2 :title="title2"></headline2>
      </div>
      <div class="item-content">
        <headline3 :title="title3"></headline3>
      </div>
      <div class="item-content">
        <headline4 :title="title4"></headline4>
      </div>
      <div class="item-content">
        <headline5 :title="title5"></headline5>
      </div>
      <div class="item-content">
        <headline6 :title="title6"></headline6>
      </div>
    </div>
    <div class="show-item  bg-black">
      <p class="title">二级标题</p>
      <div class="item-content item-style">
        <headline7 :title="title7"></headline7>
        <headline8 :title="title8"></headline8>
      </div>
      <div class="item-content">
        <headline-9 :title="title9"></headline-9>
      </div>
    </div>
    <div class="show-item  bg-black">
      <p class="title">三级标题</p>
      <div class="item-content item-style">
        <headline-10 :title="title10"></headline-10>
        <headline-11></headline-11>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  },
  components: {
   headline1,
   headline2,
   headline3,
   headline4,
   headline5,
   headline6,
   headline7,
   headline8,
   headline9,
   headline10,
   headline11,
  },
  methods: {
   
  }
}
</script>

<style lang="scss" scoped>
@import './headline.scss'
</style>