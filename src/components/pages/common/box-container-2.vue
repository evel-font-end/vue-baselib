<template>
  <div
    class='show-item'
    @mouseenter='isActive = true'
    @mouseleave='isActive = false'
    :style="'height:'+ height +';'+'width:'+ width +';'">
    <div class='title'>{{title}}</div>
    <div class='content'>
    <slot />
    </div>
    <Spin size='large' fix v-if='spinShow' />
    <div
      v-if='toolsShow'
      :class='["tools-cont", isActive ? "active" : ""]'>
      <Button
        type='primary'
        icon='code-working'
        size='small'
        class='tools-btn'
        @click='clickHandler'>查看option</Button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    spinShow: {
      require: true,
      type: Boolean,
      default: () => false
    },
    toolsShow: {
      type: Boolean,
      default: () => true
    },
    title: {
      type: String,
      default: '组件'
    },
    width: {
      type: String,
      default: '48%'
    },
    height: {
      type: String,
      default: 'auto'
    },
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    clickHandler() {
      this.$emit("showOptionHandler",{});
    }
  }
};
</script>
<style lang="scss" scoped>
// $showBoxWidth: calc(33.3% - 13.3px);
// $showBoxHeight: 'auto';
// @function scaleHeight($realWidth, $realHeight) {
//   @return $showBoxWidth * $realHeight / $realWidth;
// }
.show-item {
  // width: $showBoxWidth;
  // height: $showBoxHeight;
  margin: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: #132845;
  padding: 20px;
  padding-bottom: 60px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  .title{
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: left;
    color: #ffffff;
    line-height: 22px;
    margin-bottom: 30px;
  }
  .content{
    width: 100%;
  }
  &.bg-black{
    // background-color: #000;
    // color: rgba(255, 255, 255, .8);
  }
  &.bg-grey {
    /* background-color: rgba(0, 0, 0, .6); */
    // background-color: #495060;
    // color: rgba(255, 255, 255, .8);
  }

  .tools-cont {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    padding: 0 15px;
    box-sizing: border-box;
    text-align: right;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 0 0 10px 10px;
    transform: translateY(100%);
    transition: all 0.3s ease-in;

    &.active {
      transform: translateY(0);
    }
  }
}
.tools-btn {
  color: #fff;

  &:hover {
    color: #fff;
  }
}
</style>
