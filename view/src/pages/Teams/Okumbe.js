import TeamsHero from "./sections/TeamsHero/TeamsHero";
import ceo from "../../assets/image/okumbe_consulting_ceo.jpg";
import "./Teams.css";

const Okumbe = () => {
  return (
    <div>
      <TeamsHero />
      <div className="row">
        <div
          className="col-12 align-content-center text-center justify-content-center image-container-teams rounded-2 mt-5"
          data-aos="zoom-in-up"
          data-aos-duration="500"
        >
          <img
            src={ceo}
            alt="CEO"
            className="img-fluid rounded-2 cropped-image-teams px-2"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="col-12 col-md-12 px-5 text-center h-100">
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="mt-3"
          >
            <h2 className="text-primary text-capitalize">
              Dr James Ouko Okumbe
            </h2>
            <hr className="hr"></hr>
            <h4 className="text-primary mt-3">
              Director and Managing Quantity Surveyor
            </h4>
            <h5 className="text-primary">
              (FRICS, PrQS, RQS, PMAQS, MBIQS, MBIArb, MBIDP)
            </h5>
            <hr className="hr"></hr>
          </div>

          <div className="container mt-4">
            <div data-aos="fade-up" data-aos-duration="500">
              <p>
                Meet Dr. James Ouko Okumbe (FRICS), a seasoned leader in the
                world of quantity surveying and construction management. With
                over 27 years of hands-on experience, Dr. Okumbe brings a wealth
                of expertise to every project he undertakes. His knack for
                strategic thinking, combined with his deep understanding of
                public policy, ensures that projects not only meet but exceed
                expectations.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="500">
              <p>
                As the driving force behind Okumbe Consulting (Pty) Ltd Quantity
                Surveyors & Project Managers, Dr. Okumbe has spearheaded a
                diverse range of projects, from large-scale contracts to the
                construction of vital community infrastructure. His keen eye for
                detail and expert management skills have consistently delivered
                projects on time and within budget.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="500">
              <p>
                But Dr. Okumbe's impact doesn't stop there. With a background in
                academia, including roles as a Senior Lecturer at renowned
                institutions, he's dedicated to shaping the next generation of
                industry professionals. His commitment to excellence extends
                beyond the boardroom, evidenced by his active involvement in
                prestigious professional organizations like he being a Fellow
                Chartered Quantity Surveyor registered with the Royal
                Institution of Chartered Surveyors (RICS), Chartered Institute
                of Building (CIOB), Professional Member of the South African
                Council for Quantity Surveying Profession (PrQS, RQS, PMAQS),
                Member of Botswana Institute of Development Professions (MBIDP),
                Member of Botswana Institute for Quantity Surveyors (MBIQS) &
                MBIArB among others.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="500">
              <p>
                For unparalleled expertise in quantity surveying and
                construction management, look no further than Dr. James Ouko
                Okumbe (FRICS). With him at the helm, your projects are in the
                hands of a true industry leader.
              </p>
            </div>

            <hr className="hr"></hr>
          </div>

          <div className="text-center justify-content-center mt-4">
            <div className="container px-xl-0 px-5">
              <div className="row justify-content-center">
                <div
                  className=" col-2 col-md-1"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  {" "}
                  {/* email */}
                  <span className="socials-spacing">
                    <a
                      href="mailto:info@okumbeconsulting.co.za"
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
                        {/* <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                      </svg>
                    </a>
                  </span>
                </div>{" "}
                <div
                  className=" col-2 col-md-1"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="300"
                >
                  {" "}
                  {/* linkedin */}
                  <span className="socials-spacing">
                    <a
                      href="https://www.linkedin.com/in/dr-james-okumbe-frics-4143321b6/"
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
                  className=" col-2 col-md-1 "
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  {" "}
                  {/* twitter */}
                  <span className="socials-spacing">
                    <a
                      href="https://twitter.com/JamesOkumbe"
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
                  className=" col-2 col-md-1 "
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="250"
                >
                  {" "}
                  {/* facebook */}
                  <span className="socials-spacing">
                    <a
                      href="https://www.facebook.com/profile.php?id=100010181891769"
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
                        {/*<!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->*/}
                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                      </svg>
                    </a>
                  </span>
                </div>
                <div
                  className="col-2 col-md-1 "
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Okumbe;
