<template>
  <div class="headline-container" :class="headlineClass">
    <div class="headline-title">
      <div class="dot"></div>
     <span class="title">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headline-style-11',
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
    display: flex;
    justify-content: center;
    align-items: center;
    .dot {
      width: 15px;
      height: 12px;
      margin-right: 6px;
      background: linear-gradient(270deg,#5EAEFF, #538CFF);
    }
    .title {
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      text-align: left;
      color: #FFFFFF;
      line-height: 20px;
    }
  }
}
</style>