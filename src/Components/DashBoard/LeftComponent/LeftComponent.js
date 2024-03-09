import style from './left.module.css'
import src from '../../../Imges/bus_logo.jpg'
import UserOptionsDashBoard from '../UserOptions/UserOptions'
import BusinessOptionsDashBoardOptions from '../BusinessOptions/BusinessOptions'
import { NavLink } from 'react-router-dom'
export default function DashBoardLeftComponent({imageSrc,isUser}){
    return(
        <div className={style.main}>
                <div className={style.userLogoDiv}>  
                <img src={src}></img>
                <span>Jack Travel</span>
                </div>
            {isUser?<UserOptionsDashBoard></UserOptionsDashBoard>:<BusinessOptionsDashBoardOptions></BusinessOptionsDashBoardOptions>}
            <div className={style.logOut}>
            <NavLink>Logout</NavLink>
            </div>
            
        </div>
    )
}