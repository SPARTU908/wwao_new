import React, { useState } from 'react'
import {  useForm } from '@inertiajs/react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Bootstrap JS + Popper
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import { Head } from '@inertiajs/react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AddTribute = ({status}) => {
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
    name:"",
    description:"",
    dob:"",
    dod:"",
    place:"",       
    photo: null,    
    status: 1, 
     });
    
  const submit = e => {
    e.preventDefault();
    post("/admin/tributes-store");
  };
  return (
    <>

<Head title='Add Tribute'></Head>
    
         <div className="body-container">
             
    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      

      


   <div className="main-container bgc-white">

        <div id="sidebar" className={`sidebar sidebar-fixed expandable sidebar-light ${ sidebarOpen ? "sidebar-open" : ""   }`}>
          <div className="sidebar-inner">


        <Sidebar sidebarOpen={sidebarOpen} />
            {/* <!-- /.sidebar scroll --> */}


            <div className="sidebar-section">
              <div className="sidebar-section-item fadeable-bottom">
                <div className="fadeinable">
                  {/* <!-- shows this when collapsed --> */}
                  <div className="pos-rel">
                    <img alt="Alexa's Photo" src="assets/image/avatar/avatar3.jpg" width="42" className="px-1px radius-round mx-2 border-2 brc-default-m2" />
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
                 Add Tribute
                </h3>
              </div>

              <div className="card-body px-3 pb-1">
                <form className="mt-lg-3"  onSubmit={submit}  encType="multipart/form-data">
           
                  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-1" className="mb-0">
                       Name
                      </label>
                    </div>

                    <div className="col-sm-9">
                      <input type="text" name='name' className="form-control col-sm-8 col-md-6" placeholder='Enter  Name' value={data.name} onChange={e=>setData("name",e.target.value)} />
{errors.name && <div className='text-danger'>{errors.name}</div>}
                    </div>
                  </div>

  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-1" className="mb-0">
                       Date of Birth
                      </label>
                    </div>

                    <div className="col-sm-9">
                      <input type="text" name='dob' className="form-control col-sm-8 col-md-6" placeholder='Enter DOB' value={data.dob} onChange={e=>setData("dob",e.target.value)} />
{errors.dob && <div className='text-danger'>{errors.dob}</div>}
                    </div>
                  </div>
       
  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-1" className="mb-0">
                       Date of Death
                      </label>
                    </div>

                    <div className="col-sm-9">
                      <input type="text" name='dod' className="form-control col-sm-8 col-md-6" placeholder='Enter DOD' value={data.dod} onChange={e=>setData("dod",e.target.value)} />
{errors.dod && <div className='text-danger'>{errors.dod}</div>}
                    </div>
                  </div>
       
    <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-1" className="mb-0">
                      Place
                      </label>
                    </div>

                    <div className="col-sm-9">
                      <input type="text" name='place' className="form-control col-sm-8 col-md-6" placeholder='Enter Place' value={data.place} onChange={e=>setData("place",e.target.value)} />
{errors.place && <div className='text-danger'>{errors.place}</div>}
                    </div>
                  </div>
          
    
    

 <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-password-toggle" className="mb-0">
                      Photo
                      </label>
                    </div>

                    <div className="col-sm-9">
                     
                  <input
  type="file"
  name="photo"
  onChange={e => setData('photo', e.target.files[0])}
/>         
                        {errors.photo && <div className='text-danger'>{errors.photo}</div>} 
                    </div>
                  </div>

<div className="form-group row">
  <div className="col-sm-3 col-form-label text-sm-right pr-0">
    <label className="mb-0">
      Description
    </label>
  </div>

  <div className="col-sm-9 col-md-6">

    <ReactQuill
      theme="snow"
      value={data.description}
      onChange={(value) => setData("description", value)}
      modules={quillModules}
      placeholder="Enter Description"
      style={{ height: "200px", marginBottom: "50px" }}
    />

    {errors.description && (
      <div className="text-danger mt-1">
        {errors.description}
      </div>
    )}

  </div>
</div>




                  <div className="mt-5 border-t-1 bgc-secondary-l4 brc-secondary-l2 py-35 mx-n25">
                    <div className="offset-md-3 col-md-9 text-nowrap">
                      <button className="btn btn-info btn-bold px-4" type="submit" disabled={processing}>
                        <i className="fa fa-check mr-1"></i>
                           {processing ? "Uploading..." : "Submit"}
                      </button>

                      <button className="btn btn-outline-lightgrey btn-bgc-white btn-bold ml-2 px-4" type="reset">
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

       <Footer/>
        </div>

       
        {/* <!-- .modal-aside --> */}
      </div>
    </div> 
    </>
  )
}

export default AddTribute
