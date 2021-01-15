import * as React from "react";
import { useSpring } from "react-spring";
import * as easings from "d3-ease";

import normalize from "../../../../helpers/normalize";
import state from "../../Three/state";

import { ProgressBarContainer, AnimatedProgressBar } from "./styles";

const config = {
  duration: 1450,
  easing: easings.easeCubic,
};

const ProgressBar = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const progress = normalize(
        state.ref.scrollLeft,
        state.sectionWidth * (state.sections - 1) * state.zoom,
        0
      );
      setProgress(progress);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const props = useSpring({
    config: config,
    delay: 1000,
    opacity: 1,
    y: 0,
    from: {
      opacity: 0,
      y: 20,
    },
  });

  return (
    <ProgressBarContainer
      style={{
        ...props,
        transform: props.y.interpolate((y) => `translate3d(0,${y}px,0)`),
      }}
    >
      <AnimatedProgressBar style={{ width: `${progress * 100}%` }} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;
