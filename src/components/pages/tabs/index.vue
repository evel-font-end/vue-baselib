<template>
  <div class="content">
    <div class="show-item  bg-black">
      <p class="title">横向tab标签</p>
      <div class="item-content">
        <tabs1 :tabsList="tabsList1" @tabsHandle="tabsHandle1">
           <!-- <tabsContent1 v-if="currIndex1==0"></tabsContent1>
           <tabsContent2 v-if="currIndex1==1"></tabsContent2>
           <tabsContent3 v-if="currIndex1==2"></tabsContent3>
           <tabsContent4 v-if="currIndex1==3"></tabsContent4> -->
        </tabs1>
      </div>
      <div class="item-content">
        <tabs2 @tabsHandle="tabsHandle2">
          <!-- <tabsContent1 v-if="currIndex2==0"></tabsContent1>
          <tabsContent2 v-if="currIndex2==1"></tabsContent2>
          <tabsContent3 v-if="currIndex2==2"></tabsContent3>
          <tabsContent4 v-if="currIndex2==3"></tabsContent4>
          <tabsContent1 v-if="currIndex2==4"></tabsContent1> -->
        </tabs2>
      </div>
      <div class="item-content">
        <tabs3 @tabsHandle="tabsHandle3">
          <!-- <tabsContent1 v-if="currIndex2==0"></tabsContent1>
          <tabsContent2 v-if="currIndex2==1"></tabsContent2>
          <tabsContent3 v-if="currIndex2==2"></tabsContent3>
          <tabsContent4 v-if="currIndex2==3"></tabsContent4>
          <tabsContent1 v-if="currIndex2==4"></tabsContent1> -->
        </tabs3>
      </div>
      <div class="item-content item-style">
        <tabs4 @tabsHandle="tabsHandle4">
          <!-- <tabsContent1 v-if="currIndex2==0"></tabsContent1>
          <tabsContent2 v-if="currIndex2==1"></tabsContent2>
          <tabsContent3 v-if="currIndex2==2"></tabsContent3>
          <tabsContent4 v-if="currIndex2==3"></tabsContent4>
          <tabsContent1 v-if="currIndex2==4"></tabsContent1> -->
        </tabs4>
        <tabs5></tabs5>
      </div>
    </div>
    <div class="show-item  bg-black">
      <p class="title">竖向Tab标签</p>
      <div class="item-content style-coloum">
        <tabs6></tabs6>
        <tabs7></tabs7>
      </div>
    </div>
  </div>
</template>

<script>
import boxContainer from '../common/box-container';
import tabs1 from '../../cell/tabs/tabs-style-1.vue';
import tabs2 from '../../cell/tabs/tabs-style-2.vue';
import tabs3 from '../../cell/tabs/tabs-style-3.vue';
import tabs4 from '../../cell/tabs/tabs-style-4.vue';
import tabs5 from '../../cell/tabs/tabs-style-5.vue';
import tabs6 from '../../cell/tabs/tabs-style-6.vue';
import tabs7 from '../../cell/tabs/tabs-style-7.vue';
import tabsContent1 from '../../cell/tabs/components/tabs-content-1.vue';
import tabsContent2 from '../../cell/tabs/components/tabs-content-2.vue';
import tabsContent3 from '../../cell/tabs/components/tabs-content-3.vue';
import tabsContent4 from '../../cell/tabs/components/tabs-content-4.vue';

export default {
  name: 'tabs',
  data() {
    return {
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
    tabs1,
    tabs2,
    tabs3,
    tabs4,
    tabs5,
    tabs6,
    tabs7,
    tabsContent1,
    tabsContent2,
    tabsContent3,
    tabsContent4,
  },
  methods: {
    showOption() {
      console.log('show options ')
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