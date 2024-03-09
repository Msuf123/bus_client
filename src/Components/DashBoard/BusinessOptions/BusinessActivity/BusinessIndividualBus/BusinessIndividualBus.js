import src from '../../../../../Imges/bus_image.jpg'
import style from './individualBus.module.css'
export default function BusinessIndividualBus({plateNumber,pickUpPoint,dropPoint,status}){
    return(
        <div className={style.main}>
            <img src={src}></img>
            <div className={style.plateNoDiv}>
                <span className={style.plateNo}>Licence plate no:-</span>
                <span>{plateNumber}</span>
            </div>
            <div className={style.destinationPoints}>
                <div className={style.staticLocationOuterDiv}>
                    <span className={style.staticLocation}>From:</span>
                    <span className={style.dynamicLoaction}>{pickUpPoint}</span>
                </div>
                <div className={style.staticLocationOuterDiv}>
                    <span className={style.staticLocation}>To:</span>
                    <span className={style.dynamicLoaction}>{dropPoint}</span>
                </div>
               
            </div>
            <div className={style.statusDiv}>
             <span className={style.status} style={status==='Completed'?{color:'rgb(9, 172, 9)'}:status==='On the Way'?{color:'rgb(243, 185, 25)'}:{color:'red'}}>{status}</span>
             <div className={style.symbol} style={status==='Completed'?{backgroundColor:'rgb(28, 250, 28)'}:status==='On the Way'?{backgroundColor:'rgb(243, 185, 25)'}:{backgroundColor:'red'}}></div>
            </div>
        </div>
    )
}