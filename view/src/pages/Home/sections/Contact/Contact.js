import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  useEffect(() => {
    AOS.init();

    const handleResize = () => {
      const width = window.innerWidth;
      const dataAos = width < 1200 ? "fade-up" : "fade-left"; // Example breakpoint at 992px

      document.getElementById("contactDiv").setAttribute("data-aos", dataAos);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="container py-3 mt-4 bg-light">
      <h2
        className="text-primary text-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        CONTACT US
      </h2>
      <div className="row mt-4">
        <div
          className="col d-none d-xl-flex justify-content-center px-5 map rounded"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          <iframe
            title="Okumbe Consulting"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4879079519596!2d28.309787076318088!3d-25.75444314580954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e955e328bfa6fed%3A0xdbcf23e55e316b30!2sx%2013%2C%20442%20Pecan%20Pl%20St%2C%20Die%20Wilgers%2C%20Pretoria%2C%200184!5e0!3m2!1sen!2sza!4v1713951399007!5m2!1sen!2sza"
            width="550"
            height="400"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded map"
          ></iframe>
        </div>
        <div
          className="col"
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          id="contactDiv"
        >
          <div className="card bg-light">
            <div className="card-body text-center text-xl-start">
              <h5 className="card-title text-primary">GET IN TOUCH</h5>
              <br />
              <p className="card-text">
                Whether you have questions about our services, want to discuss a
                potential project, or simply need more information, we're here
                to help. Get in touch with us today to start the conversation.
              </p>
              <br />
              <h5 className=" text-primary">PHYSICAL ADDRESS</h5>
              <p className="card-text">
                442 Pecan Place St, <br /> Die Wilgers x 13, <br />
                Pretoria 0184
              </p>
              <br />
              <div
                className="text-center text-xl-start"
                data-aos="fade-up"
                data-aos-easing="linear"
                data-aos-duration="800"
              >
                <Link to="/contact" className="btn btn-primary ">
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
