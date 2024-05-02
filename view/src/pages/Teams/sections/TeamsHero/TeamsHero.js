import "./TeamsHero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const TeamsHero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="teamsHero">
      <div className="teamsHero-overlay"></div>
      <div className="container teamsHero-content d-flex align-items-center justify-content-center">
        <div className="text-center text-white">
          <h1 data-aos="fade-right" data-aos-duration="3000">
            Our Team
          </h1>
          <p
            className="lead"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Meet Our Expert Team: Driven Professionals Dedicated to Delivering
            <br />
            Excellence in Quantity Surveying and Project Management
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamsHero;
