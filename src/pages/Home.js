import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { changeThemeAction } from "../redux/actions/themeActions";
import { darkTheme, lightTheme } from "../theme";

export default function Home() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);
  const handleThemeChange = () => {
    dispatch(
      changeThemeAction(theme.mode === "light" ? darkTheme : lightTheme)
    );
  };

  return (
    <div>
      Home
      <button onClick={handleThemeChange}>Change theme</button>
    </div>
  );
}
