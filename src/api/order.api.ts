import http from '../utils/requset.utils'
import {ParamsPagingType} from '../types/api.type'

//获取订单列表
export function getOrderList(data:ParamsPagingType) {
    return http({
        method:'GET',
        url:'',
        params:{
           page:data.page,
           pageSize:data.pageSize
        }
    })
}