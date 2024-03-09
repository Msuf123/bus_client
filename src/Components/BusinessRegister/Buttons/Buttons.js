
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import style from './button.module.css'
import { increment } from "../BusinessProgressBarSlice/BusinessRegisterBarSlice"
import { useEffect } from "react"
export default function ButtonProgressBusinessRegister(){
    const dispatch=useDispatch()
    const nextUrl=useSelector((state)=>state.businessRegisterProgressButtonUrl)
    const nav=useNavigate()
    useEffect()
    return(
        <div className={style.main}>
            <button onClick={()=>{
                nav(-1)
            }}>Back</button>
            <button onClick={()=>{
                dispatch(increment(40))
                nav(nextUrl)
            }}>Next</button>
        </div>
    )
}