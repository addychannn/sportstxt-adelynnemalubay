import IconCard from "../../components/IconCard";

function Platform() {
  return (
    <div className="container-fluid w-full overflow-hidden position-relative" style={{ backgroundColor: "#f9fafb" }}>
      
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
       <div className="row w-100 h-100 my-10">
        <div className="d-flex flex-column align-items-center">
          <h1 className="display-4 fw-bold" style={{ color: "#001d3d" }}>
            The Platform of Firsts
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
              Our framework is built on four core pillars that prioritize what matters most to professional sports organizations            </p>
          </div>
         
        </div>
        <div className="d-flex flex-column gap-2">
          <div className="d-flex flex-row justify-content-center gap-2">
            <IconCard 
              cardName="Members First"
              text="It's time to elevate your fan engagement beyond just using social media and SportsTXT brings your members straight into the heart of your club through exclusive stories, new experiences, games and unique offers."
              icon={<i className="bi bi-people-fill fs-2"></i>}
            />
            <IconCard 
              cardName="Safety First"
              text="SportsTXT offers 24/7 protection for sports clubs with real-time monitoring and content analysis powered by a combination of human expertise and AI technology. With SportsTXT, clubs can be confident in the quality and safety of their reputation and all user-generated content."
              icon={<i className="bi bi-shield-fill-check fs-2"></i>}
            />
          </div>     
          <div className="d-flex flex-row justify-content-center gap-2">
            <IconCard 
              cardName="Data First"
              text="Contrary to social media, you have full ownership of your data. Your personal dashboard collects and analyzes important insights about members' usage of the platform, demographics and other data to help you make better business decisions."
              icon={<i className="bi bi-database-fill fs-2"></i>}
            />
            <IconCard 
              cardName="Value First"
              text="By making a few small tweaks in the way you present your content, you will be amazed at how it can significantly boost your profits. You have the opportunity to set your content prices based on your own judgment and enhance its worth with the support of sponsors."
              icon={<i className="bi bi-cash fs-2"></i>}
            />
          </div>     
        </div>
      </div>
      </div>
    </div>
  );
}

export default Platform;