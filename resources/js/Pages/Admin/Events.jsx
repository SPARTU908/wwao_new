import React, { useState, useEffect } from 'react'
import { Head, usePage,router  } from '@inertiajs/react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'

import $ from "jquery";
import "datatables.net-dt";
import "datatables.net-dt/css/dataTables.dataTables.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Events = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  const { flash } = usePage().props;
  const {events} =usePage().props;

  useEffect(() => {
    if (!$.fn.DataTable.isDataTable('#datatable')) {
      $('#datatable').DataTable({
        responsive: true,
        pageLength: 10,
      });
    }

    return () => {
      if ($.fn.DataTable.isDataTable('#datatable')) {
        $('#datatable').DataTable().destroy(true);
      }
    };
  }, []);





  return (
    <>
    <Head title='Student'/>
 
    {/* <!-- include fonts --> */}
    <link rel="stylesheet" type="text/css" href="/admin/dist/css/ace-font.css"/>



    {/* <!-- ace.css --> */}
    <link rel="stylesheet" type="text/css" href="/admin/dist/css/ace.css"/>


    {/* <!-- favicon --> */}
    <link rel="icon" type="image/png" href="/admin/assets/favicon.png" />

      

         <div
                className={`body-container ${sidebarOpen ? "sidebar-visible" : ""}`}
            >
             
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


          <div className="page-content container container-plus">
            <div className="page-header mb-2 pb-2 flex-column flex-sm-row align-items-start align-items-sm-center py-25 px-1">
              <h1 className="page-title text-primary-d2 text-140">
              Event  
                <small class="page-info text-dark-m3">
                  <i class="fa fa-angle-double-right text-80"></i>
                   List
                </small>
              </h1>

              <div className="page-tools mt-3 mt-sm-0 mb-sm-n1">
                {/* <!-- dataTables search box will be inserted here dynamically --> */}

                <a href='/admin/events-create' className='btn btn-primary' >Add</a>
              </div>
            </div>
 {flash?.success && (
              <div className="alert alert-success alert-dismissible fade show">
                {flash.success}
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
              </div>
            )}
            <div class="card bcard h-auto">
              <form autocomplete="off" className="border-t-3 brc-blue-m2">

              <table  id="datatable"  className="d-style w-100 table text-dark-m1 text-95 border-y-1 brc-black-tp11 collapsed dtr-table"
>
  <thead className="sticky-nav text-secondary-m1 text-uppercase text-85">
    <tr>
      <th className="td-toggle-details border-0 bgc-white shadow-sm"> S.No.
        <i className="fa fa-angle-double-down ml-2"></i>
      </th>

     

      <th className="border-0 bgc-white bgc-h-yellow-l3 shadow-sm">Image</th>
      
          <th className="border-0 bgc-white bgc-h-yellow-l3 shadow-sm">Title</th>
          <th className="border-0 bgc-white bgc-h-yellow-l3 shadow-sm">Location</th>
          <th className="border-0 bgc-white bgc-h-yellow-l3 shadow-sm">Date</th>
          <th className="border-0 bgc-white bgc-h-yellow-l3 shadow-sm"> Time</th>
               <th className="border-0 bgc-white shadow-sm w-2">Description</th>
          <th className="border-0 bgc-white bgc-h-yellow-l3 shadow-sm">Status</th>
      <th className="border-0 bgc-white shadow-sm w-2">Action</th>
    
       
    </tr>
  </thead>

  <tbody>
{events.map((item) => (
    <tr key={item.id} className="d-style bgc-h-default-l4">
      <td className="td-toggle-details pos-rel">{item.id}</td>
<td>
        {item.photo && (
          <img
            src={`/storage/${item.photo}`}
            alt={item.photo}
            width="50"
          />
        )}
      </td>
      <td>
        <span className="text-105">{item.title}</span>
        
      </td>

      <td className="text-grey">{item.location}</td>
      <td className="text-grey">{item.event_date}</td>
      <td className="text-grey">{item.start_time} - {item.end_time}</td>

      <td className="text-grey">
        <div dangerouslySetInnerHTML={{ __html: item.description }} />
       </td>
  

      

      <td>{item.status}</td>

   <td className="align-middle" style={{ width: '20%' }}>
        <a href={`/admin/events-edit/${item.id}`}>
          <i className="fa fa-edit text-blue-m1 text-120"></i>
        </a>

        <a
  href="#"
  className="ms-2"
  style={{ marginRight: '-20%' }}
  onClick={(e) => {
    e.preventDefault();

    if (confirm('Are you sure you want to delete this event?')) {
      router.delete(`/admin/events-delete/${item.id}`);
    }
  }}
>
  <i className="fa fa-trash text-danger text-120"></i>
</a>
      </td>
    </tr>
  ))}
  </tbody>
</table>


              </form>
            </div>
          </div>

        <Footer/>
        </div>
        {/* <!-- .modal-aside --> */}
      </div>
    </div>  
  

  


    </>  

  )
}

export default Events
