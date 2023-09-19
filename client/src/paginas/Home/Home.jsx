import Banner from "../../components/Banner/Banner";
import Carrusel from "../../components/Carrusel/Carrusel";
import Footer from "../../components/Footer/Footer";
import style from "./Home.module.css";
import { useEffect } from "react";
import { getAllProducts } from "../../redux/Actions/getAllProducts";
import { useDispatch, useSelector } from "react-redux";
import BotonSwitch from "../../elementos/BotonSwitch";

const Home = () => {
  const dispatch = useDispatch();

  const allProducts = useSelector((state) => state.allProducts);

  useEffect(() => {
    allProducts?.length === 0 && dispatch(getAllProducts());
  }, [allProducts, dispatch]);

  return (
    <>
      <Banner />
      <div className={style.carrusel}>
        <Carrusel />
      </div>
      <div className={style.separador}></div>
      <Footer />

    </>
  );
};

export default Home;
