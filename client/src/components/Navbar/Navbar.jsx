import React from 'react';
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg " id="navbarNav">
            <div className="container">
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="client/src/components/Navbar/Navbar#about">About us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="client/src/components/Navbar/Navbar#services_we_provide">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="client/src/components/Navbar/Navbar#our_process">Our Process</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="client/src/components/Navbar/Navbar#get_in_touch">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;