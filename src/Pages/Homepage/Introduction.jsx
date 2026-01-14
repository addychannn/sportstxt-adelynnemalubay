import Card from "../../components/Card";

function Introduction() {
  return (
    <div className="container-fluid overflow-hidden" style={{backgroundColor: "#F6F7F8"}}>
      <div className="row w-100 h-100 my-10">
        <div className="d-flex flex-column align-items-center">
          <span className="fw-bold" style={{ color: "#E63946" }}>
           INTRODUCTION
          </span>
          <h1 className="display-4 fw-bold" style={{ color: "#001d3d" }}>
            What is {" "}
            <span>
              <span style={{ color: "#E63946" }}>Sports</span>
              <span style={{ color: "#015CA8" }}>TXT</span>
            </span>
          </h1>
          <div className="mx-10 d-flex flex-column align-items-center">
            <p 
              className="fw-bold text-center" 
              style={{ 
                color: "#728496", 
                maxWidth: "700px", 
                lineHeight: "1.6" 
              }}
            >
              Being a sports fan is not just about watching games. SportsTXT is an online 
              platform designed to deliver the ultimate sports fan experience. Engage 
              with other fans, get insider facts about your favorite teams, and so much more.
            </p>
          </div>
         
        </div>

        <div className="d-flex flex-row gap-3 align-items-center justify-content-center">
          <Card 
            cardName="The Fan Experience"
            text="A dedicated space for exclusive content and meaningful fan-to-fan interactions with real-time engagement."
            image="/images/archer.png"
          />
          <Card 
            cardName="Club Insights"
            text="Powerful analytics that help clubs understand their community’s pulse and drive better decisions."
            image="/images/archer.png"
          />
          <Card 
            cardName="Connected Community"
            text="Breaking down the barriers between professional organizations and their global supporter base."
            image="/images/archer.png"
          />
        </div>

      </div>
    </div>
  );
}

export default Introduction;