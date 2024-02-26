import Travel_Banner from '../../Travel_Banner/Travel_Banner'
import style from './transport.module.css'
export default function TransportDestail(){
    return(
        <div className={style.main}>
            <Travel_Banner details={false} ></Travel_Banner>
        </div>
    )
}