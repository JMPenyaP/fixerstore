import styles from './Form.module.css'
import { useState } from 'react';

const Pay = () => {
    
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleButtonClick = () => {
        // Realiza aquí cualquier acción que necesites al hacer clic en el botón

        // Desactiva el botón después de hacer clic
        setIsButtonDisabled(true);
    };

    return ( 
        <>
        <div className={styles.pay}>

            <button className={styles.btn} onClick={handleButtonClick} disabled={isButtonDisabled}>Ir a Pagar</button>

        </div>
        </>
     );
}
 
export default Pay;