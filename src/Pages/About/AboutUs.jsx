function AboutUs() {
  return (
    <div className="container-fluid w-full overflow-hidden position-relative" style={{ backgroundColor: "#f9fafb" }}>
      
      {/* Enhanced Faded Grid Layer */}
      <div
        className="position-absolute inset-0 w-100 h-100"
        style={{
          backgroundImage: `
            linear-gradient(to right, #d1d5db 1px, transparent 1px),
            linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px", 
          opacity: "0.5",              
          WebkitMaskImage: "radial-gradient(circle at center, black 10%, transparent 60%)",
          maskImage: "radial-gradient(circle at center, black 10%, transparent 60%)",
          zIndex: 0,
        }}
      />

      {/* Content Layer */}
      <div className="row g-0 h-100 align-items-center mx-10 position-relative my-5" style={{ zIndex: 1 }}>
        <div className="col-lg-6 px-5">
          <span className="fw-bold" style={{ color: "#E63946" }}>
           ABOUT US
          </span>
          <h1 className="display-4 fw-bold mb-4" style={{ color: "#001d3d" }}>
            An initiative from NMS Productions BV,
          </h1>

          <p className="fw-semibold fs-5 mb-4" style={{ color: "#728496" }}>
            a division of
            New Media Services, a global company specializing in delivering
            intelligent outsourcing services through a combination of machine
            learning and human-powered activities.
            From fans to brands to individual content creators, NMSP designs
            and builds collaborative online platforms for our users to
            communicate, connect, learn, and share.
          </p>
        </div>

        <div className="col-lg-6 h-100">
          <div 
            style={{
              backgroundImage: "url('/images/compiled.png')",
              backgroundSize: "contain", 
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100%",
              minHeight: "500px" 
            }}
            role="img"
            aria-label="Compiled productions showcase"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;