import React from "react";
import { Link } from "@inertiajs/react";
import Sliders from "../Front/include/Slider";
import Footer from "./include/Footer";
import AutoSliderSection from "./include/AutoSliderSection";
// import Preloader from "./include/Preloader";
import { usePage } from "@inertiajs/react";

import Header from "./include/Header";
import worldthinking from "../../../../public/front/assets/world-thinking-day.png";
import womenday from "../../../../public/front/assets/women-day.jfif";
import sita from "../../../../public/front/assets/sita-navami.jpeg";
import grahani from "../../../../public/front/assets/grahani.jpg";
import balidan from "../../../../public/front/assets/balidan.jfif";
import env from "../../../../public/front/assets/env.jpg";
import independence from "../../../../public/front/assets/independence.png";
import rakshabandhan from "../../../../public/front/assets/rakshabandhan.jfif";
import teacher from "../../../../public/front/assets/teacher.jfif";
import hindi from "../../../../public/front/assets/hindi.jfif";
import cleaning from "../../../../public/front/assets/cleaning.jfif";
import van from "../../../../public/front/assets/van.jpg";
import yatra from "../../../../public/front/assets/yatra.jfif";
import wwao from "../../../../public/front/rani.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = ({ Chapter_menu }) => {
    const message = (
        <div className="dhyeya-geet-container">
            <p className="message-text">
                जागो मातृशक्ति तुम जागो, जागो मातृशक्ति तुम जागो,
                <br />
                जागो माता जागो, जागो बेटी जागो, जागो बहना जागो,
                <br />
                अरे जागो सखियों जागो,
                <br />
                <br />
                शक्ति स्वरूपा, नेह मण्डिता, निज स्वरूप दर्शाओ।
                <br />
                जागो मातृशक्ति.......... तुम जागो।
                <br />
                <br />
                भटक रहे हम मृग तृष्णा में, शूल भरे हैं सब राहों पे,
                <br />
                तिमिरावृत्त यह धरा हो रही, अनाचार की हवा बह रही,
                <br />
                प्रखर शक्ति की गागर लेकर, नई ज्योति ढुलकाओ।
                <br />
                जागो मातृशक्ति.......... तुम जागो।
                <br />
                <br />
                वीर शिवा का रूप दिखाने, जीजाबाई बन जाना है,
                <br />
                नवयुग के संचालन में, लक्ष्मीबाई बन आना है,
                <br />
                नव-निर्माण हेतु विश्व के, नव अभियान चलाओ।
                <br />
                जागो मातृशक्ति.......... तुम जागो।
                <br />
                <br />
                भौतिकता की अंध पिपासा, निर्बलजन की घोर हताशा,
                <br />
                स्वार्थ लोभ का विकट तमाशा, अबला जन में व्याप्त निराशा,
                <br />
                एक साथ दुर्गा, लक्ष्मी बन, सारे क्लेश मिटाओ।
                <br />
                <br />
                जागो माता जागो, जागो बेटी जागो, जागो बहना जागो,
                <br />
                अरे जागो सखियों जागो,
                <br />
                <br />
                शक्ति स्वरूपा नेह मण्डिता, निज स्वरूप दर्शाओ।
                <br />
                जागो मातृशक्ति तुम जागो, जागो जागो जागो...।।
            </p>

            <p className="author-text">
                — स्व. वीर बाल वर्मा <br />
                (पूर्व प्राचार्य, आर्य महिला इंटर कॉलेज, लौहराबीर, वाराणसी,
                उत्तर प्रदेश)
            </p>
        </div>
    );

    const { members = [], mediaCoverage = [], chapters = [] } = usePage().props;
    console.log(usePage().props);
    const nationalMembers = (members || []).filter(
        (m) => m.category === "national_member",
    );

    const executive = (members || []).filter((m) => m.category === "executive");

    const salhakar = (members || []).filter((m) => m.category === "salhakar");

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        vertical: true,
        verticalSwiping: true,
    };

    const rashtriyaImages = [
        "/front/slider/s1.jpeg",
        "/front/slider/s2.jpeg",
        "/front/slider/s3.jpeg",
        "/front/slider/s4.jpeg",
        "/front/slider/s5.jpeg",

        "/front/slider/s6.jpeg",
        "/front/slider/s7.jpeg",
        "/front/slider/s8.jpeg",
        "/front/slider/s9.jpeg",
        "/front/slider/s10.jpeg",
        "/front/slider/s11.jpeg",
    ];

    const seminarImages = [
        "/front/slider/f1.jpeg",
        "/front/slider/f2.jpeg",
        "/front/slider/f3.jpeg",
        "/front/slider/f4.jpeg",
        "/front/slider/f5.jpeg",
    ];

    return (
        <div>
            {/* <Preloader /> */}

            {/* <div className="translate-wrapper">
 
  <GoogleTranslate />
</div> */}
            <div className="page-wrapper">
                <Header Chapter_menu={Chapter_menu} />

                <div
                    data-elementor-type="wp-page"
                    data-elementor-id="12"
                    className="elementor elementor-12"
                >
                    {/* Slider-section */}
                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-dd52cd3 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="dd52cd3"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2ae0b85"
                                data-id="2ae0b85"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-09f5c1f elementor-widget elementor-widget-slider_revolution"
                                        data-id="09f5c1f"
                                        data-element_type="widget"
                                        data-widget_type="slider_revolution.default"
                                    >
                                        <Sliders />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Slider-section-ends */}

                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-cf69220 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="cf69220"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-f08514d"
                                data-id="f08514d"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-598f90c elementor-widget elementor-widget-charityhome_our_features_v1"
                                        data-id="598f90c"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_our_features_v1.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="call-to-action">
                                                <div className="container-fluid"></div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="elementor-section elementor-top-section elementor-element elementor-element-48c78c5 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="48c78c5"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7800b2f"
                                data-id="7800b2f"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-50bac0c elementor-widget elementor-widget-charityhome_events_and_causes"
                                        data-id="50bac0c"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_events_and_causes.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="event-feature sec-padding bg-color-fa">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-sm-12 col-md-12 col-lg-6 md-col6-center">
                                                            <h4 className="sec-color text-uppercase double-line line-left">
                                                                राष्ट्रीय
                                                                कार्यक्रम
                                                            </h4>{" "}
                                                            <Slider
                                                                {...settings}
                                                                className="bx-event-carousel"
                                                            >
                                                                {/* Evemt-1 */}
                                                                <div className="event">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="event-thumb">
                                                                                <div className="thumb">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        decoding="async"
                                                                                        width="180"
                                                                                        height="120"
                                                                                        src={
                                                                                            worldthinking
                                                                                        }
                                                                                        className="full-width wp-post-image"
                                                                                        alt=""
                                                                                        sizes="auto, (max-width: 180px) 100vw, 180px"
                                                                                    />{" "}
                                                                                </div>
                                                                                <ul className="event-date">
                                                                                    <li className="date">
                                                                                        18
                                                                                    </li>
                                                                                    <li className="month">
                                                                                        फरवरी
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="event-content">
                                                                                <h5 className="event-title">
                                                                                    <a href="event/charity-for-education-5/index.html">
                                                                                        राष्ट्रीय-चिंतन
                                                                                        दिवस
                                                                                    </a>
                                                                                </h5>
                                                                                <ul className="event-held list-inline"></ul>
                                                                                <p>
                                                                                    सामाजिक-आर्थिक
                                                                                    चुनौतियों
                                                                                    और
                                                                                    राष्ट्रहित
                                                                                    से
                                                                                    जुड़े
                                                                                    मुद्दों
                                                                                    पर
                                                                                    विचार
                                                                                    करने,
                                                                                    सकारात्मक
                                                                                    सोच
                                                                                    विकसित
                                                                                    करने
                                                                                    और
                                                                                    सद्भाव
                                                                                    का
                                                                                    विकास
                                                                                    करने
                                                                                    हेतु
                                                                                    प्रतिवर्ष
                                                                                    18
                                                                                    फरवरी
                                                                                    को
                                                                                    विश्व
                                                                                    नारी
                                                                                    अभ्युदय
                                                                                    संगठन
                                                                                    "राष्ट्रीय-चिंतन
                                                                                    दिवस"
                                                                                    मनाता
                                                                                    है।
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Event-2 */}
                                                                <div className="event">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="event-thumb">
                                                                                <div className="thumb">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        decoding="async"
                                                                                        width="180"
                                                                                        height="120"
                                                                                        src={
                                                                                            sita
                                                                                        }
                                                                                        className="full-width wp-post-image"
                                                                                        alt=""
                                                                                        sizes="auto, (max-width: 180px) 100vw, 180px"
                                                                                    />{" "}
                                                                                </div>
                                                                                <ul className="event-date">
                                                                                    <li className="date">
                                                                                        अप्रैल
                                                                                    </li>
                                                                                    <li className="month">
                                                                                        माह
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="event-content">
                                                                                <h5 className="event-title">
                                                                                    <a href="event/charity-for-education-2/index.html">
                                                                                        सीता
                                                                                        महोत्सव,
                                                                                        नवमी
                                                                                    </a>
                                                                                </h5>
                                                                                <ul className="event-held list-inline"></ul>
                                                                                <p>
                                                                                    अप्रैल
                                                                                    माह
                                                                                    की
                                                                                    नवमी
                                                                                    को
                                                                                    माता
                                                                                    सीता
                                                                                    पृथ्वी
                                                                                    से
                                                                                    प्रकट
                                                                                    हुई
                                                                                    थीं।
                                                                                    अतः
                                                                                    त्याग,
                                                                                    पवित्रता,
                                                                                    समर्पण
                                                                                    और
                                                                                    नारी
                                                                                    शक्ति
                                                                                    के
                                                                                    प्रतीक
                                                                                    के
                                                                                    रूप
                                                                                    में
                                                                                    विश्व
                                                                                    नारी
                                                                                    अभ्युदय
                                                                                    संगठन
                                                                                    अप्रैल
                                                                                    माह
                                                                                    की
                                                                                    नवमी
                                                                                    के
                                                                                    दिन
                                                                                    "सीता-महोत्सव"
                                                                                    मनाता
                                                                                    है।
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Event-3 */}
                                                                <div className="event">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="event-thumb">
                                                                                <div className="thumb">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        decoding="async"
                                                                                        width="180"
                                                                                        height="120"
                                                                                        src={
                                                                                            wwao
                                                                                        }
                                                                                        className="full-width wp-post-image"
                                                                                        alt=""
                                                                                        sizes="auto, (max-width: 180px) 100vw, 180px"
                                                                                    />{" "}
                                                                                </div>
                                                                                <ul className="event-date">
                                                                                    <li className="date">
                                                                                        17
                                                                                    </li>
                                                                                    <li className="month">
                                                                                        जून
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="event-content">
                                                                                <h5 className="event-title">
                                                                                    <a href="event/charity-for-education-3/index.html">
                                                                                        प्रेरणा-दिवस
                                                                                    </a>
                                                                                </h5>
                                                                                <ul className="event-held list-inline"></ul>
                                                                                <p>
                                                                                    भारत
                                                                                    की
                                                                                    स्वतंत्रता,
                                                                                    अखंडता
                                                                                    और
                                                                                    रक्षा
                                                                                    के
                                                                                    लिए
                                                                                    झांसी
                                                                                    की
                                                                                    रानी
                                                                                    महारानी
                                                                                    लक्ष्मीबाई
                                                                                    ने
                                                                                    17
                                                                                    जून,
                                                                                    1858
                                                                                    को
                                                                                    ग्वालियर
                                                                                    के
                                                                                    पास
                                                                                    कोटा
                                                                                    की
                                                                                    सराय
                                                                                    में
                                                                                    अंग्रेजों
                                                                                    से
                                                                                    लड़ते
                                                                                    हुए
                                                                                    वीरगति
                                                                                    को
                                                                                    प्राप्त
                                                                                    की
                                                                                    थी।
                                                                                    विश्व
                                                                                    नारी
                                                                                    अभ्युदय
                                                                                    संगठन
                                                                                    ने
                                                                                    महारानी
                                                                                    लक्ष्मीबाई
                                                                                    को
                                                                                    अपना
                                                                                    आदर्श
                                                                                    घोषित
                                                                                    किया
                                                                                    है।
                                                                                    अतः
                                                                                    उन्हें
                                                                                    सच्ची
                                                                                    श्रद्धांजलि
                                                                                    अर्पित
                                                                                    करने
                                                                                    हेतु
                                                                                    विश्व
                                                                                    नारी
                                                                                    अभ्युदय
                                                                                    संगठन
                                                                                    प्रतिवर्ष
                                                                                    17
                                                                                    जून
                                                                                    को
                                                                                    "प्रेरणा-दिवस"
                                                                                    के
                                                                                    रूप
                                                                                    में
                                                                                    मनाता
                                                                                    है।
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Event-4 */}
                                                                <div className="event">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="event-thumb">
                                                                                <div className="thumb">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        decoding="async"
                                                                                        width="180"
                                                                                        height="120"
                                                                                        src={
                                                                                            wwao
                                                                                        }
                                                                                        className="full-width wp-post-image"
                                                                                        alt=""
                                                                                        sizes="auto, (max-width: 180px) 100vw, 180px"
                                                                                    />{" "}
                                                                                </div>
                                                                                <ul className="event-date">
                                                                                    <li className="date">
                                                                                        15
                                                                                    </li>
                                                                                    <li className="month">
                                                                                        अगस्त
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="event-content">
                                                                                <h5 className="event-title">
                                                                                    <a href="event/charity-for-education-3/index.html">
                                                                                        शहादत
                                                                                        और
                                                                                        श्रद्धांजलि
                                                                                        दिवस
                                                                                    </a>
                                                                                </h5>
                                                                                <ul className="event-held list-inline"></ul>
                                                                                <p>
                                                                                    भारत
                                                                                    की
                                                                                    स्वतंत्रता
                                                                                    तथा
                                                                                    सुरक्षा
                                                                                    के
                                                                                    लिए
                                                                                    अपने
                                                                                    प्राणों
                                                                                    की
                                                                                    आहुति
                                                                                    देने
                                                                                    वाले
                                                                                    अमर
                                                                                    शहीदों
                                                                                    की
                                                                                    शहादत
                                                                                    को
                                                                                    श्रद्धांजलि
                                                                                    देने
                                                                                    स्वरूप
                                                                                    विश्व
                                                                                    नारी
                                                                                    अभ्युदय
                                                                                    संगठन
                                                                                    "शहादत
                                                                                    और
                                                                                    श्रद्धांजलि-दिवस"
                                                                                    मनाता
                                                                                    है।{" "}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Event-5 */}
                                                                <div className="event">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="event-thumb">
                                                                                <div className="thumb">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        decoding="async"
                                                                                        width="180"
                                                                                        height="120"
                                                                                        src={
                                                                                            wwao
                                                                                        }
                                                                                        className="full-width wp-post-image"
                                                                                        alt=""
                                                                                        sizes="auto, (max-width: 180px) 100vw, 180px"
                                                                                    />{" "}
                                                                                </div>
                                                                                <ul className="event-date">
                                                                                    <li className="date">
                                                                                        15-17
                                                                                    </li>
                                                                                    <li className="month">
                                                                                        नवंबर
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="event-content">
                                                                                <h5 className="event-title">
                                                                                    <a href="event/charity-for-education-3/index.html">
                                                                                        स्थापना-दिवस
                                                                                    </a>
                                                                                </h5>
                                                                                <ul className="event-held list-inline"></ul>
                                                                                <p>
                                                                                    2008-9
                                                                                    में
                                                                                    15
                                                                                    से
                                                                                    17
                                                                                    नवंबर
                                                                                    तक
                                                                                    माननीय
                                                                                    इंद्रेश
                                                                                    भाईजी
                                                                                    के
                                                                                    मार्गदर्शन
                                                                                    में
                                                                                    वाराणसी
                                                                                    में
                                                                                    विश्व
                                                                                    नारी
                                                                                    अभ्युदय
                                                                                    संगठन
                                                                                    का
                                                                                    त्रिदिवसीय
                                                                                    सम्मेलन
                                                                                    संपन्न
                                                                                    हुआ
                                                                                    था।
                                                                                    तब
                                                                                    से
                                                                                    प्रतिवर्ष
                                                                                    15
                                                                                    से
                                                                                    17
                                                                                    नवंबर
                                                                                    तक
                                                                                    विश्व
                                                                                    नारी
                                                                                    अभ्युदय
                                                                                    संगठन
                                                                                    "स्थापना-
                                                                                    दिवस"
                                                                                    मनाता
                                                                                    है।
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Event-6 */}
                                                                <div className="event">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="event-thumb">
                                                                                <div className="thumb">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        decoding="async"
                                                                                        width="180"
                                                                                        height="120"
                                                                                        src={
                                                                                            wwao
                                                                                        }
                                                                                        className="full-width wp-post-image"
                                                                                        alt=""
                                                                                        sizes="auto, (max-width: 180px) 100vw, 180px"
                                                                                    />{" "}
                                                                                </div>
                                                                                <ul className="event-date">
                                                                                    <li className="date"></li>
                                                                                    <li className="month"></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="event-content">
                                                                                <h5 className="event-title">
                                                                                    <a href="event/charity-for-education-3/index.html">
                                                                                        राष्ट्रीय
                                                                                        महासम्मेलन
                                                                                        तथा
                                                                                        स्मारिका
                                                                                        का
                                                                                        प्रकाशन-
                                                                                    </a>
                                                                                </h5>
                                                                                <ul className="event-held list-inline"></ul>
                                                                                <p>
                                                                                    विश्व
                                                                                    नारी
                                                                                    अभ्युदय
                                                                                    संगठन
                                                                                    द्वारा
                                                                                    5
                                                                                    वर्ष
                                                                                    के
                                                                                    अंतराल
                                                                                    में
                                                                                    एक
                                                                                    राष्ट्रीय
                                                                                    महासम्मेलन
                                                                                    तथा
                                                                                    स्मारिका
                                                                                    निकाली
                                                                                    जाती
                                                                                    है।
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                {/* Event-7 */}
                                                                <div className="event">
                                                                    <div className="row">
                                                                        <div className="col-sm-4">
                                                                            <div className="event-thumb">
                                                                                <div className="thumb">
                                                                                    <img
                                                                                        loading="lazy"
                                                                                        decoding="async"
                                                                                        width="180"
                                                                                        height="120"
                                                                                        src={
                                                                                            yatra
                                                                                        }
                                                                                        className="full-width wp-post-image"
                                                                                        alt=""
                                                                                        sizes="auto, (max-width: 180px) 100vw, 180px"
                                                                                    />{" "}
                                                                                </div>
                                                                                <ul className="event-date">
                                                                                    <li className="date"></li>
                                                                                    <li className="month"></li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-sm-8">
                                                                            <div className="event-content">
                                                                                <h5 className="event-title">
                                                                                    <a href="event/charity-for-education-3/index.html">
                                                                                        तीर्थ
                                                                                        यात्रा
                                                                                    </a>
                                                                                </h5>
                                                                                <ul className="event-held list-inline"></ul>
                                                                                <p>
                                                                                    विश्व
                                                                                    नारी
                                                                                    अभ्युदय
                                                                                    संगठन
                                                                                    द्वारा
                                                                                    समय
                                                                                    -समय
                                                                                    पर
                                                                                    आपसी
                                                                                    प्रेम-सौहार्द
                                                                                    बनाए
                                                                                    रखने
                                                                                    हेतु
                                                                                    तीर्थ
                                                                                    यात्रा
                                                                                    का
                                                                                    आयोजन
                                                                                    किया
                                                                                    जाता
                                                                                    है।
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Slider>
                                                        </div>

                                                        <div className="col-sm-12 col-md-12 col-lg-6 md-col6-center m-topm50">
                                                            <h4 className="sec-color text-uppercase double-line line-left">
                                                                हमारे बारे में
                                                            </h4>
                                                            <div className="featured-causes">
                                                                <div className="row">
                                                                    <div className="col-sm-6">
                                                                        <div className="thumb">
                                                                            <img
                                                                                loading="lazy"
                                                                                decoding="async"
                                                                                width="260"
                                                                                height="385"
                                                                                src={
                                                                                    wwao
                                                                                }
                                                                                className="full-width wp-post-image"
                                                                                alt=""
                                                                            />{" "}
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6">
                                                                        <div className="causes-details">
                                                                            <h3>
                                                                                महिलाओं
                                                                                की
                                                                                शिक्षा
                                                                                और
                                                                                सशक्तिकरण
                                                                            </h3>

                                                                            <p>
                                                                                हम
                                                                                महिलाओं
                                                                                को
                                                                                शिक्षा,
                                                                                कौशल
                                                                                विकास
                                                                                और
                                                                                नेतृत्व
                                                                                के
                                                                                अवसर
                                                                                प्रदान
                                                                                करते
                                                                                हैं।
                                                                                सशक्त
                                                                                महिलाएँ
                                                                                ही
                                                                                सशक्त
                                                                                समाज
                                                                                और
                                                                                उज्ज्वल
                                                                                भविष्य
                                                                                का
                                                                                निर्माण
                                                                                करती
                                                                                हैं।
                                                                                हम
                                                                                महिलाओं
                                                                                में
                                                                                आत्मविश्वास
                                                                                जगाकर
                                                                                उन्हें
                                                                                आत्मनिर्भर
                                                                                बनने
                                                                                की
                                                                                दिशा
                                                                                में
                                                                                आगे
                                                                                बढ़ाते
                                                                                हैं।
                                                                                हर
                                                                                महिला
                                                                                की
                                                                                सफलता
                                                                                समाज
                                                                                में
                                                                                सकारात्मक
                                                                                परिवर्तन
                                                                                लाती
                                                                                है।हम
                                                                                महिलाओं
                                                                                को
                                                                                शिक्षा,
                                                                                कौशल
                                                                                विकास
                                                                                और
                                                                                नेतृत्व
                                                                                के
                                                                                अवसर
                                                                                प्रदान
                                                                                करते
                                                                                हैं।
                                                                                सशक्त
                                                                                महिलाएँ
                                                                                ही
                                                                                सशक्त
                                                                                समाज
                                                                                और
                                                                                उज्ज्वल
                                                                                भविष्य
                                                                                का
                                                                                निर्माण
                                                                                करती
                                                                                हैं।
                                                                                हम
                                                                                महिलाओं
                                                                                में
                                                                                आत्मविश्वास
                                                                                जगाकर
                                                                                उन्हें
                                                                                आत्मनिर्भर
                                                                                बनने
                                                                                की
                                                                                दिशा
                                                                                में
                                                                                आगे
                                                                                बढ़ाते
                                                                                हैं।
                                                                                हर
                                                                                महिला
                                                                                की
                                                                                सफलता
                                                                                समाज
                                                                                में
                                                                                सकारात्मक
                                                                                परिवर्तन
                                                                                लाती
                                                                                है।
                                                                                हम
                                                                                समान
                                                                                अधिकार,
                                                                                सम्मान
                                                                                और
                                                                                अवसरों
                                                                                के
                                                                                लिए
                                                                                निरंतर
                                                                                प्रयासरत
                                                                                हैं।
                                                                                महिलाओं
                                                                                की
                                                                                जागरूकता
                                                                                ही
                                                                                सामाजिक
                                                                                बदलाव
                                                                                की
                                                                                नींव
                                                                                है।
                                                                                हम
                                                                                हर
                                                                                महिला
                                                                                की
                                                                                क्षमता
                                                                                को
                                                                                पहचानकर
                                                                                उसे
                                                                                आगे
                                                                                बढ़ने
                                                                                का
                                                                                मंच
                                                                                देते
                                                                                हैं।
                                                                                जागृत
                                                                                और
                                                                                सशक्त
                                                                                महिलाएँ
                                                                                ही
                                                                                एक
                                                                                बेहतर
                                                                                दुनिया
                                                                                का
                                                                                निर्माण
                                                                                करती
                                                                                हैं।
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* dheye geet */}
                    <section className="founder-message-section">
                        <div className="container-msg">
                            <div className="section-header">
                                <h2>ध्येय गीत</h2>

                                <div className="sec-title colored text-center">
                                    <span className="decor">
                                        <span className="inner"></span>
                                    </span>
                                </div>
                                <div className="audio-card">
                                    <p className="audio-title">
                                        🎵 ध्येय गीत सुनें
                                    </p>

                                    <audio controls>
                                        <source
                                            src="/audio/geet.mpeg"
                                            type="audio/mpeg"
                                        />
                                    </audio>
                                </div>
                            </div>

                            <div className="message-wrapper">
                                <div className="message-card">
                                    <p className="message-text">{message}</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* end */}

                    <section className="volunteer-section">
                        <div className="container">
                            <div className="section-header">
                                <h2>राष्ट्रीय सदस्य 2025-2027</h2>
                                <div className="sec-title colored text-center">
                                    <span className="decor">
                                        <span className="inner"></span>
                                    </span>
                                </div>
                            </div>

                            <div className="container">
                                {/* Single person full width row */}
                                <div className="row mb-4 justify-content-center text-center">
                                    <div className="col-md-4">
                                        <div className="member-image">
                                            <img
                                                src="/front/indresh2.png"
                                                alt="श्री इंद्रेश जी"
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="member-card">
                                            <h4>माननीय इंद्रेश जी</h4>
                                            <span>
                                                संस्थापक संरक्षक (WWAO) ,सदस्य
                                                केंद्रीय कारिणी
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Grid for remaining people */}
                                <div className="row">
                                    {nationalMembers.map((member, index) => (
                                        <div
                                            className="col-md-4 col-sm-6 mb-4 text-center"
                                            key={member.id || index}
                                        >
                                            <div className="member-image">
                                                <img
                                                    src={`/storage/${member.image}`}
                                                    alt={member.name}
                                                    className="img-fluid"
                                                />
                                            </div>

                                            <div className="member-card">
                                                <h4>{member.name}</h4>
                                                <span>{member.city}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Executive Section */}
                            <div className="section-header">
                                <h2>राष्ट्रीय स्तर पर क्षेत्रीय कार्यकारिणी</h2>
                                <div className="sec-title colored text-center">
                                    <span className="decor">
                                        <span className="inner"></span>
                                    </span>
                                </div>
                            </div>
                            <div className="volunteer-grid-1">
                                {executive.map((member, index) => (
                                    <div
                                        className="volunteer-card"
                                        key={member.id || index}
                                    >
                                        <div className="image-box">
                                            <img
                                                src={`/storage/${member.image}`}
                                                alt={member.name}
                                            />
                                        </div>

                                        <h4>{member.name}</h4>
                                        <span>{member.designation}</span>
                                        <br />
                                        <span>{member.mobile}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Rashtriya Salhakar Section */}
                            <div
                                className="section-header"
                                style={{ marginTop: "40px" }}
                            >
                                <h2> राष्ट्रीय सलाहकार</h2>
                                <div className="sec-title colored text-center">
                                    <span className="decor">
                                        <span className="inner"></span>
                                    </span>
                                </div>
                            </div>

                            <div className="volunteer-grid">
                                {salhakar.map((member, index) => (
                                    <div
                                        className="volunteer-card"
                                        key={member.id || index}
                                    >
                                        <div className="image-box">
                                            <img
                                                src={`/storage/${member.image}`}
                                                alt={member.name}
                                            />
                                        </div>

                                        <h4>{member.name}</h4>
                                        <span>{member.designation}</span>
                                        <br />
                                        <span>{member.mobile}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    {/* end */}

                    <section
                        id="chapters"
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
                                            <section className=" sec-padding founder-message-section ">
                                                <div className="container">
                                                    <div className="section-header">
                                                        <h2>चैप्टर्स</h2>
                                                        <div className="sec-title colored text-center">
                                                            <span className="decor">
                                                                <span className="inner"></span>
                                                            </span>
                                                        </div>
                                                    </div>

                                                    <div className="row">
                                                        {chapters.map(
                                                            (chapter) => (
                                                                <div
                                                                    key={
                                                                        chapter.id
                                                                    }
                                                                    className="col-sm-12 col-md-4 col-lg-4"
                                                                >
                                                                    <div className="causes sm-col5-center">
                                                                        <div className="thumb">
                                                                            <img
                                                                                loading="lazy"
                                                                                decoding="async"
                                                                                src={`/storage/${chapter.image}`}
                                                                                alt={
                                                                                    chapter.name
                                                                                }
                                                                                className="full-width wp-post-image"
                                                                                style={{
                                                                                    width: "360px",
                                                                                    height: "245px",
                                                                                    objectFit:
                                                                                        "cover",
                                                                                }}
                                                                            />
                                                                        </div>

                                                                        <div className="causes-details clearfix">
                                                                            <h4 className="title">
                                                                                <Link
                                                                                    href={`/chapters/${chapter.id}`}
                                                                                >
                                                                                    {
                                                                                        chapter.name
                                                                                    }
                                                                                </Link>
                                                                            </h4>

                                                                            <ul className="about-causes list-inline clearfix"></ul>
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
                        className="elementor-section elementor-top-section elementor-element elementor-element-a6bc305 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="a6bc305"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-02d9ee4"
                                data-id="02d9ee4"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-20087d0 elementor-widget elementor-widget-charityhome_call_to_action"
                                        data-id="20087d0"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_call_to_action.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="overlay-white sec-padding parallax-section">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-lg-8 offset-lg-2 promote-project text-center">
                                                            <h3>
                                                                गतिविधियों की
                                                                प्रतियां
                                                            </h3>
                                                            <div className="sec-title colored text-center">
                                                                <span className="decor">
                                                                    <span className="inner"></span>
                                                                </span>
                                                            </div>
                                                            <h2>
                                                                WWAO द्वारा की
                                                                गयी गतिविधियां
                                                                एवं पत्राचार
                                                            </h2>{" "}
                                                            <a
                                                                href="/front/pdf/pdf-1.pdf"
                                                                className="thm-btn inverse"
                                                            >
                                                                PDF-1
                                                            </a>
                                                            <a
                                                                href="/front/pdf/pdf-2.pdf"
                                                                className="thm-btn inverse"
                                                            >
                                                                PDF-2
                                                            </a>
                                                            <a
                                                                href="/front/pdf/pdf-3.pdf"
                                                                className="thm-btn inverse"
                                                            >
                                                                PDF-3
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* MEDIA COVERAGE */}
                    {/* <section
                        className="sec-padding founder-message-section"
                        id="media"
                    >
                        <div className="container-msg">
                            <div className="section-header">
                                <h2> मीडिया कवरेज </h2>
                                <div className="sec-title colored text-center">
                                    <span className="decor">
                                        <span className="inner"></span>
                                    </span>
                                </div>
                            </div>

                            <div className="media-container">
                                <div className="media-card">
                                    <img
                                        src="/front/media-1.PNG"
                                        alt="media1"
                                    />
                                </div>

                                <div className="media-card">
                                    <img
                                        src="/front/media-2.PNG"
                                        alt="media2"
                                    />
                                </div>

                                <div className="media-card">
                                    <img
                                        src="/front/media-3.jpeg"
                                        alt="media3"
                                    />
                                </div>
                            </div>
                        </div>
                    </section> */}

                    <section>
                        <div className="container-msg">
                            <div className="section-header">
                                <h2>मीडिया कवरेज</h2>
                                <div className="sec-title colored text-center">
                                    <span className="decor">
                                        <span className="inner"></span>
                                    </span>
                                </div>
                            </div>

                            <div className="media-container">
                                {mediaCoverage?.length > 0 ? (
                                    mediaCoverage.map((item) => (
                                        <div
                                            key={item.id}
                                            className="col-lg-4 col-md-6 mb-4"
                                        >
                                            <div className="media-card">
                                                <img
                                                    src={`/storage/${item.image}`}
                                                    alt={
                                                        item.title ||
                                                        "Media Coverage"
                                                    }
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12 text-center">
                                        No media coverage available.
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                    {/* MEDIA-COVERAGE-END */}

                    {/* Rashtriya */}
                    <div style={{ padding: "40px" }}>
                        {/* LEFT */}
                        <AutoSliderSection
                            title="
राष्ट्रीय सम्मेलन"
                            images={rashtriyaImages}
                            reverse={false}
                        />

                        {/* RIGHT */}
                        <AutoSliderSection
                            title="
2nd सेमिनार"
                            images={seminarImages}
                            reverse={true}
                        />
                    </div>

                    {/* 
                 Rashtriya section end */}
                    {/* Gallery section start */}
                    <section
                        id="gallery"
                        className="elementor-section elementor-top-section elementor-element elementor-element-f738864 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                        data-id="f738864"
                        data-element_type="section"
                    >
                        <div className="elementor-container elementor-column-gap-default">
                            <div
                                className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7a7b48b"
                                data-id="7a7b48b"
                                data-element_type="column"
                            >
                                <div className="elementor-widget-wrap elementor-element-populated">
                                    <div
                                        className="elementor-element elementor-element-90f6944 elementor-widget elementor-widget-charityhome_gallery_v1"
                                        data-id="90f6944"
                                        data-element_type="widget"
                                        data-widget_type="charityhome_gallery_v1.default"
                                    >
                                        <div className="elementor-widget-container">
                                            <section className="gallery-section pb_2 sec-padding founder-message-section">
                                                <div className="container">
                                                    <div className="sec-title text-center">
                                                        <h2> गैलरी</h2>{" "}
                                                        {/* <p>
                                                            Lorem ipsum is a
                                                            dummy text it will
                                                            use for subtitle
                                                            here
                                                        </p>{" "} */}
                                                        <div className="sec-title colored text-center">
                                                            <span className="decor">
                                                                <span className="inner"></span>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters ">
                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        src="/front/g4.jpeg"
                                                                        // srcSet="/front/chapters/jammu/event-1.jpg 360w, /front/chapters/jammu/event-1-large.jpg 570w"
                                                                        sizes="(max-width: 360px) 100vw, 360px"
                                                                        className="full-width wp-post-image"
                                                                        style={{
                                                                            width: "360px",
                                                                            height: "280px",
                                                                            objectFit:
                                                                                "cover",
                                                                        }}
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <p
                                                                        style={{
                                                                            color: "white",
                                                                            fontSize:
                                                                                "20px",
                                                                        }}
                                                                    ></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        src="/front/g1.jpeg"
                                                                        // srcSet="/front/chapters/jammu/event-2.jpg 360w, /front/chapters/jammu/event-2-large.jpg 570w"
                                                                        sizes="(max-width: 360px) 100vw, 360px"
                                                                        className="full-width wp-post-image"
                                                                        style={{
                                                                            width: "360px",
                                                                            height: "280px",
                                                                            objectFit:
                                                                                "cover",
                                                                        }}
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <p
                                                                        style={{
                                                                            color: "white",
                                                                            fontSize:
                                                                                "20px",
                                                                        }}
                                                                    ></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        src="/front/g2.jpeg"
                                                                        // srcSet="/front/chapters/jammu/event-11.jpg 360w, /front/chapters/jammu/event-11-large.jpg 570w"
                                                                        sizes="(max-width: 360px) 100vw, 360px"
                                                                        className="full-width wp-post-image"
                                                                        style={{
                                                                            width: "360px",
                                                                            height: "280px",
                                                                            objectFit:
                                                                                "cover",
                                                                        }}
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <p
                                                                        style={{
                                                                            color: "white",
                                                                            fontSize:
                                                                                "20px",
                                                                        }}
                                                                    ></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        src="/front/g3.jpeg"
                                                                        // srcSet="/front/chapters/jammu/event-21.jpg 360w, /front/chapters/jammu/event-21-large.jpg 570w"
                                                                        sizes="(max-width: 360px) 100vw, 360px"
                                                                        className="full-width wp-post-image"
                                                                        style={{
                                                                            width: "360px",
                                                                            height: "280px",
                                                                            objectFit:
                                                                                "cover",
                                                                        }}
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <p
                                                                        style={{
                                                                            color: "white",
                                                                            fontSize:
                                                                                "20px",
                                                                        }}
                                                                    ></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        src="/front/b2.jpeg"
                                                                        // srcSet="/front/chapters/jammu/event-21.jpg 360w, /front/chapters/jammu/event-21-large.jpg 570w"
                                                                        sizes="(max-width: 360px) 100vw, 360px"
                                                                        className="full-width wp-post-image"
                                                                        style={{
                                                                            width: "360px",
                                                                            height: "280px",
                                                                            objectFit:
                                                                                "cover",
                                                                        }}
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <p
                                                                        style={{
                                                                            color: "white",
                                                                            fontSize:
                                                                                "20px",
                                                                        }}
                                                                    >
                                                                        वाराणसी
                                                                        के मेयर
                                                                        के साथ
                                                                        फोटो
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        src="/front/chapters/jammu/event-5.jpg"
                                                                        // srcSet="/front/chapters/jammu/event-5.jpg 360w, /front/chapters/jammu/event-5-large.jpg 570w"
                                                                        sizes="(max-width: 360px) 100vw, 360px"
                                                                        className="full-width wp-post-image"
                                                                        style={{
                                                                            width: "360px",
                                                                            height: "280px",
                                                                            objectFit:
                                                                                "cover",
                                                                        }}
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <p
                                                                        style={{
                                                                            color: "white",
                                                                            fontSize:
                                                                                "20px",
                                                                        }}
                                                                    >
                                                                        सम्मान
                                                                        एवं
                                                                        उप्लभ्धियाँ
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box ">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        src="/front/chapters/jammu/event-22.jpg"
                                                                        // srcSet="/front/chapters/jammu/event-22.jpg 360w, /front/chapters/jammu/event-22-large.jpg 570w"
                                                                        sizes="(max-width: 360px) 100vw, 360px"
                                                                        className="full-width wp-post-image"
                                                                        style={{
                                                                            width: "360px",
                                                                            height: "280px",
                                                                            objectFit:
                                                                                "cover",
                                                                        }}
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <p
                                                                        style={{
                                                                            color: "white",
                                                                            fontSize:
                                                                                "20px",
                                                                        }}
                                                                    >
                                                                        राहत एवं
                                                                        मानवीय
                                                                        सहायता
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* <!--Image Box--> */}
                                                    <div className="image-box col-xl-3 col-lg-6">
                                                        <div className="inner-box">
                                                            <figure className="image">
                                                                <a
                                                                    href="#"
                                                                    className="lightbox-image"
                                                                >
                                                                    <img
                                                                        loading="lazy"
                                                                        decoding="async"
                                                                        src="/front/chapters/jammu/event-7.jpg"
                                                                        // srcSet="/front/chapters/jammu/event-7.jpg 360w, /front/chapters/jammu/event-7-large.jpg 570w"
                                                                        sizes="(max-width: 360px) 100vw, 360px"
                                                                        className="full-width wp-post-image"
                                                                        style={{
                                                                            width: "360px",
                                                                            height: "280px",
                                                                            objectFit:
                                                                                "cover",
                                                                        }}
                                                                    />
                                                                </a>
                                                            </figure>
                                                            <div className="overlay">
                                                                <div className="content">
                                                                    <p
                                                                        style={{
                                                                            color: "white",
                                                                            fontSize:
                                                                                "20px",
                                                                        }}
                                                                    >
                                                                        सम्मान
                                                                        एवं
                                                                        उप्लभ्धियाँ
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
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

                <Footer />
            </div>
        </div>
    );
};

export default Home;
