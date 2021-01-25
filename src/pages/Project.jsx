import * as React from "react";
// import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import ProjectItem from "components/App/ProjectItem";

// import routes from "routes/routes";

const Project = ({ match }) => {
  const [currentProject, setCurrentProject] = React.useState(null);
  const projects = useSelector((state) => state.projects);

  React.useEffect(() => {
    Object.entries(projects).forEach((p) => {
      var title = [...p].shift();
      if (title == match.params.slug) setCurrentProject(p[p.length - 1]);
    });
  }, []);

  // if (!currentProject) {
  //   return <Redirect to={routes.projects} />;
  // } else {
  return <ProjectItem project={currentProject} />;
  // }
};

export default Project;
