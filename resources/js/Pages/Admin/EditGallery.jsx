import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const EditGallery = ({ gallery }) => {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        title: gallery?.title || "",
        image: null,
    });

    const [preview, setPreview] = useState(
        gallery?.image ? `/storage/${gallery.image}` : null
    );

  const submit = (e) => {
    e.preventDefault();

   post(`/admin/update-gallery/${gallery.id}`, {
    forceFormData: true,
    });
};

    return (
        <>
            <Head title="Edit Gallery" />

            <div className="body-container">
                <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                />

                <div className="main-container bgc-white">
                    <div
                        id="sidebar"
                        className={`sidebar sidebar-fixed expandable sidebar-light ${
                            sidebarOpen ? "sidebar-open" : ""
                        }`}
                    >
                        <div className="sidebar-inner">
                            <Sidebar sidebarOpen={sidebarOpen} />
                        </div>
                    </div>

                    <div role="main" className="main-content">
                        <div className="page-content container container-plus">
                            <div className="card acard mt-2 mt-lg-3">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        Edit Gallery
                                    </h3>
                                </div>

                                <div className="card-body">
                                    <form
                                        onSubmit={submit}
                                        encType="multipart/form-data"
                                    >
                                        {/* Name */}
                                        <div className="form-group mb-3">
                                            <label>Title</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.title}
                                                onChange={(e) =>
                                                    setData(
                                                        "title",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.title && (
                                                <div className="text-danger">
                                                    {errors.title}
                                                </div>
                                            )}
                                        </div>


                                         {/* Existing Image */}
                                        {preview && (
                                            <div className="mb-3">
                                                <img
                                                    src={preview}
                                                    alt="Member"
                                                    width="120"
                                                />
                                            </div>
                                        )}

                                        {/* New Image */}
                                        <div className="form-group mb-3">
                                            <label>Image</label>

                                            <input
                                                type="file"
                                                className="form-control"
                                                onChange={(e) => {
                                                    const file =
                                                        e.target.files[0];

                                                    setData("image", file);

                                                    if (file) {
                                                        setPreview(
                                                            URL.createObjectURL(
                                                                file
                                                            )
                                                        );
                                                    }
                                                }}
                                            />

                                            {errors.image && (
                                                <div className="text-danger">
                                                    {errors.image}
                                                </div>
                                            )}
                                        </div>

                                        <button
                                            className="btn btn-primary"
                                            type="submit"
                                            disabled={processing}
                                        >
                                            {processing
                                                ? "Updating..."
                                                : "Update Member"}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default EditGallery;