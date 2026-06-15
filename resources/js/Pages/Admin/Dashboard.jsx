import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        if (sidebarOpen) {
            document.body.classList.add("sidebar-open");
        } else {
            document.body.classList.remove("sidebar-open");
        }

        return () => {
            document.body.classList.remove("sidebar-open");
        };
    }, [sidebarOpen]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <Head title="Dashboard"></Head>

            <div
                className={`body-container ${sidebarOpen ? "sidebar-visible" : ""}`}
            >
                <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <div className="main-container bgc-white">
                    <div
                        id="sidebar"
                        className={`sidebar sidebar-fixed expandable sidebar-light ${sidebarOpen ? "sidebar-open" : ""}`}
                    >
                        <div className="sidebar-inner">
                            {/* <Sidebar sidebarOpen={sidebarOpen} /> */}

                            <Sidebar
                                sidebarOpen={sidebarOpen}
                                setSidebarOpen={setSidebarOpen}
                                isMobile={isMobile}
                            />

                            <div className="sidebar-section">
                                <div className="sidebar-section-item fadeable-bottom">
                                    <div className="fadeinable">
                                        <div className="pos-rel">
                                            <img
                                                alt="Alexa's Photo"
                                                src="assets/image/avatar/avatar3.jpg"
                                                width="42"
                                                className="px-1px radius-round mx-2 border-2 brc-default-m2"
                                            />
                                            <span className="bgc-success radius-round border-2 brc-white p-1 position-tr mr-1 mt-2px"></span>
                                        </div>
                                    </div>

                                    <div className="fadeable hideable w-100 bg-transparent shadow-none border-0"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div role="main" className="main-content">
                        <div className="page-content container container-plus">
                            <div className="page-header pb-2">
                                <h1 className="page-title text-primary-d2 text-150">
                                    Dashboard
                                    <small className="page-info text-secondary-d2 text-nowrap">
                                        <i className="fa fa-angle-double-right text-80"></i>
                                        overview &amp; stats
                                    </small>
                                </h1>

                                <div className="page-tools d-inline-flex">
                                    <button
                                        type="button"
                                        className="btn btn-light-green btn-h-green btn-a-green border-0 radius-3 py-2 text-600 text-90"
                                    >
                                        <span className="d-none d-sm-inline mr-1">
                                            Save
                                        </span>
                                        <i className="fa fa-save text-110 w-2 h-2"></i>
                                    </button>

                                    <button
                                        type="button"
                                        className="mx-2px btn btn-light-purple btn-h-purple btn-a-purple border-0 radius-3 py-2 text-90"
                                    >
                                        <i className="fa fa-undo text-110 w-2 h-2"></i>
                                    </button>

                                    <div className="btn-group dropdown dd-backdrop dd-backdrop-none-md">
                                        <button
                                            type="button"
                                            className="btn btn-light-primary btn-h-primary btn-a-primary border-0 radius-3 py-2 text-90 dropdown-toggle"
                                            data-display="static"
                                            data-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="fa fa-search text-110 w-2 h-2"></i>
                                        </button>

                                        <div className="dropdown-menu dropdown-menu-right dropdown-caret dropdown-animated animated-2 dd-slide-up dd-slide-none-md">
                                            <div className="dropdown-inner">
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Action
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Another action
                                                </a>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Something else here
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                <a
                                                    className="dropdown-item"
                                                    href="#"
                                                >
                                                    Separated link
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                          

                        
                        </div>

                        <Footer />
                    </div>

               
                </div>
            </div>
        </>
    );
};

export default Dashboard;


