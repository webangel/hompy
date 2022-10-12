import {
  GET_ALL_STORES_ERROR,
  GET_ALL_STORES_REQUEST,
  GET_ALL_STORES_SUCCESS,
} from "../constants/storesConstants";

export const getAllStoresReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case GET_ALL_STORES_REQUEST:
      return { loading: true };
    case GET_ALL_STORES_SUCCESS:
      return { loading: false, stores: action.payload };
    case GET_ALL_STORES_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
