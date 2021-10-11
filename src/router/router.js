// import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Vue from 'vue'
import Router from 'vue-router'
import AdminView from '@/components/adminView/main.vue';
// import Login from '@/components/login/login.vue'
Vue.use(Router)
/* const router = createRouter({
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
  routes: (routes as unknown) as RouteRecordRaw[]
}) */

const router = [
  // { path: '/indexPage', redirect: '/home' },
  // {
  //   path: '/',
  //   component: AdminView,
  //   redirect: '/home',
  //   name: 'index',
  //   iconCls: '',
  //   leaf: true,
  //   meta: {
  //     hideInMenu: true,
  //     title: '首页',
  //     icon: 'iconfont icon-home',
  //     breadcrumb: true
  //   },
  //   children: [{
  //     path: "home",
  //     name: "home",
  //     component: () =>
  //       import('views/Home.vue'),
  //     meta: {
  //       title: "首页",
  //       icon: "iconfont icon-dot",
  //       breadcrumb: true
  //     },
  //   }]
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   hidden: true,
  //   component: Login,
  //   meta: {
  //     hideInMenu: true,
  //     title: '登录',
  //     icon: 'iconfont icon-home'
  //   },
  // },
  {
    path: '/baseManage',
    name: 'baseManage',
    component: AdminView,
    iconCls: '',
    leaf: true,
    meta: {
      hideInMenu: false,
      title: '基础管理',
      icon: 'iconfont icon-jichuguanli',
      breadcrumb: true
    },
    children: [
      {
        path: "baseDataBoard",
        name: "baseDataBoard",
        component: () =>
          import('@/views/baseManage/baseDataBoard/index'),
        meta: {
          title: "数据看板",
          icon: "iconfont icon-dot",
          breadcrumb: true
        },
      },
      // {
      //   path: "deviceStatus",
      //   name: "deviceStatus",
      //   component: () =>
      //     import('views/baseManage/deviceStatus/index.vue'),
      //   meta: {
      //     title: "智能设备状态",
      //     icon: "iconfont icon-dot",
      //     breadcrumb: true
      //   },
      // }, {
      //   path: "wistomPatrol",
      //   name: "wistomPatrol",
      //   component: () =>
      //     import('views/baseManage/wistomPatrol/index.vue'),
      //   meta: {
      //     title: "智能巡检",
      //     icon: "iconfont icon-dot",
      //     breadcrumb: true
      //   },
      // }, {
      //   path: "lightSwitch",
      //   name: "lightSwitch",
      //   component: () =>
      //     import('views/baseManage/lightSwitch/index.vue'),
      //   meta: {
      //     title: "智能灯光开关",
      //     icon: "iconfont icon-dot",
      //     breadcrumb: true
      //   },
      // }, {
      //   path: "faultHistory",
      //   name: "faultHistory",
      //   component: () =>
      //     import('views/baseManage/faultHistory/index.vue'),
      //   meta: {
      //     title: "故障记录",
      //     icon: "iconfont icon-dot",
      //     breadcrumb: true
      //   },
      // }
    ]
  }
]
export default router
/* export default new Router([
  // { path: '/indexPage', redirect: '/home' },
  // {
  //   path: '/',
  //   component: AdminView,
  //   redirect: '/home',
  //   name: 'index',
  //   iconCls: '',
  //   leaf: true,
  //   meta: {
  //     hideInMenu: true,
  //     title: '首页',
  //     icon: 'iconfont icon-home',
  //     breadcrumb: true
  //   },
  //   children: [{
  //     path: "home",
  //     name: "home",
  //     component: () =>
  //       import('views/Home.vue'),
  //     meta: {
  //       title: "首页",
  //       icon: "iconfont icon-dot",
  //       breadcrumb: true
  //     },
  //   }]
  // },
  // {
  //   path: '/login',
  //   name: 'login',
  //   hidden: true,
  //   component: Login,
  //   meta: {
  //     hideInMenu: true,
  //     title: '登录',
  //     icon: 'iconfont icon-home'
  //   },
  // },
  {
    path: '/baseManage',
    name: 'baseManage',
    component: AdminView,
    iconCls: '',
    leaf: true,
    meta: {
      hideInMenu: false,
      title: '基础管理',
      icon: 'iconfont icon-jichuguanli',
      breadcrumb: true
    },
    children: [
      {
        path: "baseDataBoard",
        name: "baseDataBoard",
        component: () =>
          import('@/views/baseManage/baseDataBoard/index'),
        meta: {
          title: "数据看板",
          icon: "iconfont icon-dot",
          breadcrumb: true
        },
      },
      // {
      //   path: "deviceStatus",
      //   name: "deviceStatus",
      //   component: () =>
      //     import('views/baseManage/deviceStatus/index.vue'),
      //   meta: {
      //     title: "智能设备状态",
      //     icon: "iconfont icon-dot",
      //     breadcrumb: true
      //   },
      // }, {
      //   path: "wistomPatrol",
      //   name: "wistomPatrol",
      //   component: () =>
      //     import('views/baseManage/wistomPatrol/index.vue'),
      //   meta: {
      //     title: "智能巡检",
      //     icon: "iconfont icon-dot",
      //     breadcrumb: true
      //   },
      // }, {
      //   path: "lightSwitch",
      //   name: "lightSwitch",
      //   component: () =>
      //     import('views/baseManage/lightSwitch/index.vue'),
      //   meta: {
      //     title: "智能灯光开关",
      //     icon: "iconfont icon-dot",
      //     breadcrumb: true
      //   },
      // }, {
      //   path: "faultHistory",
      //   name: "faultHistory",
      //   component: () =>
      //     import('views/baseManage/faultHistory/index.vue'),
      //   meta: {
      //     title: "故障记录",
      //     icon: "iconfont icon-dot",
      //     breadcrumb: true
      //   },
      // }
    ]
  }
]) */