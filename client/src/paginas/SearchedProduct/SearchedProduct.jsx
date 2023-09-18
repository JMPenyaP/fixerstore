import style from "./SearchedProduct.module.css";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/Card/Card";
import { Spinner } from "../../components/Carga/Carga";
import Footer from "../../components/Footer/Footer";

const SearchedProduct = () => {
  const products = useSelector((state) => state.productByName);
  const productName = useSelector((state) => state.productName);
  const productsData = products && products.data; // Asegurarse de que products no sea undefined
  let showNoProductsMessage = true;
  /*   console.log(productsData);
  console.log(productName); */

  if (!productName || productsData.length < 1) {
    showNoProductsMessage = false;
  }

  return (
    <>
    <div className={style.divSearchedProduct}>
      {showNoProductsMessage ? (
        productsData.map((prod) => <Card product={prod} />)
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
