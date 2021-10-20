<template>
<div class="ranking-container">
  <div v-for='(item, index) in value' :key='index'>
    <div class='item'>
      <div class='num'>{{index + 1}}</div>
      <!-- <div class="content"> -->
        <CityBldNum class='content' :obj='item' />
      <!-- </div> -->
    </div>
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
        { text: '库水位', value: 100, score: '20', isfill: true },
        { text: '内部位移', value: 100, score: '20', isfill: true },
        { text: '内部位移', value: 100, score: '20', isfill: true },
        { text: '浸润线', value: 100, score: '20', isfill: true },
        { text: '干滩监测', value: 100, score: '20', isfill: true },
        { text: '干滩监测', value: 100, score: '20', isfill: true },
        { text: '干滩监测', value: 100, score: '20', isfill: true },
        { text: '干滩监测', value: 100, score: '20', isfill: true },
        { text: '干滩监测', value: 100, score: '20', isfill: true },
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
  overflow-y: scroll;
  scrollbar-color:#203248 transparent;
  scrollbar-width:thin;
  /* 设置滚动条的样式 */
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
  // overflow: hidden;
  .item {
    box-sizing: border-box;
    height: 41px;
    // margin-bottom: 17px;
    margin-top: 15px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;

    .num {
      overflow: hidden;
      text-align: center;
      line-height: 41px;
      font-size: 26px;
      width: 41px;
      height: 41px;
      background-image: url("./images/numBgc.png");
      background-size: 100% 100%;
      background-repeat: no-repeat;
      font-family: YouSheBiaoTiHei;
      color: #ffffff;
    }
    .content {
      width: calc(100% - 50px);
      height: 41px;
      // background-color: #E98;
      // margin-bottom: 17px;
    }
    &::nth-child(1){
      // background: #1526;
      // margin-top: 25px;
    }
  }
}


</style>
