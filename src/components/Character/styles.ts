import styled from "styled-components";

type Props = {
  size: number;
  left: number;
  top: number;
  sidePos: number;
};

export const Container = styled.div<Props>`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  position: absolute;
  left: ${(props) => props.left}px;
  top: ${(props) => props.top}px;
  background-image: url("/assets/sprite.png");
  background-position: 0px ${(props) => props.sidePos}px;
`;
