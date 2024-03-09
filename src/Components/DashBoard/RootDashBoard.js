import { Outlet } from "react-router-dom";
import DashBoardLeftComponent from "./LeftComponent/LeftComponent";
import style from './root.module.css'
export default function RootDashBoard(){
    return(
        <div className={style.main}>
            <DashBoardLeftComponent isUser={true}></DashBoardLeftComponent>
            <div className={style.mainOutlet}>
             <Outlet></Outlet>
            </div>
        </div>
    )
}