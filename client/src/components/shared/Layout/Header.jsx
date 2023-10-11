import React from 'react';
import { BiDonateBlood, BiUserCircle } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Header = () => {
    const { user } = useSelector(state => state.auth);
    const navigate = useNavigate();
    const location = useLocation();
    //logout handler
    const handleLogout = () => {
        localStorage.clear();
        toast.success("Logout Successfully");
        navigate('/login');
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <div className="navbar-brand">
                        <BiDonateBlood className="mx-2" color="red" />
                        Blood Bank App
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item mx-3">
                                <p className="align-items-center d-flex m-0"><BiUserCircle className="mx-2" />Welcome {user?.name || user?.hospitalName || user?.organisationName} &nbsp;<span className="badge bg-secondary text-capitalize">{user?.role}</span></p>
                            </li>
                            {
                                (location.pathname === "/" || location.pathname === "/donar" || location.pathname === "/hospital") ? (
                                    <li className="nav-item mx-3">
                                        <Link to="/analytics" className="m-0 nav-item nav-link btn btn-primary">
                                            Analytics
                                        </Link>
                                    </li>
                                ) : (
                                    <li className="nav-item mx-3">
                                        <Link to="/" className="m-0 nav-item nav-link btn btn-primary">
                                            Home
                                        </Link>
                                    </li>
                                )
                            }
                            <li className="nav-item mx-3">
                                <button className="btn btn-danger" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
