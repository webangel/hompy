import {
  GET_ALL_USERS_ERROR,
  GET_ALL_USERS_REQUEST,
  GET_ALL_USERS_SUCCESS,
} from "../constants/usersConstants";

export const getAllUsersReducer = (state = { loading: true }, action) => {
  switch (action.type) {
    case GET_ALL_USERS_REQUEST:
      return { loading: true };
    case GET_ALL_USERS_SUCCESS:
      return { loading: false, users: action.payload };
    case GET_ALL_USERS_ERROR:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
