import api from '@/util/axios'

// 根据查询条件获取角色列表
export const listRolesByCondition = (data: any) => {
  return api.request({
    method: 'POST',
    url: `/api/role/listRolesByCondition`,
    data
  })
}

//新增角色
export const addRole = (data: any) => {
  return api.request({
    method: 'POST',
    url: `/api/role/addRole`,
    data
  })
}

// 编辑角色
export const updateRole = (data: any) => {
  return api.request({
    method: 'PUT',
    url: `/api/role/updateRole`,
    data
  })
}

// 禁用角色
export const disableRole = (data: any) => {
  return api.request({
    method: 'POST',
    url: `/api/role/disableRole?id=${data}`,
  })
}

// 启用角色
export const enableRole = (data: any) => {
  return api.request({
    method: 'POST',
    url: `/api/role/enableRole?id=${data}`,
  })
}

// 根据角色编码查询拥有的权限
export const listPermissionsByRoleCode = (data: any) => {
  return api.request({
    method: 'POST',
    url: `/api/role/listPermissionsByRoleCode?roleCode=${data}`,
  })
}

// 角色管理 - 角色配置权限
export const addRolePermissions = ({ permissionsList, roleCode }:any) => {
  const data = {
    permissionsList, // 权限编码列表
    roleCode // 角色编码
  }
  return api.request({
    method: 'post',
    url: '/api/role/addRolePermissions',
    data
  })
}

// 删除角色
export const deleteRole = (data: any) => {
  return api.request({
    method: 'DELETE',
    url: `/api/role/deleteRole/${data}`,
  })
}
