import { useParams } from "react-router-dom"
import style from './question.module.css'
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { nextUrl } from "../../BusinessProgressRegisterButton/BusinessProgressRegisterButtonSlice"
export default function QuestionOneBusRegistrey(){
    const prams=useParams()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(nextUrl('questionTwoBus'))
    })
    return(
        <div className={style.main}>
            <input placeholder="Enter bus Plate No"></input>
            <input placeholder="Enter bus color"></input>
            <input placeholder="Enter bus brand name"></input>
        </div>
    )
}