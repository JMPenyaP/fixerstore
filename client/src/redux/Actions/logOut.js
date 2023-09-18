import { ADMIN_PROFILE } from "../actionTypes"

const logOut = () => {
    return (dispatch) => {
      const response = {
        success: null,
        email: "",
        name: ""
      };
      dispatch({
        type: ADMIN_PROFILE,
        payload: response
      });
    };
  };
  
  export default logOut;