import { Outlet } from 'react-router-dom'
import style from './facility.module.css'
import DeatilNavBar from '../DetailNavBar/DetailNavBar'
export default function Facility(){
    return(
        <div className={style.main}>
            <DeatilNavBar></DeatilNavBar>
            <Outlet></Outlet>
        </div>
    )
}