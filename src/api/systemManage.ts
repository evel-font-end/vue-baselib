import api from '@/util/axios'

// 策略设置
// 增加灯策略
export const addLightPolicy = (data: any) => {
    return api.request({
        method: 'POST',
        url: '/api/lamp_plan/addLightPolicy',
        data
    })
}

// 删除灯策略
export const deleteLightPolicy = (id: any) => {
    return api.request({
        method: 'POST',
        url: `/api/lamp_plan/deleteLightPolicy/${id}`
    })
}

// 获取班级列表
export const getClassRoomList = (data: any) => {
    return api.request({
        method: 'POST',
        url: '/api/lamp_plan/getClassRoomList',
        data
    })
}

// 获取灯策略
export const getLightPolicy = (data: any) => {
    return api.request({
        method: 'GET',
        url: `/api/lamp_plan/getLightPolicy?siteId=${data.siteId}&name=${data.name}`
    })
}

// 单班级自定义灯控 or 批量班级自定义灯控 or 策略控制
export const lampControll = (data: any) => {
    return api.request({
        method: 'POST',
        url: '/api/lamp_plan/lampControll',
        data
    })
}


// 修改灯策略
export const updateLightPolicy = (data: any) => {
    return api.request({
        method: 'POST',
        url: '/api/lamp_plan/updateLightPolicy',
        data
    })
}

// 智能场所设置

// 新增场所
export const addIntelligentPlace = (data: any) => {
    return api.request({
        method: 'POST',
        url: '/api/intelligent_place/addIntelligentPlace',
        data
    })
}


// 删除场所
export const deleteIntelligentPlace = (id: any) => {
    return api.request({
        method: 'POST',
        url: `/api/intelligent_place/deleteIntelligentPlace/${id}`,
    })
}

// 获取网关类型
export const getGatewayType = (data?: any) => {
    return api.request({
        method: 'POST',
        url: `/api/intelligent_place/getGatewayType`,
        data
    })
}


// 获取场所
export const getIntelligentPlace = (data: any) => {
    return api.request({
        method: 'POST',
        url: '/api/intelligent_place/getIntelligentPlace',
        data
    })
}

// 下载模板
export const getTemp = () => {
    return api.request({
        method: 'GET',
        responseType: 'blob',
        type: 1, // 文件类型
        url: `/api/intelligent_place/getTemp`
    })
}

// 导入模板
export const importTemp = (data: any) => {
    return api.request({
        method: 'POST',
        url: '/api/intelligent_place/importTemp',
        headers: { 'content-type': 'multipart/form-data' },
        data
    })
}

// 修改场所
export const updateIntelligentPlace = (data: any) => {
    return api.request({
        method: 'POST',
        url: '/api/intelligent_place/updateIntelligentPlace',
        data
    })
}

// 用户管理
// 新增用户
export const addUser = (data: any) => {
    return api.request({
        method: 'POST',
        url: '/api/adminUser/addUser',
        data
    })
}
// 更新用户
export const updateUser = (data: any) => {
    return api.request({
        method: 'PUT',
        url: '/api/adminUser/updateUser',
        data
    })
}

// 注销用户
export const cancelUser = (username: string) => {
    return api.request({
        method: 'GET',
        url: `/api/adminUser/cancelUser?username=${username}`,
    })
}

// 删除用户
export const deleteUser = (username: string) => {
    return api.request({
        method: 'GET',
        url: `/api/adminUser/deleteUser?username=${username}`
    })
}

// 启用用户
export const enableUser = (username: string) => {
    return api.request({
        method: 'GET',
        url: `/api/adminUser/enableUser?username=${username}`
    })
}

// 根据用户ID查询用户信息
export const getUserById = (id: any) => {
    return api.request({
        method: 'GET',
        url: `/api/adminUser/getUserById/${id}`
    })
}

// 获取所有用户信息
export const getUserList = () => {
    return api.request({
        method: 'GET',
        url: '/api/adminUser/getUserList'
    })
}
// 根据查询条件获取用户列表
export const getUserListByCondition = (data: any) => {
    return api.request({
        method: 'POST',
        url: '/api/adminUser/getUserListByCondition',
        data
    })
}

// addpage
export const addpage = () => {
    return api.request({
        method: 'GET',
        url: '/api/adminUser/page/add'
    })
}


// addUserRolepage
export const addUserRole = () => {
    return api.request({
        method: 'GET',
        url: '/api/adminUser/page/addUserRole'
    })
}

// 详情页面
export const detail = () => {
    return api.request({
        method: 'GET',
        url: '/api/adminUser/page/detail'
    })
}


// editpage
export const editpage = () => {
    return api.request({
        method: 'GET',
        url: '/api/adminUser/page/edit'
    })
}


// 重置密码
export const resetPassword = (username: string) => {
    return api.request({
        method: 'GET',
        url: `/api/adminUser/resetPassword?username=${username}`
    })
}

/**  用户管理 - 根据用户名称查询拥有的角色 */
export const listRolesByUsername = (username: string) => {
    return api.request({
      method: 'get',
      url: `/api/role/listRolesByUsername/${username}`
    })
  }

/**  用户管理 - 配置用户角色 */

export const addUserRoles = ({ rolesList, username }: any) => {
    const data = {
      rolesList, // 角色编码列表
      username // 用户名称
    }
    return api.request({
      method: 'post',
      url: '/api/role/addUserRoles',
      data
    })
  }

