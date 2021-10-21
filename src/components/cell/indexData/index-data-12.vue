<template>
  <div class="indexData">
    <div class="tooltipBox" :style="[borderStyle, backgroundStyle]">
      <div class="tooltipImg">
        <img :src="iconImg" alt="">
      </div>
      <div class="tooltipBg">
        <div class="tooltipInfo">
          <p class="tipTitle" :style="text.style">{{ text.value }}</p>
          <p class="tip1" :style="num.style">
            {{ num.value }}<span :style="unit.style">{{ unit.value }}</span>
          </p>
        </div>
        <div class="tooltipProgress">
          <electricLine
            :startColor="progressBgStyle.startColor"
            :endColor="progressBgStyle.endColor"
            :width="`100`"
            height=".3125rem"
          />
          <electricLine
            :endColor="progressValueStyle.endColor"
            :startColor="progressValueStyle.startColor"
            :width="`${num.value}`"
            height=".3125rem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import electricLine from "./electricLine.vue";
export default {
  data() {
    return {};
  },
  components: {
    electricLine
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
    },
    unit: {
      type: Object,
      default: {}
    },
    progressBgStyle: {
      type: Object,
      default: {}
    },
    progressValueStyle: {
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
    position: relative;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      270deg,
      rgba(12, 144, 174, 0.18) 1%,
      rgba(12, 144, 174, 0.1)
    );
    border: 1px solid;
    border-image: linear-gradient(90deg, #00c8ff, rgba(8, 185, 234, 0.1)) 1 1;
    .tooltipImg {
      position: absolute;
      left: -4px;
      top: 30%;
      width: 3px;
      height: 18px;
      img {
        max-width: 100%;
      }
    }
    .tooltipBg {
      padding: 0 5px;
      width: 100%;
      height: 100%;
      .tooltipProgress {
        height: 50%;
        position: relative;
        #electricLine {
          position: absolute;
          left: 0;
          top: 8px;
          right: 0;
        }
      }
      .tooltipInfo {
        // width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 7px;
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
          text-align: right;
          color: #ffffff;
          line-height: 21px;
          text-shadow: 0px 4px 7px 0px rgba(76, 19, 75, 0.47);
        }
      }
    }
  }
}
</style>
