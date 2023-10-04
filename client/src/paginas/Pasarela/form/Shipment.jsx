import styles from './Form.module.css'
import { useEffect, useState } from 'react';


const Shipment = ({errors,formData,onInputChange}) => {

    const [selectedOption, setSelectedOption] = useState('');

    const handleRadioChange = (event) => {  
        setSelectedOption(event.target.value);
    };

    useEffect(()=>{
        onInputChange("place", selectedOption);
    },[selectedOption])
    return ( 
        <>
        <div className={styles.divShipment}>
        

            {errors.place && <span className={styles.errors}>{errors.place}</span>}
            <label className={styles.labelsec}>
                <input
                className={styles.inputRadio}
                type="radio"
                name="place"
                value="C.C.CentroMayor"
                checked={selectedOption === "C.C.CentroMayor"}
                onChange={handleRadioChange}
                />C.C. Centro Mayor
            </label>
            
            <label className={styles.labelsec}>
                <input 
                className={styles.inputRadio}
                type="radio"
                name="place"
                value="C.C.PlazaAmericas"
                checked={selectedOption === "C.C.PlazaAmericas"}
                onChange={handleRadioChange}
                />C.C. Plaza Americas
            </label>
        </div>
            
        
        </>
     );
}
 
export default Shipment;