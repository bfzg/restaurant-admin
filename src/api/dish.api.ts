import http from '../utils/requset.utils';


//获取菜品列表
export function getDishList(data:API.ParamsPagingType) {
    return http({
        method:"GET",
        url:'/dish/list',
        params:{
            page:data.page,
            pageSize:data.pageSize
        }
    })
}

//新增菜品
export function postSaveDish(data:API.DishType) {
    return http({
        method:"POST",
        url:'/dish/save',
        data
    })
}

//编辑菜品信息
export function putEditDish(data:API.DishType) {
    return http({
        method:"PUT",
        url:'/dish/dishInfo',
        data
    })
}

//获取菜品列表
export function getCategoryList(data:API.ParamsPagingType){
    return http({
        method:"GET",
        url:'/category/list',
        params:data
    })
}

//删除菜品列表
export function deleteDish(ids:number[] | number){
    return http({
        method:"DELETE",
        url:'/dish/delete',
        data:{ids:ids}
    })
}