import axios,{AxiosInstance,AxiosResponse,InternalAxiosRequestConfig} from "axios";
import {toast} from 'react-toastify';
//加载提示
// import NProgress from 'nprogress';
//因为nprogress是js 所有需要类型定义 yarn add @types/nprogress
//不显示提示转圈
// NProgress.settings.showSpinner = false;

//错误提示
const errorToast = (message:string) => {
    toast.error(message, {
        type: "error",
        position: import.meta.env.VITE_APP_TOAST_POSITION,
        autoClose: Number(import.meta.env.VITE_APP_TOAST_AUTOCLOSE_FAST),
    })
}


export interface IResponse{
    code:number;
    message:string;
    data:any;
}

let axiosInstance:AxiosInstance = axios.create({
    baseURL:import.meta.env.VITE_APP_API_PATH,
    headers:{
        'Content-Type':'application/json'
    }
})

axiosInstance.interceptors.request.use((request:InternalAxiosRequestConfig)=>{
    // NProgress.start();
    return request;
})

axiosInstance.interceptors.response.use((response:AxiosResponse<IResponse>)=>{
    // NProgress.done();
    return response;
},(error)=>{
    // NProgress.done();
    // console.log(error.message)
    errorToast(error.message)
    return Promise.reject(error);
})

export default axiosInstance;