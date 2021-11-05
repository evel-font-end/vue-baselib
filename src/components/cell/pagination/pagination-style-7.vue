<template>
  <div class="pagination-container">
    <el-pagination
      class="pagination"
      popper-class='select_pagination'
      background
      :layout="pageLayout"
      :current-page="pageCurrent"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :total="total"
      @size-change="onPageSizeChange"
      @current-change="onCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'pagination-style-7',
  props: {
    /** 分页组件显示的子组件 */
    pageLayout: {
      type: String,
      default: "sizes, prev, pager, next, jumper",
    },
    /** 当前分页页码 */
    pageCurrent: {
      type: Number,
      default: 6,
    },
    /** 每页的数据数量 */
    pageSize: {
      type: Number,
      default: 10,
    },
    // /** 可选的每页数量 */
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50];
      },
    },
    /** 数据总量 */
    total: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {

    }
  },
  watch: {

  },
  methods: {
    onCurrentChange(val) {// 当前页 改变时会触发
      this.$emit('current-change', val);
    },
    onPageSizeChange(val) {// pageSize(每页条数) 改变时会触发
      this.$emit('size-change', val);
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination-container {
  width: 100%;
  height: 100%;
  .pagination {
    display: flex;
    align-items: center;
    /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
      background: linear-gradient(217deg,rgba(6,210,236,0.65) 4%, rgba(30,138,210,0.57) 89%);
      border-radius: 2px;
    }
    /deep/.el-pagination.is-background .el-pager {
      border-top: 1px solid #3d87ba;
      border-bottom: 1px solid #3d87ba;
      box-sizing: border-box;
    }
    /deep/.el-pagination.is-background .el-pager li {
      font-size: 14px;
      color: #ffffff;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      background: rgba(24,160,212,0.13);
      margin: 0;
    }
    /deep/.el-pagination.is-background .btn-prev {
      color: #9BCDFF;
      border-top: 1px solid #3d87ba;
      border-left: 1px solid #3d87ba;
      border-bottom: 1px solid #3d87ba;
      font-family: PingFangSC, PingFangSC-Semibold;
      font-weight: 600;
      height: 30px;
      background: linear-gradient(90deg,#134566, #0f5b7d);
      margin: 0;
    }
    /deep/.el-pagination.is-background .btn-next {
      color: #9BCDFF;
      margin: 0;
      height: 30px;
      border-top: 1px solid #3d87ba;
      border-right: 1px solid #3d87ba;
      border-bottom: 1px solid #3d87ba;
      background: linear-gradient(90deg,#134566, #0f5b7d);
    }
    /deep/.el-pagination.is-background .el-pagination__jump {
      color: #7FB0DE;
    }
    /deep/.el-pagination.is-background .el-input__inner {
      color: #6e9eca;
      background: rgba(24,160,212,0.18);
      border: 1px solid rgba(94,191,255,0.58);
    }
  }
}

</style>
<style lang="scss">
 /*下拉选择*/
 // popper-class	Select 下拉框的类名
.select_pagination {
  background: linear-gradient(
    180deg,
    rgba(7, 85, 134, 0.64),
    rgba(7, 85, 134, 0.44)
  )!important;
  border: 2px solid;
  border-image: linear-gradient(270deg, rgba(0, 136, 175, 0.98) 1%, #0088af)
    2 2!important;
  .popper__arrow {
    border-width: 0!important;
    // border-bottom-color: transparent!important;
    &::after {
      top: 0;
      border-bottom-color: #0088af;
    }
  }
  .el-select-dropdown__item {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    color: #ffffff !important;
    padding-left: 10px;
  }
  .el-select-dropdown__item.selected {
    background-color: rgba(41,122,186,0.50) !important;
    color: #2FDDFA !important;

  }
  .el-select-dropdown__item.hover,
  .el-select-dropdown__item:hover {
    background-color: rgba(39, 87, 121, 0.64) !important;
  }
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
 .el-scrollbar__bar.is-horizontal {
    display: none;
  }
}

</style>
