import style from "./Carrito.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  disminuirCtdad,
  incrementarCtdad,
  removeProduct,
} from "../../redux/Actions/carrito";
import { Link } from "react-router-dom";

const Carrito = () => {
  const carrito = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const dataProfile = useSelector((state) => state.dataProfile);

  const total = carrito.reduce((accumulator, item) => {
    return accumulator + item.precio * item.cantidad;
  }, 0);

  const datos = { userId: dataProfile, products: carrito };

  return (
    <div className={style.cartContainer}>
      {console.log(datos)}
      <div className={style.cartCardDivContainer}>
        {carrito.map((item) => {
          return (
            <div className={style.cardCartContainer}>
              <img src={item.image} alt="product" />
              <Link to={`/detail/${item.id}`}>
                <h1>{item.name}</h1>
              </Link>
              <div className={style.divDatosCart}>
                <div className={style.infoDetail}>
                  <h2>Precio</h2>
                  <h2>$ {item.precio}</h2>
                </div>
                <div className={style.infoDetail}>
                  <h2>Cantidad</h2>
                  <div className={style.editarCtdadDiv}>
                    <span onClick={() => dispatch(disminuirCtdad(item.id))}>
                      <ion-icon name="remove-circle"></ion-icon>
                    </span>
                    <h2>{item.cantidad}</h2>
                    <span onClick={() => dispatch(incrementarCtdad(item.id))}>
                      <ion-icon name="add-circle"></ion-icon>
                    </span>
                  </div>
                </div>
                <div className={style.infoDetail}>
                  <h2>subTotal</h2>
                  <h2>$ {item.precio * item.cantidad}</h2>
                </div>
                <div
                  className={style.divDelete}
                  onClick={() => dispatch(removeProduct(item.id))}
                >
                  <ion-icon name="trash-bin-outline"></ion-icon>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.containerResumen}>
        <div className={style.divResumen}>
          <h2>RESUMEN</h2>
          {carrito.map((item) => {
            return (
              <h5>
                {item.name} x {item.cantidad}
              </h5>
            );
          })}
          <h4>Total de compra: ${total}</h4>
        </div>
        <div className={style.divButton}>
          <button>
            <ion-icon name="cart-outline"></ion-icon> Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
