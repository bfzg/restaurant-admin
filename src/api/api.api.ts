import http from '../utils/requset.utils.ts';
import {LoginType} from "../types/api.type.ts";

export function login(data:LoginType){
    return http({
        method:"POST",
        url:"login",
        data
    })
}