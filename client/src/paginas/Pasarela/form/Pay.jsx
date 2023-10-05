import styles from './Form.module.css'
import { useState , useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'

const Pay = ({formData}) => {

    const carritoById = useSelector(state=>state.carritoById)
    const [btn, setBtn] = useState('Ir a pagar')
    const [isActive,setIsActive] = useState(false)


    const createPreference = async () => {
        setIsActive(true)
        setBtn('Cargando...')
        const totalcarrito = carritoById?.reduce((valorAnterior, valorActual) => {
            return valorAnterior + (valorActual.precio * valorActual.cantidad);
        }, 0);
        try {
            
            const response = await axios.post('http://localhost:3001/users/mercadopago', {
                description: "Compra FixerShoes",
                price: totalcarrito,
                quantity: 1,
                formData,
                // name: formData.name,
                // lastName: formData.lastName,
                // phoneNumber: formData.phoneNumber,
                // dni: formData.dni,
                // place: formData.place,
            });

            window.location.href = response.data.response.body.init_point;

        } catch (error) {
            
            return alert(error);
        }
    };


    return ( 
        <>
        <div className={styles.pay}>
            <img src="https://logotipoz.com/wp-content/uploads/2021/10/version-horizontal-large-logo-mercado-pago.webp" alt="logo_mercadopago" width={'150px'} />
            <button className={styles.btn} onClick={createPreference} disabled={isActive} >{btn}</button>
            
        </div>
        </>
     );
}
 
export default Pay;