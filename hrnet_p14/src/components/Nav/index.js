
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo_wealth_health.jpg";

/**
 * Navbar component
 * @returns {JS.Element} - The render Navbar component
 */

const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="menu">
        <NavLink to="/" className="menu-text">Create Employee</NavLink>
        <NavLink to="/employee-list" className="menu-text">View Employee List</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
