import { userLogin, logout } from "../../api/user";
import { delLocal } from '../../util/tool'
import Cookies from 'js-cookie'
import Config from '@/config'
// 用户信息
export default {
    namespaced: true,
    state() {
        return {
            username: Cookies.get('username') || '',  // 用户名
            user: Cookies.get('user') || '',  // id
            operation: '',  // 用户可访问页面&&权限
            userImgPath: ''   // 用户头像
        }
    },
    mutations: {
        // 设置登陆用户信息
        setUserInfo(state, {username, user}) {
            state.username = username
            state.user = user
            Cookies.set('username', username, { expires: Config.cookieExpires || 1 })
            Cookies.set('user', user, { expires: Config.cookieExpires || 1 })
        },
        // 退出登录
        outUserLogin(state) {
            state.username = ''
            state.user = ''
            state.appCodes = {appCodes: [], appCode: undefined}
            Cookies.remove('username')
            Cookies.remove('password')
            Cookies.remove('rememberMe')
            Cookies.remove('user')
            delLocal('menuTags')  // page
            delLocal('refreshLog')  // 删除系统日志每隔10分钟更新一次记录
            delLocal('whiteRouterList')  // 可访问页面白名单
            delLocal('meanOperation')  // 当前页面权限
            delLocal('keepAliveRouter')  // 删除缓存白名单
            delLocal('appCodes')  // 删除缓存appCode
            window.location.reload();
        }
    },
    getters: {
    },
    actions: {
        // 登录
        userLoginTo({ commit }, { username, password }) {
            username = username.trim()
            return new Promise((resolve, reject) => {
                
                userLogin({ username, password }).then(res => {
                    if (res.code === "200") {
                        console.log('res', res);
                        const data = res.data
                        commit('setUserInfo', data.username)
                        resolve(data)
                    }else{
                        reject(res.message)
                    }
                }).catch(err => {
                    reject(err)
                })
            })
        },
        // 登出
        userLoginOut({ commit }) {
            return new Promise((resolve, reject) => {
                logout().then(res => {
                    if (res.code === "200") {
                        commit('outUserLogin')
                        resolve()
                    } else {
                        reject(res.message)
                    }
                })
            })
        }
    }
}
