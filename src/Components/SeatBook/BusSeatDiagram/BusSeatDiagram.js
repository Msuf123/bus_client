import Handel from '../DriverHandel/Handel'
import IndividualSeat from '../IndividualSeat/IndividualSeat'
import style from './busSeat.module.css'
export default function BusSeatDiagram(){
    return(
        <div className={style.main}>
            <Handel></Handel>
              <IndividualSeat></IndividualSeat>
              
        </div>
    )
}