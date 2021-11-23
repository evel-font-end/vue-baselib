<template>
  <div class="publicTitle" :class="headlineClass">
    <p class="c-title">{{title}}</p>
    <div class="c-img"></div>
  </div>
</template>

<script>
export default {
  name: 'headline-style-5',
  props: {
    title: {
      type: String,
      default: ""
    },
    headlineClass: {
      type: String,
      default: ''
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.publicTitle {
  // width: 442px;
    margin-bottom: 20px;
  .c-title {
    font-size: 28px;
    font-family: YouSheBiaoTiHei;
    text-align: left;
    color: #ffffff;
    line-height: 26px;
    letter-spacing: 1px;
    text-shadow: 0px 2px 4px 0px #1c4696;
    margin-bottom: 5px;
  }
  .c-img {
    width: 100%;
    height: 6px;
    background: url("./images/line-5-1@2x.png") center center no-repeat;
    background-size: 100% 100%;
  }
  }
</style>