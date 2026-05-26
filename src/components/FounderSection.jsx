import AnimatedSection from "./AnimatedSection";

const FounderSection = () => {
  return (
    <section className="founder-section">
      <AnimatedSection>
        <h2>
          Meet the <span>Founder</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <div className="founder-card">
          <img
            src="/images/Founder.png"
            alt="Founder"
            className="founder-img"
          />

          <div className="founder-text">
            <h3>Raj Kumar</h3>
            <p className="role">Founder & CEO</p>
            <p>
              A visionary technologist building scalable AI systems and
              long-term digital products.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default FounderSection;
