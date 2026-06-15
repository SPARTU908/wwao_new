import React from "react";
import { Link } from "@inertiajs/react";

const Footer = () => {
    return (
        <div>
            <footer className="footer sec-padding">
                <div className="container">
                    <div className="row justify-content-between">
                        {/* Column 1 */}
                        <div className="col-lg-4 col-md-6 mb-4 footer-column">
                            <div className="footer-widget about-widget">
                                <a href="/">
                                    <img
                                        src="/front/wwao-logo.jpeg"
                                        alt="Logo"
                                        width={85}
                                        height={85}
                                    />
                                </a>

                                <p>World Women Awakening Organization</p>

                                <ul className="contact">
                                    {" "}
                                    {/* <li> <i className="fa fa-map-marker"></i> <span>60 Grant Ave. Carteret NJ 0708</span> </li> */}{" "}
                                    <li>
                                        {" "}
                                        <i className="fa fa-phone"></i>{" "}
                                        <span>
                                            {" "}
                                            <a href="tel:8801723801729">
                                                +91 78979 92917
                                            </a>{" "}
                                        </span>{" "}
                                    </li>{" "}
                                    {/* <li>
                                        {" "}
                                        <i className="fa fa-envelope-o"></i>{" "}
                                        <span>
                                            {" "}
                                            <a href="mailto:example@gmail.com">
                                                {" "}
                                                wwaorg@gmail.com{" "}
                                            </a>{" "}
                                        </span>{" "}
                                    </li>{" "} */}
                                </ul>

                                <ul className="social">
                                    <li>
                                        <a href="http://www.facebook.com/">
                                            <i className="fa fa-facebook mt-1"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.google.com/">
                                            <i className="fa fa-google-plus mt-1"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.twitter.com/">
                                            <i className="fa fa-twitter mt-1"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 2 */}
                        <div className="col-lg-4 col-md-6 mb-4 footer-column">
                            <div className="footer-widget">
                                <h3 className="title">Pages</h3>
                                <ul className="menu">
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <Link href="/chapters/10">
                                            अमृतसर चैप्टर
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="/about">About</a>
                                    </li>
                                    <li>
                                        <Link href="/chapters/4">
                                            काशी चैप्टर
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="/contact">Join Us</a>
                                    </li>
                                    <li>
                                        <Link href="/chapters/5">
                                            जम्मू चैप्टर
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#chapters">Chapters</a>
                                    </li>
                                    <li>
                                        <Link href="/chapters/6">
                                            ग्वालियर चैप्टर
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                       <a href="#gallery">Gallery</a>
                                    </li>
                                    <li>
                                        <Link href="/chapters/9">
                                            मेरठ चैप्टर
                                        </Link>
                                    </li>
                                    <li>
                                        {" "}
                                        <a href="#media">Media Coverage</a>
                                    </li>
                                    <li>
                                        <Link href="/chapters/8">
                                            आगरा चैप्टर
                                        </Link>
                                    </li>
                                    <li>
                                       
                                    </li>
                                    <li>
                                        <Link href="/chapters/7">
                                            दिल्ली चैप्टर
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3 */}
                        <div className="col-lg-4 col-md-12 mb-4 footer-column">
                            <div className="footer-widget contact-widget">
                                <h3 className="title">Contact Form</h3>

                                <form className="contact-form">
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        className="form-control mb-2"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="form-control mb-2"
                                    />
                                    <textarea
                                        placeholder="Your Message"
                                        className="form-control mb-2"
                                        rows="4"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="btn btn-primary w-100"
                                    >
                                        Send
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
