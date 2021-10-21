import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: res => require(['@/components/pages/home'], res),
      children: [{
        path: '/bar',
        name: 'bar',
        title: '混合图表',
        icon: 'stats-bars',
        component: res => require(['@/components/pages/bar'], res),
      }, {
        path: '/line',
        name: 'line',
        title: '折线图',
        icon: 'arrow-graph-up-right',
        component: res => require(['@/components/pages/line'], res),
      }, {
        path: '/pie',
        name: 'pie',
        title: '饼状图',
        icon: 'ios-pie-outline',
        component: res => require(['@/components/pages/pie'], res),
      },
      {
        path: '/board',
        name: 'board',
        title: '仪表盘',
        icon: 'ios-pie-outline',
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
      /* {
        path: '/radar',
        name: 'radar',
        icon: 'ionic',
        component: res => require(['@/components/pages/radar'], res),
      }, 
       {
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
