import React from "react";
import Header from "./include/Header";
import Footer from "./include/Footer";

const About = () => {
  return (
    <>
      <Header />

      <section className="inner-header">
        <div className="container">
          <div className="row">
            <div className="col-md-12 sec-title colored text-center">
              <h2>ABOUT</h2>
              <ul className="breadcumb">
                <li><a href="/">Home</a></li>
                <li>ABOUT</li>
              </ul>
              <span className="decor">
                <span className="inner"></span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-padding about-content full-sec">
        <div className="container">
          <div className="row">

            <div className="col-lg-5 col-md-12">
              <div className="full-sec-content">

                <div className="sec-title style-two">
                  <h2>More about us</h2>
                  <span className="decor">
                    <span className="inner"></span>
                  </span>
                </div>

                <h3>
                  We Provide Worldwide Charity <br /> Service Since 1978
                </h3>

                <br />

                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>

                <br />

                <p>
                  Since the 1500s, when an unknown printer took a galley of
                  type and scrambled it to make a type specimen book.
                </p>

                <br />

                <a href="/contact" className="thm-btn">
                  Read More
                </a>

              </div>
            </div>

            <div className="col-md-7 d-none d-lg-block text-end">
              <img
                decoding="async"
                src="/about-1.jpg"
                alt="About Us"
                className="img-fluid"
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
