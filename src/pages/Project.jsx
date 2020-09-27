import * as React from "react";

import { Redirect } from "react-router-dom";

import routes from "../routes";

import { projects } from "../store";

const Project = ({ match }) => {
  const project = projects[match.params.slug];

  if (!project) {
    return <Redirect to={routes.projects} />;
  } else {
    return <div>Page for the following project: {match.params.slug}</div>;
  }
};

export default Project;
