import React, { useState, useEffect } from "react";
import GoogleTranslate from "./GoogleTranslate";
import { Link } from "@inertiajs/react";

const Header = ({ Chapter_menu = [] }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <div>
            <div className="top-bar">
                <div className="container top-bar-inner">
                    {/* Left */}
                    <div className="top-left">
                        <p>
                            <span>Support Us :</span> wwaorg@gmail.com
                        </p>
                    </div>

                    {/* Right */}
                    <div className="top-right">
                        <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a
                            href="https://www.twitter.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <header className="header">
                <div className="container clearfix">
                    <div className="logo pull-left">
                        <a
                            href="/"
                            title="World Women Awakening Organization"
                            className="logo-wrap"
                        >
                            <img
                                src="/front/wwao-logo.jpeg"
                                alt="World Women Awakening Organization"
                                className="logo-img"
                                width={100}
                                height={100}
                            />

                         <div className="logo-text-row">
    
    {/* English */}
    <div className="logo-text english">
        <span className="logo-main">
            World <strong>Women </strong>
        </span>
        <span className="logo-sub">
            Awakening Organisation
        </span>
    </div>

    {/* Hindi */}
    <div className="logo-text hindi">
        <span className="logo-main">
            विश्व <strong>नारी </strong>
        </span>
        <span className="logo-sub">
            अभ्युदय संगठन
        </span>
    </div>

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
                                <p>
                                    <b>wwaorg@gmail.com </b>
                                </p>{" "}
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
                                    <b>+91 78979 92917</b>
                                </p>{" "}
                            </div>
                        </div>
                        <div className="single-header-info translate-center">
                            <div className="translate-wrapper">
                                <GoogleTranslate />
                            </div>
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
                                        href="/"
                                        data-toggle="dropdown1"
                                        className="hvr-underline-from-left1"
                                        aria-expanded="false"
                                        data-scroll
                                        data-options="easing: easeOutQuart"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li
                                    id="menu-item-59"
                                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-59"
                                >
                                    <Link
                                        href="/about"
                                        className="hvr-underline-from-left1"
                                    >
                                        About
                                    </Link>
                                </li>
                                <li className="menu-item menu-item-has-children dropdown">
                                    <a
                                        title="Chapters"
                                        href="#"
                                        data-toggle="dropdown"
                                        className="hvr-underline-from-left1"
                                    >
                                        Chapters
                                    </a>

                                    <ul className="submenu">
                                        {Chapter_menu.map((menu) => (
                                            <li key={menu.id}>
                                                <Link
                                                    href={`/chapters/${menu.id}`}
                                                >
                                                    {menu.Chapter_Name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li
                                    id="menu-item-84"
                                    className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-84 dropdown"
                                >
                                    <Link
                                        href="/contact"
                                        className="hvr-underline-from-left1"
                                    >
                                        Join Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="nav-footer">
                            <button
                                className="mobile-nav-toggler"
                                onClick={() => setMobileOpen(true)}
                            >
                                <i className="fa fa-bars"></i>
                            </button>
                        </div>
                    </div>
                    <div className="navbar-right-info pull-right">
                        <div className="search-box">
                            <div
                                className="donate-btn-wrapper"
                                style={{ marginRight: "15px" }}
                            >
                                <a
                                    className="thm-btn"
                                    href="/donate"
                                >
                                    Donate Now
                                </a>
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

            <div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
                <div
                    className="menu-backdrop"
                    onClick={() => setMobileOpen(false)}
                ></div>

                <nav className="menu-box">
                    <div
                        className="close-btn"
                        onClick={() => setMobileOpen(false)}
                    >
                        <span className="icon flaticon-remove"></span>
                    </div>
                    <div className="nav-logo">
                        <a href="index.html" title="Charity Home">
                            <img
                                src="/front/wwao-logo.jpeg"
                                alt="logo"
                                className="logo-img"
                                width={100}
                                height={100}
                            />
                        </a>
                    </div>

                    <div className="menu-outer">
                        <ul>
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>

                            <li>
                                <span>Chapters</span>
                                <ul className="submenu">
                                    {Chapter_menu.map((menu) => (
                                        <li key={menu.id}>
                                            <Link href={`/chapters/${menu.id}`}>
                                                {menu.Chapter_Name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            <li>
                                <Link href="/contact">Join Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="social-links">
                        <ul className="clearfix">
                            <li>
                                <a
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    rel="noreferrer"
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
                                    rel="noreferrer"
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
                                    rel="noreferrer"
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
                                    rel="noreferrer"
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
        </div>
    );
};

export default Header;
