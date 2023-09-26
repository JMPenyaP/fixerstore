import styles from './Form.module.css'
import { useState } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useSelector } from 'react-redux';
import axios from 'axios'

const Pay = () => {

    const carrito = useSelector(state=>state.carrito)
    
    const [preferenceId,setPreferenceId]= useState(null)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);


    initMercadoPago("TEST-c9dd176d-cc5f-4e29-a050-e1ab097d6333")

    const createPreference = async()=>{
        const totalCarrito = carrito?.reduce((valorAnterior, valorActual) => {
            return valorAnterior + (valorActual.precio * valorActual.cantidad);
        }, 0);
        try {
            const response = await axios.post('http://localhost:3001/users/mercadopago', {
                description: "compra Fixer",
                price: totalCarrito,
                quantity:1,
                currency_id:"COP"
            })
            
            const {id}= response.data
            console.log(id)
            return id
        } catch (error) {
            console.log(error)
        }
    }

    const handleBuy = async()=>{
        const id = await createPreference();
        setIsButtonDisabled(true);
        if(id){
            setPreferenceId(id)
        }
    }

    return ( 
        <>
        <div className={styles.pay}>

            <button type='submit' className={styles.btn} onClick={handleBuy} disabled={isButtonDisabled}>Ir a Pagar</button>
            {preferenceId && <Wallet initialization={{ preferenceId:preferenceId }} />}
        </div>
        </>
     );
}
 
export default Pay;