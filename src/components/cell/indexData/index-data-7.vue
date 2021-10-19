<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div
        class="tooltipBg"
        :style="{ backgroundImage: bgImg ? 'url(' + bgImg + ')' : '' }"
      >
        <!-- <div class="tooltipImg">
          <img :src="bgImg" alt="" />
        </div> -->
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
    .tooltipBg {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding-left: 10px;
      background: url("./images/indexdata7.png") center center no-repeat;
      background-size: 100% 100%;
      .tooltipImg {
        width: 47px;
        height: 44px;
        display: flex;
        align-content: center;
        img {
          max-width: 100%;
        }
      }
      .tooltipInfo {
        .tipTitle {
          font-size: 16px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: center;
          color: #b7e9ff;
          line-height: 26px;
        }
        .tip1 {
          font-size: 26px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: center;
          color: #ffffff;
          line-height: 30px;
        }
      }
    }
  }
}
</style>
