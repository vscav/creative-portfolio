import * as React from "react";
import { Html } from "drei";
import { useTrail, animated } from "react-spring";

import Plane from "../Plane";
import { Block, useBlock } from "../../Three/Block/Block";

import { ProjectTitle } from "./styles";

import imgTest from "../../../../assets/images/model.jpg";
import dispImg from "../../../../assets/images/textures/fluid-resized.jpg";

const transition = (x, y) => `translate3d(${x / 15}px, ${y / 15}px, 0)`;

const config = { mass: 5, tension: 2000, friction: 200 };

const Content = ({ ...props }) => {
  const home = window.location.pathname === "/" ? true : false;
  const title = "Wodabest";
  const images = [imgTest, imgTest, imgTest, imgTest, imgTest, imgTest];
  const { contentMaxWidth: w } = useBlock();

  const trail = useTrail(title.length, {
    config,
    delay: home ? 10500 : 1000,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <>
      {images.map((img, index) => (
        <Block key={index} factor={1} offset={index}>
          <Plane
            map={img}
            args={[1, 1, 64, 64]}
            d={dispImg}
            shift={100}
            size={1}
            aspect={1.5}
            scale={[w / 1.2, w / (1.2 * 1.77), 1]}
            frustumCulled={false}
            {...props}
          />
          <Html position={[-w / 1.75, -w / 15, 0]}>
            <ProjectTitle
              style={{
                transform: props.xy.interpolate(transition),
              }}
            >
              {trail.map(({ x, height, ...rest }, index) => (
                <animated.div
                  key={title[index]}
                  className="trails-text"
                  style={{
                    ...rest,
                    transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
                  }}
                >
                  <animated.div style={{ height }}>{title[index]}</animated.div>
                </animated.div>
              ))}
            </ProjectTitle>
          </Html>
        </Block>
      ))}
    </>
  );
};

export default Content;
