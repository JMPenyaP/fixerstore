import { useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import Filtros from "../../components/Filtros/Filtros";
import { useDispatch, useSelector } from "react-redux";
import { clearProductName } from "../../redux/Actions/clearProductName";
import style from "./Catalogo.module.css";
import Footer from "../../components/Footer/Footer";
import CardsArr from "../../components/Cards/CardsArr";

const Catalogo = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.allProducts);

  /*  const handlerFilter = () => {
    dispatch(setFiltros())
  }; */

  useEffect(() => {
    dispatch(clearProductName());
  }, [dispatch]);

  return (
    <>
      <div>
          <div className={style.divMain}>

            <div className={style.divFiltros}>
              <Filtros />
            </div>

            {allProducts.length ? 
            
              <CardsArr allProducts={allProducts} />
            
            :
            <div >
              <Cards />
            </div>
            }
            
          </div>

        <div>
          <Footer />
        </div>

      </div>
    </>
  );
};

export default Catalogo;
