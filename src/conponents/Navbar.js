import {
  NavLink,
  useNavigate,
} from 'react-router-dom';

function Navbar() {
  return (
    <div className="nav-link">
      <NavLink to="/">
        <p>首頁</p>
      </NavLink>
      <NavLink to="/tour_list">
        <p>列表</p>
      </NavLink>
      <NavLink to="/faq">
        <p>FAQ</p>
      </NavLink>
    </div>
  );
}

export default Navbar;