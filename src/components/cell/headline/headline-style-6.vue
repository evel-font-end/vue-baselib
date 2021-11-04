<template>
  <div class="headline-container">
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
    }
  },
  created() {
    console.log('this.title', this.title);
  }
}
</script>

<style lang="scss" scoped>
.headline-container {
  width: 100%;
  height: 100%;
  .headline-title {
    width: 263px;
    height: 41px;
    line-height: 41px;
    background:url('./images/arrowhead@2x.png') no-repeat;
    background-size: 100% 100%;
    .title {
     font-size: 18px;
     font-family: PingFangSC, PingFangSC-Semibold;
     font-weight: 600;
     color: #ffffff;
     letter-spacing: 1px;
     margin-left: 39px;
    }
  }
}
</style>