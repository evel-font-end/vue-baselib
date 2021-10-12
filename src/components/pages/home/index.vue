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
  </div>
</template>
<script>
// import { TweenMax, TimelineLite, TweenLite } from 'gsap'
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
    }
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
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./home.scss";
</style>
