import Button from "../../components/Button";

function ContactUs() {
  return (
    <div 
      className="container-fluid overflow-hidden py-5" 
      style={{ backgroundColor: "#F6F7F8", minHeight: "100vh" }}
    >
      <div className="container">
        <div className="row justify-content-center mb-5 mt-md-5 mt-5">
          <div className="col-12 d-flex flex-column align-items-center text-center">
            <span className="fw-bold mb-2" style={{ color: "#E63946", letterSpacing: "1px" }}>
              CONTACT US
            </span>
            <h2 className="display-6 fw-bold mb-3" style={{ color: "#001d3d" }}>
              Get in Touch with SportsTXT
            </h2>
            <p 
              className="fw-bold" 
              style={{ 
                color: "#728496", 
                maxWidth: "700px", 
                lineHeight: "1.6" 
              }}
            >
              Whether you’re a sports club looking to engage fans or a partner interested in our technology, 
              our team is ready to support your vision.
            </p>
          </div>
        </div>

        <div className="row justify-content-center align-items-start g-4">
          
          <div className="col-12 col-lg-4 order-1 order-lg-2">
            <div className="bg-white p-4 shadow-sm rounded-4 border">
              <h5 className="fw-bold mb-4" style={{ color: "#001d3d" }}>Our Office</h5>
              <div className="d-flex align-items-start gap-3">
                <div className="rounded-3 p-2 flex-shrink-0" style={{ backgroundColor: "#D1E3FF", display: "flex", alignItems: "center", justifyContent: "center", width: "40px", height: "40px" }}>
                   <i className="bi bi-geo-alt-fill" style={{ color: "#015CA8" }}></i>
                </div>
                <div>
                  <div className="mb-2">
                    <img src="/images/NMSProd_Logo.png" alt="Logo" height="40" className="img-fluid" />
                  </div>
                  <p className="fw-bold mb-1" style={{ color: "#5E718D", fontSize: "0.9rem" }}>
                    NMS PRODUCTIONS EUROPE B.V.
                  </p>
                  <address className="text-secondary mb-0" style={{ fontSize: "0.9rem", fontStyle: "normal", lineHeight: "1.5" }}>
                    Herengracht 257, 1016 BJ,<br />
                    Amsterdam, The Netherlands
                  </address>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7 col-xl-6 order-2 order-lg-1">
            <div className="bg-white p-4 p-md-5 shadow-sm rounded-4 border">
              <h5 className="fw-bold mb-4" style={{ color: "#001d3d" }}>Send us a Message</h5>
              
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-secondary">Full Name</label>
                  <input type="text" className="form-control bg-light border-0 py-2" placeholder="Jane Doe" />
                </div>
                <div className="col-md-6">
                  <label className="form-label small fw-bold text-secondary">Industry</label>
                  <input type="text" className="form-control bg-light border-0 py-2" placeholder="Industry" />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-bold text-secondary">Email</label>
                  <input type="email" className="form-control bg-light border-0 py-2" placeholder="janedoe@example.com" />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-bold text-secondary">Phone</label>
                  <input type="text" className="form-control bg-light border-0 py-2" placeholder="+63" />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-bold text-secondary">Message</label>
                  <textarea className="form-control bg-light border-0 py-2" rows="5" placeholder="Message"></textarea>
                </div>
                <div className="col-12 text-center text-md-start mt-4 d-flex justify-content-center">
                  <Button
                    text="Submit Message"
                    className="btn-primary w-md-auto px-5 py-2"
                    to="/submit"
                  />
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default ContactUs;