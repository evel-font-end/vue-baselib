<template>
  <div class="customize-table ranking-container" :class="echartOptions.class">
    <dv-scroll-board
      :class="echartOptions.childClass"
      :config="tableConfig"
      style="width:100%;height:100%"
      ref="scrollBoard"
    />
  </div>
</template>
<script>
export default {
  name: 'RankingStyle6',
  props: {
    sid: {
      type: String,
      default: () => 'ranking6',
    },
    source: {
      type: [Array, Object],
      default: () => [
        { text: '库水位', value: 100 },
        { text: '内部位移', value: 100 },
        { text: '内部位移', value: 100 },
        { text: '浸润线', value: 100 },
        { text: '干滩监测', value: 100 },
        { text: '干滩监测', value: 100 },
        { text: '干滩监测', value: 100 },
        { text: '干滩监测', value: 100 },
        { text: '干滩监测', value: 100 },
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
      tableConfig: {
        hoverPause: true,
        headerHeight: 40,
        headerBGC: 'transparent',
        evenRowBGC: 'transparent',
        oddRowBGC: 'transparent',
        rowNum: 7,

        waitTime: 3000,
        indexHeader: "排名",
        data: [],
      },
      echartOptions: {
        scrollOptions: {
        },
        columnWidth: [100, 136, 65],
        header: ['排名', '省份', '数量'],
        align: ['left', 'left', 'right'],
        class: '',
        childClass: ''
      }
    }
  },
  watch: {
    source: {
      deep: true,
      handler(val) {
        this.init(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init(this.source)
    })
  },
  methods: {
    async init(value) {
      this.echartOptions = Object.assign(this.echartOptions, this.options)
      this.tableConfig = Object.assign(this.echartOptions, this.tableConfig)
      const rows = await value.map((valueItem, valueIndex) => {
        return ([
          valueItem.indexText ? valueItem.indexText : `<div class='rank rank${valueIndex < 3 ? valueIndex : 3}'>TOP.${valueIndex + 1}<span>`,
          ...Object.keys(valueItem).map(valItem => valueItem[valItem])
        ])
      });
      this.$refs["scrollBoard"].updateRows(rows, 0);
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
      color: #88D7FD;
      font-size: 20px;
      display: flex;
      justify-content: center;
    }
    .rows {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .row-item{
        justify-content: center;
      }
      .ceil {
        display: flex;
        align-items: center;
        width: 100%;
        margin: 7px 0;
        background-color: rgba(49,101,129,0.45);
        font-size: 16px;
        &:nth-of-type(1) {
          padding-left: 0;
          border-radius: 6px 0 0 1px;
          font-weight: bold;
        }
        &:nth-of-type(3) {
          border-radius: 0 1px 1px 0;
        }
      }
    }
    .rank {
      height: 25px;
      width: 100%;
      display: flex;
      align-items: center;
      padding-left: 2px;
    }
    .rank0 {
      background: url("./images/red-ranking-bg.png") no-repeat;
    }
    .rank1 {
      background: url("./images/orange-ranking-bg.png") no-repeat;
    }
    .rank2 {
      background: url("./images/yellow-ranking-bg.png") no-repeat;
    }
    .rank3 {
      background: url("./images/blue-ranking-bg.png") no-repeat;
    }

  }
}


</style>
