<!--
 * @Author: your name
 * @Date: 2021-11-01 14:49:24
 * @LastEditTime: 2021-11-02 17:27:56
 * @LastEditors: Please set LastEditors
 * @Description: 审计厅省信息中心琼山区审计监督局FE03…
 * @FilePath: \task_broad_webd:\project\GIT\vue-baselib\src\components\cell\indexData\index-data-29.vue
-->
<template>
  <div class="indexData">
    <ul class="top_right">
      <li :style="backgroundStyle">
        <p class="title">
          <span class="index" :style="title.index.style">{{title.index.value}}</span>
          <span class="text" :title="title.text.value" :style="title.text.style">{{title.text.value}}</span>
        </p>
        <div class="label">
          <span v-for="(item, index) in info" :key="index" :style="item.name.style">{{item.name.value}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "indexData30",
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
      list-style-type:none;
      width: 100%;
      height: 100%;
      padding-left: 22px;
      background: linear-gradient(
        270deg,
        rgba(109, 195, 225, 0.04),
        rgba(58, 145, 191, 0.28) 100%
      );
      border: 1px solid;
      border-image: linear-gradient(
          270deg,
          rgba(0, 173, 226, 0.35),
          #00ade2 100%
        )
        1 1;
      border-left: 2px solid #00c5ff;
      .title {
        width: 86%;
        height: 50%;
        display: flex;
        align-items: center;
        .index {
          font-size: 14px;
          font-family: DINAlternate, DINAlternate-Bold;
          font-weight: 700;
          text-align: left;
          color: #0cdfe6;
          line-height: 12px;
          margin-right: 10px;
          margin-left: 2px;
        }
        .text {
          width: 100%;
          font-size: 14px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 16px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          word-break: break-all;
        }
      }
      .label {
        width: 100%;
        span {
          display: inline-block;
          padding: 6px 4px;
          background: linear-gradient(
            135deg,
            rgba(37, 125, 170, 0.32),
            rgba(39, 112, 178, 0.72)
          );
          box-shadow: 0px 5px 4px 0px rgba(16, 46, 97, 0.22);
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: center;
          color: #99cbff;
          line-height: 12px;
          margin-right: 10px;
          margin-bottom: 5px;
        }
      }
    }
  }
}
</style>
