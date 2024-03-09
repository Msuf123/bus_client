import { useDispatch, useSelector } from "react-redux";
import ButtonProgressBusinessRegister from "../../../../Components/BusinessRegister/Buttons/Buttons";
import style from './question.module.css'
import { useEffect } from "react";
import { nextUrl } from "../../../../Components/BusinessRegister/BusinessProgressRegisterButton/BusinessProgressRegisterButtonSlice";
export default function QuestionOne(){
    const dispatch=useDispatch()
    useEffect(()=>{
       dispatch(nextUrl('questionTwo'))
    },[])
    return(
        <div className={style.main}>
            <span className={style.heading}>Are you having a business or you are solo driver?</span>
                <div className={style.option}>
                    <input type="radio" name="solo" value='business'></input>
                    <span >Solo</span>
                </div>
                <div className={style.option}>
                    <input type="radio" name="solo" value='solo'></input>
                    <span>Business</span>
                </div>
                <div className={style.hint}>
                     <span>*Select solo if you only have one bus or Select Business if you have more than one bus</span>
                </div>
        </div>
    )
}