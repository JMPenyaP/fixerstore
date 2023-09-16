import Banner from "../../components/Banner/Banner";
import Carrusel from "../../components/Carrusel/Carrusel";
import Footer from "../../components/Footer/Footer";
import style from "./Home.module.css";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  return (
    <>
      <Banner />
      <div className={style.titulo}>
        <h1>PRODUCTOS RECOMENDADOS</h1>
      </div>
      <div className={style.carrusel}>
        <p>Aqui va el carrusel</p>
        <Carrusel />
      </div>
      <Footer />
    </>
  );
};

export default Home;
