<template>
  <div class="tabs-container">
    <ul class="tabs-list">
      <li v-for="(item, index) in tabsList3"
      :key="index"
      :class="{active: currIndex === index}"
      @click="changeIndex(index)"
      >
        <!-- <i :class="item.icon" :style="item.style"></i> -->
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
  name: 'tabs-style-3',
  data() {
    return {
      tabsList3: [
        {
          icon: 'iconfont icon-dianlu',
          title: '总览',
          style: {}
        },
        {
          icon: 'iconfont icon-louyu',
          title: '一千调度',
          style: {}
        },
        {
          icon: 'iconfont icon-jifang',
          title: '二千调度',
          style: {}
        },
        {
          icon: 'iconfont icon-guanglan',
          title: '本地网调度',
          style: {}
        },
      ],
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
      width: 148px;
      height: 30px;
      color: #FFFFFF;
      background:  linear-gradient(312deg,rgba(0,101,134,0.64), rgba(0,106,158,0.35) 95%);
      margin: 0 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.active {
        background: url("./images/tabs-3-1.png") 100%
          top no-repeat,
          linear-gradient(315deg,rgba(0,149,222,0.63), rgba(0,110,146,0.85));
          background-size: cover;
      }
    }
  }
}
</style>