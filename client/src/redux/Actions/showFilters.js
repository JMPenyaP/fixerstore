import { SHOW_FILTERS } from "../actionTypes";

export const showFilters = (boolean) => {
    console.log(boolean);
  return {
    type: SHOW_FILTERS,
    payload: boolean,
  };
};
