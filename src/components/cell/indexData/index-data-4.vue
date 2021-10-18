<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div class="tooltipBg">
        <div class="tooltipImg">
          <img :src="bgImg" alt="" />
        </div>
        <div class="tooltipInfo">
          <p class="tip1">{{ dataNum }}</p>
          <p class="tipTitle">{{ text }}</p>
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
    dataNum: {
      type: String,
      default: ""
    },
    bgImg: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
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
        align-content: center;
        img {
          max-width: 100%;
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
