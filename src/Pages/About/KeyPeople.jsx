import ProfileCard from "../../components/ProfileCard";

function KeyPeople() {
  return (
    <div 
      className="container-fluid overflow-hidden py-5" 
      style={{ backgroundColor: "#F6F7F8", minHeight: "60vh" }}
    >
      <div className="container">
        
        <div className="row justify-content-center mb-5">
          <div className="col-12 d-flex flex-column align-items-center">
            <span className="fw-bold mb-2" style={{ color: "#E63946", letterSpacing: "1px" }}>
              KEY PEOPLE
            </span>
            <p 
              className="fw-bold text-center" 
              style={{ 
                color: "#728496", 
                maxWidth: "700px", 
                lineHeight: "1.6",
                fontSize: "clamp(1rem, 2.5vw, 1.25rem)" 
              }}
            >
              Guided by industry veterans in sports technology, digital security, and 
              community management
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          
          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <ProfileCard 
              name="John Doe"
              role="CEO"
              description="20 years in digital infrastructure and media scaling"
              imageUrl="/images/John.png"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <ProfileCard 
              name="Sarah Chen"
              role="VP OF PARTNERSHIPS"
              description="20 years in digital infrastructure and media scaling"
              imageUrl="/images/Sarah.png"
            />
          </div>

          <div className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
            <ProfileCard 
              name="Marcus Wright"
              role="CHIEF TECHNOLOGY OFFICER"
              description="20 years in digital infrastructure and media scaling"
              imageUrl="/images/Marcus.png"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default KeyPeople;