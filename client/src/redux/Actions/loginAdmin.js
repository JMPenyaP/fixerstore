import {ADMIN_PROFILE, ROLE} from "../actionTypes"
import axios from "axios"

export const loginAdmin = (userData) => {
    try {
        const endpoint = "/auth/login"
        return async (dispatch) => {
            const {data} = await axios.get(endpoint, userData);
            const {success, token} = data;
            const role = token.role
            dispatch({
                type: ADMIN_PROFILE,
                payload: success
            },
            {
                type: ROLE,
                payload: role
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