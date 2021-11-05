<template>
  <div class="headline-container">
    <div class="headline-title">
     <span class="title">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headline-style-2',
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
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #ffffff;
    background: url('./images/title-bg-2-1@2x.png') no-repeat;
    background-size: 100% 100%;
    position: relative;
    display: flex;
    .title {
      text-indent: 41px;
      font-size: 30px;
      font-family: YouSheBiaoTiHei;
      text-align: left;
      color: #ffffff;
      letter-spacing: 1px;
      text-shadow: 0px 2px 4px 0px #1c4696;
    }
  }
}
</style>