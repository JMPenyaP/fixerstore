import { GET_ALL } from "../actionTypes";
import axios from "axios";

export const getAllProducts = () => {
  return async function (dispatch) {
    try {
      const apiData = await axios.get(`http://localhost:3001/products`);
      const productos = apiData.data;

      dispatch({ type: GET_ALL, payload: productos.data });
    } catch (error) {
      return error.message;
    }
  };
};
