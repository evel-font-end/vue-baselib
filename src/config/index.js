import { getLocal, delLocal, saveLocal, hasOneOf } from '../util/tool'

const config = {
  cookieExpires: 1, // token在Cookie中存储的天数，默认1天,
  homeName: 'index', // 默认打开的首页的路由name值，默认为index
  // api请求默认前缀
  baseURL: {
    dev: 'http://119.29.183.252:3007', // 测试地址
    pro: 'http://119.29.183.252:3007'
  }
};

export const urlApi = {
  'development': config.baseURL.dev,
  'production': config.baseURL.pro
}

export const baseURL = urlApi[process.env.NODE_ENV || 'development']

export default config;
