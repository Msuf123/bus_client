import IndividualFacility from './IndividualFacility/IndividualFacility'
import style from './facility.module.css'
export default function SomeCommonFacilities(){
    return(
        <div>
          <IndividualFacility text={'Washroom'}></IndividualFacility>
          <IndividualFacility text={'Food'}></IndividualFacility>
          <IndividualFacility text={'Blanket'}></IndividualFacility>
        </div>
    )
}