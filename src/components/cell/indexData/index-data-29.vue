<!--
 * @Author: your name
 * @Date: 2021-11-01 14:49:24
 * @LastEditTime: 2021-11-02 17:27:50
 * @LastEditors: Please set LastEditors
 * @Description: 3G基站组件
 * @FilePath: \task_broad_webd:\project\GIT\vue-baselib\src\components\cell\indexData\index-data-29.vue
-->
<template>
  <div class="indexData">
    <ul class="top_right">
      <li :style="backgroundStyle">
        <div
          class="imgBox"
          :style="{ backgroundImage: 'url(' + iconImg + ')' }"
        >
          <i :class="icon.class" :style="icon.style"></i>
        </div>
        <div class="title">
          <p :style="title.style">{{ title.value }}</p>
        </div>
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
  name: "indexData29",
  data() {
    return {};
  },
  props: {
    title: {
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
    iconImg: {
      type: String,
      default: ""
    },
    icon: {
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
      background: linear-gradient(
        270deg,
        rgba(5, 223, 243, 0.15),
        rgba(2, 188, 227, 0.29) 99%
      );

      .title {
        width: 80px;
        height: 100%;
        background: linear-gradient(
          270deg,
          rgba(5, 188, 243, 0.22) 1%,
          rgba(29, 50, 116, 0.84) 99%
        );
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 7px;
        p {
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          color: #ffffff;
        }
      }
      .right {
        width: 0;
        flex: 1;
        padding: 0 10px;
        p {
          display: flex;
          justify-content: space-between;
          align-items: center;
          & span:first-child {
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Semibold;
            font-weight: 600;
            text-align: left;
            color: #88d7fd;
            line-height: 17px;
          }
          & span:last-child {
            font-size: 12px;
            font-family: PingFangSC, PingFangSC-Semibold;
            font-weight: 600;
            text-align: right;
            color: #ffffff;
            line-height: 17px;
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
