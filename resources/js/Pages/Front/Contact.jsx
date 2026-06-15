import React, { useState } from "react";
import Header from "./include/Header";
import Footer from "./include/Footer";
import axios from "axios";
import { usePage } from "@inertiajs/react";

const Contact = () => {
    const { Chapter_menu } = usePage().props;
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
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
            await axios.post("http://localhost:8000/api/contact", formData);
            alert("Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
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
                            <h2>Join Us</h2>
                            <ul className="breadcumb">
                                <li><a href="/">Home</a></li>
                                <li>Join Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-section py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form-wrapper shadow p-4 rounded">
                                <h3 className="text-center mb-4">Join Us</h3>

                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Your Name"
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
                                                placeholder="Your Email"
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
                                            placeholder="Subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <textarea
                                            className="form-control"
                                            rows="5"
                                            placeholder="Your reason for joining"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
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
