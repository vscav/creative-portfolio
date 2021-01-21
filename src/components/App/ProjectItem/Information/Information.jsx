import * as React from "react";

import { Container, Flex } from "styles/global";
import { InformationList, InformationTitle, InformationItem } from "./styles";

const Information = () => {
  return (
    <Container>
      <Flex wrapper alignTop spaceBetween wrapping>
        <InformationList>
          <InformationTitle>Client</InformationTitle>
          <InformationItem>Chanel</InformationItem>
        </InformationList>
        <InformationList>
          <InformationTitle>Skill(s)</InformationTitle>
          <InformationItem>UX / UI</InformationItem>
          <InformationItem>Interactive Design</InformationItem>
          <InformationItem>Art direction</InformationItem>
          <InformationItem>HTML Integration</InformationItem>
          <InformationItem>Back office</InformationItem>
        </InformationList>
        <InformationList>
          <InformationTitle>Award(s)</InformationTitle>
          <InformationItem>FWA</InformationItem>
        </InformationList>
        <InformationList>
          <InformationTitle>Date</InformationTitle>
          <InformationItem>2020-03</InformationItem>
        </InformationList>
      </Flex>
    </Container>
  );
};

export default Information;
