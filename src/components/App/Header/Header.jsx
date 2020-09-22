import * as React from "react";
import { HeaderNav, Logo, FlipContainer, LinkContainer } from "./styles";
import { Container, Flex } from "../../../styles/global";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween>
          <Logo>
            <Link to="/projects">VSCAV</Link>
          </Logo>
          <LinkContainer>
            <Link to="/profile">
              <FlipContainer>
                <span>Profile</span>
                <span>Profile</span>
              </FlipContainer>
            </Link>
          </LinkContainer>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
