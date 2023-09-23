import { useEffect, useState } from "react"
import FormProduct from "../FormProduct/FormProduct"
import Estadisticas from "./Estadisticas/Estadisticas"
import Pedidos from "./Pedidos/Pedidos"
import Productos from "./Productos/Productos"
import Perfiles from "./Perfiles/Perfiles"
import DefaultView from "./DefaultView"
import style from "./Bar.module.css"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import logOut from "../../redux/Actions/logOut"
import { NavLink, useNavigate } from "react-router-dom";
import { set } from "react-hook-form"

const BarDashboard = () => {
    //Importar estos datos de los estados globales
    const dispatch = useDispatch()
    let dataProfileActual = useSelector((state)=> state.dataProfile)
    let adminProfile = useSelector((state) => state.adminProfile)
    const [log, setLog] = useState(null)
    const navigate = useNavigate()
    const [email,setEmail] = useState(null)
    const [name,setName] = useState(null)
    const [inicial, setInicial] = useState(null)
    useEffect(()=> {
        if(dataProfileActual) {
            setEmail(dataProfileActual.email)
            setName(dataProfileActual.name)
/*             setInicial(dataProfileActual.name.charAt(0).toUpperCase()) */
        }
        setLog(adminProfile)
    }, [dataProfileActual, adminProfile])
    const [actualSection, setActualSection] = useState(<DefaultView name = {name}/>)
    const [actualBoton, setActualBoton] = useState(null)
    const handleSection = (contenido, boton) => {
        setActualSection(contenido)
        setActualBoton(boton)
    }
    console.log(log);
    const handleRedirect = () => {
        dispatch(logOut())
        if(log === false) {
            navigate("/admin")
        }
    }
    //Renderizado de barra 
    return (
        <div className={style.contenedor}>
            <div className={style.barralateral}>
                <div className={style.profile}>
                    <div className={style.inicial}>
                        <h3>{inicial}</h3>
                    </div>
                    <div className={style.dataProfile}>
                        <h4 className={style.nombre}>{name}</h4>
                        <h5 className={style.correo}>{email}</h5>
                    </div>
                </div>
                <div className={style.divbotones}>
                    <button onClick={() => handleSection(<Estadisticas/>, "Est")} className={actualBoton === "Est" ? style.onBoton : style.offBoton}><img className={style.logoboton} src="https://api.iconify.design/material-symbols:query-stats.svg?color=%233cbbed" alt="" />  Estadisticas </button>
                    <button onClick={() => handleSection(<Pedidos/>, "Ped")} className={actualBoton === "Ped" ? style.onBoton : style.offBoton}><img className={style.logoboton} src="https://api.iconify.design/material-symbols:shop-sharp.svg?color=%233cbbed" alt="" />  Pedidos</button>
                    <button onClick={() => handleSection(<Productos/>, "Prod")} className={actualBoton === "Prod" ? style.onBoton : style.offBoton} ><img className={style.logoboton} src="https://api.iconify.design/material-symbols:production-quantity-limits.svg?color=%233cbbed" alt="" />  Productos</button>
                    <button onClick={() => handleSection(<FormProduct/>, "Crear")} className={actualBoton === "Crear" ? style.onBoton : style.offBoton}><img className={style.logoboton} src="https://api.iconify.design/material-symbols:create-new-folder-outline.svg?color=%233cbbed" alt="" />  Nuevo producto</button>
                    <button onClick={() => handleSection(<Perfiles/>, "Perf")} className={actualBoton === "Perf" ? style.onBoton : style.offBoton}><img className={style.logoboton} src="https://api.iconify.design/material-symbols:manage-accounts.svg?color=%233cbbed" alt="" />  Perfiles</button>
                    <button onClick={()=> handleRedirect()} className={style.offBoton2}><img className={style.logoboton} src="https://api.iconify.design/tabler:logout-2.svg?color=%233cbbed" alt="" />  Cerrar sesión </button>
                </div>
            </div>
            <div className={style.section}>
                {actualSection}
            </div>
        </div>
    )
}

export default BarDashboard

