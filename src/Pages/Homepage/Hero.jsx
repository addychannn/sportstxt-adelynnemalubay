import Button from "../../components/Button";
import SportsGrid from "../../components/SportsGrid";

function Hero() {
  return (
    <div className="container-fluid vh-100 w-full overflow-hidden position-relative" style={{ backgroundColor: "#f9fafb" }}>
      
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
      <div className="row g-0 h-100 align-items-center mx-10 position-relative" style={{ zIndex: 1 }}>
        <div className="col-lg-6 px-5">
          <h1 className="display-4 fw-bold mb-4" style={{ color: "#001d3d" }}>
            Creating Value Off the Pitch with a Fan First Engagement Platform
          </h1>

          <p className="fw-semibold fs-4 mb-4" style={{ color: "#728496" }}>
            Become a member. Find fellow fans of your favorite teams!
            Create an account now and join the millions of sports enthusiasts around the world!
          </p>

          <Button
            text="Become a member"
            className="btn-primary px-4 py-2"
          />
        </div>

        <div className="col-lg-6 h-100">
          <SportsGrid />
        </div>
      </div>
    </div>
  );
}

export default Hero;