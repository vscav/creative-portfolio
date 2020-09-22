import * as React from "react";
import { animated, useTrail } from "react-spring";
import * as easings from "d3-ease";

import { CopyrightYear, CopyrightYearContainer } from "./styles";

const config = {
  duration: 2250,
  easing: easings.easeCubic,
};

const Copyright = () => {
  const currentYear = new Date().getFullYear().toString();

  const trail = useTrail(currentYear.length, {
    config,
    delay: 1000,
    opacity: 0.2,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 30, height: 0 },
  });

  return (
    <CopyrightYearContainer>
      <CopyrightYear>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={index}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div style={{ height }}>{currentYear[index]}</animated.div>
          </animated.div>
        ))}
      </CopyrightYear>
    </CopyrightYearContainer>
  );
};

export default Copyright;
