import React,{useContext} from "react";
import Login from "./login.store";

class Store {
    userLogin:Login
    constructor(){
        this.userLogin = new Login()
    }
}

//导出useStore方法供组件使用
const rootStore = new Store()
const context = React.createContext(rootStore)
const useStore = () => useContext(context)
export {useStore};
