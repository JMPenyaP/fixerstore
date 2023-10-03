import style from "./Error.module.css"
import { NavLink } from "react-router-dom"

const Error = () => {
    return (
        <>
        <div className={style.contenedor}>
            <img className={style.imagen} src="https://fixershoes.com/assets/LOGO-FIXER-8-X-8-PNG.png"/>
            <h1 className={style.titulo}>ERROR 404</h1>
            <h2 className={style.subtitulo}>Esta pagina no existe</h2>
            <NavLink to="/">
            <button className={style.formbutton}> Volver al inicio </button>
            </NavLink>
        </div>
        </>
    )

}

export default Error