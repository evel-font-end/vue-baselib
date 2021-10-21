<template>
  <div class="indexData">
    <div class="tooltipBox" :style="[border, background]">
      <div class="tooltipBg">
        <div class="tooltipImg" :style="iconBgStyle">
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
    text: {
      type: Object,
      default: {}
    },
    iconClass: {
      type: String,
      default: ""
    },
    borderStyle: {
      type: String,
      default: ""
    },
    backgroundStyle: {
      type: String,
      default: ""
    },
    iconStyle: {
      type: Object,
      default: {}
    },
    iconBgStyle: {
      type: Object,
      default: {}
    }
  },
  computed: {
    border: function() {
      return {
        border: this.borderStyle
      };
    },
    background: function() {
      return {
        background: this.backgroundStyle
      };
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
    background: rgba(0, 64, 112, 0.55);
    border: 1px solid;
    border-image: linear-gradient(270deg, #0098ad, #00dfff 51%, #0098ad) 1 1;
    .tooltipBg {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      padding-left: 20px;
      .tooltipImg {
        width: 46px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(207deg, #08ebf2 14%, #28baf8 86%);
        border-radius: 50%;
        i {
          font-size: 26px;
          color: #ffffff;
        }
      }
      .tooltipInfo {
        margin-left: 15px;
        .tipTitle {
          font-size: 14px;
          font-family: PingFangSC;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 14px;
        }
        .tip1 {
          font-size: 24px;
          font-family: DINAlternate;
          font-weight: 700;
          text-align: left;
          color: #ffffff;
          line-height: 30px;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
