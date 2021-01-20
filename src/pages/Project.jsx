import * as React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import ProjectItem from "../components/App/ProjectItem";

import routes from "../routes/routes";

const Project = ({ match }) => {
  const projects = useSelector((state) => state.projects);
  // console.log(projects);
  const project = projects[match.params.slug];

  if (!project) {
    return <Redirect to={routes.projects} />;
  } else {
    //return <div>Page for the following project: {match.params.slug}</div>;
    return (
      <>
        <ProjectItem />
      </>
    );
  }
};

export default Project;
