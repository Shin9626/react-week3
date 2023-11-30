import { NavLink } from "react-router-dom";
import { NavWrapper, Links } from "./styled";

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
