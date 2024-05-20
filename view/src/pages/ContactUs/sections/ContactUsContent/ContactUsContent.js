import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUsContent.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import companyProfile from "../../../../assets/profile/Okumbe_Consulting_Company_Profile.pdf";
// import { Link } from "react-router-dom";

const ContactUsContent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // const getRandomValue = () => (Math.random() < 0.5 ? 1000 : 1500);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        form.current,
        {
          publicKey: `${process.env.REACT_APP_PUBLIC_KEY}`,
        }
      )
      .then(
        () => {
          toast.success("Email sent to Okumbe Consulting Quantity Surveyors!");
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    // <div className="container-fluid py-3 mt-4">
    <div className="container py-3 mt-4 bg-light justify-content-center">
      <Toaster position="top-center" reverseOrder={true} />
      {/* <h2
        className="text-primary text-center"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="800"
      >
        CONTACT US
      </h2> */}
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
              <div className="text-center justify-content-center text-xl-start">
                <div className="container px-xl-0 px-5">
                  <div className="row">
                    <div
                      className="col-xl-2 col"
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="300"
                    >
                      {" "}
                      {/* linkedin */}
                      <span className="socials-spacing">
                        <a
                          href="https://www.linkedin.com/company/okumbe-consulting-pty-ltd/?viewAsMember=true"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="socials"
                            width="32px"
                            height="32px"
                          >
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                          </svg>
                        </a>
                      </span>
                    </div>{" "}
                    <div
                      className="col-xl-2 col "
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="500"
                    >
                      {" "}
                      {/* twitter */}
                      <span className="socials-spacing">
                        <a
                          href="https://twitter.com/OkumbeQS"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="socials"
                            width="32px"
                            height="32px"
                          >
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                          </svg>
                        </a>
                      </span>
                    </div>{" "}
                    <div
                      className="col-xl-2 col "
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="250"
                    >
                      {" "}
                      {/* instagram */}
                      <span className="socials-spacing">
                        <a
                          href="https://www.instagram.com/okumbeqs/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="socials"
                            width="32px"
                            height="32px"
                          >
                            {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                            <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                    <div
                      className="col-xl-2 col "
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="250"
                    >
                      {" "}
                      {/* contact */}
                      <span className="socials-spacing">
                        <a
                          href="https://wa.me/+27665342204"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="socials"
                            width="32px"
                            height="32px"
                          >
                            {/*<!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}
                            <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                    <div
                      className="col-xl-2 col "
                      data-aos="fade-up"
                      data-aos-easing="linear"
                      data-aos-duration="250"
                    >
                      {" "}
                      {/* document */}
                      <span className="socials-spacing">
                        <a
                          href={companyProfile}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            className="socials"
                            width="32px"
                            height="32px"
                          >
                            {/*<!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}
                            <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12">
          <div
            className="text-center mt-3"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="250"
          >
            <h2>
              <span className="text-primary">CONTACT US</span>
            </h2>
            <p className="lead">Questions to ask? Send us an email...</p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form ref={form} onSubmit={sendEmail}>
                {/* <label for="email" className="form-label">
                  Email address:
                </label> */}
                <div
                  className="input-group mb-4"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="250"
                >
                  <span className="input-group-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="socials-contactUs"
                      width="20PX"
                      height="20PX"
                    >
                      {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="email"
                    name="user_email"
                    className="form-control"
                    placeholder="e.g. mario@example.com"
                  />
                </div>
                {/* <label for="name" className="form-label">
                  Name:
                </label> */}
                <div
                  className="mb-0 input-group"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="250"
                >
                  <span className="input-group-text">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      className="socials-contactUs"
                      width="20PX"
                      height="20PX"
                    >
                      {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="form-control"
                    placeholder="e.g. Mario"
                  />
                </div>
                <div
                  className="mb-4 mt-3 form-floating"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="250"
                >
                  <textarea
                    className="form-control"
                    id="query"
                    name="user_message"
                    style={{ height: "140px" }}
                    placeholder="query"
                  ></textarea>
                  <label htmlFor="query">Your message...</label>
                </div>
                <div
                  className="mb-4 text-center"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="250"
                >
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ContactUsContent;
