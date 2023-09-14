import style from "./Constru.module.css"


const DefaultView = (props) => {
    const {name} = props
    return (
        <div className={style.div}>
            <h2 className={style.titulo}>¡Bievenido de nuevo {name}!</h2>
            <p className={style.p}>Este es un dashboard de administrador</p>
            <p className={style.p}>Selecciona alguna de las secciones para visualizar la información de tu e-commerce</p>
        </div>
    )
}

export default DefaultView