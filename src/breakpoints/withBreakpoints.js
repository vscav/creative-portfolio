import React from "react";
import hoistStatics from "hoist-non-react-statics";
import { Consumer } from "./BreakpointsContext";

const withBreakpoints = (Component) => {
  const C = React.forwardRef
    ? React.forwardRef((props, ref) => (
        <Consumer>
          {(context) => <Component {...props} ref={ref} {...context} />}
        </Consumer>
      ))
    : (props) => (
        <Consumer>
          {(context) => <Component {...props} {...context} />}
        </Consumer>
      );
  C.displayName = `withBreakpoints(${Component.displayName || Component.name})`;
  return hoistStatics(C, Component);
};

export default withBreakpoints;
