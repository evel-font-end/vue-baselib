<template>
  <div class="adminSideMenu">
    <el-menu
      class="el-menu-vertical"
      :collapse="openMenu"
      background-color="#FFF"
      text-color="#31353E"
      active-text-color="#3F5CC5"
      :default-active="defaultActive"
      unique-opened
    >
      <!-- <el-menu-item
        @click="activeTage(itemSon)"
        v-if="!itemPar.children"
        :key="itemPar.name"
        :index="itemPar.name"
        class="menuItem"
      >
        <i :class="itemPar.icon"></i>
        <span slot="title">{{ itemPar.meta.title }}</span>
      </el-menu-item> -->
      <el-sub-menu
        :index="itemPar.name"
        v-for="itemPar in menuData"
        :key="itemPar.name"
      >
        <template #title>
          <div class="flexRow">
            <div class="flexCenter icon" :class="itemPar.icon + 1">
              <i :class="itemPar.icon"></i>
            </div>
            <span>{{ itemPar.meta.title }}</span>
          </div>
        </template>
        <!-- 二级 -->
        <el-menu-item
          @click="activeTage(itemSon)"
          v-for="itemSon in itemPar.children"
          :key="itemSon.name"
          :index="itemSon.name"
          class="menuItem"
        >
          <template v-slot:title>
            <div class="flexRow">
              <div class="icon"><i :class="itemSon.icon"></i></div>
              <span>{{ itemSon.meta.title }}</span>
            </div>
          </template>
        </el-menu-item>
        <!-- 三级 -->
        <!-- <el-submenu
          v-if="
            itemPar.children &&
            itemPar.children.length > 0 &&
            itemSon.children &&
            itemSon.children.length >= 1 &&
            !itemSon.children[0].meta.hidden
          "
          v-for="itemSon in itemPar.children"
          :key="itemSon.name"
          :index="itemSon.name"
        >
          <template v-slot:title>
            <span>
              <i class="pos-r" :class="itemSon.icon" style="top: -2px"></i>
              {{ itemSon.meta.title }}
            </span>
          </template>
          <el-menu-item
            v-if="
              itemSon.children &&
              itemSon.children.length > 0 &&
              (!itemSonSub.children ||
                itemSonSub.children.length <= 0 ||
                (itemSonSub.children.length > 0 &&
                  itemSonSub.children[0].meta.hidden))
            "
            @click="activeTage(itemSonSub)"
            :index="itemSonSub.name"
            v-for="itemSonSub in itemSon.children"
            :key="itemSonSub.name"
          >
            <template v-slot:title>
            <i :class="itemSonSub.icon"></i>
            <span>{{ itemSonSub.meta.title }}</span>
            </template>
          </el-menu-item>
      </el-submenu> -->
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "", // 当前选中菜单的title名
    };
  },
  props: {
    menuData: {
      type: Array,
      default() {
        return [];
      },
    },
    defaultActive: {
      type: String,
      default: "",
    },
    openMenu: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    // 左侧菜单激活时候
    activeTage(item) {
      this.$emit("on-select", {
        name: item.name,
        title: item.meta.title,
        icon: item.icon,
      });
    },
  },
};
</script>

