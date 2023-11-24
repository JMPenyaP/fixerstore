import { GET_ALL_ORDERS } from "../actionTypes";
import axios from "axios";

export const getAllOrders = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/order/`);
      const ordenes = response.data;

      dispatch({ 
        type: GET_ALL_ORDERS, 
        payload: ordenes 
    });
    } catch (error) {
      return "Hubo un error al traer las ordenes: " + error.message;
    }
  };
};
