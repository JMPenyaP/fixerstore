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
  CLEAR_PRODUCT_NAME
} from "./actionTypes";

const initialState = {
  adminProfile: null,
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
        productosFiltrados: action.payload,
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

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
