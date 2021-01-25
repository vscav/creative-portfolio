import * as React from "react";

import { Container, Flex } from "styles/global";
import { InformationList, InformationTitle, InformationItem } from "./styles";

const Information = (props) => {
  return (
    <Container>
      <Flex wrapper alignTop spaceBetween wrapping>
        <InformationList>
          <InformationTitle>
            {props.clients.length > 1 ? "Clients" : "Client"}
          </InformationTitle>
          {props.clients.map((client, index) => (
            <InformationItem key={index}>{client}</InformationItem>
          ))}
        </InformationList>
        <InformationList>
          <InformationTitle>
            {props.skills.length > 1 ? "Skills" : "Skill"}
          </InformationTitle>
          {props.skills.map((skill, index) => (
            <InformationItem key={index}>{skill}</InformationItem>
          ))}
        </InformationList>
        <InformationList>
          <InformationTitle>
            {props.technologies.length > 1 ? "Technologies" : "Technology"}
          </InformationTitle>
          {props.technologies.map((technology, index) => (
            <InformationItem key={index}>{technology}</InformationItem>
          ))}
        </InformationList>
        <InformationList>
          <InformationTitle>Date</InformationTitle>
          <InformationItem>{props.date}</InformationItem>
        </InformationList>
      </Flex>
    </Container>
  );
};

export default Information;
