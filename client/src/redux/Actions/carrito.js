import { ACTUALIZAR_CANTIDAD_EN_CARRITO, AGREGAR_AL_CARRITO } from "../actionTypes";


export const agregarAlCarrito = (producto, cantidad) => ({
  type: AGREGAR_AL_CARRITO,
  payload: { producto, cantidad },
});

export const actualizarCantidadEnCarrito = (productoId, nuevaCantidad) => ({
  type: ACTUALIZAR_CANTIDAD_EN_CARRITO,
  payload: { productoId, nuevaCantidad },
});
