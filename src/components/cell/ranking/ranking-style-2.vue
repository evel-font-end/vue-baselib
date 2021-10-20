<template>
<div class="ranking-container">
  <div v-for="(item, itemIndex) in value" :key="itemIndex" class="rankingItem">
    <i class="iconfont icon-huangguan"><span>{{itemIndex + 1}}</span></i>
    <span class="title" :title="item.text">
      {{item.text}}
    </span>
    <div class="lineBox">
      <div class="lineInner" :style="'width:' + item.score + '%'" />
    </div>
    <span class="count">
      {{item.value}}
    </span>
  </div>
</div>
</template>
<script>
import CityBldNum from "./components/cityBldNum.vue";
export default {
  name: 'RankingStyle1',
  components: {
    CityBldNum
  },
  props: {
    sid: {
      type: String,
      default: () => 'ranking1',
    },
    value: {
      type: [Array, Object],
      default: () => [
        { text: '库水位', value: 100, score: '20' },
        { text: '内部位移', value: 100, score: '20' },
        { text: '内部位移', value: 100, score: '20' },
        { text: '浸润线', value: 100, score: '20' },
        { text: '干滩监测', value: 100, score: '20' },
        { text: '干滩监测', value: 100, score: '20' },
        { text: '干滩监测', value: 100, score: '20' },
        { text: '干滩监测', value: 100, score: '20' },
        { text: '干滩监测', value: 100, score: '20' },
      ],
    },
  },

  data() {
    return {
    }
  },
  watch: {
    value(newVal) {
      this.init(newVal)
    },
  },
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
    },
  },
}
</script>
<style lang='scss' scoped>
.ranking-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 22px 0;
  overflow-y: scroll;
  scrollbar-color:#203248 transparent;
  scrollbar-width:thin;
  &::-webkit-scrollbar {
    width:5px;
    // background-color: #712;
  }
  /* 滚动槽 */
  &::-webkit-scrollbar-track {
  // -webkit-box-shadow:inset006pxrgba(0,0,0,0.3);
  border-radius:4px;
  // background-color: #77ff;
  }
  /* 滚动条滑块 */
  &::-webkit-scrollbar-thumb {
  border-radius:10px;
  background-color:#203248;
  // -webkit-box-shadow:inset006pxrgba(0,0,0,0.5);
  }
  &::-webkit-scrollbar-thumb:window-inactive {
    background-color: #203248;
  }
  .rankingItem {
      display: flex;
      font-size: 14px;
      color: white;
      margin-bottom: 17px;
      .title {
        line-height: 28px;
        width: 10%;
        text-align: left;
        overflow:hidden; //超出的文本隐藏
        text-overflow:ellipsis; //溢出用省略号显示
        white-space:nowrap; //溢出不换行
      }
      .count {
        width: 13%;
        line-height: 28px;
        font-size: 18px;
        text-align: center;
      }

      .lineBox {
        flex: 1;
        height: 29px;
        background: url("./images/rankBg.png") no-repeat 100%;
        background-size: 100%;
        position: relative;
        .lineInner {
          background: linear-gradient(270deg,#01eaff, #08a3ff);
          border-radius: 0px 100px 100px 0px;
          position: absolute;
          height: 8px;
          top: 7px;
        }
      }

      .iconfont {
        color: #E6E6E6FF;
        margin-right: 11px;
        position: relative;
        font-size: 20px;

        span {
          font-size: 14px;
          color: #757575FF;
          position: absolute;
          left: 7px;
          line-height: 28px;
        }
      }
      &:nth-of-type(1) {
        .iconfont {
          color: #EB3737FF;
          span {
            color: white;
          }
        }
      }
      &:nth-of-type(2) {
        .iconfont {
          color: #FE9319FF;
          span {
            color: white;
          }
        }
      }
      &:nth-of-type(3) {
        .iconfont {
          color: #61DBC7FF;
          span {
            color: white;
          }
        }
      }
    }
}


</style>
