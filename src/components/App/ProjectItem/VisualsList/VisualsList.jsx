import * as React from "react";

import Visual from "components/App/ProjectItem/Visual";

import { VisualsWrapper } from "./styles";

const VisualsList = () => {
  return (
    <VisualsWrapper>
      <Visual />
      <Visual full />
      <Visual />
    </VisualsWrapper>
  );
};

export default VisualsList;
