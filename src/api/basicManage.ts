import api from '@/util/axios'

// 基础管理
// 根据当前传入区域id获取名下的班级信息
export const getClassroomBySiteId = (data: any) => {
  return api.request({
    method: 'POST',
    url: `/api/gateway/getClassroomBySiteId`,
    data
  })
}

// 根据当前传入班级id获取巡检信息
export const getPatrolInfoBySiteId = (data: any) => {
  return api.request({
    method: 'GET',
    url: `/api/gateway/getPatrolInfoBySiteId?siteId=${data}`
  })
}

// 根据区域ID查询网关信息
export const listGatewayInfo = (data: any) => {
  return api.request({
    method: 'GET',
    url: `/api/gateway/listGatewayInfo/${data}`
  })
}

// 根据当前传入区域id控制其下所有设备开关
export const controlDeviceBySiteId = (data: any) => {
  return api.request({
    method: 'POST',
    url: `/api/gateway/controlDeviceBySiteId`,
    data
  })
}

// 根据当前传入siteId获取当前只能开关状态
export const getSwitchStatusBySiteId = (data: any) => {
  return api.request({
    method: 'GET',
    url: `/api/gateway/getSwitchStatusBySiteId?siteId=${data}`
  })
}

// 根据当前传入siteId获取当前班级开关状态及模式回显
export const getClassLightStatusEcho = (data: any) => {
  return api.request({
    method: 'GET',
    url: `/api/gateway/getClassLightStatusEcho?siteId=${data}`
  })
}

// 根据当前传入模式id获取位置状态
export const getLocationStatusByModeId = (data: any) => {
  return api.request({
    method: 'GET',
    url: `/api/gateway/getLocationStatusByModeId?modeId=${data}`
  })
}
