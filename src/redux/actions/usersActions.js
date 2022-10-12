import axios from "axios";
import {
  GET_ALL_USERS_ERROR,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
} from "../constants/usersConstants";

import { BACKEND_URL } from "../utils";

export const getAllUsersAction = () => async (dispatch) => {
  dispatch({ type: GET_ALL_USERS_REQUEST });
  try {
    const { data } = await axios.get(`${BACKEND_URL}/users`);
    console.log(data);
    dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: GET_ALL_USERS_ERROR, payload: error });
  }
};
