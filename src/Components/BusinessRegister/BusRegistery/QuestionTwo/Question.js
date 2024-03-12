import { useDispatch } from "react-redux";
import ImagePreview from "./ImagePreview/ImagePreview";
import style from './question.module.css'
import { useEffect } from "react";
import { nextUrl } from "../../BusinessProgressRegisterButton/BusinessProgressRegisterButtonSlice";
export default function QuestionTwoBusRegistery(){
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(nextUrl('questionThreeBus'))
    })
    return(
        <div className={style.main}>
            <div className={style.inputs}>
                <span>Upload Images of bus</span>
                <input type='file'></input>
            </div>
            <ImagePreview></ImagePreview>
        </div>
    )
}