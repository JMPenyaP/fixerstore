import { useState } from "react"
import FormProduct from "../FormProduct/FormProduct"
import Estadisticas from "./Estadisticas/Estadisticas"
import Pedidos from "./Pedidos/Pedidos"

const BarDashboard = () => {
    const [actualSection, setActualSection] = useState(null)
    const handleSection = (contenido) => {
        setActualSection(contenido)
    }
    return (
        <div>
            <div>
                <h2>Dashboard</h2>
                <button onClick={() => handleSection(<Estadisticas/>)} disabled>Estadisticas</button>
                <button onClick={() => handleSection(<Pedidos />)}disabled>Pedidos</button>
                <button disabled>Productos</button>
                <button>Crear producto</button>
                <button>Perfiles</button>
            </div>
            <div>
                {actualSection}
            </div>
        </div>
    )
}

export default BarDashboard

