import styled from "styled-components";

import { animated } from "react-spring";

export const IntroductionFrontOverlay = styled(animated.div)`
  height: 100vh;
  position: absolute;
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

export const IntroductionBackOverlay = styled(animated.div)`
  height: 100vh;
  position: absolute;
  width: 100%;
  background: ${(props) => props.theme.colors.text};
  z-index: 9999999;
  bottom: 0;
  right: 0;

  /* &::before {
    position: absolute;
    content: "";
    width: 150vw;
    height: 400px;
    background: blue;
    border-radius: 50%;
    left: -100%;
    transform: translateX(50%);
  } */
`;
