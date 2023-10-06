import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/auth/Login.jsx';
import Register from './pages/auth/Register.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/Routes/ProtectedRoute.jsx';
import PublicRoute from './components/Routes/PublicRoute.jsx';
import Donar from './pages/Dashboard/Donar.jsx';
import Hospital from './pages/Dashboard/Hospital.jsx';
import Organisation from './pages/Dashboard/Organisation.jsx';
import Consumer from './pages/Dashboard/Consumer.jsx';
import Donation from './pages/Donation.jsx';
import Analytics from './pages/Dashboard/Analytics.jsx';
import DonarList from './pages/Admin/DonarList.jsx';
import HospitalList from './pages/Admin/HospitalList.jsx';
import OrganisationList from './pages/Admin/OrganisationList.jsx';
import AdminHome from './pages/Admin/AdminHome.jsx';
import DonarHome from './pages/DonarHome.jsx';
import HospitalHome from './pages/HospitalHome.jsx';
import Authorization from './pages/auth/Authorization.jsx';

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path='/donar'
          element={
            <ProtectedRoute>
              <Donar />
            </ProtectedRoute>
          }
        />
        <Route
          path='/analytics'
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path='/donar-list'
          element={
            <ProtectedRoute>
              <DonarList />
            </ProtectedRoute>
          }
        />
        <Route
          path='/hospital-list'
          element={
            <ProtectedRoute>
              <HospitalList />
            </ProtectedRoute>
          }
        />
        <Route
          path='/admin'
          element={
            <ProtectedRoute>
              <AdminHome />
            </ProtectedRoute>
          }
        />
        <Route
          path='/donar-home'
          element={
            <ProtectedRoute>
              <DonarHome />
            </ProtectedRoute>
          }
        />
        <Route
          path='/hospital-home'
          element={
            <ProtectedRoute>
              <HospitalHome />
            </ProtectedRoute>
          }
        />
        <Route
          path='/organisation-list'
          element={
            <ProtectedRoute>
              <OrganisationList />
            </ProtectedRoute>
          }
        />
        <Route
          path='/hospital'
          element={
            <ProtectedRoute>
              <Hospital />
            </ProtectedRoute>
          }
        />
        <Route
          path='/organisation'
          element={
            <ProtectedRoute>
              <Organisation />
            </ProtectedRoute>
          }
        />
        <Route
          path='/consumer'
          element={
            <ProtectedRoute>
              <Consumer />
            </ProtectedRoute>
          }
        />
        <Route
          path='/donation'
          element={
            <ProtectedRoute>
              <Donation />
            </ProtectedRoute>
          }
        />
        <Route
          path='/login'
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path='/verify-email'
          element={
            <PublicRoute>
              <Authorization />
            </PublicRoute>
          }
        />
        <Route
          path='/register'
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
