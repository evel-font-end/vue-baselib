<template>
  <div class="indexData">
    <div class="tooltipBox" :style="[borderStyle, backgroundStyle]">
      <div class="tooltipBg">
        <div class="tooltipImg">
          <i :class="icon.class" :style="icon.style"></i>
          <img :src="iconImg" alt="" />
        </div>
        <div class="tooltipInfo">
          <p class="tipTitle" :style="text.style">{{ text.value }}</p>
          <p class="tip1" :style="num.style">
            {{ num.value }}
          </p>
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
    icon: {
      type: Object,
      default: {}
    },
    backgroundStyle: {
      type: Object,
      default: {}
    },
    borderStyle: {
      type: Object,
      default: {}
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
    background: linear-gradient(
      182deg,
      rgba(206, 245, 255, 0) 3%,
      rgba(27, 187, 230, 0.06) 98%
    );
    border: 2px solid;
    border-image: linear-gradient(
        180deg,
        rgba(30, 245, 255, 0.1),
        rgba(30, 245, 255, 0.32)
      )
      2 2;
    .tooltipBg {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      .tooltipImg {
        position: relative;
        width: 43px;
        height: 14px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
        i {
          position: absolute;
          top: -10px;
          font-size: 24px;
          background-image: linear-gradient(
            180deg,
            #24f3ff,
            rgba(84, 186, 250, 0.84)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        img {
          position: absolute;
          top: 17px;
          max-width: 100%;
        }
      }
      .tooltipInfo {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .tipTitle {
          font-size: 16px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: left;
          color: #ffffff;
          line-height: 22px;
          letter-spacing: 1px;
        }
        .tip1 {
          font-size: 20px;
          font-family: DINAlternate, DINAlternate-Bold;
          font-weight: 700;
          text-align: right;
          color: #1edfff;
          line-height: 30px;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
