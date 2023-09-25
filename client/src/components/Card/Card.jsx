import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { useDebugValue, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { crearFavoritos } from '../../redux/Actions/crearFavoritos';
import { borrarFavoritos } from '../../redux/Actions/borrarFavoritos';

const Card = ({product}) => {
    const dispatch = useDispatch()
    const [isFav, setIsFav] = useState(false); 
    const client = useSelector((state) => state.clientProfile)

    const dataProfileActual = useSelector((state) => (state.dataProfile === null ? { userData: {id: ''} } : state.dataProfile));

    const { userData } = dataProfileActual

    const handleFavorite = () => {

        if(isFav){
           setIsFav(false);
           dispatch(borrarFavoritos(userData.id))
        }
        else{
           setIsFav(true);
           dispatch(crearFavoritos({userData, product}))
        }
     }

    return ( 
    <>
        <div className={styles.divCard}>
            <div className={styles.divImg}>
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
                <div className={styles.divName}>
                    <span className={styles.span} >{product.name}</span>
                </div>
                <div>
                    <span>${product.priceOfList}.000</span>
                </div>
            </div>
            <Link to={`/detail/${product.id}`} >
                <div className={styles.divButton}>
                <button>Ver Producto</button>
                </div>
            </Link>
            {client && (
          <button onClick={() => handleFavorite()}>
            {isFav ? '❤️' : '🤍'}
          </button>
        )}

        </div>
    </>
     );
}
 
export default Card;