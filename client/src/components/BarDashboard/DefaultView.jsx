import style from "./Constru.module.css"


const DefaultView = (props) => {
    const {name} = props
    return (
        <div className={style.div}>
            {/* <img className={style.logo} src="https://res.cloudinary.com/dgxp4c4yk/image/upload/v1694710937/FIXERSHOES/LOGO-FIXER-SOLO-PNG_mwfsfe.png" alt="Logo" /> */}
            <h2 className={style.tituloDash}>Dashboard Fixer Shoes</h2>
            <h2 className={style.titulo}>¡Bievenido de nuevo {name}!</h2>
            <p className={style.p2}>Este es un dashboard de administrador</p>
            <p className={style.p2}>Selecciona alguna de las secciones para visualizar la información de tu e-commerce</p>
        </div>
    )
}

export default DefaultView