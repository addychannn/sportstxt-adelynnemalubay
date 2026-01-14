import Button from "../components/Button";

function CTA() {
  const sectionStyle = {
    backgroundImage: "url('/images/CTA_BG.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "400px" 
  };

  return (
    <div className="container-fluid py-5" style={sectionStyle}>
      <div className="d-flex flex-column justify-content-center align-items-center text-center my-10 gap-4">
        <h1 className="display-4 fw-bold" style={{ color: "#ffffff" }}>
          Build A Unified Community with SportsTXT
        </h1>
        <span className="fw-bold" style={{ color: "#ffffff" }}>
          Join the growing list of clubs that are 
          taking control of their digital future
        </span>
        <Button
          text="Get in Touch"
          className="btn-primary px-4 py-2"
        />
      </div>
    </div>
  );
}

export default CTA;