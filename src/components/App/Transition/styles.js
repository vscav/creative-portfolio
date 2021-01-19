import styled from "styled-components";

import { animated } from "react-spring";

export const TransitionFrontOverlay = styled(animated.div)`
  height: 100vh;
  position: fixed;
  width: 100%;
  background: ${(props) => props.theme.colors.background};
  z-index: 10000000;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  will-change: height;
`;

export const TransitionBackOverlay = styled(animated.div)`
  height: 100vh;
  position: fixed;
  width: 100%;
  background: ${(props) => props.theme.colors.text};
  z-index: 9999999;
  bottom: 0;
  right: 0;
`;
