import * as React from "react";

import { ProgressBarContainer, AnimatedProgressBar } from "./styles";

const ProgressStatusBar = () => {
  return (
    <ProgressBarContainer>
      <AnimatedProgressBar style={{ width: "100%" }} />
    </ProgressBarContainer>
  );
};

export default ProgressStatusBar;
