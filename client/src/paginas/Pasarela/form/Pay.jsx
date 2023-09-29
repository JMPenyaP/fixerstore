import styles from './Form.module.css'
import { useState , useEffect } from 'react';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { useSelector } from 'react-redux';
import axios from 'axios'

const Pay = ({formData}) => {

    const carritoById = useSelector(state=>state.carritoById)
    
    const [preferenceId, setPreferenceId] = useState(null);
    const [isButtonDisabled,setIsButtonDisabled]= useState('')


    const [error, setError] = useState(null);

    useEffect(() => {
        initMercadoPago('APP_USR-34521d68-fb93-4dfe-af28-f0507c066d01');
    }, []);

    const createPreference = async () => {
        const totalcarrito = carritoById?.reduce((valorAnterior, valorActual) => {
            return valorAnterior + (valorActual.precio * valorActual.cantidad);
        }, 0);
        try {
            
            const response = await axios.post('http://localhost:3001/users/mercadopago', {
                description: "Compra FixerShoes",
                price: totalcarrito,
                quantity: 1,
                formData
            });
            const { id } = response.data;
            return id;
        } catch (error) {
            setError("Error al crear la preferencia de pago");
            
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
            {preferenceId && <Wallet
                        initialization={{ preferenceId }}
                        onPayment={() => {
                            // Manejar el pago completado aquí
                            console.log("Pago completado");
                        }}
                        onError={(error) => {
                            // Manejar errores de pago aquí
                            console.error("Error de pago:", error);
                        }}
                    />}
                    {error && <p>{error}</p>}
        </div>
        </>
     );
}
 
export default Pay;