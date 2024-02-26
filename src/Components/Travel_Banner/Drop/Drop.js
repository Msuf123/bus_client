import style from './drop.module.css'
export default function Drop(){
    return(
        <div className={style.main}>
            <span className={style.drop}>Kerla</span>
            <span>12th Feb 12:30</span>
            <span>Drop</span>
        </div>
    )
}