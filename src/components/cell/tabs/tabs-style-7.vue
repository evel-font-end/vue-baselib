<template>
<div class="headline-container">
 <div class="tab-header">
              <div
                v-for="(tab, i) in menuTab"
                :key="i"
                class="tab-item"
                :class="{ active: menuTabIndex2 == i }"
                @click.stop="changeTab(i, tab)"
              >
                <!-- :class="{ active: menuTabIndex == i }" -->
                <i v-html="tab.name"> </i>
              </div>
              <br />
            </div>
</div>
 
</template>

<script>

export default {
  name: 'tabs-style-7',
  data () {
    return {
      menuTab: [
        {
          name: '机房'
        },
        {
          name: '局站'
        }
      ],
      menuTabIndex2: 0,
    };
  },
  methods: {
     changeTab(i) {
      console.log(i);
      this.menuTabIndex2 = i;
      // this.$emit('changeCircuitStatus',i)
    },
  },
  props: {
    title: String
  }
};
</script>

<style lang="scss" scoped>
  .headline-container {
    width: 100%;
    height: 254px;
    margin-top: 40px;
    margin-left: 40px;
    .tab-header {
    position: absolute;
    // top: 15%;
    // right: -8.5%;
    // width: pxrem(35px);
    width: 35px;
    // transform: rotate(-90deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    .tab-item {
      width: 35px;
      height: 93px;
      min-width: 35px;
      min-height: 93px;
      // display: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: center;
      // line-height: 93px;
      // writing-mode: vertical-lr;/*从左向右 从右向左是 writing-mode: vertical-rl;*/
      // writing-mode: tb-lr;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/
      text-align: center;
      display: inline-block;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #6ab4e6;
      cursor: pointer;
      transform: skew(0, -25deg);
      background: linear-gradient(180deg, rgba(16, 80, 132, 0.77), #002a4d);
      border: 1px solid;
      border-image: linear-gradient(220deg, #00bfff 4%, #2583c6 96%) 1 1;
      box-shadow: 0px 0px 4px 0px rgba(0, 187, 255, 0.5) inset;
      &:not(:last-child) {
        margin-bottom: 1px;
      }
      i {
        padding-top: 10px;
        display: inline-block;
        transform: skew(-10deg, 5);
        transform: skew(0, 10deg);
        color: #fff;
        font-size: 16px;
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 22px;
        width: 20px;
        letter-spacing: 0px;
      }
      &.active {
        background: linear-gradient(
          180deg,
          rgba(3, 144, 156, 0.66),
          rgba(0, 112, 162, 0.66)
        );
        border: 1px solid;
        border-image: linear-gradient(220deg, #00fffd 4%, #25c6c6 96%) 1 1;
        box-shadow: 0px 0px 4px 0px rgba(0, 187, 255, 0.5) inset;
      }
    }
  }
  }
</style>
