import {
  ADMIN_PROFILE,
  NEW_PRODUCT,
  ROLE,
  GET_NAME,
  SET_FILTER,
} from "./actionTypes";

const initialState = {
  adminProfile: null,
  nuevo_producto: null,
  role: null,
  productName: false,
  productByName: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_PROFILE: {
      return { ...state, adminProfile: action.payload };
    }
    case NEW_PRODUCT: {
      return { ...state, nuevo_producto: action.payload }; // Agregar al global de productos al principio
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
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
