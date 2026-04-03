import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    ". up ."
    "left . right"
    ". down .";
  gap: 10px;
  margin-top: 30px;
  background-color: #333;
  padding: 15px;
  border-radius: 50%;
  box-shadow:
    0px 5px 0px #111,
    inset 0px 5px 10px rgba(255, 255, 255, 0.1);
  border: 4px solid #000;
  width: min-content;
  align-self: center;
`;

export const Button = styled.div`
  width: 60px;
  height: 60px;
  background-color: #111;
  border: 4px solid #000;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.1s;
  color: #fff;
  box-shadow: 0px 4px 0px #000;

  &:active {
    box-shadow: 0px 0px 0px #000;
    transform: translateY(4px);
    background-color: #222;
  }

  svg {
    width: 32px;
    height: 32px;
  }
`;

export const Up = styled(Button)`
  grid-area: up;
`;

export const Down = styled(Button)`
  grid-area: down;
`;

export const Left = styled(Button)`
  grid-area: left;
`;

export const Right = styled(Button)`
  grid-area: right;
`;
