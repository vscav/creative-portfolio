import * as React from "react";
import { Toggle, ToggleContainer } from "./styles";
import Tooltip from "../Tooltip";
import { ThemeContext } from "styled-components";

const ThemeToggler = ({ toggleTheme }) => {
  const { title } = React.useContext(ThemeContext);
  return (
    <ToggleContainer>
      <Toggle onClick={toggleTheme} />
      <Tooltip
        active={title === "dark"}
        variant1={"Embrace the light side"}
        variant2={"Embrace the dark side"}
      />
    </ToggleContainer>
  );
};

export default ThemeToggler;
