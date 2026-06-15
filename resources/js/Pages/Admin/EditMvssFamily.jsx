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



const EditMvssFamily = ({status, families}) => {
     const [sidebarOpen, setSidebarOpen] = useState(false);
 const { data, setData, post, errors, processing } = useForm({
    name: families?.name || "",
    dob: families?.dob || "",
    wife_name: families?.wife_name || "",
    address: families?.address || "",
    mobile: families?.mobile || "",
    email_id:families?.email_id|| "",
    husband_photo: null,
    wife_photo: null,
  });

  const [husbandPreview, setHusbandPreview] = useState(
    families?.husband_photo ? `/storage/${families.husband_photo}` : null
  );

  const [wifePreview, setWifePreview] = useState(
    families?.wife_photo ? `/storage/${families.wife_photo}` : null
  );

  const submit = (e) => {
    e.preventDefault();
    post(`/admin/mvss-family-update/${families.id}`, {
      forceFormData: true,
    });
  };

 
  return (
    <>

<Head title='EditMvssFamily'></Head>
    
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
                  Edit  MVSS Family
                </h3>
              </div>

              <div className="card-body px-3 pb-1">
                <form className="mt-lg-3"  onSubmit={submit} encType="multipart/form-data">
           
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
                     <label htmlFor="id-form-field-password-toggle" className="mb-0">
                     Date of Birth
                      </label>
                    </div>

                    <div className="col-sm-9">
                     
                       <input
  id="dob"
  name="dob"
  type='date'
  className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block"
  placeholder="Enter Date of Birth"
  value={data.dob}
  onChange={(e) => setData('dob', e.target.value)}
  
/>

{errors.dob && (
  <div className="text-danger mt-1">
    {errors.dob}
  </div>
)}   
                     
                    </div>
                  </div>

        <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-password-toggle" className="mb-0">
                    Wife Name
                      </label>
                    </div>

                    <div className="col-sm-9">
                     
                       <input
  id="wife_name"
  name="wife_name"
  className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block"
  placeholder="Enter wife name"
  value={data.wife_name}
  onChange={(e) => setData('wife_name', e.target.value)}
  
/>

{errors.wife_name && (
  <div className="text-danger mt-1">
    {errors.wife_name}
  </div>
)}   
                     
                    </div>
                  </div>

        <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-password-toggle" className="mb-0">
                  Address
                      </label>
                    </div>

                    <div className="col-sm-9">
                     
                       <input
  id="address"
  name="address"
  className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block"
  placeholder="Enter Address"
  value={data.address}
  onChange={(e) => setData('address', e.target.value)}
  
/>

{errors.address && (
  <div className="text-danger mt-1">
    {errors.address}
  </div>
)}   
                     
                    </div>
                  </div>               
  <div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-password-toggle" className="mb-0">
                  Mobile
                      </label>
                    </div>

                    <div className="col-sm-9">
                     
                       <input
  id="mobile"
  name="mobile"
  className="form-control brc-on-focus col-sm-8 col-md-6 d-inline-block"
  placeholder="Enter mobile"
  value={data.mobile}
  onChange={(e) => setData('mobile', e.target.value)}
  
/>

{errors.mobile && (
  <div className="text-danger mt-1">
    {errors.mobile}
  </div>
)}   
                     
                    </div>
                  </div>   
<div className="form-group row">
                    <div className="col-sm-3 col-form-label text-sm-right pr-0">
                     <label htmlFor="id-form-field-1" className="mb-0">
                       Email - Id
                      </label>
                    </div>

                    <div className="col-sm-9">
                      <input type="text" name='email_id' className="form-control col-sm-8 col-md-6" placeholder='Enter Email Id' value={data.email_id} onChange={e=>setData("email_id",e.target.value)} />
{errors.email_id && <div className='text-danger'>{errors.email_id}</div>}
                    </div>
                  </div>
 {/* Husband Photo */}
      <div className="form-group row">
        <div className="col-sm-3 col-form-label text-sm-right pr-0">
          <label>Husband Photo</label>
        </div>

        <div className="col-sm-9">
          <input
            type="file"
            className="form-control col-sm-8 col-md-6"
            accept="image/*"
            onChange={(e) => {
              setData("husband_photo", e.target.files[0]);
              setHusbandPreview(URL.createObjectURL(e.target.files[0]));
            }}
          />

          {husbandPreview && (
            <div className="mt-2">
              <img src={husbandPreview} width="120" className="rounded border" />
            </div>
          )}

          {errors.husband_photo && (
            <div className="text-danger">{errors.husband_photo}</div>
          )}
        </div>
      </div>

      {/* Wife Photo */}
      <div className="form-group row">
        <div className="col-sm-3 col-form-label text-sm-right pr-0">
          <label>Wife Photo</label>
        </div>

        <div className="col-sm-9">
          <input
            type="file"
            className="form-control col-sm-8 col-md-6"
            accept="image/*"
            onChange={(e) => {
              setData("wife_photo", e.target.files[0]);
              setWifePreview(URL.createObjectURL(e.target.files[0]));
            }}
          />

          {wifePreview && (
            <div className="mt-2">
              <img src={wifePreview} width="120" className="rounded border" />
            </div>
          )}

          {errors.wife_photo && (
            <div className="text-danger">{errors.wife_photo}</div>
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

export default EditMvssFamily
