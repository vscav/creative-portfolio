import * as React from "react";
import { Link, useHistory } from "react-router-dom";

const DelayLink = (props) => {
  const { onDelayStart, onDelayEnd, ...rest } = props;
  const history = useHistory();
  let timeout = null;

  React.useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  });

  const handleClick = (e) => {
    props.onDelayStart();

    if (e.defaultPrevented) {
      return;
    }

    e.preventDefault();

    timeout = setTimeout(() => {
      history.push(props.to);
      props.onDelayEnd();
    }, props.delay);
  };

  return <Link {...rest} onClick={handleClick} />;
};

export default DelayLink;
