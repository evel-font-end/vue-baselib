import api from '@/util/axios'

// 故障记录
// 查询故障信息
export const getQueryFault = (data: any) => {
  return api.request({
    method: 'POST',
    url: `/api/fault_record/queryFault`,
    data
  })
}

// 查询修理记录
export const getQueryRepair = (data: any) => {
  return api.request({
    method: 'POST',
    url: `/api/fault_record/queryRepair`,
    data
  })
}

// 新增修理记录
export const addRepair = (data: any) => {
  return api.request({
    method: 'POST',
    url: `/api/fault_record/addRepair`,
    data
  })
}
