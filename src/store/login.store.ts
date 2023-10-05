import {get, makeAutoObservable} from 'mobx';
import StorageMemory from '@/utils/memory.utils'

const sessionStorageMemory = StorageMemory.getInstance('sessionStorage')


class Login{
    TOKEN = sessionStorageMemory?.getItem('Token') || ''
    USERINFO = sessionStorageMemory?.getItem('UserInfo') || {}
    constructor(){
        makeAutoObservable(this)
    }
    
    SETTOKEN = (token:string):void => {
        this.TOKEN = token
        sessionStorageMemory?.setItem('Token', token)
    }

    CLEARTOKEN = ():void => {
        this.TOKEN = ''
        sessionStorageMemory?.removeItem('Token')
    }

    SETUSERINFO = (userinfo:string):void => {
        this.USERINFO = userinfo
        sessionStorageMemory?.setItem('UserInfo', userinfo)
    }

    CLEARUSERINFO = ():void => {
        this.USERINFO = {}
        sessionStorageMemory?.removeItem('UserInfo')
    }
}

export default Login