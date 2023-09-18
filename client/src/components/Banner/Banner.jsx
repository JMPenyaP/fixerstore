import { Link } from "react-router-dom";
import style from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={style.fondo}>
      <div className={style.cita}>
        <p className={style.promo}>
          20% de
        </p>
        <p className={style.promo}>
          descuento!
        </p >
        <div className={style.divButton}>
          <Link to="/productos" className={style.link}>
            <button>Ir a comprar</button>
          </Link>
        </div>
        <p className={style.peq}>Promoción válida solo por el mes de septiembre por compras superiores
          a $50.000</p>
      </div>
      <div className={style.imagenContainer}>
      <div className={style.imagen}></div>
      </div>
    </div>
  );
}
