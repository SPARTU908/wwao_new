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



const EditStudent = ({ student, status }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data, setData, post, errors, processing } = useForm({
    StdName: student?.StdName || "",
    ClassName: student?.ClassName || "",
    DOB: student?.DOB || "",
    FatherName: student?.FatherName || "",
    MotherName: student?.MotherName || "",
    State: student?.State || "",
    SinceYear: student?.SinceYear || "",
    
    
  });
const [preview, setPreview] = useState(
  student?.Photo ? `/storage/${student.Photo}` : null
);
  const submit = (e) => {
    e.preventDefault();
    post(`/admin/student-update/${student.id}`, {
      forceFormData: true,
    });
  };
  return (
    <>

<Head title='Edit Student'></Head>
    
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
                  Edit   Student
                </h3>
              </div>

              <div className="card-body px-3 pb-1">
                <form className="mt-lg-3"  onSubmit={submit}  encType="multipart/form-data">
           
                  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-1" className="mb-0">
                        Student's Name
                      </label>
                    </div>

                    <div className="col-sm-9">
                      <input type="text" name='StdName' className="form-control col-sm-8 col-md-6" placeholder='Enter Student Name' value={data.StdName} onChange={e=>setData("StdName",e.target.value)} />
{errors.StdName && <div className='text-danger'>{errors.StdName}</div>}
                    </div>
                  </div>


                  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-focus-1" className="mb-0">
                        class
                      </label>
                    </div>

                    <div className="col-sm-9">
                      <input value={data.ClassName} onChange={e=>setData('ClassName', e.target.value)} type="text" name='className' className="form-control brc-on-focus brc-success-m1 col-sm-8 col-md-6" placeholder='Enter className' id="className_name" />
                 {errors.ClassName && <div className='text-danger'>{errors.ClassName}</div>}
                    </div>
                  </div>


                  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-focus-1" className="mb-0">
                        Date of birth
                      </label>
                    </div>

                    <div className="col-sm-9">
                      <input value={data.DOB} onChange={e=>setData('DOB', e.target.value)} type="date" name='DOB' className="form-control brc-on-focus brc-success-m1 col-sm-8 col-md-6" placeholder='Enter Roll No.' id="roll_no" />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-3" className="mb-0">
                        Father's Name
                      </label>
                    </div>

                    <div className="col-sm-9">
                      <input value={data.FatherName} onChange={e=>setData('FatherName',e.target.value)} type="text" name='FatherName' className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block" placeholder="Enter Father's Name" id="FatherName" />
               {errors.FatherName && <div className='text-danger'>{errors.FatherName}</div>}    
                    </div>
                  </div>


                  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-password-toggle" className="mb-0">
                       Mother's Name
                      </label>
                    </div>

                    <div className="col-sm-9"> 
                     
                        <input value={data.MotherName} onChange={e=>setData('MotherName',e.target.value)} type="text" name='MotherName' className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block" placeholder="Enter Mother's Name"  id="MotherName" />
                    {errors.MotherName && <div className='text-danger'>{errors.MotherName}</div>}    
                     
                    </div>
                  </div>

                      <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-password-toggle" className="mb-0">
                      State
                      </label>
                    </div>

                    <div className="col-sm-9">
                     
                        <input value={data.State} onChange={e=>setData('State', e.target.value)} type="text" name='State' className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block" placeholder="Enter State"  id="state" />
                      {errors.State && <div className='text-danger'>{errors.State}</div>}      
                     
                    </div>
                  </div>


                     <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-password-toggle" className="mb-0">
                      Since Year
                      </label>
                    </div>

                    <div className="col-sm-9">
                     
                        <input value={data.SinceYear} onChange={e=>setData('SinceYear',e.target.value)} type="text" name='SinceYear' className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block" placeholder="Enter Since Year"  id="since_year" />
       {errors.SinceYear && <div className='text-danger'>{errors.SinceYear}</div>}                 
                     
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
    setData("Photo", file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }}
/>
{preview && (
  <div className="mt-2">
    <img
      src={preview}
      alt="Student"
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

export default EditStudent
