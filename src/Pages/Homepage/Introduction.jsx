import Card from "../../components/Card";

function Introduction() {
  return (
    <div className="container-fluid overflow-hidden py-5" style={{ backgroundColor: "#F6F7F8" }}>
      {/* Use a container to center the content block and handle horizontal padding */}
      <div className="container">
        
        {/* Header Section */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-12 d-flex flex-column align-items-center">
            <span className="fw-bold mb-2" style={{ color: "#E63946", letterSpacing: "1px" }}>
              INTRODUCTION
            </span>
            
            <h1 className="display-5 display-md-4 fw-bold mb-4" style={{ color: "#001d3d" }}>
              What is {" "}
              <span className="text-nowrap">
                <span style={{ color: "#E63946" }}>Sports</span>
                <span style={{ color: "#015CA8" }}>TXT</span>
              </span>
            </h1>

            <p 
              className="fw-bold text-center" 
              style={{ 
                color: "#728496", 
                maxWidth: "700px", 
                lineHeight: "1.6",
                fontSize: "clamp(1rem, 1.2vw, 1.1rem)" 
              }}
            >
              Being a sports fan is not just about watching games. SportsTXT is an online 
              platform designed to deliver the ultimate sports fan experience. Engage 
              with other fans, get insider facts about your favorite teams, and so much more.
            </p>
          </div>
        </div>

        {/* Cards Section: Using Grid for better centering and wrapping */}
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <Card 
              cardName="The Fan Experience"
              text="A dedicated space for exclusive content and meaningful fan-to-fan interactions with real-time engagement."
              image="/images/fans.avif"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <Card 
              cardName="Club Insights"
              text="Powerful analytics that help clubs understand their community’s pulse and drive better decisions."
              image="/images/group.avif"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <Card 
              cardName="Connected Community"
              text="Breaking down the barriers between professional organizations and their global supporter base."
              image="/images/community.avif"
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Introduction;