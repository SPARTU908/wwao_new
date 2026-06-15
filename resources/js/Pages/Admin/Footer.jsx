import React, { useEffect } from 'react'
import $ from "jquery";
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Footer = () => {

  return (
    <>
    
        {/* <!-- include common vendor scripts used in demo pages --> */}
    <script src="/admin/node_modules/jquery/dist/jquery.js"></script>
    <script src="/admin/node_modules/popper.js/dist/umd/popper.js"></script>
    <script src="/admin/node_modules/bootstrap/dist/js/bootstrap.js"></script>
    {/* <!-- include vendor scripts used in "Dashboard" page. see "/views//pages/partials/dashboard/@vendor-scripts.hbs" --> */}
    <script src="/admin/node_modules/chart.js/dist/Chart.js"></script>
    <script src="/admin/node_modules/sortablejs/Sortable.js"></script>
    {/* <!-- include ace.js --> */}
    <script src="/admin/dist/js/ace.js"></script>
    {/* <!-- demo.js is only for Ace's demo and you shouldn't use it --> */}
       <script src="/admin/app/browser/demo.html"></script>
    {/* <!-- "Dashboard" page script to enable its demo functionality --> */}
    <script src="/admin/views/pages/dashboard/page-script.js"></script>


       <footer className="footer d-none d-sm-block">
            <div className="footer-inner bgc-white-tp1">
              <div className="pt-3 border-none border-t-3 brc-grey-l2 border-double">
                <span className="text-primary-m1 font-bolder text-120">Sparkinword</span>
                <span className="text-grey"> &copy; 2026-2027</span>

                <span className="mx-3 action-buttons">
                      <a href="#" className="text-blue-m2 text-150"><i className="fab fa-twitter-square"></i></a>
                      <a href="#" className="text-blue-d2 text-150"><i className="fab fa-facebook"></i></a>
                      <a href="#" className="text-orange-d1 text-150"><i className="fa fa-rss-square"></i></a>
                   </span>
              </div>
            </div>
            {/* <!-- .footer-inner --> */}

            {/* <!-- `scroll to top` button inside footer (for example when in boxed layout) --> */}
            <div className="footer-tools">
              <a href="#" className="btn-scroll-up btn btn-dark mb-2 mr-2">
                <i className="fa fa-angle-double-up mx-2px text-95"></i>
              </a>
            </div>
          </footer>



          {/* <!-- footer toolbox for mobile view --> */}
          <footer className="d-sm-none footer footer-sm footer-fixed">
            <div className="footer-inner">
              <div className="btn-group d-flex h-100 mx-2 border-x-1 border-t-2 brc-primary-m3 bgc-white-tp1 radius-t-1 shadow">
                <button className="btn btn-outline-primary btn-h-lighter-primary btn-a-lighter-primary border-0" data-toggle="modal" data-target="#id-ace-settings-modal">
                  <i className="fas fa-sliders-h text-blue-m1 text-120"></i>
                </button>

                <button className="btn btn-outline-primary btn-h-lighter-primary btn-a-lighter-primary border-0">
                  <i className="fa fa-plus-circle text-green-m1 text-120"></i>
                </button>

                <button className="btn btn-outline-primary btn-h-lighter-primary btn-a-lighter-primary border-0" data-toggle="collapse" data-target="#navbarSearch" aria-controls="navbarSearch" aria-expanded="false" aria-label="Toggle navbar search">
                  <i className="fa fa-search text-orange text-120"></i>
                </button>

                <button className="btn btn-outline-primary btn-h-lighter-primary btn-a-lighter-primary border-0 mr-0">
                  <span className="pos-rel">
                      <i className="fa fa-bell text-purple-m1 text-120"></i>
                      <span className="badge badge-dot bgc-red position-tr mt-n1 mr-n2px"></span>
                  </span>
                </button>
              </div>
            </div>
          </footer>  
    </>
  )
}

export default Footer
