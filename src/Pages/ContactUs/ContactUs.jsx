import Button from "../../components/Button";

function ContactUs() {
  return (
    <div 
      className="container-fluid overflow-hidden d-flex align-items-center justify-content-center" 
      style={{ backgroundColor: "#F6F7F8"}}
    >
      <div className="row justify-content-center my-10">

        <div className="col-12 d-flex flex-column align-items-center ">
          <span className="fw-bold" style={{ color: "#E63946" }}>
            CONTACT US
          </span>
          <span className="fs-4 fw-semibold mb-3" style={{ color: "#001d3d" }}>
            Get in Touch with SportsTXT
          </span>
          <p 
            className="fw-bold text-center" 
            style={{ 
              color: "#728496", 
              maxWidth: "700px", 
              lineHeight: "1.6" 
            }}
          >
            Whether you’re a sports club looking to engage fans or partner interested in our technology, 
            Our team is ready to support your vision.
          </p>
        </div>

        <div className="row justify-content-center align-items-start">
          {/* Form Card */}
          <div className="col-lg-5">
            <div className="bg-white p-4 p-md-5 shadow-sm rounded-4 border">
              <h5 className="fw-bold mb-4" style={{ color: "#001d3d" }}>Send us a Message</h5>
              
              <div className="row g-3">
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
                <div className="col-12 text-center mt-4">
                  <Button
                    text="Submit Message"
                    className="btn-primary px-4 py-2"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Office Card */}
          <div className="col-lg-4">
            <div className="bg-white p-4 shadow-sm rounded-4 border h-100">
              <h5 className="fw-bold mb-4" style={{ color: "#001d3d" }}>Our Office</h5>
              <div className="d-flex align-items-start gap-3">
                <div className="rounded-3 p-2" style={{ backgroundColor: "#D1E3FF", display: "flex", alignItems: "center", justifyContent: "center",   }}>
                   {/* Placeholder for the blue icon in your image */}
                   <i className="bi bi-people-fill" style={{ color: "#015CA8" }}></i>
                </div>
                <div>
                  <div className="mb-2">
                    {/* You would replace this with your actual local SVG/Image logo */}
                    <img src="/images/NMSProd_Logo.png" alt="Logo" height="40" />
                  </div>
                  <p className="fw-bold mb-0" style={{ color: "#5E718D", fontSize: "0.9rem" }}>
                    NMS PRODUCTIONS EUROPE B.V.
                  </p>
                  <address className="text-secondary mb-0" style={{ fontSize: "0.9rem", fontStyle: "normal" }}>
                    Herengracht 257, 1016 BJ,<br />
                    Amsterdam, The Netherlands
                  </address>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;