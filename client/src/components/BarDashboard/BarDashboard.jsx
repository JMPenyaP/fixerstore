import { useState } from "react"
import FormProduct from "../FormProduct/FormProduct"
import Estadisticas from "./Estadisticas/Estadisticas"
import Pedidos from "./Pedidos/Pedidos"
import Productos from "./Productos/Productos"
import Perfiles from "./Perfiles/Perfiles"
import DefaultView from "./DefaultView"
import style from "./Bar.module.css"

const BarDashboard = () => {
    const [actualSection, setActualSection] = useState(<DefaultView/>)
    const [actualBoton, setActualBoton] = useState(null)
    const handleSection = (contenido, boton) => {
        setActualSection(contenido)
        setActualBoton(boton)
    }
    //Importar estos datos de los estados globales
    const correo = "admin@fixer.com"
    const nombre = "Fabian Correa"
    const inicial = nombre.charAt(0).toUpperCase();
    //Renderizado
    return (
        <div className={style.contenedor}>
            <div className={style.barralateral}>
                <div className={style.profile}>
                    <div className={style.inicial}>
                        <h3>{inicial}</h3>
                    </div>
                    <div className={style.dataProfile}>
                        <h4 className={style.nombre}>{nombre}</h4>
                        <h5 className={style.correo}>{correo}</h5>
                    </div>
                </div>
                <div className={style.divbotones}>
                    <button onClick={() => handleSection(<Estadisticas/>, "Est")} className={actualBoton === "Est" ? style.onBoton : style.offBoton}>Estadisticas</button>
                    <button onClick={() => handleSection(<Pedidos/>, "Ped")} className={actualBoton === "Ped" ? style.onBoton : style.offBoton}>Pedidos</button>
                    <button onClick={() => handleSection(<Productos/>, "Prod")} className={actualBoton === "Prod" ? style.onBoton : style.offBoton} >Productos</button>
                    <button onClick={() => handleSection(<FormProduct/>, "Crear")} className={actualBoton === "Crear" ? style.onBoton : style.offBoton}>Crear producto</button>
                    <button onClick={() => handleSection(<Perfiles/>, "Perf")} className={actualBoton === "Perf" ? style.onBoton : style.offBoton}>Perfiles</button>
                </div>
            </div>
            <div className={style.section}>
                <h2 className={style.titulo}>Dashboard</h2>
                {actualSection}
            </div>
        </div>
    )
}

export default BarDashboard

