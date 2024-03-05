import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import fetchGet from "../../CustomFunction/fetchGet"

export default function TokenVerify(){
    const[process,setProcess]=useState(false)
    useEffect( ()=>{
        const res= fetchGet('http://localhost:3000/register')
        console.log(res)
        setProcess(res.verifed)
        
    },[])
    return(
        <div>
            {process?<h1>Verifying the email...</h1>:<Navigate to={'/'}></Navigate>}
        </div>
    )
}