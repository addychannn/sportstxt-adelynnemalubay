import Button from "./Button"

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border fixed-top bg-white">
      <div className="container">
        <span className="navbar-brand">
          <img 
            src="../src/assets/logo.png" 
            alt="MyApp Logo" 
            height="40"
            className="d-inline-block align-top"
          />
        </span>
        <div className="d-flex gap-4">
          <span className="navbar-brand fw-semibold nav-link-custom">
            Home
          </span>
          <span className="navbar-brand fw-semibold nav-link-custom">
            Features
          </span>
          <span className="navbar-brand fw-semibold nav-link-custom">
            About Us
          </span>
          <span className="navbar-brand fw-semibold nav-link-custom">
            Contact Us
          </span>
          <div className="d-flex gap-2">
            <Button text="Join" className="btn-primary" />
            <Button text="Login" className="btn-border" />
          </div>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar
