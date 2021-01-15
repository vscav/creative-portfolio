import * as React from "react";

import { Media } from "../breakpoints";

import Introduction from "../components/App/Introduction";
import Gallery from "../components/App/Gallery";
import ProjectsList from "../components/App/ProjectsList";

const Home = () => {
  return (
    <>
      <Introduction />
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
