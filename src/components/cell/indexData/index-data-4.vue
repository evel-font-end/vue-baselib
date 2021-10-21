<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div
        class="tooltipBg"
        :style="{ backgroundImage: bgImg ? 'url(' + bgImg + ')' : '' }"
      >
        <div class="tooltipImg">
          <i :class="iconClass" :style="iconStyle"></i>
        </div>
        <div class="tooltipInfo">
          <p class="tip1" :style="num.style">{{ num.value }}</p>
          <p class="tipTitle" :style="text.style">{{ text.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    num: {
      type: Object,
      default: {}
    },
    iconClass: {
      type: String,
      default: ""
    },
    iconStyle: {
      type: Object,
      default: {}
    },
    bgImg: {
      type: String,
      default: ""
    },
    text: {
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
  .tooltipBox {
    width: 100%;
    height: 100%;
    // background: url("./images/tooltip.gif") center center no-repeat;
    // background-size: 100% 100%;
    .tooltipBg {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      padding-left: 10px;
      background: url("./images/indexdata4.png") center center no-repeat;
      background-size: 100% 100%;
      .tooltipImg {
        width: 58px;
        height: 58px;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          font-size: 36px;
          background-image: linear-gradient(180deg, #04f7f0, #1cc8ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .tooltipInfo {
        margin-left: 5px;
        .tipTitle {
          font-size: 16px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: left;
          color: #b7e9ff;
          line-height: 22px;
        }
        .tip1 {
          font-size: 20px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: left;
          color: #ffffff;
          line-height: 26px;
        }
      }
    }
  }
}
</style>
