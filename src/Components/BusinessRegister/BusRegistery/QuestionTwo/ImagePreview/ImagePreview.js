import style from './image.module.css'
import src from '../../../../../Imges/bus_image.jpg'
import imageHolder from '../../../../../Imges/imageHolder.png'

export default function ImagePreview(){
 
    return(
        <div className={style.main}>
          <img src={src}></img>
          <img src={src}></img>
          <img src={src}></img>
          <div className={style.emptyImageHolder}>
             <img src={imageHolder}></img>
          </div>
        </div>
    )
}