import * as React from "react";

import normalize from "helpers/normalize";
import state from "components/App/Three/state";

import {
  ProgressContainer,
  ProgressText,
  ProgressTextOverlay,
  Text,
  TextOverlay,
} from "./styles";

const Progress = () => {
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

  return (
    <ProgressContainer>
      <ProgressTextOverlay
        style={{
          width: `${progress * 100}%`,
        }}
      >
        <TextOverlay>(Drag/Scroll)</TextOverlay>
      </ProgressTextOverlay>
      <ProgressText>
        <Text>(Drag/Scroll)</Text>
      </ProgressText>
    </ProgressContainer>
  );
};

export default Progress;
