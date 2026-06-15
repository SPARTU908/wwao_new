import { router } from '@inertiajs/react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";


const Header = ({sidebarOpen, setSidebarOpen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  //const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {/* Vendor CSS */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admin/node_modules/bootstrap/dist/css/bootstrap.css"
      />

      <link
        rel="stylesheet"
        type="text/css"
        href="/admin/node_modules/fortawesome/fontawesome-free/css/fontawesome.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/admin/node_modules/fortawesome/fontawesome-free/css/regular.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/admin/node_modules/fortawesome/fontawesome-free/css/brands.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="/admin/node_modules/fortawesome/fontawesome-free/css/solid.css"
      />

      {/* Fonts */}
      <link rel="stylesheet" type="text/css" href="/admin/dist/css/ace-font.css" />

      {/* Ace CSS */}
      <link rel="stylesheet" type="text/css" href="/admin/dist/css/ace.css" />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/admin/assets/favicon.png" />

      {/* Dashboard page style */}
      <link
        rel="stylesheet"
        type="text/css"
        href="/admin/views/pages/dashboard/page-style.css"
      />

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-fixed navbar-blue">
       <div className="navbar-inner">
          <div className="navbar-intro justify-content-xl-between">

         {/* MOBILE TOGGLE */}
        <button
          className="btn btn-burger d-xl-none"
          onClick={() => setSidebarOpen(prev => !prev)}
        >
          <span className="bars"></span>
        </button>

        {/* BRAND */}
        <a className="navbar-brand text-white">
          <i className="fa fa-home"></i> WWAO
        </a>


            {/* Desktop Sidebar Toggle */}
           {/* DESKTOP TOGGLE */}
        <button
          className="btn btn-burger d-none d-xl-flex"
          onClick={() => setSidebarOpen(prev => !prev)}
        >
          <span className="bars"></span>
        </button>
          </div>

          {/* Search Bar */}
          <div className="navbar-content">
            <button
              className="navbar-toggler py-2"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSearch"
            >
              <i className="fa fa-search text-white text-90 py-1"></i>
            </button>

            <div
              className="collapse navbar-collapse navbar-backdrop"
              id="navbarSearch"
            >
              <form className="d-flex align-items-center ml-lg-4 py-1">
                <i className="fa fa-search text-white d-none d-lg-block pos-rel"></i>
                <input
                  type="text"
                  className="navbar-input mx-3 flex-grow-1 pr-1 pl-lg-4 ml-lg-n3 py-2 autofocus"
                  placeholder="SEARCH ..."
                />
              </form>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
      {/* Mobile Menu Toggle */}
      <button
        className="navbar-toggler ml-1 mr-2 px-1 d-lg-none"
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        
      >
        <span className="pos-rel">
          <img
            className="border-2 brc-white-tp1 radius-round"
            width="36"
            src="/admin/assets/image/avatar/avatar6.jpg"
            alt="User"
          />
          <span className="bgc-warning radius-round border-2 brc-white p-1 position-tr"></span>
        </span>
      </button>

      {/* MENU */}
      <div
        id="navbarMenu"
        className={`navbar-menu navbar-collapse navbar-backdrop ${
          isMobile ? (isMenuOpen ? "show" : "collapse") : "show"
        }`}
      >
        <div className="navbar-nav">
          <ul className="nav">

            {/* USER PROFILE DROPDOWN */}
            <li className="nav-item dropdown order-first order-lg-last">
              <a
                className="nav-link"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setIsUserOpen(!isUserOpen);
                }}
              >
                <img
                  id="id-navbar-user-image"
                  className="d-none d-lg-inline-block radius-round border-2 brc-white-tp1 mr-2 w-6"
                  src="/admin/assets/image/avatar/avatar6.jpg"
                  alt="User"
                />
                <span className="d-inline-block d-lg-none d-xl-inline-block">
                  <span className="text-90">Welcome,</span>
                  <span className="nav-user-name">Admin</span>
                </span>

                <i className="caret fa fa-angle-down d-none d-xl-block"></i>
              </a>

              <div
                className={`dropdown-menu dropdown-caret dropdown-menu-right dropdown-animated brc-primary-m3 py-1 ${
                  isUserOpen ? "show" : ""
                }`}
              >
                <a className="dropdown-item mt-1 btn btn-outline-grey bgc-h-primary-l3" href="/profile">
                  <i className="fa fa-user text-primary-m1 mr-1"></i>
                  Profile
                </a>

                <a className="dropdown-item btn btn-outline-grey bgc-h-success-l3" href="#">
                  <i className="fa fa-cog text-success-m1 mr-1"></i>
                  Settings
                </a>

                <div className="dropdown-divider"></div>

                
<a
  href="#"
  className="dropdown-item btn btn-outline-grey bgc-h-secondary-l3"
  onClick={(e) => {
    e.preventDefault();
    router.post('/logout');
  }}
>
  <i className="fa fa-power-off text-warning-d1 mr-1"></i>
  Logout
</a>




              </div>
            </li>
          </ul>
        </div>
      </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
