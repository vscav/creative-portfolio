import * as React from "react";
import { useSpring } from "react-spring";
import * as easings from "d3-ease";

// import Loading from "../Loading";

import {
  Icon,
  IconContainer,
  IconView,
  IntroductionFrontOverlay,
  IntroductionBackOverlay,
} from "./styles";

const config = {
  duration: 600,
  easing: easings.easeCubic,
};

const config2 = {
  duration: 800,
  easing: easings.easeCubic,
};

const Introduction = () => {
  const props = useSpring({
    config: config,
    delay: 9800,
    from: {
      height: "100%",
    },
    to: {
      height: "0%",
    },
  });
  const props2 = useSpring({
    config: config,
    delay: 10400,
    from: {
      height: "100%",
    },
    to: {
      height: "0%",
    },
  });
  const props3 = useSpring({
    config: config2,
    delay: 9000,
    from: {
      opacity: 1,
    },
    to: {
      opacity: 0,
    },
  });
  const props4 = useSpring({
    delay: 12800,
    from: {
      visibility: "visible",
    },
    to: {
      visibility: "hidden",
    },
  });
  return (
    <>
      <IconView style={props4}>
        <IconContainer style={props3}>
          <Icon>V</Icon>
          {/* <Loading /> */}
        </IconContainer>
      </IconView>
      <IntroductionFrontOverlay style={props} />
      <IntroductionBackOverlay style={props2} />
    </>
  );
};

export default Introduction;
