import styles from './Form.module.css'
import { useState , useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useSelector } from 'react-redux';
import axios from 'axios'

const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const Pay = ({formData}) => {

    const carrito = useSelector(state=>state.carrito)
    
    const [preferenceId, setPreferenceId] = useState(null);
    const [isButtonDisabled,setIsButtonDisabled]= useState('')

    console.log(publicKey)
    useEffect(() => {
        initMercadoPago(publicKey);
    }, []);

    const createPreference = async () => {
        const totalCarrito = carrito?.reduce((valorAnterior, valorActual) => {
            return valorAnterior + (valorActual.precio * valorActual.cantidad);
        }, 0);
        try {

            const response = await axios.post('http://localhost:3001/users/mercadopago', {
                description: "Compra FixerShoes",
                price: totalCarrito,
                quantity: 1,
                formData
            });
            const { id } = response.data;
            return id;
        } catch (error) {
            return null;
        }
    };

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

            <button className={styles.btn} onClick={handleBuy} disabled={isButtonDisabled}>Ir a Pagar</button>
            {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
        </>
     );
}
 
export default Pay;