import { REGISTER } from "../actionTypes"
import axios from "axios"


export const createUser = (user) => {
    try {
        const endpoint = 'http://localhost:3001/products/'
        return async (dispatch)=> {
            const response = await axios.post(endpoint, user)
            const {data}= response
            const {success} = data
            dispatch({
                type: REGISTER,
                payload: success})   
        }
    } 
    catch (error) {
        const errorResponse = {}
        errorResponse.error = error.message
        return errorResponse
    }
}
