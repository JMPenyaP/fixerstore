import style from "./Footer.module.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Footer() {
  const [idClient, setIdClient] = useState("")
  const dataProfileActual = useSelector((state) => state.dataProfile ?? null);
  useEffect(()=> {
    if (dataProfileActual !== null ) {
      if (dataProfileActual.userData) {
        const {userData} = dataProfileActual
        const id = userData.id
        setIdClient(id)
      }
    }
  }, [dataProfileActual])
  return (
    // <>
    //   <div className={style.contact}>
    //     <table className={style.tabla}>
    //       <td>
    //         <tr>
    //           <h2>Fixer Shoes</h2>
    //         </tr>
    //         <div className={style.puntosDeVentaDiv}>
    //           <ion-icon name="location-outline"></ion-icon>
    //           <tr>Puntos de Venta</tr>
    //         </div>
    //         <ul>
    //           <li>C.C. Centro Mayor | Whatsapp: 3125402667</li>
    //           <li>C.C. Plaza Américas | Whatsapp: 3132070155</li>
    //         </ul>
    //         {/* <tr>Aviso De Privacidad</tr> */}
    //         {/* <tr>
    //           <Link to="/admin" className={style.link}>
    //             Perfil De Administrador
    //           </Link>
    //         </tr> */}
    //       </td>
    //       <td>
    //         <tr>
    //           <h2>Síguenos</h2>
    //         </tr>
    //         <tr>
    //           <Link
    //             to="https://www.instagram.com/fixershoes/?hl=es"
    //             className={style.link}
    //             target="_blank"
    //           >
    //             <div className={style.divInstagram}>
    //               <ion-icon name="logo-instagram"></ion-icon>
    //               Instagram
    //             </div>
    //           </Link>
    //         </tr>
    //         <tr>
    //           <Link
    //           to="https://www.facebook.com/fixershoes/"
    //           className={style.link}
    //           target="_blank">
    //             <div className={style.divInstagram}>
    //               <ion-icon name="logo-facebook"></ion-icon>
    //               Facebook
    //               </div>
    //             </Link>
    //         </tr>
    //         <tr>
    //           <Link
    //           to="https://www.tiktok.com/@fixershoes?_t=8gBU1nI4Tcz&_r=1"
    //           className={style.link}
    //           target="_blank">
    //             <div className={style.divInstagram}>
    //               <ion-icon name="logo-tiktok"></ion-icon>Tik Tok
    //               </div>
    //             </Link>
    //         </tr>
    //         {/*<tr>
    //           <Link className={style.link}>Facebook</Link>
    //         </tr>
    //          <tr>
    //           <Link className={style.link}>Youtube</Link>
    //         </tr> */}
    //       </td>
    //       <td>
    //         <tr>
    //           <h2>Contáctanos</h2>
    //         </tr>
    //         <div className={style.infoDiv}>
    //           <ion-icon name="mail-outline"></ion-icon>
    //           <tr>info@fixershoes.com</tr>
    //         </div>
    //         {/* <tr>Preguntas Frecuentes</tr> */}
    //       </td>
    //     </table>
    //   </div>
    //   <div className={style.footer}>
    //     {/* <Link to="/admin" className={style.link}>
    //       Aviso De Privacidad |
    //     </Link> 
    //     <Link to="/admin" className={style.link}>
    //       Perfil De Administrador
    //     </Link>*/}

    //           <Link to="/admin" className={style.link}>
    //             Perfil De Administrador
    //           </Link>

    //   </div>
    // </>
    <footer className={style.footer}>
        <div className={style.section}>
          <section className={style.footerSection}>
            <h2>Fixer Shoes</h2>
            <div className={style.puntosDeVentaDiv}>
              <ion-icon name="location-outline"></ion-icon>
              <h3>Puntos de Venta</h3>
            </div>
                
                <ul>
                  <li>C.C. Centro Mayor | Whatsapp: 3125402667</li>
                  <li>C.C. Plaza Américas | Whatsapp: 3132070155</li>
                </ul>
            <Link to="/admin" className={style.link}>
              Perfil De Administrador
            </Link>
          </section>


          <section className={style.footerSection}>
            <h2>Síguenos</h2>
            <div className={style.divRed}>
              <Link to="https://www.instagram.com/fixershoes/?hl=es" target="_blank">
                <ion-icon name="logo-instagram"></ion-icon>Instagram
                
              </Link>
              <Link to="https://www.facebook.com/fixershoes/" target="_blank">
                <ion-icon name="logo-facebook"></ion-icon>
                Facebook
              </Link>
              <Link to="https://www.tiktok.com/@fixershoes?_t=8gBU1nI4Tcz&_r=1" target="_blank">
                <ion-icon name="logo-tiktok"></ion-icon>
                Tik Tok
              </Link>
            </div>
          </section>

          <section className={style.footerSection}>
            <h2>Contáctanos</h2>
            <div className={style.infoDiv}>
              <ion-icon name="mail-outline"></ion-icon>
              <p>info@fixershoes.com</p>
            </div>
          </section>
        </div>
        
    </footer>
  );
}
