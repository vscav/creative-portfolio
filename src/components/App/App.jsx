import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";

import usePersistedState from "../../hooks/usePersistedState";

import { GlobalStyle } from "../../styles/global";

import { GlobalFonts } from "../../assets/fonts";

import { DefaultLayout } from "../../layouts";

import { lightTheme, darkTheme } from "../../styles/theme/theme";

import ReactBreakpoints from "../../breakpoints";

import Routes from "./Routes";

import store from "../../store";

// import allReducer from "../../reducers";

// const store = createStore(
//   allReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopWide: 1500,
  desktopHuge: 1920,
};

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", darkTheme);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? darkTheme : lightTheme);
  };

  return (
    <Provider store={store}>
      <ReactBreakpoints breakpoints={breakpoints}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <GlobalFonts />
          <Router>
            <DefaultLayout toggleTheme={toggleTheme}>
              <Routes />
            </DefaultLayout>
          </Router>
        </ThemeProvider>
      </ReactBreakpoints>
    </Provider>
  );
};

export default App;
