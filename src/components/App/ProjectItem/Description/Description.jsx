import * as React from "react";
import { Spring } from "react-spring/renderprops";

import VisibilitySensor from "components/App/VisibilitySensor";

import { Container, Flex } from "styles/global";
import {
  DescriptionContainer,
  DescriptionHeader,
  DescriptionText,
} from "./styles";

const Description = (props) => {
  return (
    <Container>
      <Flex wrapper alignTop spaceBetween wrapping>
        <DescriptionContainer>
          <VisibilitySensor once partialVisibility>
            {({ isVisible }) => (
              <Spring delay={175} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) => (
                  <DescriptionHeader style={{ opacity }}>
                    {props.overview}
                  </DescriptionHeader>
                )}
              </Spring>
            )}
          </VisibilitySensor>
        </DescriptionContainer>
        <DescriptionContainer>
          {props.description.map((paragraph, index) => (
            <DescriptionText key={index}>{paragraph}</DescriptionText>
          ))}
        </DescriptionContainer>
      </Flex>
    </Container>
  );
};

export default Description;
