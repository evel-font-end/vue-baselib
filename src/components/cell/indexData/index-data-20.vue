<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div
        class="tooltipBg"
        :style="{ backgroundImage: 'url(' + topBgImg + ')' }"
      >
        <!-- <div class="tooltipImg">
          <img :src="iconImg" alt="" />
        </div> -->
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
    topBgImg: {
      type: String,
      default: ""
    },
    bottomBgImg: {
      type: String,
      default: ""
    },
    text: {
      type: Object,
      default: {}
    },
    btnText: {
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
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 82px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      /* .tooltipImg {
        width: 53px;
        height: 73px;
        display: flex;
        margin: 0 auto;
        img {
          max-width: 100%;
        }
      } */
      .tooltipInfo {
        width: 100%;
        height: 100%;
        /* display: flex;
        flex-direction: column;
        align-items: center; */
        .tipTitle {
          height: 50%;
          font-size: 18px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          text-align: center;
          background-image: linear-gradient(180deg, #ffffff, #6ed6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          line-height: 60px;
          letter-spacing: 1px;
        }
        .tip1 {
          height: 50%;
          background-image: linear-gradient(180deg, #ffffff 1%, #b6f6ff 99%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 20px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          text-align: center;
          line-height: 28px;
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
