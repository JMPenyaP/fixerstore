import style from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={style.footer}>
      <Link className={style.link}>
        <p>Contáctanos |</p>
      </Link>
      <Link className={style.link}>
        <p>Preguntas Frecuentes |</p>
      </Link>
      <Link className={style.link}>
        <p>Puntos De Venta |</p>
      </Link>
      <Link to="/admin" className={style.link}>
        <p>Perfil De Administrador</p>
      </Link>
    </div>
  );
}
