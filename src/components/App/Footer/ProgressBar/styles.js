import styled from "styled-components";
import { animated } from "react-spring";

export const ProgressBarContainer = styled(animated.div)`
  width: 150px;
  height: 2px;
  background-color: grey;
`;

export const AnimatedProgressBar = styled(animated.div)`
  height: 100%;
  width: 0%;
  transition: width 0.125s linear 0;
  background-color: ${(props) => props.theme.colors.text}; ;
`;
