import {ADMIN_PASS} from "../actionTypes"
import axios from "axios"
// Mejor en estado local

export const adminPass = (userData) => {
    try {
        const {email, password} = userData;
        const URL = "";
        const query =  `?email=${email}&password=${password}`;
        const endpoint = URL + query;
        return async (dispatch) => {
            const {data} = await axios.get(endpoint);
            const {creado} = data;
            dispatch({
                type: ADMIN_PASS,
                payload: creado
            })
        }
    } 
    catch (error) {
        const errorResponse = {}
        errorResponse.error = error.message
        return errorResponse
    }
}


