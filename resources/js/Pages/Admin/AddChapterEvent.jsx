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

const AddChapterEvent = ({ status,Chapter_menu }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { data, setData, post, processing, errors } = useForm({
        Chapter_menu_id: "",
       
        event_title:"",
        event_image:[],
        event_heading:"",
        event_description:"",
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
        post("/admin/add-chapter-event/store", {
            forceFormData: true,
        });
    };

    return (
        <>
            <Head title="Add Chapter Event"></Head>

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
                                            Add Chapter Event
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
                                                        Chapter Event
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
<select
    name="Chapter_menu_id"
    className="form-control col-sm-8 col-md-6"
    value={data.Chapter_menu_id}
    onChange={(e) => setData("Chapter_menu_id", e.target.value)}
>
    <option value="">Select Chapter</option>

    {Chapter_menu.map((menu) => (
        <option key={menu.id} value={menu.id}>
            {menu.Chapter_Name}
        </option>
    ))}
</select>


                                                 
                                                    {errors.Chapter_menu_id && (
                                                        <div className="text-danger">
                                                            {errors.Chapter_menu_id}
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
                                                        Event Title
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        value={data.event_title}
                                                        onChange={(e) =>
                                                            setData(
                                                                "event_title",
                                                                e.target.value,
                                                            )
                                                        }
                                                        type="text"
                                                        name="event_title"
                                                        className="form-control col-sm-8 col-md-6"
                                                        placeholder=""
                                                        id="event_title"
                                                    />
                                                    {errors.event_title && (
                                                        <div className="text-danger">
                                                            {errors.event_title}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>

                                              {/* <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="id-form-field-password-toggle"
                                                        className="mb-0"
                                                    >
                                                        Event Image
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        onChange={(e) =>
                                                            setData(
                                                                "event_image",
                                                                e.target
                                                                    .files[0],
                                                            )
                                                        }
                                                        type="file"
                                                        name="event_image"
                                                        className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block"
                                                        id="event_image"
                                                    />

                                                    {errors.event_image && (
                                                        <div className="text-danger">
                                                            {errors.event_image}
                                                        </div>
                                                    )}
                                                </div>
                                            </div> */}

                                            <div className="form-group row">
    <div className="col-sm-3 col-form-label text-sm-right pr-0">
        <label className="mb-0">Event Image</label>
    </div>

    <div className="col-sm-9">
        <input
            type="file"
            name="event_image[]"
            multiple
            className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block"
            onChange={(e) =>
                setData("event_image", Array.from(e.target.files))
            }
        />

        {errors.event_image && (
            <div className="text-danger">{errors.event_image}</div>
        )}
    </div>
</div>


                                               <div className="form-group row">
                                                <div className="col-sm-3 col-form-label text-sm-right pr-0">
                                                    <label
                                                        htmlFor="id-form-field-1"
                                                        className="mb-0"
                                                    >
                                                        Event Heading
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        value={data.event_heading}
                                                        onChange={(e) =>
                                                            setData(
                                                                "event_heading",
                                                                e.target.value,
                                                            )
                                                        }
                                                        type="text"
                                                        name="event_heading"
                                                        className="form-control col-sm-8 col-md-6"
                                                        placeholder=""
                                                        id="event_heading"
                                                    />
                                                    {errors.event_heading && (
                                                        <div className="text-danger">
                                                            {errors.event_heading}
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
                                                        Event Description
                                                    </label>
                                                </div>

                                                <div className="col-sm-9">
                                                    <input
                                                        value={data.event_description}
                                                        onChange={(e) =>
                                                            setData(
                                                                "event_description",
                                                                e.target.value,
                                                            )
                                                        }
                                                        type="text"
                                                        name="event_description"
                                                        className="form-control col-sm-8 col-md-6"
                                                        placeholder=""
                                                        id="event_description"
                                                    />
                                                    {errors.event_description && (
                                                        <div className="text-danger">
                                                            {errors.event_description}
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

export default AddChapterEvent;
