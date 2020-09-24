import * as React from "react";
import { useSpring } from "react-spring";
import useMeasure from "../../../../hooks/useMesure";
import * as easings from "d3-ease";

import { LoadingContainer, LoadingBar } from "./styles";

const config1 = {
  duration: 6800,
  easing: easings.easeCubic,
};

const config2 = {
  duration: 1200,
  easing: easings.easeCubic,
};

const Loading = () => {
  const [bind, { width }] = useMeasure();

  const props = useSpring({
    config: config1,
    delay: 2200,
    width: width,
    from: { width: 0 },
  });
  const props2 = useSpring({
    config: config2,
    delay: 1500,
    opacity: 1,
    y: 0,
    from: {
      opacity: 0,
      y: 20,
    },
  });

  return (
    <LoadingContainer
      {...bind}
      style={{
        ...props2,
        transform: props2.y.interpolate((y) => `translate3d(0,${y}px,0)`),
      }}
    >
      <LoadingBar style={props} />
    </LoadingContainer>
  );
};

export default Loading;
