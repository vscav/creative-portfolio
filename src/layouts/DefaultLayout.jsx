import * as React from "react";
import { Wrapper } from "./styles";

import AnimatedCursor from "../components/App/Cursor";
import Header from "../components/App/Header";
import Footer from "../components/App/Footer";

const DefaultLayout = ({
  children,
  toggleTheme,
}) => {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer toggleTheme={toggleTheme} />
      <AnimatedCursor />
    </>
  );
};

export default DefaultLayout;
