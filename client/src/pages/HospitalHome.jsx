import React from 'react'
import { useSelector } from 'react-redux';
import Layout from '../components/Shared/Layout/Layout';

const HospitalHome = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <Layout>
            <div className="container px-3">
                <div className="d-flex flex-column mt-4">
                    <h1>Welcome Hospital <i className="text-success">{user?.hospitalName}</i></h1>
                    <h3 className='my-3'>Hospital Of Blood Bank App</h3>
                    <div>
                        <p className="my-3">
                            A "hospital" in the context of a blood bank app refers to a healthcare facility that utilizes the app to manage its blood and blood product needs, as well as to coordinate blood transfusions for patients. Here's some information about how hospitals are involved in a blood bank app:
                        </p>
                        <ol className="my-3">
                            <li>"Blood and Blood Product Requests": Hospitals use the blood bank app to place requests for specific blood types and blood products needed for patient care. These requests are often made based on the patient's medical condition and requirements.</li>
                            <li>"Inventory Management": Hospitals can view the available inventory of blood and blood products through the app. This helps them determine if the needed blood components are in stock or if additional donations are required.</li>
                            <li>"Urgent Requests": In emergency situations where a patient requires immediate blood transfusion, hospitals can use the app to send urgent requests to the blood bank for a quick response.</li>
                            <li>"Patient Matching": The blood bank app assists hospitals in matching the blood type and compatibility of available blood products with the patient's requirements. This ensures that the transfusion is safe and effective.</li>
                            <li>Blood Reservation": Hospitals may reserve specific units of blood or blood products through the app to ensure that they are available when needed for scheduled surgeries or treatments.</li>
                        </ol>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default HospitalHome
