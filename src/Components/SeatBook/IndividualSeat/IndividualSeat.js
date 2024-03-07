
import { useState } from 'react'
import SeatHoverBanner from '../SeatHoverBanner/SeatHoverBanner'
import style from './individual.module.css'
export default function IndividualSeat(){
    const [visibility,setVisibility]=useState(false)
    return(
        <div className={style.main} onMouseEnter={()=>{
            setVisibility(true)
        }}
        onMouseLeave={()=>{
            setVisibility(false)
        }}
        >
           {visibility ?<SeatHoverBanner></SeatHoverBanner>:null}
        </div>
    )
}