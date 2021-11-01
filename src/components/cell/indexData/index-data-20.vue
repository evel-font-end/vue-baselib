<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div class="tooltipBg" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
        <div class="tooltipImg">
          <i :class="icon.class" :style="icon.style"></i>
        </div>
      </div>
      <div class="tooltipInfo">
        <p class="tipTitle" :style="text.style">{{ text.value }}</p>
        <p class="tip1" :style="num.style">
          {{ num.value }}<span :style="unit.style">{{ unit.value }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index-data-20",
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
    iconImg: {
      type: String,
      default: ""
    },
    text: {
      type: Object,
      default: {}
    },
    unit: {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    .tooltipBg {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80px;
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
    }
    .tooltipInfo {
      /* width: 100%;
      height: 100%; */
      /* display: flex;
        flex-direction: column;
        align-items: center; */
      .tipTitle {
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: center;
        color: #ffffff;
        line-height: 20px;
        margin-top: 10px;
        margin-bottom: 6px;
      }
      .tip1 {
        font-size: 26px;
        font-family: PangMenZhengDao;
        text-align: left;
        color: #ffffff;
        line-height: 30px;
        span {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Semibold;
        }
      }
    }
  }
}
</style>
