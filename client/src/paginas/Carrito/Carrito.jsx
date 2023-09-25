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
  const dispatch = useDispatch();
  const dataProfile = useSelector((state) => state.dataProfile);

  const total = carrito.reduce((accumulator, item) => {
    return accumulator + item.precio * item.cantidad;
  }, 0);

  let idDelUser;

  useEffect(() => {
    if (dataProfile) {
      if (dataProfile.success === null) {
        idDelUser = null;
      } else {
        idDelUser = dataProfile.userData.id;
      }
    } else {
      idDelUser = null;
    }
  }, [dataProfile, carrito]);

  const agregarCarrito = async () => {
    const response = await axios.post("http://localhost:3001/car-shop", {
      userId: idDelUser,
      products: carrito,
    });

    return response;
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
      <div className={style.cartContainer}>
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
                        <button
                          onClick={() => dispatch(disminuirCtdad(item.id))}
                        >
                          <ion-icon name="remove-circle"></ion-icon>
                        </button>
                        <h2>{item.cantidad}</h2>
                        <button
                          onClick={() => dispatch(incrementarCtdad(item.id))}
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
            <Link to={'/payment'}>
            <button
              disabled={
                dataProfile === null ||
                carrito.length < 1 ||
                dataProfile.success === null
              }
              onClick={agregarCarrito}
            >
              <ion-icon name="cart-outline"></ion-icon> Comprar
            </button></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Carrito;
