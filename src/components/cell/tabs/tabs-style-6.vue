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
  name: 'tabs-style-6',
  props: {
    tabsList:{
      type: Array,
      default: []
    }
  },
  data() {
    return {
      // tabsList6: [
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
      //     title: '光缆',
      //     style: {color: '#3fd6f1'}
      //   },
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
  box-sizing: border-box;
  margin-bottom: 20px;
  .tabs-list {
    li {
      list-style: none;
      width: 60px;
      height: 61px;
      color: #fff;
      background: url('./images/tabs-6-2-normal.png') no-repeat;
      background-size: 100% 100%;
      margin: 0 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 7px;
      position: relative;
      &.active {
        background: url("./images/tabs-6-1-active.png") no-repeat;
        background-size: 100% 100%;
        background-color: #0273a8;
        .iconfont {
          color: #fff !important;
        }
      }
    }
  }
}
</style>