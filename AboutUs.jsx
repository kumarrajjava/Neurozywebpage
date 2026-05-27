import { useEffect, useRef, useState } from "react";
import "../styles/AboutUs.css";

const sections = [
  {
    title: "Services",
    image: "/images/about-card-1.jpg",
    content: [
      "Android App Development",
      "Custom App Logic",
      "Feature Enhancements",
      "App Maintenance",
    ],
  },
  {
    title: "Website Role",
    image: "/images/about-card-2.jpg",
    description:
      "Acts as the official company identity and onboarding platform for clients.",
  },
  {
    title: "Development Approach",
    image: "/images/about-card-3.jpg",
    content: [
      "Requirement Analysis",
      "UI/UX Planning",
      "Clean Development",
      "Testing & Support",
    ],
  },
  {
    title: "Future Vision",
    image: "/images/about-card-4.jpg",
    description:
      "Launch scalable products under the Neurozy brand.",
  },
  {
    title: "Why This Model?",
    image: "/images/about-card-5.jpg",
    description:
      "Service-first approach builds experience before product scaling.",
  },
  {
    title: "The Neurozy Dream",
    image: "/images/about-card-6.jpg",
    description:
      "Grow into a billion-dollar technology company.",
  },
];



const AboutUs = () => {
  const [visible, setVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );

    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="page about">
   
      <div className="about-hero">
        <h2>
          About <span>Us</span>
        </h2>
        <p>
          Neurozy builds intelligent, scalable applications for clients with a
          strong service-first mindset.
        </p>
      </div>

  
      <div
        ref={gridRef}
        className={`about-cards ${visible ? "show" : ""}`}
      >
        {sections.map((sec, index) => (
          <div key={index} className="info-card">
            <img src={sec.image} alt={sec.title} />

            <h3>{sec.title}</h3>

            {sec.content ? (
              <ul>
                {sec.content.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{sec.description}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
