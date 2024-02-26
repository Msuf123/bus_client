import style from './login.module.css'
import git from '../../Imges/github.png'
import google from '../../Imges/google.png'
import linkedin from '../../Imges/linkedin.png'
import {Link} from 'react-router-dom'
export default function Login(){
    return(
        <div className={style.main}>

            <div className={style.whiteLoginPromt}>

                
                <div className={style.middleportion}>
                    <input placeholder='Username or email address'></input>
                    <input placeholder='password'></input>
                    <span>Don't have a account? <Link>Sign-Up.</Link></span>
                    <span>Or register using</span>
                </div>
                <div className={style.twoOuthImg}>
                        <img src={git}></img>
                        <img src={google}></img>
                        <img src={linkedin}></img>
                </div>
                </div>
            
        </div>
    )
}