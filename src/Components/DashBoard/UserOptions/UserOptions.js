import { NavLink } from 'react-router-dom'
import style from './user.module.css'
export default function UserOptionsDashBoard(){
    return(
        <div className={style.main}>
            <div className={style.uppreOptions}>
             <NavLink>Manage Account</NavLink>
            <NavLink>Bus History</NavLink>
            <NavLink>Billing History</NavLink>
            <NavLink>Report</NavLink>
            </div>
            <div className={style.logOut}>
            <NavLink>Logout</NavLink>
            </div>
        </div>
    )
}