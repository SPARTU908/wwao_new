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

const EditBlogs = ({ status, chapters, Chapter_menu }) => {
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
        Chapter_menu_id: chapters?.Chapter_menu_id || "",
        about_title: chapters?.about_title || "",
        about_content: chapters?.about_content || "",

        banner_text: chapters?.banner_text || "",
        title: chapters?.title || "",

        member_name: chapters?.member_name || "",
        member_designation: chapters?.member_designation || "",
    });

    const [preview1, setPreview1] = useState(
        chapters?.banner_image ? `/storage/${chapters.banner_image}` : null,
    );
    const [preview2, setPreview2] = useState(
        chapters?.member_image ? `/storage/${chapters.member_image}` : null,
    );

    const [preview3, setPreview3] = useState(
        chapters?.about_image ? `/storage/${chapters.about_image}` : null,
    );

    const submit = (e) => {
        e.preventDefault();
        post(`/admin/chapter-update/${chapters.id}`, {
            forceFormData: true,
        });
    };
    return (
        <>
            <Head title="Edit Chapter"></Head>

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
                                            Edit Chapters
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



                                            {/* about title */}


                                              <div className="form-group">
                                                <label>About Title</label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.about_title}
                                                    onChange={(e) =>
                                                        setData(
                                                            "about_title",
                                                            e.target.value,
                                                        )
                                                    }
                                                />

                                                {errors.about_title && (
                                                    <div className="text-danger">
                                                        {errors.about_title}
                                                    </div>
                                                )}
                                            </div>

                                            {/* About Image */}

                                            <div className="form-group">
                                                <label>About Image</label>

                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        const file =
                                                            e.target.files[0];

                                                        setData(
                                                            "about_image",
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
                                            </div>

                                            {/* About Content */}

                                            <div className="form-group">
                                                <label>About Content</label>

                                                <textarea
                                                    type="text"
                                                    className="form-control"
                                                    value={data.about_content}
                                                    onChange={(e) =>
                                                        setData(
                                                            "about_content",
                                                            e.target.value,
                                                        )
                                                    }
                                                />

                                                {errors.about_content && (
                                                    <div className="text-danger">
                                                        {errors.about_content}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Banner Image */}
                                            <div className="form-group">
                                                <label>Banner Image</label>

                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        const file =
                                                            e.target.files[0];

                                                        setData(
                                                            "banner_image",
                                                            file,
                                                        );

                                                        if (file) {
                                                            setPreview1(
                                                                URL.createObjectURL(
                                                                    file,
                                                                ),
                                                            );
                                                        }
                                                    }}
                                                />

                                                {preview1 && (
                                                    <img
                                                        src={preview1}
                                                        style={{
                                                            width: "120px",
                                                            marginTop: "10px",
                                                        }}
                                                    />
                                                )}
                                            </div>

                                            {/* Banner Text */}

                                            <div className="form-group">
                                                <label>Banner Text</label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.banner_text}
                                                    onChange={(e) =>
                                                        setData(
                                                            "banner_text",
                                                            e.target.value,
                                                        )
                                                    }
                                                />

                                                {errors.banner_text && (
                                                    <div className="text-danger">
                                                        {errors.banner_text}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Title */}

                                            <div className="form-group">
                                                <label>Title</label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.title}
                                                    onChange={(e) =>
                                                        setData(
                                                            "title",
                                                            e.target.value,
                                                        )
                                                    }
                                                />

                                                {errors.title && (
                                                    <div className="text-danger">
                                                        {errors.title}
                                                    </div>
                                                )}
                                            </div>

                                            {/* Member Image */}

                                            <div className="form-group">
                                                <label>Member Image</label>

                                                <input
                                                    type="file"
                                                    className="form-control"
                                                    onChange={(e) => {
                                                        const file =
                                                            e.target.files[0];

                                                        setData(
                                                            "member_image",
                                                            file,
                                                        );

                                                        if (file) {
                                                            setPreview2(
                                                                URL.createObjectURL(
                                                                    file,
                                                                ),
                                                            );
                                                        }
                                                    }}
                                                />

                                                {preview2 && (
                                                    <img
                                                        src={preview2}
                                                        style={{
                                                            width: "120px",
                                                            marginTop: "10px",
                                                        }}
                                                    />
                                                )}
                                            </div>

                                            {/* Member Name */}

                                            <div className="form-group">
                                                <label>Member Name</label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={data.member_name}
                                                    onChange={(e) =>
                                                        setData(
                                                            "member_name",
                                                            e.target.value,
                                                        )
                                                    }
                                                />
                                            </div>

                                            {/* Member Designation */}

                                            <div className="form-group">
                                                <label>
                                                    Member Designation
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={
                                                        data.member_designation
                                                    }
                                                    onChange={(e) =>
                                                        setData(
                                                            "member_designation",
                                                            e.target.value,
                                                        )
                                                    }
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

export default EditBlogs;
