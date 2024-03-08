import ButtonProgressBusinessRegister from "../../../../Components/BusinessRegister/Buttons/Buttons";

export default function QuestionOne(){
    return(
        <div>
            <span>Are you having a business or you are solo drivere</span>
            <input type="radio" name="solo" value='business'></input>
            <label >solo</label>
            <input type="radio" name="solo" value='solo'></input>
            <label>Business</label>
        </div>
    )
}