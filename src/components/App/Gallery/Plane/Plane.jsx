import * as React from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";
import lerp from "lerp";

import { useBlock } from "components/App/Three/Block/Block";

import state from "components/App/Three/state";

import "components/App/Three/Material/CustomMaterial";

const Plane = React.forwardRef(
  (
    { color = "white", shift = 100, opacity = 1, args, map, d, ...props },
    ref
  ) => {
    const [hovered, setHover] = React.useState(false);
    const texture = React.useMemo(() => new THREE.TextureLoader().load(map), [
      map,
    ]);
    const dispImg = React.useMemo(() => new THREE.TextureLoader().load(d), [d]);
    const { viewportWidth, offsetFactor } = useBlock();
    const material = React.useRef();
    let last = state.top.current;
    useFrame(() => {
      const { pages, top } = state;
      const displacement = material.current.dispFactor;
      material.current.uniforms.dispFactor.value +=
        ((hovered ? 1 : 0) - displacement) * 0.045;
      material.current.scale = lerp(
        material.current.scale,
        offsetFactor - top.current / ((pages - 1) * viewportWidth),
        0.1
      );
      material.current.shift = lerp(
        material.current.shift,
        -(top.current - last) / shift,
        0.1
      );
      last = top.current;
    });
    return (
      <mesh
        ref={ref}
        onPointerMove={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        {...props}
      >
        <planeBufferGeometry attach="geometry" args={args} />
        <customMaterial
          ref={material}
          attach="material"
          color={color}
          transparent
          opacity={opacity}
          uniforms-texture-value={texture}
          uniforms-displacement-value={dispImg}
          {...props}
        />
      </mesh>
    );
  }
);

export default Plane;
