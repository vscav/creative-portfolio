import styled from "styled-components";

import { animated } from "react-spring";

export const ProjectsTitlesList = styled.ul`
  min-height: 100vh;
  padding-top: 30vw;
  padding-bottom: 30vw;
`;

export const ProjectTitle = styled(animated.h2)`
  display: flex;
  font-family: Respira;
  font-size: 10vw;
  letter-spacing: -0.025em;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;
