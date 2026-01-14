function AboutUsBanner() {
  const bannerStyle = {
    // Adding a linear gradient overlay makes the image look premium and improves contrast
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url('/images/player.avif')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "60vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const textStyle = {
    // Clamp makes the font scale: Min 80px, Preferred 18vw, Max 250px
    fontSize: "clamp(80px, 18vw, 250px)",
    lineHeight: "0.8", 
    letterSpacing: "-0.05em", 
    opacity: "0.3", // Low opacity for that "watermark" background look
    whiteSpace: "nowrap",
    userSelect: "none", // Prevents users from accidentally highlighting the giant text
  };

  return (
    <div 
      className="container-fluid p-0 overflow-hidden position-relative" 
      style={bannerStyle}
    >
      <h1 
        className="text-white fw-black m-0 text-center"
        style={textStyle}
      >
        ABOUT US
      </h1>
      
     
    </div>
  );
}

export default AboutUsBanner;