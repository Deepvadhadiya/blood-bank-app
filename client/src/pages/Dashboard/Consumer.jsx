import React, { useEffect, useState } from 'react';
import Layout from '../../components/shared/Layout/Layout.jsx';
import API from '../../services/API.jsx';
import moment from 'moment';
import { useSelector } from 'react-redux';

const Consumer = () => {
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    //find donar records
    const getDonars = async () => {
        try {
            const { data } = await API.post('/inventory/get-inventory-hospital', {
                filters: {
                    inventoryType: "out",
                    hospital: user?._id,
                },
            });
            // console.log(data);
            if (data?.success) {
                setData(data?.inventory);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getDonars();
        // eslint-disable-next-line
    }, [])

    return (
        <Layout>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Blood Group</th>
                        <th scope="col">Inventory Type</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Email</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((record) => (
                        <tr key={record._id}>
                            <td>{record.bloodGroup}</td>
                            <td>{record.inventoryType}</td>
                            <td>{record.quantity}</td>
                            <td>{record.email}</td>
                            <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}

export default Consumer
