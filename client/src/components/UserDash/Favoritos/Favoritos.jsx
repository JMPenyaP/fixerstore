import React, { useEffect, useState } from "react";
import style from "./favoritos.module.css";
import Card from "../../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { userFavoritos } from "../../../redux/Actions/userFavoritos";
import { getFav } from "../../../redux/Actions/getFav";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "../../Carga/Carga";

const Favoritos = () => {
  const dispatch = useDispatch();
  const dataProfileActual = useSelector((state) =>
    state.dataProfile === null ? { userData: { id: "" } } : state.dataProfile
  );
  const favoritos = useSelector((state) => state.fav);
  const { userData } = dataProfileActual;

  const [hasMore, setHasMore] = useState(true); // Indica si hay más elementos para cargar
  const [visibleCards, setVisibleCards] = useState(5); // Número inicial de cards visibles
  const cardsPerPage = 5;

  useEffect(() => {
    // Función para cargar más cards
    const loadMoreCards = () => {
      if (visibleCards + cardsPerPage >= favoritos.length) {
        // Todos los cards han sido cargados
        setHasMore(false);
        return;
      }
      // Incrementa el número de cards visibles
      setVisibleCards((prevVisibleCards) => prevVisibleCards + cardsPerPage);
    };



    dispatch(getFav({ userData }));


    // Agrega un evento de desplazamiento para cargar más cards cuando sea necesario
    window.addEventListener("scroll", loadMoreCards);
    return () => {
      // Limpia el evento de desplazamiento al desmontar el componente
      window.removeEventListener("scroll", loadMoreCards);
    };
  }, [dispatch, visibleCards]);

  return (
    <div className={style.contenedor}>
      <div className={style.divComplementario}>
        <h5 className={style.titulo}>Mis productos favoritos</h5>
      </div>

      <InfiniteScroll
        dataLength={visibleCards}
        next={() => { }}
        hasMore={hasMore}
        loader={favoritos.length > 0 && <Spinner />}
      >
        <div className={style.cards}>
          {favoritos?.length > 0 ? (
            favoritos.slice(0, visibleCards)?.map((card) => (
              <div key={card.id} className={style.cardWrapper}>
                <Card product={card} isFavorito={true} className={style.card} />
              </div>
            ))
          ) : <p>No tienes productos favoritos.</p>}
        </div>
      </InfiniteScroll>

    </div >
  );
};

export default Favoritos;
