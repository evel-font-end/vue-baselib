<template>
  <div class="tree">
    <div class="title">区域列表</div>
    <div class="flexRow infoInput">
      <el-input placeholder="请输入内容" v-model="filterText">
        <template #suffix
          ><i
            class="el-input__icon el-icon-search"
            @click="searchTree(filterText)"
          ></i
        ></template>
      </el-input>
    </div>
    <el-tree
      class="filterTree"
      :data="treeData"
      node-key="id"
      :current-node-key="currentKey"
      :props="defaultProps"
      :filter-node-method="filterNode"
      highlight-current
      :check-on-click-node="true"
      :auto-expand-parent="true"
      :load="loadNode"
      lazy
      @node-click="handleNodeClick"
      ref="tree"
    >
      <template #default="{ node }">
        <span :class="`flexRow custom-tree-node class${node.level}`">
          <div class="flexCenter build" v-if="node.level === 1">
            <i class="iconfont icon-xuexiao" />
          </div>
          <div class="flexCenter folder" v-if="node.level === 2">
            <i class="iconfont icon-wenjianjia" />
          </div>
          <span class="flexCenter label">{{ node.label }}</span>
        </span>
      </template>
    </el-tree>
  </div>
</template>

<script>
import { listSiteTree, getUnderling } from "@/api/user";
export default {
  props: {
    leaf: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      treeData: [],
      defaultProps: {
        children: "children",
        label: "label",
      },
      currentKey: undefined,
      filterText: "",
    };
  },
  mounted() {
    // this.$nextTick(() => {
    // this.initTree()
    // })
  },
  watch: {
    currentKey(id) {
      // Tree 内部使用了 Node 类型的对象来包装用户传入的数据，用来保存目前节点的状态。可以用 $refs 获取 Tree 实例
      if (id.toString()) {
        this.$refs.tree.setCurrentKey(id);
      } else {
        this.$refs.tree.setCurrentKey(null);
      }
    },
  },
  methods: {
    loadNode(node, resolve) {
      if (node.level === 0) {
        listSiteTree().then((res) => {
          if (res && res.code === "200") {
            const treeData = res.data.map((dataItem) => {
              return {
                ...dataItem,
                level: node.level,
                label: dataItem.name,
                isLeaf: this.leaf === 0
              };
            });
            if (treeData[0]) {
              this.handleNodeClick(treeData[0]);
              this.$refs.tree.setCheckedKeys([treeData[0].id]);
            }
            return resolve(treeData);
          }
        });
      } else if (node.level === 1 && this.leaf > 0) {
        getUnderling(node.data.id).then((res) => {
          if (res && res.code === "200") {
            const treeData = res.data.map((dataItem) => {
              return {
                ...dataItem,
                level: node.level,
                label: dataItem.name,
                isLeaf: this.leaf === 1
              };
            });
            return resolve(treeData);
          }
        });
      } else {
        return resolve([]);
      }
    },
    handleNodeClick(data) {
      this.currentKey = data.id;
      this.$emit("onClick", data);
    },
    searchTree(filterText) {
      this.$refs.tree &&
        this.$refs.tree.filter({ val: filterText, type: "label" });
    },
    filterNode(value, data) {
      console.log("value", value);
      if (!value.val) return true;
      return data[value.type] && data[value.type].indexOf(value.val) !== -1;
    },
  },
};
</script>

