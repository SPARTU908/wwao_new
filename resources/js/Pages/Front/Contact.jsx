import React from "react";
import Header from "./include/Header";
import Footer from "./include/Footer";

const Contact = () => {
    return (
        <div>
            <Header />

            <section className="inner-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 sec-title colored text-center">
                            <h2>Contact</h2>
                            <ul className="breadcumb">
                                <li>
                                    <a href="../index.html">Home</a>
                                </li>
                                <li>Contact</li>
                            </ul>
                            <span className="decor">
                                <span className="inner"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="contact-section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form-wrapper shadow p-4 rounded">
                                <h3 className="text-center mb-4">Get in Touch</h3>

                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Name"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Your Email"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Subject"
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <textarea
                                            className="form-control"
                                            rows="5"
                                            placeholder="Your Message"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary px-5">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
