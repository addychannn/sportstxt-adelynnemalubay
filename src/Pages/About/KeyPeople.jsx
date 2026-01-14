import ProfileCard from "../../components/ProfileCard";

function KeyPeople() {
  return (
    <div 
      className="container-fluid overflow-hidden d-flex align-items-center justify-content-center" 
      style={{ backgroundColor: "#F6F7F8"}}
    >
      <div className="row justify-content-center my-5 mx-10">
        <div className="col-12 gap-2 d-flex flex-column align-items-center ">
          <span className="fw-bold" style={{ color: "#E63946" }}>
            KEY PEOPLE
          </span>
          <p 
            className="fw-bold text-center" 
            style={{ 
              color: "#728496", 
              maxWidth: "700px", 
              lineHeight: "1.6" 
            }}
          >
            Guided by industry veterans in sports technology, digital security, and 
            community management
          </p>
        </div>

        <div className="d-flex flex-row gap-2 justify-content-center">
          <ProfileCard 
            name="John Doe"
            role="CEO"
            description="20 years in digital infrastructure and media scaling"
            imageUrl="/images/John.png"
          />
          <ProfileCard 
            name="Sarah Chen"
            role="VP OF PARTNERSHIPS"
            description="20 years in digital infrastructure and media scaling"
            imageUrl="/images/Sarah.png"
          />
          <ProfileCard 
            name="Marcus Wright"
            role="CHIEF TECHNOLOGY OFFICER"
            description="20 years in digital infrastructure and media scaling"
            imageUrl="/images/Marcus.png"
          />
        </div>
      </div>
    </div>
  );
}

export default KeyPeople;