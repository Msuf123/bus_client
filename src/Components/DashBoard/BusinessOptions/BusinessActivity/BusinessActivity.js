import BusinessIndividualBus from "./BusinessIndividualBus/BusinessIndividualBus";
import Search from "./BusinessSeachBuses/Search";
import style from './business.module.css'
export default function BusinessActivity(){
    return(
        <div className={style.main}>
            <h1>Activity</h1>
            <Search></Search>
            <div className={style.gridItems}>
                <BusinessIndividualBus plateNumber={'Hr 123 121 1212'} pickUpPoint={'Delhi'} dropPoint={'Mumbai'} status={'On the Way'}></BusinessIndividualBus>
                <BusinessIndividualBus plateNumber={'Hr 123 121 1212'} pickUpPoint={'Delhi'} dropPoint={'Mumbai'} status={'Completed'}></BusinessIndividualBus>
                <BusinessIndividualBus plateNumber={'Hr 123 121 1212'} pickUpPoint={'Delhi'} dropPoint={'Mumbai'} status={'Problem'}></BusinessIndividualBus>
                <BusinessIndividualBus plateNumber={'Hr 123 121 1212'} pickUpPoint={'Delhi'} dropPoint={'Mumbai'}></BusinessIndividualBus>
                <BusinessIndividualBus plateNumber={'Hr 123 121 1212'} pickUpPoint={'Delhi'} dropPoint={'Mumbai'}></BusinessIndividualBus>
                <BusinessIndividualBus plateNumber={'Hr 123 121 1212'} pickUpPoint={'Delhi'} dropPoint={'Mumbai'}></BusinessIndividualBus>
            </div>
        </div>
    )
}