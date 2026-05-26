import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "0", label: "Projects Delivered" },
  { value: "0%", label: "Client Satisfaction" },
  { value: "1+", label: "Years Experience" },
];

const IntroSection = () => {
  return (
    <section className="intro-section">
      <AnimatedSection>
        <div className="intro-wrapper">
       
          <div className="intro-text-block">
            <h2>
              Software that <span>Thinks Ahead</span>
            </h2>

            <p className="intro-text">
              Neurozy builds intelligent, scalable applications with a
              service-first approach and a long-term product vision.
            </p>
          </div>

          <div className="intro-image">
            <img src="/images/intro.jpg" alt="Intro Visual" />
          </div>
        </div>
      </AnimatedSection>

      <div className="stats-grid">
        {stats.map((s) => (
          <AnimatedSection key={s.label}>
            <div className="stat-card">
              <h3>{s.value}</h3>
              <p>{s.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default IntroSection;
