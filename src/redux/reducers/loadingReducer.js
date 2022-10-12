import { LOADING_START, LOADING_STOP } from "../constants/loadingConstants";

export const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING_START:
      return action.payload;
    case LOADING_STOP:
      return action.payload;
    default:
      return state;
  }
};
