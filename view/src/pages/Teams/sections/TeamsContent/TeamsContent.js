import React from "react";
// import data from "../../../../assets/static_data/about.json";
import ceo from "../../../../assets/image/okumbe_consulting_ceo.jpg";
import worker_1 from "../../../../assets/image/Tshiamo.jpg";
import "./TeamsContent.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const TeamsContent = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // const getRandomValue = () => (Math.random() < 0.5 ? 1000 : 1500);
  return (
    <div className="container-fluid py-3 mt-4">
      <div className="row mt-5">
        <div className="col-xl col-md-12">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-xl col-md-12 d-flex justify-content-center image-container-teams rounded-2"
                data-aos="zoom-in-up"
                data-aos-duration="500"
              >
                <img
                  src={ceo}
                  alt="CEO"
                  className="rounded-2 cropped-image-teams"
                />
              </div>
              <div
                className="col-xl col-md-12 mt-3 mt-md-0 text-center text-xl-start h-100"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                id="aboutOkumDiv"
              >
                <div
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <h2 className="text-primary text-capitalize">
                    Dr James Ouko Okumbe
                  </h2>
                  <hr></hr>
                  <h4 className="text-primary">
                    Director and Managing Quantity Surveyor
                  </h4>
                  <h5 className="text-primary">
                    (FRICS, PrQS, RQS, PMAQS, MBIQS, MBIArb, MBIDP)
                  </h5>
                  <hr></hr>
                </div>

                <div className="text-center justify-content-center text-xl-start">
                  <div className="container px-xl-0 px-5">
                    <div className="row">
                      <div
                        className="col-xl-2 col"
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
                        className="col-xl-2 col"
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
                        className="col-xl-2 col "
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
                        className="col-xl-2 col "
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
                    </div>
                  </div>

                  <br />
                  <div
                    className="mb-5"
                    data-aos="fade-up"
                    data-aos-easing="linear"
                    data-aos-duration="600"
                  >
                    <Link to="/okumbe" className="btn btn-primary ">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl col-md-12">
          <div className="container-fluid">
            <div className="row">
              <div
                className="col-xl col-md-12 d-flex justify-content-center image-container-teams rounded-2"
                data-aos="zoom-in-up"
                data-aos-duration="500"
              >
                <img
                  src={worker_1}
                  alt="Worker"
                  className="rounded-2 cropped-image-teams"
                />
              </div>
              <div
                className="col-xl col-md-12 mt-3 mt-md-0 text-center text-xl-start h-100"
                data-aos="fade-left"
                data-aos-easing="linear"
                data-aos-duration="1500"
                id="aboutOkumDiv"
              >
                <div
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                >
                  <h2 className="text-primary text-capitalize">
                    Mr Tshiamo Matheatsie
                  </h2>
                  <hr></hr>
                  <h4 className="text-primary">Senior Quantity Surveyor</h4>
                  <h5 className="text-primary">(PrQS Candidate)</h5>
                  <hr></hr>
                </div>

                <div className="text-center justify-content-center text-xl-start p-0">
                  <div className="container px-xl-0 px-5">
                    <div className="row">
                      <div
                        className="col-xl-2 col "
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                      >
                        {" "}
                        {/* email */}
                        <span className="socials-spacing">
                          <a
                            href="mailto:tshiamo@okumbeconsulting.co.za"
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
                      {/* <div
                        className="col-xl-2 col "
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="300"
                      > */}{" "}
                      {/* linkedin */}
                      {/* <span className="socials-spacing">
                          <a href="./" target="_blank" rel="noreferrer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              className="socials"
                              width="32px"
                              height="32px"
                            > */}
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      {/* <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                            </svg>
                          </a>
                        </span>
                      </div>{" "} */}
                      {/* <div
                        className="col-xl-2 col "
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="500"
                      > */}{" "}
                      {/* twitter */}
                      {/* <span className="socials-spacing">
                          <a href="./" target="_blank" rel="noreferrer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              className="socials"
                              width="32px"
                              height="32px"
                            > */}
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      {/* <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                            </svg>
                          </a>
                        </span>
                      </div>{" "} */}
                      {/* <div
                        className="col-xl-2 col "
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="250"
                      > */}{" "}
                      {/* instagram */}
                      {/* <span className="socials-spacing">
                          <a href="./" target="_blank" rel="noreferrer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              className="socials"
                              width="32px"
                              height="32px"
                            > */}
                      {/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}
                      {/* <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
                            </svg>
                          </a>
                        </span>
                      </div> */}
                      <div
                        className="col-xl-2 col "
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="250"
                      >
                        {" "}
                        {/* facebook */}
                        <span className="socials-spacing">
                          <a
                            href="https://www.facebook.com/matheatsie"
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
                        className="col-xl-2 col "
                        data-aos="fade-up"
                        data-aos-easing="linear"
                        data-aos-duration="250"
                      >
                        {" "}
                        {/* contact */}
                        <span className="socials-spacing">
                          <a
                            href="https://wa.me/+27792251408"
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
                <br />

                <div
                  className="mb-5"
                  data-aos="fade-up"
                  data-aos-easing="linear"
                  data-aos-duration="600"
                >
                  <Link to="/matheatsie" className="btn btn-primary ">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsContent;
