<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div class="tooltipBg">
        <div class="tooltipImg">
          <img :src="iconImg" alt="" />
        </div>
        <div class="tooltipInfo">
          <p class="tipTitle" :style="text.style">{{ text.value }}</p>
          <p class="tip1" :style="num.style">
            {{ num.value
            }}<span class="unit" :style="unit.style">{{ unit.value }}</span>
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
    unit: {
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
    .tooltipBg {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      .tooltipImg {
        width: 90px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          max-width: 100%;
        }
      }
      .tooltipInfo {
        margin-left: 13px;
        .tipTitle {
          font-size: 14px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: left;
          color: #ffffff;
          line-height: 30px;
        }
        .tip1 {
          font-size: 26px;
          font-family: PangMenZhengDao;
          text-align: left;
          color: #ffffff;
          line-height: 30px;
          .unit {
            font-size: 14px;
            font-family: PingFangSC;
            font-weight: 400;
            text-align: left;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
