import React, { useEffect, useState } from "react";
import style from "./favoritos.module.css";
import Card from "../../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getFav } from "../../../redux/Actions/getFav";
import InfiniteScroll from "react-infinite-scroll-component";


const Favoritos = () => {
  const dispatch = useDispatch();
  const dataProfileActual = useSelector((state) => state.dataProfile) || {
    userData: { id: "" },
  };
  const favoritos = useSelector((state) => state.fav);
  const { userData } = dataProfileActual;

  const [hasMore, setHasMore] = useState(true); // Indica si hay más elementos para cargar
  const [visibleCards, setVisibleCards] = useState(10); // Número inicial de cards visibles
  const cardsPerPage = 10;

  useEffect(() => {
    // Fetch initial data when the component mounts
    dispatch(getFav({ userData }));
    // Clean up the component when unmounting
    return () => {
      // Remove the scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch, userData]);

  const loadMoreCards = () => {
    if (visibleCards < favoritos.length) {
      // Increment the number of visible cards
      setVisibleCards((prevVisibleCards) => prevVisibleCards + cardsPerPage);
    } else {
      // All cards have been loaded
      setHasMore(false);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight - 100
    ) {
      loadMoreCards();
    }
  };

  useEffect(() => {
    // Add a scroll event listener to load more cards when needed
    window.addEventListener("scroll", handleScroll);
  }, [visibleCards, favoritos]);

  return (
    <div className={style.contenedor}>
      <div className={style.divComplementario}>
        <h5 className={style.titulo}>Mis productos favoritos</h5>
      </div>

      <InfiniteScroll
        dataLength={visibleCards}
        hasMore={hasMore}
      >
        <div className={style.cards}>
          {favoritos?.length > 0 ? (
            favoritos.slice(0, visibleCards).map((card) => (
              <div key={card.id} className={style.cardWrapper}>
                <Card product={card} isFavorito={true} className={style.card} />
              </div>
            ))
          ) : (
            <p>No tienes productos favoritos.</p>
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Favoritos;
