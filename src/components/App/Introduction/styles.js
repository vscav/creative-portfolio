import styled from "styled-components";
import { animated } from "react-spring";
import { breakpoints } from "styles/breakpoints";

export const IconView = styled(animated.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000001;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span:first-child {
    margin-bottom: 1rem;
  }
`;

export const Icon = styled.span`
  font-family: Respira;
  font-size: 12rem;
  color: ${(props) => props.theme.colors.text};

  @media (min-width: ${breakpoints.tablet}px) {
    font-size: 8rem;
  }
`;

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
`;
