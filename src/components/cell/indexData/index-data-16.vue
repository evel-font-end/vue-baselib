<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div class="tooltipBg" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
        <!-- <div class="tooltipImg">
          <img :src="iconImg" alt="" />
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
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
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
        margin-top: 15px;
        .tipTitle {
          font-size: 20px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: center;
          color: #ffffff;
          line-height: 26px;
        }
        .tip1 {
          font-size: 28px;
          font-family: Helvetica;
          font-weight: 700;
          text-align: center;
          color: #ffffff;
          line-height: 60px;
        }
      }
    }
  }
}
</style>
