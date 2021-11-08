<template>
<div class="customize-table ranking-container" :class="echartOptions.class">
  <div class="customize-table-head">
    <div
      :class="['column',item.class]"
      v-for="(item, index) in rightTableHead"
      :key="index">
      <span :class="['icon','iconfont','iconfont-linear-gradient',item.iconfont]" />
      <span>{{item.name}}</span>
    </div>
  </div>
  <div class="customize-table-body">
    <VueSeamlessScroll :class-option="scrollOptions" :data="source" class="seamless-box">
      <div
      :class="['row', echartOptions.childClass]"
      v-for="(item, index) in source"
      :key="index">
        <div class="column ranking">
          <span>{{index+1}}</span>
        </div>
        <div class="column name">
          <span>{{item.text}}</span>
        </div>
        <div class="column number">
          <span>{{item.value}}</span>
        </div>
      </div>
    </VueSeamlessScroll>
  </div>
</div>
</template>
<script>
import VueSeamlessScroll from "vue-seamless-scroll";
export default {
  name: 'RankingStyle4',
  components: {
    VueSeamlessScroll
  },
  props: {
    sid: {
      type: String,
      default: () => 'ranking4',
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
      rightTableHead: [
        {
          name: '排名',
          width: 124,
          class: 'ranking',
          iconfont: 'icon-paiming1'
        },
        {
          name: '名称',
          width: 124,
          class: 'name',
          iconfont: 'icon-mingcheng'
        },
        {
          name: '数量',
          width: 154,
          class: 'number',
          iconfont: 'icon-shuliang'
        },
      ],
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
@import './scss/customizeTable.scss';
.ranking-container{
  width: 100%;
  height: 100%;
  .seamless-box {
    height: 100%;
    overflow: hidden;
  }
  .customize-table {
    &-head {
      font-size: 16px;
      font-weight: 600;
      height: 36px;
      color: #C7FCFD;
      margin-bottom: 12px;
      .iconfont {
        color: #51feff;
        font-size: 36px;
        font-weight: normal;
        margin-right: 8px;
      }
      .column {
        width: 33.3%;
        display: flex;
        align-items: center;
        justify-content:flex-start;
      }
    }
    &-body {
      height: 270px;
      .row {
        height: 24px;
        margin-bottom: 9px;
        background: linear-gradient(90deg,rgba(49,101,129,0.46), rgba(49,101,129,0.10) 98%);
        .column {
          color: #fff;
          font-size: 12px;
          justify-content: center;
          width: 33.3%;
          padding: 0 20px;
          &.name {
            justify-content: flex-start;
          }
          &.number {
            justify-content: flex-end;
            font-size: 18px;
            font-weight: 600;
          }
        }
        &:before {
          content: '';
          display: inline-block;
          width: 2px;
          height: 24px;
          background: transparent;
        }
        &:first-child {
          background: linear-gradient(90deg,rgba(252,101,108,0.32), rgba(252,101,108,0.10) 98%);
          &:before {
            background: #f66a5a;
          }
        }
        &:nth-child(2) {
          background: linear-gradient(90deg,rgba(238,150,35,0.32), rgba(238,150,35,0.10) 98%);
          &:before {
            background: #ee9623;
          }
        }
        &:nth-child(3) {
          &:before {
            background: #27c3fc;
          }
        }
      }
    }
    .number {
      padding-right: 23px;
      justify-content: flex-end;
    }
  }
}


</style>
