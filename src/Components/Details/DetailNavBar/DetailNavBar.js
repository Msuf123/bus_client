import {  NavLink } from "react-router-dom";
import style from './details.module.css'
export default function DeatilNavBar(){
    return(
        <div className={style.main}>
            <NavLink>Facilites</NavLink>
            <NavLink to={'images'}>Images</NavLink>
            <NavLink to={"policies"}>Policies</NavLink>
            <NavLink to={'reviews'}>Reviews</NavLink>
        </div>
    )
}