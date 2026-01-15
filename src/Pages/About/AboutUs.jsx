function AboutUs() {
  return (
    <div className="container-fluid overflow-hidden position-relative py-5" style={{ backgroundColor: "#f9fafb" }}>
      <div
        className="position-absolute w-100 h-100"
        style={{
          top: 0,
          left: 0,
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px", 
          opacity: "0.5",               
          WebkitMaskImage: "radial-gradient(circle at center, black 10%, transparent 80%)",
          maskImage: "radial-gradient(circle at center, black 10%, transparent 80%)",
          zIndex: 0,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row align-items-center g-4">
          
          <div className="col-lg-6 text-center text-lg-start">
            <span className="fw-bold" style={{ color: "#E63946", letterSpacing: "1px" }}>
              ABOUT US
            </span>
            <h1 className="display-5 display-md-4 fw-bold mb-4 mt-2" style={{ color: "#001d3d" }}>
              An initiative from NMS Productions BV,
            </h1>

            <p className="fw-semibold fs-5 mb-4" style={{ color: "#728496", lineHeight: "1.6" }}>
              a division of{" "}
              <span style={{ color: "#E63946" }}>New Media Services</span>, a global company specializing in delivering
              intelligent outsourcing services through a combination of machine
              learning and human-powered activities.
            </p>
            <p className="fw-semibold fs-5 mb-0" style={{ color: "#728496", lineHeight: "1.6" }}>
              From fans to brands to individual content creators, NMSP designs
              and builds collaborative online platforms for our users to
              communicate, connect, learn, and share.
            </p>
          </div>

          <div className="col-lg-6">
            <div 
              style={{
                backgroundImage: "url('/images/compiled.png')",
                backgroundSize: "contain", 
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                width: "100%",
                height: "clamp(300px, 50vh, 500px)" 
              }}
              role="img"
              aria-label="Compiled productions showcase"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutUs;