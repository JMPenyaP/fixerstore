import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useDebugValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { crearFavoritos } from "../../redux/Actions/crearFavoritos";
import { borrarFavoritos } from "../../redux/Actions/borrarFavoritos";

const Card = ({ product }) => {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.favoritos);

  useEffect(() => {
    if (Array.isArray(favoritos)) {
      favoritos.forEach((favorito) => {
        if (favorito.id === product.id) {
          setIsFav(true);
        }
      });
    }
  }, [favoritos]);

  const client = useSelector((state) => state.clientProfile);

  const dataProfileActual = useSelector((state) =>
    state.dataProfile === null ? { userData: { id: "" } } : state.dataProfile
  );

  const { userData } = dataProfileActual;

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      dispatch(borrarFavoritos({ userData, product }));
    } else {
      setIsFav(true);
      dispatch(crearFavoritos({ userData, product }));
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
            <span>${product.priceOfList}.000</span>
          </div>
        </div>
        <Link to={`/detail/${product.id}`}>
          <div className={styles.divButton}>
            <button>Ver Producto</button>
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
