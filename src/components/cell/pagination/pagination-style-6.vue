<template>
  <div class="pagination-container">
    <div class="f-r">
      <ul class="page">
        <!-- <li class="goFirstPage goPage" @click="goPageNum(1)">首页</li> -->
        <li class="page">
          <el-pagination
            background
            :layout="pageLayout"
            :page-size="pageSize"
            :current-page="pageNo"
            :total="total"
            :page-sizes="pageSizes"
            @size-change="handlePageSizeChange"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </li>
        <!-- <li class="goLastPage goPage" @click="goPageNum(totalPageNo)">尾页</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "pagination-style-6",
  props: {
    total: {
      // 一共多少条数据
      type: Number,
      default: 0
    },
    pageLayout: {
      type: String,
      default: "sizes, prev, pager, next",
    },
    totalPageNo: {
      // 总页数
      type: Number,
      default: 0
    },
    pageNo: {
      // 当前所在页数
      type: Number,
      default: 1
    },
    pageSize: {
      // 每页多少条
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50];
      },
    }
  },
  data() {
    return {
      pageSize: 10, // 每页多少条
      pageSizeList: [5, 10, 20, 30, 40, 50, 80, 100]
    };
  },
  methods: {
    // 当前选中 每页多少条数
    changePageSize() {
      this.$emit("size-change", this.pageSize);
    },
    // 当前需要跳到的页数
    goPageNum(num) {
      if (num == this.pageNo) return;
      this.$emit("current-change", num);
    },
    // 当前选中页数
    handleCurrentChange(num) {
      this.$emit("current-change", num);
    },
    handlePageSizeChange(val) {
      this.$emit('size-change', val);
    }
  },
  // watch: {
  //   _pageSize(val) {
  //     if (val) {
  //       console.log('val', val);
  //       this.pageSize = val;
  //     }
  //   }
  // },
  mounted() {
    this.pageSize = this._pageSize;
  }
};
</script>

<style lang="scss" scoped>

// // @deep: ~">>>";
.pagination-container {
  margin-top: 5px;
  font-size: 12px;
  /deep/.el-select .el-input .el-select__caret {
    margin-right: -20px;
  }
 .el-pagination__sizes /deep/.el-input__inner {
   color: #7fb0de;
   font-size: 12px;
   font-family: PingFangSC, PingFangSC-Regular;
font-weight: 400;
 }
  /deep/.el-input__suffix {
    left: -3px;
  }
  .pageSize {
    width: 64px;
    /deep/.el-input__inner {
      border: 0;
      color: #0cdfe6;
    }
    .total em {
      color: #0cdfe6;
    }
  }
  .f-r{
    margin-top: 12px;
    display: flex;
    ul li {
      height: 26px;
    }
    .tableCount{
      display: block;
      height: 34px;
      line-height: 34px;
      color: #80BEFF;
      margin-right: 10px;
    }

  }

  .page {
    display: flex;
    list-style: none;
    .goPage {
      cursor: pointer;
      // background: #fff;
      width: 40px;
      height: 18px;
      text-align: center;
      color: #80BEFF;
      line-height: 18px;
    }
  }

  .pageSize,
  .page {
    display: flex;
    height: 18px;
    line-height: 18px;
    white-space: nowrap;
    align-items: center;
    color: #666;
  }
  /deep/.el-pagination.is-background .el-pager li:not(.disabled):hover{
    color:#0cdfe6
  }



  // .pagination-container {
  // width: 100%;
  // height: 100%;
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
// }
}
</style>