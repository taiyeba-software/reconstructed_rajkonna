import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { VideoPinSection } from "../components/VideoPinSection"; 
import {AboutSection} from "../components/AboutSection"
import { Product} from "../components/Product";
import { Contact} from "../components/Contact";
import { RajkonnaFooter } from "../components/RajkonnaFooter";


const Home = () => (
  <>
    <div className="min-h-screen  text-foreground overflow-x-hidden bg-star">
      <Navbar />
      {/* Sticky Hero + Video should be isolated */}
      <section className="relative z-[20] min-h-screen">
        <VideoPinSection />
        <HeroSection />
      </section>

    </div>
    
     {/* About section should appear normally, ABOVE z-10 */}
      <section className="relative z-[30]">
        <AboutSection />
        <Product/>
        <Contact/>
        <RajkonnaFooter/>
      </section>
  </>
);

export default Home;