import styled, { css } from "styled-components";

import model from "assets/images/model.jpg";

export const ImageHeroWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  padding: 15vh 10vw;
  position: relative;
  width: 100%;
  ${(props) =>
    props.full &&
    css`
      padding: 0;
    `};
`;

export const GalleryImageHero = styled.img`
  -webkit-box-shadow: 0 0 63px 0 rgba(45, 54, 59, 0.15);
  box-shadow: 0 0 63px 0 rgba(45, 54, 59, 0.15);
  filter: progid:DXImageTransform.Microsoft.Shadow(color=#ebebeb,Direction=90,Strength=25);
  height: auto;
  margin: auto auto -5px;
  max-width: 1200px;
  width: 100%;
  max-width: 100%;
`;

GalleryImageHero.defaultProps = {
  src: model,
};
