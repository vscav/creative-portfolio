import * as React from "react";
import { Media } from "react-breakpoints";

import Gallery from "../components/App/Gallery";
import ProjectsList from "../components/App/ProjectsList";

const Projects = () => {
  return (
    <>
      <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] > breakpoints.mobileLandscape ? (
            <Gallery />
          ) : (
            <ProjectsList />
          )
        }
      </Media>
    </>
  );
};

export default Projects;
