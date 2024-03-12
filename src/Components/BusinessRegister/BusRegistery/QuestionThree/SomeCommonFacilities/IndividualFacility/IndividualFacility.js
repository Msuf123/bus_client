import style from './individual.module.css'
export default function IndividualFacility({text}){
    return(
        <div className={style.main}>
            <span className={style.text}>{text}</span>
            <span className={style.add}>+</span>
        </div>
    )
}