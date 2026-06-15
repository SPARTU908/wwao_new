import React from "react";
import "../../../../public/admin/node_modules/bootstrap/dist/css/bootstrap.css";
import "../../../../public/admin/node_modules/fortawesome/fontawesome-free/css/fontawesome.css";
import "../../../../public/admin/node_modules/fortawesome/fontawesome-free/css/regular.css";
import "../../../../public/admin/node_modules/fortawesome/fontawesome-free/css/brands.css";
import "../../../../public/admin/node_modules/fortawesome/fontawesome-free/css/solid.css";
import "../../../../public/admin/dist/css/ace-font.css";
import "../../../../public/admin/dist/css/ace.css";
import "../../../../public/admin/assets/favicon.png";
import "../../../../public/admin/views/pages/page-login/page-style.css";
import InputError from "@/Components/InputError";

import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <>
            <div className="body-container">
                <div className="main-container container bgc-transparent">
                    <div className="main-content minh-100 justify-content-center">
                        <div className="p-2 p-md-4">
                            <div className="row" id="row-1">
                                <div className="col-12 col-xl-10 offset-xl-1 bgc-white shadow radius-1 overflow-hidden">
                                    <div className="row" id="row-2">
                                        <div
                                            id="id-col-intro"
                                            className="col-lg-5 d-none d-lg-flex border-r-1 brc-default-l3 px-0"
                                        >
                                            {/* <!-- the left side section is carousel in this demo, to show some example variations --> */}

                                            <div
                                                id="loginBgCarousel"
                                                className="carousel slide minw-100 h-100"
                                            >
                                                <ol className="d-none carousel-indicators">
                                                    <li
                                                        data-target="#loginBgCarousel"
                                                        data-slide-to="0"
                                                        className="active"
                                                    ></li>
                                                    <li
                                                        data-target="#loginBgCarousel"
                                                        data-slide-to="1"
                                                    ></li>
                                                    <li
                                                        data-target="#loginBgCarousel"
                                                        data-slide-to="2"
                                                    ></li>
                                                    <li
                                                        data-target="#loginBgCarousel"
                                                        data-slide-to="3"
                                                    ></li>
                                                </ol>

                                                <div className="carousel-inner minw-100 h-100">
                                                    <div className="carousel-item active minw-100 h-100">
                                                        {/* <!-- default carousel section that you see when you open login page --> */}
                                                        <div
                                                            style={{
                                                                backgroundImage:
                                                                    "url(assets/image/login-bg-1.svg)",
                                                            }}
                                                            className="px-3 bgc-blue-l4 d-flex flex-column align-items-center justify-content-center"
                                                        >
                                                            <a
                                                                className="mt-5 mb-2"
                                                                href="dashboard.html"
                                                            >
                                                                <i className="fa fa-leaf text-success-m2 fa-3x"></i>
                                                            </a>

                                                            <h2 className="text-primary-d1">
                                                                World Woman{" "}
                                                                <span className="text-80 text-dark-l1">
                                                                    {" "}
                                                                    Awakening
                                                                    Organisation
                                                                </span>
                                                            </h2>

                                                            <div className="mt-5 mx-4 text-dark-tp3">
                                                                <span className="text-120">
                                                                    Join our
                                                                    community to
                                                                    make
                                                                    friends,
                                                                    <br /> meet
                                                                    experts
                                                                    &amp;
                                                                    receive
                                                                    exclusive
                                                                    offers!
                                                                </span>
                                                                <hr className="mb-1 brc-black-tp10" />
                                                                <div>
                                                                    <a
                                                                        id="id-start-carousel"
                                                                        href="#"
                                                                        className="text-95 text-dark-l2 d-inline-block mt-3"
                                                                    >
                                                                        <i className="far fa-image text-110 text-purple-m1 mr-1 w-2"></i>
                                                                        Change
                                                                        background
                                                                        image
                                                                    </a>
                                                                    <br />
                                                                    <a
                                                                        id="id-remove-carousel"
                                                                        href="#"
                                                                        className="text-md text-dark-l2 d-inline-block mt-3"
                                                                    >
                                                                        <i className="far fa-trash-alt text-110 text-orange-d1 mr-1 w-2"></i>
                                                                        Remove
                                                                        this
                                                                        section
                                                                    </a>
                                                                    <br />
                                                                    <a
                                                                        id="id-fullscreen"
                                                                        href="#"
                                                                        className="text-md text-dark-l2 d-inline-block mt-3"
                                                                    >
                                                                        <i className="fa fa-expand text-110 text-green-m1 mr-1 w-2"></i>
                                                                        Make
                                                                        full-size
                                                                    </a>
                                                                </div>
                                                            </div>

                                                            <div className="mt-auto mb-4 text-dark-tp2">
                                                                Ace Company
                                                                &copy; 2021
                                                            </div>
                                                        </div>
                                                    </div>

                                                  <div className="carousel-item minw-100 h-100">
                                                        {/* <!-- the second carousel item with dark background --> */}
                                                        <div
                                                            style={{
                                                                backgroundImage:
                                                                    "url(assets/image/login-bg-2.svg)",
                                                            }}
                                                            className="d-flex flex-column align-items-center justify-content-start"
                                                        >
                                                            <a
                                                                className="mt-5 mb-2"
                                                                href="dashboard.html"
                                                            >
                                                                <i className="fa fa-leaf text-success-m2 fa-3x"></i>
                                                            </a>

                                                            <h2 className="text-blue-l1">
                                                                Ace{" "}
                                                                <span className="text-80 text-white-tp3">
                                                                    Application
                                                                </span>
                                                            </h2>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item minw-100 h-100">
                                                        <div
                                                            style={{
                                                                backgroundImage:
                                                                    "url(assets/image/login-bg-3.jpg)",
                                                            }}
                                                            className="d-flex flex-column align-items-center justify-content-start"
                                                        >
                                                            <div className="bgc-black-tp4 radius-1 p-3 w-90 text-center my-3 h-100">
                                                                <a
                                                                    className="mt-5 mb-2"
                                                                    href="dashboard.html"
                                                                >
                                                                    <i className="fa fa-leaf text-success-m2 fa-3x"></i>
                                                                </a>

                                                                <h2 className="text-blue-l1">
                                                                    Ace{" "}
                                                                    <span className="text-80 text-white-tp3">
                                                                        Application
                                                                    </span>
                                                                </h2>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="carousel-item minw-100 h-100">
                                                        <div
                                                            style={{
                                                                backgroundImage:
                                                                    "url(assets/image/login-bg-4.jpg)",
                                                            }}
                                                            className="d-flex flex-column align-items-center justify-content-start"
                                                        >
                                                            <a
                                                                className="mt-5 mb-2"
                                                                href="dashboard.html"
                                                            >
                                                                <i className="fa fa-leaf text-success-m2 fa-3x"></i>
                                                            </a>

                                                            <h2 className="text-blue-d1">
                                                                Ace{" "}
                                                                <span className="text-80 text-dark-tp3">
                                                                    Application
                                                                </span>
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            id="id-col-main"
                                            className="col-12 col-lg-7 py-lg-5 bgc-white px-0"
                                        >
                                            {/* <!-- you can also use these tab links --> */}
                                            <ul
                                                className="d-none mt-n4 mb-4 nav nav-tabs nav-tabs-simple justify-content-end bgc-black-tp11"
                                                role="tablist"
                                            >
                                                <li className="nav-item mx-2">
                                                    <a
                                                        className="nav-link active px-2"
                                                        data-toggle="tab"
                                                        href="#id-tab-login"
                                                        role="tab"
                                                        aria-controls="id-tab-login"
                                                        aria-selected="true"
                                                    >
                                                        Login
                                                    </a>
                                                </li>
                                                <li className="nav-item mx-2">
                                                    <a
                                                        className="nav-link px-2"
                                                        data-toggle="tab"
                                                        href="#id-tab-signup"
                                                        role="tab"
                                                        aria-controls="id-tab-signup"
                                                        aria-selected="false"
                                                    >
                                                        Signup
                                                    </a>
                                                </li>
                                            </ul>

                                            <div
                                                className="tab-content tab-sliding border-0 p-0"
                                                data-swipe="right"
                                            >
                                                <div
                                                    className="tab-pane active show mh-100 px-3 px-lg-0 pb-3"
                                                    id="id-tab-login"
                                                >
                                                    {/* <!-- show this in desktop --> */}
                                                    <div className="d-none d-lg-block col-md-6 offset-md-3 mt-lg-4 px-0">
                                                        <h4 className="text-dark-tp4 border-b-1 brc-secondary-l2 pb-1 text-130">
                                                            <i className="fa fa-coffee text-orange-m1 mr-1"></i>
                                                            Welcome Back
                                                        </h4>
                                                    </div>

                                                    {/* <!-- show this in mobile device --> */}
                                                    <div className="d-lg-none text-secondary-m1 my-4 text-center">
                                                        <a href="dashboard.html">
                                                            <i className="fa fa-leaf text-success-m2 text-200 mb-4"></i>
                                                        </a>
                                                        <h1 className="text-170">
                                                            <span className="text-blue-d1">
                                                                Ace{" "}
                                                                <span className="text-80 text-dark-tp3">
                                                                    Application
                                                                </span>
                                                            </span>
                                                        </h1>
                                                        Welcome back
                                                    </div>

                                                    {status && (
                                                        <div className="mb-4 text-sm font-medium text-green-600">
                                                            {status}
                                                        </div>
                                                    )}
                                                    <form
                                                        className="form-row mt-4"
                                                        method="POST"
                                                        onSubmit={submit}
                                                    >
                                                        {/* Username */}
                                                        <div className="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                                            <div className="d-flex align-items-center input-floating-label text-blue brc-blue-m2">
                                                                <input
                                                                    id="email"
                                                                    name="email"
                                                                    type="email"
                                                                    placeholder="Enter your email"
                                                                    className="form-control form-control-lg pr-4 shadow-none"
                                                                    value={
                                                                        data.email
                                                                    }
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        setData(
                                                                            "email",
                                                                            e
                                                                                .target
                                                                                .value,
                                                                        )
                                                                    }
                                                                    isFocused={
                                                                        true
                                                                    }
                                                                    autoComplete="username"
                                                                />
                                                                <i className="fa fa-user text-grey-m2 ml-n4"></i>
                                                                <label
                                                                    className="floating-label text-grey-l1 ml-n3"
                                                                    htmlFor="id-login-username"
                                                                >
                                                                    Username
                                                                </label>
                                                            </div>
                                                        </div>
                                                        <InputError
                                                            message={
                                                                errors.email
                                                            }
                                                            className="mt-2"
                                                        />
                                                        {/* Password */}
                                                        <div className="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-2 mt-md-1">
                                                            <div className="d-flex align-items-center input-floating-label text-blue brc-blue-m2">
                                                                <input
                                                                    id="password"
                                                                    type="password"
                                                                    name="password"
                                                                    value={
                                                                        data.password
                                                                    }
                                                                    autoComplete="current-password"
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        setData(
                                                                            "password",
                                                                            e
                                                                                .target
                                                                                .value,
                                                                        )
                                                                    }
                                                                    className="form-control form-control-lg pr-4 shadow-none"
                                                                />
                                                                <i className="fa fa-key text-grey-m2 ml-n4"></i>
                                                                <label
                                                                    className="floating-label text-grey-l1 ml-n3"
                                                                    htmlFor="id-login-password"
                                                                >
                                                                    Password
                                                                </label>
                                                            </div>
                                                            <InputError
                                                                message={
                                                                    errors.password
                                                                }
                                                                className="mt-2"
                                                            />
                                                        </div>

                                                        {/* Forgot password */}
                                                        <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 text-right mt-n2 mb-2">
                                                            <a
                                                                href="#"
                                                                className="text-primary-m1 text-95"
                                                            >
                                                                Forgot Password?
                                                            </a>
                                                        </div>

                                                        {/* Remember + Submit */}
                                                        <div className="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                                            <label className="d-inline-block mt-3 mb-0 text-dark-l1">
                                                                <input
                                                                    type="checkbox"
                                                                    className="mr-1"
                                                                    name="remember"
                                                                    checked={
                                                                        data.remember
                                                                    }
                                                                    onChange={(
                                                                        e,
                                                                    ) =>
                                                                        setData(
                                                                            "remember",
                                                                            e
                                                                                .target
                                                                                .checked,
                                                                        )
                                                                    }
                                                                />
                                                                Remember me
                                                            </label>

                                                            <button
                                                                type="submit"
                                                                className="btn btn-primary btn-block px-4 btn-bold mt-2 mb-4"
                                                                disabled={
                                                                    processing
                                                                }
                                                            >
                                                                Sign In
                                                            </button>
                                                        </div>
                                                    </form>

                                                    <div className="form-row">
                                                        <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 d-flex flex-column align-items-center justify-content-center">
                                                            <hr className="brc-default-l2 mt-0 mb-2 w-100" />

                                                            <div className="p-0 px-md-2 text-dark-tp3 my-3">
                                                                Not a member?
                                                                <a
                                                                    className="text-success-m1 text-600 mx-1"
                                                                    data-toggle="tab"
                                                                    data-target="#id-tab-signup"
                                                                    href="#"
                                                                >
                                                                    Signup now
                                                                </a>
                                                            </div>

                                                            <hr className="brc-default-l2 w-100 mb-2" />
                                                            <div className="mt-n4 bgc-white-tp2 px-3 py-1 text-secondary-d3 text-90">
                                                                Or Get Started
                                                                Using
                                                            </div>

                                                            <div className="my-2">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-bgc-white btn-lighter-primary btn-h-primary btn-a-primary border-2 radius-round btn-lg mx-1"
                                                                >
                                                                    <i className="fab fa-facebook-f text-110"></i>
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    className="btn btn-bgc-white btn-lighter-info btn-h-info btn-a-info border-2 radius-round btn-lg px-25 mx-1"
                                                                >
                                                                    <i className="fab fa-twitter text-110"></i>
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    className="btn btn-bgc-white btn-lighter-red btn-h-red btn-a-red border-2 radius-round btn-lg px-25 mx-1"
                                                                >
                                                                    <i className="fab fa-google text-110"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    className="tab-pane mh-100 px-3 px-lg-0 pb-3"
                                                    id="id-tab-signup"
                                                    data-swipe-prev="#id-tab-login"
                                                >
                                                    <div className="position-tl ml-3 mt-3 mt-lg-0">
                                                        <a
                                                            href="#"
                                                            className="btn btn-light-default btn-h-light-default btn-a-light-default btn-bgc-tp"
                                                            data-toggle="tab"
                                                            data-target="#id-tab-login"
                                                        >
                                                            <i className="fa fa-arrow-left"></i>
                                                        </a>
                                                    </div>

                                                    {/* <!-- show this in desktop --> */}
                                                    <div className="d-none d-lg-block col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-lg-4 px-0">
                                                        <h4 className="text-dark-tp4 border-b-1 brc-grey-l1 pb-1 text-130">
                                                            <i className="fa fa-user text-purple mr-1"></i>
                                                            Create an Account
                                                        </h4>
                                                    </div>

                                                    {/* <!-- show this in mobile device --> */}
                                                    <div className="d-lg-none text-secondary-m1 my-4 text-center">
                                                        <i className="fa fa-leaf text-success-m2 text-200 mb-4"></i>
                                                        <h1 className="text-170">
                                                            <span className="text-blue-d1">
                                                                Ace{" "}
                                                                <span className="text-80 text-dark-tp4">
                                                                    Application
                                                                </span>
                                                            </span>
                                                        </h1>
                                                        Create an Account
                                                    </div>

                                                    <form
                                                        autocomplete="off"
                                                        className="form-row mt-4"
                                                    >
                                                        <div className="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                                            <div className="d-flex align-items-center input-floating-label text-success brc-success-m2">
                                                                <input
                                                                    placeholder="Email"
                                                                    type="email"
                                                                    className="form-control form-control-lg pr-4 shadow-none"
                                                                    id="id-signup-email"
                                                                />
                                                                <i className="fa fa-envelope text-grey-m2 ml-n4"></i>
                                                                <label
                                                                    className="floating-label text-grey-l1 text-100 ml-n3"
                                                                    for="id-signup-email"
                                                                >
                                                                    Email
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div className="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-1">
                                                            <div className="d-flex align-items-center input-floating-label text-success brc-success-m2">
                                                                <input
                                                                    placeholder="Username"
                                                                    type="text"
                                                                    className="form-control form-control-lg pr-4 shadow-none"
                                                                    id="id-signup-username"
                                                                />
                                                                <i className="fa fa-user text-grey-m2 ml-n4"></i>
                                                                <label
                                                                    className="floating-label text-grey-l1 text-100 ml-n3"
                                                                    for="id-signup-username"
                                                                >
                                                                    Username
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div className="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-1">
                                                            <div className="d-flex align-items-center input-floating-label text-success brc-success-m2">
                                                                <input
                                                                    placeholder="Password"
                                                                    type="password"
                                                                    className="form-control form-control-lg pr-4 shadow-none"
                                                                    id="id-signup-password"
                                                                />
                                                                <i className="fa fa-key text-grey-m2 ml-n4"></i>
                                                                <label
                                                                    className="floating-label text-grey-l1 text-100 ml-n3"
                                                                    for="id-signup-password"
                                                                >
                                                                    Password
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div className="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-1">
                                                            <div className="d-flex align-items-center input-floating-label text-success brc-success-m2">
                                                                <input
                                                                    placeholder="Confirm Password"
                                                                    type="password"
                                                                    className="form-control form-control-lg pr-4 shadow-none"
                                                                    id="id-signup-password2"
                                                                />
                                                                <i className="fas fa-sync-alt text-grey-m2 ml-n4"></i>
                                                                <label
                                                                    className="floating-label text-grey-l1 text-100 ml-n3"
                                                                    for="id-signup-password2"
                                                                >
                                                                    Confirm
                                                                    Password
                                                                </label>
                                                            </div>
                                                        </div>

                                                        <div className="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-2">
                                                            <label className="d-inline-block mt-3 mb-0 text-secondary-d2">
                                                                <input
                                                                    type="checkbox"
                                                                    className="mr-1"
                                                                    id="id-agree"
                                                                />
                                                                <span className="text-dark-m3">
                                                                    I have read
                                                                    and agree to{" "}
                                                                    <a
                                                                        href="#"
                                                                        className="text-blue-d2"
                                                                    >
                                                                        terms
                                                                    </a>
                                                                </span>
                                                            </label>

                                                            <button
                                                                type="button"
                                                                className="btn btn-success btn-block px-4 btn-bold mt-2 mb-3"
                                                            >
                                                                Sign Up
                                                            </button>
                                                        </div>
                                                    </form>

                                                    <div className="form-row w-100">
                                                        <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 d-flex flex-column align-items-center justify-content-center">
                                                            <hr className="brc-default-l2 mt-0 mb-2 w-100" />

                                                            <div className="p-0 px-md-2 text-dark-tp4 my-3">
                                                                Already a
                                                                member?
                                                                <a
                                                                    className="text-blue-d1 text-600 mx-1"
                                                                    data-toggle="tab"
                                                                    data-target="#id-tab-login"
                                                                    href="#"
                                                                >
                                                                    Login here
                                                                </a>
                                                            </div>

                                                            <hr className="brc-default-l2 w-100 mb-2" />
                                                            <div className="mt-n4 bgc-white-tp2 px-3 py-1 text-secondary-d3 text-90">
                                                                Or Register
                                                                Using
                                                            </div>

                                                            <div className="mt-2 mb-3">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-primary border-2 radius-round btn-lg mx-1"
                                                                >
                                                                    <i className="fab fa-facebook-f text-110"></i>
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    className="btn btn-blue border-2 radius-round btn-lg px-25 mx-1"
                                                                >
                                                                    <i className="fab fa-twitter text-110"></i>
                                                                </button>

                                                                <button
                                                                    type="button"
                                                                    className="btn btn-danger border-2 radius-round btn-lg px-25 mx-1"
                                                                >
                                                                    <i className="fab fa-google text-110"></i>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div
                                                    className="tab-pane mh-100 px-3 px-lg-0 pb-3"
                                                    id="id-tab-forgot"
                                                    data-swipe-prev="#id-tab-login"
                                                >
                                                    <div className="position-tl ml-3 mt-2">
                                                        <a
                                                            href="#"
                                                            className="btn btn-light-default btn-h-light-default btn-a-light-default btn-bgc-tp"
                                                            data-toggle="tab"
                                                            data-target="#id-tab-login"
                                                        >
                                                            <i className="fa fa-arrow-left"></i>
                                                        </a>
                                                    </div>

                                                    <div className="col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-5 px-0">
                                                        <h4 className="pt-4 pt-md-0 text-dark-tp4 border-b-1 brc-grey-l2 pb-1 text-130">
                                                            <i className="fa fa-key text-brown-m1 mr-1"></i>
                                                            Recover Password
                                                        </h4>
                                                    </div>

                                                    <form
                                                        autocomplete="off"
                                                        className="form-row mt-4"
                                                    >
                                                        <div className="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                                                            <label className="text-secondary-d3 mb-3">
                                                                Enter your email
                                                                address and
                                                                we'll send you
                                                                the
                                                                instructions:
                                                            </label>
                                                            <div className="d-flex align-items-center">
                                                                <input
                                                                    type="email"
                                                                    className="form-control form-control-lg pr-4 shadow-none"
                                                                    id="id-recover-email"
                                                                    placeholder="Email"
                                                                />
                                                                <i className="fa fa-envelope text-grey-m2 ml-n4"></i>
                                                            </div>
                                                        </div>

                                                        <div className="form-group col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 mt-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-orange btn-block px-4 btn-bold mt-2 mb-4"
                                                            >
                                                                Continue
                                                            </button>
                                                        </div>
                                                    </form>

                                                    <div className="form-row w-100">
                                                        <div className="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3 d-flex flex-column align-items-center justify-content-center">
                                                            <hr className="brc-default-l2 mt-0 mb-2 w-100" />

                                                            <div className="p-0 px-md-2 text-dark-tp4 my-3">
                                                                <a
                                                                    className="text-blue-d1 text-600 btn-text-slide-x"
                                                                    data-toggle="tab"
                                                                    data-target="#id-tab-login"
                                                                    href="#"
                                                                >
                                                                    <i className="btn-text-2 fa fa-arrow-left text-110 align-text-bottom mr-2"></i>
                                                                    Back to
                                                                    Login
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- .tab-content --> */}
                                        </div>
                                    </div>
                                    {/* <!-- /.row --> */}
                                </div>
                                {/* <!-- /.col --> */}
                            </div>
                            {/* <!-- /.row --> */}

                            <div className="d-lg-none my-3 text-white-tp1 text-center">
                                {/* <i className="fa fa-leaf text-success-l3 mr-1 text-110"></i> Ace Company &copy; 2021 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- include common vendor scripts used in demo pages --> */}
            <script src="node_modules/jquery/dist/jquery.js"></script>
            <script src="node_modules/popper.js/dist/umd/popper.js"></script>
            <script src="node_modules/bootstrap/dist/js/bootstrap.js"></script>

            {/* <!-- include vendor scripts used in "Login" page. see "/views//pages/partials/page-login/@vendor-scripts.hbs" --> */}

            {/* <!-- include ace.js --> */}
            <script src="dist/js/ace.js"></script>

            {/* <!-- demo.js is only for Ace's demo and you shouldn't use it --> */}
            <script src="app/browser/demo.html"></script>

            {/* <!-- "Login" page script to enable its demo functionality --> */}
            <script src="views/pages/page-login/%40page-script.js"></script>
        </>
    );
}
