import * as React from "react";
import { useSpring } from "react-spring";
import * as easings from "d3-ease";
import { Section, Container, HeroImageContainer, HeroImage } from "./styles";

import model from "../../../assets/images/model.jpg";

const config1 = {
  duration: 1000,
  easing: easings.easeCubic,
};

const config2 = {
  duration: 1400,
  easing: easings.easeCubic,
};

const Hero = () => {
  let image = React.useRef(null);
  let container = React.useRef(null);

  const props1 = useSpring({
    config: config1,
    delay: 2000,
    from: {
      visibility: "hidden",
    },
    to: {
      visibility: "visible",
    },
  });

  const props2 = useSpring({
    config: config2,
    delay: 3000,
    from: {
      height: "0",
    },
    to: {
      height: "720px",
    },
  });

  return (
    <Section>
      <Container style={props1} ref={(el) => (container = el)}>
        <>
          <HeroImageContainer style={props2} className="img-container">
            <HeroImage
              ref={(el) => {
                image = el;
              }}
              src={model}
            />
          </HeroImageContainer>
        </>
      </Container>
    </Section>
  );
};

export default Hero;
