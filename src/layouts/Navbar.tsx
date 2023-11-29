import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.nav`
  height: 100px;
  background: #001b2e;
  color: white;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  * {
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 150px;
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

const Navbar = () => (
  <NavWrapper>
    <Links>
      <NavLink to="/">首頁</NavLink>
      <NavLink to="/spots">景點</NavLink>
      <NavLink to="/faq">FAQ</NavLink>
    </Links>
  </NavWrapper>
);

export default Navbar;
