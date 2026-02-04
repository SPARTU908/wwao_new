import React from "react";
import GoogleTranslate from "./GoogleTranslate";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
    return (
        <div>
            <section className="top-bar">
                <div className="container clearfix">
                    <div className="left-text pull-left">
                        <p>
                            <div className="top-bar">
                                <LanguageSwitcher />
                                {/* <span className="top-text">
                                    Devkhat (Devghat), Naugrah, Chandauli (U.P)
                                </span> */}
                            </div>
                            <GoogleTranslate />
                        </p>
                    </div>
                    {/* <!-- /.left-text --> */}
                    <div className="social-icons pull-right">
                        <ul>
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
                                    <i className="fa fa-facebook"></i>
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
                                    <i className="fa fa-linkedin"></i>
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
                                    <i className="fa fa-skype"></i>
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
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <!-- /.social-icons --> */}
                </div>
            </section>

            <header className="header">
                <div className="container clearfix">
                    <div className="logo pull-left">
                        <a
                            href="/"
                            title="World Women Awakening Organization"
                            className="logo-wrap"
                        >
                            <img
                                src="front/wwao-logo.jpeg"
                                alt="World Women Awakening Organization"
                                className="logo-img"
                                width={100}
                                height={100}
                            />

                            <div className="logo-text">
                                <span className="logo-main">
                                    WORLD  <strong>WOMEN</strong>
                                </span>
                                <span className="logo-sub">Awakening Organization</span>
                            </div>
                        </a>
                    </div>
                    <div className="header-right-info pull-right clearfix">
                        <div className="single-header-info">
                            <div className="icon-box">
                                <div className="inner-box">
                                    <i className="flaticon-interface-2"></i>
                                </div>
                            </div>
                            <div className="content">
                                <h3>EMAIL</h3>
                                <p>companyname@mail.com</p>{" "}
                            </div>
                        </div>

                        <div className="single-header-info">
                            <div className="icon-box">
                                <div className="inner-box">
                                    <i className="flaticon-telephone"></i>
                                </div>
                            </div>
                            <div className="content">
                                <h3>Call Now</h3>
                                <p>
                                    <b>(732) 803-010-03</b>
                                </p>{" "}
                            </div>
                        </div>
                        <div className="single-header-info">
                            {/* <!-- Modal: donate now Starts --> */}
                            <a
                                className="thm-btn"
                                data-toggle="modal"
                                href="campaigns/charity-for-education/donate/index.html"
                            >
                                Donate Now
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <nav className="mainmenu-area stricky">
                <div className="container clearfix">
                    <div className="navigation pull-left">
                        <div className="nav-header">
                            <ul>
                                <li
                                    id="menu-item-82"
                                    className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-82 dropdown current"
                                >
                                    <a
                                        title="Home"
                                        href="#"
                                        data-toggle="dropdown1"
                                        className="hvr-underline-from-left1"
                                        aria-expanded="false"
                                        data-scroll
                                        data-options="easing: easeOutQuart"
                                    >
                                        Home
                                    </a>
                                    {/* <ul role="menu" className="submenu"> */}
                                    {/* <li
                                                id="menu-item-75"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-12 current_page_item menu-item-75 active"
                                            >
                                                <a
                                                    title="Home One"
                                                    href="index.html"
                                                >
                                                    Home One
                                                </a>
                                            </li> */}
                                    {/* <li
                                                id="menu-item-77"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-77"
                                            >
                                                <a
                                                    title="Home Two"
                                                    href="home-two/index.html"
                                                >
                                                    Home Two
                                                </a>
                                            </li> */}
                                    {/* <li
                                                id="menu-item-76"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-76"
                                            >
                                                <a
                                                    title="Home Three"
                                                    href="home-three/index.html"
                                                >
                                                    Home Three
                                                </a>
                                            </li> */}
                                    {/* <li
                                                id="menu-item-74"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74"
                                            >
                                                <a
                                                    title="Home Foure"
                                                    href="home-four/index.html"
                                                >
                                                    Home Foure
                                                </a>
                                            </li> */}
                                    {/* </ul> */}
                                </li>
                                <li
                                    id="menu-item-59"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59"
                                >
                                    <a
                                        title="About"
                                        href="/about"
                                        className="hvr-underline-from-left1"
                                        data-scroll
                                        data-options="easing: easeOutQuart"
                                    >
                                        About
                                    </a>
                                </li>
                                <li
                                    id="menu-item-83"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-83 dropdown"
                                >
                                    <a
                                        title="Causes"
                                        href="/chapters"
                                        data-toggle="dropdown1"
                                        className="hvr-underline-from-left1"
                                        aria-expanded="false"
                                        data-scroll
                                        data-options="easing: easeOutQuart"
                                    >
                                        Chapters
                                    </a>
                                    {/* <ul role="menu" className="submenu"> */}
                                    {/* <li
                                                id="menu-item-63"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-63"
                                            >
                                                <a
                                                    title="Causes Grid View"
                                                    href="causes-grid/index.html"
                                                >
                                                    Causes Grid View
                                                </a>
                                            </li> */}
                                    {/* <li
                                                id="menu-item-64"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-64"
                                            >
                                                <a
                                                    title="Causes List View"
                                                    href="causes-list/index.html"
                                                >
                                                    Causes List View
                                                </a>
                                            </li> */}
                                    {/* <li
                                                id="menu-item-1365"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1365"
                                            >
                                                <a
                                                    title="Causes Single"
                                                    href="campaigns/charity-for-education-7/index.html"
                                                >
                                                    Causes Single
                                                </a>
                                            </li> */}
                                    {/* </ul> */}
                                </li>
                                <li
                                    id="menu-item-84"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-84 dropdown"
                                >
                                    <a
                                        title="Events"
                                        href="/contact"
                                        data-toggle="dropdown1"
                                        className="hvr-underline-from-left1"
                                        aria-expanded="false"
                                        data-scroll
                                        data-options="easing: easeOutQuart"
                                    >
                                        Contact Us
                                    </a>
                                    {/* <ul role="menu" className="submenu">
                                            <li
                                                id="menu-item-68"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-68"
                                            >
                                                <a
                                                    title="Event Grid View"
                                                    href="events-grid/index.html"
                                                >
                                                    Event Grid View
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-69"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-69"
                                            >
                                                <a
                                                    title="Events List View"
                                                    href="events-list/index.html"
                                                >
                                                    Events List View
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-1374"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1374"
                                            >
                                                <a
                                                    title="Event Details"
                                                    href="event/charity-for-education-2/index.html"
                                                >
                                                    Event Details
                                                </a>
                                            </li>
                                        </ul> */}
                                </li>
                                {/* <li
                                        id="menu-item-85"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-85 dropdown"
                                    >
                                        <a
                                            title="Volunteer"
                                            href="#"
                                            data-toggle="dropdown1"
                                            className="hvr-underline-from-left1"
                                            aria-expanded="false"
                                            data-scroll
                                            data-options="easing: easeOutQuart"
                                        >
                                            Volunteer
                                        </a>
                                        <ul role="menu" className="submenu">
                                            <li
                                                id="menu-item-80"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-80"
                                            >
                                                <a
                                                    title="Volunteer Style One"
                                                    href="volunteer-style-one/index.html"
                                                >
                                                    Volunteer Style One
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-81"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-81"
                                            >
                                                <a
                                                    title="Volunteer Style Two"
                                                    href="volunteer-style-two/index.html"
                                                >
                                                    Volunteer Style Two
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-79"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-79"
                                            >
                                                <a
                                                    title="Volunteer  Profile"
                                                    href="volunteer-profile/index.html"
                                                >
                                                    Volunteer Profile
                                                </a>
                                            </li>
                                        </ul>
                                    </li> */}
                                {/* <li
                                        id="menu-item-86"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-86 dropdown"
                                    >
                                        <a
                                            title="Gallery"
                                            href="#"
                                            data-toggle="dropdown1"
                                            className="hvr-underline-from-left1"
                                            aria-expanded="false"
                                            data-scroll
                                            data-options="easing: easeOutQuart"
                                        >
                                            Gallery
                                        </a>
                                        <ul role="menu" className="submenu">
                                            <li
                                                id="menu-item-71"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-71"
                                            >
                                                <a
                                                    title="Gallery Style One"
                                                    href="gallery-style-one/index.html"
                                                >
                                                    Gallery Style One
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-73"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-73"
                                            >
                                                <a
                                                    title="Gallery Style Two"
                                                    href="gallery-style-two/index.html"
                                                >
                                                    Gallery Style Two
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-72"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-72"
                                            >
                                                <a
                                                    title="Gallery Style Three"
                                                    href="gallery-style-three/index.html"
                                                >
                                                    Gallery Style Three
                                                </a>
                                            </li>
                                        </ul>
                                    </li> */}
                                {/* <li
                                        id="menu-item-87"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-87 dropdown"
                                    >
                                        <a
                                            title="Pages"
                                            href="#"
                                            data-toggle="dropdown1"
                                            className="hvr-underline-from-left1"
                                            aria-expanded="false"
                                            data-scroll
                                            data-options="easing: easeOutQuart"
                                        >
                                            Pages
                                        </a>
                                        <ul role="menu" className="submenu">
                                            <li
                                                id="menu-item-70"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-70"
                                            >
                                                <a
                                                    title="Our Faqs"
                                                    href="faq/index.html"
                                                >
                                                    Our Faqs
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-1380"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1380"
                                            >
                                                <a
                                                    title="Donation"
                                                    href="campaigns/charity-for-education/donate/index.html"
                                                >
                                                    Donation
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-1375"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1375"
                                            >
                                                <a
                                                    title="Error Page"
                                                    href="index55a5.html?p=123456"
                                                >
                                                    Error Page
                                                </a>
                                            </li>
                                        </ul>
                                    </li> */}
                                {/* <li
                                        id="menu-item-88"
                                        className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-88 dropdown"
                                    >
                                        <a
                                            title="Blog"
                                            href="#"
                                            data-toggle="dropdown1"
                                            className="hvr-underline-from-left1"
                                            aria-expanded="false"
                                            data-scroll
                                            data-options="easing: easeOutQuart"
                                        >
                                            Blog
                                        </a>
                                        <ul role="menu" className="submenu">
                                            <li
                                                id="menu-item-61"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-61"
                                            >
                                                <a
                                                    title="Blog Style One"
                                                    href="blog-style-one/index.html"
                                                >
                                                    Blog Style One
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-62"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-62"
                                            >
                                                <a
                                                    title="Blog Style Two"
                                                    href="blog-style-two/index.html"
                                                >
                                                    Blog Style Two
                                                </a>
                                            </li>
                                            <li
                                                id="menu-item-1294"
                                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1294"
                                            >
                                                <a
                                                    title="Blog Details"
                                                    href="2022/03/aliquam-nibh-velit-faucibus/index.html"
                                                >
                                                    Blog Details
                                                </a>
                                            </li>
                                        </ul>
                                    </li> */}
                                {/* <li
                                        id="menu-item-65"
                                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-65"
                                    >
                                        <a
                                            title="Contact"
                                            href="contact/index.html"
                                            className="hvr-underline-from-left1"
                                            data-scroll
                                            data-options="easing: easeOutQuart"
                                        >
                                            Contact
                                        </a>
                                    </li> */}
                            </ul>
                        </div>
                        <div className="nav-footer">
                            <button className="mobile-nav-toggler">
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>
                    </div>
                    <div className="navbar-right-info pull-right">
                        <div className="search-box">
                            <div className="search-btn">
                                <i className="fa fa-search"></i>
                            </div>
                            <div className="search-form-area">
                                <form
                                    action="https://fastwpdemo.com/demo/charityhome/"
                                    method="get"
                                    className="search-form"
                                >
                                    <i className="flaticon-cancel search-close-btn"></i>
                                    <input
                                        type="text"
                                        name="s"
                                        value=""
                                        placeholder="Search...."
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
