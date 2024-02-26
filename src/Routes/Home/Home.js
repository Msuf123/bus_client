import style from './home.module.css'
import src from '../../Imges/juan-encalada-6mcVaoGNz1w-unsplash.jpg'
import InputButtons  from './InputButtons/InputButtons'
import { useEffect } from 'react'
import Login from '../Login/Login'
import TravelBanner from '../../Components/Travel_Banner/Travel_Banner'
export default function Home(){

    return(
        <div className={style.main}> 
            <div className={style.outer}>
                <div className={style.image_container}>
                    <img src={src}></img>
                </div>
                <div className={style.buttons}>
                        <InputButtons></InputButtons>
                        
                </div>
            </div>
            
            <TravelBanner details={true}></TravelBanner>
            <TravelBanner></TravelBanner>

        </div>
    )
}