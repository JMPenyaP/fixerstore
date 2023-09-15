import style from "../Constru.module.css"

const Perfiles = () => {
    const imagen = "https://acortar.link/t7yfgg"
    return (
        <div className={style.div}>
            <h2 className={style.titulo}>Perfiles</h2>
            <p className={style.p}>Sección en construcción</p>
            <img className={style.img} src={imagen} alt="Construcción" />
        </div>
    )
}

export default Perfiles