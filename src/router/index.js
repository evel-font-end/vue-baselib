// import Vue from 'vue'
// import Router from 'vue-router'

Vue.use(VueRouter)
export const children = [{
  path: '/mapcharts',
  name: 'mapcharts',
  title: '地图',
  icon: 'icon-ditu',
  meta: {
    title: '地图'
  },
  component: res => require(['@/components/pages/mapcharts'], res),
}, {
  path: '/bar',
  name: 'bar',
  title: '混合图表',
  icon: 'icon-hunhetubiao',
  meta: {
    title: '混合图表'
  },
  component: res => require(['@/components/pages/bar'], res),
}, {
  path: '/line',
  name: 'line',
  title: '折线图',
  icon: 'icon-zhexiantu',
  meta: {
    title: '折线图'
  },
  component: res => require(['@/components/pages/line'], res),
},
{
  path: '/barChart',
  name: 'barChart',
  title: '柱状图',
  icon: 'icon-zhuzhuangtu',
  meta: {
    title: '柱状图'
  },
  component: res => require(['@/components/pages/barChart'], res),
},
{
  path: '/indexData',
  name: 'indexData',
  title: '指标数据',
  icon: 'icon-zhibiaoshuju',
  meta: {
    title: '指标数据'
  },
  component: res => require(['@/components/pages/indexData'], res),
},
{
  path: '/pie',
  name: 'pie',
  title: '饼状图',
  icon: 'icon-bingzhuangtu',
  meta: {
    title: '饼状图'
  },
  component: res => require(['@/components/pages/pie'], res),
},
{
  path: '/board',
  name: 'board',
  title: '仪表盘',
  icon: 'icon-yibiaopan',
  meta: {
    title: '仪表盘'
  },
  component: res => require(['@/components/pages/board'], res),
},
{
  path: '/crumbs',
  name: 'crumbs',
  title: '面包屑',
  icon: 'icon-mianbaoxiedaohang',
  meta: {
    title: '面包屑'
  },
  component: res => require(['@/components/pages/crumbs'], res),
},
{
  path: '/topology',
  name: 'topology',
  title: '拓补图',
  icon: 'icon-tuoputu',
  meta: {
    title: '拓补图'
  },
  component: res => require(['@/components/pages/topology'], res),
},
{
  path: '/table',
  name: 'table',
  title: '表格',
  icon: 'icon-biaoge',
  meta: {
    title: '表格'
  },
  component: res => require(['@/components/pages/table'], res),
},
{
  path: '/suspension',
  name: 'suspension',
  title: '悬浮框',
  icon: 'icon-xuanfuchuang',
  meta: {
    title: '悬浮框'
  },
  component: res => require(['@/components/pages/suspension'], res),
},
{
  path: '/radarMap',
  name: 'radarMap',
  title: '雷达图',
  icon: 'icon-leidatu',
  meta: {
    title: '雷达图'
  },
  component: res => require(['@/components/pages/radarMap'], res),
},
{
  path: '/opRings',
  name: 'opRings',
  title: '环形图',
  icon: 'icon-huanxingtu',
  meta: {
    title: '环形图'
  },
  component: res => require(['@/components/pages/opRings'], res),
},
{
  path: '/ranking',
  name: 'ranking',
  title: '排名',
  icon: 'icon-paiming1',
  meta: {
    title: '排名'
  },
  component: res => require(['@/components/pages/ranking'], res),
},
{
  path: '/tabs',
  name: 'tabs',
  title: 'tab标签',
  icon: 'icon-Tabbiaoqian',
  component: res => require(['@/components/pages/tabs'], res),
},
{
  path: '/headline',
  name: 'headline',
  title: '标题',
  icon: 'icon-biaoti',
  component: res => require(['@/components/pages/headline'], res),
},
{
  path: '/date',
  name: 'date',
  title: '日期',
  icon: 'icon-riqi',
  component: res => require(['@/components/pages/date'], res),
},
{
  path: '/pagination',
  name: 'pagination',
  title: '分页',
  icon: 'icon-fenye',
  component: res => require(['@/components/pages/pagination'], res),
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
export default new VueRouter({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'home'
      },
      component: res => require(['@/components/pages/home'], res),
      redirect: '/bar',
      children: children
    },
  ],
})
