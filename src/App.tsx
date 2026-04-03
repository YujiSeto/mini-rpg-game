import { useEffect, useCallback } from "react";
import * as C from "./App.styles";
import { Character } from "./components/Character";
import { useCharacter } from "./components/hooks/useCharacter";
import { Controller } from "./components/Controller";

const App = () => {
  const char = useCharacter();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      switch (e.code) {
        case "KeyA":
        case "ArrowLeft":
          char.moveLeft();
          break;
        case "KeyD":
        case "ArrowRight":
          char.moveRight();
          break;
        case "KeyW":
        case "ArrowUp":
          char.moveUp();
          break;
        case "KeyS":
        case "ArrowDown":
          char.moveDown();
          break;
      }
    },
    [char]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <C.Container>
      <C.Map>
        <Character x={char.x} y={char.y} side={char.side} />
      </C.Map>
      <Controller
        moveUp={char.moveUp}
        moveDown={char.moveDown}
        moveLeft={char.moveLeft}
        moveRight={char.moveRight}
      />
    </C.Container>
  );
};

export default App;
