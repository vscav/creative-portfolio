import * as React from "react";
import { useSpring } from "react-spring";
import * as easings from "d3-ease";

import { TransitionFrontOverlay, TransitionBackOverlay } from "./styles";

const config = {
  duration: 600,
  easing: easings.easeCubic,
};

const Transition = () => {
  const [on, set] = React.useState(true);

  const props = useSpring({
    config: config,
    delay: on ? 500 : 875,
    from: {
      height: on ? "100%" : "0%",
    },
    to: {
      height: on ? "0%" : "100%",
    },
  });
  const props2 = useSpring({
    config: config,
    delay: on ? 875 : 500,
    from: {
      height: on ? "100%" : "0%",
    },
    to: {
      height: on ? "0%" : "100%",
    },
  });
  return (
    <>
      <TransitionFrontOverlay style={props} />
      <TransitionBackOverlay style={props2} />
    </>
  );
};

export default Transition;
