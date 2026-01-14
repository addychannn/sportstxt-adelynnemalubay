import React, { useState } from "react";

function IconCard({ cardName, text, icon, onClick, className }) {
  const [isHovered, setIsHovered] = useState(false);

  // Colors
  const BRAND_RED = "#E63946";
  const PRIMARY_BLUE = "#015CA8";
  const ICON_BG_DEFAULT = "rgba(1, 92, 168, 0.2)";

  return (
    <div
      className={`h-100 border w-100 ${className}`} // Added w-100 to fill the parent column
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: onClick ? "pointer" : "default",
        // REMOVED fixed 40rem width. Added maxWidth for large screens if needed.
        maxWidth: "100%", 
        borderRadius: "20px",
        backgroundColor: "#ffffff",
        borderColor: isHovered ? BRAND_RED : "#dee2e6",
        // Disable hover transform on mobile to prevent weird jumping on touch
        transform: isHovered && window.innerWidth > 768 ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered 
          ? "0 15px 30px rgba(230, 57, 70, 0.15)" 
          : "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Responsive Padding: 20px on mobile, 30px on desktop */}
      <div style={{ padding: window.innerWidth < 768 ? "20px" : "30px" }}>
        
        {/* Icon Container */}
        <div
          className="d-flex align-items-center justify-content-center mb-4"
          style={{
            width: "60px",
            height: "60px",
            backgroundColor: isHovered ? BRAND_RED : ICON_BG_DEFAULT,
            borderRadius: "12px",
            color: isHovered ? "#ffffff" : PRIMARY_BLUE,
            transition: "all 0.3s ease",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            {icon}
          </div>
        </div>

        {/* Content Section */}
        {cardName && (
          <h5 className="fw-bold fs-5 mb-2" style={{ color: "#1A1A1A" }}>
            {cardName}
          </h5>
        )}

        {text && (
          <p
            className="fw-semibold mb-0"
            style={{
              color: "#728496",
              // Slightly smaller font for mobile readability
              fontSize: window.innerWidth < 768 ? "0.9rem" : "0.95rem",
              lineHeight: "1.6",
            }}
          >
            {text}
          </p>
        )}
      </div>
    </div>
  );
}

export default IconCard;