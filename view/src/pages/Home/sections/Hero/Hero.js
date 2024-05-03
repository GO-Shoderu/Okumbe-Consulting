import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import logo from "../../../../assets/logo/vertical_logo_transparent.png";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="hero-hero">
      <div className="hero-hero-overlay"></div>
      <div className="container hero-hero-content d-flex align-items-center justify-content-center">
        <div className="text-center text-white">
          <h1 data-aos="fade-up" data-aos-duration="3000">
            {/* OKUMBE CONSULTING */}
            <img src={logo} className="heroImage" alt="okumbe logo" />
          </h1>
          {/* <p
            className="lead"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Expert Cost Consulting Solutions for Every Construction Endeavor
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
