import * as React from "react";
import { useFrame, useThree, createPortal, extend } from "react-three-fiber";
import { Scene } from "three";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";

extend({ EffectComposer, RenderPass });

const Effects = ({ children }) => {
  const [scene] = React.useState(() => new Scene());
  const composer = React.useRef();
  const { gl, size, camera } = useThree();

  React.useEffect(
    () => void composer.current.setSize(size.width, size.height),
    [size]
  );

  useFrame(() => {
    gl.autoClear = true;
    composer.current.render();
  }, 1);

  return createPortal(
    <>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
      </effectComposer>
      {children}
    </>,
    scene
  );
};

export default Effects;
