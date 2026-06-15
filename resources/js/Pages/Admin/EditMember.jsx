import React, { useState } from "react";
import { Head, useForm } from "@inertiajs/react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

const EditMember = ({ member }) => {
    console.log(member);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const { data, setData, post, processing, errors } = useForm({
        name: member?.name || "",
        designation: member?.designation || "",
        city: member?.city || "",
        mobile: member?.mobile || "",
        category: member?.category || "",
        image: null,
    });

    const [preview, setPreview] = useState(
        member?.image ? `/storage/${member.image}` : null
    );

  const submit = (e) => {
    e.preventDefault();

    post(`/admin/update-member/${member.id}`, {
        forceFormData: true,
    });
};

    return (
        <>
            <Head title="Edit Member" />

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
                                        Edit Member
                                    </h3>
                                </div>

                                <div className="card-body">
                                    <form
                                        onSubmit={submit}
                                        encType="multipart/form-data"
                                    >
                                        {/* Name */}
                                        <div className="form-group mb-3">
                                            <label>Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {errors.name && (
                                                <div className="text-danger">
                                                    {errors.name}
                                                </div>
                                            )}
                                        </div>

                                        {/* Designation */}
                                        <div className="form-group mb-3">
                                            <label>Designation</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.designation}
                                                onChange={(e) =>
                                                    setData(
                                                        "designation",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        {/* City */}
                                        <div className="form-group mb-3">
                                            <label>City</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.city}
                                                onChange={(e) =>
                                                    setData(
                                                        "city",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        {/* Mobile */}
                                        <div className="form-group mb-3">
                                            <label>Mobile</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                value={data.mobile}
                                                onChange={(e) =>
                                                    setData(
                                                        "mobile",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        {/* Category */}
                                        <div className="form-group mb-3">
                                            <label>Category</label>

                                            <select
                                                className="form-control"
                                                value={data.category}
                                                onChange={(e) =>
                                                    setData(
                                                        "category",
                                                        e.target.value
                                                    )
                                                }
                                            >
                                                <option value="">
                                                    Select Category
                                                </option>

                                                <option value="national_member">
                                                    राष्ट्रीय सदस्य 2025-2027
                                                </option>

                                                <option value="executive">
                                                    राष्ट्रीय स्तर पर क्षेत्रीय
                                                    कार्यकारिणी
                                                </option>

                                                <option value="salhakar">
                                                    राष्ट्रीय सलाहकार
                                                </option>
                                            </select>
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

export default EditMember;