import styled from "styled-components";

export const ToolTip = styled.span`
  -webkit-transform: translate(0px, -50%);
  -webkit-transition: opacity 1s ease, visibility 1s ease,
    -webkit-transform 1s ease;
  font-size: 10px;
  color: ${(props) => props.theme.colors.text};
  top: 50%;
  transform: translate(0, -50%);
  text-transform: uppercase;
  transition: transform 1s ease, opacity 1s ease, visibility 1s ease,
    color 0.3s ease-in-out;
  white-space: nowrap;
  position: absolute;
  opacity: 0;
  visibility: hidden;
`;
