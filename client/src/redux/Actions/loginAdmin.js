import {ADMIN_PROFILE} from "../actionTypes"
import axios from "axios"

export const loginAdmin = (userData) => {
    try {
        const endpoint = "http://localhost:3001/auth/login"
        return async (dispatch) => {
            const response= await axios.post(endpoint, userData);
            console.log(response);
            dispatch({
                type: ADMIN_PROFILE,
                payload: response.data})
        }
    } 
    catch (error) {
        const errorResponse = {}
        errorResponse.error = error.message
        return errorResponse
    }
}

//User data es un objeto con las propiedades email y password