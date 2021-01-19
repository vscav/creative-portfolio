import styled from "styled-components";
import { animated } from "react-spring";

export const HeroImageContainer = styled(animated.div)`
  height: 55%;
  // width: 65%;
  position: relative;
  overflow: hidden;
  margin: auto;
`;

export const HeroImageContainerOverlay = styled(animated.div)`
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  margin: auto;
  background: ${(props) => props.theme.colors.background};
  z-index: 1;
`;

export const HeroImage = styled(animated.img)`
  margin: 0 auto;
  object-fit: fill;
`;
