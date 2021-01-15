import * as React from "react";

import { Media } from "../breakpoints";

import Arrival from "../components/App/Arrival";
import Gallery from "../components/App/Gallery";

const Home = () => {
  return (
    <>
      <Arrival />
      <Media>
        {({ breakpoints, currentBreakpoint }) =>
          breakpoints[currentBreakpoint] > breakpoints.mobileLandscape ? (
            <Gallery />
          ) : (
            <div>Mobile version</div>
          )
        }
      </Media>
    </>
  );
};

export default Home;
