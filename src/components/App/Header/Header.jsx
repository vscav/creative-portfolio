import * as React from "react";
import { HeaderNav, Logo, FlipContainer, LinkContainer } from "./styles";
import { Container, Flex } from "../../../styles/global";
import { Link } from "react-router-dom";

import DelayLink from "../DelayLink";

const Header = () => {
  const onDelayStart = () => {
    console.log("delay start");
  };

  const onDelayEnd = () => {
    console.log("delay end");
  };

  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween>
          <Logo>
            <Link to="/projects">VSCAV</Link>
          </Logo>
          <LinkContainer>
            {/* <Link to="/profile">
              <FlipContainer>
                <span>Profile</span>
                <span>Profile</span>
              </FlipContainer>
            </Link> */}
            <DelayLink
              to="/profile"
              delay={1000}
              onDelayStart={onDelayStart}
              onDelayEnd={onDelayEnd}
            >
              <FlipContainer>
                <span>Profile</span>
                <span>Profile</span>
              </FlipContainer>
            </DelayLink>
          </LinkContainer>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
