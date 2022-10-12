import { LOADING_START, LOADING_STOP } from "../constants/loadingConstants";

export const LoadingAction = (loading) => (dispatch) => {
  if (loading) {
    dispatch({ type: LOADING_START, payload: loading });
  } else {
    dispatch({ type: LOADING_STOP, payload: loading });
  }
};
