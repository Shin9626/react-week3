import styled from "styled-components";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: center;

  height: 80px;
  background: #001b2e;
  color: white;
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 375px;
  height: 100%;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    height: 100%;

    color: white;
    font-size: 20px;
    text-decoration: none;

    transition: 0.3s;

    &:hover {
      background-color: #294c60;
      transition: 0.3s;
    }
  }
`;
