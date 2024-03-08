import NumberOfPassanger from "../../Components/SeatBook/PassengerDeatil/NumberOfPassanger";
import style from './passanger.module.css'
export default function PassengerSeatBook(){
    return(
        <div className={style.main}>
            <h1>Passanger Deatils</h1>
            <div className={style.number}>
                <NumberOfPassanger text={'adult'}></NumberOfPassanger>
                <NumberOfPassanger text={'child'}></NumberOfPassanger>
            </div>
            <div>
                    <input placeholder="Enter Your name"></input>
                    <input placeholder="Email id"></input>
                    <input placeholder="Phone number"></input>
            </div>
            <button className={style.next}>Next</button>
        </div>
    )
}