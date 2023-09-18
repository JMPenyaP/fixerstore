import style from "./SearchedProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { Spinner } from "../../components/Carga/Carga";
import Footer from "../../components/Footer/Footer";
import CardsArr from "../../components/Cards/CardsArr";
import Filtros from "../../components/Filtros/Filtros";
import { useState } from "react";
import { useParams } from "react-router-dom";

const SearchedProduct = () => {
  const {name} = useParams()

  const [filtroActivo, setFiltroActivo] = useState(false);

  const products = useSelector((state) => state.productByName);
  const productName = useSelector((state) => state.productName);
  const productsData = products && products.data; // Asegurarse de que products no sea undefined
  let showNoProductsMessage = true;
  /*   console.log(productsData);
  console.log(productName); */

  if (!productName || productsData.length < 1) {
    showNoProductsMessage = false;
  }
  // const handleCheckboxChange = (event) => {
  //   setFiltroActivo(!filtroActivo);
  // };

  return (
    <>
        <div>
          <h1>resultados con : {name}</h1>
          <h3>Filtros</h3>
          <input
            className={style.active}
            type="checkbox"
            checked={filtroActivo}
            onChange={handleCheckboxChange}
          />

        </div>
        <div className={style.divSearchedProduct}>
            {showNoProductsMessage ? (
    
              <CardsArr allProducts={productsData}/>

            ) : (
              <div className={style.container}>
                <Spinner />
                <h1>¡No se Encontraron Productos!</h1>
              </div>
            )}
        </div>
    <Footer />
    </>
  );
};

export default SearchedProduct;
