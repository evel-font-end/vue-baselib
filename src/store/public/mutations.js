import { hasValue, saveLocal, getLocal, delLocal } from '../../util/tool'
import Config from '@/config';
const mustions = {
  set_addRoutes(state, routes) {
    state.addRoutes = [...routes]
  },
  // 当前是否已经挂在了路由列表
  set_hasRouterlist (state, flag) {
    state.hasRouterlist = flag
  },
  // 当前已打开的路由便签
  set_menuTags (state, list) {
    const delKeepAliveName = state.keepAliveRouter.indexOf(list.name)

    if (!hasValue('name', list.name, state.menuTags)) {
      state.menuTags.push(list);
      saveLocal('menuTags', state.menuTags)
      if (delKeepAliveName === -1) {
        // state.keepAliveRouter.push(list.name)
        // saveLocal('keepAliveRouter', state.keepAliveRouter)
      }
    }
  },
  //
  set_hasOpenIndex (state, status) {
    state.hasOpenIndex = status
  },
  // 重置当前已打开的路由便签 (关闭全部 / 关闭其他)
  set_menuTagsList (state, list) {
    let keepName = [], tabs = [];
    state.closeAllTab = true
    if (list.length) {
      keepName = [state.openPage]
      tabs = list
    }

    state.menuTags = tabs
    state.keepAliveRouter = keepName
    saveLocal('keepAliveRouter', keepName) // 缓存当前keep-live路由名单
    saveLocal('menuTags', tabs) // 当前打开的tabs菜单
  },
  // 当前是否点击了关闭全部tab
  set_closeAllTab (state, status) {
    state.closeAllTab = status
  },
  // 删除当前储存vuex路由标签
  set_delMenuTage (state, name) {
    let list = []
    list = [...state.menuTags]

    // 删除缓存
    const delKeepAliveName = state.keepAliveRouter.indexOf(name)
    if (delKeepAliveName > -1) {
      state.keepAliveRouter.splice(delKeepAliveName, 1);
      saveLocal('keepAliveRouter', state.keepAliveRouter)
    }


    for (let i in list) {
      if (list[i].name === name) {
        let j = parseInt(i)
        let goNextTage = list[j + 1] ? list[j + 1].name : (list[j - 1] ? list[j - 1].name : Config.homeName)
        if (state.openPage === name) state.openPage = goNextTage
        list.splice(i, 1)
        state.menuTags = list
        saveLocal('menuTags', list)
        return
      }
    }
  },
  set_openPage (state, name) {
    state.openPage = name
    saveLocal('openPage', name)
  },
  set_loadingCont (state, flag) {
    if (flag !== state.loadingCont) {
      state.loadingCont = flag
    }
  },
  set_meanOperation (state, { key, value }) {
    state.meanOperation.set(key, value)
  },
  set_whritRouterList (state, list) {
    state.whiteRouterList = list
  },
  // 设置全局参数
  set_common (state, option) {
    const data = getLocal('common');
    state.common = {
      ...data,
      ...option
    };
    saveLocal('common', state.common)
  },
  // 设置全局参数
  set_appCodes (state, option) {
    const data = getLocal('appCodes');
    state.appCodes = {
      ...data,
      ...option
    };
    saveLocal('appCodes', state.appCodes)
  },
  set_checkNode (state, option) {
    state.checkNode = option.checkNode;
  },
  // 设置新大屏全局参数
  set_bigScreenNew (state, option) {
    const data = getLocal('bigScreenNew');
    state.bigScreenNew = {
      ...data,
      ...option
    };
    saveLocal('bigScreenNew', state.bigScreenNew)
  },
  del_bigScreenNew (state, option) {
    state.bigScreenNew = {}
    delLocal('bigScreenNew')
  },
  // 设置动态路由参数
  set_dynamicMenuList (state, option) {
    state.dynamicMenuList = {
      ...status,
      ...option
    }
  },
  // 设置全局参数
  set_updateTime (state, option) {
    const data = getLocal('updateTime');
    state.updateTime = {
      ...data,
      ...option
    };
    saveLocal('updateTime', state.updateTime)
  },
  set_toiltReginID (state, id) {
    state.toiltReginID = id
  },
  // 设置告警信息
  set_AlarmsData (state, option) {
    state.AlarmsData = option;
  }
}

export default mustions
