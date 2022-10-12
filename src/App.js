import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import { changeThemeAction } from "./redux/actions/themeActions";
import { darkTheme, lightTheme } from "./theme";
import Login from "./pages/Login";
import Dashborad from "./pages/Dashborad";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  const changeTheme = () => {
    dispatch(
      changeThemeAction(theme.mode === "light" ? darkTheme : lightTheme)
    );
  };
  const showChangeTheme = false;

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Router>
          {showChangeTheme && (
            <>
              <button onClick={changeTheme}>Change Theme</button>
              <div>{theme.mode}</div>
            </>
          )}
          <Route exact path="/login" component={Login} />
          <Route exact path="/admin/:page" component={Dashborad} />
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: ${(props) => props.theme.PRIMARY_BACKGROUND_COLOR};
  height: 100%;
  color: ${(props) => props.theme.PRIMARY_TEXT_COLOR};
`;
