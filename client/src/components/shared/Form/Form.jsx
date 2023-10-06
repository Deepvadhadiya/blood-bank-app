import React, { useState } from "react";
import InputType from "./InputType.jsx";
import { Link } from 'react-router-dom';
import { handleLogin, handleRegister } from "../../../services/authService.jsx";

const Form = ({ formType, submitBtn, formTitle }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('donar');
    const [name, setName] = useState('');
    const [organisationName, setOrganisationName] = useState('');
    const [hospitalName, setHospitalName] = useState('');
    const [website, setWebsite] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <div>
            <form onSubmit={(e) => { 
                if (formType === 'login') return handleLogin(e, email, password, role);
                else if (formType === 'register') return handleRegister(e, name, role, email, password, organisationName, hospitalName, website, address, phone);
            }}>
                <h1 className="text-center">{formTitle}</h1>
                <hr />
                <div className="d-flex mb-3">
                    <div className="form-check">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="role"
                            id="donarRadio"
                            value={'donar'}
                            onChange={(e) => setRole(e.target.value)} defaultChecked />
                        <label htmlFor="donarRadio" className="form-check-lable">Donar</label>
                    </div>
                    <div className="form-check ms-3">
                        <input type="radio" name="role" id="adminRadio" value={'admin'} className="form-check-input" onChange={(e) => setRole(e.target.value)} />
                        <label htmlFor="adminRadio" className="form-check-lable">Admin</label>
                    </div>
                    <div className="form-check ms-3">
                        <input type="radio" name="role" id="hospitalRadio" value={'hospital'} className="form-check-input" onChange={(e) => setRole(e.target.value)} />
                        <label htmlFor="hospitalRadio" className="form-check-lable">Hospital</label>
                    </div>
                    <div className="form-check ms-3">
                        <input type="radio" name="role" id="organisationRadio" value={'organisation'} className="form-check-input" onChange={(e) => setRole(e.target.value)} />
                        <label htmlFor="organisationRadio" className="form-check-lable">Organisation</label>
                    </div>

                </div>
                {/* switch statement */}
                {(() => {
                    // eslint-disable-next-line
                    switch (true) {
                        // eslint-disable-next-line
                        case formType === "login": {
                            return (
                                <>
                                    <InputType lableText={'Email'} lableFor={'forEmail'} inputType={'email'} name={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />

                                    <InputType lableText={'Password'} lableFor={'forPassword'} inputType={'password'} name={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                                </>
                            )
                        }
                        // eslint-disable-next-line
                        case formType === "register": {
                            return (
                                <>
                                    {
                                        (role === 'admin' || role === 'donar') && (
                                            <InputType lableText={'Name'} lableFor={'forName'} inputType={'text'} name={'name'} value={name} onChange={(e) => setName(e.target.value)} />
                                        )
                                    }

                                    {
                                        (role === 'organisation') && (
                                            <InputType lableText={'Organisation Name'} lableFor={'forOrganisationName'} inputType={'text'} name={'OrganisationName'} value={organisationName} onChange={(e) => setOrganisationName(e.target.value)} />
                                        )
                                    }

                                    {
                                        (role === 'hospital') && (
                                            <InputType lableText={'Hospital Name'} lableFor={'forHospitalName'} inputType={'text'} name={'hospitalName'} value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />
                                        )
                                    }

                                    <InputType lableText={'Email'} lableFor={'forEmail'} inputType={'email'} name={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />

                                    <InputType lableText={'Password'} lableFor={'forPassword'} inputType={'password'} name={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />

                                    <InputType lableText={'Website'} lableFor={'forWebsite'} inputType={'text'} name={'website'} value={website} onChange={(e) => setWebsite(e.target.value)} />

                                    <InputType lableText={'Address'} lableFor={'forAddress'} inputType={'text'} name={'address'} value={address} onChange={(e) => setAddress(e.target.value)} />

                                    <InputType lableText={'Phone'} lableFor={'forPhone'} inputType={'text'} name={'phone'} value={phone} onChange={(e) => setPhone(e.target.value)} />
                                </>
                            )
                        }
                    }
                })()}
                <div className="d-flex align-items-center justify-content-evenly">
                    {formType === 'login' ? (<p className="m-0">Not Registerd yet <Link to="/register">Register Here</Link></p>) : (<p className="m-0">Already User Please <Link to="/login">Login here</Link></p>)}
                    <button className="btn btn-primary" type="submit">
                        {submitBtn}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form
