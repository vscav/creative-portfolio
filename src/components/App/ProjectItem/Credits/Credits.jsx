import * as React from "react";

import PaintLine from "components/App/Icons/PaintLine";

import { Container, Flex } from "styles/global";
import {
  CreditsContainer,
  CreditsHeaderContainer,
  CreditsHeader,
  CreditItemContainer,
  CreditItem,
  Separator,
} from "./styles";

const Credits = (props) => {
  return (
    <Container>
      <Flex wrapper alignTop wrapping>
        <CreditsHeaderContainer>
          <CreditsHeader>Credits</CreditsHeader>
        </CreditsHeaderContainer>
        <CreditsContainer>
          {Object.entries(props.credits).map(([key, value], index) => {
            return (
              <CreditItemContainer key={index}>
                <CreditItem>
                  <p>
                    {key} · <span>{value}</span>
                  </p>
                </CreditItem>
                {index !== Object.keys(props.credits).length - 1 && (
                  <Separator key={index}>
                    <PaintLine />
                  </Separator>
                )}
              </CreditItemContainer>
            );
          })}
        </CreditsContainer>
      </Flex>
    </Container>
  );
};

export default Credits;
