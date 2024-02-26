import Book from "../../Components/Details/Book/Book";
import Facility from "../../Components/Details/Facility/Facility";
import TopBar from "../../Components/Details/TopBar/TopBar";
import TransportDestail from "../../Components/Details/TransportDetails/TransportDetail";
import style from './details.module.css'
export default function Details(){
    return(
        <div className={style.main}>
            <TopBar></TopBar>
            <TransportDestail></TransportDestail>
            <Facility></Facility>
            <Book></Book>
            
        </div>
    )
}