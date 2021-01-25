import * as React from "react";

import { ImageHeroWrapper, GalleryImageHero } from "./styles";

const ImageHero = (props) => {
  return (
    <ImageHeroWrapper full>
      <GalleryImageHero
        src={require(`../../../../assets/images/${props.image}.jpg`)}
      />
    </ImageHeroWrapper>
  );
};

export default ImageHero;
