import * as React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Hero from "../components/App/Hero";
import Description from "../components/App/Description";
import Information from "../components/App/Information";

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
        <Hero />
        <Description />
        <Information />
      </>
    );
  }
};

export default Project;
