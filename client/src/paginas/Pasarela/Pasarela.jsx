import styles from './Pasarela.module.css'
import lock from '../../assets/Vector.png'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Ticket from './Ticket';
import  Form  from './form/Form'


const Pasarela = () => {

    // const handleInputs = ()={
        
    // }

    // const carrito = useSelector(state => state.carrito)
    const carrito = [{name:'calzador de madera',priceOfList:200,firstImage:lock,cantidad:2},
                    {name:'cepillo de cerdo para zapatos',priceOfList:3000,firstImage:lock,cantidad:1},
                    {name:'cordones reflextivos',priceOfList:500,firstImage:lock,cantidad:1},
                    {name:'espuma para zapatillas',priceOfList:3000,firstImage:lock,cantidad:1},
                    {name:'plantillas',priceOfList:3000,firstImage:lock,cantidad:1}
                    ]
                
    const totalCarrito = carrito?.reduce((valorAnterior, valorActual) => {
                        return valorAnterior + (valorActual.priceOfList * valorActual.cantidad);
                    }, 0);
    return ( 
        <>
            <div className={styles.divMain}>

                <div className={styles.nav}>
                    <Link to="/">
                        <div className={styles.logo}>
                            <img
                                src="https://s3-alpha-sig.figma.com/img/3833/7eca/e60625366dc9df5f0771fb658c866d39?Expires=1695600000&Signature=p4RVXaHWNaHJrK8200eTzaVVgwGmr0fpTtH8Fafay72nuONitHO-lXBMZwxBk5m02Ovx2QMWa-yYFxSdDw3APSToZoFt15CAVzqRMsQb1cyvtI7OgA~FKgjQbi9KSu6Y5KUjvNBmQcPwnI5Ypkw4dpPCQ9tfoV8UatuWbzeW3aqipK-a3GHtg14kbSqxuvXNe~Wlbv8IBpwoKBr7149G-TkWstKArQgtQqSahwxnt7WL04V7FIN7J2EceOtplXcsOBhbSMUxKu~wyJOJe314XKSHBM1tCA-Coh7jeEGgvA0KwdztsMsuj8KXPlHxJRDuW4dP7RL-Q7S0lSBi4m5A8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                                alt="Logo Fixer"
                                width={'250px'}
                                height={'60px'}

                            />
                        </div>
                    </Link>
                    <div className={styles.seguro}>
                        
                            <img src={lock} alt="candado" width={'32px'} height={'35px'} />
                        
                            <h2>Compra segura</h2>
                        
                        
                    </div>
                </div>
                <div>
                    <h2>Finalizar Compra</h2>
                </div>

                        
                    
                <div className={styles.contenedor}>
                    <Form />
                    <div className={styles.divDetalle}>
                        
                        <h2>Detalle</h2>

                        <div>
                            <Ticket carrito={carrito} /> 
                        </div>
                            
                        <div>
                            <h2>Total</h2>
                            <span>{totalCarrito}</span>
                        </div>
                    </div>
                </div>
                    
            </div>
        </>
     );
}
 
export default Pasarela;