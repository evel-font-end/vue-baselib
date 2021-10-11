<template>
  <div class="adminComp-page-table">
    <el-table
      :key="obj.key"
      ref="pageTable"
      v-loading="loading"
      :data="data"
      :element-loading-text="loadingText"
      :row-key="rowKey"
      :height="tableHeight"
      tooltip-effect="light"
      :empty-text="emptyText"
      v-bind="$attrs"
      :highlight-current-row="highlightCurrentRow"
      :row-class-name="rowClassName"
      @selection-change="onSelectionChange"
      @current-change="onRowCurrentChange"
      @select="onSelect"
      @select-all="selectAll"
      :border="border"
      :load="load"
      :lazy="lazy"
      :tree-props="treeProps"
    >
      >
      <el-table-column
        v-if="selection"
        align="left"
        type="selection"
        width="50"
        fixed="left"
        :selectable="selectable"
        :reserve-selection="reserveSelection"
      />
      <el-table-column v-if="expand" type="expand" fixed="left" :align="'left'">
        <template #default="scope">
          <div>
            <slot name="expand" :row="scope.row" :index="scope.$index" />
          </div>
        </template>
      </el-table-column>
      <el-table-column
        v-if="data.length > 0 && !hideDefaultIndex"
        label="序号"
        type="index"
        width="60"
        fixed="left"
        :align="'left'"
      >
        <template #default="scope">
          <span v-if="sortByBack">{{
            scope._self.data.length - scope.$index
          }}</span>
          <span v-else>{{ scope.$index + 1 }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-for="(col, index) in cols"
        :key="`col-${index}`"
        :label="col.label"
        :prop="col.prop"
        :align="'left'"
        :fixed="col.fixed || false"
        :width="col.width"
        :min-width="col.minWidth || 80"
        :show-overflow-tooltip="showOverflowTooltip"
      >
        <template #default="scope">
          <span v-if="!col.render && !col.custom">{{
            getDataName(scope.row, col)
          }}</span>
          <slot :name="col.prop" :scope="scope" />
          <lb-render :scope="scope" :render="col.render" v-if="col.render">
          </lb-render>
        </template>
      </el-table-column>
      <el-table-column
        v-if="operator"
        label="操作"
        :width="operatorWidth"
        :align="'left'"
      >
        <template #default="scope">
          <div class="operator">
            <slot name="operator" :row="scope.row" :index="scope.$index" />
          </div>
        </template>
      </el-table-column>
    </el-table>

    <div :style="pageWrapperStyle" v-if="showPage" class="bg-f">
      <el-pagination
        class="pagination"
        background
        :layout="pageLayout"
        :pager-count="7"
        :current-page="pageCurrent"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        :total="total"
        @current-change="onCurrentChange"
        @size-change="onPageSizeChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, ref, toRefs, reactive, watch } from 'vue';
import LbRender from "./lb-render.vue";
/* eslint-disable vue/require-default-prop */
export default {
  name: "PageTable",
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    cols: {
      type: Array,
      default() {
        return [];
        // e.g
        // [{
        //  label: '标题',
        //  prop: '字段名',
        //  minWidth: '100'
        // }]
      },
    },
    /** 每列文字的对齐方式 */
    colAlign: {
      type: String,
      default: "left",
    },
    /** 当前分页页码 */
    pageCurrent: {
      type: Number,
      default: 1,
    },
    /** 数据总量 */
    total: {
      type: Number,
      default: 0,
    },
    /** 每页的数据数量 */
    pageSize: {
      type: Number,
      default: 10,
    },
    /** 可选的每页数量 */
    pageSizes: {
      type: Array,
      default() {
        return [10, 20, 30, 40, 50, 100];
      },
    },
    /** 分页组件显示的子组件 */
    pageLayout: {
      type: String,
      default: "prev, pager, next",
    },
    /** 分页组件在页面中的对齐方式 */
    pageAlign: {
      type: String,
      default: "right",
    },
    /** 是否显示操作列 */
    operator: {
      type: Boolean,
      default: false,
    },
    /** 操作列的宽度 */
    operatorWidth: {
      type: [String, Number],
      default: 80,
    },
    /** 是否多选 */
    selection: {
      type: Boolean,
      default: false,
    },
    /** 是否显示加载动画 */
    loading: {
      type: Boolean,
      default: false,
    },
    /** 当内容过长被隐藏时显示 tooltip */
    showOverflowTooltip: {
      type: Boolean,
      default: true,
    },
    rowKey: [String, Function],
    /** type=selection时, 数据更新之后保留之前选中的数据 */
    reserveSelection: {
      type: Boolean,
      default: false,
    },
    // eslint-disable-next-line vue/require-default-prop
    tableHeight: {
      type: [String, Number],
    },
    /** 当前行是否可选 */
    selectable: {
      type: [Function, Boolean],
      default: null,
    },
    hideDefaultIndex: {
      type: Boolean,
      default: false,
    },
    loadingText: {
      type: String,
      default: "数据加载中...",
    },
    showPage: {
      type: Boolean,
      default: true,
    },
    /** 列是否能拖拉 */
    border: {
      type: Boolean,
      default: false,
    },
    highlightCurrentRow: {
      type: Boolean,
      default: false,
    },
    expand: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: false,
    },
    load: {
      type: Function,
      default: null,
    },
    treeProps: {
      type: [Object, Array],
    },
    sortByBack: {
      type: Boolean,
      default: false,
    },
    tableRowClassName: {
      type: Function,
      default: () => {
        return ''
      },
    },
  },
  components: {
    LbRender,
  },
  emits: ['size-change', 'current-change', 'selection-change', 'onSelect', 'selectAll', 'row-current-change', 'mounted'],
  setup(props: any, content: any) {
    const { data } = toRefs(props);
    const obj = reactive({
      key: Math.random(),
      data: props.data
    })
    const pageTable = ref<any>({})
    const pageWrapperStyle = computed(() => {
      const ALIGN: any = {
        left: "flex-start",
        center: "center",
        right: "flex-end",
      };
      return {
        display: "flex",
        justifyContent: ALIGN[props.pageAlign],
        padding: "10px 0 20px",
        backgroundColor: "#FFFFFF",
      };
    })
    const emptyText = computed(() => {
      return props.loading ? "" : "暂无数据";
    })
    onMounted(() => {
      content.emit("mounted", pageTable);
    })
    watch(props.data, (val) => {
      // console.log('watchval', val)
    })
    const rowClassName = ({ row, rowIndex }: any) => {
      if ((rowIndex + 1) % 2 === 1) {
        return "normalRow";
      } else if ((rowIndex + 1) % 2 === 0) {
        return "colorRow";
      } else {
        return "";
      }
    };
    const onPageSizeChange = (val: any) => {
      content.emit("size-change", val);
    };
    const onCurrentChange = (val: any) => {
      content.emit("current-change", val);
    };
    const onSelectionChange = (args: any) => {
      content.emit("selection-change", args);
    };
    const onSelect = (selection: any, row: any) => {
      content.emit("onSelect", { selection, row });
    };
    const selectAll = (selection: any) => {
      content.emit("selectAll", selection);
    };
    const onRowCurrentChange = (val: any) => {
      content.emit("row-current-change", val);
    };
    const onRowChange = (rowItems: any, idx: string = "id", bool: any) => {
      rowItems.map((row: any) => {
        const id = row[idx];
        let index: any;
        // const index = this.data.findIndex(data => data[idx] == id);
        props.data.map((item: any, i: number) => {
          if (item[idx] == id) {
            index = i;
          }
        });
        const status = bool;
        console.log(index);
        if (index > -1) {
          pageTable.value.toggleRowSelection(props.data[index], true);
        }
      });
    };
    const onSetCurrentRow = (id: any, idx = "id") => {
      const index = props.data.findIndex((data: any) => data[idx] == id);
      pageTable.value.setCurrentRow(props.data[index]);
    };
    const getDataName = (scope: any, items: any) => {
      return scope[items.prop];
    };
    const toggleAllSelection = () => {
      pageTable.value.toggleAllSelection();
    };
    const getPageTable = () => {
      pageTable.value.clearSelection();
      pageTable.value.setCurrentRow();
    };
    const updateTable = () => {
      obj.key = Math.random();
    };
    return {
      obj,
      pageTable,
      pageWrapperStyle,
      emptyText,
      rowClassName,
      onPageSizeChange,
      onCurrentChange,
      onSelectionChange,
      onSelect,
      selectAll,
      onRowCurrentChange,
      onRowChange,
      onSetCurrentRow,
      getDataName,
      toggleAllSelection,
      getPageTable,
      updateTable
    }
  }
};
</script>

