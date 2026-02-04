import React from "react";
import Slider from "./include/Slider";
import Footer from "./include/Footer";
// import Preloader from "./include/Preloader";
import sansthapakPhoto from "../../../../public/front/avatar.png";
import Header from "./include/Header";
import GoogleTranslate from "./include/GoogleTranslate";
import LanguageSwitcher from "./include/LanguageSwitcher";

const Home = () => {
    const message = (
        <p className="message-text">
            हम महिलाओं को शिक्षा, कौशल विकास और नेतृत्व के अवसर प्रदान करते हैं।
            <br />
            सशक्त महिलाएँ ही सशक्त समाज और उज्ज्वल भविष्य का निर्माण करती हैं।
            <br />
            हम समान अधिकार, अवसर और सम्मान के लिए निरंतर प्रयासरत हैं।
            <br />
            महिलाओं की जागरूकता और आत्मविश्वास ही समाज में सकारात्मक बदलाव लाते
            हैं।
            <br />
            हम हर महिला की क्षमता को पहचानकर उसे आगे बढ़ने का मंच प्रदान करते
            हैं।
            <br />
            जागृत और सशक्त महिलाएँ ही एक मजबूत और समृद्ध समाज का निर्माण करती
            हैं।
        </p>
    );

    const volunteers = [
        {
            name: "Ashikur Rahman",
            role: "Businessman",
            image: "/front/avatar.png",
        },
        {
            name: "Luke Fray",
            role: "Businessman",
            image: "/front/avatar.png",
        },
        {
            name: "John Peter",
            role: "Businessman",
            image: "/front/avatar.png",
        },
        {
            name: "Muhibbur Rashid",
            role: "Businessman",
            image: "/front/avatar.png",
        },
    ];
    return (
        <div>
            {/* <Preloader/> */}
            {/* <LanguageSwitcher /> */}
            <GoogleTranslate />
            <div className="page-wrapper">
                <Header />

                <div className="mobile-menu">
                    <div className="menu-backdrop"></div>
                    <div className="close-btn">
                        <span className="icon flaticon-remove"></span>
                    </div>

                    <nav className="menu-box">
                        <div className="nav-logo">
                            <a href="index.html" title="Charity Home">
                                <img
                                    src="wp-content/uploads/2022/03/dark-loogo.png"
                                    alt="logo"
                                />
                            </a>
                        </div>
                        <div className="menu-outer">
                            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                        </div>
                        {/* <!--Social Links--> */}
                        <div className="social-links">
                            <ul className="clearfix">
                                <li>
                                    <a
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                            color: "rgb(164, 164, 164)",
                                        }}
                                    >
                                        <span className="fa fa-facebook"></span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.linkedin.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                            color: "rgb(164, 164, 164)",
                                        }}
                                    >
                                        <span className="fa fa-linkedin"></span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.skype.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                            color: "rgb(164, 164, 164)",
                                        }}
                                    >
                                        <span className="fa fa-skype"></span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.twitter.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            backgroundColor: "rgba(0, 0, 0, 0)",
                                            color: "rgb(164, 164, 164)",
                                        }}
                                    >
                                        <span className="fa fa-twitter"></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div
                    data-elementor-type="wp-page"
                    data-elementor-id="12"
                    className="elementor elementor-12"
                >
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-dd52cd3 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="dd52cd3"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2ae0b85"
                                data-id="2ae0b85"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-09f5c1f elementor-widget elementor-widget-slider_revolution"
                                        data-id="09f5c1f"
                                        data-element_type="widget"
                                        data-widget_type="slider_revolution.default"
                                    >
                                        <Slider />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-cf69220 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="cf69220"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f08514d"
                                data-id="f08514d"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-598f90c elementor-widget elementor-widget-charityhome_our_features_v1"
                                        data-id="598f90c"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_our_features_v1.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="call-to-action">
                                                <div className="container-fluid">
                                                    {/* <div className="row no-gutters">
                                                        <div
                                                            className="call-to-action-corner col-lg-4"
                                                            // style="background-image: url(wp-content/uploads/2021/12/left-box-bg.jpg);"
                                                        >
                                                            <div className="single-call-to-action">
                                                                <div className="icon-box">
                                                                    <div className="inner-box">
                                                                        <i className="icon flaticon-coin-1"></i>
                                                                    </div>
                                                                </div>

                                                                <div className="content-box">
                                                                    <h3>
                                                                        Donation
                                                                    </h3>{" "}
                                                                    <p>
                                                                        There
                                                                        are many
                                                                        variations
                                                                        of lorem{" "}
                                                                        <br />
                                                                        passagei
                                                                        of Lorem
                                                                        Ipsum
                                                                        availabl{" "}
                                                                    </p>{" "}
                                                                    <a
                                                                        href="campaigns/charity-for-education/donate/index.html"
                                                                        className="thm-btn inverse"
                                                                    >
                                                                        Donate
                                                                        Now
                                                                    </a>{" "}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="call-to-action-center col-lg-4"
                                                            // style="background-image: url(wp-content/uploads/2021/12/center-box-bg.jpg);"
                                                        >
                                                            <div className="single-call-to-action">
                                                                <div className="icon-box">
                                                                    <div className="inner-box">
                                                                        <i className="icon flaticon-users"></i>
                                                                    </div>
                                                                </div>

                                                                <div className="content-box">
                                                                    <h3>
                                                                        Volunteer
                                                                    </h3>{" "}
                                                                    <p>
                                                                        Vivamus
                                                                        sed
                                                                        pretium
                                                                        elit,
                                                                        quis
                                                                        luctus{" "}
                                                                        <br />
                                                                        urna
                                                                        Curabitur
                                                                        id
                                                                        tempus
                                                                        massa{" "}
                                                                    </p>{" "}
                                                                    <a
                                                                        href="volunteer-style-one/index.html"
                                                                        className="thm-btn inverse"
                                                                    >
                                                                        Join Now
                                                                    </a>{" "}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className="call-to-action-corner col-lg-4"
                                                            // style="background-image: url(wp-content/uploads/2021/12/right-box-bg.jpg);"
                                                        >
                                                            <div className="single-call-to-action">
                                                                <div className="icon-box">
                                                                    <div className="inner-box">
                                                                        <i className="icon flaticon-heart-2"></i>
                                                                    </div>
                                                                </div>

                                                                <div className="content-box">
                                                                    <h3>
                                                                        Fundraise
                                                                    </h3>{" "}
                                                                    <p>
                                                                        Curabitur
                                                                        elementum
                                                                        euismod
                                                                        mi{" "}
                                                                        <br />{" "}
                                                                        Vivamus
                                                                        massa
                                                                        augue
                                                                        vio{" "}
                                                                    </p>{" "}
                                                                    <a
                                                                        href="campaigns/charity-for-education/donate/index.html"
                                                                        className="thm-btn inverse"
                                                                    >
                                                                        Read
                                                                        More
                                                                    </a>{" "}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-48c78c5 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="48c78c5"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7800b2f"
                                data-id="7800b2f"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-50bac0c elementor-widget elementor-widget-charityhome_events_and_causes"
                                        data-id="50bac0c"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_events_and_causes.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="event-feature sec-padding bg-color-fa">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12 col-lg-6 md-col6-center">
                                                            <h4 className="sec-color text-uppercase double-line line-left">
                                                                Upcoming Event
                                                            </h4>{" "}
                                                            <div className="bx-event-carousel">
                                                                <div className="event">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="event-thumb">
                                                                                <div className="thumb">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        decoding="async"
                                                                                        width="180"
                                                                                        height="120"
                                                                                        src="wp-content/uploads/2022/03/2-4-180x120.jpg"
                                                                                        className="full-width wp-post-image"
                                                                                        alt=""
                                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/2-4-180x120.jpg 180w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/2-4-358x240.jpg 358w"
                                                                                        sizes="auto, (max-width: 180px) 100vw, 180px"
                                                                                    />{" "}
                                                                                </div>
                                                                                <ul className="event-date">
                                                                                    <li className="date">
                                                                                        18
                                                                                    </li>
                                                                                    <li className="month">
                                                                                        फरवरी
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="event-content">
                                                                                <h5 className="event-title">
                                                                                    <a href="event/charity-for-education/index.html">
                                                                                        राष्ट्रीय
                                                                                        चिंतन-
                                                                                        दिवस
                                                                                    </a>
                                                                                </h5>
                                                                                <ul className="event-held list-inline">
                                                                                    <li className="text-555">
                                                                                        <i className="fa fa-clock-o"></i>{" "}
                                                                                        09:00
                                                                                        AM
                                                                                        -
                                                                                        03:00
                                                                                        PM
                                                                                    </li>
                                                                                    <li className="text-555">
                                                                                        {" "}
                                                                                        <i className="fa fa-map-marker"></i>{" "}
                                                                                    </li>
                                                                                </ul>
                                                                                <p>
                                                                                    कार्यकारी
                                                                                    महिलाओं
                                                                                    के
                                                                                    साथ
                                                                                    होने
                                                                                    वाले
                                                                                    यौन
                                                                                    उत्पीड़न
                                                                                    के
                                                                                    कारण
                                                                                    व
                                                                                    निवारण
                                                                                    के
                                                                                    उपाय
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="event">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="event-thumb">
                                                                                <div className="thumb">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        decoding="async"
                                                                                        width="180"
                                                                                        height="120"
                                                                                        src="wp-content/uploads/2022/03/1-4-180x120.jpg"
                                                                                        className="full-width wp-post-image"
                                                                                        alt=""
                                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/1-4-180x120.jpg 180w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/1-4-358x240.jpg 358w"
                                                                                        sizes="auto, (max-width: 180px) 100vw, 180px"
                                                                                    />{" "}
                                                                                </div>
                                                                                <ul className="event-date">
                                                                                    <li className="date">
                                                                                        08
                                                                                    </li>
                                                                                    <li className="month">
                                                                                        मार्च
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="event-content">
                                                                                <h5 className="event-title">
                                                                                    <a href="event/charity-for-education-6/index.html">
                                                                                        अंतर्राष्ट्रीय
                                                                                        नारी-
                                                                                        दिवस
                                                                                    </a>
                                                                                </h5>
                                                                                <ul className="event-held list-inline">
                                                                                    <li className="text-555">
                                                                                        <i className="fa fa-clock-o"></i>{" "}
                                                                                        10:00
                                                                                        AM
                                                                                        -
                                                                                        03:00
                                                                                        PM
                                                                                    </li>
                                                                                    <li className="text-555">
                                                                                        {" "}
                                                                                        <i className="fa fa-map-marker"></i>{" "}
                                                                                    </li>
                                                                                </ul>
                                                                                <p>
                                                                                    विविध
                                                                                    क्षेत्रों
                                                                                    में
                                                                                    अग्रणी
                                                                                    महिलाओं
                                                                                    का
                                                                                    सम्मान,
                                                                                    मौखिक
                                                                                    व
                                                                                    लिखित
                                                                                    प्रतियोगिताएँ,
                                                                                    नारी
                                                                                    सशक्तिकरण
                                                                                    पर
                                                                                    वक्तव्य
                                                                                    /
                                                                                    संगोष्ठी
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="event">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="event-thumb">
                                                                                <div className="thumb">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        decoding="async"
                                                                                        width="180"
                                                                                        height="120"
                                                                                        src="wp-content/uploads/2022/03/4-2-180x120.jpg"
                                                                                        className="full-width wp-post-image"
                                                                                        alt=""
                                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/4-2-180x120.jpg 180w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/4-2-358x240.jpg 358w"
                                                                                        sizes="auto, (max-width: 180px) 100vw, 180px"
                                                                                    />{" "}
                                                                                </div>
                                                                                <ul className="event-date">
                                                                                    <li className="date">
                                                                                        24/25
                                                                                    </li>
                                                                                    <li className="month">
                                                                                        अप्रैल
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="event-content">
                                                                                <h5 className="event-title">
                                                                                    <a href="event/charity-for-education-5/index.html">
                                                                                        सीता-
                                                                                        महोत्सव
                                                                                        सीता
                                                                                        नवमी
                                                                                        पर
                                                                                    </a>
                                                                                </h5>
                                                                                <ul className="event-held list-inline">
                                                                                    <li className="text-555">
                                                                                        <i className="fa fa-clock-o"></i>{" "}
                                                                                        10:00
                                                                                        AM
                                                                                        -
                                                                                        03:00
                                                                                        PM
                                                                                    </li>
                                                                                    <li className="text-555">
                                                                                        {" "}
                                                                                        <i className="fa fa-map-marker"></i>{" "}
                                                                                    </li>
                                                                                </ul>
                                                                                {/* <p>
                                                                                    Donation
                                                                                    There
                                                                                    are
                                                                                    many
                                                                                    variations
                                                                                    of
                                                                                    lorem
                                                                                    passagei
                                                                                    of
                                                                                    Lorem
                                                                                    Ipsum
                                                                                    availabl
                                                                                    Donate
                                                                                    Now
                                                                                    Volunteer
                                                                                    Vivamus
                                                                                    sed
                                                                                    pretium
                                                                                    elit,
                                                                                    quis
                                                                                    luctus
                                                                                    urna
                                                                                    Curabitur
                                                                                    id
                                                                                    tempus
                                                                                    massa
                                                                                    Join
                                                                                    Now
                                                                                    Fundraise
                                                                                    Curabitur
                                                                                    ...
                                                                                </p> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="event">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="event-thumb">
                                                                                <div className="thumb">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        decoding="async"
                                                                                        width="180"
                                                                                        height="120"
                                                                                        src="wp-content/uploads/2022/03/3-4-180x120.jpg"
                                                                                        className="full-width wp-post-image"
                                                                                        alt=""
                                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/3-4-180x120.jpg 180w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/3-4-358x240.jpg 358w"
                                                                                        sizes="auto, (max-width: 180px) 100vw, 180px"
                                                                                    />{" "}
                                                                                </div>
                                                                                <ul className="event-date">
                                                                                    <li className="date">
                                                                                        15
                                                                                    </li>
                                                                                    <li className="month">
                                                                                        मई
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="event-content">
                                                                                <h5 className="event-title">
                                                                                    <a href="event/charity-for-education-2/index.html">
                                                                                        ग्रहणी
                                                                                        विकास
                                                                                        व
                                                                                        ग्रामीण
                                                                                        विकास
                                                                                        के
                                                                                        कार्य
                                                                                    </a>
                                                                                </h5>
                                                                                <ul className="event-held list-inline">
                                                                                    <li className="text-555">
                                                                                        <i className="fa fa-clock-o"></i>{" "}
                                                                                        10:00
                                                                                        AM
                                                                                        -
                                                                                        04:00
                                                                                        PM
                                                                                    </li>
                                                                                    <li className="text-555">
                                                                                        {" "}
                                                                                        <i className="fa fa-map-marker"></i>{" "}
                                                                                        69
                                                                                        Newyork
                                                                                        City.
                                                                                    </li>
                                                                                </ul>
                                                                                {/* <p>
                                                                                    Donation
                                                                                    There
                                                                                    are
                                                                                    many
                                                                                    variations
                                                                                    of
                                                                                    lorem
                                                                                    passagei
                                                                                    of
                                                                                    Lorem
                                                                                    Ipsum
                                                                                    availabl
                                                                                    Donate
                                                                                    Now
                                                                                    Volunteer
                                                                                    Vivamus
                                                                                    sed
                                                                                    pretium
                                                                                    elit,
                                                                                    quis
                                                                                    luctus
                                                                                    urna
                                                                                    Curabitur
                                                                                    id
                                                                                    tempus
                                                                                    massa
                                                                                    Join
                                                                                    Now
                                                                                    Fundraise
                                                                                    Curabitur
                                                                                    ...
                                                                                </p> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="event">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="event-thumb">
                                                                                <div className="thumb">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        decoding="async"
                                                                                        width="180"
                                                                                        height="120"
                                                                                        src="wp-content/uploads/2022/03/2-4-180x120.jpg"
                                                                                        className="full-width wp-post-image"
                                                                                        alt=""
                                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/2-4-180x120.jpg 180w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/2-4-358x240.jpg 358w"
                                                                                        sizes="auto, (max-width: 180px) 100vw, 180px"
                                                                                    />{" "}
                                                                                </div>
                                                                                <ul className="event-date">
                                                                                    <li className="date">
                                                                                        17
                                                                                    </li>
                                                                                    <li className="month">
                                                                                        जून
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="event-content">
                                                                                <h5 className="event-title">
                                                                                    <a href="event/charity-for-education-3/index.html">
                                                                                        बलिदान-
                                                                                        दिवस
                                                                                    </a>
                                                                                </h5>
                                                                                <ul className="event-held list-inline">
                                                                                    <li className="text-555">
                                                                                        <i className="fa fa-clock-o"></i>{" "}
                                                                                        11:00
                                                                                        AM
                                                                                        -
                                                                                        02:00
                                                                                        PM
                                                                                    </li>
                                                                                    <li className="text-555">
                                                                                        {" "}
                                                                                        <i className="fa fa-map-marker"></i>{" "}
                                                                                    </li>
                                                                                </ul>
                                                                                <p>
                                                                                    फैंसी
                                                                                    ड्रेस
                                                                                    प्रतियोगिता/
                                                                                    वीर
                                                                                    रस
                                                                                    प्रधान
                                                                                    कविता
                                                                                    पाठ/
                                                                                    गायन
                                                                                    प्रतियोगिता/
                                                                                    देश-भक्ति
                                                                                    गीत
                                                                                    प्रतियोगिता,
                                                                                    लेखन
                                                                                    प्रतियोगिता,
                                                                                    नाटक
                                                                                    /
                                                                                    नृत्य
                                                                                    नाटिका
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-12 col-lg-6 md-col6-center m-topm50">
                                                            <h4 className="sec-color text-uppercase double-line line-left">
                                                                About
                                                            </h4>
                                                            <div className="featured-causes">
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <div className="thumb">
                                                                            <img
                                                                                loading="lazy"
                                                                                decoding="async"
                                                                                width="260"
                                                                                height="385"
                                                                                src="wp-content/uploads/2022/03/2-4-260x385.jpg"
                                                                                className="full-width wp-post-image"
                                                                                alt=""
                                                                            />{" "}
                                                                            <div className="causes-progress">
                                                                                <div className="progress-item">
                                                                                    <div
                                                                                        className="progress"
                                                                                        data-value="40"
                                                                                    >
                                                                                        <div
                                                                                            className="progress-bar"
                                                                                            role="progressbar"
                                                                                            aria-valuenow="40"
                                                                                            aria-valuemin="0"
                                                                                            aria-valuemax="100"
                                                                                        >
                                                                                            <div className="value-holder">
                                                                                                <span className="value"></span>

                                                                                                %
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <ul className="list-inline">
                                                                                    <li className="text-thm">
                                                                                        <span className="amount">
                                                                                            &#036;3,720.00
                                                                                        </span>{" "}
                                                                                        donated
                                                                                        of{" "}
                                                                                        <span className="goal-amount">
                                                                                            &#036;9,300.00
                                                                                        </span>{" "}
                                                                                        goal
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <div className="causes-details">
                                                                            <h3>
                                                                                महिलाओं
                                                                                की
                                                                                शिक्षा
                                                                                और
                                                                                सशक्तिकरण
                                                                            </h3>

                                                                            <p>
                                                                                हम
                                                                                महिलाओं
                                                                                को
                                                                                शिक्षा,
                                                                                कौशल
                                                                                विकास
                                                                                और
                                                                                नेतृत्व
                                                                                के
                                                                                अवसर
                                                                                प्रदान
                                                                                करते
                                                                                हैं।
                                                                                सशक्त
                                                                                महिलाएँ
                                                                                ही
                                                                                सशक्त
                                                                                समाज
                                                                                और
                                                                                उज्ज्वल
                                                                                भविष्य
                                                                                का
                                                                                निर्माण
                                                                                करती
                                                                                हैं।
                                                                                हम
                                                                                महिलाओं
                                                                                में
                                                                                आत्मविश्वास
                                                                                जगाकर
                                                                                उन्हें
                                                                                आत्मनिर्भर
                                                                                बनने
                                                                                की
                                                                                दिशा
                                                                                में
                                                                                आगे
                                                                                बढ़ाते
                                                                                हैं।
                                                                                हर
                                                                                महिला
                                                                                की
                                                                                सफलता
                                                                                समाज
                                                                                में
                                                                                सकारात्मक
                                                                                परिवर्तन
                                                                                लाती
                                                                                है।हम
                                                                                महिलाओं
                                                                                को
                                                                                शिक्षा,
                                                                                कौशल
                                                                                विकास
                                                                                और
                                                                                नेतृत्व
                                                                                के
                                                                                अवसर
                                                                                प्रदान
                                                                                करते
                                                                                हैं।
                                                                                सशक्त
                                                                                महिलाएँ
                                                                                ही
                                                                                सशक्त
                                                                                समाज
                                                                                और
                                                                                उज्ज्वल
                                                                                भविष्य
                                                                                का
                                                                                निर्माण
                                                                                करती
                                                                                हैं।
                                                                                हम
                                                                                महिलाओं
                                                                                में
                                                                                आत्मविश्वास
                                                                                जगाकर
                                                                                उन्हें
                                                                                आत्मनिर्भर
                                                                                बनने
                                                                                की
                                                                                दिशा
                                                                                में
                                                                                आगे
                                                                                बढ़ाते
                                                                                हैं।
                                                                                हर
                                                                                महिला
                                                                                की
                                                                                सफलता
                                                                                समाज
                                                                                में
                                                                                सकारात्मक
                                                                                परिवर्तन
                                                                                लाती
                                                                                है।
                                                                                हम
                                                                                समान
                                                                                अधिकार,
                                                                                सम्मान
                                                                                और
                                                                                अवसरों
                                                                                के
                                                                                लिए
                                                                                निरंतर
                                                                                प्रयासरत
                                                                                हैं।
                                                                                महिलाओं
                                                                                की
                                                                                जागरूकता
                                                                                ही
                                                                                सामाजिक
                                                                                बदलाव
                                                                                की
                                                                                नींव
                                                                                है।
                                                                                हम
                                                                                हर
                                                                                महिला
                                                                                की
                                                                                क्षमता
                                                                                को
                                                                                पहचानकर
                                                                                उसे
                                                                                आगे
                                                                                बढ़ने
                                                                                का
                                                                                मंच
                                                                                देते
                                                                                हैं।
                                                                                जागृत
                                                                                और
                                                                                सशक्त
                                                                                महिलाएँ
                                                                                ही
                                                                                एक
                                                                                बेहतर
                                                                                दुनिया
                                                                                का
                                                                                निर्माण
                                                                                करती
                                                                                हैं।
                                                                            </p>
                                                                            {/* <a
                                                                                className="thm-btn btn-xs"
                                                                                href="campaigns/charity-for-education/donate/index.html"
                                                                            >
                                                                                Donate
                                                                                Now
                                                                            </a> */}
                                                                            {/* <a
                                                                                className="thm-btn inverse btn-xs"
                                                                                href="campaigns/charity-for-education/index.html"
                                                                            >
                                                                                Read
                                                                                More
                                                                            </a> */}
                                                                            {/* <h6>
                                                                                Help
                                                                                us
                                                                                by
                                                                                share:
                                                                            </h6> */}
                                                                            {/* <ul className="social">
                                                                                <li>
                                                                                    <a
                                                                                        href="https://www.facebook.com/"
                                                                                        style={{
                                                                                            backgroundColor:
                                                                                                "rgba(0, 0, 0, 0)",
                                                                                            color: "rgb(235, 83, 16)",
                                                                                        }}
                                                                                        target="_blank"
                                                                                    >
                                                                                        <i className="fa fa-facebook"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        href="https://www.linkedin.com/"
                                                                                        style={{
                                                                                            backgroundColor:
                                                                                                "rgba(0, 0, 0, 0)",
                                                                                            color: "rgb(235, 83, 16)",
                                                                                        }}
                                                                                        target="_blank"
                                                                                    >
                                                                                        <i className="fa fa-linkedin"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        href="https://www.pinterest.com/"
                                                                                        style={{
                                                                                            backgroundColor:
                                                                                                "rgba(0, 0, 0, 0)",
                                                                                            color: "rgb(235, 83, 16)",
                                                                                        }}
                                                                                        target="_blank"
                                                                                    >
                                                                                        <i className="fa fa-pinterest"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        href="https://www.skype.com/"
                                                                                        style={{
                                                                                            backgroundColor:
                                                                                                "rgba(0, 0, 0, 0)",
                                                                                            color: "rgb(235, 83, 16)",
                                                                                        }}
                                                                                        target="_blank"
                                                                                    >
                                                                                        <i className="fa fa-skype"></i>
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a
                                                                                        href="https://www.twitter.com/"
                                                                                        style={{
                                                                                            backgroundColor:
                                                                                                "rgba(0, 0, 0, 0)",
                                                                                            color: "rgb(235, 83, 16)",
                                                                                        }}
                                                                                        target="_blank"
                                                                                    >
                                                                                        <i className="fa fa-twitter"></i>
                                                                                    </a>
                                                                                </li>
                                                                            </ul> */}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* sansthapak ki lekhniya */}
                    <section className="founder-message-section">
                        <div className="container-msg">
                            <h2 className="section-title">
                                संस्थापक के <span>लेखनी</span>
                            </h2>
                            <p className="section-subtitle">
                                संस्थापक की प्रेरणादायक सोच
                            </p>

                            <div className="message-wrapper">
                                <div className="photo-container">
                                    <img
                                        src={sansthapakPhoto}
                                        alt="Sansthapak"
                                        className="sansthapak-photo"
                                        width={100}
                                        height={100}
                                    />
                                </div>

                                <div className="message-card">
                                    <p className="message-text">{message}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* end */}

                    {/* committee member */}
                    <section className="volunteer-section">
                        <div className="container">
                            <div className="section-header">
                                <h2>राष्ट्रीय समिति के सदस्य</h2>
                                <p>
                                    Lorem ipsum is a dummy text it will use for
                                    subtitle here
                                </p>
                            </div>

                            <div className="volunteer-grid">
                                {volunteers.map((v, index) => (
                                    <div className="volunteer-card" key={index}>
                                        <div className="image-box">
                                            <img src={v.image} alt={v.name} />
                                            <div className="overlay">
                                                <div className="social-icons">
                                                    <i className="fab fa-facebook-f"></i>
                                                    <i className="fab fa-google-plus-g"></i>
                                                    <i className="fab fa-linkedin-in"></i>
                                                    <i className="fab fa-twitter"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <h4>{v.name}</h4>
                                        <span>{v.role}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* end */}

                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-ee59e78 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="ee59e78"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cfb27be"
                                data-id="cfb27be"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-4bf152d elementor-widget elementor-widget-charityhome_recent_causes"
                                        data-id="4bf152d"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_recent_causes.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="recent-causes sec-padding ">
                                                <div className="container">
                                                    <div className="sec-title text-center">
                                                        <h2>Chapters</h2>{" "}
                                                        {/* <p>
                                                            Lorem ipsum is a
                                                            dummy text it will
                                                            use for subtitle
                                                            here
                                                        </p>{" "} */}
                                                        <span className="decor">
                                                            <span className="inner"></span>
                                                        </span>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                                            <div className="causes sm-col5-center ">
                                                                <div className="thumb">
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="360"
                                                                        height="220"
                                                                        src="wp-content/uploads/2022/03/1-4-360x220.jpg"
                                                                        className="full-width wp-post-image"
                                                                        alt=""
                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/1-4-360x220.jpg 360w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/1-4-570x350.jpg 570w"
                                                                        sizes="auto, (max-width: 360px) 100vw, 360px"
                                                                    />{" "}
                                                                    {/* <div className="donate-piechart">
                                                                        <div className="piechart-block">
                                                                            <div
                                                                                className="piechart style-one"
                                                                                data-fg-color="rgba(250,119,68,1)"
                                                                                data-value=".35"
                                                                            >
                                                                                <span>
                                                                                    .35
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div> */}
                                                                </div>
                                                                <div className="causes-details clearfix">
                                                                    <h4 className="title">
                                                                        <a href="campaigns/sponsor-a-child-today/index.html">
                                                                            Sponsor
                                                                            a
                                                                            child
                                                                            today
                                                                        </a>
                                                                    </h4>
                                                                    <ul className="about-causes list-inline clearfix">
                                                                        <li className="causes-goal">
                                                                            <span className="amount">
                                                                                &#036;875.00
                                                                            </span>{" "}
                                                                            donated
                                                                            of{" "}
                                                                            <span className="goal-amount">
                                                                                &#036;2,500.00
                                                                            </span>{" "}
                                                                            goal
                                                                        </li>
                                                                    </ul>
                                                                    <p>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        consectetur
                                                                        adipisicing
                                                                        elit.
                                                                        Esse
                                                                        totam
                                                                        praesentium
                                                                        saepe
                                                                        repudiandae,
                                                                        eaque
                                                                        ipsum
                                                                        id,
                                                                        inventore
                                                                        vel
                                                                        magnam
                                                                        quod&hellip;
                                                                    </p>
                                                                    <div>
                                                                        <a
                                                                            href="campaigns/sponsor-a-child-today/donate/index.html"
                                                                            className="thm-btn btn-xs"
                                                                        >
                                                                            <i className="fa fa-angle-double-right text-theme-colored"></i>{" "}
                                                                            Donate
                                                                            Now
                                                                        </a>
                                                                        <a
                                                                            className="thm-btn inverse btn-xs"
                                                                            href="campaigns/sponsor-a-child-today/index.html"
                                                                        >
                                                                            <i className="fa fa-angle-double-right text-theme-colored"></i>{" "}
                                                                            Read
                                                                            More
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                                            <div className="causes sm-col5-center ">
                                                                <div className="thumb">
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="360"
                                                                        height="220"
                                                                        src="wp-content/uploads/2022/03/4-2-360x220.jpg"
                                                                        className="full-width wp-post-image"
                                                                        alt=""
                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/4-2-360x220.jpg 360w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/4-2-570x350.jpg 570w"
                                                                        sizes="auto, (max-width: 360px) 100vw, 360px"
                                                                    />{" "}
                                                                    {/* <div className="donate-piechart">
                                                                        <div className="piechart-block">
                                                                            <div
                                                                                className="piechart style-one"
                                                                                data-fg-color="rgba(250,119,68,1)"
                                                                                data-value=".60"
                                                                            >
                                                                                <span>
                                                                                    .60
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div> */}
                                                                </div>
                                                                <div className="causes-details clearfix">
                                                                    <h4 className="title">
                                                                        <a href="campaigns/sponsor-a-child-today-2/index.html">
                                                                            Sponsor
                                                                            a
                                                                            child
                                                                            today
                                                                        </a>
                                                                    </h4>
                                                                    <ul className="about-causes list-inline clearfix">
                                                                        <li className="causes-goal">
                                                                            <span className="amount">
                                                                                &#036;2,100.00
                                                                            </span>{" "}
                                                                            donated
                                                                            of{" "}
                                                                            <span className="goal-amount">
                                                                                &#036;3,500.00
                                                                            </span>{" "}
                                                                            goal
                                                                        </li>
                                                                    </ul>
                                                                    <p>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        consectetur
                                                                        adipisicing
                                                                        elit.
                                                                        Esse
                                                                        totam
                                                                        praesentium
                                                                        saepe
                                                                        repudiandae,
                                                                        eaque
                                                                        ipsum
                                                                        id,
                                                                        inventore
                                                                        vel
                                                                        magnam
                                                                        quod&hellip;
                                                                    </p>
                                                                    <div>
                                                                        <a
                                                                            href="campaigns/sponsor-a-child-today-2/donate/index.html"
                                                                            className="thm-btn btn-xs"
                                                                        >
                                                                            <i className="fa fa-angle-double-right text-theme-colored"></i>{" "}
                                                                            Donate
                                                                            Now
                                                                        </a>
                                                                        <a
                                                                            className="thm-btn inverse btn-xs"
                                                                            href="campaigns/sponsor-a-child-today-2/index.html"
                                                                        >
                                                                            <i className="fa fa-angle-double-right text-theme-colored"></i>{" "}
                                                                            Read
                                                                            More
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-4 col-lg-4">
                                                            <div className="causes sm-col5-center ">
                                                                <div className="thumb">
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="360"
                                                                        height="220"
                                                                        src="wp-content/uploads/2022/03/3-4-360x220.jpg"
                                                                        className="full-width wp-post-image"
                                                                        alt=""
                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/3-4-360x220.jpg 360w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2022/03/3-4-570x350.jpg 570w"
                                                                        sizes="auto, (max-width: 360px) 100vw, 360px"
                                                                    />{" "}
                                                                    {/* <div className="donate-piechart">
                                                                        <div className="piechart-block">
                                                                            <div
                                                                                className="piechart style-one"
                                                                                data-fg-color="rgba(250,119,68,1)"
                                                                                data-value=".45"
                                                                            >
                                                                                <span>
                                                                                    .45
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div> */}
                                                                </div>
                                                                <div className="causes-details clearfix">
                                                                    <h4 className="title">
                                                                        <a href="campaigns/sponsor-a-child-today-3/index.html">
                                                                            Sponsor
                                                                            a
                                                                            child
                                                                            today
                                                                        </a>
                                                                    </h4>
                                                                    <ul className="about-causes list-inline clearfix">
                                                                        <li className="causes-goal">
                                                                            <span className="amount">
                                                                                &#036;2,025.00
                                                                            </span>{" "}
                                                                            donated
                                                                            of{" "}
                                                                            <span className="goal-amount">
                                                                                &#036;4,500.00
                                                                            </span>{" "}
                                                                            goal
                                                                        </li>
                                                                    </ul>
                                                                    <p>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        consectetur
                                                                        adipisicing
                                                                        elit.
                                                                        Esse
                                                                        totam
                                                                        praesentium
                                                                        saepe
                                                                        repudiandae,
                                                                        eaque
                                                                        ipsum
                                                                        id,
                                                                        inventore
                                                                        vel
                                                                        magnam
                                                                        quod&hellip;
                                                                    </p>
                                                                    <div>
                                                                        <a
                                                                            href="campaigns/sponsor-a-child-today-3/donate/index.html"
                                                                            className="thm-btn btn-xs"
                                                                        >
                                                                            <i className="fa fa-angle-double-right text-theme-colored"></i>{" "}
                                                                            Donate
                                                                            Now
                                                                        </a>
                                                                        <a
                                                                            className="thm-btn inverse btn-xs"
                                                                            href="campaigns/sponsor-a-child-today-3/index.html"
                                                                        >
                                                                            <i className="fa fa-angle-double-right text-theme-colored"></i>{" "}
                                                                            Read
                                                                            More
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-a6bc305 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="a6bc305"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-02d9ee4"
                                data-id="02d9ee4"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-20087d0 elementor-widget elementor-widget-charityhome_call_to_action"
                                        data-id="20087d0"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_call_to_action.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="overlay-white sec-padding parallax-section">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-8 offset-lg-2 promote-project text-center">
                                                            <h3>
                                                                नारी चेतना का
                                                                जागरण। विश्व का
                                                                सशक्तिकरण।
                                                            </h3>
                                                            <div className="sec-title colored text-center">
                                                                <span className="decor">
                                                                    <span className="inner"></span>
                                                                </span>
                                                            </div>
                                                            <h2>
                                                                वैश्विक नारी
                                                                जागरण आंदोलन का
                                                                हिस्सा बनें
                                                            </h2>{" "}
                                                            <p>
                                                                वर्ल्ड वूमन
                                                                अवेकनिंग
                                                                ऑर्गेनाइजेशन एक
                                                                वैश्विक पहल है,
                                                                जो जागरूकता,
                                                                शिक्षा, नेतृत्व
                                                                और सामूहिक विकास
                                                                के माध्यम से
                                                                महिलाओं को सशक्त
                                                                बनाने के लिए
                                                                समर्पित है।
                                                                हमारा विश्वास है
                                                                कि जब महिलाएँ
                                                                अपनी आंतरिक
                                                                शक्ति और
                                                                उद्देश्य को
                                                                पहचानती हैं, तो
                                                                परिवार सशक्त
                                                                होते हैं, समाज
                                                                समृद्ध होता है
                                                                और दुनिया
                                                                सकारात्मक रूप से
                                                                बदलती है। आइए
                                                                हमारे साथ मिलकर
                                                                एक ऐसा भविष्य
                                                                बनाएं, जहाँ हर
                                                                महिला
                                                                आत्मविश्वास,
                                                                गरिमा और शक्ति
                                                                के साथ आगे बढ़े।
                                                            </p>
                                                            {/* <a
                                                                href="campaigns/charity-for-education/donate/index.html"
                                                                className="thm-btn"
                                                            >
                                                                Donate Now
                                                            </a> */}
                                                            <a
                                                                href="/about"
                                                                className="thm-btn inverse"
                                                            >
                                                                हमारे सदस्य बनें
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-f738864 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="f738864"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7a7b48b"
                                data-id="7a7b48b"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-90f6944 elementor-widget elementor-widget-charityhome_gallery_v1"
                                        data-id="90f6944"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_gallery_v1.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="gallery-section pb_2">
                                                <div className="container">
                                                    <div className="sec-title text-center">
                                                        <h2>Our Gallery</h2>{" "}
                                                        <p>
                                                            Lorem ipsum is a
                                                            dummy text it will
                                                            use for subtitle
                                                            here
                                                        </p>{" "}
                                                        <span className="decor">
                                                            <span className="inner"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters ">
                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="380"
                                                                        height="320"
                                                                        src="wp-content/uploads/2021/12/s1.jpg"
                                                                        className="attachment-charityhome_380x320 size-charityhome_380x320 wp-post-image"
                                                                        alt=""
                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s1.jpg 380w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s1-300x253.jpg 300w"
                                                                        sizes="auto, (max-width: 380px) 100vw, 380px"
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <a
                                                                        href="wp-content/uploads/2021/12/s1.jpg"
                                                                        className="lightbox-image btn-zoom"
                                                                    >
                                                                        <span className="icon fa fa-search"></span>
                                                                    </a>
                                                                    <a href="#">
                                                                        <i className="fa fa-link"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="380"
                                                                        height="320"
                                                                        src="wp-content/uploads/2021/12/s2.jpg"
                                                                        className="attachment-charityhome_380x320 size-charityhome_380x320 wp-post-image"
                                                                        alt=""
                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s2.jpg 380w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s2-300x253.jpg 300w"
                                                                        sizes="auto, (max-width: 380px) 100vw, 380px"
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <a
                                                                        href="wp-content/uploads/2021/12/s2.jpg"
                                                                        className="lightbox-image btn-zoom"
                                                                    >
                                                                        <span className="icon fa fa-search"></span>
                                                                    </a>
                                                                    <a href="#">
                                                                        <i className="fa fa-link"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="380"
                                                                        height="320"
                                                                        src="wp-content/uploads/2021/12/s3.jpg"
                                                                        className="attachment-charityhome_380x320 size-charityhome_380x320 wp-post-image"
                                                                        alt=""
                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s3.jpg 380w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s3-300x253.jpg 300w"
                                                                        sizes="auto, (max-width: 380px) 100vw, 380px"
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <a
                                                                        href="wp-content/uploads/2021/12/s3.jpg"
                                                                        className="lightbox-image btn-zoom"
                                                                    >
                                                                        <span className="icon fa fa-search"></span>
                                                                    </a>
                                                                    <a href="#">
                                                                        <i className="fa fa-link"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="380"
                                                                        height="320"
                                                                        src="wp-content/uploads/2021/12/s4.jpg"
                                                                        className="attachment-charityhome_380x320 size-charityhome_380x320 wp-post-image"
                                                                        alt=""
                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s4.jpg 380w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s4-300x253.jpg 300w"
                                                                        sizes="auto, (max-width: 380px) 100vw, 380px"
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <a
                                                                        href="wp-content/uploads/2021/12/s4.jpg"
                                                                        className="lightbox-image btn-zoom"
                                                                    >
                                                                        <span className="icon fa fa-search"></span>
                                                                    </a>
                                                                    <a href="#">
                                                                        <i className="fa fa-link"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="380"
                                                                        height="320"
                                                                        src="wp-content/uploads/2021/12/s5.jpg"
                                                                        className="attachment-charityhome_380x320 size-charityhome_380x320 wp-post-image"
                                                                        alt=""
                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s5.jpg 380w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s5-300x253.jpg 300w"
                                                                        sizes="auto, (max-width: 380px) 100vw, 380px"
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <a
                                                                        href="wp-content/uploads/2021/12/s5.jpg"
                                                                        className="lightbox-image btn-zoom"
                                                                    >
                                                                        <span className="icon fa fa-search"></span>
                                                                    </a>
                                                                    <a href="#">
                                                                        <i className="fa fa-link"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="380"
                                                                        height="320"
                                                                        src="wp-content/uploads/2021/12/s6.jpg"
                                                                        className="attachment-charityhome_380x320 size-charityhome_380x320 wp-post-image"
                                                                        alt=""
                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s6.jpg 380w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s6-300x253.jpg 300w"
                                                                        sizes="auto, (max-width: 380px) 100vw, 380px"
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <a
                                                                        href="wp-content/uploads/2021/12/s6.jpg"
                                                                        className="lightbox-image btn-zoom"
                                                                    >
                                                                        <span className="icon fa fa-search"></span>
                                                                    </a>
                                                                    <a href="#">
                                                                        <i className="fa fa-link"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="380"
                                                                        height="320"
                                                                        src="wp-content/uploads/2021/12/s7.jpg"
                                                                        className="attachment-charityhome_380x320 size-charityhome_380x320 wp-post-image"
                                                                        alt=""
                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s7.jpg 380w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s7-300x253.jpg 300w"
                                                                        sizes="auto, (max-width: 380px) 100vw, 380px"
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <a
                                                                        href="wp-content/uploads/2021/12/s7.jpg"
                                                                        className="lightbox-image btn-zoom"
                                                                    >
                                                                        <span className="icon fa fa-search"></span>
                                                                    </a>
                                                                    <a href="#">
                                                                        <i className="fa fa-link"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="380"
                                                                        height="320"
                                                                        src="wp-content/uploads/2021/12/s8.jpg"
                                                                        className="attachment-charityhome_380x320 size-charityhome_380x320 wp-post-image"
                                                                        alt=""
                                                                        srcset="https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s8.jpg 380w, https://fastwpdemo.com/demo/charityhome/wp-content/uploads/2021/12/s8-300x253.jpg 300w"
                                                                        sizes="auto, (max-width: 380px) 100vw, 380px"
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <a
                                                                        href="wp-content/uploads/2021/12/s8.jpg"
                                                                        className="lightbox-image btn-zoom"
                                                                    >
                                                                        <span className="icon fa fa-search"></span>
                                                                    </a>
                                                                    <a href="#">
                                                                        <i className="fa fa-link"></i>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-8ccb5c3 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="8ccb5c3"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8f40c38"
                                data-id="8f40c38"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-c694dd8 elementor-widget elementor-widget-charityhome_call_to_action_two"
                                        data-id="c694dd8"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_call_to_action_two.default"
                                    >
                                        {/* <div className="elementor-widget-container">
                                            <section className="footer-call-to-action">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-9 sm-text-center">
                                                            <h3>
                                                                Here will be any
                                                                kind lorem ipsum
                                                                heading
                                                            </h3>{" "}
                                                            <p>
                                                                There are many
                                                                variations of
                                                                passages of
                                                                Lorem Ipsum
                                                                available, but
                                                                the majority
                                                                have lorem
                                                            </p>{" "}
                                                        </div>
                                                        <div className="col-lg-3 text-right sm-text-center">
                                                            <a
                                                                href="gallery-style-one/index.html"
                                                                className="thm-btn inverse m-tops15"
                                                            >
                                                                View Full
                                                                Gallery
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-d5c9d2b elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="d5c9d2b"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6627e5a"
                                data-id="6627e5a"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-fc9494e elementor-widget elementor-widget-charityhome_services_v1"
                                        data-id="fc9494e"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_services_v1.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="home-serivce sec-padding">
                                                <div className="container">
                                                    <div className="sec-title text-center">
                                                        <h2>Our Mission</h2>{" "}
                                                        <p>
                                                            Lorem ipsum is a
                                                            dummy text it will
                                                            use for subtitle
                                                            here
                                                        </p>{" "}
                                                        <span className="decor">
                                                            <span className="inner"></span>
                                                        </span>
                                                    </div>

                                                    <div className="row">
                                                        <div className="col-lg-4 col-sm-6">
                                                            <div className="single-service-home">
                                                                <div className="icon-box">
                                                                    <div className="inner-box">
                                                                        <i className=" flaticon-reading"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="content">
                                                                    <h3>
                                                                        Charity
                                                                        For
                                                                        Education
                                                                    </h3>
                                                                    <p>
                                                                        There
                                                                        are many
                                                                        variations
                                                                        of lorem
                                                                        passagei
                                                                        of Lorem
                                                                        Ipsum
                                                                        available
                                                                        but the
                                                                        majority
                                                                        have
                                                                    </p>
                                                                    <a href="#">
                                                                        Read
                                                                        More
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-6">
                                                            <div className="single-service-home">
                                                                <div className="icon-box">
                                                                    <div className="inner-box">
                                                                        <i className=" flaticon-harvest"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="content">
                                                                    <h3>
                                                                        Feed For
                                                                        Hungry
                                                                        Child
                                                                    </h3>
                                                                    <p>
                                                                        There
                                                                        are many
                                                                        variations
                                                                        of lorem
                                                                        passagei
                                                                        of Lorem
                                                                        Ipsum
                                                                        available
                                                                        but the
                                                                        majority
                                                                        have
                                                                    </p>
                                                                    <a href="#">
                                                                        Read
                                                                        More
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-6">
                                                            <div className="single-service-home">
                                                                <div className="icon-box">
                                                                    <div className="inner-box">
                                                                        <i className=" flaticon-heart-4"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="content">
                                                                    <h3>
                                                                        Home For
                                                                        Homeless
                                                                    </h3>
                                                                    <p>
                                                                        There
                                                                        are many
                                                                        variations
                                                                        of lorem
                                                                        passagei
                                                                        of Lorem
                                                                        Ipsum
                                                                        available
                                                                        but the
                                                                        majority
                                                                        have
                                                                    </p>
                                                                    <a href="#">
                                                                        Read
                                                                        More
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-6">
                                                            <div className="single-service-home">
                                                                <div className="icon-box">
                                                                    <div className="inner-box">
                                                                        <i className=" flaticon-water-bottle"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="content">
                                                                    <h3>
                                                                        Bringing
                                                                        Clean
                                                                        Water
                                                                    </h3>
                                                                    <p>
                                                                        There
                                                                        are many
                                                                        variations
                                                                        of lorem
                                                                        passagei
                                                                        of Lorem
                                                                        Ipsum
                                                                        available
                                                                        but the
                                                                        majority
                                                                        have
                                                                    </p>
                                                                    <a href="#">
                                                                        Read
                                                                        More
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-6">
                                                            <div className="single-service-home">
                                                                <div className="icon-box">
                                                                    <div className="inner-box">
                                                                        <i className=" flaticon-money-2"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="content">
                                                                    <h3>
                                                                        Help
                                                                        Little
                                                                        Hands
                                                                    </h3>
                                                                    <p>
                                                                        There
                                                                        are many
                                                                        variations
                                                                        of lorem
                                                                        passagei
                                                                        of Lorem
                                                                        Ipsum
                                                                        available
                                                                        but the
                                                                        majority
                                                                        have
                                                                    </p>
                                                                    <a href="#">
                                                                        Read
                                                                        More
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-sm-6">
                                                            <div className="single-service-home">
                                                                <div className="icon-box">
                                                                    <div className="inner-box">
                                                                        <i className=" flaticon-adoption"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="content">
                                                                    <h3>
                                                                        Donate
                                                                        For
                                                                        Children
                                                                    </h3>
                                                                    <p>
                                                                        There
                                                                        are many
                                                                        variations
                                                                        of lorem
                                                                        passagei
                                                                        of Lorem
                                                                        Ipsum
                                                                        available
                                                                        but the
                                                                        majority
                                                                        have
                                                                    </p>
                                                                    <a href="#">
                                                                        Read
                                                                        More
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-81da69f elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="81da69f"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fd1809d"
                                data-id="fd1809d"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-75887e1 elementor-widget elementor-widget-charityhome_funfacts_v1"
                                        data-id="75887e1"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_funfacts_v1.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="fact-counter-wrapper sec-padding parallax-section">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-xl-6 col-lg-12 md-text-center">
                                                            <h2>
                                                                We are served
                                                                since{" "}
                                                                <b>35 years</b>{" "}
                                                                <br />
                                                                to helpless
                                                                people with
                                                                trust and <br />
                                                                we are happy
                                                            </h2>
                                                            <a
                                                                href="about/index.html"
                                                                className="thm-btn inverse m-btmm40"
                                                            >
                                                                Be a part of us
                                                            </a>
                                                        </div>
                                                        <div className="col-xl-6 col-lg-12 md-text-center">
                                                            <div className="single-fact">
                                                                <div className="icon-box">
                                                                    <i className="icon flaticon-trophy-1"></i>
                                                                </div>
                                                                <span
                                                                    className="timer"
                                                                    data-from="10"
                                                                    data-to="365"
                                                                    data-speed="5000"
                                                                    data-refresh-interval="50"
                                                                >
                                                                    365
                                                                </span>
                                                                <p>
                                                                    Total Awards
                                                                </p>
                                                            </div>
                                                            <div className="single-fact">
                                                                <div className="icon-box">
                                                                    <i className="icon flaticon-users-1"></i>
                                                                </div>
                                                                <span
                                                                    className="timer"
                                                                    data-from="10"
                                                                    data-to="2200"
                                                                    data-speed="5000"
                                                                    data-refresh-interval="50"
                                                                >
                                                                    2200
                                                                </span>
                                                                <p>
                                                                    Total
                                                                    Volunteer
                                                                </p>
                                                            </div>
                                                            <div className="single-fact">
                                                                <div className="icon-box">
                                                                    <i className="icon flaticon-donation-2"></i>
                                                                </div>
                                                                <span
                                                                    className="timer"
                                                                    data-from="10"
                                                                    data-to="155"
                                                                    data-speed="5000"
                                                                    data-refresh-interval="50"
                                                                >
                                                                    155
                                                                </span>
                                                                <p>
                                                                    Total
                                                                    Projects
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-91be1ba elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="91be1ba"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1a8a490"
                                data-id="1a8a490"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-059bed1 elementor-widget elementor-widget-charityhome_team_v1"
                                        data-id="059bed1"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_team_v1.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="sec-padding meet-Volunteer">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-10">
                                                            <div className="sec-title text-left">
                                                                <h2>
                                                                    Meet Our
                                                                    Volunteers
                                                                </h2>{" "}
                                                                <p>
                                                                    Lorem ipsum
                                                                    is a dummy
                                                                    text it will
                                                                    use for
                                                                    subtitle
                                                                    here
                                                                </p>{" "}
                                                                <span className="decor">
                                                                    <span className="inner"></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="clearfix">
                                                        <div className="team-carousel owl-carousel owl-theme">
                                                            <div className="item">
                                                                <div className="single-team-member">
                                                                    <div className="img-box">
                                                                        <img
                                                                            loading="lazy"
                                                                            decoding="async"
                                                                            width="270"
                                                                            height="250"
                                                                            src="wp-content/uploads/2022/03/1-2.jpg"
                                                                            className="attachment-charityhome_270x250 size-charityhome_270x250 wp-post-image"
                                                                            alt=""
                                                                        />{" "}
                                                                        <div className="overlay">
                                                                            <div className="box">
                                                                                <div className="content">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.facebook.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-facebook"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.googleplus.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-google-plus"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.linkedin.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-linkedin"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.twitter.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-twitter"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3>
                                                                        Muhibbur
                                                                        Rashid
                                                                    </h3>
                                                                    <span>
                                                                        Businessman
                                                                    </span>
                                                                    <p>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        sea
                                                                        dolor
                                                                        essent
                                                                        nostrud
                                                                        no, pro
                                                                        no vidit
                                                                        aterum
                                                                        mediocritatem.
                                                                    </p>
                                                                    <a
                                                                        href="volunteer-profile/index.html"
                                                                        className="thm-btn"
                                                                    >
                                                                        View
                                                                        Profile
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="single-team-member">
                                                                    <div className="img-box">
                                                                        <img
                                                                            loading="lazy"
                                                                            decoding="async"
                                                                            width="270"
                                                                            height="250"
                                                                            src="wp-content/uploads/2022/03/2-2.jpg"
                                                                            className="attachment-charityhome_270x250 size-charityhome_270x250 wp-post-image"
                                                                            alt=""
                                                                        />{" "}
                                                                        <div className="overlay">
                                                                            <div className="box">
                                                                                <div className="content">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.facebook.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-facebook"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.googleplus.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-google-plus"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.linkedin.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-linkedin"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.twitter.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-twitter"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3>
                                                                        Rashed
                                                                        Kabir
                                                                    </h3>
                                                                    <span>
                                                                        Businessman
                                                                    </span>
                                                                    <p>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        sea
                                                                        dolor
                                                                        essent
                                                                        nostrud
                                                                        no, pro
                                                                        no vidit
                                                                        aterum
                                                                        mediocritatem.
                                                                    </p>
                                                                    <a
                                                                        href="volunteer-profile/index.html"
                                                                        className="thm-btn"
                                                                    >
                                                                        View
                                                                        Profile
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="single-team-member">
                                                                    <div className="img-box">
                                                                        <img
                                                                            loading="lazy"
                                                                            decoding="async"
                                                                            width="270"
                                                                            height="250"
                                                                            src="wp-content/uploads/2022/03/3-2.jpg"
                                                                            className="attachment-charityhome_270x250 size-charityhome_270x250 wp-post-image"
                                                                            alt=""
                                                                        />{" "}
                                                                        <div className="overlay">
                                                                            <div className="box">
                                                                                <div className="content">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.facebook.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-facebook"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.googleplus.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-google-plus"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.linkedin.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-linkedin"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.twitter.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-twitter"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3>
                                                                        Jannatul
                                                                        Ferdous
                                                                    </h3>
                                                                    <span>
                                                                        Businessman
                                                                    </span>
                                                                    <p>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        sea
                                                                        dolor
                                                                        essent
                                                                        nostrud
                                                                        no, pro
                                                                        no vidit
                                                                        aterum
                                                                        mediocritatem.
                                                                    </p>
                                                                    <a
                                                                        href="volunteer-profile/index.html"
                                                                        className="thm-btn"
                                                                    >
                                                                        View
                                                                        Profile
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="single-team-member">
                                                                    <div className="img-box">
                                                                        <img
                                                                            loading="lazy"
                                                                            decoding="async"
                                                                            width="270"
                                                                            height="250"
                                                                            src="wp-content/uploads/2022/03/2-2.jpg"
                                                                            className="attachment-charityhome_270x250 size-charityhome_270x250 wp-post-image"
                                                                            alt=""
                                                                        />{" "}
                                                                        <div className="overlay">
                                                                            <div className="box">
                                                                                <div className="content">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.facebook.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-facebook"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.googleplus.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-google-plus"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.linkedin.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-linkedin"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.twitter.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-twitter"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3>
                                                                        Lora
                                                                        Fenty
                                                                    </h3>
                                                                    <span>
                                                                        Businessman
                                                                    </span>
                                                                    <p>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        sea
                                                                        dolor
                                                                        essent
                                                                        nostrud
                                                                        no, pro
                                                                        no vidit
                                                                        aterum
                                                                        mediocritatem.
                                                                    </p>
                                                                    <a
                                                                        href="volunteer-profile/index.html"
                                                                        className="thm-btn"
                                                                    >
                                                                        View
                                                                        Profile
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="single-team-member">
                                                                    <div className="img-box">
                                                                        <img
                                                                            loading="lazy"
                                                                            decoding="async"
                                                                            width="270"
                                                                            height="250"
                                                                            src="wp-content/uploads/2022/03/3-2.jpg"
                                                                            className="attachment-charityhome_270x250 size-charityhome_270x250 wp-post-image"
                                                                            alt=""
                                                                        />{" "}
                                                                        <div className="overlay">
                                                                            <div className="box">
                                                                                <div className="content">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.facebook.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-facebook"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.googleplus.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-google-plus"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.linkedin.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-linkedin"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.twitter.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-twitter"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3>
                                                                        James
                                                                        Henry
                                                                    </h3>
                                                                    <span>
                                                                        Businessman
                                                                    </span>
                                                                    <p>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        sea
                                                                        dolor
                                                                        essent
                                                                        nostrud
                                                                        no, pro
                                                                        no vidit
                                                                        aterum
                                                                        mediocritatem.
                                                                    </p>
                                                                    <a
                                                                        href="volunteer-profile/index.html"
                                                                        className="thm-btn"
                                                                    >
                                                                        View
                                                                        Profile
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="single-team-member">
                                                                    <div className="img-box">
                                                                        <img
                                                                            loading="lazy"
                                                                            decoding="async"
                                                                            width="270"
                                                                            height="250"
                                                                            src="wp-content/uploads/2022/03/4.jpg"
                                                                            className="attachment-charityhome_270x250 size-charityhome_270x250 wp-post-image"
                                                                            alt=""
                                                                        />{" "}
                                                                        <div className="overlay">
                                                                            <div className="box">
                                                                                <div className="content">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.facebook.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-facebook"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.googleplus.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-google-plus"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.linkedin.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-linkedin"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.twitter.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-twitter"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3>
                                                                        Ashikur
                                                                        Rahman
                                                                    </h3>
                                                                    <span>
                                                                        Businessman
                                                                    </span>
                                                                    <p>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        sea
                                                                        dolor
                                                                        essent
                                                                        nostrud
                                                                        no, pro
                                                                        no vidit
                                                                        aterum
                                                                        mediocritatem.
                                                                    </p>
                                                                    <a
                                                                        href="volunteer-profile/index.html"
                                                                        className="thm-btn"
                                                                    >
                                                                        View
                                                                        Profile
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="single-team-member">
                                                                    <div className="img-box">
                                                                        <img
                                                                            loading="lazy"
                                                                            decoding="async"
                                                                            width="270"
                                                                            height="250"
                                                                            src="wp-content/uploads/2022/03/4.jpg"
                                                                            className="attachment-charityhome_270x250 size-charityhome_270x250 wp-post-image"
                                                                            alt=""
                                                                        />{" "}
                                                                        <div className="overlay">
                                                                            <div className="box">
                                                                                <div className="content">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.facebook.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-facebook"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.googleplus.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-google-plus"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.linkedin.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-linkedin"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.twitter.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-twitter"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3>
                                                                        Luke
                                                                        Fray
                                                                    </h3>
                                                                    <span>
                                                                        Businessman
                                                                    </span>
                                                                    <p>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        sea
                                                                        dolor
                                                                        essent
                                                                        nostrud
                                                                        no, pro
                                                                        no vidit
                                                                        aterum
                                                                        mediocritatem.
                                                                    </p>
                                                                    <a
                                                                        href="volunteer-profile/index.html"
                                                                        className="thm-btn"
                                                                    >
                                                                        View
                                                                        Profile
                                                                    </a>
                                                                </div>
                                                            </div>
                                                            <div className="item">
                                                                <div className="single-team-member">
                                                                    <div className="img-box">
                                                                        <img
                                                                            loading="lazy"
                                                                            decoding="async"
                                                                            width="270"
                                                                            height="250"
                                                                            src="wp-content/uploads/2022/03/1-2.jpg"
                                                                            className="attachment-charityhome_270x250 size-charityhome_270x250 wp-post-image"
                                                                            alt=""
                                                                        />{" "}
                                                                        <div className="overlay">
                                                                            <div className="box">
                                                                                <div className="content">
                                                                                    <ul>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.facebook.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-facebook"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.googleplus.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-google-plus"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.linkedin.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-linkedin"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                        <li>
                                                                                            <a
                                                                                                href="https://www.twitter.com/"
                                                                                                style={{
                                                                                                    backgroundColor:
                                                                                                        "rgb(255, 255, 255)",
                                                                                                    color: "rgb(241, 75, 5)",
                                                                                                }}
                                                                                                target="_blank"
                                                                                            >
                                                                                                <i className="fa fa-twitter"></i>
                                                                                            </a>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <h3>
                                                                        John
                                                                        Peter
                                                                    </h3>
                                                                    <span>
                                                                        Businessman
                                                                    </span>
                                                                    <p>
                                                                        Lorem
                                                                        ipsum
                                                                        dolor
                                                                        sit
                                                                        amet,
                                                                        sea
                                                                        dolor
                                                                        essent
                                                                        nostrud
                                                                        no, pro
                                                                        no vidit
                                                                        aterum
                                                                        mediocritatem.
                                                                    </p>
                                                                    <a
                                                                        href="volunteer-profile/index.html"
                                                                        className="thm-btn"
                                                                    >
                                                                        View
                                                                        Profile
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-bcb0c4b elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="bcb0c4b"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b25e646"
                                data-id="b25e646"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-8ea5770 elementor-widget elementor-widget-charityhome_testimonials_v1"
                                        data-id="8ea5770"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_testimonials_v1.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="sec-padding testimonials-wrapper parallax-section">
                                                <div className="container">
                                                    <div className="sec-title colored light text-center">
                                                        <h2>Testimonials</h2>
                                                        <span className="decor">
                                                            <span className="inner"></span>
                                                        </span>
                                                    </div>

                                                    <div className="testimonaials-carousel owl-carousel owl-theme">
                                                        <div className="item">
                                                            <div className="single-testimonaials">
                                                                <div className="qoute-box">
                                                                    <i className="qoute">
                                                                        "
                                                                    </i>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet, per
                                                                    justo
                                                                    iracundia
                                                                    an. Inani
                                                                    tation
                                                                    tritani mea
                                                                    ut. Mundi
                                                                    scriptorem
                                                                </p>
                                                                <h3>
                                                                    Roberto
                                                                    Carlos
                                                                </h3>
                                                                <span>
                                                                    Patient of
                                                                    Asthama
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="single-testimonaials">
                                                                <div className="qoute-box">
                                                                    <i className="qoute">
                                                                        "
                                                                    </i>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet, per
                                                                    justo
                                                                    iracundia
                                                                    an. Inani
                                                                    tation
                                                                    tritani mea
                                                                    ut. Mundi
                                                                    scriptorem
                                                                </p>
                                                                <h3>
                                                                    John Doe
                                                                </h3>
                                                                <span>
                                                                    Patient of
                                                                    Asthama
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="single-testimonaials">
                                                                <div className="qoute-box">
                                                                    <i className="qoute">
                                                                        "
                                                                    </i>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet, per
                                                                    justo
                                                                    iracundia
                                                                    an. Inani
                                                                    tation
                                                                    tritani mea
                                                                    ut. Mundi
                                                                    scriptorem
                                                                </p>
                                                                <h3>
                                                                    Peter Mark
                                                                </h3>
                                                                <span>
                                                                    Patient of
                                                                    Asthama
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="single-testimonaials">
                                                                <div className="qoute-box">
                                                                    <i className="qoute">
                                                                        "
                                                                    </i>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet, per
                                                                    justo
                                                                    iracundia
                                                                    an. Inani
                                                                    tation
                                                                    tritani mea
                                                                    ut. Mundi
                                                                    scriptorem
                                                                </p>
                                                                <h3>
                                                                    Henry Joe
                                                                </h3>
                                                                <span>
                                                                    Patient of
                                                                    Asthama
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="single-testimonaials">
                                                                <div className="qoute-box">
                                                                    <i className="qoute">
                                                                        "
                                                                    </i>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet, per
                                                                    justo
                                                                    iracundia
                                                                    an. Inani
                                                                    tation
                                                                    tritani mea
                                                                    ut. Mundi
                                                                    scriptorem
                                                                </p>
                                                                <h3>
                                                                    Belli Ellish
                                                                </h3>
                                                                <span>
                                                                    Patient of
                                                                    Asthama
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="single-testimonaials">
                                                                <div className="qoute-box">
                                                                    <i className="qoute">
                                                                        "
                                                                    </i>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet, per
                                                                    justo
                                                                    iracundia
                                                                    an. Inani
                                                                    tation
                                                                    tritani mea
                                                                    ut. Mundi
                                                                    scriptorem
                                                                </p>
                                                                <h3>
                                                                    Akcent Fray
                                                                </h3>
                                                                <span>
                                                                    Patient of
                                                                    Asthama
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="single-testimonaials">
                                                                <div className="qoute-box">
                                                                    <i className="qoute">
                                                                        "
                                                                    </i>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet, per
                                                                    justo
                                                                    iracundia
                                                                    an. Inani
                                                                    tation
                                                                    tritani mea
                                                                    ut. Mundi
                                                                    scriptorem
                                                                </p>
                                                                <h3>
                                                                    Sarah Lenty
                                                                </h3>
                                                                <span>
                                                                    Patient of
                                                                    Asthama
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="single-testimonaials">
                                                                <div className="qoute-box">
                                                                    <i className="qoute">
                                                                        "
                                                                    </i>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet, per
                                                                    justo
                                                                    iracundia
                                                                    an. Inani
                                                                    tation
                                                                    tritani mea
                                                                    ut. Mundi
                                                                    scriptorem
                                                                </p>
                                                                <h3>
                                                                    Michael
                                                                    Stark
                                                                </h3>
                                                                <span>
                                                                    Patient of
                                                                    Asthama
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="single-testimonaials">
                                                                <div className="qoute-box">
                                                                    <i className="qoute">
                                                                        "
                                                                    </i>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet, per
                                                                    justo
                                                                    iracundia
                                                                    an. Inani
                                                                    tation
                                                                    tritani mea
                                                                    ut. Mundi
                                                                    scriptorem
                                                                </p>
                                                                <h3>
                                                                    Snow White
                                                                </h3>
                                                                <span>
                                                                    Patient of
                                                                    Asthama
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="single-testimonaials">
                                                                <div className="qoute-box">
                                                                    <i className="qoute">
                                                                        "
                                                                    </i>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet, per
                                                                    justo
                                                                    iracundia
                                                                    an. Inani
                                                                    tation
                                                                    tritani mea
                                                                    ut. Mundi
                                                                    scriptorem
                                                                </p>
                                                                <h3>
                                                                    Luke Wright
                                                                </h3>
                                                                <span>
                                                                    Patient of
                                                                    Asthama
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="single-testimonaials">
                                                                <div className="qoute-box">
                                                                    <i className="qoute">
                                                                        "
                                                                    </i>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet, per
                                                                    justo
                                                                    iracundia
                                                                    an. Inani
                                                                    tation
                                                                    tritani mea
                                                                    ut. Mundi
                                                                    scriptorem
                                                                </p>
                                                                <h3>
                                                                    Paul Merry
                                                                </h3>
                                                                <span>
                                                                    Patient of
                                                                    Asthama
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="single-testimonaials">
                                                                <div className="qoute-box">
                                                                    <i className="qoute">
                                                                        "
                                                                    </i>
                                                                </div>
                                                                <p>
                                                                    Lorem ipsum
                                                                    dolor sit
                                                                    amet, per
                                                                    justo
                                                                    iracundia
                                                                    an. Inani
                                                                    tation
                                                                    tritani mea
                                                                    ut. Mundi
                                                                    scriptorem
                                                                </p>
                                                                <h3>
                                                                    Naura Lavy
                                                                </h3>
                                                                <span>
                                                                    Patient of
                                                                    Asthama
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    {/* <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-5c18e72 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="5c18e72"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2696f6f"
                                data-id="2696f6f"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-f989030 elementor-widget elementor-widget-charityhome_blogs_v1"
                                        data-id="f989030"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_blogs_v1.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="blog-home sec-padding">
                                                <div className="container">
                                                    <div className="sec-title text-center">
                                                        <h2>Latest News</h2>{" "}
                                                        <p>
                                                            Lorem ipsum is a
                                                            dummy text it will
                                                            use for subtitle
                                                            here
                                                        </p>{" "}
                                                        <span className="decor">
                                                            <span className="inner"></span>
                                                        </span>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-md-4 col-sm-12 sm-col5-center m-btms40">
                                                            <div className="single-blog-post">
                                                                <div className="img-box">
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="360"
                                                                        height="270"
                                                                        src="wp-content/uploads/2022/02/2-360x270.jpg"
                                                                        className="full-width wp-post-image"
                                                                        alt=""
                                                                    />{" "}
                                                                    <div className="overlay">
                                                                        <div className="box">
                                                                            <div className="content">
                                                                                <ul>
                                                                                    <li>
                                                                                        <a href="2021/12/lates-blog-post-with-image/index.html">
                                                                                            <i className="fa fa-link"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="content-box">
                                                                    <div className="date-box">
                                                                        <div className="inner">
                                                                            <div className="date">
                                                                                <b>
                                                                                    09
                                                                                </b>
                                                                                Dec{" "}
                                                                            </div>
                                                                            <div className="comment">
                                                                                <i className="flaticon-interface-1"></i>{" "}
                                                                                0{" "}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="content">
                                                                        <a href="2021/12/lates-blog-post-with-image/index.html">
                                                                            <h3>
                                                                                Lates
                                                                                blog
                                                                                post
                                                                                with
                                                                                image
                                                                            </h3>
                                                                        </a>
                                                                        <p>
                                                                            Lorem
                                                                            ipsum
                                                                            dolor
                                                                            sit
                                                                            amet,
                                                                            his
                                                                            ea
                                                                            unum
                                                                            ponderum,
                                                                            detracto&hellip;{" "}
                                                                        </p>
                                                                        <a
                                                                            className="btn-details"
                                                                            href="2021/12/lates-blog-post-with-image/index.html"
                                                                        >
                                                                            Read
                                                                            More
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-sm-12 sm-col5-center m-btms40">
                                                            <div className="single-blog-post">
                                                                <div className="img-box">
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="360"
                                                                        height="270"
                                                                        src="wp-content/uploads/2022/02/3-360x270.jpg"
                                                                        className="full-width wp-post-image"
                                                                        alt=""
                                                                    />{" "}
                                                                    <div className="overlay">
                                                                        <div className="box">
                                                                            <div className="content">
                                                                                <ul>
                                                                                    <li>
                                                                                        <a href="2021/12/lates-blog-post-with-image-2/index.html">
                                                                                            <i className="fa fa-link"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="content-box">
                                                                    <div className="date-box">
                                                                        <div className="inner">
                                                                            <div className="date">
                                                                                <b>
                                                                                    09
                                                                                </b>
                                                                                Dec{" "}
                                                                            </div>
                                                                            <div className="comment">
                                                                                <i className="flaticon-interface-1"></i>{" "}
                                                                                0{" "}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="content">
                                                                        <a href="2021/12/lates-blog-post-with-image-2/index.html">
                                                                            <h3>
                                                                                Lates
                                                                                blog
                                                                                post
                                                                                with
                                                                                image
                                                                            </h3>
                                                                        </a>
                                                                        <p>
                                                                            Lorem
                                                                            ipsum
                                                                            dolor
                                                                            sit
                                                                            amet,
                                                                            his
                                                                            ea
                                                                            unum
                                                                            ponderum,
                                                                            detracto&hellip;{" "}
                                                                        </p>
                                                                        <a
                                                                            className="btn-details"
                                                                            href="2021/12/lates-blog-post-with-image-2/index.html"
                                                                        >
                                                                            Read
                                                                            More
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4 col-sm-12 sm-col5-center m-btms40">
                                                            <div className="single-blog-post">
                                                                <div className="img-box">
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        width="360"
                                                                        height="270"
                                                                        src="wp-content/uploads/2022/02/4-360x270.jpg"
                                                                        className="full-width wp-post-image"
                                                                        alt=""
                                                                    />{" "}
                                                                    <div className="overlay">
                                                                        <div className="box">
                                                                            <div className="content">
                                                                                <ul>
                                                                                    <li>
                                                                                        <a href="2021/12/lates-blog-post-with-image-3/index.html">
                                                                                            <i className="fa fa-link"></i>
                                                                                        </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="content-box">
                                                                    <div className="date-box">
                                                                        <div className="inner">
                                                                            <div className="date">
                                                                                <b>
                                                                                    09
                                                                                </b>
                                                                                Dec{" "}
                                                                            </div>
                                                                            <div className="comment">
                                                                                <i className="flaticon-interface-1"></i>{" "}
                                                                                0{" "}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="content">
                                                                        <a href="2021/12/lates-blog-post-with-image-3/index.html">
                                                                            <h3>
                                                                                Lates
                                                                                blog
                                                                                post
                                                                                with
                                                                                image
                                                                            </h3>
                                                                        </a>
                                                                        <p>
                                                                            Lorem
                                                                            ipsum
                                                                            dolor
                                                                            sit
                                                                            amet,
                                                                            his
                                                                            ea
                                                                            unum
                                                                            ponderum,
                                                                            detracto&hellip;{" "}
                                                                        </p>
                                                                        <a
                                                                            className="btn-details"
                                                                            href="2021/12/lates-blog-post-with-image-3/index.html"
                                                                        >
                                                                            Read
                                                                            More
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-0a9ae87 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="0a9ae87"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-fc7f294"
                                data-id="fc7f294"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-eec2a03 elementor-widget elementor-widget-charityhome_partners_v1"
                                        data-id="eec2a03"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_partners_v1.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="bg-color-eee p_40">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="clients-carousel owl-carousel owl-theme">
                                                                <div className="item">
                                                                    <div className="img-box">
                                                                        <img
                                                                            decoding="async"
                                                                            src="wp-content/uploads/2021/12/logo-6.png"
                                                                            alt="Awesome Image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="img-box">
                                                                        <img
                                                                            decoding="async"
                                                                            src="wp-content/uploads/2021/12/logo-7.png"
                                                                            alt="Awesome Image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="img-box">
                                                                        <img
                                                                            decoding="async"
                                                                            src="wp-content/uploads/2021/12/logo-8.png"
                                                                            alt="Awesome Image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="img-box">
                                                                        <img
                                                                            decoding="async"
                                                                            src="wp-content/uploads/2021/12/logo-9.png"
                                                                            alt="Awesome Image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="img-box">
                                                                        <img
                                                                            decoding="async"
                                                                            src="wp-content/uploads/2021/12/logo-10.png"
                                                                            alt="Awesome Image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="img-box">
                                                                        <img
                                                                            decoding="async"
                                                                            src="wp-content/uploads/2021/12/logo-6.png"
                                                                            alt="Awesome Image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="img-box">
                                                                        <img
                                                                            decoding="async"
                                                                            src="wp-content/uploads/2021/12/logo-8.png"
                                                                            alt="Awesome Image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="img-box">
                                                                        <img
                                                                            decoding="async"
                                                                            src="wp-content/uploads/2021/12/logo-7.png"
                                                                            alt="Awesome Image"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Home;
