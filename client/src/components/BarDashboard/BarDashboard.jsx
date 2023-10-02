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
import sectionAdmin from "../../redux/Actions/sectionAdmin"

const BarDashboard = () => {
    //Importar estos datos de los estados globales
    const dispatch = useDispatch()
    const dataProfileActual = useSelector((state)=> state.dataProfile)
    const adminProfile = useSelector((state) => state.adminProfile)
    const [log, setLog] = useState(null)
    const navigate = useNavigate()
    const [email,setEmail] = useState(null)
    const [name,setName] = useState(null)
    const [inicial, setInicial] = useState(null)
    useEffect(()=> {
        if(dataProfileActual !== null) {
            if (dataProfileActual.userData.name) {
                setEmail(dataProfileActual.userData.email)
                setName(dataProfileActual.userData.name + " " + dataProfileActual.userData.surname)
                setInicial(dataProfileActual.userData.name[0])
            }
        }
        setLog(adminProfile)
    }, [dataProfileActual, adminProfile])
    const section = useSelector((state)=> state.section_admin)
    const storedSection = JSON.parse(localStorage.getItem("section_admin")) || "Est";
    const [actualSection, setActualSection] = useState(<Estadisticas/>)
    useEffect(()=> {
        if(section === "Est") setActualSection(<Estadisticas/>)
        if(section === "Ped") setActualSection(<Pedidos/>)
        if(section === "Prod") setActualSection(<Productos/>)
        if(section === "Crear") setActualSection(<FormProduct/>)
        if(section === "Perf") setActualSection(<Perfiles/>)
    }, [section])
    useEffect(()=> {
        if (section === "Est" && storedSection !== "Est" && storedSection !== "" ) {
            dispatch(sectionAdmin(storedSection))
        }
    }, [section, storedSection])
    const handleSection = (contenido, boton) => {
        dispatch(sectionAdmin(boton))
        localStorage.setItem("section_admin", JSON.stringify(boton));
    }
    const handleRedirect = () => {
        dispatch(logOut())
        setEmail(null)
        setName(null)
        setInicial(null)
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
                    <button onClick={() => handleSection(<Estadisticas/>, "Est")} className={section === "Est" ? style.onBoton : style.offBoton}><img className={style.logoboton} src="https://api.iconify.design/material-symbols:query-stats.svg?color=%233cbbed" alt="" />  Estadisticas </button>
                    <button onClick={() => handleSection(<Pedidos/>, "Ped")} className={section === "Ped" ? style.onBoton : style.offBoton}><img className={style.logoboton} src="https://api.iconify.design/material-symbols:shop-sharp.svg?color=%233cbbed" alt="" />  Pedidos</button>
                    <button onClick={() => handleSection(<Productos/>, "Prod")} className={section === "Prod" ? style.onBoton : style.offBoton} ><img className={style.logoboton} src="https://api.iconify.design/material-symbols:production-quantity-limits.svg?color=%233cbbed" alt="" />  Productos</button>
                    <button onClick={() => handleSection(<FormProduct/>, "Crear")} className={section === "Crear" ? style.onBoton : style.offBoton}><img className={style.logoboton} src="https://api.iconify.design/material-symbols:create-new-folder-outline.svg?color=%233cbbed" alt="" />  Nuevo producto</button>
                    <button onClick={() => handleSection(<Perfiles/>, "Perf")} className={section === "Perf" ? style.onBoton : style.offBoton}><img className={style.logoboton} src="https://api.iconify.design/material-symbols:manage-accounts.svg?color=%233cbbed" alt="" />  Perfiles</button>
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

