import {
  ACTUALIZAR_CANTIDAD_EN_CARRITO,
  AGREGAR_AL_CARRITO,
  INCREMENT_QTY,
  DECREMENT_QTY,
  REMOVE_PRODUCT,
  ACTUALIZAR_USER_ID_EN_CARRITO,
  GET_CARRITO_BY_ID,
  VACIAR_CARRITO,
} from "../actionTypes";

export const agregarAlCarrito = (idUser, producto, cantidad) => ({
  type: AGREGAR_AL_CARRITO,
  payload: { idUser, producto, cantidad },
});

export const actualizarCantidadEnCarrito = (
  idUser,
  productoId,
  nuevaCantidad
) => ({
  type: ACTUALIZAR_CANTIDAD_EN_CARRITO,
  payload: { idUser, productoId, nuevaCantidad },
});

export const incrementarCtdad = (idUser, productId) => ({
  type: INCREMENT_QTY,
  payload: { idUser, productId },
});

export const disminuirCtdad = (idUser, productId) => ({
  type: DECREMENT_QTY,
  payload: { idUser, productId },
});

export const removeProduct = (idUser, productId) => ({
  type: REMOVE_PRODUCT,
  payload: { idUser, productId },
});

export const actualizarUserIdEnCarrito = (productId, newUserId) => {
  return {
    type: ACTUALIZAR_USER_ID_EN_CARRITO,
    payload: { productId, newUserId },
  };
};

export const getCarritoById = (userId) => {
  return {
    type: GET_CARRITO_BY_ID,
    payload: userId,
  };
};

export const vaciarCarrito = () => ({
  type: VACIAR_CARRITO,
});
