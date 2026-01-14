import IconCard from "../../components/IconCard";

function Platform() {
  return (
    <div className="container-fluid w-full overflow-hidden position-relative py-5" style={{ backgroundColor: "#f9fafb" }}>
      
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
          WebkitMaskImage: "radial-gradient(circle at center, black 10%, transparent 80%)",
          maskImage: "radial-gradient(circle at center, black 10%, transparent 80%)",
          zIndex: 0,
          top: 0,
          left: 0
        }}
      />

      {/* Content Layer */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        
        {/* Header Section */}
        <div className="row justify-content-center mb-5">
          <div className="col-12 col-lg-8 d-flex flex-column align-items-center text-center">
            {/* Responsive font size for the header */}
            <h1 className="display-5 display-md-4 fw-bold mb-3" style={{ color: "#001d3d" }}>
              The Platform of Firsts
            </h1>
            <p 
              className="fw-bold" 
              style={{ 
                color: "#728496", 
                maxWidth: "700px", 
                lineHeight: "1.6" 
              }}
            >
              Our framework is built on four core pillars that prioritize what matters most to professional sports organizations.
            </p>
          </div>
        </div>

        {/* Responsive Grid for IconCards */}
        {/* g-4 provides consistent spacing between cards */}
        <div className="row g-4 justify-content-center">
          
          <div className="col-12 col-md-6 d-flex">
            <IconCard 
              cardName="Members First"
              text="It's time to elevate your fan engagement beyond just using social media and SportsTXT brings your members straight into the heart of your club through exclusive stories, new experiences, games and unique offers."
              icon={<i className="bi bi-people-fill fs-2"></i>}
            />
          </div>

          <div className="col-12 col-md-6 d-flex">
            <IconCard 
              cardName="Safety First"
              text="SportsTXT offers 24/7 protection for sports clubs with real-time monitoring and content analysis powered by a combination of human expertise and AI technology."
              icon={<i className="bi bi-shield-fill-check fs-2"></i>}
            />
          </div>

          <div className="col-12 col-md-6 d-flex">
            <IconCard 
              cardName="Data First"
              text="Contrary to social media, you have full ownership of your data. Your personal dashboard collects and analyzes important insights about members' usage of the platform."
              icon={<i className="bi bi-database-fill fs-2"></i>}
            />
          </div>

          <div className="col-12 col-md-6 d-flex">
            <IconCard 
              cardName="Value First"
              text="By making a few small tweaks in the way you present your content, you will be amazed at how it can significantly boost your profits."
              icon={<i className="bi bi-cash fs-2"></i>}
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Platform;