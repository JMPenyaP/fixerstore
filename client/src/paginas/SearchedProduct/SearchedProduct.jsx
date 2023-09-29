import style from "./SearchedProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { Spinner } from "../../components/Carga/Carga";
import Footer from "../../components/Footer/Footer";
import CardsArr from "../../components/Cards/CardsArr";
import Filtros from "../../components/Filtros/Filtros";
import { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";

const SearchedProduct = () => {
  const { name } = useParams();

  const [filtroActivo, setFiltroActivo] = useState(false);

  const products = useSelector((state) => state.prodBuscaComb);
  const productName = useSelector((state) => state.productName);
  const productsData = products && products.data; 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); 
  }, []);

  return (
    <>
      <div>
        {/* <h3>Filtros</h3>
          <input
            className={style.active}
            type="checkbox"
            checked={filtroActivo}
            onChange={handleCheckboxChange}
          /> */}
      </div>
      <div className={style.divSearchedProduct}>
        {isLoading ? (
          <div className={style.container}>
            <Spinner />
          </div>
        ) : (
          <div>
            {productName && (
              <h1>resultados con : {name}</h1>
            )}
            <Filtros/>
            {productsData && productsData.length > 0 ? (
              <CardsArr allProducts={productsData} />
            ) : (
              <div className={style.container}>
                <h1>¡No se Encontraron Productos!</h1>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchedProduct;
