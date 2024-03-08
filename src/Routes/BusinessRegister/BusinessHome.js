import { Outlet } from "react-router-dom";
import BusinessRegisteryProgressBar from "../../Components/BusinessRegister/ProgressBar/BusinessRegisteryProgressBar";

export default function BusinessRegisterHome(){
return(
    <div>
        <BusinessRegisteryProgressBar></BusinessRegisteryProgressBar>
        <Outlet></Outlet>
    </div>
)
}