<!--
 * @Author: your name
 * @Date: 2021-11-01 14:49:24
 * @LastEditTime: 2021-11-02 14:47:29
 * @LastEditors: Please set LastEditors
 * @Description: 传输网元
 * @FilePath: \task_broad_webd:\project\GIT\vue-baselib\src\components\cell\indexData\index-data-29.vue
-->
<template>
  <div class="indexData">
    <ul class="top_right">
      <li :style="backgroundStyle">
        <div class="title">
          <p class="name" :style="tag.name.style">{{ tag.name.value }}</p>
          <p class="label" :style="tag.label.style">{{ tag.label.value }}</p>
        </div>
        <div class="lineBorder" :style="borderStyle"></div>
        <div class="right">
          <p v-for="(item, index) in info" :key="index">
            <span :style="item.name.style">{{ item.name.value }}</span>
            <span :style="item.num.style">{{ item.num.value }}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "index-data-31",
  data() {
    return {};
  },
  props: {
    tag: {
      type: Object,
      default: () => {
        return {};
      }
    },
    backgroundStyle: {
      type: Object,
      default: () => {
        return {};
      }
    },
    info: {
      type: Array,
      default: () => {
        return [];
      }
    },
    borderStyle: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  mounted() {},
  methods: {},
  watch: {}
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
      width: 100%;
      height: 100%;
      background: linear-gradient(180deg, rgba(7, 58, 95, 0.63), undefined 97%);
      border: 1px solid;
      border-image: linear-gradient(
          360deg,
          rgba(14, 180, 212, 0.19) 39%,
          rgba(45, 180, 255, 0.69) 100%
        )
        1 1;
      box-shadow: 7px 5px 7px 0px rgba(10, 42, 59, 0.5);
      padding: 10px 0;
      .title {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 116px;
        height: 100%;
        padding-left: 16px;
        /* border-right: 1px solid;
        border-image: linear-gradient(
            180deg,
            rgba(0, 215, 233, 0),
            rgba(0, 233, 232, 0.56) 52%,
            rgba(0, 215, 233, 0)
          )
          1 1; */
        // margin-right: 30px;
        .name {
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          text-align: left;
          color: #ffffff;
          line-height: 17px;
        }
        .label {
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #9bcdff;
          line-height: 17px;
        }
      }
      .lineBorder {
        width: 1px;
        height: 100%;
        border: 1px solid;
        border-image: linear-gradient(
            180deg,
            rgba(0,215,233,0),
            rgba(0,233,232,0.56) 52%,
            rgba(0,215,233,0)
          )
          1 1;
      }
      .right {
        width: 0;
        flex: 1;
        padding-right: 16px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 30px;
        p {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          & span:first-child {
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: center;
            color: #9bcdff;
            line-height: 24px;
          }
          & span:last-child {
            font-size: 14px;
            font-family: DINAlternate;
            font-weight: 700;
            text-align: center;
            color: #ffffff;
            line-height: 12px;
          }
        }
      }
      .imgBox {
        width: 22px;
        height: 24px;
        position: absolute;
        left: -10px;
        top: 50%;
        transform: translate(0, -50%);
        background-position: center center;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        i {
          font-size: 12px;
          color: #ffffff;
        }
      }
    }
    li:nth-child(2n) {
      margin-left: 15px;
    }
  }
}
</style>
