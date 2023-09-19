import {   NEW_PRODUCT } from "../actionTypes"

const setProduct = () => {
    return (dispatch) => {
      const response = { producto: [{}, null]}
      dispatch({
        type: NEW_PRODUCT,
        payload: response
      });
    };
  };
  
export default setProduct;