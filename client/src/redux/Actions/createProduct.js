import {CREATED_PRODUCT, NEW_PRODUCT} from "../actionTypes"
import axios from "axios"
// Mejor created en el local
export const createProduct = (product) => {
    try {
        const endpoint = ''
        return async (dispatch)=> {
            const {data} = await axios.post(endpoint, product)
            const {creado} = data
            if (creado === true) {
                const {producto} = data
                const nuevo = producto[0]
                dispatch({type: NEW_PRODUCT,
                    payload: nuevo},
                    {type: CREATED_PRODUCT,
                    payload: creado    
                    })
            }
            else if (creado === false) {
                dispatch({
                    type: CREATED_PRODUCT,
                    payload: creado
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


