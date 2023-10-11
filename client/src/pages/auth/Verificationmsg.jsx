import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/verifyEmailMsg.css';

const Verificationmsg = () => {
    return (
        <div className='antialiased border-top-wide border-primary d-flex justify-content-center' style={{ margin: '50px 0' }}>
            <div className="flex-fill d-flex justify-content-center py-4">
                <div className="container-tight py-4">
                    <h1 className="bg-success text-center mb-4 navbar-brand d-block">
                        <Link to="/" className='text-danger' style={{ textDecoration: 'none' }}>
                            Blood Bank
                        </Link>
                    </h1>
                    <div className="card card-md">
                        <div className="card-body">
                            <h5 className="card-title text-center mb-4">Verify Your Email Address</h5>
                            <p className="text-center">A verification link has been sent to: <h6 className="text-center">Your Email</h6></p>
                            <p className="text-center">Please click the button in the message to confirm your email address.</p>
                        </div>
                    </div>
                    <div className="text-center text-muted mt-3">
                        <div className="text-center text-muted">
                            <Link className="btn btn-primary" to="/login" style={{ textDecoration: 'none' }}>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Verificationmsg
