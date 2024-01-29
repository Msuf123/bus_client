import style from './inputbutton.module.css'
export default function InputButtons(){
    return(
        <div className={style.main}>
            <input></input>
            <input></input>
            <input></input>
            <button>Search</button>
        </div>
    )
}