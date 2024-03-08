
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function ButtonProgressBusinessRegister(){
    const nextUrl=useSelector((state)=>state.businessRegisterProgressButtonUrl)
    const nav=useNavigate()
    return(
        <div>
            <button onClick={()=>{
                nav(-1)
            }}>Back</button>
            <button onClick={()=>{
                nav(nextUrl)
            }}>Next</button>
        </div>
    )
}