import { NavLink } from "react-router-dom";
import style from '../UserOptions/user.module.css'
export default function BusinessOptionsDashBoardOptions(){
    return(
        <div className={style.main}>
            <div className={style.options}>
             <NavLink>Activity</NavLink>
            <NavLink to={'buses'}>Buses</NavLink>
            <NavLink>Drivers</NavLink>
            <NavLink>Transactions</NavLink>
            <NavLink>Manage Account</NavLink>
            <NavLink>Support</NavLink>
            </div>
        </div>
    )
}