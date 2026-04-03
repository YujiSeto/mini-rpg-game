import * as C from "./styles";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Props = {
  moveUp: () => void;
  moveDown: () => void;
  moveLeft: () => void;
  moveRight: () => void;
};

export const Controller = ({
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
}: Props) => {
  return (
    <C.Container>
      <C.Up onClick={moveUp}>
        <ChevronUp />
      </C.Up>
      <C.Left onClick={moveLeft}>
        <ChevronLeft />
      </C.Left>
      <C.Right onClick={moveRight}>
        <ChevronRight />
      </C.Right>
      <C.Down onClick={moveDown}>
        <ChevronDown />
      </C.Down>
    </C.Container>
  );
};
