import * as React from "react";
import { useFrame } from "react-three-fiber";
import lerp from "lerp";
import { useDrag } from "react-use-gesture";

import { DragPositionContext } from "../Map/Map";

import { useBlock } from "../../Three/Block/Block";

import state from "../../Three/state";

import isClosest from "../../../../helpers/isClosest";

const Control = () => {
  let positionsSet = [];
  const ref = React.useRef();
  const { position, setPosition } = React.useContext(DragPositionContext);
  const [hovered, setHoverState] = React.useState(false);
  const { sectionWidth } = useBlock();
  React.useEffect(() => {
    positionsSet = [...new Array(6)].map(
      (position, index) => index * sectionWidth * state.zoom
    );
  }, [positionsSet]);
  React.useEffect(() => {
    document.body.style.cursor = hovered ? "grab" : "auto";
    state.ref.scrollLeft = isClosest(position, positionsSet);
  }, [hovered]);
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
        onPointerOver={(e) => (
          e.stopPropagation(),
          e.target.setPointerCapture(e.pointerId),
          setHoverState(true)
        )}
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
