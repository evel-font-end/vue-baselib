import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
// 全局
import state from './public/state'
import mutations from './public/mutations'
import  * as getters from './public/getters'
import  * as actions from './public/actions'


import createLogger from 'vuex/dist/logger'   // 每次通过mutations修改state都会返回log数据查看

Vue.use(Vuex); // 注册
Vue.config.devtools = true;
const debug = process.env.NODE_ENV !== 'production'  // 调试模式

const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    // strict: debug,  // 严格模式, state状态变更只要不是 mutation 引起，将会抛出错误
    // plugins: debug ? [createLogger()] : [], // 调试
    modules: {
        user  // 用户的存储数据
    }
})

// 开启热重载
if(module.hot){
    module.hot.accept([
        './public/actions',
        './public/getters',
        './public/mutations',
        './public/state',
        './modules/user'
    ], () => {
        const newActions = require('./public/actions').default
        const newGetterss = require('./public/getters').default
        const newMutation = require('./public/mutations').default
        const newState = require('./public/state').default
        const userState = require('./modules/user').default

        // 加载新模块
        store.hotUpdate({
            state: newState,
            mutations: newMutation,
            actions: newActions,
            getters: newGetterss,
            modules:{
                userState
            }
        })
    })
}

export default store;