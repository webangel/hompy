import { CHANGE_THEME } from "../constants/themeConstants";

export const changeThemeAction = (theme) => (dispatch) => {
  dispatch({ type: CHANGE_THEME, payload: theme });
};
