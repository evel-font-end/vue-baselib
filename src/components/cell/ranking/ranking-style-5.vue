<template>
  <div class="customize-table ranking-container" :class="echartOptions.class">
    <dv-scroll-board
      :config="tableConfig"
      :class="echartOptions.childClass"
      style="width:100%;height:100%"
      ref="scrollBoard"
    />
  </div>
</template>
<script>
import { isFunction } from '@/assets/lib/utils';
export default {
  name: 'RankingStyle5',
  props: {
    sid: {
      type: String,
      default: () => 'ranking5',
    },
    source: {
      type: [Array, Object],
      default: () => [
        {
          text: '库水位',
          value: () => {
            return '200'
          },
          score: '20'
        },
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
      tableConfig: {
        hoverPause: true,
        headerHeight: 40,
        headerBGC: "#31498173",
        evenRowBGC: "transparent",
        oddRowBGC: "#31498173",
        rowNum: 4,
        waitTime: 3000,
        indexHeader: "排名",
        data: [],
      },
      echartOptions: {
        scrollOptions: {},
        class: '',
        childClass: '',
        columnWidth: [125, 125, 125, 125],
        header: ["排名", "API服务", "API服务数量", "文件服务"],
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
        // 图标颜色
        const iconColor = ["#EB3737FF", "#FF8D00FF", "#00DFC7FF"];
        // 皇冠图标
        const indexText =
        valueItem.indexText ? valueItem.indexText : (valueIndex < 3 ?
          `<i class="iconfont icon-huangguan"
            style="color: ${iconColor[valueIndex]}"><span>${valueIndex + 1}</span></i>` :
          `<span class='rank'>${valueIndex + 1}<span>`);
        return ([
          indexText,
          ...Object.keys(valueItem).map(valItem => isFunction(valueItem[valItem]) ? valueItem[valItem]() : valueItem[valItem])
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
