import { useState, useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import Filtros from "../../components/Filtros/Filtros";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/Actions/getAllProducts";
import style from "./Catalogo.module.css";
import CardsArr from "../../components/Cards/CardsArr";
import Footer from "../../components/Footer/Footer";
import BotonSwitch from "../../elementos/BotonSwitch";

const Catalogo = () => {
  const dispatch = useDispatch();

  const productosFiltrados = useSelector((state) => state.productosFiltrados);
  const allProducts = useSelector((state) => state.allProducts);

  const [filtroActivo, setFiltroActivo] = useState(false);

  /*  const handlerFilter = () => {
    dispatch(setFiltros())
  }; */

  useEffect(() => {
    allProducts?.length === 0 && dispatch(getAllProducts());
  }, [allProducts, dispatch]);



  return (
    <>
      <div className={style.divFiltros}>
        
        <div className={style.divOne}><h4>Filtros</h4><BotonSwitch  filtroActivo={filtroActivo} setFiltroActivo={setFiltroActivo} /></div>

        <div className={style.divTwo}>{filtroActivo && <Filtros />}</div>
            
      </div>

      <div>
        {filtroActivo ? (
          <>
            <CardsArr allProducts={productosFiltrados} />
            <Footer />
          </>
        ) : (
          <Cards />
        )}
      </div>
    </>
  );
};

export default Catalogo;
