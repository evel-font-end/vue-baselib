<template>
  <div class="indexData">
    <div class="tooltipBox">
      <div class="tooltipBg" :style="{ backgroundImage: 'url(' + bgImg + ')' }">
        <div class="tooltipImg">
          <i :class="icon.class" :style="icon.style"></i>
        </div>
        <div class="tooltipInfo">
          <p class="tip1" :style="num.style">{{ num.value }}</p>
          <p class="tipTitle" :style="text.style">{{ text.value }}</p>
        </div>
        <div class="btnImg">
          <p class="btn" :style="{ backgroundImage: 'url(' + btnImg + ')' }">
            <span :style="btn.style">
              {{btn.value}}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "indexData14",
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
    text: {
      type: Object,
      default: {}
    },
    btnImg: {
      type: String,
      default: ""
    },
    icon: {
      type: Object,
      default: {}
    },
    btn: {
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
    .tooltipBg {
      width: 100%;
      height: 100%;
      background-position: center center;
      background-repeat: no-repeat;
      // background: url("./images/indexdata7.png") center center no-repeat;
      background-size: 100% 100%;
      .tooltipImg {
        // width: 47px;
        height: 90px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        i {
          font-size: 42px;
        }
      }
      .tooltipInfo {
        .tipTitle {
          font-size: 16px;
          font-family: PingFangSC;
          font-weight: 600;
          text-align: center;
          color: #ffffff;
          line-height: 22px;
        }
        .tip1 {
          margin-top: 25px;
          font-size: 28px;
          font-family: PangMenZhengDao;
          text-align: center;
          color: #bcf5ff;
          line-height: 30px;
          letter-spacing: 1px;
        }
      }
      .btnImg {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 10px;
        .btn {
          cursor: pointer;
          width: 65px;
          height: 35px;
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          text-align: center;
          span {
            font-size: 14px;
            font-family: PingFangSC;
            font-weight: 600;
            line-height: 35px;
            color: #ffffff;
            letter-spacing: 0px;
          }
        }
      }
    }
  }
}
</style>
