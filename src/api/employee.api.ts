import http from '../utils/requset.utils.ts'

export function getEmployeeList(){
    return http({
        method:"GET",
        url:"/employee/list"
    })
}