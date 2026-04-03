import styled from "styled-components";

export const Container = styled.div`
  background-color: #24282f;
  min-height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  gap: 20px;
`;

export const Map = styled.div`
  width: 480px;
  max-width: 100%;
  aspect-ratio: 1;
  position: relative;
  background-image: url("${process.env.PUBLIC_URL}/assets/map.png");
  background-position: left top;
  background-size: 100%;

  border: 10px solid #555;
  border-radius: 12px;
  box-shadow:
    0px 0px 0px 5px #333,
    0px 10px 20px rgba(0, 0, 0, 0.8),
    inset 0px 0px 15px rgba(0, 0, 0, 0.5);
`;
