<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div class="tooltipBg" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
        <div class="tooltipImg">
          <img :src="iconImg" alt="" />
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
  name: "indexData15",
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
    },
    iconImg: {
      type: String,
      default: ""
    }
  },
  methods: {}
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
      width: 100%;
      height: 100%;
      padding-top: 27px;
      background-position: center center;
      background-repeat: no-repeat;
      // background: url("./images/indexdata7.png") center center no-repeat;
      background-size: 100% 100%;
      .tooltipImg {
        width: 53px;
        height: 73px;
        display: flex;
        margin: 0 auto;
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
          color: #ffffff;
          line-height: 22px;
        }
        .tip1 {
          font-size: 26px;
          font-family: PangMenZhengDao;
          text-align: center;
          color: #bcf5ff;
          line-height: 36px;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
