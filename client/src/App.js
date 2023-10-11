import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Auth/Login.jsx';
import Register from './pages/Auth/Register.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/Routes/ProtectedRoute.jsx';
import PublicRoute from './components/Routes/PublicRoute.jsx';
import Verificationmsg from './pages/Auth/Verificationmsg.jsx';
import DonarHome from './pages/DonarHome.jsx';
import Analytics from './pages/Dashboard/Analytics';
import AdminHome from './pages/Admin/AdminHome.jsx';
import DonarList from './pages/Admin/DonarList';
import HospitalList from './pages/Admin/HospitalList.jsx';
import Consumer from './pages/Dashboard/Consumer.jsx';
import Donar from './pages/Dashboard/Donar.jsx';
import Organisation from './pages/Dashboard/Organisation.jsx';
import Hospital from './pages/Dashboard/Hospital';
import Donation from './pages/Donation';
import HospitalHome from './pages/HospitalHome.jsx';
import OrganisationList from './pages/Admin/OrganisationList.jsx';

function App() {
  return (
    <div>

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
          path='/hospital-home'
          element={
            <ProtectedRoute>
              <HospitalHome />
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
          path='/donation'
          element={
            <ProtectedRoute>
              <Donation />
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
              <Verificationmsg />
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
    </div>
  );
}

export default App;
