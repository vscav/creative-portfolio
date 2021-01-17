import * as React from "react";
import { HeaderNav, Logo, FlipContainer, LinkContainer } from "./styles";
import { Container, Flex } from "../../../styles/global";
import { useDispatch } from "react-redux";
import { arriveOnPage, leavePage } from "../../../store/actions";

import DelayLink from "../DelayLink";

const Header = () => {
  const dispatch = useDispatch();

  const onDelayStart = () => {
    dispatch(leavePage());
  };

  const onDelayEnd = () => {
    dispatch(arriveOnPage());
  };

  return (
    <HeaderNav>
      <Container>
        <Flex spaceBetween>
          <Logo>
            <DelayLink
              to="/projects"
              delay={1475}
              onDelayStart={onDelayStart}
              onDelayEnd={onDelayEnd}
            >
              VSCAV
            </DelayLink>
          </Logo>
          <LinkContainer>
            <DelayLink
              to="/showreel"
              delay={1475}
              onDelayStart={onDelayStart}
              onDelayEnd={onDelayEnd}
            >
              <FlipContainer>
                <span>Showreel</span>
                <span>Showreel</span>
              </FlipContainer>
            </DelayLink>
            <DelayLink
              to="/profile"
              delay={1475}
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
