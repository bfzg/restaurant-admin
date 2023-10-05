import {useRoutes} from "react-router-dom";
import baseRouter from "./router";



function RouterView(){
    //创建路由
    const element = useRoutes(baseRouter);
    //导出创建好的元素
    return(
        <>
            {element}
        </>
    )
}

export default RouterView;