import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({char}) => {
    return ( 
    <>
        <div className={styles.divCard}>
            
            <div>
                <Link to={`/detail/${char.id}`} >
                    <img
                    className={styles.img}
                    width={290}
                    height={290}
                    src={char.image}
                    alt={char.name}
                    />
                </Link>
            </div>

            <div className={styles.divInfo}>
                <span className={styles.span} >{char.name}</span>|
                <span >${char.id}</span>
            </div>
            <Link to={`/detail/${char.id}`} >
                <div className={styles.divButton}>
                <button>Ver Producto</button>
                </div>
            </Link>

        </div>
    </>
     );
}
 
export default Card;