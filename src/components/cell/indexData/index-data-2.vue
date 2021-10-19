<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div
        class="tooltipBg"
        :style="{ backgroundImage: bgImg ? 'url(' + bgImg + ')' : '' }"
      >
        <div class="tooltipImg">
          <img :src="iconImg" alt="" />
        </div>
        <div class="tooltipInfo">
          <p class="tipTitle" :style="text.style">{{ text.value }}</p>
          <p class="tip1" :style="num.style">{{ num.value }}</p>
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
    iconImg: {
      type: String,
      default: ""
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
      padding-left: 20px;
      background: url("./images/indexdata2.png") center center no-repeat;
      background-size: 100% 100%;
      .tooltipImg {
        width: 90px;
        height: 75px;
        display: flex;
        align-content: center;
        img {
          max-width: 100%;
        }
      }
      .tooltipInfo {
        margin-left: 15px;
        .tipTitle {
          font-size: 18px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: left;
          color: #ffffff;
          line-height: 30px;
        }
        .tip1 {
          font-size: 26px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: left;
          color: #ffffff;
          line-height: 30px;
          text-shadow: 0px 6px 4px 0px #004f7e;
        }
      }
    }
  }
}
</style>
