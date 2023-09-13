import {ADMIN_PROFILE} from "./"
import axios from "axios"

export const loginAdmin = (userData) => {
    try {
        const endpoint = ""
        return async (dispatch) => {
            const {data} = await axios.get(endpoint, userData);
            const {access} = data;
            dispatch({
                type: ADMIN_PROFILE,
                payload: access
            })
        }
    } 
    catch (error) {
        const errorResponse = {}
        errorResponse.error = error.message
        return errorResponse
    }
}

//User data es un objeto con las propiedades email y password