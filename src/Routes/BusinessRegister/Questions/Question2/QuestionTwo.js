import { useEffect } from 'react'
import style from '../Question1/question.module.css'
import { useDispatch } from 'react-redux'
import { nextUrl } from '../../../../Components/BusinessRegister/BusinessProgressRegisterButton/BusinessProgressRegisterButtonSlice'
export default function QuestionTwo(){
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(nextUrl('questionThree'))
    },[])
    return(
        <div className={style.questionTwo}>
            <span className={style.questionTwoHeding}>Enter Your Business Name:</span>
            <input placeholder="Eg:Laxmi Traves"></input>
            <div className={style.hint}>
                <span>*If You dont have a bussiness name just type your name</span>
            </div>
        </div>
    )
}