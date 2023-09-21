import style from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className={style.contact}>
        <table className={style.tabla}>
          <td>
            <tr>
              <h2>Fixer Shoes</h2>
            </tr>
            <div className={style.puntosDeVentaDiv}>
              <ion-icon name="location-outline"></ion-icon>
              <tr>Puntos de Venta</tr>
            </div>
            <ul>
              <li>C.C. Centro Mayor | Whatsapp: 3125402667</li>
              <li>C.C. Plaza Américas | Whatsapp: 3132070155</li>
            </ul>
            {/* <tr>Aviso De Privacidad</tr> */}
            <tr>
              <Link to="/admin" className={style.link}>
                Perfil De Administrador
              </Link>
            </tr>
          </td>
          <td>
            <tr>
              <h2>Síguenos</h2>
            </tr>
            <tr>
              <Link
                to="https://www.instagram.com/fixershoes/?hl=es"
                className={style.link}
              >
                <div className={style.divInstagram}>
                  <ion-icon name="logo-instagram"></ion-icon>
                  Instagram
                </div>
              </Link>
            </tr>
            <tr>
              <Link to="/login" className={style.link}>
                Ingresar
              </Link>
            </tr>
            {/*<tr>
              <Link className={style.link}>Facebook</Link>
            </tr>
             <tr>
              <Link className={style.link}>Youtube</Link>
            </tr> */}
          </td>
          <td>
            <tr>
              <h2>Contáctanos</h2>
            </tr>
            <div className={style.infoDiv}>
              <ion-icon name="mail-outline"></ion-icon>
              <tr>info@fixershoes.com</tr>
            </div>
            {/* <tr>Preguntas Frecuentes</tr> */}
          </td>
        </table>
      </div>
      <div className={style.footer}>
        {/* <Link to="/admin" className={style.link}>
          Aviso De Privacidad |
        </Link> 
        <Link to="/admin" className={style.link}>
          Perfil De Administrador
        </Link>*/}
      </div>
    </>
  );
}
