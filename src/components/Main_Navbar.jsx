import { NavLink } from 'react-router-dom';
import Button from "./Button";

function Navbar() {
  // Logic for the active style (the "line" under the link)
  const activeStyle = {
    color: '#015CA8',
    borderBottom: 'solid #015CA8', // Adjust color/thickness of your line here
  };

  const normalStyle = {
    color: 'inherit'
  };

  return (
    <nav className="navbar border fixed-top bg-white">
      <div className="d-flex mx-10 flex-grow-1 justify-content-between">
        
        <NavLink to="/" className="navbar-brand">
          <img src="/images/logo.png" alt="Logo" height="40" />
        </NavLink>

        <div className="d-flex align-items-center gap-4">
          <NavLink 
            to="/" 
            className="text-decoration-none fw-semibold nav-link-custom"
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            Home
          </NavLink>

          <NavLink 
            to="/features" 
            className="text-decoration-none fw-semibold nav-link-custom"
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            Features
          </NavLink>

          <NavLink 
            to="/about" 
            className="text-decoration-none fw-semibold nav-link-custom"
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            About Us
          </NavLink>

          <NavLink 
            to="/contact" 
            className="text-decoration-none fw-semibold nav-link-custom"
            style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
          >
            Contact Us
          </NavLink>
          
          <div className="d-flex gap-2 ms-2">
            <Button text="Join" className="btn-primary" />
            <Button text="Login" className="btn-border" />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;