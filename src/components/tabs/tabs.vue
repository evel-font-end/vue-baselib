<template>
  <div id="tabs">
    <el-tabs
      type="card"
      v-model="activeTage"
      closable
      @edit="handleTabsEdit"
      @tab-click="trunPage"
    >
      <el-tab-pane name="indexPage">
        <span slot="label" class="indexPage" ref="indexPage">
          <i class="mr-5 f-14 iconfont icon-shouye"></i>
          首页
        </span>
      </el-tab-pane>
      <el-tab-pane
        v-for="item in menuTagsData"
        :key="item.name"
        :name="item.name"
      >
        <span slot="label" class="tx-center noselect" :title="item.title">
          <i :class="item.icon" class="mr-5"></i>
          {{ item.title }}
          <!-- <i
            class="el-icon-refresh ml-5 f-16"
            @click.prevent.stop="refreshPage(item.name)"
            title="刷新"
          ></i> -->
        </span>
      </el-tab-pane>
    </el-tabs>
    <!-- <div class="el-menu-demo pos-a">
      <el-dropdown @command="contextMenu">
        <div class="downMenu">
          <i class="el-icon-circle-close"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div> -->
  </div>
</template>

<script>
import Config from "@/config";
import { mapGetters } from "vuex";
export default {
  props: {
    // tages数据
    menuTagsData: {
      type: Array,
      default() {
        return [];
      },
    },
    // 外部点击关联选中标签
    defaultTage: {
      type: String,
      default: Config.homeName,
    },
  },
  data() {
    return {
      activeTage: Config.homeName, // 内部tag点击选中标签
    };
  },
  watch: {
    defaultTage(newValue, oldValue) {
      this.activeTage = newValue;
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.activeTage = this.openPage;
      this.$refs.indexPage.parentNode.removeChild(
        this.$refs.indexPage.nextSibling
      );
    });
  },
  methods: {
    // 抛出当前被删除的标签名
    handleTabsEdit(targetName, action) {
      if (action === "remove") this.$emit("delTage", targetName);
    },
    // 跳转页面
    trunPage(router) {
      let { name, query, params } = {};
      if (typeof router.name === "string") name = router.name;
      else {
        name = Config.Name;
        query = router.query;
        params = router.params;
      }

      this.$emit("on-select", name);
      this.$router
        .push({
          name,
          query,
          params,
        })
        .catch((err) => err);
    },
    // 刷新当前页面
    refreshPage(name) {
      let q = { t: Date.now() },
        query = q;

      // 合并传参
      if (name == this.$route.name) {
        query = Object.assign({}, this.$route.query, q);
      }

      this.$router.push({
        name: name,
        query,
      });
    },
    // 菜单
    contextMenu(type) {
      switch (type) {
        case "all": // 关闭全部
          this.$emit("close-type", "all");
          break;
        case "other": // 关闭其他
          this.$emit("close-type", "other");
          break;
      }
    },
  },
  computed: {
    ...mapGetters(["openPage"]),
  },
};
</script>

<style lang="less">
@import "./tabs.less";
</style>
