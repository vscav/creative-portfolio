import styled from "styled-components";
import { breakpoints } from "styles/breakpoints";

export const Name = styled.h1`
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 0.825rem;
  margin-bottom: 0.825rem;
`;

export const Role = styled.h2`
  font-family: IntegralCF, sans-serif;
  font-size: 2.25rem;
  margin-bottom: 3rem;
  color: ${(props) => props.theme.colors.text};
`;

export const ItemTitle = styled.div`
  font-family: IntegralCF, sans-serif;
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 1.125rem;
  line-height: 1.3;
  margin-left: 10%;
  margin-bottom: 1rem;
  width: 20%;

  @media (max-width: ${breakpoints.tablet}px) {
    margin-left: 0;
    margin-bottom: 2.25rem;
    width: 100%;
  }
`;

export const ItemText = styled.div`
  color: ${(props) => props.theme.colors.text};
  font-size: 1.625rem;
  line-height: 1.85;
  margin-top: -0.5rem;
  margin-left: 5%;
  width: 65%;

  @media (max-width: ${breakpoints.tablet}px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const Separator = styled.div`
  display: block;
  width: 100%;
  height: 1px;
  margin-bottom: 3rem;

  @media (min-width: ${breakpoints.tablet}px) {
    display: none;
  }

  > svg {
    display: block;
    width: 100%;
    opacity: 0.2;

    path {
      fill: ${(props) => props.theme.colors.text};
    }
  }
`;
