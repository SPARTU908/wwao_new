import React, { useState } from "react";
import { Link, usePage } from "@inertiajs/react";

const Sidebar = () => {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const { url } = usePage();

    const isActive = (path) => url.startsWith(path);

    return (
        <div className="ace-scroll flex-grow-1">
            <ul className="nav has-active-border active-on-right">
                <li
                    className={`nav-item ${isActive("/admin/dashboard") ? "active" : ""}`}
                >
                    <Link href="/admin/dashboard" className="nav-link">
                        <i className="nav-icon fa fa-tachometer-alt"></i>
                        <span className="nav-text">Dashboard</span>
                    </Link>
                </li>

                <li
                    className={`nav-item ${isActive("/admin/chapter-list") ? "active" : ""}`}
                >
                    <Link href="/admin/chapter-list" className="nav-link">
                        <span className="nav-text">Chapters</span>
                    </Link>
                </li>

                <li
                    className={`nav-item ${isActive("/admin/chapter-menu") ? "active" : ""}`}
                >
                    <Link href="/admin/chapter-menu" className="nav-link">
                        <span className="nav-text">Chapter Menu</span>
                    </Link>
                </li>

                <li
                    className={`nav-item ${isActive("/admin/chapter-event") ? "active" : ""}`}
                >
                    <Link href="/admin/chapter-event" className="nav-link">
                        <span className="nav-text"> Events</span>
                    </Link>
                </li>

                <li
                    className={`nav-item ${isActive("/admin/donations") ? "active" : ""}`}
                >
                    <Link href="/admin/donations" className="nav-link">
                        <span className="nav-text"> Donation List</span>
                    </Link>
                </li>

                 <li
                    className={`nav-item ${isActive("/admin/member") ? "active" : ""}`}
                >
                    <Link href="/admin/member" className="nav-link">
                        <span className="nav-text"> Add Members</span>
                    </Link>
                </li>
                 <li
                    className={`nav-item ${isActive("/admin/media") ? "active" : ""}`}
                >
                    <Link href="/admin/media" className="nav-link">
                        <span className="nav-text"> Add Media Coverage</span>
                    </Link>
                </li>

                   <li
                    className={`nav-item ${isActive("/admin/gallery") ? "active" : ""}`}
                >
                    <Link href="/admin/gallery" className="nav-link">
                        <span className="nav-text"> Add Gallery</span>
                    </Link>
                </li>


                 <li
                    className={`nav-item ${isActive("/admin/chapter") ? "active" : ""}`}
                >
                    <Link href="/admin/chapter" className="nav-link">
                        <span className="nav-text"> Add Chapter</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
