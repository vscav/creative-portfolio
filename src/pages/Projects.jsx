import * as React from "react";

import { Media } from "../breakpoints";

import Arrival from "../components/App/Arrival";
import Gallery from "../components/App/Gallery";
import ProjectsList from "../components/App/ProjectsList";

const Home = () => {
  return (
    <>
      <Arrival />
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

export default Home;
