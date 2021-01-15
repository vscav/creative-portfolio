import * as React from "react";
import { useTrail } from "react-spring";

import { ProjectsTitlesList, ProjectTitle } from "./styles";

const config = { mass: 5, tension: 2000, friction: 200 };

const ProjectsList = () => {
  const titles = ["Lit Drumpad Pad", "ZKM Identity", "Wodabest"];

  const trail = useTrail(titles.length, {
    config,
    delay: 1000,
    opacity: 1,
    x: 20,
    from: { opacity: 0, x: 0 },
  });

  return (
    <ProjectsTitlesList>
      {trail.map(({ x, height, ...rest }, index) => (
        <ProjectTitle
          key={titles[index]}
          className="trails-text"
          style={{
            ...rest,
            transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
          }}
        >
          {titles[index]}
        </ProjectTitle>
      ))}
    </ProjectsTitlesList>
  );
};

export default ProjectsList;
