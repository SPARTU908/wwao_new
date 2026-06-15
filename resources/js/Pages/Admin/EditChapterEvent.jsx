import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Head } from "@inertiajs/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditChapterEvent = ({ status, chapter_events, Chapter_menu }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const quillModules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
        ],
    };

    const { data, setData, post, errors, processing } = useForm({
        Chapter_menu_id: chapter_events?.Chapter_menu_id || "",
        event_title: chapter_events?.event_title || "",
        event_heading: chapter_events?.event_heading || "",
        event_description: chapter_events?.event_description || "",
        event_image: [],
        deleted_images: [],
    });

    // const [preview3, setPreview3] = useState(
    //     chapter_events?.event_image ? `/storage/${chapter_events.event_image}` : null
    // );

    const existingImages = chapter_events?.event_image
    ? JSON.parse(chapter_events.event_image)
    : [];

    const [images, setImages] = useState(existingImages);

    const removeImage = (index) => {
    const img = images[index];

    setImages(images.filter((_, i) => i !== index));

    setData("deleted_images", [...data.deleted_images, img]);
};

const [preview3, setPreview3] = useState([]);
    const submit = (e) => {
    e.preventDefault();

    post(`/admin/chapter-update-event/${chapter_events.id}`, {
        forceFormData: true,
    });
};
    return (
        <>
            <Head title="Edit Chapter Event"></Head>

            <div className="body-container">
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
                            <Sidebar sidebarOpen={sidebarOpen} />
                            {/* <!-- /.sidebar scroll --> */}

                            <div className="sidebar-section">
                                <div className="sidebar-section-item fadeable-bottom">
                                    <div className="fadeinable">
                                        {/* <!-- shows this when collapsed --> */}
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

                                    <div className="fadeable hideable w-100 bg-transparent shadow-none border-0">
                                        {/* <!-- shows this when full-width --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div role="main" className="main-content">
                        {/* form */}

                        <div role="main" className="main-content">
                            <div className="page-content container container-plus">
                                {status && (
                                    <div className="mb-4 text-sm font-medium text-green-600">
                                        {status}
                                    </div>
                                )}
                                <div className="card acard mt-2 mt-lg-3">
                                    <div className="card-header">
                                        <h3 className="card-title text-125 text-primary-d2">
                                            <i className="far fa-edit text-dark-l3 mr-1"></i>
                                            Edit Chapters Event
                                        </h3>
                                    </div>

                                    <div className="card-body px-3 pb-1">
                                        <form
                                            onSubmit={submit}
                                            encType="multipart/form-data"
                                        >
                                            {/* Chapter Menu */}
                                            <div className="form-group">
                                                <label>Chapter Menu</label>

                                                <select
                                                    className="form-control"
                                                    value={data.Chapter_menu_id}
                                                    onChange={(e) =>
                                                        setData(
                                                            "Chapter_menu_id",
                                                            e.target.value,
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Select Chapter
                                                    </option>

                                                    {Chapter_menu.map(
                                                        (menu) => (
                                                            <option
                                                                key={menu.id}
                                                                value={menu.id}
                                                            >
                                                                {
                                                                    menu.Chapter_Name
                                                                }
                                                            </option>
                                                        ),
                                                    )}
                                                </select>

                                                {errors.Chapter_menu_id && (
                                                    <div className="text-danger">
                                                        {errors.Chapter_menu_id}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Event Title */}

                                            <div className="form-group">
                                                <label>Event Title</label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.event_title}
                                                    onChange={(e) =>
                                                        setData(
                                                            "event_title",
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                            </div>

                                            {/* Event Image */}

                                            {/* <div className="form-group">
                                                <label>Event Image</label>

                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        const file =
                                                            e.target.files[0];

                                                        setData(
                                                            "event_image",
                                                            file,
                                                        );

                                                        if (file) {
                                                            setPreview3(
                                                                URL.createObjectURL(
                                                                    file,
                                                                ),
                                                            );
                                                        }
                                                    }}
                                                />

                                                {preview3 && (
                                                    <img
                                                        src={preview3}
                                                        style={{
                                                            width: "120px",
                                                            marginTop: "10px",
                                                        }}
                                                    />
                                                )}
                                            </div> */}

                                   <div className="form-group">
    <label>Event Images</label>

    {/* Existing Images */}
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {images.map((img, index) => (
            <div key={index} style={{ position: "relative" }}>
                <img
                    src={`/storage/${img}`}
                    style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "cover",
                        borderRadius: "6px"
                    }}
                />

                <button
                    type="button"
                    onClick={() => removeImage(index)}
                    style={{
                        position: "absolute",
                        top: "-5px",
                        right: "-5px",
                        background: "red",
                        color: "white",
                        border: "none",
                        borderRadius: "50%",
                        width: "22px",
                        height: "22px",
                        cursor: "pointer"
                    }}
                >
                    ×
                </button>
            </div>
        ))}
    </div>

    {/* Upload New Images */}
    <input
        type="file"
        multiple
        className="form-control mt-3"
        onChange={(e) => {
            const files = Array.from(e.target.files);

            setData("event_image", files);

            const previews = files.map((file) =>
                URL.createObjectURL(file)
            );

            setPreview3(previews);
        }}
    />

    {/* Preview New Images */}
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {preview3.map((img, index) => (
            <img
                key={index}
                src={img}
                style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover"
                }}
            />
        ))}
    </div>
</div>
                                            {/* Event Heading */}

                                            <div className="form-group">
                                                <label>Event Heading</label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.event_heading}
                                                    onChange={(e) =>
                                                        setData(
                                                            "event_heading",
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                            </div>

                                           

                                            {/* Description Editor */}

                                            <div className="form-group">
                                                <label>
                                                    {" "}
                                                    Event Description
                                                </label>

                                                <ReactQuill
                                                    theme="snow"
                                                    value={
                                                        data.event_description
                                                    }
                                                    onChange={(value) =>
                                                        setData(
                                                            "event_description",
                                                            value,
                                                        )
                                                    }
                                                    modules={quillModules}
                                                />
                                            </div>

                                            <button
                                                className="btn btn-primary"
                                                type="submit"
                                                disabled={processing}
                                            >
                                                {processing
                                                    ? "Updating..."
                                                    : "Update Chapter"}
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end form */}

                        <Footer />
                    </div>

                    {/* <!-- .modal-aside --> */}
                </div>
            </div>
        </>
    );
};

export default EditChapterEvent;
