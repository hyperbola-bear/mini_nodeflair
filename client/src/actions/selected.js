import { GET_SELECTED } from "./types";

export const getSelected = (selected) => (dispatch) => {
  dispatch({
    type: GET_SELECTED,
    payload: selected,
  });
};
