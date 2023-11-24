import {USER_ADMIN} from "./"
import axios from "axios"
// Mejor en estaod local

export const userAdmin = (userData) => {
    try {
        const {email} = userData;
        const URL = "";
        const query =  `?email=${email}`;
        const endpoint = URL + query;
        return async (dispatch) => {
            const {data} = await axios.get(endpoint);
            const {existe} = data;
            dispatch({
                type: USER_ADMIN,
                payload: existe
            })
        }
    }
    catch (error) {
        const errorResponse = {}
        errorResponse.error = error.message
        return errorResponse
    }
}

