import {ADMIN_PROFILE, ROLE} from "../actionTypes"
import axios from "axios"

export const loginAdmin = (userData) => {
    try {
        const endpoint = "http://localhost:3001/auth/login"
        return async (dispatch) => {
            const {data} = await axios.post(endpoint, userData);
            const {success} = data;
            dispatch({
                type: ADMIN_PROFILE,
                payload: success})
        }
    } 
    catch (error) {
        const errorResponse = {}
        errorResponse.error = error.message
        return errorResponse
    }
}

//User data es un objeto con las propiedades email y password