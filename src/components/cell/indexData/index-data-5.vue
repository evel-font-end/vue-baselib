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
    borderStyle: {
      type: String,
      default: ""
    },
    backgroundStyle: {
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
      padding-left: 10px;
      background: linear-gradient(
        270deg,
        rgba(0, 193, 255, 0) 1%,
        rgba(0, 193, 255, 0.23) 51%,
        rgba(0, 193, 255, 0)
      );
      border: 1px solid;
      border-image: linear-gradient(
          90deg,
          rgba(8, 185, 234, 0.1),
          #00c8ff 53%,
          rgba(8, 185, 234, 0.1)
        )
        1 1;
      .tooltipImg {
        width: 47px;
        height: 44px;
        display: flex;
        align-content: center;
        img {
          max-width: 100%;
        }
      }
      .tooltipInfo {
        margin-left: 5px;
        .tipTitle {
          font-size: 14px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: left;
          color: #32e2f4;
          line-height: 16px;
        }
        .tip1 {
          font-size: 18px;
          font-family: YouSheBiaoTiHei;
          text-align: left;
          color: #ffffff;
          line-height: 24px;
          text-shadow: 0px 4px 7px 0px rgba(76, 19, 75, 0.47);
        }
      }
    }
  }
}
</style>
