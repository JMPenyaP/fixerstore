import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({product}) => {
    return ( 
    <>
        <div className={styles.divCard}>
            
            <div>
                <Link to={`/detail/${product.id}`} >
                    <img
                    className={styles.img}
                    width={290}
                    height={290}
                    src={product.firstImage}
                    alt={product.name}
                    />
                </Link>
            </div>

            <div className={styles.divInfo}>
                <span className={styles.span} >{product.name}</span>|
                <span >${product.id}</span>
            </div>
            <Link to={`/detail/${product.id}`} >
                <div className={styles.divButton}>
                <button>Ver Producto</button>
                </div>
            </Link>

        </div>
    </>
     );
}
 
export default Card;