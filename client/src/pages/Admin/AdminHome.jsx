import React from 'react'
import { useSelector } from 'react-redux';
import Layout from '../../components/Shared/Layout/Layout';

const AdminHome = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <Layout>
            <div className="container px-3">
                <div className="d-flex flex-column mt-4">
                    <h1>Welcome Admin <i className="text-success">{user?.name}</i></h1>
                    <h3 className='my-3'>Admin Of Blood Bank App</h3>
                    <p className="my-3">
                        The term "admin" in the context of a blood bank app typically refers to an administrative user or role within the application. The admin role is responsible for managing and overseeing various aspects of the blood bank app, ensuring its smooth operation, and maintaining the integrity of the blood bank's data and processes. Here are some of the key responsibilities and functions of an admin in a blood bank app:
                        <ol className="my-3">
                            <li>"User Management": Admins are typically responsible for creating, managing, and deleting user accounts within the blood bank app. This includes registering donors, recipients, and staff members, as well as managing their permissions and access levels.</li>
                            <li>"Inventory Management": Admins oversee the management of blood and blood product inventory. They monitor stock levels, track expiration dates, and ensure that the blood bank has an adequate supply of blood products to meet the demand.</li>
                            <li>"Donor and Recipient Management": Admins can manage donor and recipient profiles, including updating their information, verifying eligibility, and coordinating blood donations and transfusions.</li>
                            <li>"Record Keeping": Admins maintain records of all blood donations, transfusions, and other relevant data. They ensure the accuracy and completeness of these records, which are critical for tracking blood donations and ensuring patient safety.</li>
                            <li>"Reporting": Admins generate reports and analytics to track the performance and activities of the blood bank. These reports can help identify trends, areas for improvement, and compliance with regulatory requirements.</li>
                        </ol>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default AdminHome
