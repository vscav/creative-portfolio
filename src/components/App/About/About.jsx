import * as React from "react";

import PaintLine from "components/App/Icons/PaintLine";

import { Container, Flex } from "styles/global";
import { ItemText, ItemTitle, Name, Role, Separator } from "./styles";

const About = (props) => {
  return (
    <Container>
      <Name>{props.fullName}</Name>
      <Role>{props.role}</Role>
      <Separator>
        <PaintLine />
      </Separator>
      <Flex wrapper alignTop wrapping>
        <ItemTitle>My Mission</ItemTitle>
        <ItemText>{props.mission}</ItemText>
      </Flex>
    </Container>
  );
};

export default About;
