import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 16px;
  width: 800px;
  border-radius: 16px;

  background-color: white;

  font-size: 20px;
  text-align: center;

  animation: popout 0.3s;
  @keyframes popout {
    0% {
      transform: scale(0);
    }

    100% {
      transform: scale(1);
    }
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
`;

export const Desc = styled.p`
  margin: 0 auto;
  width: 80%;
`;

export const CloseBtn = styled.button`
  align-self: flex-end;

  border: 0;

  background-color: transparent;

  font-size: 20px;

  cursor: pointer;
`;
