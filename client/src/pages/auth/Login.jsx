import React from 'react';
import Form from '../../components/Shared/Form/Form.jsx';
import { useSelector } from 'react-redux';
import Spinner from './../../components/Shared/Spinner.jsx';

const Login = () => {
    const { loading, error } = useSelector((state) => state.auth)
    return (
        <>
            {
                error && <span>{alert(error)}</span>
            }
            {
                loading ? <Spinner /> : (
                    <div className="row g-0">
                        <div className="col-12 col-md-6 col-lg-7 form-banner">
                            <img src="./assest/images/banner1.jpg" alt="loginImg" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-5 form-container">
                            <Form
                                formTitle={'Login'}
                                submitBtn={'Login'}
                                formType={"login"}
                            />
                        </div>

                    </div>
                )
            }
        </>
    )
}

export default Login
