import {CREATED_PRODUCT, NEW_PRODUCT} from "../actionTypes"
import axios from "axios"


export const createProduct = (product) => {
    try {
        const endpoint = 'http://localhost:3001/products/'
        return async (dispatch)=> {
            const response = await axios.post(endpoint, product)
            const {producto, create} = response.data
            if (create === true) {
                const nuevo = producto[0]
                dispatch({type: NEW_PRODUCT,
                    payload: nuevo})
            }
            else if (create === false) {
                dispatch({
                    type: CREATED_PRODUCT,
                    payload: create
                })
            }       
        }
    } 
    catch (error) {
        const errorResponse = {}
        errorResponse.error = error.message
        return errorResponse
    }
}


