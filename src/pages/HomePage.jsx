import AboutSection from "../components/HomePage/AboutSection";
import FooterSection from "../components/HomePage/FooterSection";
import HeroSection from "../components/HomePage/HeroSection";
import HotPicksSection from "../components/HomePage/HotPicksSection";
import OurFavouriteSection from "../components/HomePage/OurFavouriteSection";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <OurFavouriteSection />
      <HotPicksSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
};

export default HomePage;
