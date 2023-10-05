import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDebugValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearFavoritos } from "../../redux/Actions/crearFavoritos";
import { borrarFavoritos } from "../../redux/Actions/borrarFavoritos";
import { getFav } from "../../redux/Actions/getFav";


const Card = ({ product }) => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  let favoritos = useSelector((state) => state.fav);


  // console.log(favoritos, "Producs >>", product)




  const client = useSelector((state) => state.clientProfile);


  const dataProfileActual = useSelector((state) =>
    state.dataProfile === null ? { userData: { id: "" } } : state.dataProfile
  );

  const { userData } = dataProfileActual;

  useEffect(() => {
    // Si el usuario está autenticado, obtén los favoritos
    if (client && userData) {
      dispatch(getFav({ userData }));
    }
  }, [dispatch, client, userData]);

  useEffect(() => {
    // Verifica si favoritos es un array antes de usar some
    if (Array.isArray(favoritos)) {
      const isFavorite = favoritos.some((favorito) => favorito.id === product.id);

      // Solo actualiza el estado si es necesario (para evitar el bucle)
      if (isFavorite !== isFav) {
        setIsFav(true);
      }
    }

    // Retorna una función de limpieza para ejecutar cuando el componente se desmonte

  }, [favoritos, dispatch]);



  const handleFavorite = () => {
    if (isFav) {
      dispatch(borrarFavoritos({ userData, product }));
      setIsFav(false);
    } else {

      dispatch(crearFavoritos({ userData, product }));
      setIsFav(true);
    }
  };

  return (
    <>
      <div className={styles.divCard}>
        <div className={styles.divImg}>
          <Link to={`/detail/${product.id}`}>
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
            <span className={styles.span}>{product.name}</span>
          </div>

          <div>
            {product.statusOffer === true ? (<span className={styles.spanPrice}>${product.priceOfList*(1-product.offer/100)}</span>):(<span className={styles.spanPrice}>${product.priceOfList}</span>)}

          </div>

          <div className={styles.divName}>
          {product.statusOffer === true ? (<span className={styles.span}>{product.offer} % off</span>):(null)}
          </div>

        </div>

        <Link to={`/detail/${product.id}`}>
          <div className={styles.divButton}>
            <button className={styles.button}>Ver Producto</button>
          </div>
        </Link>

        <div className={styles.divFavoriteButtton}>
          {client && (
            <button onClick={() => handleFavorite()}>
              {isFav ? (
                <ion-icon name="heart"></ion-icon>
              ) : (
                <ion-icon name="heart-outline"></ion-icon>
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
