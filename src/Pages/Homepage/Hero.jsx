import Button from "../../components/Button";
import SportsGrid from "../../components/SportsGrid";

function Hero() {
  return (
    <div className="container-fluid vh-100 overflow-hidden px-0">
      <div className="row g-0 h-100 align-items-center">
        <div className="col-lg-6 px-5">
          <h1 className="display-4 fw-bold mb-4" style={{ color: "#001d3d" }}>
            Creating Value Off the Pitch with a Fan First Engagement Platform
          </h1>
          <p className="fw-semibold fs-4 mb-4" style={{ color: "#728496" }}>
            Become a member. Find fellow fans of your favorite teams! 
            Create an account now and join the millions of sports enthusiasts around the world!
          </p>
          <Button text="Become a member" className="btn-primary px-4 py-2" />
        </div>

        <div className="col-lg-6 h-100">
          <SportsGrid />
        </div>
      </div>
    </div>
  );
}

export default Hero;