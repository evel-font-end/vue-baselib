<template>
  <div class="tabs-container">
    <ul class="tabs-list">
      <li v-for="(item, index) in tabsList"
      :key="index"
      :class="{active: currIndex === index}"
      @click="changeIndex(index)"
      >
        <i :class="item.icon" :style="item.style"></i>
        <span class="tabs-item-title">{{item.title}}</span>
      </li>
    </ul>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs-style-2',
  props: {
    tabsList:{
      type: Array,
      default: []
    }
  },
  data() {
    return {
      // tabsList2: [
      //   {
      //     icon: 'iconfont icon-dianlu',
      //     title: '电路',
      //     style: {
      //       color: '#3fd6f1'
      //     }
      //   },
      //   {
      //     icon: 'iconfont icon-louyu',
      //     title: '楼宇',
      //     style: {
      //       color: '#3fd6f1'
      //     }
      //   },
      //   {
      //     icon: 'iconfont icon-jifang',
      //     title: '机房',
      //     style: {color: '#3fd6f1'}
      //   },
      //   {
      //     icon: 'iconfont icon-guanglan',
      //     title: '光缆网络',
      //     style: {color: '#3fd6f1'}
      //   },
      //   {
      //     icon: 'iconfont icon-guojiziyuan',
      //     title: '国际资源',
      //     style: {color: '#3fd6f1'}
      //   }
      // ],
      currIndex: 0,
    }
  },
  methods: {
    changeIndex(itemIndex) {
      this.currIndex = itemIndex;
      console.log('this.firsScreenRadio', this.currIndex);
      this.$emit('tabsHandle', itemIndex);
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-container {
  // width: 100%;
  // height: 100%;
  // box-sizing: border-box;
  margin-bottom: 20px;
  .tabs-list {
    display: flex;
    li {
      list-style: none;
      padding: 0 16px;
      margin: 0 9px;
      cursor: pointer;
      // width: 100px;
      height: 40px;
      background: url('./images/tabs-2-2.png') no-repeat;
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #FFFFFF;
      .tabs-item-title {
        margin-left: 8px;
      }
      &.active {
        background: url('./images/tabs-2-1.png') no-repeat;
        background-size: 100% 100%;
        // z-index: 9999;
        .iconfont {
          color: #fff !important;
        }
      }
    }
  }
}
</style>