import React, { useEffect, useState } from 'react';
import { Head, usePage, router } from '@inertiajs/react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

import $ from 'jquery';
import 'datatables.net-dt';
import 'datatables.net-dt/css/dataTables.dataTables.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Label } from '@headlessui/react';

const Student = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { flash, std } = usePage().props;

  /* ================= CSRF GLOBAL SETUP ================= */
  useEffect(() => {
    const token = document
      .querySelector('meta[name="csrf-token"]')
      ?.getAttribute('content');

    if (token) {
      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': token,
        },
      });
    }
  }, []);

  /* ================= DATATABLE ================= */
  useEffect(() => {
    const table = $('#datatable').DataTable({
      responsive: true,
      pageLength: 10,
      destroy: true,
    });

    return () => table.destroy();
  }, []);

  /* ================= AUTO EXCEL UPLOAD ================= */
  
  useEffect(() => {
    const handleChange = function () {
      const file = this.files[0];
      if (!file) return;

      const allowed = [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ];

      if (!allowed.includes(file.type)) {
        $('#upload-status').html(
          '<span class="text-danger">Only Excel file allowed</span>'
        );
        this.value = '';
        return;
      }

      const formData = new FormData();
      formData.append('file', file);

      $('#upload-status').html(
        '<span class="text-info">Uploading...</span>'
      );

      $.ajax({
        url: route('student.import'),
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,

        success() {
          $('#upload-status').html(
            '<span class="text-success">Import successful</span>'
          );
          setTimeout(() => window.location.reload(), 1200);
        },

        error(xhr) {
          $('#upload-status').html(
            `<span class="text-danger">
              ${xhr.responseJSON?.message || 'Upload failed'}
            </span>`
          );
        },
      });
    };

    $('#excelFile').on('change', handleChange);
    return () => $('#excelFile').off('change', handleChange);
  }, []);

  return (
    <>
      <Head title="Student" />

      <div className="body-container">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="main-container bgc-white">
          <div
            id="sidebar"
            className={`sidebar sidebar-fixed expandable sidebar-light ${
              sidebarOpen ? 'sidebar-open' : ''
            }`}
          >
            <div className="sidebar-inner">
              <Sidebar sidebarOpen={sidebarOpen} />
            </div>
          </div>

          <div role="main" className="main-content">
            <div className="page-content container container-plus">

              {/* ================= HEADER ================= */}
              <div className="page-header d-flex justify-content-between align-items-center mb-3">
                <h1 className="page-title text-primary-d2">
                  Hostel <small className="text-muted">Student List</small>
                </h1>

                <div className="d-flex gap-2 align-items-start">
                  <label className="form-label fw-bold py-2">
  Upload Excel Sheet
</label>
                  <div>
                    
                    <input
                      type="file"
                      id="excelFile"
                      accept=".xls,.xlsx"
                      className="form-control"
                      style={{ width: '220px' }}
                    />
                    <div id="upload-status" className="small mt-1"></div>
                  </div>
<br/>
                  <a href="/admin/student-create" className="btn btn-primary">
                    Add
                  </a>
                </div>
              </div>

              {flash?.success && (
                <div className="alert alert-success">{flash.success}</div>
              )}

              {/* ================= TABLE ================= */}
              <div className="card">
                <div className="card-body">
                  <table
                    id="datatable"
                    className="table table-bordered table-striped"
                  >
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>DOB</th>
                        <th>Father</th>
                        <th>Mother</th>
                        <th>State</th>
                        <th>Since</th>
                        <th>Photo</th>
                        <th>Status</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {std.map((item) => (
                        <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.StdName}</td>
                          <td>{item.ClassName}</td>
                          <td>{item.DOB}</td>
                          <td>{item.FatherName}</td>
                          <td>{item.MotherName}</td>
                          <td>{item.State}</td>
                          <td>{item.SinceYear}</td>
                         <td>
  {item.Photo && (
    <img
      src={`/storage/${item.Photo}`}
      width="40"
      alt="Student"
    />
  )}
</td>
                          <td>{item.Status}</td>
                          <td>
                            <a href={`/admin/student-edit/${item.id}`}>✏️</a>
                            <a
                              href="#"
                              className="ms-2"
                              onClick={(e) => {
                                e.preventDefault();
                                if (confirm('Delete this student?')) {
                                  router.delete(
                                    `/admin/student-delete/${item.id}`
                                  );
                                }
                              }}
                            >
                              🗑️
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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

export default Student;