<style scoped lang="less">
.tree::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 2px; /*高宽分别对应横竖滚动条的尺寸*/
  padding-right: 2px;
}
.tree::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 2px;
  background: #d5daeb;
}
.tree::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  background: #fff;
}
.tree {
  padding: 15px; /*no*/
  background: url("./images/img1.png") no-repeat top #ffffff;
  background-size: 100% 126px;
  border-radius: 2px 0px 0px 2px;
  position: relative;
  overflow: auto;
  .title {
    font-size: 16px; /*no*/
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    color: #353535;
    text-align: center;
    margin-bottom: 15px; /*no*/
  }
  .infoInput {
    margin-bottom: 15px; /*no*/
    &:deep(.el-input) {
      .el-input__inner {
        background: #f4f7ff;
        border: 1px solid #d9e0ff; /*no*/
        border-radius: 19px; /*no*/
        color: #8999c1;
        font-size: 14px; /*no*/
        padding: 8px 10px; /*no*/
        &::-webkit-input-placeholder {
          color: #8999c1;
        }
        &::-moz-placeholder {
          color: #8999c1;
        } /* firefox 19+ */
        &:-ms-input-placeholder {
          color: #8999c1;
        } /* Internet Explorer 10+ */
        &:-moz-placeholder {
          color: #8999c1;
        }
      }
      .el-input__suffix {
        color: #8999c1;
        font-size: 20px;
      }
    }
  }
  &:deep(.filterTree) {
    > .el-tree-node {
      margin-bottom: 15px; /*no*/
      border-radius: 2px; /*no*/
      box-shadow: 0px 0px 6px 0px #e6eafe; /*no*/
    }
    .el-tree-node {
      .el-tree-node__content {
        height: auto;
        position: relative;
        padding: 0 !important;
        .el-tree-node__expand-icon {
          position: absolute;
          top: 50%;
          right: 0;
          margin-top: -12px; /*no*/
        }
        .custom-tree-node {
          width: 100%;
          .build {
            width: 40px; /*no*/
            height: 40px; /*no*/
            background: linear-gradient(135deg, #7db4ff, #77a4ff);
            border-radius: 2px; /*no*/
            i {
              font-size: 24px; /*no*/
              color: #fff;
            }
          }
          .folder {
            i {
              font-size: 18px; /*no*/
              color: #cfd5ed;
            }
          }
          .label {
            margin: 0 10px; /*no*/
            font-size: 16px; /*no*/
            font-family: PingFangSC, PingFangSC-Regular;
            font-weight: 400;
            text-align: right;
            color: #353535;
          }
          &.class1 {
            // margin-bottom: 15px;/*no*/
            border-radius: 2px; /*no*/
            box-shadow: 0px 0px 6px 0px #e6eafe; /*no*/
          }
          &.class2,
          &.class3,
          &.class4 {
            // margin-bottom: 20px;/*no*/
            height: 50px; /*no*/
            padding-left: 10px; /*no*/
            .label {
              margin-left: 17px; /*no*/
              font-size: 14px; /*no*/
            }
          }
        }
        .el-icon-loading {
          position: absolute;
          top: 50%;
          left: 15px; /*no*/
          color: #fff;
          transform: translateY(-50%);
        }
      }
      .el-tree-node__children {
        padding: 0px 0 0 12px; /*no*/
        // border-top: 1px solid #e6eafe; /*no*/
      }
      &:hover,
      &:focus,
      &:active {
        .el-tree-node__content {
          // background: #f1f6ff;
          background: transparent;
        }
      }
      &.is-current {
        .el-tree-node__expand-icon {
          color: #3f5cc5;
        }
        // .el-tree-node__content {
        //   .custom-tree-node{
        //     .iconfont {
        //       color: #97adff;
        //     }
        //     .label {
        //       color: #3f5cc5;
        //     }
        //   }
        // }
      }
    }
  }
  &:deep(.el-tree-node.is-focusable.is-current) {
    .el-tree-node__content {
      .custom-tree-node {
        .build {
          background: linear-gradient(135deg, #50a4ef, #5478fa, #3f5cc5);
        }
        .folder {
          .iconfont {
            color: #97adff;
          }
        }
        .el-icon-caret-right {
          color: #3f5cc5;
        }
        .label {
          color: #3f5cc5;
          font-weight: 600;
        }
      }
    }
    .el-tree-node__children {
      background: #f1f6ff;
      .el-tree-node.is-focusable.is-checked {
        .el-tree-node__content {
          .custom-tree-node {
            .folder {
              .iconfont {
                color: #97adff;
              }
            }
            .label {
              font-size: 14px; /*no*/
              font-family: PingFangSC, PingFangSC-Semibold;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>
