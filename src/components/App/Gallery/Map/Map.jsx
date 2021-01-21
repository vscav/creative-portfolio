import * as React from "react";

import { Block } from "components/App/Three/Block/Block";
import Control from "components/App/Gallery/Control";
import Dot from "components/App/Gallery/Dot";

import state from "components/App/Three/state";

const navigation = [
  {
    id: 1,
    name: "Lit Drum Pad",
  },
  {
    id: 2,
    name: "Wodabest",
  },
  {
    id: 3,
    name: "Pathfinding",
  },
  {
    id: 4,
    name: "Benoit Perd",
  },
  {
    id: 5,
    name: "ZKM identity",
  },
  {
    id: 6,
    name: "IMAC WARS",
  },
];

export const DragPositionContext = React.createContext(0);

const Map = () => {
  const [position, setPosition] = React.useState(0);
  return (
    <DragPositionContext.Provider value={{ position, setPosition }}>
      {new Array(navigation.length).fill(0).map((_, index) => (
        <Block key={index} factor={1 / state.sections / 2} offset={index}>
          <Dot />
        </Block>
      ))}
      <Control />
    </DragPositionContext.Provider>
  );
};

export default Map;
