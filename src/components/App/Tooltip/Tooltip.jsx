import * as React from "react";
import { ToolTip } from "./styles";

const Tooltip = (props) => {
  return <ToolTip>{props.active ? props.variant1 : props.variant2}</ToolTip>;
};

export default Tooltip;
