import style from './search.module.css'
import src from '../../../../../Imges/arrows.png'

export default function Search(){
    return(
        <div className={style.main}>
        
            <div className={style.firstSearch}>
                <input placeholder="Enter Pickup location"></input>
                <img src={src}></img>
                <input placeholder="Enter Drop Loation"></input>
                <button>Search</button>
            </div>
            <span className={style.orText}>Or</span>
            <div className={style.extraSearch}>
                <input placeholder="Enter Bus Number"></input>
                <button>Search</button>
            </div>
        </div>
    )
}