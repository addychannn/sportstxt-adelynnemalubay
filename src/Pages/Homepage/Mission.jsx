import IconCard from "../../components/IconCard";

function Mission() {
  return (
    <div className="container-fluid w-full overflow-hidden position-relative" style={{ backgroundColor: "#f9fafb" }}>
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

      <div className="column row-md g-0 h-100 align-items-center mx-4 mx-md-10 position-relative" style={{ zIndex: 1 }}>
       <div className="row w-100 h-100 py-5 my-md-10">
        <div className="d-flex flex-column align-items-center">
          <h1 className="display-4 fw-bold" style={{ color: "#001d3d" }}>
            Our Mission
          </h1>
          <div className="mx-2 mx-md-10 d-flex flex-column align-items-center">
            <p 
              className="fw-bold text-center" 
              style={{ 
                color: "#728496", 
                maxWidth: "700px", 
                lineHeight: "1.6" 
              }}
            >
              To provide a seamless interaction platform where safety and community come first, empowering clubs to own their audience
            </p>
          </div>
         
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-center gap-2">
          <IconCard 
            cardName="Seamless Interaction"
            text="Effortless communication between the club and the fans, eliminating noise from social media platforms."
            icon={<i className="bi bi-people-fill fs-2"></i>}
          />
          <IconCard 
            cardName="Safe Communities"
            text="Moderated, secure environments built on trust and mutual respect, protecting fans and athletes."
            icon={<i className="bi bi-shield-fill-check fs-2"></i>}
          />
        </div>     
       
      </div>
      </div>
    </div>
  );
}

export default Mission;