import { NavLink, useNavigate } from 'react-router-dom'
import style from './buses.module.css'
import { MdOutlineReviews } from "react-icons/md";
import { MdNotInterested } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbLiveView } from "react-icons/tb";
import { IoStatsChartOutline } from "react-icons/io5";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import Radar from 'radar-sdk-js';
import 'radar-sdk-js/dist/radar.css';


export default function BusinessBusses(){
    const nav=useNavigate()
    return(
        <div className={style.main}>
            
            <div className={style.outerDiv}>
                <div tabIndex={1} onClick={()=>{
                  nav('/register/bus/questionOne')
                }}>
                    <NavLink>Add Bus</NavLink>
                    <IoIosAddCircleOutline className={style.reactIcons}></IoIosAddCircleOutline>
                </div>
                <div abIndex={1} onClick={()=>{
                    
                }}>
                    <NavLink>Remove Bus</NavLink>
                    <GrSubtractCircle className={style.reactIcons}></GrSubtractCircle>
                </div>
                <div abIndex={2} onClick={()=>{
                    
                }}>
                    <NavLink>Temporarily Discontinue a bus</NavLink>
                <MdNotInterested className={style.reactIcons}></MdNotInterested>
                </div>
                <div abIndex={3} onClick={()=>{
                    
                }}>
                    <NavLink>Read Reviews of bus</NavLink>
                    <MdOutlineReviews className={style.reactIcons}></MdOutlineReviews>
                </div>
            </div>
            <div className={style.outerDiv}>
                <div abIndex={4} onClick={()=>{
                    
                }}>
                    <NavLink>Edit Bus</NavLink>
                    <HiOutlineWrenchScrewdriver className={style.reactIcons}></HiOutlineWrenchScrewdriver>
                </div>
                <div abIndex={5} onClick={()=>{
                    
                }}>
                    <NavLink>Stats of your bus</NavLink>
                    <IoStatsChartOutline className={style.reactIcons} />
                </div>
                <div abIndex={6} onClick={()=>{
                    
                }}  >
                    <NavLink>Live Location Of bus</NavLink>
                    <TbLiveView className={style.reactIcons}></TbLiveView>
                </div>
            </div>
        </div>
    )
}