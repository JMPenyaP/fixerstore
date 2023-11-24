import style from "./Carrito.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  disminuirCtdad,
  incrementarCtdad,
  removeProduct,
} from "../../redux/Actions/carrito";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";

const Carrito = () => {
  const carrito = useSelector((state) => state.carrito);
  const carritoById = useSelector((state) => state.carritoById);
  const dispatch = useDispatch();
  const dataProfile = useSelector((state) => state.dataProfile);
  const [idVariable, setIdVariable] = useState(null);

  const total = carritoById.reduce((accumulator, item) => {
    return accumulator + item.precio * item.cantidad;
  }, 0);


  useEffect(() => {
    if (dataProfile) {
      if (dataProfile === null) {
        setIdVariable(null);
      } else {
        setIdVariable(dataProfile.userData.id);
      }
    } else {
      setIdVariable(null);
    }
  }, [dataProfile, carrito, carritoById]);

  const agregarCarrito = async () => {
    try {
      const response = await axios.post("http://localhost:3001/car-shop", {
        userId: idVariable,
        products: carritoById,
      });

      window.location.href = "/payment";
    } catch (error) {}
  };

  const removeLastItem = (id) => {
    const carritoEnLocalStorage =
      JSON.parse(localStorage.getItem("carrito")) || [];

    const productIdToDelete = id;

    const carritoSinElemento = carritoEnLocalStorage.filter(
      (producto) => producto.id !== productIdToDelete
    );

    localStorage.setItem("carrito", JSON.stringify(carritoSinElemento));
  };

  return (
    <>
      {console.log(dataProfile)}
      <div className={style.cartContainer}>
        <div className={style.cartCardDivContainer}>
          {carritoById.length > 0 ? (
            carritoById.map((item) => {
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
                        <button
                          onClick={() =>
                            dispatch(disminuirCtdad(idVariable, item.id))
                          }
                        >
                          <ion-icon name="remove-circle"></ion-icon>
                        </button>
                        <h2>{item.cantidad}</h2>
                        <button
                          onClick={() =>
                            dispatch(incrementarCtdad(idVariable, item.id))
                          }
                          disabled={item.cantidad >= item.stock}
                        >
                          <ion-icon name="add-circle"></ion-icon>
                        </button>
                      </div>
                    </div>
                    <div className={style.infoDetail}>
                      <h2>subTotal</h2>
                      <h2>$ {item.precio * item.cantidad}</h2>
                    </div>
                    <div
                      className={style.divDelete}
                      onClick={() => {
                        dispatch(removeProduct(idVariable, item.id));
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
                <br /> visita nuestro catalogo para agregar productos a tu
                carrito
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
            {carritoById.map((item) => {
              return (
                <h5>
                  {item.name} x {item.cantidad}
                </h5>
              );
            })}
            <h4>Total de compra: ${total}</h4>
          </div>
          <div className={style.divButton}>
            <button
              disabled={
                dataProfile === null ||
                carritoById.length < 1 ||
                dataProfile.success === null
              }
              onClick={agregarCarrito}
            >
              <ion-icon name="cart-outline"></ion-icon> Comprar
            </button>
            {dataProfile === null || dataProfile.success === null ? (
              <span><ion-icon name="alert-outline"></ion-icon>Debes Inciar sesion</span>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Carrito;