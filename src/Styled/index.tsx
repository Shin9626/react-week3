import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  gap: 24px;

  background-color: #ffefd3;

  font-size: 24px;
`;

export const Mask = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(50, 50, 50, 0.5);
`;
