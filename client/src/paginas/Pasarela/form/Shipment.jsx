import styles from './Form.module.css'
import { useState } from 'react';


const Shipment = ({errors,formData,onInputChange}) => {

    const [selectedOption, setSelectedOption] = useState('C.C. Centro Mayor');

    const handleRadioChange = (event) => {
        
        setSelectedOption(event.target.value);
        onInputChange("place", event.target.value); // Llamar a la función onInputChange para actualizar el formData
    };
    return ( 
        <>
        <div className={styles.divShipment}>
        


            <label className={styles.label}>
                <input
                className={styles.inputRadio}
                type="radio"
                name="place"
                value="C.C. Centro Mayor"
                checked={selectedOption === "C.C. Centro Mayor"}
                onChange={handleRadioChange}
                />C.C. Centro Mayor
            </label>
            
            <label className={styles.label}>
                <input 
                className={styles.inputRadio}
                type="radio"
                name="place"
                value="C.C. Plaza Americas"
                checked={selectedOption === "C.C. Plaza Americas"}
                onChange={handleRadioChange}
                />C.C. Plaza Americas
            </label>
        </div>
            
        
        </>
     );
}
 
export default Shipment;