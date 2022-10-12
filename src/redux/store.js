import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loadingReducer } from "./reducers/loadingReducer";
import { getAllStoresReducer } from "./reducers/storesReducers";
import { changeThemeReducer } from "./reducers/themeReducer";
import { getAllUsersReducer } from "./reducers/usersReducers";

const initialState = {};

const reducer = combineReducers({
  loading: loadingReducer,
  theme: changeThemeReducer,
  users: getAllUsersReducer,
  stores: getAllStoresReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
