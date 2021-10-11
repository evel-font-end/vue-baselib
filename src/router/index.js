import Vue from 'vue'
import VueRouter from 'vue-router'
import Config from '@/config'
import routes from './router'
import { getLocal, delLocal, saveLocal, hasOneOf } from '@/util/tool'
import { creatMenuByRouters } from '@/util/util'
import { getWhiteList } from '@/store/public/actions';
import store from '@/store'
// import {
//   getAppName
// } from '@/api/index';
// 重写路由的push方法
const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return routerPush.call(this, location, onResolve, onReject);
  return routerPush.call(this, location);
};

Vue.use(VueRouter)

/* const router = createRouter({
  history: createWebHashHistory(),
  // base: process.env.BASE_URL,
  routes: (routes as unknown) as RouteRecordRaw[]
}) */

const createRouter = () => new VueRouter({
  // mode: 'history', // require service support
  // base: Config.baseURL,
  routes: routes
})

const router = createRouter()
let meanOperation, whiteRouterList, defaultPage, defaultPageName; // 用户权限 && 白名单

router.beforeEach((to, from, next) => {
  const appName = store.state.common.appName;
  const appNameDate = store.state.common.appNameDate;
  const userInfo = store.state.user.username;
  store.commit('set_loadingCont', true);
  /* if (!appName || (Date.now() - appNameDate > 600000)) {
    getAppName().then((res) => {
      if (res.code === '200') {
        document.title = res.data.value
        store.commit('set_common', {
          appName: res.data.value,
          appNameDate: Date.now()
        });
      }
    })
  } else if (document.title !== appName) { */
    document.title = appName
  // }
  if (!userInfo) {
    delLocal('menuTags') // page
    delLocal('whiteRouterList') // 可访问页面白名单
    delLocal('meanOperation') // 当前页面权限
  } else {
    meanOperation = getLocal('meanOperation') || {} // 用户权限
    whiteRouterList = getLocal('whiteRouterList') // 白名单
  }

  if (userInfo && store.state.meanOperation.size === 0) {
    if (meanOperation && meanOperation.length > 0) {
      meanOperation.forEach((item) => {
        store.commit('set_meanOperation', { key: item[0], value: item[1] })
      })
    }
  }
  if (!userInfo && to.name !== 'login') {
    // 未登录且要跳转的页面不是登录页
    saveLocal('pushName', to.name);
    next({
      path: '/login' // 跳转到登录页
    })
    // } else if ((!userInfo && to.name === 'login') || to.name === 'newToiltDetail') {
  } else if ((!userInfo && to.name === 'login')) {
    // 未登陆且要跳 转的页面是登录页
    // if (to.name === 'login' && from.name === 'bigScreen') {
      next()
    // } else {
    // next() // 跳转
    // }
  } else if (userInfo && to.path == '/') {
    // 重定向首页
    next()
  } else if (userInfo && to.name === 'login') {
    // 已登录且要跳转的页面是登录页
    if (meanOperation && whiteRouterList) {
      // 已有权限表跟可访问的白名单
      next({
        name: Config.homeName
      })
    } else {
      store.dispatch('getUserRoleRouter', userInfo).then(res => {
        next({
          name: Config.homeName // 跳转到homeName页
        })
      })
    }

    store.commit('set_openPage', Config.homeName)
  } else if (to.name == null && to.path) {
    // 在地址栏直接输入url时，to.name会等于null
    if (meanOperation && whiteRouterList) {
      const toName = to.path.split('/')[to.path.split('/').length - 1];
      // console.log(toName, to);
      if (whiteRouterList.some((name) => name === toName)) {
        const openPage = getLocal('openPage');
        toName == Config.homeName ? next({ name: Config.homeName }) : next(to.path)
        store.commit('set_openPage', toName)
      } else {
        next()
      }
    } else {
      store.dispatch('getUserRoleRouter', userInfo).then(res => {
        next({ path: to.path })
      })
    }
  } else {
    if (meanOperation && whiteRouterList) {
      const toName = to.name;
      if (whiteRouterList.some((name) => name === toName)) {
        const openPage = getLocal('openPage');
        next()
        store.commit('set_openPage', toName)
      } else {
        next()
      }
    } else {
      store.dispatch('getUserRoleRouter', userInfo).then(res => {
        next({ path: to.path })
      })
    }
  }
})

router.afterEach((to, from) => {
  store.commit('set_loadingCont', false)
})


export default router
