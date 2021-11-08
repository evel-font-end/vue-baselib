// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import store from './store'
import echarts from 'echarts'
import liquidfill from 'echarts-liquidfill'
import ElementUI from 'element-ui'
import dataV from '@jiaminghi/data-view'
import TFetch from 'tfetch'
import mavonEditor from 'mavon-editor'
import highcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
import '@/assets/lib/hljs';
import 'mavon-editor/dist/css/index.css'
import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css'
// import MyComponent from '../lib/vue-baselib.js'

require('./common/fonts/PingFangSC-Regular/PingFang Regular.css')
require('./common/fonts/DIN_Alternate_Bold.css')
require('./common/fonts/YouSheBiaoTiHei-2.css')
require('./common/fonts/PangMenZhengDaoBiaoTiTi-1.css')
Vue.config.productionTip = false;
Vue.use(iView)
// Vue.use(MyComponent)
Vue.use(liquidfill)
Vue.use(dataV)
Vue.use(ElementUI)
Vue.use(mavonEditor)
highcharts3d(highcharts)

Vue.prototype.$echarts = echarts

const http = new TFetch({
  baseUrl: './mock',
  timeout: 5000,
})

export const fetchMock = url => {
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
Vue.prototype.$http = http
Vue.prototype.$fetchMock = fetchMock

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
