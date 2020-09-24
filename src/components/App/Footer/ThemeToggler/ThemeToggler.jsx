import * as React from "react";
import { ThemeContext } from "styled-components";

import Tooltip from "../../Tooltip";

import { Toggle, ToggleContainer } from "./styles";

const ThemeToggler = ({ toggleTheme }) => {
  const { title } = React.useContext(ThemeContext);
  return (
    <ToggleContainer>
      <Toggle name="theme-control" onClick={toggleTheme} />
      <Tooltip
        active={title === "dark"}
        variant1={"Embrace the light side"}
        variant2={"Embrace the dark side"}
      />
    </ToggleContainer>
  );
};

export default ThemeToggler;
