<template>
  <div class="headline-container">
    <header>
         <i class="iconfont  icon-biaoge box-icon"></i>
         <span class="box-title">巡检排查</span>
         <span class="box-line"></span>
    </header>
  </div>
</template>

<script>
export default {
  name: 'headline-style-9'
}
</script>

<style lang="scss" scoped>
.headline-container {
   header {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .box-icon {
      display: inline-block;
      width: 26px;
      height: 26px;
      margin-right: 8px;
      font-size: 22px;
      background: radial-gradient(rgba(0,255,255,0.43), rgba(62,181,255,0.14), rgba(77,163,255,0.00));
      border-radius: 50%;
      line-height: 26px;
      text-align: center;
    }
    .box-title {
      font-size: 22px;
      margin-right: 36px;
    }
    .box-line {
      width: 364px;
      height: 1px;
      opacity: 0.85;
      border: 1px solid;
      border-image: linear-gradient(270deg, rgba(0,181,255,0.00), #00b5ff) 2 2;
      position: relative;
      &:before {
        content: '';
        display: inline-block;
        width: 27px;
        height: 6px;
        opacity: 0.85;
        background: #00b5ff;
        position: absolute;
        left: -27px;
        top: -3px;
      }
    }
  }
}
</style>