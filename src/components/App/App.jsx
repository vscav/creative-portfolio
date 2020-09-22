import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";

import usePersistedState from "../../hooks/usePersistedState";

import { GlobalStyle } from "../../styles/global";

import { GlobalFonts } from "../../assets/fonts";

import { Home, Projects, Profile, Project } from "../../pages";

import { DefaultLayout } from "../../layouts";

import routes from "../../routes";

import { lightTheme, darkTheme } from "../../styles/theme/theme";

const pages = [
  {
    exact: true,
    path: routes.home,
    component: Home,
  },
  {
    exact: true,
    path: routes.projects,
    component: Projects,
  },
  {
    exact: true,
    path: routes.profile,
    component: Profile,
  },
  {
    exact: true,
    path: routes.project,
    component: Project,
  },
];

const App = () => {
  const [theme, setTheme] = usePersistedState("theme", darkTheme);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? darkTheme : lightTheme);
  };

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalFonts />
        <Router>
          <DefaultLayout toggleTheme={toggleTheme}>
            <Switch>
              {pages.map(({ exact, path, component: Component }, index) => (
                <Route
                  key={index}
                  exact={exact}
                  path={path}
                  render={(props) => <Component {...props} />}
                />
              ))}
              <Redirect to={routes.home} />
            </Switch>
          </DefaultLayout>
        </Router>
      </ThemeProvider>
  );
};

export default App;
