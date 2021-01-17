import * as React from "react";
import { Media } from "react-breakpoints";

import SingleAudioPlayer from "./SingleAudioPlayer";
import ThemeToggler from "./ThemeToggler";
import Progress from "./Progress";

import { Container, Flex } from "../../../styles/global";
import { FooterNav } from "./styles";

const Footer = ({ toggleTheme }) => {
  return (
    <FooterNav>
      <Container>
        <Flex spaceBetween>
          <ThemeToggler toggleTheme={toggleTheme} />
          <Media>
            {({ breakpoints, currentBreakpoint }) =>
              breakpoints[currentBreakpoint] > breakpoints.mobileLandscape ? (
                <Progress />
              ) : null
            }
          </Media>
          <SingleAudioPlayer
            file={require("../../../assets/audio/rone-icare.mp3")}
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
