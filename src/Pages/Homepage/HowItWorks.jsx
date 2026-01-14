import { useState } from "react";

function HowItWorks() {
  const [hoveredId, setHoveredId] = useState(null);

  const steps = [
    { id: 1, title: "Onboard", text: "Integrate your club’s database and branding effortlessly", defaultColor: "#001d3d" },
    { id: 2, title: "Customise", text: "Launch tailored spaces for your specific fan segments", defaultColor: "#001d3d" },
    { id: 3, title: "Engage", text: "Deliver exclusive content and interact in real-time", defaultColor: "#001d3d" },
    { id: 4, title: "Grow", text: "Unlock new streams and fan insights", defaultColor: "#001d3d" },
  ];

  const activeRed = "#E63946";

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#F6F7F8" }}>
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold" style={{ color: "#001d3d" }}>How It Works</h1>
      </div>

      <div className="container position-relative mt-5">
        {/* Progress Line: Adjusted left/right to 12.5% to hit the center of 4 columns exactly */}
        <div 
          className="position-absolute d-none d-md-block" 
          style={{ 
            height: "2px", 
            backgroundColor: "#D1D5DB", 
            top: "30px", // Exact center of the 60px box
            left: "12.5%", 
            right: "12.5%", 
            zIndex: 0 
          }} 
        />

        <div className="row justify-content-center g-0 position-relative" style={{ zIndex: 1 }}>
          {steps.map((step) => {
            const isHovered = hoveredId === step.id;
            // Highlighted if hovered OR if it's the 3rd step (per your reference image)
            const isRed = isHovered;
            const currentColor = isRed ? activeRed : step.defaultColor;

            return (
              <div 
                key={step.id} 
                className="col-12 col-md-3 text-center"
                onMouseEnter={() => setHoveredId(step.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{ cursor: "pointer" }}
              >
                <div className="d-flex flex-column align-items-center">
                  
                  {/* Number Box */}
                  <div 
                    className="d-flex align-items-center justify-content-center mb-3 fw-bold text-white shadow-sm"
                    style={{ 
                      width: "60px", 
                      height: "60px", 
                      backgroundColor: currentColor, 
                      borderRadius: "12px",
                      fontSize: "1.5rem",
                      transition: "all 0.3s ease-in-out",
                      zIndex: 2
                    }}
                  >
                    {step.id}
                  </div>

                  {/* Title */}
                  <h5 
                    className="fw-bold mb-2" 
                    style={{ 
                      color: isRed ? activeRed : "#1A1A1A",
                      transition: "all 0.3s ease-in-out" 
                    }}
                  >
                    {step.title}
                  </h5>

                  {/* Description */}
                  <p 
                    className="small fw-semibold px-3" 
                    style={{ 
                        color: "#728496", 
                        lineHeight: "1.5",
                        maxWidth: "250px" 
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;