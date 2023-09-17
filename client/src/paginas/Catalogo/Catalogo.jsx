import { useState, useEffect } from "react";
import Cards from "../../components/Cards/Cards";
import Filtros from "../../components/Filtros/Filtros";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/Actions/getAllProducts";
import style from "./Catalogo.module.css";

const Catalogo = () => {
  const dispatch = useDispatch();
  const filtrosActivos = useSelector((state) => state.filtrosActivos);
  const allProducts = useSelector((state) => state.allProducts);

  const [filtroActivo, setFiltroActivo] = useState(false);

  /*  const handlerFilter = () => {
    dispatch(setFiltros())
  }; */

  useEffect(() => {
    allProducts?.length === 0 && dispatch(getAllProducts());
  }, [allProducts, dispatch]);

  const handleCheckboxChange = () => {
    setFiltroActivo(!filtroActivo);
  };

  console.log(allProducts);
  return (
    <>
      <div className={style.filtros}>
        <h3>Filtros</h3>
        <input
          className={style.active}
          type="checkbox"
          checked={filtroActivo}
          onChange={handleCheckboxChange}
        />
        {filtroActivo && <Filtros />}
      </div>
      <Cards />
    </>
  );
};

export default Catalogo;
