<template>
  <div class="indexData">
    <ul class="top_right">
      <li>
        <div class="imgBox">
          <img :src="iconImg" alt="" srcset="" />
        </div>
        <div class="title">
          <p :style="title1.style">{{ title1.value }}</p>
          <p :style="title2.style">{{ title2.value }}</p>
        </div>
        <div class="right">
          <div class="lineBox">
            <span :style="progress1.name.style">{{
              progress1.name.value
            }}</span>
            <div
              class="line"
              :style="{ backgroundColor: progress1.innerBackground }"
            >
              <div
                class="lineInner"
                :style="[
                  { width: progress1.value + '%' },
                  { background: progress1.outterBackground }
                ]"
              ></div>
            </div>
            <span class="rate">{{ Number(progress1.value) | setRate }} %</span>
          </div>
          <div class="lineBox">
            <span :style="progress2.name.style">{{
              progress2.name.value
            }}</span>
            <div
              class="line"
              :style="{ backgroundColor: progress2.innerBackground }"
            >
              <div
                class="lineInner"
                :style="[
                  { width: progress2.value + '%' },
                  { background: progress2.outterBackground }
                ]"
              ></div>
            </div>
            <span class="rate">{{ Number(progress2.value) | setRate }} %</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'indexData27',
  data() {
    return {
      pieChart: null,
      lineChart: null
    };
  },
  props: {
    title1: {
      type: Object,
      default: () => {return {
        value: '',
        style: {}
      }}
    },
    title2: {
      type: Object,
      default: () => {return {
        value: '',
        style: {}
      }}
    },
    backgroundStyle: {
      type: Object,
      default: () => {return {}}
    },
    iconImg: {
      type: String,
      default: () => {return {}}
    },
    progress2: {
      type: Object,
      default: () => {return {}}
    },
    progress1: {
      type: Object,
      default: () => {return {}}
    }
  },
  mounted() {},
  methods: {},
  watch: {},
  filters: {
    setRate: function(value) {
      if (!value) return 0;
      value = Math.max(0, value);
      return value.toFixed(0);
    }
  }
};
</script>

<style lang="less" scoped>
.indexData {
  width: 100%;
  height: 100%;
  .top_right {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    li {
      position: relative;
      display: flex;
      padding: 6px;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        270deg,
        rgba(135, 233, 255, 0) 1%,
        rgba(13, 188, 254, 0.26) 99%
      );
      border: 1px solid rgba(88, 229, 255, 0.27);
      border-radius: 5px;

      .title {
        width: 114px;
        height: 100%;
        padding: 3px 0;
        background: rgba(96, 204, 250, 0.1);
        border-radius: 4px;
        text-align: center;
        p {
          font-size: 16px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: center;
          color: #ffffff;
          line-height: 23px;
        }
      }
      .right {
        flex: 1;
        padding: 3px 0;
        font-size: 14px;
        color: rgba(183, 233, 255, 1);
      }
      .imgBox {
        width: 13px;
        height: 26px;
        position: absolute;
        left: -8px;
        top: 21px;
        img {
          max-width: 100%;
        }
      }
    }
    li:nth-child(2n) {
      margin-left: 15px;
    }
  }
  .lineBox {
    flex: 1;
    display: flex;
    height: 26px;
    justify-content: space-around;
    padding: 0 5px;
    .rate {
      color: white;
    }

    .line {
      width: 56px;
      position: relative;
      // background: #2262a0;
      margin-top: 5px;
      height: 6px;
      padding: 0 12px;
      border-radius: 4px;
      .lineInner {
        position: absolute;
        left: 0;
        height: 6px;
        border-radius: 15px;
        // background: linear-gradient(270deg, #ffb84f 0%, #ed586d 100%);
        /* &.blue {
          background: linear-gradient(270deg, #4fe1ff 0%, #49b8fc 100%);
        } */
      }
    }
  }
}
</style>
