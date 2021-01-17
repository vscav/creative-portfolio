import * as React from "react";
import { useSpring } from "react-spring";
import * as easings from "d3-ease";
import {
  Section,
  HeroImageContainer,
  HeroImageContainerOverlay,
  HeroImage,
} from "./styles";
import { Container, Flex } from "../../../styles/global";

import model from "../../../assets/images/model.jpg";

const config1 = {
  duration: 0,
  easing: easings.easeCubic,
};

const config2 = {
  duration: 1225,
  easing: easings.easeCubic,
};

const config3 = {
  duration: 1000,
  easing: easings.easeCubic,
};

const Hero = () => {
  const props1 = useSpring({
    config: config1,
    delay: 0,
    from: {
      visibility: "hidden",
    },
    to: {
      visibility: "visible",
    },
  });

  const props2 = useSpring({
    config: config2,
    delay: 800,
    from: {
      transform: "scale(1.45)",
    },
    to: {
      transform: "scale(1)",
    },
  });

  const props3 = useSpring({
    config: config3,
    delay: 800,
    from: {
      height: "100%",
    },
    to: {
      height: "0",
    },
  });

  return (
    <Section>
      <Container style={props1}>
        <Flex flexEnd>
          <HeroImageContainer>
            <HeroImageContainerOverlay style={props3} />
            <HeroImage style={props2} src={model} />
          </HeroImageContainer>
        </Flex>
      </Container>
    </Section>
  );
};

export default Hero;
