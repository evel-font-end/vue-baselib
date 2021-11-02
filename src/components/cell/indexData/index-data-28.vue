<!--
 * @Author: your name
 * @Date: 2021-11-01 10:23:20
 * @LastEditTime: 2021-11-02 17:27:43
 * @LastEditors: Please set LastEditors
 * @Description: 富力盈通大厦(无业务)组件
 * @FilePath: \task_broad_webd:\project\GIT\vue-baselib\src\components\cell\indexData\index-data-28.vue
-->
<template>
  <div class="indexData">
    <ul class="top_right">
      <li :style="backgroundStyle">
        <div class="icon">
          <i :class="icon.class" :style="icon.style"></i>
        </div>
        <div class="right">
          <p class="title" :style="title.style">{{ title.value }}</p>
          <p class="common">
            <span v-for="(item, index) in info" :style="item.style" :key="index">{{item.value}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "indexData28",
  data() {
    return {};
  },
  props: {
     backgroundStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    icon: {
      type: Object,
      default: () => {
        return {};
      }
    },
    title: {
      type: Object,
      default: () => {
        return {};
      }
    },
    info: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  mounted() {},
  methods: {}
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
      display: flex;
      padding: 6px;
      width: 100%;
      height: 100%;
      background: rgba(155, 205, 255, 0.1);
      border: 1px solid #007ca5;
      .icon {
        width: 56px;
        height: 56px;
        padding: 3px 0;
        background: linear-gradient(
          312deg,
          rgba(0, 101, 134, 0.64),
          rgba(0, 106, 158, 0.35) 95%
        );
        border: 1px solid #007ca5;
        text-align: center;
        i {
          font-size: 32px;
          color: #3fd6f1;
        }
      }
      .right {
        width: 0;
        flex: 1;
        padding: 0 10px;
        .title {
          font-size: 12px;
          font-family: Helvetica;
          text-align: left;
          color: #ffffff;
          line-height: 12px;
        }
        .common {
          height: 80%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          span {
            display: inline-block;
            width: 50%;
            height: 50%;
            font-size: 12px;
            font-family: Helvetica;
            text-align: left;
            color: #9bcdff;
            line-height: 30px;
          }
        }
      }
    }
  }
}
</style>
