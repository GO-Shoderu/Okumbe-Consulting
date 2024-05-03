import "./ContactUsHero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactUsHero = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="contactUsHero">
      <div className="contactUsHero-overlay"></div>
      <div className="container contactUsHero-content d-flex align-items-center justify-content-center">
        <div className="text-center text-white">
          <h1 data-aos="fade-right" data-aos-duration="3000">
            Contact Us
          </h1>
          <p
            className="lead"
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            At Okumbe Consulting, we're here to help with all your quantity{" "}
            <br /> surveying and project management needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHero;
