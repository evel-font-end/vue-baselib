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
  name: 'headline-style-11',
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
    .tab-header {
    position: absolute;
    top: 15%;
    right: -8.5%;
    width: pxrem(35px);
    transform: rotate(-90deg);
    .tab-item {
      width: pxrem(35px);
      height: pxrem(93px);
      min-width: pxrem(35px);
      min-height: pxrem(93px);
      // line-height: pxrem(93px);
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
        margin-bottom: pxrem(1px);
      }
      i {
        padding-top: pxrem(10px);
        display: inline-block;
        transform: skew(-10deg, 5);
        transform: skew(0, 20deg);
        color: #fff;
        font-size: pxrem(16px);
        font-family: PingFangSC, PingFangSC-Regular;
        font-weight: 400;
        text-align: left;
        color: #ffffff;
        line-height: 22px;
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
