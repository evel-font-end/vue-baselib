<template>
  <div class="headline-container" :class="headlineClass">
    <div class="headline-title">
     <span class="title">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headline-style-6',
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
  .headline-title {
    width: 257px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    background:url('./images/title-level-3@2x.png') no-repeat;
    background-size: 100% 100%;
    .title {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      color: #ffffff;
    }
  }
}
</style>