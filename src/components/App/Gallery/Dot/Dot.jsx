import * as React from "react";

import { DragPositionContext } from "components/App/Gallery//Map/Map";

import { useBlock } from "components/App/Three/Block/Block";

import state from "components/App/Three/state";

const Dot = () => {
  const { setPosition } = React.useContext(DragPositionContext);
  const [hovered, setHovered] = React.useState(false);
  const { offset, sectionWidth } = useBlock();
  React.useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);
  return (
    <>
      <mesh
        scale={[0.1, 0.1, 1]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => {
          setHovered(false);
        }}
        onClick={() => {
          setPosition(offset * sectionWidth * state.zoom);
          state.ref.scrollLeft = offset * sectionWidth * state.zoom;
        }}
      >
        <circleGeometry attach="geometry" args={[1, 128]} />
        <meshBasicMaterial
          attach="material"
          transparent
          color="white"
          opacity={0.2}
        />
      </mesh>
    </>
  );
};

export default Dot;
