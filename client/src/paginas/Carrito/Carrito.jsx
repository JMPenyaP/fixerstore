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

  const removeLastItem = (id) => {
    const carritoEnLocalStorage =
      JSON.parse(localStorage.getItem("carrito")) || [];

    // Supongamos que deseas eliminar un elemento del carrito con un ID específico, por ejemplo, "producto-123"
    const productIdToDelete = id;

    // Filtrar el carrito para eliminar el elemento con el ID deseado
    const carritoSinElemento = carritoEnLocalStorage.filter(
      (producto) => producto.id !== productIdToDelete
    );

    // Guardar el carrito modificado de nuevo en el localStorage
    localStorage.setItem("carrito", JSON.stringify(carritoSinElemento));
  };

  return (
    <div className={style.cartContainer}>
      {console.log(datos)}
      <div className={style.cartCardDivContainer}>
        {carrito.length > 0 ? (
          carrito.map((item) => {
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
                    onClick={() => {
                      dispatch(removeProduct(item.id));
                      removeLastItem(item.id);
                    }}
                  >
                    <ion-icon name="trash-bin-outline"></ion-icon>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className={style.divEmptyCart}>
            <h2>
              El carrito de compras esta vacio!
              <br /> visita nuestro catalogo para agregar productos a tu carrito
            </h2>
            <div className={style.divLinkToProducts}>
              <Link to="/productos">
                <h3>Nuestros productos</h3>
              </Link>
            </div>
          </div>
        )}
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
          <button disabled={dataProfile === null || carrito.length < 1}>
            <ion-icon name="cart-outline"></ion-icon> Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
