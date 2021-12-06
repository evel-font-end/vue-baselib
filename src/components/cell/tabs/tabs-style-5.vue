<template>
  <div class="tabs-container">
    <ul class="tabs-list">
      <li v-for="(item, index) in tabsList"
      :key="index"
      :class="{active: currIndex === index}"
      @click="changeIndex(index)"
      >
        <!-- <i v-if="item.icon" :class="item.icon" :style="item.style"></i> -->
        <span class="tabs-item-title">{{item}}</span>
      </li>
    </ul>
    <div class="tabs-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs-style-5',
  props: {
    tabsList:{
      type: Array,
      default: []
    }
  },
  data() {
    return {
      // tabsList5: [
      //   {
      //     icon: 'iconfont icon-dianlu',
      //     title: '楼宇',
      //     style: {}
      //   },
      //   {
      //     icon: 'iconfont icon-louyu',
      //     title: '电路',
      //     style: {}
      //   },
      //   {
      //     icon: 'iconfont icon-jifang',
      //     title: '机房',
      //     style: {}
      //   },
      //   {
      //     icon: 'iconfont icon-guanglan',
      //     title: '光缆',
      //     style: {}
      //   },
      // ],
      currIndex: 0,
    }
  },
  methods: {
    changeIndex(itemIndex) {
      this.currIndex = itemIndex;
      // console.log('this.firsScreenRadio', this.currIndex);
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
      display: flex;
      width: 72px;
      height: 36px;
      cursor: pointer;
      border: 1px solid #30a4e7;
      box-shadow: 0 0 8px 0 #1793d8 inset;
      font-size: 20px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #fff;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      &.active {
        background: #005374;
        border: 1px solid #14c0e5;
        box-shadow: 0 0 14px 0 rgba(23,183,216,0.47) inset;
      }
    }
  }
}
</style>