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
  SET_NAME_SEARCH,
  SET_CAT,
  BUSCA_COMB,
  SHOW_FILTERS,
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
  search: '',
  categoryId: 0,
  order: '',
  prodBuscaComb: [],
  showFilters: false,
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
        historial: action.payload.orders,
      }
    }

    case SAVE_FAV: {
      return {
        ...state,
        favoritos: action.payload,
      }
    }

    case DELETE_FAV: {
      const productIdRemove = action.payload.favId
      const favActualizado = state.favoritos.filter(producto => producto.id !== productIdRemove)

      return {
        ...state,
        favoritos: favActualizado,
      }
    }

    case FAVORITOS: {
      return {
        ...state,
        favoritos: action.payload
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

    // CARRITO

    case AGREGAR_AL_CARRITO:
      const { producto, cantidad } = action.payload;
      const productoExistente = state.carrito.find(
        (item) => item.id === producto.id
      );

      if (productoExistente) {
        return {
          ...state,
          carrito: state.carrito.map((item) => {
            if (item.id === producto.id) {
              return { ...item, cantidad: item.cantidad + cantidad };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          carrito: [...state.carrito, { ...producto, cantidad }],
        };
      }

    case ACTUALIZAR_CANTIDAD_EN_CARRITO:
      const { productoId, nuevaCantidad } = action.payload;
      return {
        ...state,
        carrito: state.carrito.map((item) => {
          if (item.id === productoId) {
            return { ...item, cantidad: nuevaCantidad };
          }
          return item;
        }),
      };

    case INCREMENT_QTY: {
      return {
        ...state,
        carrito: state.carrito.map((item) => {
          if (item.id === action.payload.productId) {
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
        carrito: state.carrito.map((producto) => {
          if (producto.id === action.payload.productId) {
            return {
              ...producto,
              cantidad: Math.max(1, producto.cantidad - 1),
            };
          }
          return producto;
        }),
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        carrito: state.carrito.filter(
          (producto) => producto.id !== action.payload.productId
        ),
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
        search: action.payload
      }
    }

    case SET_CAT: {
      return {
        ...state,
        categoryId: action.payload,
      }
    }

    case BUSCA_COMB: {
      return {
        ...state,
        prodBuscaComb:action.payload,
        showFilters: true,
      }
    }

    case SHOW_FILTERS: {
      return {
        ...state,
        showFilters: action.payload,
      }
    }

    case USER_PROFILE: {
      return {
        ...state,
        clientProfile: action.payload.success,
        dataProfile: action.payload,
      };
    }

    case SET_DATA_PROFILE: {
      return {
        ...state,
        clientProfile: action.payload.success,
        dataProfile: action.payload,
      };
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