import { Outlet } from "react-router-dom";
import BusinessRegisteryProgressBar from "../../Components/BusinessRegister/ProgressBar/BusinessRegisteryProgressBar";
import ButtonProgressBusinessRegister from "../../Components/BusinessRegister/Buttons/Buttons";
import style from './business.module.css'
export default function BusinessRegisterHome(){
return(
    <div className={style.main}>
        <h1>Register Your Business</h1>
        <BusinessRegisteryProgressBar></BusinessRegisteryProgressBar>
        <Outlet></Outlet>
        <ButtonProgressBusinessRegister></ButtonProgressBusinessRegister>
    </div>
)
}