import * as React from "react";

import { Media } from "../breakpoints";

import Transition from "../components/App/Transition";
import Gallery from "../components/App/Gallery";
import ProjectsList from "../components/App/ProjectsList";

const Home = () => {
  return (
    <>
      <Transition />
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
