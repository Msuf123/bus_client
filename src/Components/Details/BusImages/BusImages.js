import src from '../../../Imges/bus_logo.jpg'
import style from './busImage.module.css'
export default function BusImages(){
    return(
        <div className={style.main}>
            <button>&lt;</button>
            <img src={src}></img>
            <button>&gt;</button>
        </div>
    )
}