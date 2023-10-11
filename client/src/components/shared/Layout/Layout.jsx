import React from 'react';
import Header from './Header.jsx';
import SidebarMenu from './SidebarMenu.jsx';


const Layout = ({ children }) => {
    return (
        <>
            <div className="header">
                <Header />
            </div>
            <div className="row g-0">
                <div className="col-md-3">
                    <SidebarMenu />
                </div>
                <div className="col-md-9 p-2">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout
