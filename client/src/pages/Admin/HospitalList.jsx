import React, { useEffect, useState } from 'react';
import Layout from '../../components/shared/Layout/Layout.jsx';
import API from '../../services/API.jsx';
import moment from 'moment';
import { toast } from 'react-toastify';

const HospitalList = () => {
  const [data, setData] = useState([]);
  //find donar records
  const getDonars = async () => {
    try {
      const { data } = await API.get('/admin/hospital-list');
      // console.log(data);
      if (data?.success) {
        setData(data?.hospitalData);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDonars();
  }, []);

  //delete function
  const handleDelete = async (id) => {
    try {
      let answer = window.prompt('Are you Sure Want To Delete This Hospital', "Sure");
      if (!answer) return;
      const { data } = await API.delete(`/admin/delete-donar/${id}`);
      toast.success(data?.message);
      setTimeout(function() {
        window.location.reload();
      }, 6000);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((record) => (
            <tr key={record._id}>
              <td>{record.hospitalName}</td>
              <td>{record.email}</td>
              <td>{record.phone}</td>
              <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
              <td>
                <button className="btn btn-danger" onClick={() => handleDelete(record._id)}>
                  <span><i className="fa-solid fa-trash me-2"></i>Delete</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default HospitalList
