import styled from "styled-components";

type Props = {
  x: number;
  y: number;
  sidePos: number;
};

export const Container = styled.div<Props>`
  width: calc(100% / 16);
  height: calc(100% / 16);
  position: absolute;
  left: calc(${(props) => props.x} * 100% / 16);
  top: calc(${(props) => props.y} * 100% / 16);
  background-image: url("${process.env.PUBLIC_URL}/assets/sprite.png");
  background-size: 100% 400%;
  background-position: 0px calc(${(props) => props.sidePos} * 100% / 3);
`;
