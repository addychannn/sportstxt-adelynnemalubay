import React, { useState } from "react";

function IconCard({ cardName, text, icon, onClick, className }) {
  const [isHovered, setIsHovered] = useState(false);

  // Colors
  const BRAND_RED = "#E63946";
  const PRIMARY_BLUE = "#015CA8";
  const ICON_BG_DEFAULT = "rgba(1, 92, 168, 0.2)";

  return (
    <div
      className={`h-100 border ${className}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        cursor: onClick ? "pointer" : "default",
        width: "40rem",
        borderRadius: "20px",
        backgroundColor: "#ffffff",
        // Hover Effects
        borderColor: isHovered ? BRAND_RED : "#dee2e6", // Bootstrap default border color
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered 
          ? "0 15px 30px rgba(230, 57, 70, 0.15)" 
          : "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* 30px Padding Container */}
      <div style={{ padding: "30px" }}>
        {/* Icon Container */}
        <div
          className="d-flex align-items-center justify-content-center mb-4"
          style={{
            width: "60px",
            height: "60px",
            // Icon box turns Red with White icon on hover
            backgroundColor: isHovered ? BRAND_RED : ICON_BG_DEFAULT,
            borderRadius: "12px",
            color: isHovered ? "#ffffff" : PRIMARY_BLUE,
            transition: "all 0.3s ease",
          }}
        >
          {/* Ensure the icon renders at the correct size */}
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
              fontSize: "0.95rem",
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