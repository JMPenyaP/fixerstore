import { useState, useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import Filtros from "../../components/Filtros/Filtros";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/Actions/getAllProducts";
import { clearProductName } from "../../redux/Actions/clearProductName";
import style from "./Catalogo.module.css";
import CardsArr from "../../components/Cards/CardsArr";
import Footer from "../../components/Footer/Footer";

const Catalogo = () => {
  const dispatch = useDispatch();

  const productosFiltrados = useSelector((state) => state.productosFiltrados);
  const allProducts = useSelector((state) => state.allProducts);

  const [filtroActivo, setFiltroActivo] = useState(false);

  /*  const handlerFilter = () => {
    dispatch(setFiltros())
  }; */

  useEffect(() => {
    dispatch(clearProductName());
  }, [dispatch]);

  useEffect(() => {
    allProducts?.length === 0 && dispatch(getAllProducts());
  }, [allProducts, dispatch]);

  const handleCheckboxChange = (event) => {
    const { checked } = event.target;
    if (checked === false) {
      dispatch(getAllProducts());
    }
    setFiltroActivo(!filtroActivo);
  };

  return (
    <>
      <div>
        <h3>Filtros</h3>
        <input
          className={style.active}
          type="checkbox"
          checked={filtroActivo}
          onChange={(event) => handleCheckboxChange(event)}
        />
        {filtroActivo && <Filtros />}
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
