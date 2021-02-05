import styled from "styled-components";
import { breakpoints } from "styles/breakpoints";

export const InformationList = styled.ul`
  margin: 1.25rem;
  padding: 0;
  list-style: none;
  @media (max-width: ${breakpoints.tablet}px) {
    min-width: 30%;
    margin-bottom: 40px;
  }
`;

export const InformationTitle = styled.li`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 1.2em;
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 0.8em;
  }
  font-weight: 300;
  line-height: 1.1;
  margin-top: 8px;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

export const InformationItem = styled.li`
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.3rem;
  @media (max-width: ${breakpoints.tablet}px) {
    font-size: 1rem;
  }
  font-weight: 600;
  line-height: 1.1;
  margin-top: 8px;
  text-transform: none;
`;
