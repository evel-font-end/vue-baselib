<template>
<div class="ranking-container" :class="echartOptions.class">
  <VueSeamlessScroll :class-option="{ ...scrollOptions, ...echartOptions.scrollOptions}" :data="source" class="seamless-box">
    <ScrollItem
    v-for="(item, index) in source"
    :key="`dataList${index}`"
    :class="echartOptions.childClass"
    :itemInfo="item"
    :index="index"
    />
  </VueSeamlessScroll>
</div>
</template>
<script>
import VueSeamlessScroll from "vue-seamless-scroll";
import ScrollItem from './components/scrollItem'
export default {
  name: 'RankingStyle3',
  components: {
    VueSeamlessScroll,
    ScrollItem
  },
  props: {
    sid: {
      type: String,
      default: () => 'ranking3',
    },
    source: {
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
        scrollOptions: {},
        class: '',
        childClass: ''
      }
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
      this.echartOptions = Object.assign(this.echartOptions, this.options)
    },
  },
}
</script>
<style lang='scss' scoped>
.ranking-container{
  width: 100%;
  height: 100%;
  .seamless-box {
    height: 100%;
    overflow: hidden;
  }
}


</style>
