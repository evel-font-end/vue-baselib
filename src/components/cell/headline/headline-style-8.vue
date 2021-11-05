<template>
  <div class="headline-container">
    <div class="headline-title">
      {{title}}
     <span class="title"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headline-style-8',
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
    color: #fff;
    text-align: left;
    padding-left: 10px;
    width: 456px;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 500;
    opacity: 1;
    background: linear-gradient(
      90deg,
      rgba(37, 125, 170, 0.32),
      rgba(39, 155, 178, 0)
    );
    border: 1px solid;
    border-right: none;
    border-image: linear-gradient(
        to right,
        rgba(34, 147, 214, 1),
        rgba(41, 234, 224, 0)
      )
      1 1;
    position: relative;
    .title {
      display: inline-block;
      width: 7px;
      height: 15px;
      position: absolute;
      top: 30%;
      left: -3px;
      background-image: url("./images/rhombus@2x.png");
      background-repeat: no-repeat;
      background-size: cover;
    }
    // &::before {
    //   position: absolute;
    //   left: 0;
    //   bottom: 0;
    //   content: '';
    //   height: 1px;
    //   width: 409px;
    //   background: linear-gradient(270deg,rgba(32,45,85,0.20), #108dff 98%);
    // }

  }
}
// .box-title {
//     color: #fff;
//     text-align: left;
//     height: pxrem(36px);
//     padding-left: pxrem(10px);
//     line-height: pxrem(36px);
//     font-size: pxrem(16px);
//     opacity: 1;
//     background: linear-gradient(
//       90deg,
//       rgba(37, 125, 170, 0.32),
//       rgba(39, 155, 178, 0)
//     );
//     border: 1px solid;
//     border-right: none;
//     border-image: linear-gradient(
//         to right,
//         rgba(34, 147, 214, 1),
//         rgba(41, 234, 224, 0)
//       )
//       1 1;
//     position: relative;
//     .border-left {
//       display: inline-block;
//       width: 7px;
//       height: 15px;
//       position: absolute;
//       top: 30%;
//       left: -3px;

//       background-image: url("~@/common/images/circuit/borderLeftDot.png");
//       background-repeat: no-repeat;
//       background-size: cover;
//     }
//   }
</style>