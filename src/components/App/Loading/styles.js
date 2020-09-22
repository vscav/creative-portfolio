import styled from "styled-components";
import { animated } from "react-spring";

export const LoadingContainer = styled(animated.div)`
  width: 150px;
  height: 2px;
  background-color: grey;
`;

export const LoadingBar = styled(animated.div)`
  height: 100%;
  background-color: ${(props) => props.theme.colors.text}; ;
`;
