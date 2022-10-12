import { lightTheme } from "../../theme";
import { CHANGE_THEME } from "../constants/themeConstants";

export const changeThemeReducer = (state = lightTheme, action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
};
