import styled from "styled-components";

export const ProgressContainer = styled.div`
  position: relative;
  height: 2.5rem;
  width: 95px;
`;

export const ProgressText = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
`;

export const ProgressTextOverlay = styled.div`
  overflow: hidden;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  text-align: center;
`;

export const Text = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.grey};
  vertical-align: middle;
  line-height: 2.5rem;
  text-transform: uppercase;
  letter-spacing: -0.025em;
`;

export const TextOverlay = styled.span`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.text};
  vertical-align: middle;
  line-height: 2.5rem;
  text-transform: uppercase;
  letter-spacing: -0.025em;
`;
