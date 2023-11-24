import { GET_NAME } from "../actionTypes";
import axios from "axios"

export const getProductByName = (name) => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/products/?name=${name}`);

      const product = apiData.data;
      dispatch({ type: GET_NAME, payload: product });
    } catch (error) {
      // Manejamos el error de la llamada a la API
      return error.message;
    }
  };
};
