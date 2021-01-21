import * as React from "react";

import { Container, Flex } from "styles/global";
import {
  DescriptionContainer,
  DescriptionHeader,
  DescriptionText,
} from "./styles";

const Description = () => {
  return (
    <Container>
      <Flex wrapper alignTop spaceBetween wrapping>
        <DescriptionContainer>
          <DescriptionHeader>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mollis at mi ac consectetur.
          </DescriptionHeader>
        </DescriptionContainer>
        <DescriptionContainer>
          <DescriptionText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mollis at mi ac consectetur. Duis justo urna, vulputate sed tellus
            quis, cursus varius purus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi dapibus metus accumsan massa sollicitudin
            semper. Suspendisse hendrerit ipsum a maximus commodo. Fusce ut quam
            fermentum, faucibus neque tincidunt, placerat tellus. Phasellus
            hendrerit auctor mi ac venenatis. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus.
          </DescriptionText>
          <DescriptionText>
            Nullam eu ipsum magna. Etiam a quam ut magna cursus viverra vel ut
            tellus.
          </DescriptionText>
        </DescriptionContainer>
      </Flex>
    </Container>
  );
};

export default Description;
