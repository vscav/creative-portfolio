import * as React from "react";

import Visual from "components/App/ProjectItem/Visual";

import { VisualsWrapper } from "./styles";

const VisualsList = (props) => {
  return (
    <VisualsWrapper>
      {props.visuals.map((visual, index) => (
        <Visual
          key={index}
          src={require(`../../../../assets/images/${visual}.jpg`)}
        />
      ))}
      {/* <Visual full /> */}
    </VisualsWrapper>
  );
};

export default VisualsList;
