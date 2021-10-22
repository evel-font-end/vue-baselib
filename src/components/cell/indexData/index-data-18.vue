<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div class="tooltipBg" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
        <div class="tooltipImg">
          <i :class="icon.class" :style="icon.style"></i>
        </div>
        <div class="tooltipInfo">
          <!-- <p class="tip1" :style="num.style">{{ num.value }}</p> -->
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
    bgImg: {
      type: String,
      default: ""
    },
    text: {
      type: Object,
      default: {}
    },
    icon: {
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      .tooltipImg {
        i {
          font-size: 36px;
          color: #04f7f0;
          box-shadow: 0px 7px 11px 0px rgba(0, 92, 134, 0.92);
        }
      }
      .tooltipInfo {
        width: 100%;
        height: 53%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .tipTitle {
          position: absolute;
          bottom: 17px;
          font-size: 18px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: center;
          color: #ffffff;
          line-height: 28px;
        }
        /* .tip1 {
          position: absolute;
          top: -15px;
          font-size: 26px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: center;
          color: #ffffff;
          line-height: 30px;
          text-shadow: 0px 2px 4px 0px #014253;
        } */
      }
    }
  }
}
</style>
