import React, { useState } from "react";
import Header from "./include/Header";
import Footer from "./include/Footer";
import axios from "axios";
import { usePage } from "@inertiajs/react";

const Donate = () => {
    const { Chapter_menu } = usePage().props;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        amount:"",
        transaction: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post("/api/donate", formData);
            alert("Payment done successfully!");

            setFormData({
                name: "",
                email: "",
                phone: "",
                amount:"",
                transaction: "",
            });
        } catch (error) {
            console.error(error);
            alert("Failed to send message");
        }
    };

    return (
        <div>
            <Header Chapter_menu={Chapter_menu} />


            <section className="inner-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 sec-title colored text-center">
                            <h2>Donate</h2>
                            <ul className="breadcumb">
                                <li><a href="/">Home</a></li>
                                <li>Donate</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="contact-section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form-wrapper shadow p-4 rounded">
                                <h3 className="text-center mb-4">Donate</h3>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <input
                                            className="form-control"
                                            rows="5"
                                            placeholder="Enter Your Transaction Id"
                                            name="transaction"
                                            value={formData.transaction}
                                            onChange={handleChange}
                                            required
                                        ></input>
                                    </div>

                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary px-5">
                                            Submit
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


            <section className="donate-section py-5">
    <div className="container">
        <div className="row">

            {/* LEFT SIDE - BANK DETAILS */}
            <div className="col-lg-5 mb-4">
                <div className="p-4 shadow rounded bg-light h-100">
                    <h4 className="mb-3 text-center">Bank Details</h4>

                    <ul className="list-unstyled">
                        <li><strong>Account Name:</strong> VISHWANARI ABHYUDAY SANGTHAN</li>
                        <li><strong>Account Number:</strong> 585102010002613</li>
                        <li><strong>IFSC Code:</strong> UBIN0558516</li>
                        <li><strong>Branch:</strong> VIKAS BHAWAN BRANCH,VARANASI - 221002 (U.P.)</li>
                    </ul>

                    <hr />

                    <h5 className="text-center mb-3">Scan & Pay</h5>

                    <div className="text-center">
                        <img
                            src="/front/qr.jpeg"
                            alt="QR Code"
                            className="img-fluid rounded shadow-sm"
                            style={{ maxWidth: "350px" }}
                        />
                    </div>

                    <p className="text-muted text-center mt-3" style={{ fontSize: "14px" }}>
                        After payment, enter your transaction ID in the form.
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <div className="col-lg-7">
                <div className="donate-form-wrapper shadow p-4 rounded">
                    <h3 className="text-center mb-4">Donate</h3>

                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="col-md-6 mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Amount"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Transaction ID"
                                name="transaction"
                                value={formData.transaction}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="text-center">
                            <button type="submit" className="btn btn-primary px-5">
                                Submit
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

export default Donate;
