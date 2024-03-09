import { NavLink } from 'react-router-dom'
import style from './user.module.css'
export default function UserOptionsDashBoard(){
    return(
        <div className={style.main}>
            <div className={style.options}>
             <NavLink>Manage Account</NavLink>
            <NavLink>Bus History</NavLink>
            <NavLink>Billing History</NavLink>
            <NavLink>Report</NavLink>
            </div>
            
        </div>
    )
}