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


const EditEvents = ({status, events}) => {
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
     title: events?.title || "",
    location: events?.location || "",
    event_date: events?.event_date || "",
    start_time: events?.start_time || "",
    end_time: events?.end_time || "",
    description: events?.description || "",
   
   
  });

 const[preview, setPreview]=useState(
   events?.photo? `/storage/${events.photo}`:null
 );
 
 const submit=(e)=>{
   e.preventDefault();
   post(`/admin/events-update/${events.id}`,{
     forceFormData:true,
   });
 };
  return (
    <>

<Head title='Edit Events'></Head>
    
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
                  Add   Event
                </h3>
              </div>

              <div className="card-body px-3 pb-1">
                <form className="mt-lg-3"  onSubmit={submit}  encType="multipart/form-data">
           
                  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-1" className="mb-0">
                       Title
                      </label>
                    </div>

                    <div className="col-sm-9">
                      <input type="text" name='title' className="form-control col-sm-8 col-md-6" placeholder='Enter Student Name' value={data.title} onChange={e=>setData("title",e.target.value)} />
{errors.title && <div className='text-danger'>{errors.title}</div>}
                    </div>
                  </div>


                  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-focus-1" className="mb-0">
                        Location
                      </label>
                    </div>

                    <div className="col-sm-9">
                      <input value={data.location} onChange={e=>setData('location', e.target.value)} type="text" name='location' className="form-control brc-on-focus brc-success-m1 col-sm-8 col-md-6" placeholder='Enter className' id="className_name" />
                 {errors.location && <div className='text-danger'>{errors.location}</div>}
                    </div>
                  </div>


                  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-focus-1" className="mb-0">
                        Date
                      </label>
                    </div>

                    <div className="col-sm-9">
                      <input value={data.event_date} onChange={e=>setData('event_date', e.target.value)} type="date" name='event_date' className="form-control brc-on-focus brc-success-m1 col-sm-8 col-md-6" placeholder='Enter Event Date' id="event_date" />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-3" className="mb-0">
                        Start Time
                      </label>
                    </div>

                    <div className="col-sm-9">
                      <input value={data.start_time} onChange={e=>setData('start_time',e.target.value)} type="time" name='start_time' className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block" placeholder="Enter Start Time" id="start_time" />
               {errors.start_time && <div className='text-danger'>{errors.start_time}</div>}    
                    </div>
                  </div>


                  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-password-toggle" className="mb-0">
                       End Time
                      </label>
                    </div>

                    <div className="col-sm-9"> 
                     
                        <input value={data.end_time} onChange={e=>setData('end_time',e.target.value)} type="time" name='end_time' className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block" placeholder="Enter End Time"  id="end_time" />
                    {errors.end_time && <div className='text-danger'>{errors.end_time}</div>}    
                     
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
  className="form-control col-sm-8 col-md-6"
  onChange={(e) => {
    const file = e.target.files[0];
    setData("photo", file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }}
/>
{preview && (
  <div className="mt-2">
    <img
      src={preview}
      alt="events"
      style={{
        width: "120px",
        height: "120px",
        objectFit: "cover",
        border: "1px solid #ddd",
        borderRadius: "6px",
      }}
    />
  </div>
)}         
                     
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

export default EditEvents
