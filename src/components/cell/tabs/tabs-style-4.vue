<template>
  <div class="tabs-container">
    <ul class="tabs-list">
      <li v-for="(item, index) in tabsList"
      :key="index"
      :class="{active: value === index}"
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
  name: 'tabs-style-4',
  props: {
    tabsList:{
      type: Array,
      default: []
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      // tabsList4: [
      //   {
      //     icon: 'iconfont icon-dianlu',
      //     title: '稽核统计汇总',
      //     style: {}
      //   },
      //   {
      //     icon: 'iconfont icon-louyu',
      //     title: '稽核详情',
      //     style: {}
      //   },
      // ],
      currIndex: 0,
    }
  },
  methods: {
    changeIndex(itemIndex) {
     this.$emit('input', itemIndex)
      this.$emit('tabsHandle', itemIndex);
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs-container {
  // width: 100%;
  // height: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
  .tabs-list {
    display: flex;
    li {
      position: relative;
      list-style: none;
      cursor: pointer;
      width: 153px;
      height: 38px;
      line-height: 38px;
      margin: 0 5px;
      font-size: 18px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #ffffff;
      text-align: center;
      z-index: 999;
      &.active {
        &::before {
          content: ''; /* 用伪元素来生成一个矩形 */
          position: absolute;
          top: 0; right: 0; bottom: 0; left: 0;
          background: linear-gradient(180deg,rgba(3,144,156,0.66), rgba(0,112,162,0.66));
          border: 1px solid;
          border-image: linear-gradient(220deg, #00fffd 4%, #25c6c6 96%) 1 1;
          box-shadow: 0px 0px 4px 0px rgba(0,187,255,0.50) inset;
          transform: skew(16deg);
        }
      }
      &::before {
        content: ''; /* 用伪元素来生成一个矩形 */
        position: absolute;
        top: 0; right: 0; bottom: 0; left: 0;
        background: linear-gradient(180deg,rgba(16,80,132,0.77), #002a4d);
        border: 1px solid;
        border-image: linear-gradient(220deg, #00bfff 4%, #2583c6 96%) 1 1;
        box-shadow: 0px 0px 4px 0px rgba(0,187,255,0.50) inset; 
        transform: skew(16deg);
         z-index: -1;
      }
    }
  }
}
</style>