function Footer() {
  return (
    <footer className="container-fluid py-5">
      <div className="row d-flex justify-content-center text-center text-md-start">
        
        {/* Branding Column */}
        <div className="col-12 col-md-3 mb-4 d-flex flex-column align-items-center align-items-md-start">
          <div className="mb-2">
            <img 
              src="/images/logo.png" 
              alt="SportsTXT" 
              height="40"
              className="d-inline-block align-top"
            />
          </div>
          <p className="fw-medium" style={{ maxWidth: "250px", color: "#728496" }}>
            Creating Value Off the Pitch with a Fan First Engagement Platform
          </p>
        </div>

        {/* Product Column */}
        <div className="col-6 col-md-2 mb-4">
          <h5 className="fw-bold" style={{ color: "#001d3d" }}>Product</h5>
          <ul className="list-unstyled d-flex flex-column gap-2" style={{ color: "#728496" }}>
            <li>Features</li>
            <li>Roadmap</li>
            <li>Security</li>
            <li>Clubs</li>
          </ul>
        </div>

        {/* Company Column */}
        <div className="col-6 col-md-2 mb-4">
          <h5 className="fw-bold" style={{ color: "#001d3d" }}>Company</h5>
          <ul className="list-unstyled d-flex flex-column gap-2" style={{ color: "#728496" }}>
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Connect Column */}
        <div className="col-12 col-md-2 mb-4">
          <h5 className="fw-bold" style={{ color: "#001d3d" }}>Connect</h5>
          <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-5" style={{ color: "#728496" }}>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
          </div>
        </div>
      </div>
      
      <div>
        <div className="col-12 text-center pt-4">
          <p className="fw-semibold" style={{ color: "#728496" }}>© 2026 SportsTXT Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;