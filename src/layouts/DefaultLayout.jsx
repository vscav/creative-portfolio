import * as React from "react";
import { Wrapper } from "./styles";

import Transition from "../components/App/Transition";
import AnimatedCursor from "../components/App/Cursor";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";

const DefaultLayout = ({ children, toggleTheme }) => {
  return (
    <>
      <Transition />
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer toggleTheme={toggleTheme} />
      <AnimatedCursor />
    </>
  );
};

export default DefaultLayout;
