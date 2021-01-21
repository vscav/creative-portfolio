import * as React from "react";

import SingleAudioPlayer from "./SingleAudioPlayer";
import ThemeToggler from "./ThemeToggler";

import { Container, Flex } from "styles/global";
import { FooterNav } from "./styles";

const Footer = ({ toggleTheme }) => {
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <ThemeToggler toggleTheme={toggleTheme} />
          <SingleAudioPlayer
            file={require("assets/audio/rone-icare.mp3")}
            autoPlay={true}
            loop
            fade
            volume={0.4}
          />
        </Flex>
      </Container>
    </FooterNav>
  );
};

export default Footer;
