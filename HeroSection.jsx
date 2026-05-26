import { Link } from "react-router-dom";
import NeuralGrid from "./NeuralGrid";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <NeuralGrid />

      <div className="hero-content">
        <div className="badge">Next-Gen App Development</div>

        <img
          src="/images/brain.png"
          alt="AI Brain"
          className="hero-brain"
        />

        <h1>
          Welcome to <span>Neurozy</span>
        </h1>

        <p className="hero-desc">
          Building a billion-dollar software ecosystem with intelligent,
          scalable AI-driven applications.
        </p>

        <div className="hero-actions">
          <Link to="/about" className="hero-btn">
            Get Started
          </Link>
          <Link to="/products" className="secondary-btn">
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
