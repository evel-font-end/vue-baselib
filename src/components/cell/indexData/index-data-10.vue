<template>
  <div class="indexData">
    <div class="building-list-box" :style="boxStyle">
      <div class="building-list-box-left">
        <div class="building-sign">
          <div
            :class="['building-sign-icon', 'icon', icon.class]"
            :style="icon.style"
          ></div>
        </div>
        <div class="building-list-box-left-title" :style="buildTitle.style">{{buildTitle.value}}</div>
        <div class="building-list-box-left-tong" :style="timeText.style">{{timeText.value}}</div>
      </div>
      <div class="building-list-box-right" :style="num.style">{{num.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexData10",
  data() {
    return {};
  },
  props: {
    iconClass: {
      type: String,
      default: ""
    },
    buildTitle: {
      type: Object,
      default: {}
    },
    timeText: {
      type: Object,
      default: {}
    },
    num: {
      type: Object,
      default: {}
    },
    boxStyle: {
      type: Object,
      default: {}
    },
    icon: {
      type: Object,
      default: {}
    }
  }
};
</script>

<style lang="less" scoped>
.indexData {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .building-list {
    &-box {
      width: 100%;
      height: 100%;
      background: linear-gradient(
        270deg,
        rgba(5, 223, 243, 0),
        rgba(2, 188, 227, 0.29) 99%
      );
      border-radius: 54px 0 0 54px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px 0 30px;
      margin-top: 10px;
      position: relative;
      .building-sign {
        width: 42px;
        height: 42px;
        border-radius: 50%;
        position: absolute;
        left: -21px;
        top: 9px;
        background: linear-gradient(146deg, #00d0e6 12%, #006f86 83%);
        padding: 1px;
        &-icon {
          background: linear-gradient(180deg, #31bfec, #00476e);
          border-radius: 50%;
          height: 100%;
          font-size: 24px;
          font-weight: normal;
          color: #fff;
          line-height: 40px;
          text-align: center;
        }
      }
      &-left {
        &-title {
          /*width: 67px;*/
          height: 25px;
          font-size: 18px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: center;
          color: #88d7fd;
          margin-bottom: 4px;
        }
        &-tong {
          width: 50px;
          height: 20px;
          opacity: 1;
          background: #036f85;
          border-radius: 3px;
          color: #fff;
          font-size: 14px;
          text-align: center;
          /*margin-top: 2px;*/
        }
      }
      &-right {
        font-size: 24px;
        font-family: PingFangSC;
        font-weight: 600;
        color: #fff;
        line-height: 26px;
      }
    }
  }
}
</style>
