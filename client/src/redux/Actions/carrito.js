import { ACTUALIZAR_CANTIDAD_EN_CARRITO, AGREGAR_AL_CARRITO, INCREMENT_QTY, DECREMENT_QTY, REMOVE_PRODUCT } from "../actionTypes";


export const agregarAlCarrito = (producto, cantidad) => ({
  type: AGREGAR_AL_CARRITO,
  payload: { producto, cantidad },
});

export const actualizarCantidadEnCarrito = (productoId, nuevaCantidad) => ({
  type: ACTUALIZAR_CANTIDAD_EN_CARRITO,
  payload: { productoId, nuevaCantidad },
});

export const incrementarCtdad = (productId) => ({
  type: INCREMENT_QTY,
  payload: {productId},
})

export const disminuirCtdad = (productId) => ({
  type: DECREMENT_QTY,
  payload: {productId},
})

export const removeProduct = (productId) => {
  return {
    type: REMOVE_PRODUCT,
    payload: { productId },
  };
};