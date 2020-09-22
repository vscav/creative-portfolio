import * as React from "react";
import { FooterNav } from "./styles";
import { Container, Flex } from "../../../styles/global";
import SingleAudioPlayer from "../SingleAudioPlayer";
import ThemeToggler from "../ThemeToggler";
// import Social from "../Social";

const Footer = ({ toggleTheme }) => {
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <ThemeToggler toggleTheme={toggleTheme} />
          <SingleAudioPlayer
            file={require("../../../assets/sounds/rone-icare.mp3")}
            autoPlay={false}
            // autoPlay
            loop
            fade
            volume={0.4}
          />
          {/* <Social /> */}
        </Flex>
      </Container>
    </FooterNav>
  );
};

export default Footer;
