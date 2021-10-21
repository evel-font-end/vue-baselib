<template>
  <div class="indexData">
    <div class="tooltipBox" :style="[borderStyle, backgroundStyle]">
      <div class="tooltipImg">
        <img :src="iconImg" alt="" />
      </div>
      <div class="tooltipBg">
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
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(36, 60, 114, 0),
      rgba(19, 83, 134, 0.72) 80%,
      rgba(74, 111, 170, 0)
    );
    border: 1px solid;
    border-image: linear-gradient(
        270deg,
        rgba(81, 217, 250, 0),
        #28b1f2 79%,
        rgba(40, 177, 242, 0)
      )
      1 1;
    .tooltipImg {
      position: relative;
      width: 5px;
      height: 37px;
      img {
        position: absolute;
        top: 0;
        left: -5px;
        max-width: 100%;
      }
    }
    .tooltipBg {
      width: 100%;
      height: 100%;
      .tooltipInfo {
        width: 100%;
        height: 100%;
        padding: 0 13px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .tipTitle {
          font-size: 16px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: left;
          color: #d1ecff;
          line-height: 22px;
          letter-spacing: 1px;
        }
        .tip1 {
          font-size: 20px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: right;
          color: #ffffff;
          line-height: 28px;
        }
      }
    }
  }
}
</style>
