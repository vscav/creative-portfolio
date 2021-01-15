import * as React from "react";

import { Media } from "../breakpoints";

import Introduction from "../components/App/Introduction";
import Gallery from "../components/App/Gallery";

const Home = () => {
  return (
    <>
      <Introduction />
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
