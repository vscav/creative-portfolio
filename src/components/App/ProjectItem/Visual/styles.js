import styled, { css } from "styled-components";

import model from "../../../../assets/images/model.jpg";

export const VisualWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 4vw 10vw;
  ${(props) =>
    props.full &&
    css`
      padding: 0;
    `};
`;

export const VisualItem = styled.img`
  height: auto;
  width: 100%;
`;

VisualItem.defaultProps = {
  src: model,
};
