<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div class="tooltipBg">
        <div class="tooltipImg">
          <img :src="bgImg" alt="" />
        </div>
        <div class="tooltipInfo">
          <p class="tipTitle">{{ text }}</p>
          <p class="tip1">{{ dataNum }}</p>
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
    .tooltipBg {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      background: rgba(96, 204, 250, 0.1);
      border-radius: 4px;
      .tooltipImg {
        width: 4px;
        height: 20px;
        display: flex;
        align-content: center;
        img {
          max-width: 100%;
        }
      }
      .tooltipInfo {
        width: 100%;
        .tipTitle {
          font-size: 14px;
          font-family: PingFangSC;
          font-weight: 400;
          text-align: center;
          color: #7fd7ff;
          line-height: 20px;
        }
        .tip1 {
          font-size: 14px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: center;
          color: #ffffff;
          line-height: 14px;
        }
      }
    }
  }
}
</style>
