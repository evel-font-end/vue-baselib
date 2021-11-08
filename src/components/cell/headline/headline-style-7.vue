<template>
  <div class="headline-container" :class="headlineClass">
    <div class="headline-title">
      {{title}}
     <span class="title">22</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headline-style-7',
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
  // width: 100%;
  // height: 100%;
  margin-bottom: 20px;
  .headline-title {
    padding-left: 12px;
    box-sizing: border-box;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
    width: 252px;
    height: 36px;
    line-height: 36px;
    background: linear-gradient(
      90deg,
      rgba(37, 125, 170, 0.32),
      rgba(39, 155, 178, 0)
    );
    border: 1px solid;
    border-left: 4px solid;
    border-right: none;
    border-image: linear-gradient(to right, #00c7fc, rgba(41, 234, 224, 0)) 1 1;
    .title {
      height: 18px;
      line-height: 18px;
      border-radius: 11px;
      display: inline-block;
      text-align: center;
      margin: 0 10px;
      padding: 0 15px;
      font-size: 16px;
      font-family: DINAlternate, DINAlternate-Bold;
      font-weight: 700;
      text-align: left;
      color: #00ccff;
    }
  }
}

</style>