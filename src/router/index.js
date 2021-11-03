import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta:{
        title: 'home'
      },
      component: res => require(['@/components/pages/home'], res),
      children: [{
        path: '/bar',
        name: 'bar',
        title: '混合图表',
        icon: 'ios-repeat',
        meta:{
          title: '混合图表'
        },
        component: res => require(['@/components/pages/bar'], res),
      }, {
        path: '/line',
        name: 'line',
        title: '折线图',
        icon: 'arrow-graph-up-right',
        meta:{
          title: '折线图'
        },
        component: res => require(['@/components/pages/line'], res),
      },
      {
        path: '/barChart',
        name: 'barChart',
        title: '柱状图',
        icon: 'md-stats',
        meta:{
          title: '柱状图'
        },
        component: res => require(['@/components/pages/barChart'], res),
      },
      {
        path: '/indexData',
        name: 'indexData',
        title: '指标数据',
        icon: 'md-stats',
        meta:{
          title: '指标数据'
        },
        component: res => require(['@/components/pages/indexData'], res),
      },
      {
        path: '/pie',
        name: 'pie',
        title: '饼状图',
        icon: 'ios-pie-outline',
        meta:{
          title: '饼状图'
        },
        component: res => require(['@/components/pages/pie'], res),
      },
      {
        path: '/board',
        name: 'board',
        title: '仪表盘',
        icon: 'ios-pie-outline',
        meta:{
          title: '仪表盘'
        },
        component: res => require(['@/components/pages/board'], res),
      },
      {
        path: '/crumbs',
        name: 'crumbs',
        title: '面包屑',
        icon: 'ios-pie-outline',
        meta:{
          title: '面包屑'
        },
        component: res => require(['@/components/pages/crumbs'], res),
      },
      {
        path: '/topology',
        name: 'topology',
        title: '拓补图',
        icon: 'ios-pie-outline',
        meta:{
          title: '拓补图'
        },
        component: res => require(['@/components/pages/topology'], res),
      },
      {
        path: '/table',
        name: 'table',
        title: '表格',
        icon: 'ios-pie-outline',
        meta:{
          title: '表格'
        },
        component: res => require(['@/components/pages/table'], res),
      },
      {
        path: '/suspension',
        name: 'suspension',
        title: '悬浮框',
        icon: 'ios-pie-outline',
        meta:{
          title: '悬浮框'
        },
        component: res => require(['@/components/pages/suspension'], res),
      },
      {
        path: '/mapcharts',
        name: 'mapcharts',
        title: '地图',
        icon: 'ios-pie-outline',
        meta:{
          title: '地图'
        },
        component: res => require(['@/components/pages/mapcharts'], res),
      },
      {
        path: '/radarMap',
        name: 'radarMap',
        title: '雷达图',
        icon: 'ios-pie-outline',
        meta:{
          title: '雷达图'
        },
        component: res => require(['@/components/pages/radarMap'], res),
      },
      {
        path: '/opRings',
        name: 'opRings',
        title: '环形图',
        icon: 'ios-pie-outline',
        meta:{
          title: '环形图'
        },
        component: res => require(['@/components/pages/opRings'], res),
      },
      {
        path: '/ranking',
        name: 'ranking',
        title: '排名',
        icon: 'ios-pie-outline',
        meta:{
          title: '排名'
        },
        component: res => require(['@/components/pages/ranking'], res),
      },
        /* {
          path: '/radar',
          name: 'radar',
          icon: 'ionic',
          component: res => require(['@/components/pages/radar'], res),
        }, {
          path: '/table',
          name: 'table',
          component: res => require(['@/components/pages/table'], res),
        }, {
          path: '/box',
          name: 'box',
          component: res => require(['@/components/pages/box'], res),
        }, {
          path: '/load',
          name: 'load',
          component: res => require(['@/components/pages/load'], res),
        }, {
          path: '/funnel',
          name: 'funnel',
          component: res => require(['@/components/pages/funnel'], res),
        }, {
          path: '/ball',
          name: 'ball',
          component: res => require(['@/components/pages/ball'], res),
        } */
      ]
    },
  ],
})
