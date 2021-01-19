import styled from "styled-components";

export const DescriptionContainer = styled.div`
  width: 45%;
  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const DescriptionHeader = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-kerning: none;
  font-size: 3em;
  font-style: italic;
  font-weight: 300;
  line-height: 1.3;
  margin: 0;
`;

export const DescriptionText = styled.p`
  color: ${(props) => props.theme.colors.grey};
  font-kerning: none;
  font-size: 1.2em;
  font-weight: 300;
  line-height: 2;
  margin: 0;
`;