<style lang="less">
.adminSideMenu {
  // position: fixed;
  // bottom: 0;
  // top: 59px;
  // width: 220px;
  // bottom: 0;
  background: #ffffff;

  // 滚动条
  &::-webkit-scrollbar-track-piece {
    //滚动条凹槽的颜色，还可以设置边框属性
    background-color: transparent;
  }
  &::-webkit-scrollbar {
    //滚动条的宽度
    width: 2px; /*no*/
    height: 2px; /*no*/
    border-radius: 10px; /*no*/
  }
  &::-webkit-scrollbar-thumb {
    //滚动条的设置
    background-color: transparent;
    background-clip: padding-box;
    min-height: 28px; /*no*/
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: transparent;
  }
  .el-menu-vertical {
    width: 100%;
    border: 0;
    // padding-bottom: 50px;
  }
  .el-menu-item.is-active {
    background-color: #d8e6ff !important;
    // border-right: 2px solid #2573F1;
    i {
      color: rgba(81, 137, 255, 1) !important;
    }
    span {
      color: #3f5cc5 !important;
    }
  }

  .el-submenu {
    &.is-active {
      background: #f1f6ff;
      > .el-submenu__title,
      ul > li {
        background-color: #fff !important;
        &.is-active {
          background-color: #f0f5ff !important;
          position: relative;
        }
        &.is-active:not(.is-opened)::after {
          content: "";
          width: 4px; /*no*/
          height: 50px; /*no*/
          right: 0;
          bottom: 0;
          background: #2573f1;
          position: absolute;
        }
      }
    }
    > .el-submenu__title {
      height: 56px; /*no*/
      line-height: 56px; /*no*/
    }
  }

  .el-menu--vertical {
    .el-menu-item.is-active {
      // background-color: #0d1831 !important;
      // border-right: 2px solid #2573F1;
      i {
        color: #333 !important;
      }
    }
  }

  .el-menu-item,
  .el-submenu__title {
    height: 46px; /*no*/
    line-height: 46px; /*no*/
    font-size: 16px; /*no*/
    i {
      color: #333;
    }
    i.el-submenu__icon-arrow {
      margin-top: -4px; /*no*/
      color: #909399;
    }
    &:hover {
      // background-color: #2573F1 !important;
      // box-shadow: 0px 0px 11px 2px #f5f5f5;
      color: #333 !important;
      i {
        color: #333 !important;
      }
    }
  }

  .el-menu--collapse
    li[role="menuitem"].el-submenu.is-active
    .el-submenu__title {
    i {
      color: #fff !important;
    }
    background-color: #2573f1 !important;
  }
}
.adminSideMenu {
  .el-sub-menu {
    padding: 10px 12px 10px 10px; /*no*/
    border-radius: 2px; /*no*/
    .el-sub-menu__title {
      height: auto;
      padding: 0;
      padding-left: 0 !important;
      background-color: transparent !important;
      > div {
        align-items: center;
        span {
          font-size: 16px; /*no*/
          line-height: 34px; /*no*/
          font-family: PingFangSC-Semibold;
          text-align: left;
          color: #353535;
        }
      }
      .icon {
        width: 34px; /*no*/
        height: 34px; /*no*/
        background: linear-gradient(135deg, #508fff, #7a97ff);
        border-radius: 8px; /*no*/
        margin-right: 10px; /*no*/
        text-align: center;
        line-height: 34px;
        i {
          color: #ffffff;
          font-size: 20px;
        }
      }
      .icon-jichuguanli1 {
        background: linear-gradient(135deg, #563cff, #5089ff);
      }
      .icon-xitongguanli1 {
        background: linear-gradient(135deg, #3ca6ff, #2fe3cb);
      }
      .el-sub-menu__icon-arrow {
        right: 10px; /*no*/
      }
    }
    .el-menu {
      background-color: transparent !important;
      .el-menu-item {
        min-width: 100% !important;
        height: 40px !important;
        line-height: 40px !important;
        background-color: transparent !important;
        padding-left: 44px !important; /*no*/
        font-size: 14px; /*no*/
        color: #31353e;
      }
    }
    &.is-opened {
      background-color: #f1f6ff;
      .el-sub-menu__title {
        span {
          color: #3f5cc5;
        }
      }
      .el-menu {
        .el-menu-item {
          &.is-active {
            background-color: #d8e6ff !important;
            color: #3f5cc5;
          }
        }
      }
    }
  }
  .el-menu--inline .el-submenu__title,
  .el-menu-item {
    font-size: 14px !important; /*no*/
    height: 50px; /*no*/
  }
  .el-sub-menu.is-active.is-opened {
    // background-color: red !important;
    .el-sub-menu__title {
      color: #3f5cc5 !important;
    }
  }
  .el-sub-menu__title {
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    color: #353535;
    .el-sub-menu__icon-arrow {
      color: #3f5cc5 !important;
    }
  }
}
</style>
