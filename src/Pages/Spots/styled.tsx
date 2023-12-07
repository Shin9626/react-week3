import styled from "styled-components";
import { Wrapper } from "../../Styled";

export const SpotWrapper = styled(Wrapper)`
  justify-content: start;

  padding: 80px 40px;
`;

export const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;

  padding: 8px;
  padding-bottom: 20px;
  width: 400px;

  border: 1px solid #001b2e;
  border-radius: 16px;

  background-color: white;

  text-align: center;

  overflow: hidden;
  cursor: pointer;

  box-sizing: border-box;
`;
