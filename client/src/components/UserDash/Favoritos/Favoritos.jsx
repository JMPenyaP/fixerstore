import style from "./favoritos.module.css"
import Card from "../../Card/Card"
import { useSelector } from "react-redux"

const Favoritos = () => {
    const products = useSelector((state) => state.allProducts);
    
    return (
        <div className={style.contenedor}>
            <div className={style.divComplementario}>
                <h5 className={style.titulo}>Mis productos favoritos</h5>
            </div>
            <div className={style.cards}>
                {products.map((card) => (
                    <div key={card.id} className={style.cardWrapper}>
                        <Card product={card} className={style.card} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Favoritos;