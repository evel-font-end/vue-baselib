import api from '@/util/axios'

// 数据看板
// 数据统计
export const getCount = (data:number | string) => {
  return api.request({
    method: 'GET',
    url: `/api/statistics/count?siteId=${data}`,
  })
}

// 本年度能耗分析
export const getUserPowerStatistics = (data:number | string) => {
  return api.request({
    method: 'GET',
    url: `/api/statistics/getUserPowerStatistics?siteId=${data}`
  })
}

// 智慧教室模式应用情况分析
export const getClassroomModeAnalysis = (data:number | string) => {
  return api.request({
    method: 'GET',
    url: `/api/statistics/getClassroomModeAnalysis?siteId=${data}`
  })
}

// 能耗分项分析
export const getHalfYearTceAnalysis = (data:number | string) => {
  return api.request({
    method: 'GET',
    url: `/api/statistics/getHalfYearTceAnalysis?siteId=${data}`
  })
}

// 数据看板-top20用电量排行
export const getUsePowerTop20 = (data:number | string) => {
  return api.request({
    method: 'GET',
    url: `/api/statistics/getUsePowerTop20?siteId=${data}`
  })
}
