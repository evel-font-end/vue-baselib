import api from '@/util/axios'
const qs = require('qs');

// 用户登陆
export const userLogin = ({ username, password, captcha }) => {
  const data = qs.stringify({
    username,
    password,
    captcha
  })

  return api.request({
    method: 'post',
    url: '/api/login',
    data,
    headers: {'content-type': 'application/x-www-form-urlencoded'}
  })
}

// 用户登出
export const logout = () => {
  return api.request({
    method: 'get',
    url: '/api/logout'
  })
}

// 获取当前用户可访问的权限
export const getuserRoleMeanList = (username) => {
  // return new Promise<any>((resolve, reject) => {
  //   resolve({
  //     code: '200',
  //     data: {
  //       mergedPermissions: []
  //     }
  //   })
  // })
    return api.request({
    method: 'get',
    url: '/api/adminUser/' + username
  })
}


// 修改密码
// export const updatePassword = (data) => {
//   return api.request({
//     method: 'post',
//     url: '/api/user/updatePassword',
//     data
//   })
// }

// 服务器端验证及请求生成随机数
export const verifyCertAndGenRandom = (data) => {
  return api.request({
    method: 'post',
    url: '/api/verifyCertAndGenRandom',
    headers: { 'content-type': 'multipart/form-data' },
    data
  })
}

// 查询当前用户已拥有应用
export const getProjectByUser = (data) => {
  return api.request({
    method: 'post',
    url: '/api/adminUser/getProjectByUser',
    data
  })
}

// 获取公钥
export const getPublicKey = (data) => {
  return api.request({
    method: 'post',
    url: '/api/adminUser/getPublicKey',
    data
  })
}

// 修改密码
export const updatePassword = (data) => {
  return api.request({
    method: 'post',
    url: '/api/adminUser/updatePassword2',
    data
  })
}

// 根据查询条件获取区域列表
export const listSiteTree = () => {
  return api.request({
    method: 'get',
    url: '/api/site/listSiteTree'
  })
}

// 查询直属下级
export const getUnderling = (siteId) => {
  return api.request({
    method: 'get',
    url: `/api/site/getUnderling/${siteId}`
  })
}


