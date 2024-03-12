import { Outlet, useParams } from "react-router-dom";
import BusinessRegisteryProgressBar from "../../Components/BusinessRegister/ProgressBar/BusinessRegisteryProgressBar";
import ButtonProgressBusinessRegister from "../../Components/BusinessRegister/Buttons/Buttons";
import style from './business.module.css'
export default function BusinessRegisterHome(){
    const prams=useParams()
return(
    <div className={style.main}>
        <h1>Register Your {prams.type}</h1>
        <BusinessRegisteryProgressBar></BusinessRegisteryProgressBar>
        <Outlet></Outlet>
        <ButtonProgressBusinessRegister></ButtonProgressBusinessRegister>
    </div>
)
}