import * as React from "react";
import { useSpring } from "react-spring";
import * as easings from "d3-ease";
import { useSelector } from "react-redux";

import { TransitionFrontOverlay, TransitionBackOverlay } from "./styles";

const config = {
  duration: 600,
  easing: easings.easeCubic,
};

const Transition = () => {
  const leavePage = useSelector((state) => state.pageChanged);

  const props = useSpring({
    config: config,
    delay: leavePage ? 875 : 500,
    from: {
      height: leavePage ? "0%" : "100%",
    },
    to: {
      height: leavePage ? "100%" : "0%",
    },
  });

  const props2 = useSpring({
    config: config,
    delay: leavePage ? 500 : 875,
    from: {
      height: leavePage ? "0%" : "100%",
    },
    to: {
      height: leavePage ? "100%" : "0%",
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