<style lang="less" scoped>
&:deep(.el-pagination.is-background .el-pager li:not(.disabled).active) {
  background: #3f5cc5;
}
&:deep(.el-pagination.is-background .el-pager li) {
  font-size: 14px;
  // font-family: Helvetica;
  color: #606266;
  background: #f8fbff;
}
&:deep(.el-pagination.is-background .btn-prev) {
  background: #f8fbff;
}
&:deep(.el-pagination.is-background .btn-next) {
  background: #f8fbff;
}
// 去掉table的所有边框
&:deep(.el-table) {
  border: 0;
  th,
  tr,
  td {
    border: 0;
  }
  &::before {
    height: 0px;
  }
  &::after {
    width: 0;
  }
  .el-table__fixed:before {
    height: 0;
  }
}
.adminComp-page-table {
  .colorRow {
    background: #f8fbff;
    border-radius: 2px;
  }
  &:deep(.el-table) {
    border: none;
    &::after {
      content: none;
    }
    .el-table__header-wrapper {
      .el-table__header {
        width: 100% !important;
        border: none;
      }
    }

    tr.colorRow {
      background: #f8fbff;
      border-radius: 2px;
      font-family: PingFangSC-Regular;
      .el-table__cell {
        padding: 0;
        height: 40px !important; /*no*/
      }
    }
    tr.normalRow {
      background: #fff;
      border-radius: 2px;
      font-family: PingFangSC-Regular;
      .el-table__cell {
        padding: 0;
        height: 40px !important; /*no*/
      }
    }
    tr {
      // background-color: transparent;
      height: 46px !important; /*no*/
      th {
        background: #eaf0fb;
        border-radius: 2px;
        border-bottom: none;
        line-height: normal;
        font-size: 14px; /*no*/
        font-family: PingFangSC-Semibold;
        font-weight: 500;
        color: #31353e;
        padding: 0;
        &:nth-last-of-type(2) {
          border-right: none;
        }
      }
    }
    .operator {
      .iconfont {
        cursor: pointer;
      }
      button {
        i {
          cursor: pointer;
          font-size: 18px; /*no*/
        }
      }
    }
  }
  .bg-f {
    background: #fff;
  }
  .flex-center {
    display: flex;
    justify-content: center;
  }
  &:deep(.el-button) {
    margin-right: 10px; /*no*/
  }
}
</style>
