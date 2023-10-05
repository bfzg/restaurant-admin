import http from '../utils/requset.utils';

//获取菜品口味列表
export function getFlavorList(){
    return http({
        method:"GET",
        url:"/dishFlavor/list"
    })
}