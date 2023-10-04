import styles from "./Pasarela.module.css";
import lock from "../../assets/Vector.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Ticket from "./Ticket";
import Form from "./form/Form";
import { useEffect } from "react";

const Pasarela = () => {
  const carritoById = useSelector((state) => state.carritoById);
  const dataProfile = useSelector((state) => state.dataProfile);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (dataProfile === null) {
        window.location.href = "/";
      }
    }, 10);
  
    return () => clearTimeout(timeoutId); 
  }, [dataProfile]);

  const totalCarrito = carritoById?.reduce((valorAnterior, valorActual) => {
    return valorAnterior + valorActual.precio * valorActual.cantidad;
  }, 0);


  return (
    <>
      <div className={styles.divMain}>
        <div className={styles.nav}>
          <Link to="/">
            <div className={styles.logo}>
              <img
                src="https://fixershoes.com/assets/fixer-227x78.jpg"
                alt="Logo Fixer"
                width={"227px"}
                height={"78px"}
              />
            </div>
          </Link>
          <div className={styles.seguro}>
            <img src={lock} alt="candado" width={"32px"} height={"35px"} />

            <h2>Compra segura</h2>
          </div>
        </div>

          <h2 className={styles.title}>Finalizar Compra</h2>

        <div className={styles.contenedor}>
          <Form />
          <div className={styles.divDetalle}>
            <h2>Detalle</h2>

            <div>
              <Ticket carrito={carritoById} />
            </div>

            <div className={styles.divTotal}>
              <h3>Total</h3>
              <h2>${totalCarrito}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pasarela;
