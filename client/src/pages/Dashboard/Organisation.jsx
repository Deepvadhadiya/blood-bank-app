import React, { useEffect, useState } from 'react';
import Layout from '../../components/shared/Layout/Layout.jsx';
import API from '../../services/API.jsx';
import moment from 'moment';
import { useSelector } from 'react-redux';

const Organisation = () => {
    //get current user
    const { user } = useSelector((state) => state.auth);

    const [data, setData] = useState([]);
    //find Org records
    const getOrg = async () => {
        try {
            if (user?.role === "donar") {
                const { data } = await API.get('/inventory/get-organisations');
                // console.log(data);
                if (data?.success) {
                    setData(data?.organisations);
                }
                // console.log(data);
            }
            if (user?.role === "hospital") {
                const { data } = await API.get('/inventory/get-organisations-for-hospital');
                // console.log(data);
                if (data?.success) {
                    setData(data?.organisations);
                }
                // console.log(data);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getOrg();
        // eslint-disable-next-line
    }, [user]);

    return (
        <Layout>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((record) => (
                        <tr key={record._id}>
                            <td>{record.organisationName}</td>
                            <td>{record.email}</td>
                            <td>{record.phone}</td>
                            <td>{record.address}</td>
                            <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}

export default Organisation
