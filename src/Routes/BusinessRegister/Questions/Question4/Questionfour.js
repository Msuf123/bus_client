import style from '../Question1/question.module.css'
export default function QuestionFour(){
    return(
        <div className={style.main}>
            <div className={style.questionFour}>
            <span>Upload images of bus</span>
            <input type="file"></input>
            </div>
        </div>
    )
}