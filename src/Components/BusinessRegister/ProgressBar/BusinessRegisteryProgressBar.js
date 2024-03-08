import { useSelector } from 'react-redux'
import style from './progress.module.css'
export default function BusinessRegisteryProgressBar(){
  const percentageCompleted=useSelector((state)=>state.businessRegisterProgressBar)
    return(
        <div className={style.main}>
         <div className={style.progress} style={{width:percentageCompleted+"%"}}>
        
         </div>
        </div>
    )
}