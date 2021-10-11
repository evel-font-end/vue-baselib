import api from '@/util/axios'

// 首页-网关状态统计
export const getGatewayStatisticsInfo = () => {
    return api.request({
        method: 'GET',
        url: `/api/statistics/getGatewayStatisticsInfo`
    })
}

/** 获取网站名称 */
export const getAppName = () => {
    return api.request({
        method: 'GET',
        url: '/api/dictionary/APP_NAME'
    })
}

// 根据父级code查询字典
export const dictionaryListByConditions = (data: any) => {
    return api.request({
        method: 'POST',
        url: '/api/dictionary/dictionaryListByConditions',
        data
    })
}

/** 首页-智慧校园照明应用分布 */
export const getSmartCampusDistribution = () => {
    return api.request({
        method: 'GET',
        url: '/api/statistics/getSmartCampusDistribution'
    })
}

/** 根据字典code获取子级字典 */
export const selectListByParentCode = (code: string) => {
    return api.request({
        method: 'GET',
        url: `/api/dictionary/selectListByParentCode?code=${code}`
    })
}

