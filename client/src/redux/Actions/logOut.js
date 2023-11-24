import { ADMIN_PROFILE } from "../actionTypes"

const logOut = () => {
    return (dispatch) => {
      const response = {
        success: null,
        userData: {}
      };
      dispatch({
        type: ADMIN_PROFILE,
        payload: response
      });
    };
  };
  
  export default logOut;