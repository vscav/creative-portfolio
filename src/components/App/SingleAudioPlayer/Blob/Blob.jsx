import * as React from "react";
import { BlobShape } from "./styles";

const Blob = (props) => {
  const initialValues = [50, 50, 50, 50];

  const [blob, setBlob] = React.useState(initialValues);

  const setInitialBorderRadius = () => {
    setBlob(initialValues);
  };

  const setRandomBorderRadius = () => {
    setBlob(generateBorderRadiusValue());
  };

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

  React.useEffect(() => {
    const interval = setInterval(() => {
      props.active ? setRandomBorderRadius() : setInitialBorderRadius();
    }, 300);
    return () => clearInterval(interval);
  }, [props.active]);

  const handleClick = () => {
    props.clickHandler();
  };

  return <BlobShape onClick={handleClick} blob={blob} size={props.size} />;
};

export default Blob;
