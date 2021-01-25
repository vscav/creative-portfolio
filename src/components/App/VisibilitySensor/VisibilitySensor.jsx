import * as React from "react";
import PropTypes from "prop-types";
import VSensor from "react-visibility-sensor";

const VisibilitySensor = ({ once, children, ...rest }) => {
  const [active, setActive] = React.useState(true);

  return (
    <VSensor
      active={active}
      onChange={(isVisible) => once && isVisible && setActive(!active)}
      {...rest}
    >
      {({ isVisible }) => children({ isVisible })}
    </VSensor>
  );
};

VisibilitySensor.propTypes = {
  once: PropTypes.bool,
  children: PropTypes.func.isRequired,
};

VisibilitySensor.defaultProps = {
  once: false,
};

export default VisibilitySensor;
