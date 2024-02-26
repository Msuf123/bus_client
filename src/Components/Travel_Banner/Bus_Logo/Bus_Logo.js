import logo from '../../../Imges/bus_logo.jpg'
import style from './logo.module.css'
export default function Bus_Logo(){
    return(
        <div className={style.logo}>
            <img src={logo}></img>
            <span>Travel Enterprise</span>
        </div>
    )
}