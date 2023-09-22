import { FILTER_BACK } from "../actionTypes";
import axios from "axios";

export const filterBack = (category) => {
    
  return async function (dispatch) {
    try {
        if(category=== 'DEFAULT'){
        return dispatch({ type: FILTER_BACK, payload: [] });
        }
      const apiData = await axios.get(`http://localhost:3001/categories/catprod/?catName=${category}`);
      const categorias = apiData.data;
      dispatch({ type: FILTER_BACK, payload: categorias });
    } catch (error) {
      return error.message;
    }
  };
};
