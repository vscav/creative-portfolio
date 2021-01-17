import * as React from "react";

import { BlobShape } from "./styles";

const Blob = (props) => {
  const initialValues = [50, 50, 50, 50];

  const [blob, setBlob] = React.useState(initialValues);

  React.useEffect(() => {
    const generateBorderRadiusValue = () => {
      let radii = [];
      for (let i = 0; i < 4; i++) {
        radii.push(getRandomValue());
      }
      return radii;
    };

    const getRandomValue = () => {
      return Math.floor(Math.random() * 50) + 50;
    };

    const setInitialBorderRadius = () => {
      setBlob(initialValues);
    };

    const setRandomBorderRadius = () => {
      setBlob(generateBorderRadiusValue());
    };

    const interval = setInterval(() => {
      props.active ? setRandomBorderRadius() : setInitialBorderRadius();
    }, 300);
    return () => clearInterval(interval);
  }, [props.active, initialValues]);

  const handleClick = () => {
    props.clickHandler();
  };

  return (
    <BlobShape
      name="sound-control"
      onClick={handleClick}
      blob={blob}
      size={props.size}
    />
  );
};

export default Blob;
