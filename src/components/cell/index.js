import Vue from 'vue'
import iView from 'iview'
import echarts from 'echarts'
import liquidfill from 'echarts-liquidfill'
import ElementUI from 'element-ui'
import dataV from '@jiaminghi/data-view'
import TFetch from 'tfetch'
import { deepMerge } from '@/assets/lib/utils';
import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/icon/LampPoleIconFont/iconfont.css';
import '@/assets/icon/NetWorkIconFont/iconfont.css';
import '@/assets/icon/UIIconFont/iconfont.css';

require('../../common/fonts/PingFangSC-Regular/PingFang Regular.css')
require('../../common/fonts/DIN_Alternate_Bold.css')
require('../../common/fonts/YouSheBiaoTiHei-2.css')
require('../../common/fonts/PangMenZhengDaoBiaoTiTi-1.css')

const http = new TFetch({
  baseUrl: './mock',
  timeout: 5000,
})

const fetchMock = url => {
  return new Promise((resolve, reject) => {
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}


// 导入组件
// import Bar from './bar'
import RadarMap from './radarMap'
import Board from './board'
import OpRings from './opRings'
import Ranking from './ranking'
import IndexData from './indexData'
import Pie from './pie'
import Crumbs from './crumbs'
import Suspension from './suspension'
import Table from './table'
import Topology from './topology'
import MapCharts from './mapcharts'
import headline from './headline'
import date from './date'
import pagination from './pagination'
import tabs from './tabs'
import Barchart from './barchart'
import line from './line'

// 组件列表
const components = [
  ...RadarMap.components,
  ...Board.components,
  ...OpRings.components,
  ...Ranking.components,
  ...IndexData.components,
  ...Pie.components,
  ...Crumbs.components,
  ...Suspension.components,
  ...Table.components,
  ...Topology.components,
  ...MapCharts.components,
  ...headline.components,
  ...date.components,
  ...pagination.components,
  ...tabs.components,
  ...Barchart.components,
  ...line.components
]

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，那么所有的组件都会被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) { return; }
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component))
  Vue.config.productionTip = false;
  Vue.use(iView)
  Vue.use(liquidfill)
  Vue.use(dataV)
  Vue.use(ElementUI)
  Vue.prototype.$deepMerge = deepMerge;
  Vue.prototype.$echarts = echarts
  Vue.prototype.$http = http
  Vue.prototype.$fetchMock = fetchMock
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
} else {
  install(Vue)
}

export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
}