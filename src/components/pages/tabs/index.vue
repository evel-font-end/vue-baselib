<template>
  <div class="tabs-content">
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      title="横向tab标签"
      :width="'calc(50% - 20px)'"
      @showOptionHandler="showOption1('tabsStyle1')">
        <tabs-style-1 :tabsList="tabsList1" @tabsHandle="tabsHandle1">
           <!-- <tabsContent1 v-if="currIndex1==0"></tabsContent1>
           <tabsContent2 v-if="currIndex1==1"></tabsContent2>
           <tabsContent3 v-if="currIndex1==2"></tabsContent3>
           <tabsContent4 v-if="currIndex1==3"></tabsContent4> -->
        </tabs-style-1>
        <tabs-style-2 @tabsHandle="tabsHandle2">
          <!-- <tabsContent1 v-if="currIndex2==0"></tabsContent1>
          <tabsContent2 v-if="currIndex2==1"></tabsContent2>
          <tabsContent3 v-if="currIndex2==2"></tabsContent3>
          <tabsContent4 v-if="currIndex2==3"></tabsContent4>
          <tabsContent1 v-if="currIndex2==4"></tabsContent1> -->
        </tabs-style-2>
        <tabs-style-3 @tabsHandle="tabsHandle3">
          <!-- <tabsContent1 v-if="currIndex2==0"></tabsContent1>
          <tabsContent2 v-if="currIndex2==1"></tabsContent2>
          <tabsContent3 v-if="currIndex2==2"></tabsContent3>
          <tabsContent4 v-if="currIndex2==3"></tabsContent4>
          <tabsContent1 v-if="currIndex2==4"></tabsContent1> -->
        </tabs-style-3>
        <tabs-style-4 @tabsHandle="tabsHandle4">
          <!-- <tabsContent1 v-if="currIndex2==0"></tabsContent1>
          <tabsContent2 v-if="currIndex2==1"></tabsContent2>
          <tabsContent3 v-if="currIndex2==2"></tabsContent3>
          <tabsContent4 v-if="currIndex2==3"></tabsContent4>
          <tabsContent1 v-if="currIndex2==4"></tabsContent1> -->
        </tabs-style-4>
        <tabs-style-5></tabs-style-5>
    </box-container>
    <box-container
      class="bg-grey flex-row"
      :spinShow="spinShow2"
      title="竖向Tab标签"
      :width="'calc(50% - 20px)'"
      @showOptionHandler="showOption2('tabsStyle2')">
      <tabs-style-6></tabs-style-6>
      <tabs-style-7></tabs-style-7>
    </box-container>
  </div>
</template>

<script>
import boxContainer from '../common/box-container-2';
import tabsStyle1 from '../../cell/tabs/tabs-style-1.vue';
import tabsStyle2 from '../../cell/tabs/tabs-style-2.vue';
import tabsStyle3 from '../../cell/tabs/tabs-style-3.vue';
import tabsStyle4 from '../../cell/tabs/tabs-style-4.vue';
import tabsStyle5 from '../../cell/tabs/tabs-style-5.vue';
import tabsStyle6 from '../../cell/tabs/tabs-style-6.vue';
import tabsStyle7 from '../../cell/tabs/tabs-style-7.vue';
import tabsContent1 from '../../cell/tabs/components/tabs-content-1.vue';
import tabsContent2 from '../../cell/tabs/components/tabs-content-2.vue';
import tabsContent3 from '../../cell/tabs/components/tabs-content-3.vue';
import tabsContent4 from '../../cell/tabs/components/tabs-content-4.vue';
import BoxContainer from '../common/box-container.vue';

export default {
  name: 'tabs',
  data() {
    return {
      spinShow1: true,
      spinShow2: true,
      tabsList1: [
        '骨干网核心节点',
        '国际出口',
        '骨干网设备端口',
        '城域网设备',
 			],
      currIndex1: 0,
      currIndex2: 0,
      currIndex3: 0,
      currIndex4: 0,
    }
  },
  components: {
    boxContainer,
    tabsStyle1,
    tabsStyle2,
    tabsStyle3,
    tabsStyle4,
    tabsStyle5,
    tabsStyle6,
    tabsStyle7,
    tabsContent1,
    tabsContent2,
    tabsContent3,
    tabsContent4,
    BoxContainer,
  },
  created() {
    this.spinShow1 = false;
    this.spinShow2 = false;
  },
  methods: {
    showOption1(ref) {
      console.log(JSON.parse(JSON.stringify(this.$refs[ref].option)));
    },
    showOption2(ref) {
      console.log(JSON.parse(JSON.stringify(this.$refs[ref].option)));
    },
    tabsHandle1(e) {
      console.log('e', e);
      this.currIndex1 = e;
       console.log('this.currIndex', this.currIndex1);
    },
    tabsHandle2(e) {
      console.log('e', e);
      this.currIndex2 = e;
       console.log('this.currIndex', this.currIndex2);
    },
    tabsHandle3(e) {
      console.log('e', e);
      this.currIndex3 = e;
       console.log('this.currIndex', this.currIndex3);
    },
    tabsHandle4(e) {
      console.log('e', e);
      this.currIndex4 = e;
       console.log('this.currIndex', this.currIndex4);
    }
  }
}
</script>

<style lang="scss" scoped>
@import './tabs.scss'
</style>