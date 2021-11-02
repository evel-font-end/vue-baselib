<template>
  <div class="indexData">
    <div class="tooltipBox" :style="{ backgroundImage: 'url(' + gifImg + ')' }">
      <div class="tooltipBg" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
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
  name: "indexData1",
  data() {
    return {};
  },
  props: {
    num: {
      type: Object,
      default: () => {
        return {};
      }
    },
    gifImg: {
      type: String,
      default: ""
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
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    .tooltipBg {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      padding-left: 30px;
      // background: url("./images/gray_bg.png") center center no-repeat;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .tooltipImg {
        width: 80px;
        height: 70px;
        display: flex;
        align-content: center;
        img {
          max-width: 100%;
        }
      }
      .tooltipInfo {
        margin-left: 20px;
        .tipTitle {
          font-size: 20px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          text-align: left;
          color: #ffffff;
          line-height: 28px;
        }
        .tip1 {
          font-size: 32px;
          font-family: PangMenZhengDao;
          text-align: left;
          color: #fb7757;
          line-height: 37px;
        }
      }
    }
  }
}
</style>
