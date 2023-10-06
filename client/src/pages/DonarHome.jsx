import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../components/shared/Layout/Layout.jsx';

const DonarHome = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <Layout>
            <div className="container px-3">
                <div className="d-flex flex-column mt-4">
                    <h1>Welcome Donar <i className="text-success">{user?.name}</i></h1>
                    <h3 className='my-3'>Donar Of Blood Bank App</h3>
                    <p className="my-3">
                        A "donor" in the context of a blood bank app refers to an individual who voluntarily donates their blood to the blood bank for the purpose of saving lives or providing blood products for medical treatments. Here's some information about donors in a blood bank app:
                        <ol className="my-3">
                            <li>"Registration": Donors can typically register themselves as users of the blood bank app. During registration, they provide personal information such as their name, contact details, and medical history. This information helps the blood bank determine their eligibility to donate blood.</li>
                            <li>"Eligibility Criteria": Donors must meet specific eligibility criteria to ensure the safety of both the donor and the recipients of the donated blood. Eligibility criteria may include age, weight, health status, recent travel history, and lifestyle factors. The app may have a built-in questionnaire to assess eligibility.</li>
                            <li>"Scheduling Donations": Donors can use the app to schedule blood donation appointments at a convenient time and location. Some blood bank apps may also provide notifications to remind donors of their upcoming appointments.</li>
                            <li>"Blood Type and Compatibility": The app may allow donors to provide information about their blood type, which is essential for matching donors with recipients who require specific blood types. Donors may also indicate their willingness to donate specific blood components, such as whole blood, platelets, or plasma.</li>
                            <li>"Donation History": Donors can access their donation history within the app, allowing them to track the number of times they have donated blood, the types of blood products they've donated, and the dates of their donations.</li>
                        </ol>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default DonarHome