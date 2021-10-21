<template>
  <div class="indexData">
    <div class="tooltipBox" :style="[border, background]">
      <div class="tooltipBg">
        <div class="tooltipImg" :style="iconBgStyle">
          <span :style="iconTitle.style">{{ iconTitle.value }}</span>
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
    text: {
      type: Object,
      default: {}
    },
    iconTitle: {
      type: Object,
      default: {}
    },
    iconBgStyle: {
      type: Object,
      default: {}
    },
    backgroundStyle: {
      type: String,
      default: ""
    },
    borderStyle: {
      type: String,
      default: ""
    }
  },
  computed: {
    background: function() {
      return {
        background: this.backgroundStyle
      }
    },
    border: function() {
      return {
        border: this.borderStyle
      }
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
      background: linear-gradient(
        270deg,
        rgba(0, 193, 255, 0) 1%,
        rgba(0, 193, 255, 0.23) 51%,
        rgba(0, 193, 255, 0)
      );
      border: 1px solid;
      border-image: linear-gradient(90deg, #6094c5, #047bff) 1 1;
      border-radius: 4px;
      .tooltipImg {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 4px;
        background: linear-gradient(
          270deg,
          rgba(4, 123, 255, 0.45),
          rgba(118, 206, 251, 0.44)
        );
        border-radius: 4px;
        span {
          font-size: 14px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: center;
          color: linear-gradient(303deg, #0ab2f9 8%, #76cdfb 84%);
          line-height: 20px;
          text-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.51),
            1px 1px 2px 0px rgba(255, 255, 255, 0.84) inset;
        }
      }
      .tooltipInfo {
        margin-left: 10px;
        .tipTitle {
          font-size: 14px;
          font-family: PingFangSC;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 20px;
          text-shadow: 0px 4px 7px 0px rgba(19, 39, 76, 0.47);
        }
        .tip1 {
          font-size: 18px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: left;
          color: #ffffff;
          line-height: 20px;
          text-shadow: 0px 4px 7px 0px rgba(19, 39, 76, 0.47);
        }
      }
    }
  }
}
</style>
