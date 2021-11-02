<template>
  <div class="container">
    <Layout class="main-layout">
      <Sider
        class="sider-cont"
        v-model="isCollapsed"
      >
        <div class="logo-cont" ref="logo-comp">UI组件库</div>
        <Menu
          :active-name="getActiveMenu"
          :class="menuitemClasses"
          @on-select="changeMenuHandler"
          :style="{ width: '240px' }"
        >
          <router-link
            v-for="menu in menus"
            :key="menu.key"
            :to="menu.path"
            :title="menu.title"
          >
            <MenuItem :name="menu.name">
              <Icon :type="menu.icon" />
              <span class="menu-item-span">{{ menu.title }}</span>
            </MenuItem>
          </router-link>
        </Menu>
      </Sider>
      <Layout class="right-cont">
        <Header class="header-cont">Header</Header>
        <Content class="main-cont">
          <router-view />
        </Content>
      </Layout>
    </Layout>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      class="dialogMd"
      :before-close="() => handleClose(false)">
      <span>
        <mavon-editor
          :value="htmlValue"
          :editable="false"
          :toolbarsFlag="false"
        />
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="() => handleClose(false)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { highlightCode } from '@/assets/lib/hljs'
import { addCodeBtn } from '@/assets/lib/mavon'
export default {
  data() {
    return {
      menus: [],
      isCollapsed: false
    };
  },
  computed: {
    getActiveMenu() {
      return this.$store.getters.getActiveMenu();
    },
    menuitemClasses() {
      return ['sider-bar', this.isCollapsed ? 'collapsed-menu' : ''];
    },
    dialogVisible() {
      return (!!this.$store.state.Home.dialogShow) || false;
    },
    htmlValue() {
      return this.$store.state.Home.dialogMd || '';
    },
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      let menusList = this.$router.options.routes[0].children;
      this.menus = menusList;
    });
  },
  methods: {
    changeMenuHandler(name) {
      this.$store.commit('UPDATE_ACTIVE_MENU', name);
    },
    handleClose(show) {
      this.$store.commit('UPDATE_DIALOG_SHOW', show);
      highlightCode()
      addCodeBtn()
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./home.scss";
</style>