import Bus_Logo from './Bus_Logo/Bus_Logo'
import Drop from './Drop/Drop'
import Pickup from './Pickup/Pickup'
import style from './travelBanner.module.css'
export default function Travel_Banner({details}){
    return(
    
        <div className={details?style.main:style.else}>
            {details?<Bus_Logo></Bus_Logo>:null}
            <Pickup></Pickup>
            <div className={style.dots}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Drop></Drop>
        </div>
        
    )
}