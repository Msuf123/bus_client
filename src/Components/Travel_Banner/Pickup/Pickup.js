import style from './pickup.module.css'
export default function Pickup(){
    return(
        <div className={style.main}>
            <span className={style.place}>Banglore</span>
            <span>12:30</span>
            <span>Pickup</span>
        </div>
    )
}