import "./ServiceHero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ServiceHero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="serviceHero">
      <div className="serviceHero-overlay"></div>
      <div className="container serviceHero-content d-flex align-items-center justify-content-center">
        <div className="text-center text-white">
          <h1 data-aos="fade-right" data-aos-duration="3000">
            Our Services
          </h1>
          <p
            className="lead"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Comprehensive Cost Consulting Solutions Tailored <br /> to Your
            Construction Needs
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
