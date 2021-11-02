<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div class="tooltipBg" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
        <!-- <div class="tooltipImg">
          <i :class="icon.class" :style="icon.style"></i>
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
  name: "indexData21",
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
    display: flex;
    flex-direction: column;
    align-items: center;
    .tooltipBg {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .tooltipImg {
        position: absolute;
        bottom: 2px;
        right: 12px;
        font-size: 14px;
        color: #ffffff;
      }
      .tooltipInfo {
        text-align: center;
        .tipTitle {
          font-size: 16px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #07f3fc;
          line-height: 22px;
          text-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.5);
        }
        .tip1 {
          display: inline-block;
          width: 22px;
          height: 22px;
          background: rgba(255, 255, 255, 0);
          border: 1px solid #ffffff;
          font-size: 12px;
          font-family: PangMenZhengDao;
          text-align: left;
          color: #ffffff;
          line-height: 22px;
        }
      }
    }
  }
}
</style>
