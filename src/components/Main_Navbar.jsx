import Button from "./Button"

function Navbar() {
  return (
    <nav className="navbar border fixed-top bg-white">
      {/* Change mx-10 to mx-auto to center the container itself */}
      <div className="d-flex mx-10 flex-grow-1 justify-content-between">
        
        {/* Logo Section */}
        <span className="navbar-brand">
          <img 
            src="../src/assets/logo.png" 
            alt="MyApp Logo" 
            height="40"
            className="d-inline-block align-top"
          />
        </span>

        {/* Links and Buttons Section - Centered using d-flex and gap */}
        <div className="d-flex align-items-center gap-4">
          <span className="navbar-brand mb-0 fw-semibold nav-link-custom">
            Home
          </span>
          <span className="navbar-brand mb-0 fw-semibold nav-link-custom">
            Features
          </span>
          <span className="navbar-brand mb-0 fw-semibold nav-link-custom">
            About Us
          </span>
          <span className="navbar-brand mb-0 fw-semibold nav-link-custom">
            Contact Us
          </span>
          
          <div className="d-flex gap-2 ms-2">
            <Button text="Join" className="btn-primary" />
            <Button text="Login" className="btn-border" />
          </div>
        </div>
        
      </div>
    </nav>
  )
}

export default Navbar