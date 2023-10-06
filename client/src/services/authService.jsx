import { userLogin, userRegister, verifyUser } from './../redux/features/auth/authActions.jsx';
import store from './../redux/store';

export const handleLogin = (e, email, password, role) => {
    e.preventDefault()
    try {
        if (!role || !email || !password) {
            return alert("Please Provide All Fields");
        }
        store.dispatch(userLogin({ email, password, role }));

    } catch (error) {
        console.log(error);
    }
};

export const handleRegister = (e, name, role, email, password, organisationName, hospitalName, website, address, phone) => {
    e.preventDefault();
    try {
        store.dispatch(userRegister({ name, role, email, password, organisationName, hospitalName, website, address, phone }));
    } catch (error) {
        console.log(error);
    }
};

export const handleVerifyUser = (e, email) => {
    e.preventDefault();
    try {
        store.dispatch(verifyUser({ email }));
    } catch (error) {
        console.log(error);
    }
}

// export const handleVerifyUser = (e, email) => {
//     e.preventDefault();
//     try {
//         store.dispatch(verifyUser({ email }));
//     } catch (error) {
//         console.log(error);
//     }
// }

export const handleLogout = () => { };