import { SECTION_ADMIN } from "../actionTypes"

const sectionAdmin = (section) => {
    return (dispatch) => {
      dispatch({
        type: SECTION_ADMIN,
        payload: section
      });
    };
  };
  
  export default sectionAdmin;