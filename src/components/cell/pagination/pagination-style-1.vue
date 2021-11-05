<template>
  <div class="pagination-container">
    <el-pagination
      class="pagination"
      background
      :layout="pageLayout"
      :current-page="pageCurrent"
      :page-size="pageSize"
      :total="total"
      @current-change="onCurrentChange">
    </el-pagination>
     <!-- <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination> -->
  </div>
</template>

<script>
export default {
  name: 'pagination-style-1',
  props: {
    /** 分页组件显示的子组件 */
    pageLayout: {
      type: String,
      default: "prev, pager, next",
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
    // pageSizes: {
    //   type: Array,
    //   default() {
    //     return [10, 20, 30, 40, 50, 100];
    //   },
    // },
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
    //  const onCurrentChange = (val: any) => {
    //   content.emit("current-change", val);
    // };
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
    /deep/.el-pagination.is-background .el-pager li:not(.disabled).active {
  // background: #3f5cc5;
  background: linear-gradient(217deg,rgba(6,210,236,0.65) 4%, rgba(30,138,210,0.57) 89%);
  border-radius: 2px;
  }
 /deep/.el-pagination.is-background .el-pager li {
    font-size: 14px;
    // font-family: Helvetica;
    color: #ffffff;
font-family: PingFangSC, PingFangSC-Semibold;
font-weight: 600;
   background: rgba(24,160,212,0.13);
border-radius: 2px;
  }
 /deep/.el-pagination.is-background .btn-prev {
    // background: #f8fbff;
    color: #ffffff;
    font-family: PingFangSC, PingFangSC-Semibold;
font-weight: 600;
    background: rgba(24,160,212,0.18);
  border: 1px solid rgba(94,191,255,0.30);
  border-radius: 2px;
  }
 /deep/.el-pagination.is-background .btn-next {
    // background: #f8fbff;
    color: #ffffff;
    background: rgba(24,160,212,0.18);
  border: 1px solid rgba(94,191,255,0.30);
  border-radius: 2px;
  }
  }
}

</style>