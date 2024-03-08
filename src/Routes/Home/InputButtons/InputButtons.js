import { useEffect } from 'react'
import style from './inputbutton.module.css'
export default function InputButtons(){
    useEffect(()=>{
        
    })
    return(
        <div className={style.main}>
            <input></input>
            <input></input>
            <input type='date'></input>
            <button>Search</button>
        </div>
    )
}

