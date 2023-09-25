import styles from './Form.module.css'
import { useState } from 'react';

const Pay = () => {
    
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleButtonClick = () => {

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