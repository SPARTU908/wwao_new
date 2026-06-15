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

const AddChapters = ({ status, Chapter_menu }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        Chapter_menu_id: "",
        about_title:"",
        about_image:"",
        about_content:"",
        banner_image: "",
        banner_text: "",
        title: "",
        member_image: "",
        member_name: "",
        member_designation: "",

        status: 1,
    });

    const quillModules = {
        toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
        ],
    };

    const submit = (e) => {
        e.preventDefault();
        post("/admin/add-chapter/store", {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Add Chapter"></Head>

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
                                            Add Chapters
                                        </h3>
                                    </div>

                                    <div className="card-body px-3 pb-1">
                                        <form
                                            className="mt-lg-3"
                                            onSubmit={submit}
                                            encType="multipart/form-data"
                                        >
                                            <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="id-form-field-1"
                                                        className="mb-0"
                                                    >
                                                        Chapter Menu
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <select
                                                        name="Chapter_menu_id"
                                                        className="form-control col-sm-8 col-md-6"
                                                        value={
                                                            data.Chapter_menu_id
                                                        }
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
                                                                    key={
                                                                        menu.id
                                                                    }
                                                                    value={
                                                                        menu.id
                                                                    }
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
                                                            {
                                                                errors.Chapter_menu_id
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
   {/* about title */}


    <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="id-form-field-1"
                                                        className="mb-0"
                                                    >
                                                        About Title
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        value={data.about_title}
                                                        onChange={(e) =>
                                                            setData(
                                                                "about_title",
                                                                e.target.value,
                                                            )
                                                        }
                                                        type="text"
                                                        name="about_title"
                                                        className="form-control col-sm-8 col-md-6"
                                                        placeholder=""
                                                        id="TopTitle"
                                                    />
                                                    {errors.about_title && (
                                                        <div className="text-danger">
                                                            {errors.about_title}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>



{/* 
                                            About Image */}


                                              <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="id-form-field-password-toggle"
                                                        className="mb-0"
                                                    >
                                                        About Image
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        onChange={(e) =>
                                                            setData(
                                                                "about_image",
                                                                e.target
                                                                    .files[0],
                                                            )
                                                        }
                                                        type="file"
                                                        name="about_image"
                                                        className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block"
                                                        id="about_image"
                                                    />

                                                    {errors.about_image && (
                                                        <div className="text-danger">
                                                            {
                                                                errors.about_image
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            </div>


{/* About Content */}
                                              <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="id-form-field-1"
                                                        className="mb-0"
                                                    >
                                                        About Content
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <textarea
                                                        value={data.about_content}
                                                        onChange={(e) =>
                                                            setData(
                                                                "about_content",
                                                                e.target.value,
                                                            )
                                                        }
                                                        type="text"
                                                        name="about_content"
                                                        className="form-control col-sm-8 col-md-6"
                                                        placeholder=""
                                                        id="TopTitle"
                                                    />
                                                    {errors.about_content && (
                                                        <div className="text-danger">
                                                            {errors.about_content}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="id-form-field-password-toggle"
                                                        className="mb-0"
                                                    >
                                                        Banner Image
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        onChange={(e) =>
                                                            setData(
                                                                "banner_image",
                                                                e.target
                                                                    .files[0],
                                                            )
                                                        }
                                                        type="file"
                                                        name="banner_image"
                                                        className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block"
                                                        id="banner_image"
                                                    />

                                                    {errors.banner_image && (
                                                        <div className="text-danger">
                                                            {
                                                                errors.banner_image
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="id-form-field-1"
                                                        className="mb-0"
                                                    >
                                                        Banner Text
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        value={data.banner_text}
                                                        onChange={(e) =>
                                                            setData(
                                                                "banner_text",
                                                                e.target.value,
                                                            )
                                                        }
                                                        type="text"
                                                        name="banner_text"
                                                        className="form-control col-sm-8 col-md-6"
                                                        placeholder=""
                                                        id="TopTitle"
                                                    />
                                                    {errors.banner_text && (
                                                        <div className="text-danger">
                                                            {errors.banner_text}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="id-form-field-1"
                                                        className="mb-0"
                                                    >
                                                        Title
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        value={data.title}
                                                        onChange={(e) =>
                                                            setData(
                                                                "title",
                                                                e.target.value,
                                                            )
                                                        }
                                                        type="text"
                                                        name="title"
                                                        className="form-control col-sm-8 col-md-6"
                                                        placeholder=""
                                                        id="title"
                                                    />
                                                    {errors.title && (
                                                        <div className="text-danger">
                                                            {errors.title}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="id-form-field-1"
                                                        className="mb-0"
                                                    >
                                                        Member Image
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        onChange={(e) =>
                                                            setData(
                                                                "member_image",
                                                                e.target
                                                                    .files[0],
                                                            )
                                                        }
                                                        type="file"
                                                        name="member_image"
                                                        className="form-control col-sm-8 col-md-6"
                                                        id="member_image"
                                                    />
                                                    {errors.member_image && (
                                                        <div className="text-danger">
                                                            {
                                                                errors.member_image
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="id-form-field-1"
                                                        className="mb-0"
                                                    >
                                                        Member Name
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        value={data.member_name}
                                                        onChange={(e) =>
                                                            setData(
                                                                "member_name",
                                                                e.target.value,
                                                            )
                                                        }
                                                        type="text"
                                                        name="member_name"
                                                        className="form-control col-sm-8 col-md-6"
                                                        placeholder=""
                                                        id="member_name"
                                                    />
                                                    {errors.member_name && (
                                                        <div className="text-danger">
                                                            {errors.member_name}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="id-form-field-1"
                                                        className="mb-0"
                                                    >
                                                        Member Designation
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        value={
                                                            data.member_designation
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "member_designation",
                                                                e.target.value,
                                                            )
                                                        }
                                                        type="text"
                                                        name="member_designation"
                                                        className="form-control col-sm-8 col-md-6"
                                                        placeholder=""
                                                        id="member_designation"
                                                    />
                                                    {errors.member_designation && (
                                                        <div className="text-danger">
                                                            {
                                                                errors.member_designation
                                                            }
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="mt-5 border-t-1 bgc-secondary-l4 brc-secondary-l2 py-35 mx-n25">
                                                <div className="offset-md-3 col-md-9 text-nowrap">
                                                    <button
                                                        className="btn btn-info btn-bold px-4"
                                                        type="submit"
                                                        disabled={processing}
                                                    >
                                                        <i className="fa fa-check mr-1"></i>
                                                        {processing
                                                            ? "Uploading..."
                                                            : "Submit"}
                                                    </button>

                                                    <button
                                                        className="btn btn-outline-lightgrey btn-bgc-white btn-bold ml-2 px-4"
                                                        type="reset"
                                                    >
                                                        <i className="fa fa-undo mr-1"></i>
                                                        Reset
                                                    </button>
                                                </div>
                                            </div>
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

export default AddChapters;
