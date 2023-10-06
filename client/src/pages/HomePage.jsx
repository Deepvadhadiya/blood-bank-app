import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../components/shared/Spinner.jsx';
import Layout from '../components/shared/Layout/Layout.jsx';
import Modal from '../components/shared/modal/Modal.jsx';
import API from '../services/API.jsx';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate(); 
  //get function
  const getBloodRecord = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getBloodRecord();
  }, []);

  return (
    <Layout>
      {
        user?.role === "admin" && navigate('/admin')
      }
      {
        user?.role === "donar" && navigate('/donar-home')
      }
      
      {
        user?.role === "hospital" && navigate('/hospital-home')
      }
      {
        error && <span>{alert(error)}</span>
      }
      {
        loading ? (
          <Spinner />
        ) : (
          <>
            <div className="container">
              <h4 className="ms-4 d-flex align-items-center" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ cursor: "pointer" }}>
                <i className="fa-solid fa-plus text-success py-4"></i>
                &nbsp; Add Inventory
              </h4>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Inventory Type</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Donar Email</th>
                    <th scope="col">Time & Date</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((record) => (
                    <tr key={record._id}>
                      <td>{record.bloodGroup}</td>
                      <td>{record.inventoryType}</td>
                      <td>{record.quantity} (ML)</td>
                      <td>{record.email}</td>
                      <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Modal />
            </div>
          </>
        )
      }
    </Layout>
  )
}

export default HomePage
