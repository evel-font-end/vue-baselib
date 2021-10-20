<template>
  <div class="list-item-border">
    <div class="list-item">
      <div :class="{ serialNum: true, serialNum_normal: index > 2 }">
        <span>{{index + 1}}</span>
      </div>
      <div class="item-info">
        <div class="item-name">
          <span>{{itemInfo.text}}</span>
          <span>{{itemInfo.value}}</span>
        </div>
        <div :class="{ 'normal-progress': index > 2 }">
          <el-progress
            :percentage="+itemInfo.score * 100"
            :color="customColor"
            :format="format"
            stroke-linecap="dashboard" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemInfo: {
      type: Object,
      default: {},
    },
    index: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      customColor:
        "linear-gradient(270deg,rgba(255,255,255,0.84) 2%, rgba(231,39,39,0.64))",
    };
  },
  methods: {
    format() {
      return "";
    },
  },
};
</script>

<style lang="less">
// .list-item-border {
//   margin-bottom: 14px;
//   height: 60px;
//   width: 100%;
//   background: linear-gradient(
//     270deg,
//     rgba(76, 136, 210, 0),
//     rgba(37, 80, 167, 0.59)
//   );
//   border: 1px solid;
//   border-radius: 1px 0px 1px 1px 0px 1px;
//   -webkit-clip-path: polygon(2% 0, 99% 0, 99% 99%, 3% 100%, 1% 86%, 1% 15%);
//   clip-path: polygon(2% 0, 99% 0, 99% 99%, 3% 100%, 1% 86%, 1% 15%);
// }
.list-item {
  display: flex;
  align-items: center;
  width: 100%;
  height: 58px;
  background: url("../images/lampBorder.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // opacity: 0.29;
  margin-bottom: 14px;
  // background: linear-gradient(
  //   270deg,
  //   rgba(76, 136, 210, 0),
  //   rgba(37, 80, 167, 0.59)
  // );
  // border: 1px solid;
  // border-image: linear-gradient(270deg, rgba(151, 204, 255, 0.04), #5e9dff) 1 1;
  // border-radius: 1px 0px 1px 1px 0px 1px;
  // -webkit-clip-path: polygon(4% 0, 100% 0, 100% 99%, 4% 100%, 0 86%, 0 15%);
  // clip-path: polygon(4% 0, 100% 0, 100% 99%, 4% 100%, 0 86%, 0 15%);
}
.serialNum {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  // background: #134c82;
  background-image: url(../images/lamp_circle.png);
  background-repeat: no-repeat;
  background-size: 100%;
  margin-right: 13px;
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.serialNum_normal {
  background-image: url(../images/lamp_circle2.png);
}
.serialNum span {
  font-size: 20px;
  font-family: PingFangSC, PingFangSC-Semibold;
  font-weight: 600;
  text-align: left;
  color: #ffffff;
}
.item-info {
  width: 85%;
}
.item-name {
  display: flex;
  justify-content: space-between;
}
.item-name span {
  font-size: 18px;
  font-family: PingFangSC, PingFangSC-Regular;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
}
/* 进度条样式 */
.el-progress .el-progress-bar {
  padding-right: unset !important;
}
.el-progress .el-progress-bar__outer {
  border-radius: unset;
  background: rgba(32, 67, 114, 1);
}
.el-progress .el-progress-bar__inner {
  border-radius: unset;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.84) 2%,
    rgba(231, 39, 39, 0.64)
  );
}
.el-progress-bar .el-progress__text {
  margin-left: unset;
}
.normal-progress {
  .el-progress {
    .el-progress-bar__inner {
      background: linear-gradient(270deg, #5bfff6, rgba(39, 167, 231, 0.64));
    }
  }
}
</style>