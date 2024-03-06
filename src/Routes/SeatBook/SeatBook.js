import BusSeatDiagram from '../../Components/SeatBook/BusSeatDiagram/BusSeatDiagram'
import style from './seatBook.module.css'
export default function SeatBook(){
    return(
        <div className={style.main}>
            <h1>Select Your Seat</h1>
            <span>Bus Type:Standard</span>
            <BusSeatDiagram></BusSeatDiagram>
        </div>
    )
}