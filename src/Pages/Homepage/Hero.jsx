import Button from "../../components/Button";
import SportsGrid from "../../components/SportsGrid";

function Hero() {
  return (
    <div 
      /* Added 'pt-5 pt-lg-0': Extra padding top on mobile, removed on large screens */
      className="container-fluid vh-lg-100 w-full overflow-hidden position-relative d-flex align-items-center pt-5" 
      style={{ backgroundColor: "#f9fafb" }}
    >
      
      {/* Enhanced Faded Grid Layer */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
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
        }}
      />

      {/* Content Layer */}
      <div className="container position-relative py-5 pt-md-0 pt-lg-0" style={{ zIndex: 1 }}>
        <div className="row g-4 align-items-center">
          
          <div className="col-lg-6 px-3 px-md-5 text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-4" style={{ color: "#001d3d", fontSize: "calc(1.5rem + 2vw)" }}>
              Creating Value Off the Pitch with a Fan First Engagement Platform
            </h1>

            <p className="fw-semibold fs-5 fs-md-4 mb-4" style={{ color: "#728496" }}>
              Become a member. Find fellow fans of your favorite teams!
              Create an account now and join the millions of sports enthusiasts around the world!
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start">
              <Button
                text="Become a member"
                className="btn-primary px-4 py-3"
              />
            </div>
          </div>

          {/* Responsive Visibility: 
              'd-none' hides it by default (mobile).
              'd-lg-block' shows it only on Large screens and up.
          */}
          <div className="col-lg-6 mt-5 mt-lg-0 d-none d-lg-block">
            <div className="px-2">
               <SportsGrid />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;