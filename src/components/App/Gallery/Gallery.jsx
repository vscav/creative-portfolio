import * as React from "react";
import { Canvas } from "react-three-fiber";
import { useSpring } from "react-spring";
import { ReactReduxContext, Provider } from "react-redux";

import Effects from "./Effects";
import HeadsUpDisplay from "./HeadsUpDisplay";
import Map from "./Map";
import Content from "./Content";

import state from "components/App/Three/state";

import store from "store";

import { ScrollView, ScrollArea } from "./styles";

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const config = { mass: 10, tension: 550, friction: 140 };

const Gallery = () => {
  const [events, setEvents] = React.useState();
  const scrollArea = React.useRef();
  const [props, setProps] = useSpring(() => ({
    xy: [0, 0],
    config: config,
  }));
  const [otherProps, setOtherProps] = React.useState([0, 0]);
  const onScroll = (e) => (state.top.current = e.target.scrollLeft);
  React.useEffect(() => {
    state.ref = scrollArea.current;
    onScroll({ target: scrollArea.current });
  }, []);
  return (
    <>
      <ReactReduxContext.Consumer>
        {({ store }) => (
          <Canvas
            concurrent
            orthographic
            camera={{ zoom: 1, position: [0, 0, 500] }}
            onCreated={(state) => {
              console.log("[Info] THREE.WebGLRenderer: Context Instanciated.");
              state.gl.setClearColor("#000", 0);
              delete state.events.onGotPointerCaptureLegacy;
              setEvents(state.events);
            }}
          >
            <Provider store={store}>
              <Effects>
                <React.Suspense>
                  <Content {...props} {...otherProps} />
                  <HeadsUpDisplay>
                    <Map />
                  </HeadsUpDisplay>
                </React.Suspense>
              </Effects>
            </Provider>
          </Canvas>
        )}
      </ReactReduxContext.Consumer>
      <ScrollView
        ref={scrollArea}
        onScroll={onScroll}
        onMouseMove={({ clientX: x, clientY: y }) => {
          setProps({ xy: calc(x, y) });
          setOtherProps([
            (x / window.innerWidth) * 2 - 1,
            (y / window.innerHeight) * 2 - 1,
          ]);
        }}
        {...events}
      >
        <ScrollArea style={{ width: `${state.pages * 100}vw` }} />
      </ScrollView>
    </>
  );
};

export default Gallery;
