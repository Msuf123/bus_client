import { useState } from 'react'
import style from '../Login/login.module.css'
export default function Register(){
    const [userName,setUsername]=useState()
    const [email,setEmail]=useState()
    const [pass,setPass]=useState()

    return(
        <div className={style.main}>
            <div className={style.whiteLoginPromt}>
                <div className={style.innerContent}>
                    <div className={style.divs}>
                        <span>Enter email</span>
                        <input placeholder="Enter your email id" onChange={(e)=>{
                            setEmail(e.target.value)
                        }}></input>
                    </div>
                    <div className={style.divs}>
                        <span>Enter Your Username</span>
                        <input placeholder="Username" onChange={(e)=>{
                            setUsername(e.target.value)
                            
                        }}></input>
                    </div>
                    <div className={style.divs}>
                        <span>Enter password</span>
                        <input placeholder="Password" onChange={(e)=>{
                            setPass(e.target.value)
                        }}></input>
                    </div>
                <button onClick={()=>{
                //   let a= fetchPost('http://codeacademy',{userName,email,pass})
                //   console.log(a)
                }}>Sign-Up</button>
            </div>
            </div>
        </div>
    )
}