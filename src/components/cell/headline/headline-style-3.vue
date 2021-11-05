<template>
  <div class="headline-container">
    <div class="headline-title">
     <span class="title">{{title}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headline-style-3',
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
    width: 409px;
    height: 42px;
    background-color: rgba(0,0,0,.3);
    position: relative;
    display: flex;
    border-left: 4px solid #28deff;
    .title {
      background: linear-gradient(270deg,rgba(32,45,85,0.20), #2c5b94);
      width: 409px;
      height: 42px;
      font-size: 28px;
      font-family: YouSheBiaoTiHei;
      color: #ffffff;
      padding-left: 24px;
      box-sizing: border-box;
      text-shadow: 0px 2px 4px 0px #1c4696; 
    }
    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      content: '';
      height: 1px;
      width: 409px;
      background: linear-gradient(270deg,rgba(32,45,85,0.20), #108dff 98%);
    }

  }
}
</style>