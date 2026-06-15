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

const AddMembers = ({ status }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        designation: "",
        city: "",
        mobile: "",
        image: null,
        category: "",
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
        post("/admin/add-member/store", {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Add Members"></Head>

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
                                            Add Members
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
                                                        Members
                                                    </label>
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="id-form-field-1"
                                                        className="mb-0"
                                                    >
                                                        Name
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        value={data.name}
                                                        onChange={(e) =>
                                                            setData(
                                                                "name",
                                                                e.target.value,
                                                            )
                                                        }
                                                        type="text"
                                                        name="name"
                                                        className="form-control col-sm-8 col-md-6"
                                                        placeholder=""
                                                        id="name"
                                                    />
                                                    {errors.name && (
                                                        <div className="text-danger">
                                                            {errors.name}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label className="mb-0">
                                                        Designation
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        type="text"
                                                        name="designation"
                                                        value={data.designation}
                                                        className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block"
                                                        onChange={(e) =>
                                                            setData(
                                                                "designation",
                                                                e.target.value,
                                                            )
                                                        }
                                                    />

                                                    {errors.designation && (
                                                        <div className="text-danger">
                                                            {errors.designation}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="role"
                                                        className="mb-0"
                                                    >
                                                        Category
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <select
                                                        id="category"
                                                        name="category"
                                                        className="form-control col-sm-8 col-md-6"
                                                        value={data.category}
                                                        onChange={(e) =>
                                                            setData(
                                                                "category",
                                                                e.target.value,
                                                            )
                                                        }
                                                    >
                                                        <option value="">
                                                            Select Category
                                                        </option>

                                                        <option value="national_member">
                                                            राष्ट्रीय सदस्य
                                                            2025-2027
                                                        </option>

                                                        <option value="executive">
                                                            राष्ट्रीय स्तर पर
                                                            क्षेत्रीय
                                                            कार्यकारिणी
                                                        </option>

                                                        <option value="salhakar">
                                                            राष्ट्रीय सलाहकार
                                                        </option>
                                                    </select>

                                                    {errors.category && (
                                                        <div className="text-danger">
                                                            {errors.category}
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
                                                        Mobile
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        value={data.mobile}
                                                        onChange={(e) =>
                                                            setData(
                                                                "mobile",
                                                                e.target.value,
                                                            )
                                                        }
                                                        type="number"
                                                        name="mobile"
                                                        className="form-control col-sm-8 col-md-6"
                                                        placeholder=""
                                                        id="mobile"
                                                    />
                                                    {errors.mobile && (
                                                        <div className="text-danger">
                                                            {errors.mobile}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="image"
                                                        className="mb-0"
                                                    >
                                                        Image
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        type="file"
                                                        name="image"
                                                        id="image"
                                                        className="form-control col-sm-8 col-md-6"
                                                        onChange={(e) =>
                                                            setData(
                                                                "image",
                                                                e.target
                                                                    .files[0],
                                                            )
                                                        }
                                                    />

                                                    {errors.image && (
                                                        <div className="text-danger">
                                                            {errors.image}
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
                                                        City
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        value={data.city}
                                                        onChange={(e) =>
                                                            setData(
                                                                "city",
                                                                e.target.value,
                                                            )
                                                        }
                                                        type="text"
                                                        name="city"
                                                        className="form-control col-sm-8 col-md-6"
                                                        placeholder=""
                                                        id="category"
                                                    />
                                                    {errors.city && (
                                                        <div className="text-danger">
                                                            {errors.city}
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
                </div>
            </div>
        </>
    );
};

export default AddMembers;
