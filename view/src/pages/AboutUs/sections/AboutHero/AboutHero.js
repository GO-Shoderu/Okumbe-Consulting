import "./AboutHero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutHero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="aboutHero">
      <div className="aboutHero-overlay"></div>
      <div className="container aboutHero-content d-flex align-items-center justify-content-center">
        <div className="text-center text-white">
          <h1 data-aos="fade-right" data-aos-duration="3000">
            About Us
          </h1>
          <p
            className="lead"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Expert Cost Consulting Solutions for Every <br /> Construction
            Endeavor
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
