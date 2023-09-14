import { useState } from "react"
import FormProduct from "../FormProduct/FormProduct"
import Estadisticas from "./Estadisticas/Estadisticas"
import Pedidos from "./Pedidos/Pedidos"
import Productos from "./Productos/Productos"
import Perfiles from "./Perfiles/Perfiles"
import DefaultView from "./DefaultView"

const BarDashboard = () => {
    const [actualSection, setActualSection] = useState(<DefaultView/>)
    const [actualBoton, setActualBoton] = useState(null)
    const handleSection = (contenido, boton) => {
        setActualSection(contenido)
        setActualBoton(boton)
    }
    return (
        <div>
            <div>
                <h2>Dashboard</h2>
                <button onClick={() => handleSection(<Estadisticas/>, "Est")} className={actualBoton === "Est" ? style.onBoton : style.offBoton}>Estadisticas</button>
                <button onClick={() => handleSection(<Pedidos/>, "Ped")} className={actualBoton === "Ped" ? style.onBoton : style.offBoton}>Pedidos</button>
                <button onClick={() => handleSection(<Productos/>, "Prod")} className={actualBoton === "Prod" ? style.onBoton : style.offBoton} >Productos</button>
                <button onClick={() => handleSection(<FormProduct/>, "Crear")} className={actualBoton === "Crear" ? style.onBoton : style.offBoton}>Crear producto</button>
                <button onClick={() => handleSection(<Perfiles/>, "Perf")} className={actualBoton === "Perf" ? style.onBoton : style.offBoton}>Perfiles</button>
            </div>
            <div>
                {actualSection}
            </div>
        </div>
    )
}

export default BarDashboard

