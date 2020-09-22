import styled from "styled-components";

import { animated } from "react-spring";

export const CopyrightYearContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -80%);
  z-index: -1;
`;

export const CopyrightYear = styled(animated.h3)`
  display: flex;
  font-family: Josefin, sans-serif;
  font-size: 15rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.grey};
`;
