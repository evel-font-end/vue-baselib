<template>
  <div class="customize-table ranking-container">
    <dv-scroll-board
      :config="tableConfig"
      style="width:100%;height:200px"
      ref="scrollBoard"
    />
  </div>
</template>
<script>
import VueSeamlessScroll from "vue-seamless-scroll";
import ScrollItem from './components/scrollItem'
export default {
  name: 'RankingStyle4',
  components: {
    VueSeamlessScroll,
    ScrollItem
  },
  props: {
    sid: {
      type: String,
      default: () => 'ranking4',
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
      tableConfig: {
        hoverPause: true,
        headerHeight: 40,
        columnWidth: [90, 314, 205, 420, 120],
        header: ["排名", "API服务", "API服务数量", "文件服务", "文件服务数量"],
        headerBGC: "#31498173",
        evenRowBGC: "transparent",
        oddRowBGC: "#31498173",
        rowNum: 4,
        waitTime: 3000,
        indexHeader: "排名",
        data: [],
      },
    }
  },
  watch: {
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
@import './scss/customizeTable.scss';
.ranking-container{
  width: 100%;
  height: 100%;
  /deep/ .dv-scroll-board {
    font-size: 16px;
    .header {
      color: #76f9fcff;
      border-top: 1px solid #47abceff;
      border-bottom: 1px solid #47abceff;
    }
    .iconfont {
      position: relative;
      font-size: 18px;
      span {
        color: white;
        left: 7px;
        bottom: -13px;
        font-size: 14px;
        position: absolute;
      }
    }
    .rank {
      text-align: center;
      width: 20px;
      display: inline-block;
    }
  }
}


</style>
