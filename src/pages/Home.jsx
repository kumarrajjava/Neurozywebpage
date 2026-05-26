import HeroSection from "../components/HeroSection";
import IntroSection from "../components/IntroSection";
import FounderSection from "../components/FounderSection";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="page home">
      <HeroSection />
      <IntroSection />
      <FounderSection />
    </section>
  );
};

export default Home;
