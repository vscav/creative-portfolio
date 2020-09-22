import * as React from "react";
import { useFrame, useThree, createPortal } from "react-three-fiber";
import { Scene } from "three";

const HeadsUpDisplay = ({ children }) => {
  const [scene] = React.useState(() => new Scene());
  const { gl, camera } = useThree();
  useFrame(() => {
    gl.autoClear = false;
    gl.clearDepth();
    gl.render(scene, camera);
  }, 2);
  return createPortal(children, scene);
};

export default HeadsUpDisplay;
