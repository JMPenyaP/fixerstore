import React, { useEffect, useState } from "react";
import style from "./favoritos.module.css";
import Card from "../../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { userFavoritos } from "../../../redux/Actions/userFavoritos";

const Favoritos = () => {
  const dispatch = useDispatch();
  const dataProfileActual = useSelector((state) =>
    state.dataProfile === null ? { userData: { id: "" } } : state.dataProfile
  );
  const products = useSelector((state) => state.allProducts);
  const favoritos = useSelector((state) => state.favoritos);
  const [favorite, setFavorite] = useState(favoritos);
  const { userData } = dataProfileActual;

  useEffect(() => {
    if (favoritos.length === 0) {
      dispatch(userFavoritos(userData.id));
    } else {
        setFavorite(favoritos);
    }
  }, [dispatch, favoritos, userData.id]);

  return (
    <div className={style.contenedor}>
      <div className={style.divComplementario}>
        <h5 className={style.titulo}>Mis productos favoritos</h5>
      </div>
      <div className={style.cards}>
        {Array.isArray(favoritos) && favoritos.length >= 1 ? (
          favoritos.map((card) => (
            <div key={card.id} className={style.cardWrapper}>
              <Card product={card} isFavorito= {true} className={style.card} />
            </div>
          ))
        ) : (
          <p>No tienes productos favoritos.</p>
        )}
      </div>
    </div>
  );
};

export default Favoritos;