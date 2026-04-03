import * as C from "./styles";
import { CharacterSides } from "../../types/CharacterSides";

type Props = {
  x: number;
  y: number;
  side: CharacterSides;
};

export const Character = ({ x, y, side }: Props) => {
  const sides = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };

  return <C.Container x={x} y={y} sidePos={sides[side] ?? 0}></C.Container>;
};
