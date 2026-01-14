
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import Introduction from "./Introduction";
import Mission from "./Mission";
import Platform from "./Platform";


function Homepage() {
  return (
    <div>
      <Hero />
      <Introduction />
      <Mission />
      <HowItWorks />
      <Platform />
    </div>
  );
}

export default Homepage;