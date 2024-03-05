import { Link, NavLink } from "react-router-dom";
import style from './details.module.css'
export default function DeatilNavBar(){
    return(
        <div className={style.main}>
            <NavLink  className={({isActive,isPending})=>{
            console.log('IOs active')
        isActive?style.normal:style.active}
        } to={''}>Facilites</NavLink>
            <NavLink to={'images'}>Images</NavLink>
            <NavLink to={"policies"}>Policies</NavLink>
            <NavLink to={'reviews'}>Reviews</NavLink>
        </div>
    )
}