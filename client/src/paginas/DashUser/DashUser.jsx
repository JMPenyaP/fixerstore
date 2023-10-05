import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import style from "./DashUser.module.css"
import Compras from "../../components/UserDash/Compras/Compras";
import Datos from "../../components/UserDash/Datos/Datos";
import Favoritos from "../../components/UserDash/Favoritos/Favoritos";
import logOutUser from "../../redux/Actions/logOutUser";
import { userFavoritos } from "../../redux/Actions/userFavoritos";

const DashUser = () => {
    //Importar estos datos de los estados globales
    const dispatch = useDispatch()
    const dataProfileActual = useSelector((state) => (state.dataProfile === null ? { userData: { name: "", email: "", surname: "" } } : state.dataProfile));
    const { userData } = dataProfileActual
    const clientProfile = useSelector((state) => state.clientProfile)
    const [log, setLog] = useState(null)
    const navigate = useNavigate()
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [inicial, setInicial] = useState(null)
    const dataProfile = useSelector((state) => state.dataProfile);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          if (dataProfile === null) {
            window.location.href = "/";
          }
        }, 10);
      
        return () => clearTimeout(timeoutId); 
      }, [dataProfile]);

    useEffect(() => {
        if (dataProfileActual) {
            setEmail(userData.email)
            if(userData.surname === null) setName(userData.name)
            else setName(userData.name + " " + userData.surname)
            setInicial(userData.name[0])
        }
        setLog(clientProfile)
    }, [dataProfileActual, clientProfile])
    const [actualSection, setActualSection] = useState(<Compras />)
    const [actualBoton, setActualBoton] = useState("Com")
    const handleSection = (contenido, boton) => {
        setActualSection(contenido)
        setActualBoton(boton)
    }

    const handleRedirect = () => {
        dispatch(logOutUser())
        navigate("/")
        window.location.reload();
    };

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
                    <button onClick={() => handleSection(<Compras />, "Com")} className={actualBoton === "Com" ? style.onBoton : style.offBoton}><img className={style.logoboton} src="https://api.iconify.design/material-symbols:query-stats.svg?color=%233cbbed" alt="" />  Mis Compras </button>
                    <button onClick={() => handleSection(<Datos />, "Dat")} className={actualBoton === "Dat" ? style.onBoton : style.offBoton}><img className={style.logoboton} src="https://api.iconify.design/material-symbols:shop-sharp.svg?color=%233cbbed" alt="" />  Mis Datos</button>
                    <button onClick={() => handleSection(<Favoritos />, "Fav")} className={actualBoton === "Fav" ? style.onBoton : style.offBoton} ><img className={style.logoboton} src="https://api.iconify.design/material-symbols:production-quantity-limits.svg?color=%233cbbed" alt="" />  Mis favoritos</button>
                    <button onClick={() => handleRedirect()} className={style.offBoton2}><img className={style.logoboton} src="https://api.iconify.design/tabler:logout-2.svg?color=%233cbbed" alt="" />  Cerrar sesión </button>
                </div>
            </div>
            <div className={style.section}>
                {actualSection}
            </div>
        </div>
    )
}

export default DashUser