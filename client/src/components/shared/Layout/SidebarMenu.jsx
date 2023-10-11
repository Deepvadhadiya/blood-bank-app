import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../../../styles/Layout.css';
import { useSelector } from 'react-redux';

const SidebarMenu = () => {
  //get user state
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();
  return (
      <div>
          <div className="sidebar">
              <div className="menu">
                  {user?.role === "organisation" && (
                      <>
                          <div className={`menu-item ${location.pathname === "/" && 'active'}`}>
                              <i className="fa-solid fa-warehouse"></i>
                              <Link to="/">Inventory</Link>
                          </div>
                          <div className={`menu-item ${location.pathname === "/donar" && 'active'}`}>
                              <i className="fa-solid fa-hand-holding-medical"></i>
                              <Link to="/donar">Donar</Link>
                          </div>
                          <div className={`menu-item ${location.pathname === "/hospital" && 'active'}`}>
                              <i className="fa-solid fa-hospital"></i>
                              <Link to="/hospital">Hospital</Link>
                          </div>
                      </>
                  )}
                  {(user?.role === "donar" || user?.role === "hospital") && (
                      <div className={`menu-item ${location.pathname === "/organisation" && 'active'}`}>
                          <i className="fa-solid fa-building-ngo"></i>
                          <Link to="/organisation">Organisation</Link>
                      </div>
                  )}
                  {user?.role === "hospital" && (
                      <div className={`menu-item ${location.pathname === "/consumer" && 'active'}`}>
                          <i className="fa-solid fa-user"></i>
                          <Link to="/consumer">Consumer</Link>
                      </div>
                  )}
                  {user?.role === "donar" && (
                      <div className={`menu-item ${location.pathname === "/donation" && 'active'}`}>
                          <i className="fa-solid fa-user"></i>
                          <Link to="/donation">Donation</Link>
                      </div>
                  )}
                  {user?.role === "admin" && (
                      <>
                          <div className={`menu-item ${location.pathname === "/donar-list" && 'active'}`}>
                              <i className="fa-solid fa-warehouse"></i>
                              <Link to="/donar-list">Donar List</Link>
                          </div>
                          <div className={`menu-item ${location.pathname === "/hospital-list" && 'active'}`}>
                              <i className="fa-solid fa-hand-holding-medical"></i>
                              <Link to="/hospital-list">Hospital List</Link>
                          </div>
                          <div className={`menu-item ${location.pathname === "/organisation-list" && 'active'}`}>
                              <i className="fa-solid fa-hospital"></i>
                              <Link to="/organisation-list">Organisation</Link>
                          </div>
                      </>
                  )}
                  {/* <div className={`menu-item ${location.pathname === "/" && 'active'}`}>
                      <i className="fa-solid fa-warehouse"></i>
                      <Link to="/">Inventory</Link>
                  </div>
                  <div className={`menu-item ${location.pathname === "/donar" && 'active'}`}>
                      <i className="fa-solid fa-hand-holding-medical"></i>
                      <Link to="/donar">Donar</Link>
                  </div>
                  <div className={`menu-item ${location.pathname === "/hospital" && 'active'}`}>
                      <i className="fa-solid fa-hospital"></i>
                      <Link to="/hospital">Hospital</Link>
                  </div>
                  <div className={`menu-item ${location.pathname === "/organisation" && 'active'}`}>
                      <i className="fa-solid fa-building-ngo"></i>
                      <Link to="/organisation">Organisation</Link>
                  </div> */}

                  {/* {userMenu.map((menu) => {
                      const isActive = location.pathname === menu.path
                      return (
                          <div key={menu.name} className={`menu-item ${isActive && 'active'}`}>
                              <i className={menu.icon}></i>
                              <Link to={menu.path}>{menu.name}</Link>
                          </div>
              )
                  })} */}
              </div>
          </div>
      </div>
  )
}

export default SidebarMenu
