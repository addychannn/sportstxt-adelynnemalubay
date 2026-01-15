import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = {
    color: '#015CA8',
    borderBottom: 'solid 2px #015CA8', 
  };

  const normalStyle = { color: 'inherit' };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar border fixed-top bg-white px-3 px-lg-5">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        <NavLink to="/" className="navbar-brand" onClick={closeMenu}>
          <img src="/images/logo.png" alt="Logo" height="40" />
        </NavLink>

        <div className="d-none d-lg-flex align-items-center gap-4">
          <NavLinks activeStyle={activeStyle} normalStyle={normalStyle} />
          <div className="d-flex gap-2 ms-2">
            <Button text="Join" className="btn-primary" />
            <Button text="Login" className="btn-border" />
          </div>
        </div>

        <button 
          className="btn d-lg-none border-0" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`fs-1 ${isOpen ? 'bi bi-x' : 'bi bi-list'}`}></span>
        </button>

        {isOpen && (
          <div className="d-lg-none position-absolute top-100 start-0 w-100 bg-white border-bottom p-4 shadow-sm">
            <div className="d-flex flex-column gap-3">
              <NavLinks 
                activeStyle={activeStyle} 
                normalStyle={normalStyle} 
                onClick={closeMenu} 
              />
              <hr />
              <div className="d-grid gap-2">
                <Button text="Join" className="btn-primary w-100" />
                <Button text="Login" className="btn-border w-100" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavLinks({ activeStyle, normalStyle, onClick }) {
  const links = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <>
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          onClick={onClick}
          className="text-decoration-none fw-semibold nav-link-custom py-2"
          style={({ isActive }) => (isActive ? activeStyle : normalStyle)}
        >
          {link.label}
        </NavLink>
      ))}
    </>
  );
}

export default Navbar;