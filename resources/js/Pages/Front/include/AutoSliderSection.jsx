import { useEffect, useState } from "react";
// import "./slider.css";

const AutoSliderSection = ({ title, images, reverse }) => {
    const duplicatedImages = [...images, ...images];

    return (
        <div className="  ">
            <div className={`section-wrapper ${reverse ? "reverse" : ""}`}>
                {/* ✅ TITLE DESIGN */}
             

                <div className="section-header">
                    <h2>{title}</h2>
                    <div className="sec-title colored text-center">
                        <span className="decor">
                            <span className="inner"></span>
                        </span>
                    </div>
                </div>

                {/* ✅ SLIDER */}
                <div className={`edu-section ${reverse ? "reverse" : ""}`}>
                    <div className="edu-carousel">
                        <div
                            className={`edu-carousel-track ${reverse ? "reverse-scroll" : ""}`}
                        >
                            {duplicatedImages.map((img, index) => (
                                <img key={index} src={img} alt="event" />

                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutoSliderSection;
