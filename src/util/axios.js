import axios from 'axios'
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { baseURL } from '@/config'
// import { ElNotification, ElMessageBox, ElLoading, } from 'element-plus';
import promise from 'es6-promise';
import store from '@/store'
import router from '@/router';
// import { getLocal } from '@/util/tool';
// import { ResProps } from '@/util/constants';
const qs = require('qs');
const isProduction = process.env.NODE_ENV !== 'development';
promise.polyfill();

// const urlApi = {
//   'development': Config.baseURL.dev,
//   'production': Config.baseURL.pro
// }
// const baseURL = baseURL
document.cookie = 'SameSite=None; Secure';
class apiRequest {
  // 基础
  constructor () {
    this.baseURL = baseURL, // 默认baseURL
    this.timeOut = false;
  }

  // 默认配置
  getConfigInfo () {
    const config = {
      baseURL: isProduction ? baseURL : '',
      timeout: 60000,
      // responseType: 'json', // default IE不支持该配置项，启用后返回的数据将没有data字段
      headers: { 'content-type': 'application/json;charset=UTF-8' } // 默认头
    }
    return config
  }

  // 定义拦截器
  interceptor (instance, options) {
    // 请求前
    instance.interceptors.request.use(config => {
      store.commit('set_loadingCont', true)
      return config
    }, (err) => {
      // 关闭全局loading...
      store.commit('set_loadingCont', false)
      return err
    })
    // 响应后
    instance.interceptors.response.use((res) => {
      // 关闭全局loading...
      store.commit('set_loadingCont', false)
      if (res.data.code == '200') {
        return res.data
      } else if (res.data.code === '1000') { // 登录超时,需要重新登录
        if (!this.timeOut) {
          this.timeOut = true;
          // ElMessageBox.alert('用户登录超时', '警告', {
          //   confirmButtonText: '确定',
          //   type: 'error',
          //   callback: (action) => {
          //     if(action === 'confirm') {
          //       // 清空登录数据
          //       store.commit('user/outUserLogin')
          //       router.push({
          //         name: 'login'
          //       })
          //     }
          //   }
          // });
        }
      } else if (options.type === 1) {
        return res;
      } else {
        // ElNotification({
        //   title: '失败',
        //   message: res.data.message,
        //   position: 'bottom-right',
        //   type: 'error'
        // });
      }
    }, (err) => {
      const error = err.response;
      if (error.data.code === '1000') { // 登录超时,需要重新登录
        if (!this.timeOut) {
          this.timeOut = true;
          // ElMessageBox.alert('用户登录超时', '警告', {
          //   confirmButtonText: '确定',
          //   type: 'error',
          //   callback: (action) => {
          //     if(action === 'confirm') {
          //       // 清空登录数据
          //       store.commit('user/outUserLogin')
          //       router.push({
          //         name: 'login'
          //       })
          //     }
          //   }
          // });
        }
      } else {
        // ElNotification({
        //   title: '失败',
        //   message: err.error,
        //   position: 'bottom-right',
        //   type: 'error'
        // });
      }
      // 关闭全局loading...
      store.commit('set_loadingCont', false)
      return err
    })
  }

  // 请求创建
  request (options) {
    const instance = axios.create();
    options = Object.assign(
      this.getConfigInfo(),
      options
    )
    this.interceptor(instance, options)
    return instance(options)
  }
}




const apiCreat = new apiRequest()

export default apiCreat



