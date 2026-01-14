import React, { useState } from "react";

const BRAND_RED = "#E63946";
const BRAND_BLUE = "#015CA8";

const FeatureCard = ({ title, text, icon, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="p-4 d-flex flex-column h-100 bg-white" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        borderRadius: "16px", 
        border: `1px solid ${isHovered ? BRAND_RED : "#e5e7eb"}`,
        textAlign: "left",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered 
          ? "0 20px 25px -5px rgba(230, 57, 70, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
          : "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        zIndex: isHovered ? 2 : 1
      }}
    >
      <div 
        className="d-flex align-items-center justify-content-center mb-3" 
        style={{ 
          width: "44px", 
          height: "44px", 
          backgroundColor: isHovered ? BRAND_RED : "#DBEAFE", 
          borderRadius: "10px",
          color: isHovered ? "#ffffff" : BRAND_BLUE,
          transition: "all 0.3s ease",
          fontSize: "1.2rem"
        }}
      >
        {icon}
      </div>
      <h5 className="fw-bold" style={{ color: "#0A1D37" }}>{title}</h5>
      <p style={{ color: "#6B7280", fontSize: "0.95rem", lineHeight: "1.5" }}>{text}</p>
      {image && (
        <div className="mt-auto">
          <img 
            src={image} 
            alt={title} 
            className="rounded-3 w-100" 
            style={{ 
              objectFit: 'cover', 
              height: '210px',
              filter: isHovered ? "contrast(1.05) brightness(1.05)" : "none",
              transition: "filter 0.3s ease"
            }} 
          />
        </div>
      )}
    </div>
  );
};

const VideoCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="p-4 bg-white d-flex flex-column flex-md-row gap-4 h-100" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        borderRadius: "16px", 
        border: `1px solid ${isHovered ? BRAND_RED : "#e5e7eb"}`,
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered ? "0 20px 25px -5px rgba(230, 57, 70, 0.1)" : "0 1px 3px rgba(0,0,0,0.1)",
        cursor: "pointer"
      }}
    >
      <div style={{ flex: 1.2 }}>
        <div 
          className="d-flex align-items-center justify-content-center mb-3" 
          style={{ 
            width: "44px", 
            height: "44px", 
            backgroundColor: isHovered ? BRAND_RED : "#DBEAFE", 
            borderRadius: "10px", 
            color: isHovered ? "#ffffff" : BRAND_BLUE,
            transition: "all 0.3s ease",
            fontSize: "1.2rem"
          }}
        >
          <i className="bi bi-camera-video-fill"></i>
        </div>
        <h5 className="fw-bold" style={{ color: "#0A1D37" }}>Video</h5>
        <p className="text-muted" style={{ fontSize: "0.95rem" }}>Make your members feel special by offering them workouts, interviews, live matches, and even behind-the-scenes content.</p>
      </div>
      <div style={{ flex: 1 }}>
        <div className="position-relative h-100">
          <img 
            src="/public/images/basketball.png" 
            className="rounded-3 w-100" 
            alt="Video preview" 
            style={{ height: "180px", objectFit: "cover" }} 
          />
          <div 
            className="position-absolute top-50 start-50 translate-middle d-flex align-items-center justify-content-center"
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "rgba(255,255,255,0.2)",
              borderRadius: "50%",
              backdropFilter: "blur(4px)",
              transition: "transform 0.3s ease",
              transform: isHovered ? "translate(-50%, -50%) scale(1.1)" : "translate(-50%, -50%) scale(1)"
            }}
          >
            <i className="bi bi-play-circle-fill fs-1 text-white"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export function Features() {
  return (
    <section className="container-fluid position-relative overflow-hidden" style={{ backgroundColor: "#ffffff" }}>
      {/* Grid Background */}
      <div
        className="position-absolute inset-0 w-100 h-100"
        style={{
          top: 0, left: 0,
          backgroundImage: `linear-gradient(#f1f1f1 1px, transparent 1px), linear-gradient(90deg, #f1f1f1 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
          zIndex: 0,
          opacity: 0.6
        }}
      />

      <div className="container position-relative my-10" style={{ zIndex: 1 }}>
        <div className="text-center mb-3">
          <span className="fw-bold" style={{ color: BRAND_RED, fontSize: "0.85rem", letterSpacing: "1.5px" }}>FEATURES</span>
          <h2 className="fw-semibold mt-2 mx-auto" style={{ color: "#0A1D37", fontSize: "2rem" }}>
            On SportsTXT, you’ll find a great mix of features enabling sports clubs and athletes to connect directly with their fans.
          </h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <FeatureCard 
              title="Fanzone"
              text="Empower your supporters in the Fanzone, a moderated platform for interaction and involvement. Fans can create public and private subgroups for sharing content and building a supportive community."
              icon={<i className="bi bi-people-fill"></i>}
              image="/public/images/fans.jpg"
            />
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              <div className="col-12">
                <VideoCard />
              </div>
              <div className="col-md-6">
                <FeatureCard title="SMS" text="Send personalized SMS messages straight to your members." icon={<i className="bi bi-chat-dots-fill"></i>} />
              </div>
              <div className="col-md-6">
                <FeatureCard title="Photo" text="Publish photos from games, training sessions or events." icon={<i className="bi bi-image-fill"></i>} />
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <FeatureCard title="Polls" text="Get real-time feedback from your fans. Ask questions and test their knowledge with our online quizzes and voting features." icon={<i className="bi bi-bar-chart-fill"></i>} />
          </div>
          <div className="col-lg-6">
            <FeatureCard title="Podcasts" text="Weekly updates, interviews, or tip of the week? Record a podcast on your phone and share it with your community." icon={<i className="bi bi-broadcast"></i>} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;