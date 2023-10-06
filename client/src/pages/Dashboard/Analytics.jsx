import React, { useState, useEffect } from 'react'
import Header from '../../components/shared/Layout/Header.jsx'
import API from './../../services/API.jsx';
import moment from 'moment';

const Analytics = () => {
    const [data, setData] = useState([]);
    const [inventoryData, setInventoryData] = useState([]);
    const colors = [
        "#F8F0E5",
        "#EADBC8",
        "#DAC0A3",
        "#FFE4D6",
        "#9EDDFF",
        "#2E97A7",
        "#AED2FF",
        "#E4F1FF",
    ]

    //get blood group data
    const getBloodGroupData = async () => {
        try {
            const { data } = await API.get('/analytics//bloodGroups-data');
            if (data?.success) {
                setData(data?.bloodGroupData)
                // console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getBloodGroupData();
    }, []);

    //get function
    const getBloodRecord = async () => {
        try {
            const { data } = await API.get("/inventory/get-recent-inventory");
            if (data?.success) {
                setInventoryData(data?.inventory);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getBloodRecord();
    }, []);

    return (
        <>
            <Header />
            <div className="d-flex flex-row flex-wrap justify-content-evenly mt-3">
                {
                    data?.map((record, i) => (
                        <div key={i} className="card m-2 p-1" style={{ width: '18rem', backgroundColor: `${colors[i]}` }}>
                            <div className="card-body">
                                <h1 className="card-title bg-light text-dark text-center mb-3">{record.bloodGroup}</h1>
                                <p className="card-text">
                                    Total In :- <b>{record.totalIn}</b> (ML)
                                </p>
                                <p className="card-text">
                                    Total Out :- <b>{record.totalOut}</b> (ML)
                                </p>
                            </div>
                            <div className="card-footer text-light bg-dark text-center">
                                Total Available :- <b>{record.availableBlood}</b> (ML)
                            </div>
                        </div>

                    ))
                }
            </div>

            <div className="container my-3">
                <h1 className="text-center my-3">Recent Blood Transaction</h1>
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
                        {inventoryData?.map((record) => (
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
            </div>
        </>
    )
}

export default Analytics
