import style from "../Constru.module.css"

const Pedidos = () => {
    const imagen = "https://acortar.link/t7yfgg"
    return (
        <div className={style.div}>
            <h2 className={style.titulo}>Pedidos</h2>
            <p className={style.p}>Sección en construcción</p>
            <img className={style.img} src={imagen} alt="Construcción" />
        </div>
    )
}

export default Pedidos