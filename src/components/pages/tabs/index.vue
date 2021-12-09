<template>
  <div class="tabs-content">
    <box-container
      class="bg-grey"
      :spinShow="spinShow1"
      title="横向tab标签"
      :width="'calc(50% - 20px)'"
      @showOptionHandler="showOption('tabsStyle1')">
        <tabs-style-1  v-model="currIndex1" :tabsList="tabsList1" @tabsHandle="tabsHandle1" ref="tabsStyle1">
           <!-- <tabsContent1 v-if="currIndex1==0"></tabsContent1>
           <tabsContent2 v-if="currIndex1==1"></tabsContent2>
           <tabsContent3 v-if="currIndex1==2"></tabsContent3>
           <tabsContent4 v-if="currIndex1==3"></tabsContent4> -->
        </tabs-style-1>
        <tabs-style-2 v-model="currIndex2" :tabsList="tabsList2" @tabsHandle="tabsHandle2">
          <!-- <tabsContent1 v-if="currIndex2==0"></tabsContent1>
          <tabsContent2 v-if="currIndex2==1"></tabsContent2>
          <tabsContent3 v-if="currIndex2==2"></tabsContent3>
          <tabsContent4 v-if="currIndex2==3"></tabsContent4>
          <tabsContent1 v-if="currIndex2==4"></tabsContent1> -->
        </tabs-style-2>
        <tabs-style-3 v-model="currIndex3" :tabsList="tabsList3" @tabsHandle="tabsHandle3">
          <!-- <tabsContent1 v-if="currIndex2==0"></tabsContent1>
          <tabsContent2 v-if="currIndex3==1"></tabsContent2>
          <tabsContent3 v-if="currIndex3==2"></tabsContent3>
          <tabsContent4 v-if="currIndex3==3"></tabsContent4>
          <tabsContent1 v-if="currIndex3==4"></tabsContent1> -->
        </tabs-style-3>
        <tabs-style-4 v-model="currIndex4" :tabsList="tabsList4" @tabsHandle="tabsHandle4">
          <!-- <tabsContent1 v-if="currIndex4==0"></tabsContent1>
          <tabsContent2 v-if="currIndex4==1"></tabsContent2> -->
        </tabs-style-4>
        <tabs-style-5 v-model="currIndex5" :tabsList="tabsList5" @tabsHandle="tabsHandle5">
            <!-- <tabsContent1 v-if="currIndex5==0"></tabsContent1>
           <tabsContent2 v-if="currIndex5==1"></tabsContent2>
           <tabsContent3 v-if="currIndex5==2"></tabsContent3>
           <tabsContent4 v-if="currIndex5==3"></tabsContent4> -->
        </tabs-style-5>
    </box-container>
    <box-container
      class="bg-grey flex-row"
      :spinShow="spinShow2"
      title="竖向Tab标签"
      :width="'calc(50% - 20px)'"
      @showOptionHandler="showOption('tabsStyle6')">
      <tabs-style-6 ref="tabsStyle6" v-model="currIndex6" :tabsList="tabsList6" @tabsHandle="tabsHandle6">
          <!-- <tabsContent1 v-if="currIndex6==0"></tabsContent1>
           <tabsContent2 v-if="currIndex6==1"></tabsContent2>
           <tabsContent3 v-if="currIndex6==2"></tabsContent3>
           <tabsContent4 v-if="currIndex6==3"></tabsContent4> -->
      </tabs-style-6>
      <tabs-style-7 :tabsList="tabsList7" v-model="currIndex7" @tabsHandle="tabsHandle7">
         <!-- <tabsContent1 v-if="currIndex7==0"></tabsContent1>
          <tabsContent2 v-if="currIndex7==1"></tabsContent2> -->
      </tabs-style-7>
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
      tabsList2: [
        {
          icon: 'iconfont icon-dianlu',
          title: '电路',
          style: {
            color: '#3fd6f1',
          }
        },
        {
          icon: 'iconfont icon-louyu',
          title: '楼宇',
          style: {
            color: '#3fd6f1'
          }
        },
        {
          icon: 'iconfont icon-jifang',
          title: '机房',
          style: {color: '#3fd6f1'}
        },
        {
          icon: 'iconfont icon-guanglan',
          title: '光缆网络',
          style: {color: '#3fd6f1'}
        },
        {
          icon: 'iconfont icon-guojiziyuan',
          title: '国际资源',
          style: {color: '#3fd6f1'}
        }
      ],
      tabsList3: ['总览','一千调度','本地网调度', '二千调度','本地网调度'],
      tabsList4: [ '稽核统计汇总','稽核详情'],
      tabsList5: ['楼宇','电路','机房', '光缆'],
      tabsList6: [
        {
          icon: 'iconfont icon-dianlu',
          title: '电路',
          style: {
            color: '#3fd6f1'
          }
        },
        {
          icon: 'iconfont icon-louyu',
          title: '楼宇',
          style: {
            color: '#3fd6f1'
          }
        },
        {
          icon: 'iconfont icon-jifang',
          title: '机房',
          style: {color: '#3fd6f1'}
        },
        {
          icon: 'iconfont icon-guanglan',
          title: '光缆',
          style: {color: '#3fd6f1'}
        },
      ],
      tabsList7:['机房', '局站'],
      currIndex1: 3,
      currIndex2: 0,
      currIndex3: 2,
      currIndex4: 0,
      currIndex5: 2,
      currIndex6: 0,
      currIndex7: 1,
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
  },
  created() {
    this.spinShow1 = false;
    this.spinShow2 = false;
  },
  methods: {
    showOption(ref) {
      this.$store.commit('UPDATE_DIALOG_SHOW', this.$refs[ref].$options._componentTag);
    },
    tabsHandle1(e) { // 切换tab方法
      this.currIndex1 = e;
      // console.log(' this.currIndex1',  this.currIndex1);
      // console.log('e',  e);
    },
    tabsHandle2(e) {
      this.currIndex2 = e;
    },
    tabsHandle3(e) {
      this.currIndex3 = e;
    },
    tabsHandle4(e) {
      this.currIndex4 = e;
    },
    tabsHandle5(e) {
      this.currIndex5 = e;
    },
    tabsHandle6(e) {
      this.currIndex6 = e;
    },
    tabsHandle7(e) {
      this.currIndex7 = e;
    }
  }
}
</script>

<style lang="scss" scoped>
@import './tabs.scss'
</style>