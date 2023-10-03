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
  GET_FAV,
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
  SET_NAME_SEARCH,
  SET_CAT,
  BUSCA_COMB,
  SHOW_FILTERS,
  SET_ORDER,
  SET_ORDER2,
  SECTION_ADMIN,
  GET_ALL_ORDERS,
  SET_USER_MENU,
  GET_ALL_USERS,
  SET_BUSCA_COMB,
  SEND_REVIEW,
  REVIEWS
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
  createdReview: null,
  allProducts: [],
  productosFiltrados: [],
  allCategories: [],
  carrito: [],
  registerConfirm: null,
  userChanges: null,
  historial: [],
  favoritos: [],
  fav:[],
  carritoById: [],
  search: "",
  categoryId: 0,
  order: "",
  order2: "",
  prodBuscaComb: [],
  showFilters: false,
  section_admin: "Est",
  allOrders: [],
  userMenu: false,
  allUsers: [],
  reviews:[]
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

    // case USER_CHANGE: {
    //   return {
    //     ...state,
    //     userChanges: action.payload.success,
    //     dataProfile: action.payload,
    //   };
    // }

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

    case GET_FAV:{

      return {
          ...state,
          fav: action.payload,
      }

    }


    case DELETE_FAV: {
      const productIdRemove = action.payload.favId;
      const favActualizado = Array.isArray(state.fav)
        ? [...state.fav].filter((producto) => producto.id !== productIdRemove)
        : [];
      
      return {
        ...state,
        fav: favActualizado,
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

    case CLEAR_PRODUCT_NAME: {
      return {
        ...state,
        productName: false,
        productByName: [],
      };
      }

      case SEND_REVIEW: {
        return {
          ...state,
          createdReview: action.payload,
        }
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
      const updatedCarritoById = state.carritoById.map((item) => {
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
      });

      const updatedCarrito = state.carrito.map((item) => {
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
      });

      return {
        ...state,
        carritoById: updatedCarritoById,
        carrito: updatedCarrito,
      };
    }

    case DECREMENT_QTY: {
      const updatedCarritoById = state.carritoById.map((producto) => {
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
      });

      const updatedCarrito = state.carrito.map((producto) => {
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
      });

      return {
        ...state,
        carritoById: updatedCarritoById,
        carrito: updatedCarrito,
      };
    }

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
      const carritoById = {};

      state.carrito.forEach((prod) => {
        if (prod.idUser === action.payload) {
          const existingProduct = carritoById[prod.id];
          if (existingProduct) {
            existingProduct.cantidad += prod.cantidad;
            existingProduct.cantidad = Math.min(
              existingProduct.cantidad,
              existingProduct.stock
            );
          } else {
            carritoById[prod.id] = { ...prod };
          }
        }
      });

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

    case SET_NAME_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }

    case SET_CAT: {
      return {
        ...state,
        categoryId: action.payload,
      };
    }

    case BUSCA_COMB: {
      return {
        ...state,
        prodBuscaComb: action.payload,
        showFilters: true,
      }
    }

    case SET_BUSCA_COMB: {
      return {
        ...state,
        prodBuscaComb: [],
      }
    }

    case SHOW_FILTERS: {
      return {
        ...state,
        showFilters: action.payload,
      };
    }

    case SET_ORDER: {
      return {
        ...state,
        order: action.payload,
      };
    }

    case SET_ORDER2: {
      return {
        ...state,
        order2: action.payload,
      };
    }

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
          adminProfile: false,
        };
      }
    }
    case SECTION_ADMIN: {
      return {
        ...state,
        section_admin: action.payload
      }
    }
    case GET_ALL_ORDERS: {
      return {
        ...state, 
        allOrders: action.payload
      }
    }

    case SET_USER_MENU: {
      return {
        ...state,
        userMenu: action.payload,
      };
    }
    case GET_ALL_USERS: {
      return {
        ...state,
        allUsers: action.payload
      }
    }

    case REVIEWS:{
      return {
        ...state,
        reviews:action.payload
      }
    }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;

// case ORDER_LETTER: {
//   const order = action.payload;
//   if (order === "Ascendente") {
//     const filtroAsc = [...state.productosFiltrados];
//     filtroAsc.sort((a, b) => a.name.localeCompare(b.name));
//     console.log(filtroAsc);
//     return {
//       ...state,
//       productosFiltrados: filtroAsc,
//     };
//   } else if (order === "Descendente") {
//     const filtroDesc = [...state.productosFiltrados];
//     filtroDesc.sort((a, b) => a.name.localeCompare(b.name));
//     filtroDesc.reverse();
//     console.log(filtroDesc);
//     return {
//       ...state,
//       productosFiltrados: filtroDesc,
//     };
//   } else {
//     console.log(state.allProducts);
//     return {
//       ...state,
//       productosFiltrados: state.productosFiltrados,
//     };
//   }
// }

// case ORDER_PRICE: {
//   const precio = action.payload;
//   if (precio === "Ascendente") {
//     const precioAsc = [...state.productosFiltrados];
//     precioAsc.sort((a, b) => a.priceOfList - b.priceOfList);
//     console.log(precioAsc);
//     return {
//       ...state,
//       productosFiltrados: precioAsc,
//     };
//   } else if (precio === "Descendente") {
//     const precioDesc = [...state.productosFiltrados];
//     precioDesc.sort((a, b) => b.priceOfList - a.priceOfList);
//     console.log(precioDesc);
//     return {
//       ...state,
//       productosFiltrados: precioDesc,
//     };
//   } else {
//     console.log(state.allProducts);
//     return {
//       ...state,
//       productosFiltrados: state.productosFiltrados,
//     };
//   }
// }
