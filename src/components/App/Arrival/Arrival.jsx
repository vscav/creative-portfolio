import * as React from "react";
import { useSpring } from "react-spring";
import * as easings from "d3-ease";

import { IntroductionFrontOverlay, IntroductionBackOverlay } from "./styles";

const config = {
  duration: 600,
  easing: easings.easeCubic,
};

const Introduction = () => {
  const props = useSpring({
    config: config,
    delay: 500,
    from: {
      height: "100%",
    },
    to: {
      height: "0%",
    },
  });
  const props2 = useSpring({
    config: config,
    delay: 875,
    from: {
      height: "100%",
    },
    to: {
      height: "0%",
    },
  });
  return (
    <>
      <IntroductionFrontOverlay style={props} />
      <IntroductionBackOverlay style={props2} />
    </>
  );
};

export default Introduction;
