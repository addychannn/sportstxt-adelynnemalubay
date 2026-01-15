function AboutUsBanner() {
  const bannerStyle = {
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
    fontSize: "clamp(80px, 18vw, 250px)",
    lineHeight: "0.8", 
    letterSpacing: "-0.05em", 
    opacity: "0.3",
    whiteSpace: "nowrap",
    userSelect: "none",
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