import {ADMIN_PROFILE, NEW_PRODUCT} from "./"


const initialState = {
    adminProfile: null,
    nuevo_producto: null
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ADMIN_PROFILE: {
            return {...state, adminProfile: action.payload}
        }
        case NEW_PRODUCT: {
            return {...state, nuevo_producto: action.payload} // Agregar al global de productos al principio
        }
        default:
            return {
                ...state
            }
    }
}