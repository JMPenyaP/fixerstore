import {
  ADMIN_PROFILE,
  NEW_PRODUCT,
  ROLE,
  GET_NAME,
  SET_FILTER,
  CREATED_PRODUCT,
  GET_ALL,
  GET_CATEGORIES,
  FILTER_CATEGORIES,
  ORDER_LETTER,
  ORDER_PRICE,
  CLEAR_PRODUCT_NAME,
  AGREGAR_AL_CARRITO,
  ACTUALIZAR_CANTIDAD_EN_CARRITO,
  REGISTER,
  FILTER_BACK,
  INCREMENT_QTY,
  DECREMENT_QTY,
  REMOVE_PRODUCT,
  USER_PROFILE,
  USER_CHANGE,
  SET_CHANGE,
  HISTORIAL,
  FAVORITOS,
  SET_DATA_PROFILE,
  SAVE_FAV,
  DELETE_FAV,
  ACTUALIZAR_USER_ID_EN_CARRITO,
  GET_CARRITO_BY_ID,
  VACIAR_CARRITO,
} from "./actionTypes";

const initialState = {
  adminProfile: null,
  clientProfile: null,
  nuevo_producto: null,
  role: null,
  productName: false,
  productByName: [],
  product_creado: null,
  dataProfile: null,
  createdProfile: null,
  allProducts: [],
  productosFiltrados: [],
  allCategories: [],
  carrito: [],
  registerConfirm: null,
  userChanges: null,
  historial: [],
  favoritos: [],
  carritoById: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_PROFILE: {
      return {
        ...state,
        adminProfile: action.payload.success,
        dataProfile: action.payload,
      };
    }

    case USER_PROFILE: {
      return {
        ...state,
        clientProfile: action.payload.success,
        dataProfile: action.payload,
      };
    }

    case USER_CHANGE: {
      return {
        ...state,
        userChanges: action.payload.success,
        dataProfile: action.payload,
      };
    }
    case SET_CHANGE: {
      return {
        ...state,
        userChanges: action.payload,
      };
    }

    //Marcos

    case USER_CHANGE: {
      return {
        ...state,
        userChanges: action.payload.success,
        dataProfile: action.payload,
      };
    }

    case HISTORIAL: {
      return {
        ...state,
        historial: action.payload,
      };
    }

    case SAVE_FAV: {
      return {
        ...state,
        favoritos: action.payload,
      };
    }

    case DELETE_FAV: {
      const productIdRemove = action.payload.favId;
      const favActualizado = state.favoritos.filter(
        (producto) => producto.id !== productIdRemove
      );

      return {
        ...state,
        favoritos: favActualizado,
      };
    }

    case FAVORITOS: {
      return {
        ...state,
        favoritos: action.payload,
      };
    }

    case NEW_PRODUCT: {
      return { ...state, createdProduct: action.payload.producto[1] }; // Agregar al global de productos al principio
    }

    case ROLE: {
      return { ...state, role: action.payload }; // Agregar al global de productos al principio
    }

    case GET_NAME: {
      return { ...state, productName: true, productByName: action.payload };
    }

    case SET_FILTER: {
      return { ...state, productName: action.payload };
    }

    case CREATED_PRODUCT: {
      return { ...state, product_creado: action.payload };
    }

    case GET_ALL: {
      return {
        ...state,
        allProducts: action.payload,
      };
    }

    case GET_CATEGORIES: {
      return { ...state, allCategories: action.payload };
    }

    case FILTER_CATEGORIES:
      const selectedCategory = action.payload;

      if (selectedCategory === "all") {
        return {
          ...state,
          productosFiltrados: state.allProducts,
        };
      }

      const filteredProductsByCategory = state.allProducts.filter(
        (producto) => producto.categoryId === parseInt(selectedCategory)
      );
      console.log(filteredProductsByCategory);

      return {
        ...state,
        productosFiltrados: filteredProductsByCategory,
      };

    case ORDER_LETTER: {
      const order = action.payload;
      if (order === "Ascendente") {
        const filtroAsc = [...state.productosFiltrados];
        filtroAsc.sort((a, b) => a.name.localeCompare(b.name));
        console.log(filtroAsc);
        return {
          ...state,
          productosFiltrados: filtroAsc,
        };
      } else if (order === "Descendente") {
        const filtroDesc = [...state.productosFiltrados];
        filtroDesc.sort((a, b) => a.name.localeCompare(b.name));
        filtroDesc.reverse();
        console.log(filtroDesc);
        return {
          ...state,
          productosFiltrados: filtroDesc,
        };
      } else {
        console.log(state.allProducts);
        return {
          ...state,
          productosFiltrados: state.productosFiltrados,
        };
      }
    }

    case ORDER_PRICE: {
      const precio = action.payload;
      if (precio === "Ascendente") {
        const precioAsc = [...state.productosFiltrados];
        precioAsc.sort((a, b) => a.priceOfList - b.priceOfList);
        console.log(precioAsc);
        return {
          ...state,
          productosFiltrados: precioAsc,
        };
      } else if (precio === "Descendente") {
        const precioDesc = [...state.productosFiltrados];
        precioDesc.sort((a, b) => b.priceOfList - a.priceOfList);
        console.log(precioDesc);
        return {
          ...state,
          productosFiltrados: precioDesc,
        };
      } else {
        console.log(state.allProducts);
        return {
          ...state,
          productosFiltrados: state.productosFiltrados,
        };
      }
    }

    case CLEAR_PRODUCT_NAME: {
      return {
        ...state,
        productName: false,
        productByName: [],
      };
    }

    // CARRITO

    case AGREGAR_AL_CARRITO:
      const productoExistenteAgregar = state.carrito.find(
        (item) =>
          item.id === action.payload.producto.id &&
          item.idUser === action.payload.idUser
      );

      const cantidadNueva =
        (productoExistenteAgregar ? productoExistenteAgregar.cantidad : 0) +
        action.payload.cantidad;

      const cantidadMaxima = Math.min(
        cantidadNueva,
        action.payload.producto.stock
      );

      if (productoExistenteAgregar) {
        return {
          ...state,
          carrito: state.carrito.map((item) => {
            if (
              item.id === action.payload.producto.id &&
              item.idUser === action.payload.idUser
            ) {
              return {
                ...item,
                cantidad: cantidadMaxima,
              };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          carrito: [
            ...state.carrito,
            {
              ...action.payload.producto,
              cantidad: cantidadMaxima,
              idUser: action.payload.idUser,
            },
          ],
        };
      }

    case ACTUALIZAR_CANTIDAD_EN_CARRITO:
      return {
        ...state,
        carrito: state.carrito.map((item) => {
          if (
            item.id === action.payload.productoId &&
            item.idUser === action.payload.idUser
          ) {
            return { ...item, cantidad: action.payload.nuevaCantidad };
          }
          return item;
        }),
      };

    case INCREMENT_QTY: {
      return {
        ...state,
        carritoById: state.carritoById.map((item) => {
          if (
            item.id === action.payload.productId &&
            item.idUser === action.payload.idUser
          ) {
            return {
              ...item,
              cantidad: item.cantidad + 1,
            };
          } else {
            return item;
          }
        }),
      };
    }

    case DECREMENT_QTY:
      return {
        ...state,
        carritoById: state.carritoById.map((producto) => {
          if (
            producto.id === action.payload.productId &&
            producto.idUser === action.payload.idUser
          ) {
            const nuevaCantidad = Math.max(1, producto.cantidad - 1);

            return {
              ...producto,
              cantidad: nuevaCantidad,
            };
          }
          return producto;
        }),
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        carrito: state.carrito.filter(
          (producto) =>
            producto.id !== action.payload.productId ||
            producto.idUser !== action.payload.idUser
        ),
      };

    case ACTUALIZAR_USER_ID_EN_CARRITO:
      return {
        ...state,
        carrito: state.carrito.map((producto) => {
          if (
            producto.id === action.payload.productId &&
            producto.idUser === null
          ) {
            return {
              ...producto,
              idUser: action.payload.newUserId,
            };
          }
          return producto;
        }),
      };

    case GET_CARRITO_BY_ID:
      // Inicializar un objeto para almacenar productos únicos por id y sumar las cantidades
      const carritoById = {};

      // Iterar sobre los productos y acumular las cantidades
      state.carrito.forEach((prod) => {
        if (prod.idUser === action.payload) {
          const existingProduct = carritoById[prod.id];
          if (existingProduct) {
            // Si ya existe un producto con este id, sumar la cantidad
            existingProduct.cantidad += prod.cantidad;
            // Asegurarse de que la cantidad no supere el stock
            existingProduct.cantidad = Math.min(
              existingProduct.cantidad,
              existingProduct.stock
            );
          } else {
            // Si es un nuevo producto, agregarlo al objeto
            carritoById[prod.id] = { ...prod };
          }
        }
      });

      // Convertir el objeto de productos únicos de vuelta a un array
      const carritoByIdArray = Object.values(carritoById);

      return {
        ...state,
        carritoById: carritoByIdArray,
      };

    case VACIAR_CARRITO:
      return {
        ...state,
        carrito: [],
      };

    ////////////

    case REGISTER: {
      return {
        ...state,
        registerConfirm: action.payload,
      };
    }

    case FILTER_BACK:
      return {
        ...state,
        productosFiltrados: action.payload,
      };

    case USER_PROFILE: {
      return {
        ...state,
        clientProfile: action.payload.success,
        dataProfile: action.payload,
      };
    }

    case SET_DATA_PROFILE: {
      if (action.payload.userData.role === "admin") {
        return {
          ...state,
          dataProfile: action.payload,
          adminProfile: true,
        };
      } else {
        return {
          ...state,
          dataProfile: action.payload,
          clientProfile: action.payload.success,
        };
      }
    }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
