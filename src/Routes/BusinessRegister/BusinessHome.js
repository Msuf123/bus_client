import { Outlet } from "react-router-dom";
import BusinessRegisteryProgressBar from "../../Components/BusinessRegister/ProgressBar/BusinessRegisteryProgressBar";
import ButtonProgressBusinessRegister from "../../Components/BusinessRegister/Buttons/Buttons";

export default function BusinessRegisterHome(){
return(
    <div>
        <BusinessRegisteryProgressBar></BusinessRegisteryProgressBar>
        <Outlet></Outlet>
        <ButtonProgressBusinessRegister></ButtonProgressBusinessRegister>
    </div>
)
}