import { ADMIN_PROFILE, NEW_PRODUCT, ROLE} from "./actionTypes";

const initialState = {
  adminProfile: null,
  nuevo_producto: null,
  role: null,
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
      return {...state, role: action.payload} // Agregar al global de productos al principio
  }
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
