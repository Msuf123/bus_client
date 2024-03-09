import { useDispatch } from 'react-redux'
import style from '../Question1/question.module.css'
import { useEffect } from 'react'
import { nextUrl } from '../../../../Components/BusinessRegister/BusinessProgressRegisterButton/BusinessProgressRegisterButtonSlice'
export default function QuestionThree(){
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(nextUrl('questionFour'))
    },[])
    return(
        <div className={style.questionThree}>
            <div className={style.questionThreeQuestions}>
                <span>Enter Bus Name</span>
                <input></input>
            </div>
            <div className={style.questionThreeQuestions}>
                <span>Enter Bus Number</span>
                <input></input>
            </div>
            <div className={style.questionThreeQuestions}>
                <span>Enter Bus Color</span>
                <input></input>

            </div>
            <div className={style.hint}>
                <span>*You can add more buses later on</span>
            </div>
        </div>
    )
}