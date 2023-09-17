import Banner from "../../components/Banner/Banner";
// import Carrusel from "../../components/Carrusel/Carrusel";
import Footer from "../../components/Footer/Footer";
import style from "./Home.module.css";

const Home = () => {
  return (
    <>
      <Banner />
      {
        <div className={style.titulo}>
          <h1>PRODUCTOS RECOMENDADOS</h1>
        </div>
      }
      {/* <div className={style.carrusel}>
        <p>Aqui va el carrusel</p>
<<<<<<< HEAD
        <Carrusel/>
      </div> */}
=======
        <Carrusel />
      </div>
>>>>>>> 8696547b8007c0be8cf576c1ce2d65b91370e706
      <div className={style.separador}></div>
      <Footer />
    </>
  );
};

export default Home;
