<template>
  <div class="headline-container" :class="headlineClass">
    <div class="headline-title">
     <span>{{title}}</span>
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
    },
    headlineClass: {
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
  width: 70%;
  // height: 100%;
  margin-bottom: 20px;
  .headline-title {
    width: 100%;
    padding: 12px 0 12px 0;
    background-image: url('./images/title-bg-2-1@2x.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
     span {
      font-size: 26px;
      font-family: YouSheBiaoTiHei;
      text-align: left;
      color: #ffffff;
      letter-spacing: 1px;
      text-shadow: 0px 2px 4px 0px #1c4696;
      margin-left: 81px;
    }
  }
}
</style>
