import SomeCommonFacilities from "./SomeCommonFacilities/SomeCommonFacilities";
import PreviewBusFacility from "./TotalEnteredFacility/Preview";
import style from './question.module.css'
export default function QuestionThreeBusRegistery(){
    return(
        <div className={style.main}>
            <div className={style.inputs}>
            <input placeholder="Enter Facilites"></input>
            <button onClick={()=>{}}>Add</button>
            </div>
            <PreviewBusFacility></PreviewBusFacility>
            <SomeCommonFacilities></SomeCommonFacilities>
            
        </div>
    )
}