<template>
<div class="ranking-container" :class="echartOptions.class">
  <VueSeamlessScroll :class-option="{ ...scrollOptions, ...echartOptions.scrollOptions}" :data="source" class="seamless-box">
    <div v-for='(item, index) in source' :key='index'>
      <div class='item'>
        <div class='num'>{{index + 1}}</div>
        <!-- <div class="content"> -->
          <CityBldNum
          class='content'
          :class="echartOptions.childClass"
          :isfill="echartOptions.isfill"
          :obj='item'
          />
        <!-- </div> -->
      </div>
    </div>
  </VueSeamlessScroll>
</div>
</template>
<script>
import VueSeamlessScroll from "vue-seamless-scroll";
import CityBldNum from "./components/cityBldNum.vue";
export default {
  name: 'RankingStyle1',
  components: {
    CityBldNum,
    VueSeamlessScroll
  },
  props: {
    sid: {
      type: String,
      default: () => 'ranking1',
    },
    source: {
      type: [Array, Object],
      default: () => [
        { name: '库水位', value: 100, score: '20' },
        { name: '内部位移', value: 100, score: '20' },
        { name: '内部位移', value: 100, score: '20' },
        { name: '浸润线', value: 100, score: '20' },
        { name: '干滩监测', value: 100, score: '20' },
        { name: '干滩监测', value: 100, score: '20' },
        { name: '干滩监测', value: 100, score: '20' },
        { name: '干滩监测', value: 100, score: '20' },
        { name: '干滩监测', value: 100, score: '20' },
      ],
    },
    options: {
      type: Object,
      default() {
        return {
        }
      }
    },
  },

  data() {
    return {
      scrollOptions: {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 5, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      },
      echartOptions: {
        scrollOptions: {
        },
        isfill: true,
        class: '',
        childClass: ''
      }
    }
  },
  // watch: {
  //   source(newVal) {
  //     this.init(newVal)
  //   },
  // },
  created() {
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.echartOptions = Object.assign(this.echartOptions, this.options)
    },
  },
}
</script>
<style lang='scss' scoped>
.ranking-container{
  width: 100%;
  height: 100%;
  // overflow-y: scroll;
  // scrollbar-color:#203248 transparent;
  // scrollbar-width:thin;
  .seamless-box {
    height: 100%;
    overflow: hidden;
  }
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
