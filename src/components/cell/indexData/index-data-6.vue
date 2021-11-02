<template>
  <div class="indexData">
    <div class="tooltipBox" :style="[border, background]">
      <div class="tooltipBg">
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
  name: "indexData6",
  data() {
    return {};
  },
  props: {
    num: {
      type: Object,
      default: {}
    },
    iconImg: {
      type: String,
      default: ""
    },
    text: {
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
    border: function() {
      return {
        border: this.borderStyle
      };
    },
    background: function() {
      return {
        background: this.backgroundStyle
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
