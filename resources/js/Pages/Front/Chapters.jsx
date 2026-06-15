import React, { useState } from "react";
import Header from "./include/Header";
import Footer from "./include/Footer";
import { usePage } from "@inertiajs/react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Chapters = ({ chapters, chapter_event, Chapter_menu }) => {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <Header Chapter_menu={Chapter_menu} />
            <section className="inner-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 sec-title colored text-center">
                            <h2>{chapters[0]?.banner_text}</h2>
                            <ul className="breadcumb">
                                <li>
                                    <a href="/">Home</a>
                                </li>
                                <li>Chapters</li>
                            </ul>
                            <span className="decor">
                                <span className="inner"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <div
                data-elementor-type="wp-page"
                data-elementor-id="34"
                className="elementor elementor-34"
            >
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-f526f3a elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="f526f3a"
                    data-element_type="section"
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-319695d"
                            data-id="319695d"
                            data-element_type="column"
                        >
                            <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                    className="elementor-element elementor-element-f8b4ee7 elementor-widget elementor-widget-charityhome_team_v3"
                                    data-id="f8b4ee7"
                                    data-element_type="widget"
                                    data-widget_type="charityhome_team_v3.default"
                                >
                                    <div className="elementor-widget-container">
                                        <section className="sec-padding meet-Volunteer pb_30">
                                            <div className="sec-title text-center">
                                                <div className="row align-items-center mb-5 about-chapter">
                                                    <div className="col-lg-6">
                                                        <div className="about-content">
                                                            <h2 className="about-title">
                                                                {
                                                                    chapters[0]
                                                                        ?.about_title
                                                                }
                                                            </h2>
                                                            <div className="sec-title colored text-center">
                                                                <span className="decor">
                                                                    <span className="inner"></span>
                                                                </span>
                                                            </div>
                                                            {/* <p className="about-text">
                                                                {
                                                                    chapters[0]
                                                                        ?.about_content
                                                                }
                                                            </p> */}
                                                            <p className="about-text">
                                                                {chapters[0]?.about_content?.substring(
                                                                    0,
                                                                    500,
                                                                )}
                                                                ...
                                                            </p>
                                                            <button
                                                                className="btn mt-2"
                                                                style={{
                                                                    backgroundColor:
                                                                        "#F93213",
                                                                    color: "#fff",
                                                                    border: "none",
                                                                }}
                                                                onClick={() =>
                                                                    setShowModal(
                                                                        true,
                                                                    )
                                                                }
                                                            >
                                                                Read More
                                                            </button>{" "}
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6">
                                                        <div className="about-img">
                                                            <img
                                                                src={`/storage/${chapters[0]?.about_image}`}
                                                                alt="About Chapter"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container py-">
                                                <div className="sec-title text-center">
                                                    <h2>
                                                        {chapters[0]?.title}
                                                    </h2>
                                                    <div className="sec-title colored text-center">
                                                        <span className="decor">
                                                            <span className="inner"></span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    {chapters?.map(
                                                        (chapter) => (
                                                            <div
                                                                className="col-lg-3 col-md-4 col-sm-6 mb-4"
                                                                key={chapter.id}
                                                            >
                                                                <div className="team-card">
                                                                    <div className="team-img">
                                                                        <img
                                                                            src={`/storage/${chapter.member_image}`}
                                                                            alt={
                                                                                chapter.member_name
                                                                            }
                                                                        />
                                                                    </div>

                                                                    <div className="team-content text-center">
                                                                        <h5>
                                                                            {
                                                                                chapter.member_name
                                                                            }
                                                                        </h5>
                                                                        <p>
                                                                            {
                                                                                chapter.member_designation
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
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
                    className="elementor-section elementor-top-section elementor-element elementor-element-4db16c0 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="4db16c0"
                    data-element_type="section"
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-264ad75"
                            data-id="264ad75"
                            data-element_type="column"
                        ></div>
                    </div>
                </section>
                <section
                    className="elementor-section elementor-top-section elementor-element elementor-element-5cdb8a5 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                    data-id="5cdb8a5"
                    data-element_type="section"
                >
                    <div className="elementor-container elementor-column-gap-default">
                        <div
                            className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d8d254a"
                            data-id="d8d254a"
                            data-element_type="column"
                        ></div>
                    </div>
                </section>
            </div>

            <div>
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
                                                    <h2>
                                                        {
                                                            chapter_event[0]
                                                                ?.event_title
                                                        }
                                                    </h2>
                                                    <div className="sec-title colored text-center">
                                                        <span className="decor">
                                                            <span className="inner"></span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="row">
                                                    {chapter_event?.map(
                                                        (event) => (
                                                            <div
                                                                className="col-lg-4 col-md-6 mb-4"
                                                                key={event.id}
                                                            >
                                                                <div className="event-card">
                                                                    <div className="event-img">
                                                                        <Swiper
                                                                            modules={[
                                                                                Autoplay,
                                                                                Navigation,
                                                                                Pagination,
                                                                            ]}
                                                                            spaceBetween={
                                                                                10
                                                                            }
                                                                            slidesPerView={
                                                                                1
                                                                            }
                                                                            pagination={{
                                                                                clickable: true,
                                                                            }}
                                                                            autoplay={{
                                                                                delay: 3000,
                                                                            }}
                                                                        >
                                                                            {JSON.parse(
                                                                                event.event_image,
                                                                            ).map(
                                                                                (
                                                                                    img,
                                                                                    index,
                                                                                ) => (
                                                                                    <SwiperSlide
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                    >
                                                                                        <img
                                                                                            src={`/storage/${img.replace(/\\/g, "/")}`}
                                                                                            alt={
                                                                                                event.event_title
                                                                                            }
                                                                                        />
                                                                                    </SwiperSlide>
                                                                                ),
                                                                            )}
                                                                        </Swiper>
                                                                    </div>

                                                                    <div className="event-content">
                                                                        <h6 className="event-heading">
                                                                            {
                                                                                event.event_heading
                                                                            }
                                                                        </h6>
                                                                        <p>
                                                                            {
                                                                                event.event_description
                                                                            }
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ),
                                                    )}
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

            {showModal && (
                <div className="custom-modal-overlay">
                    <div className="custom-modal">
                        <button
                            className="modal-close"
                            onClick={() => setShowModal(false)}
                        >
                            ×
                        </button>

                        <p>{chapters[0]?.about_content}</p>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Chapters;
