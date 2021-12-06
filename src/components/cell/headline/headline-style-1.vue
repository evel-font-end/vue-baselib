<template>
  <div class="headline-container" :class="headlineClass">
    <div class="headline-title">
     <span class="title">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headline-style-1',
  props: {
    title: {
      type: String,
      default: ''
    },
    headlineClass: {
      type: String,
      default: ''
    }
  },
  // created() {
  //   console.log('this.title', this.title);
  // }
}
</script>

<style lang="scss" scoped>
.headline-container {
  // width: 100%;
  // height: 100%;
  margin-bottom: 20px;
  .headline-title {
    width: 100%;
    height: 36px;
    font-size: 26px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: center;
    color: #ffffff;
    background: url('./images/title-bg-1-1@2x.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    display: flex;
    justify-content: center;
    .title {
      width: 156px;
      height: 37px;
      position: absolute;
      bottom: 15px;
      &::before {
        content: '';
        position: absolute;
        left: -47px;
        top: 50%;
        margin-top: -12px;
        width: 25px;
        height: 24px;
        z-index: 999;
        background: url('./images/triangle-double@2x.png') no-repeat;
        background-size: 100% 100%;
      }
      &::after {
        content: '';
        position: absolute;
        right: -47px;
        top: 50%;
        margin-top: -12px;
        width: 25px;
        height: 24px;
        z-index: 999;
        background: url('./images/triangle-double@2x.png') no-repeat;
        transform: rotate(180deg);
        background-size: 100% 100%;
      }
    }
  }
}
</style>