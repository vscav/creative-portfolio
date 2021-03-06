import * as React from "react";
import { useFrame } from "react-three-fiber";
import lerp from "lerp";
import { useDrag } from "react-use-gesture";

import { DragPositionContext } from "components/App/Gallery//Map/Map";

import { useBlock } from "components/App/Three/Block/Block";

import state from "components/App/Three/state";

import isClosest from "helpers/isClosest";

const Control = () => {
  let positionsSet = React.useRef();
  const ref = React.useRef();
  const { position, setPosition } = React.useContext(DragPositionContext);
  const [hovered, setHoverState] = React.useState(false);
  const { sectionWidth } = useBlock();
  state.sectionWidth = sectionWidth;
  React.useEffect(() => {
    positionsSet.current = [...new Array(6)].map(
      (_, index) => index * sectionWidth * state.zoom
    );
  });
  React.useEffect(() => {
    state.ref.scrollLeft = isClosest(position, positionsSet.current);
  }, [hovered, position, positionsSet]);
  const { viewportWidth } = useBlock();
  useFrame(({ camera }) => {
    const s = lerp(ref.current.scale.x, hovered ? 2 : 0.5, 0.1);
    ref.current.scale.set(s, s, s);
    camera.zoom = lerp(camera.zoom, hovered ? 30 : state.zoom, 0.1);
    camera.updateProjectionMatrix();
  });
  const bind = useDrag(
    ({ delta: [x] }) => {
      state.ref.scrollLeft +=
        (x / viewportWidth) * 2 * (viewportWidth * state.pages);
    },
    {
      eventOptions: { pointer: true },
    }
  );
  return (
    <group ref={ref} position={[0, 0, 2]}>
      <mesh
        {...bind()}
        onPointerOver={(e) => {
          e.stopPropagation();
          e.target.setPointerCapture(e.pointerId);
          setHoverState(true);
        }}
        onPointerOut={() => {
          setHoverState(false);
          setPosition(state.ref.scrollLeft);
        }}
      >
        <circleGeometry attach="geometry" args={[1, 128]} />
        <meshBasicMaterial
          attach="material"
          transparent
          opacity={0.2}
          color="white"
        />
      </mesh>
    </group>
  );
};

export default Control;
