import styled from "styled-components";
import { breakpoints } from "styles/breakpoints";

export const CreditsContainer = styled.div`
  width: 45%;
  padding: 1.25rem;
  @media (max-width: ${breakpoints.tablet}px) {
    width: 100%;
  }
`;

export const CreditsHeaderContainer = styled.div`
  width: 25%;
  padding: 1.25rem;
  @media (max-width: ${breakpoints.tablet}px) {
    width: 100%;
  }
`;

export const CreditsHeader = styled.div`
  color: ${(props) => props.theme.colors.darkGrey};
  font-family: IntegralCF, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-kerning: none;
  font-size: 1em;
  line-height: 1.3;
  margin: 0;
`;

export const CreditItemContainer = styled.div`
  font-size: 1rem;
`;

export const CreditItem = styled.div`
  margin: 0;
  padding-bottom: 1rem;
  padding-top: 1rem;
  @media (min-width: ${breakpoints.tablet}px) {
    margin-left: 16.66667%;
  }

  span {
    color: ${(props) => props.theme.colors.darkGrey};
  }
`;

export const Separator = styled.div`
  display: block;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;

  > svg {
    display: block;
    width: 100%;
    opacity: 0.2;

    path {
      fill: ${(props) => props.theme.colors.text};
    }
  }
`;
