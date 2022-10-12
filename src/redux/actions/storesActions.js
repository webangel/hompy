import axios from "axios";
import {
  GET_ALL_STORES_ERROR,
  GET_ALL_STORES_REQUEST,
  GET_ALL_STORES_SUCCESS,
} from "../constants/storesConstants";
import { BACKEND_URL } from "../utils";

export const getAllStoresAction = () => async (dispatch) => {
  dispatch({ type: GET_ALL_STORES_REQUEST });
  try {
    const { data } = await axios.get(`${BACKEND_URL}/photos`);
    dispatch({ type: GET_ALL_STORES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_STORES_ERROR, payload: error });
  }
};
