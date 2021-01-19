import React from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Home, Projects, Showreel, Profile, Project } from "../../../pages";
import routes from "../../../routes/routes";
import { arriveOnPage } from "../../../store/actions";

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
    path: routes.showreel,
    component: Showreel,
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

const Routes = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  React.useEffect(() => {
    // console.log("Land on: " + location.pathname);
    dispatch(arriveOnPage());
  }, [location, dispatch]);

  return (
    <>
      <Switch>
        {pages.map(({ exact, path, component: Component }, index) => (
          <Route
            key={index}
            exact={exact}
            path={path}
            render={(props) => <Component {...props} />}
          />
        ))}
        <Redirect to={routes.projects} />
      </Switch>
    </>
  );
};

export default Routes;
