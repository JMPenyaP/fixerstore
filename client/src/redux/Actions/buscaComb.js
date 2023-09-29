import { BUSCA_COMB } from "../actionTypes";
import axios from "axios";

export const buscaComb = (name, categoryId, order, order2) => {
  
  try {
      return async (dispatch) => {
      const response = await axios.get(`http://localhost:3001/products/prueba?name=${name}&categoryId=${categoryId}&order=${order}&order2=${order2}`);
      dispatch({
        type: BUSCA_COMB,
        payload: response.data.data,
      });
    };
  } catch (error) {
    const errorResponse = {};
    errorResponse.error = error.message;
    return errorResponse;
  }
};
